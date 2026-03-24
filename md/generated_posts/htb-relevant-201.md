---
TitleSEO: "TryHackMe — Relevant (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Relevant (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Relevant. NTLM Relay and DNS Rebinding to achieve insane compromise on OpenBSD."
Keywords: "reversing, windows, easy, hard, medium, ctf"
URL: "https://zurefx.github.io/writeups/htb-relevant-201.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-201/"
Date: "2025-07-17"
Tags: "Reversing, Windows, Easy, Hard, Medium, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-201"
Permalink: "/writeups/htb-relevant-201.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Relevant** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.117.208.154`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.246.50/FUZZ
gobuster dir -u http://10.62.54.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.12.134/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.30.47.80 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **DNS Rebinding**.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
nmap -sCV -p80,445,23 10.25.219.121 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p23,139,1433 10.57.86.61 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.56.49.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.11.48.27 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p110,3306,53 10.36.83.84 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
crackmapexec smb 10.98.127.199 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,135,110 10.80.190.164 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `feroxbuster`
- `burpsuite`
- `enum4linux`
- `hydra`
- `GetUserSPNs`
- `impacket`
- `rubeus`

### Key Takeaways

- NTLM Relay
- DNS Rebinding
