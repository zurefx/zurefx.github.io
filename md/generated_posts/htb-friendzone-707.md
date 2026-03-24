---
TitleSEO: "HackTheBox — FriendZone (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — FriendZone (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox FriendZone. Writable PATH and XSS to achieve easy compromise on Windows."
Keywords: "linux, web, offsec, windows"
URL: "https://zurefx.github.io/writeups/htb-friendzone-707.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-707/"
Date: "2025-01-19"
Tags: "Linux, Web, OffSec, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-707"
Permalink: "/writeups/htb-friendzone-707.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **FriendZone** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.128.228.21`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.56.136.16 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.116.171.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.202.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.1.115/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

Key finding: **XSS**.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.5.45
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p53,1433,3306 10.60.64.191 -oN scan.txt
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.97.222.136 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.129.199
gobuster dir -u http://10.96.180.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `bloodhound`
- `impacket`
- `GetNPUsers`
- `mimikatz`
- `smbexec`

### Key Takeaways

- Writable PATH
- XSS
- GPP Password
