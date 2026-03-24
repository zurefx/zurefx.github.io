---
TitleSEO: "TryHackMe — Fuse (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Fuse (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Fuse. AlwaysInstallElevated and CORS Misconfiguration to achieve hard compromise on Linux."
Keywords: "windows, pwntilldawn, hackthebox, reversing, forensics, active directory"
URL: "https://zurefx.github.io/writeups/htb-fuse-364.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-364/"
Date: "2025-09-20"
Tags: "Windows, PwnTillDawn, HackTheBox, Reversing, Forensics, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-364"
Permalink: "/writeups/htb-fuse-364.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.95.4.78`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.58.81.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.78.159.83 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.102.61/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.54.116.184 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p443,5985,143 10.37.195.247 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.239.193/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.73.189/FUZZ
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.61.169.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.249.26 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Docker Escape**.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.81.87.88 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.128.2.126 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.113.142.173 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.147.56/FUZZ
evil-winrm -i 10.116.33.161 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `nikto`
- `impacket`
- `feroxbuster`
- `bloodhound`

### Key Takeaways

- AlwaysInstallElevated
- CORS Misconfiguration
- Docker Escape
