---
TitleSEO: "PwnTillDawn — Ready (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Ready (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ready. SUID Binary and SQL Injection to achieve medium compromise on Linux."
Keywords: "hard, insane, active directory, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-ready-161.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-161/"
Date: "2025-10-01"
Tags: "Hard, Insane, Active Directory, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-161"
Permalink: "/writeups/htb-ready-161.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.13.35.137`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.67.100.168 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,25,135 10.50.80.240 -oN scan.txt
gobuster dir -u http://10.66.156.101/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.117.233.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.25.109.225 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.89.199.120 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.37.202 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **SQL Injection**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.58.238.51 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3389,443,139 10.60.189.67 -oN scan.txt
gobuster dir -u http://10.39.168.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.13.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.49.88.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.164.106/FUZZ
```

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `atexec`
- `psexec`
- `lookupsid`
- `evil-winrm`
- `socat`
- `wmiexec`

### Key Takeaways

- SUID Binary
- SQL Injection
- SSTI
