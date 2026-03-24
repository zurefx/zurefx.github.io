---
TitleSEO: "PwnTillDawn — Seal (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Seal (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Seal. Resource-Based Constrained Delegation and SeDebugPrivilege to achieve hard compromise on FreeBSD."
Keywords: "hard, insane, linux, medium, reversing"
URL: "https://zurefx.github.io/writeups/htb-seal-953.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-953/"
Date: "2025-10-25"
Tags: "Hard, Insane, Linux, Medium, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-953"
Permalink: "/writeups/htb-seal-953.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.99.51.231`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.31.58.96 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.106.81.92 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.21.130
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.208.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.194.24/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.163.25/FUZZ
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **SeDebugPrivilege**.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p993,80,5986 10.98.207.156 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.147.169/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.27.32.190 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.38.104.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.116.149/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `kerbrute`
- `netcat`
- `psexec`
- `hydra`
- `sharphound`
- `socat`
- `secretsdump`
- `feroxbuster`

### Key Takeaways

- Resource-Based Constrained Delegation
- SeDebugPrivilege
- Cron Job
