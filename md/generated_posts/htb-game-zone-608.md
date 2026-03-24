---
TitleSEO: "PwnTillDawn — Game Zone (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Game Zone (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Game Zone. Remote Code Execution and DLL Hijacking to achieve medium compromise on FreeBSD."
Keywords: "linux, web, reversing, active directory, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-game-zone-608.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-game-zone-608/"
Date: "2026-03-17"
Tags: "Linux, Web, Reversing, Active Directory, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-game-zone-608"
Permalink: "/writeups/htb-game-zone-608.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Game Zone** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.71.39.244`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.23.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p25,8888,5986 10.71.45.68 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p636,9200,53 10.103.148.134 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
gobuster dir -u http://10.76.23.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,5985,5986 10.118.212.31 -oN scan.txt
gobuster dir -u http://10.44.238.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

Key finding: **DLL Hijacking**.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.119.7.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.101.111/FUZZ
evil-winrm -i 10.86.117.116 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `netcat`
- `enum4linux`
- `nmap`
- `bloodhound`

### Key Takeaways

- Remote Code Execution
- DLL Hijacking
- XXE
- Silver Ticket
