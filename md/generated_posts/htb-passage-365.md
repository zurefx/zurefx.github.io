---
TitleSEO: "TryHackMe — Passage (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Passage (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Passage. Command Injection and Remote File Inclusion to achieve easy compromise on OpenBSD."
Keywords: "web, ctf, easy, reversing"
URL: "https://zurefx.github.io/writeups/htb-passage-365.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-365/"
Date: "2024-10-04"
Tags: "Web, CTF, Easy, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-365"
Permalink: "/writeups/htb-passage-365.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Passage** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.37.216.205`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p389,5985,443 10.113.115.145 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.150.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.119.200.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Command Injection**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.6.245 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.121.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.102.241.207 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.19.95 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.200.147
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `ldapsearch`
- `psexec`
- `rubeus`
- `evil-winrm`
- `atexec`
- `gobuster`

### Key Takeaways

- Command Injection
- Remote File Inclusion
