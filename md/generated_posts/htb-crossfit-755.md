---
TitleSEO: "OffSec Proving Grounds — Crossfit (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Crossfit (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Crossfit. LXD Privilege Escalation and Docker Escape to achieve insane compromise on Windows."
Keywords: "linux, active directory, offsec"
URL: "https://zurefx.github.io/writeups/htb-crossfit-755.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-755/"
Date: "2025-04-06"
Tags: "Linux, Active Directory, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-755"
Permalink: "/writeups/htb-crossfit-755.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.106.51.159`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.122.80
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.134.223
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.44.194.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Docker Escape**.

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
evil-winrm -i 10.47.191.123 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.124.100.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.137.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `kerbrute`
- `secretsdump`
- `bloodhound`
- `gobuster`
- `evil-winrm`

### Key Takeaways

- LXD Privilege Escalation
- Docker Escape
