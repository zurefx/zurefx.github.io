---
TitleSEO: "OffSec Proving Grounds — Sunday (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Sunday (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Sunday. Unquoted Service Path and XSS to achieve insane compromise on Linux."
Keywords: "tryhackme, medium, hackthebox, hard, ctf, easy"
URL: "https://zurefx.github.io/writeups/htb-sunday-644.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-644/"
Date: "2025-04-12"
Tags: "TryHackMe, Medium, HackTheBox, Hard, CTF, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-644"
Permalink: "/writeups/htb-sunday-644.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.72.199.30`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.123.156/FUZZ
crackmapexec smb 10.76.54.33 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.103.244.205 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
evil-winrm -i 10.56.70.179 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,8888,9200 10.22.4.95 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.93.145
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Unquoted Service Path**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p636,5985,5432 10.123.46.191 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.98.40.18 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.219.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.38.21.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.83.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.168.76/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.244.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.128.253.72 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `smbexec`
- `rpcclient`
- `nikto`
- `sqlmap`
- `ligolo-ng`
- `socat`
- `ldapsearch`
- `gobuster`

### Key Takeaways

- Unquoted Service Path
- XSS
- DLL Hijacking
