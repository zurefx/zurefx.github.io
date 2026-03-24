---
TitleSEO: "OffSec Proving Grounds — Seal (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Seal (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Seal. XXE and Open Redirect to achieve insane compromise on FreeBSD."
Keywords: "reversing, linux, windows, hackthebox, hard, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-seal-205.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-205/"
Date: "2024-07-14"
Tags: "Reversing, Linux, Windows, HackTheBox, Hard, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-205"
Permalink: "/writeups/htb-seal-205.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.53.39.176`.

### Objectives

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.131.177/FUZZ
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.49.163.138 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,3389,5985 10.11.55.138 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.34.33/FUZZ
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.12.215.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.71.31.116 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.210.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

Key finding: **XXE**.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p139,80,139 10.119.175.196 -oN scan.txt
gobuster dir -u http://10.117.89.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.205.186/FUZZ
nmap -sCV -p1433,389,445 10.45.109.103 -oN scan.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `crackmapexec`
- `atexec`
- `smbclient`
- `evil-winrm`
- `impacket`
- `psexec`
- `wmiexec`
- `pwncat`

### Key Takeaways

- XXE
- Open Redirect
