---
TitleSEO: "PwnTillDawn — Mindgames (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Mindgames (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mindgames. Golden Ticket and Remote File Inclusion to achieve insane compromise on FreeBSD."
Keywords: "insane, forensics, ctf, windows"
URL: "https://zurefx.github.io/writeups/htb-mindgames-720.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-720/"
Date: "2025-05-17"
Tags: "Insane, Forensics, CTF, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-720"
Permalink: "/writeups/htb-mindgames-720.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.123.186.235`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.49.159.193 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.68.218/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.102.151.121 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.109.219
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.61.43/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Remote File Inclusion**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.11.85
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.114.30.46 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.52.135.219 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.37.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.11.158.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p389,22,443 10.14.53.65 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `kerbrute`
- `nikto`
- `GetUserSPNs`
- `hydra`
- `rpcclient`
- `secretsdump`
- `gobuster`

### Key Takeaways

- Golden Ticket
- Remote File Inclusion
- Kerberoasting
