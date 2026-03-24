---
TitleSEO: "HackTheBox — Tartarsauce (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Tartarsauce (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tartarsauce. Kerberoasting and Silver Ticket to achieve hard compromise on Linux."
Keywords: "reversing, forensics, ctf"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-440.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-440/"
Date: "2025-03-06"
Tags: "Reversing, Forensics, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-440"
Permalink: "/writeups/htb-tartarsauce-440.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.53.122.1`.

### Objectives

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p636,135,53 10.114.89.192 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.49.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.173.57/FUZZ
nmap -sCV -p25,3306,27017 10.102.175.223 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.102.60.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,9200,21 10.27.45.32 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Unquoted Service Path**.

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.159.31
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `msfvenom`
- `burpsuite`
- `ffuf`
- `bloodhound`
- `impacket`
- `smbexec`
- `crackmapexec`

### Key Takeaways

- Kerberoasting
- Silver Ticket
- Unquoted Service Path
