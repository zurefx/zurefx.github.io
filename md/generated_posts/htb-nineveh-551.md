---
TitleSEO: "OffSec Proving Grounds — Nineveh (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Nineveh (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Nineveh. AlwaysInstallElevated and DCSync to achieve medium compromise on Windows."
Keywords: "ctf, offsec, hackthebox, active directory"
URL: "https://zurefx.github.io/writeups/htb-nineveh-551.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-551/"
Date: "2025-06-13"
Tags: "CTF, OffSec, HackTheBox, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-551"
Permalink: "/writeups/htb-nineveh-551.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Nineveh** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.14.19.163`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.85.119.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.100.174/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.210.234
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.41.182.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **DCSync**.

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.42.170
evil-winrm -i 10.90.177.130 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.89.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.211.174
```

### Exploitation

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `ligolo-ng`
- `pwncat`
- `wmiexec`
- `GetNPUsers`
- `msfvenom`
- `smbexec`
- `gobuster`
- `wpscan`

### Key Takeaways

- AlwaysInstallElevated
- DCSync
- Docker Escape
- IDOR
