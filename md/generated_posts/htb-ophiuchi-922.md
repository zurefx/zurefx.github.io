---
TitleSEO: "PwnTillDawn — Ophiuchi (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Ophiuchi (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ophiuchi. XSS and Constrained Delegation to achieve insane compromise on Windows."
Keywords: "linux, web, forensics, offsec, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-922.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-922/"
Date: "2024-12-08"
Tags: "Linux, Web, Forensics, OffSec, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-922"
Permalink: "/writeups/htb-ophiuchi-922.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.118.254.239`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.79.147.216 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.11.211.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.148.143
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.47.55.202 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.69.254.213 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Insecure Deserialization**.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.232.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.55.134.245 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.164.156/FUZZ
nmap -sCV -p8443,27017,8080 10.80.75.33 -oN scan.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.196.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `evil-winrm`
- `rpcclient`
- `crackmapexec`
- `GetNPUsers`
- `ligolo-ng`
- `nikto`
- `secretsdump`

### Key Takeaways

- XSS
- Constrained Delegation
- Insecure Deserialization
- AlwaysInstallElevated
