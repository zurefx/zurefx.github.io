---
TitleSEO: "PwnTillDawn — Traverxec (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. ACL Abuse and Unconstrained Delegation to achieve easy compromise on OpenBSD."
Keywords: "medium, forensics, web, hard"
URL: "https://zurefx.github.io/writeups/htb-traverxec-103.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-103/"
Date: "2024-12-18"
Tags: "Medium, Forensics, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-103"
Permalink: "/writeups/htb-traverxec-103.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Traverxec** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.46.25.122`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.48.33.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.218.210/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.33.203/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.43.185.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **ACL Abuse**.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.100.123.140 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.16.229.10 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.118.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.28.228
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `wpscan`
- `hashcat`
- `mimikatz`
- `metasploit`
- `evil-winrm`
- `secretsdump`
- `chisel`

### Key Takeaways

- ACL Abuse
- Unconstrained Delegation
- GPP Password
