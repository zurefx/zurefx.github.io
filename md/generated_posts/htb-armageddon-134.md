---
TitleSEO: "TryHackMe — Armageddon (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. Command Injection and XXE to achieve medium compromise on FreeBSD."
Keywords: "insane, ctf, windows, tryhackme, hard, medium, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-armageddon-134.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-134/"
Date: "2024-11-09"
Tags: "Insane, CTF, Windows, TryHackMe, Hard, Medium, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-134"
Permalink: "/writeups/htb-armageddon-134.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.69.101.217`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.83.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p25,23,80 10.94.185.55 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.23.113.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
crackmapexec smb 10.78.150.9 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p135,8080,135 10.18.95.21 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

Key finding: **XXE**.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.61.242.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.128.170.164 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.227.175/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.229.217
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.144.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `john`
- `pwncat`
- `enum4linux`
- `socat`
- `mimikatz`
- `hydra`
- `msfvenom`
- `rubeus`

### Key Takeaways

- Command Injection
- XXE
- Local File Inclusion
- Weak Service Permissions
