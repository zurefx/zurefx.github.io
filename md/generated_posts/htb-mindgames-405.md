---
TitleSEO: "VulnHub — Mindgames (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Mindgames (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. Open Redirect and SSRF to achieve insane compromise on OpenBSD."
Keywords: "windows, ctf, easy, tryhackme, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-mindgames-405.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-405/"
Date: "2025-03-09"
Tags: "Windows, CTF, Easy, TryHackMe, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-405"
Permalink: "/writeups/htb-mindgames-405.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.46.241.40`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.214.243
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.100.48.140 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.104.175.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SSRF**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.243.84
nmap -sCV -p25,143,5985 10.29.5.141 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
evil-winrm -i 10.43.209.140 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.111.39.94 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.33.207/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `msfvenom`
- `crackmapexec`
- `wpscan`
- `hashcat`

### Key Takeaways

- Open Redirect
- SSRF
- Remote Code Execution
- DLL Hijacking
