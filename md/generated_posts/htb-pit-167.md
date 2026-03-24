---
TitleSEO: "TryHackMe — Pit (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Pit (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Pit. SeDebugPrivilege and Insecure Deserialization to achieve medium compromise on FreeBSD."
Keywords: "windows, offsec, pwntilldawn, web, easy, medium"
URL: "https://zurefx.github.io/writeups/htb-pit-167.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-167/"
Date: "2024-03-01"
Tags: "Windows, OffSec, PwnTillDawn, Web, Easy, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-167"
Permalink: "/writeups/htb-pit-167.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.26.2.19`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.11.48
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.110.177 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.74.96/FUZZ
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.68.4
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.96.93/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.131.145/FUZZ
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

Key finding: **SeDebugPrivilege**.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.133.150
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.147.83
evil-winrm -i 10.81.238.157 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `rubeus`
- `GetUserSPNs`
- `smbexec`
- `secretsdump`
- `psexec`

### Key Takeaways

- SeDebugPrivilege
- Insecure Deserialization
