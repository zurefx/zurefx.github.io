---
TitleSEO: "PwnTillDawn — Internal (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Internal (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Internal. Pass the Ticket and Kerberoasting to achieve insane compromise on Windows."
Keywords: "active directory, linux, insane, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-internal-468.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-internal-468/"
Date: "2025-04-25"
Tags: "Active Directory, Linux, Insane, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-internal-468"
Permalink: "/writeups/htb-internal-468.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Internal** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.125.119.112`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.234.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.16.180.221 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.14.136.126 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.100.63
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.104.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Key finding: **LXD Privilege Escalation**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.19.119
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```powershell
gobuster dir -u http://10.35.44.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.124.100/FUZZ
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.207.21/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.94.95/FUZZ
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `sharphound`
- `enum4linux`
- `gobuster`
- `evil-winrm`

### Key Takeaways

- Pass the Ticket
- Kerberoasting
- LXD Privilege Escalation
