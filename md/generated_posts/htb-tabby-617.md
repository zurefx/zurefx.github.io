---
TitleSEO: "VulnHub — Tabby (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Tabby (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tabby. LXD Privilege Escalation and Pass the Hash to achieve hard compromise on Linux."
Keywords: "linux, offsec, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-tabby-617.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-617/"
Date: "2025-11-11"
Tags: "Linux, OffSec, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-617"
Permalink: "/writeups/htb-tabby-617.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tabby** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.27.161.47`.

### Objectives

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,993,9200 10.97.125.146 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.164.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.78.201.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.55.125/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.23.239
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.88.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.128.70.204 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Key finding: **LXD Privilege Escalation**.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.110.238.67 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
evil-winrm -i 10.20.138.68 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.79.46.194 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.123.25.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1433,25,443 10.56.136.98 -oN scan.txt
nmap -sCV -p636,8443,135 10.70.176.120 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `sharphound`
- `ffuf`
- `rpcclient`
- `wmiexec`
- `gobuster`
- `ldapsearch`
- `lookupsid`

### Key Takeaways

- LXD Privilege Escalation
- Pass the Hash
