---
TitleSEO: "TryHackMe — TheNotebook (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — TheNotebook (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe TheNotebook. SeDebugPrivilege and CORS Misconfiguration to achieve hard compromise on FreeBSD."
Keywords: "easy, linux, forensics"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-583.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-583/"
Date: "2024-04-08"
Tags: "Easy, Linux, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-583"
Permalink: "/writeups/htb-thenotebook-583.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.65.164.20`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.1.109
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.57.223.206 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.140.199/FUZZ
evil-winrm -i 10.31.205.114 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

Key finding: **CORS Misconfiguration**.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.30.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.126.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
gobuster dir -u http://10.72.49.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `msfvenom`
- `smbclient`
- `psexec`
- `GetUserSPNs`

### Key Takeaways

- SeDebugPrivilege
- CORS Misconfiguration
- SeImpersonatePrivilege
