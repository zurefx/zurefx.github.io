---
TitleSEO: "OffSec Proving Grounds — Game Zone (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Game Zone (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Game Zone. Command Injection and Pass the Hash to achieve easy compromise on OpenBSD."
Keywords: "windows, ctf, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-game-zone-186.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-game-zone-186/"
Date: "2025-01-27"
Tags: "Windows, CTF, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-game-zone-186"
Permalink: "/writeups/htb-game-zone-186.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Game Zone** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.74.203.202`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.206.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.15.226/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
nmap -sCV -p143,80,8888 10.81.57.173 -oN scan.txt
evil-winrm -i 10.76.155.197 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.154.216
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.68.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **AS-REP Roasting**.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.135.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.119.42.196 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.113.20.246 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
gobuster dir -u http://10.50.137.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `john`
- `smbclient`
- `metasploit`
- `gobuster`
- `burpsuite`
- `socat`

### Key Takeaways

- Command Injection
- Pass the Hash
- SSTI
- AS-REP Roasting
