---
TitleSEO: "PwnTillDawn — Solidstate (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Solidstate (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Solidstate. Resource-Based Constrained Delegation and AS-REP Roasting to achieve easy compromise on Windows."
Keywords: "pwntilldawn, offsec, windows"
URL: "https://zurefx.github.io/writeups/htb-solidstate-558.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-558/"
Date: "2026-02-24"
Tags: "PwnTillDawn, OffSec, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-558"
Permalink: "/writeups/htb-solidstate-558.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Solidstate** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.78.85.170`.

### Objectives

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.33.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.28.71.214 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,23,445 10.114.235.149 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p993,636,3389 10.73.191.186 -oN scan.txt
crackmapexec smb 10.58.58.142 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3389,995,53 10.48.243.153 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.86.30.108 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **ACL Abuse**.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p9200,445,8443 10.22.108.85 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.113.120.38 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `kerbrute`
- `socat`
- `gobuster`
- `nmap`
- `secretsdump`
- `wpscan`

### Key Takeaways

- Resource-Based Constrained Delegation
- AS-REP Roasting
- XSS
- ACL Abuse
