---
TitleSEO: "TryHackMe — Crossfit (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Crossfit (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Crossfit. SUID Binary and Pass the Hash to achieve insane compromise on Windows."
Keywords: "offsec, insane, active directory"
URL: "https://zurefx.github.io/writeups/htb-crossfit-599.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-599/"
Date: "2026-03-15"
Tags: "OffSec, Insane, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-599"
Permalink: "/writeups/htb-crossfit-599.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.12.234.219`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.12.142.14 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.122.238.147 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,389,3268 10.77.36.119 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.46.42/FUZZ
nmap -sCV -p389,8443,3306 10.51.195.3 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

Key finding: **SUID Binary**.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.16.159.213 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.18.11.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.28.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.83.206.27 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.198.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.27.160.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.95.109.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
gobuster dir -u http://10.69.29.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.15.206/FUZZ
nmap -sCV -p587,445,443 10.89.248.91 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `smbexec`
- `hydra`
- `metasploit`
- `crackmapexec`

### Key Takeaways

- SUID Binary
- Pass the Hash
- Remote Code Execution
