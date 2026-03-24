---
TitleSEO: "OffSec Proving Grounds — Pikaboo (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Pikaboo (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Pikaboo. Weak Service Permissions and ACL Abuse to achieve insane compromise on FreeBSD."
Keywords: "active directory, ctf, forensics"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-294.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-294/"
Date: "2025-06-16"
Tags: "Active Directory, CTF, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-294"
Permalink: "/writeups/htb-pikaboo-294.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.102.230.10`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.84.158.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p9200,464,587 10.94.187.211 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.131.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.27.24.141 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,139,25 10.67.105.219 -oN scan.txt
gobuster dir -u http://10.56.219.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

Key finding: **Weak Service Permissions**.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.56.104/FUZZ
evil-winrm -i 10.93.178.229 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.4.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.91.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8888,3268,5986 10.21.44.174 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.43.88.67 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
nmap -sCV -p993,8888,3306 10.81.138.99 -oN scan.txt
nmap -sCV -p1521,3389,22 10.120.45.228 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `sqlmap`
- `rpcclient`
- `nikto`
- `ffuf`
- `dcomexec`
- `atexec`

### Key Takeaways

- Weak Service Permissions
- ACL Abuse
