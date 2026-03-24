---
TitleSEO: "TryHackMe — Forge (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Forge (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Forge. Command Injection and Pass the Ticket to achieve medium compromise on OpenBSD."
Keywords: "active directory, insane, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-forge-569.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-569/"
Date: "2024-03-15"
Tags: "Active Directory, Insane, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-569"
Permalink: "/writeups/htb-forge-569.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.30.82.126`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.44.17.253 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.111.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.182.173
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Command Injection**.

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.97.240
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.61.108.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.52.22.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.73.217/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.11.170.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `chisel`
- `rpcclient`
- `bloodhound`
- `hashcat`
- `john`
- `burpsuite`
- `nikto`
- `ffuf`

### Key Takeaways

- Command Injection
- Pass the Ticket
