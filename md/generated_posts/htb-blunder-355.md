---
TitleSEO: "PwnTillDawn — Blunder (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Blunder (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Blunder. DCSync and SQL Injection to achieve insane compromise on OpenBSD."
Keywords: "ctf, insane, windows, hard, active directory, reversing"
URL: "https://zurefx.github.io/writeups/htb-blunder-355.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-355/"
Date: "2025-06-25"
Tags: "CTF, Insane, Windows, Hard, Active Directory, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-355"
Permalink: "/writeups/htb-blunder-355.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.15.216.206`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.145.30/FUZZ
crackmapexec smb 10.119.208.146 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.76.69.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

Key finding: **SQL Injection**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.128.193.26 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.63.239.246/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.203.225/FUZZ
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.200.147
evil-winrm -i 10.116.133.170 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.104.30.34 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `wpscan`
- `wmiexec`
- `ligolo-ng`
- `hashcat`
- `bloodhound`

### Key Takeaways

- DCSync
- SQL Injection
