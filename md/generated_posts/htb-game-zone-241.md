---
TitleSEO: "HackTheBox — Game Zone (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — Game Zone (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Game Zone. AS-REP Roasting and SSTI to achieve medium compromise on Windows."
Keywords: "reversing, hackthebox, ctf, easy"
URL: "https://zurefx.github.io/writeups/htb-game-zone-241.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-game-zone-241/"
Date: "2025-10-01"
Tags: "Reversing, HackTheBox, CTF, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-game-zone-241"
Permalink: "/writeups/htb-game-zone-241.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Game Zone** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.116.203.183`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.38.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p445,53,464 10.19.241.220 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.92.84/FUZZ
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p5986,22,110 10.86.43.210 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.71.11.67 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **XXE**.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p139,9200,9200 10.57.133.167 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
gobuster dir -u http://10.96.94.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.88.178.246 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.19.142.82 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.16.57.140 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.26.125/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `sharphound`
- `hydra`
- `dcomexec`
- `impacket`
- `hashcat`
- `chisel`

### Key Takeaways

- AS-REP Roasting
- SSTI
- XXE
