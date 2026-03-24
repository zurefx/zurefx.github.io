---
TitleSEO: "OffSec Proving Grounds — Sense (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Sense (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Sense. Docker Escape and LAPS Abuse to achieve hard compromise on Windows."
Keywords: "reversing, active directory, offsec, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-sense-535.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-535/"
Date: "2025-05-05"
Tags: "Reversing, Active Directory, OffSec, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-535"
Permalink: "/writeups/htb-sense-535.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Sense** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.102.73.205`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.16.177
gobuster dir -u http://10.100.188.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.173.58
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.35.254/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.28.121.211 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

Key finding: **LAPS Abuse**.

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.114.126.108 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.114.59.5 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.87.160.203 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.212.168
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.63.159.147 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
gobuster dir -u http://10.79.131.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.200.225
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbexec`
- `crackmapexec`
- `wpscan`
- `feroxbuster`
- `smbclient`
- `dcomexec`
- `hashcat`
- `metasploit`

### Key Takeaways

- Docker Escape
- LAPS Abuse
- Local File Inclusion
- Kerberoasting
