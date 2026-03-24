---
TitleSEO: "VulnHub — Fuse (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Fuse (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Fuse. Local File Inclusion and Open Redirect to achieve insane compromise on FreeBSD."
Keywords: "forensics, medium, ctf, windows, linux"
URL: "https://zurefx.github.io/writeups/htb-fuse-498.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-498/"
Date: "2025-09-16"
Tags: "Forensics, Medium, CTF, Windows, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-498"
Permalink: "/writeups/htb-fuse-498.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.109.120.145`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.225.217/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.161.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p53,5986,5985 10.118.70.86 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.70.12.246 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Open Redirect**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.94.120/FUZZ
evil-winrm -i 10.85.86.97 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.157.55
crackmapexec smb 10.93.2.113 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.226.42/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.97.105.12 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `bloodhound`
- `secretsdump`
- `psexec`
- `mimikatz`
- `enum4linux`
- `sqlmap`
- `gobuster`
- `impacket`

### Key Takeaways

- Local File Inclusion
- Open Redirect
- Writable PATH
- SeDebugPrivilege
