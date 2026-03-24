---
TitleSEO: "TryHackMe — Passage (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Passage (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Passage. LAPS Abuse and Remote Code Execution to achieve easy compromise on FreeBSD."
Keywords: "pwntilldawn, offsec, active directory, ctf, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-passage-984.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-984/"
Date: "2024-09-24"
Tags: "PwnTillDawn, OffSec, Active Directory, CTF, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-984"
Permalink: "/writeups/htb-passage-984.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.70.134.233`.

### Objectives

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.119.120.251 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.62.29.38 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.18.254
gobuster dir -u http://10.31.80.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p636,5985,143 10.62.29.16 -oN scan.txt
crackmapexec smb 10.99.145.169 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

Key finding: **AS-REP Roasting**.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.23.34.155 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.58.100.239 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.73.122/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.123.104
crackmapexec smb 10.114.11.140 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
gobuster dir -u http://10.42.47.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `msfvenom`
- `gobuster`
- `kerbrute`
- `socat`
- `psexec`
- `evil-winrm`
- `ligolo-ng`
- `mimikatz`

### Key Takeaways

- LAPS Abuse
- Remote Code Execution
- AS-REP Roasting
