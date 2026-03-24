---
TitleSEO: "PwnTillDawn — Tabby (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Tabby (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tabby. Sudo Misconfiguration and Open Redirect to achieve medium compromise on OpenBSD."
Keywords: "web, ctf, medium"
URL: "https://zurefx.github.io/writeups/htb-tabby-437.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-437/"
Date: "2024-07-18"
Tags: "Web, CTF, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-437"
Permalink: "/writeups/htb-tabby-437.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.93.184.184`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.68.248.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.78.60.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p636,389,3306 10.26.152.85 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.93.173/FUZZ
evil-winrm -i 10.22.206.25 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Open Redirect**.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.108.185.170 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.104.23/FUZZ
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.251.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.189.134
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.85.194/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,389,110 10.58.31.203 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `evil-winrm`
- `smbexec`
- `mimikatz`
- `GetNPUsers`

### Key Takeaways

- Sudo Misconfiguration
- Open Redirect
