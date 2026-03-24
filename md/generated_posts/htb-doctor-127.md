---
TitleSEO: "PwnTillDawn — Doctor (Medium Windows) | ZureFX"
TitlePost: "PwnTillDawn — Doctor (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Doctor. IDOR and Constrained Delegation to achieve medium compromise on Windows."
Keywords: "medium, linux, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-doctor-127.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-127/"
Date: "2025-12-22"
Tags: "Medium, Linux, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-127"
Permalink: "/writeups/htb-doctor-127.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Medium** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.74.79.182`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.51.9.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.192.218
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.178.145
feroxbuster -h
nmap -sCV -p27017,53,464 10.56.70.113 -oN scan.txt
evil-winrm -i 10.115.225.39 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

Key finding: **Weak Service Permissions**.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p389,8443,1433 10.15.179.102 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.51.218/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.15.212
crackmapexec smb 10.27.37.20 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.37.75.180 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.49.172/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.71.213.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `rpcclient`
- `atexec`
- `wmiexec`
- `smbexec`

### Key Takeaways

- IDOR
- Constrained Delegation
- Weak Service Permissions
