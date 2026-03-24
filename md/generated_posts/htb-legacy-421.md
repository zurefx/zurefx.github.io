---
TitleSEO: "PwnTillDawn — Legacy (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Legacy (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Legacy. Remote File Inclusion and Docker Escape to achieve hard compromise on Windows."
Keywords: "easy, tryhackme, forensics, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-legacy-421.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-421/"
Date: "2025-12-24"
Tags: "Easy, TryHackMe, Forensics, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-421"
Permalink: "/writeups/htb-legacy-421.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.62.115.61`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.28.174.61 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.97.161.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.105.84/FUZZ
nmap -sCV -p23,636,21 10.32.91.82 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.237.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.240.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **XSS**.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.21.35/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.120.33.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `rpcclient`
- `atexec`
- `nmap`
- `bloodhound`
- `ligolo-ng`
- `john`

### Key Takeaways

- Remote File Inclusion
- Docker Escape
- XSS
- NFS No Root Squash
