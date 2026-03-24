---
TitleSEO: "PwnTillDawn — Nineveh (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Nineveh (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nineveh. NFS No Root Squash and AlwaysInstallElevated to achieve hard compromise on Linux."
Keywords: "linux, active directory, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-nineveh-889.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-889/"
Date: "2024-03-27"
Tags: "Linux, Active Directory, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-889"
Permalink: "/writeups/htb-nineveh-889.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.75.134.47`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.107.55.98 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
nmap -sCV -p1521,1521,389 10.18.182.218 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Remote Code Execution**.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.213.254
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.57.185/FUZZ
gobuster dir -u http://10.10.223.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p110,9200,5985 10.68.191.124 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.75.171.167 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.96.108.67 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `impacket`
- `netcat`
- `atexec`
- `hashcat`

### Key Takeaways

- NFS No Root Squash
- AlwaysInstallElevated
- Remote Code Execution
- Silver Ticket
