---
TitleSEO: "PwnTillDawn — Seal (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Seal (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Seal. Silver Ticket and SSTI to achieve insane compromise on Windows."
Keywords: "pwntilldawn, reversing, forensics"
URL: "https://zurefx.github.io/writeups/htb-seal-343.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-343/"
Date: "2025-11-26"
Tags: "PwnTillDawn, Reversing, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-343"
Permalink: "/writeups/htb-seal-343.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.81.61.29`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.6.120
evil-winrm -i 10.34.9.3 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.11.172
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.106.1.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.218.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.161.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.36.72/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SSTI**.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.48.207.29 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.43.198.244 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.178.67/FUZZ
nmap -sCV -p993,445,5986 10.16.214.6 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8888,135,995 10.29.129.203 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `psexec`
- `sharphound`
- `metasploit`
- `hydra`
- `nmap`
- `dcomexec`
- `enum4linux`
- `mimikatz`

### Key Takeaways

- Silver Ticket
- SSTI
