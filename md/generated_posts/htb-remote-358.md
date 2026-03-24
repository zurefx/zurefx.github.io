---
TitleSEO: "VulnHub — Remote (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Remote (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Remote. IDOR and Open Redirect to achieve medium compromise on OpenBSD."
Keywords: "web, easy, reversing, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-remote-358.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-remote-358/"
Date: "2025-09-15"
Tags: "Web, Easy, Reversing, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-remote-358"
Permalink: "/writeups/htb-remote-358.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Remote** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.97.193.54`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.11.166.217 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.127.132/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p8080,143,110 10.69.165.143 -oN scan.txt
gobuster dir -u http://10.86.47.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.47.34.65 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.47.121.203 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Open Redirect**.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.32.195.228 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.235.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.64.214.99 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.79.2.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.67.237.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `chisel`
- `sharphound`
- `nmap`
- `hashcat`
- `secretsdump`
- `ldapsearch`
- `msfvenom`

### Key Takeaways

- IDOR
- Open Redirect
- XXE
- Docker Escape
