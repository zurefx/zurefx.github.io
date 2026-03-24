---
TitleSEO: "OffSec Proving Grounds — Blunder (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Blunder (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Blunder. Unquoted Service Path and DLL Hijacking to achieve easy compromise on Windows."
Keywords: "pwntilldawn, easy, medium, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-blunder-351.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-351/"
Date: "2024-03-27"
Tags: "PwnTillDawn, Easy, Medium, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-351"
Permalink: "/writeups/htb-blunder-351.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blunder** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.122.146.17`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.141.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.139.87/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.234.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.228.213
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.67.39/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

Key finding: **DLL Hijacking**.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.102.209/FUZZ
gobuster dir -u http://10.15.180.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.14.143.48 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.89.130.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
gobuster dir -u http://10.23.229.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.32.199.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.168.220/FUZZ
gobuster dir -u http://10.15.97.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.127.59
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `atexec`
- `wpscan`
- `lookupsid`
- `smbclient`
- `ffuf`

### Key Takeaways

- Unquoted Service Path
- DLL Hijacking
