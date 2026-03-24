---
TitleSEO: "OffSec Proving Grounds — Admirer (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Admirer (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Admirer. Subdomain Takeover and SSRF to achieve insane compromise on Windows."
Keywords: "easy, windows, medium, insane, pwntilldawn, offsec"
URL: "https://zurefx.github.io/writeups/htb-admirer-619.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-619/"
Date: "2024-06-08"
Tags: "Easy, Windows, Medium, Insane, PwnTillDawn, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-619"
Permalink: "/writeups/htb-admirer-619.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Admirer** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.121.111.130`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.69.253.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.120.30
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.82.80
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.21.39/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.6.3/FUZZ
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.57.12.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.126.92.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Key finding: **Subdomain Takeover**.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.77.244.218 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.195.69 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.33.85.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.242.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.121.89.12 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `nmap`
- `ligolo-ng`
- `chisel`
- `metasploit`
- `psexec`
- `ffuf`

### Key Takeaways

- Subdomain Takeover
- SSRF
