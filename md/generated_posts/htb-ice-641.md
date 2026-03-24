---
TitleSEO: "HackTheBox — Ice (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — Ice (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ice. XSS and AS-REP Roasting to achieve medium compromise on Windows."
Keywords: "hackthebox, offsec, hard"
URL: "https://zurefx.github.io/writeups/htb-ice-641.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-641/"
Date: "2025-07-05"
Tags: "HackTheBox, OffSec, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-641"
Permalink: "/writeups/htb-ice-641.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.107.192.118`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.91.190
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.50.168.148 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **XSS**.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.209.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.127.13.50 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.162.190 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.82.123.141 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.24.63/FUZZ
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.92.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.23.181.86 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `nikto`
- `netcat`
- `nmap`
- `wmiexec`
- `kerbrute`
- `sqlmap`
- `hashcat`
- `msfvenom`

### Key Takeaways

- XSS
- AS-REP Roasting
