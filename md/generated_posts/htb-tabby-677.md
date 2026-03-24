---
TitleSEO: "TryHackMe — Tabby (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Tabby (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tabby. Remote Code Execution and GPP Password to achieve insane compromise on Windows."
Keywords: "pwntilldawn, reversing, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-tabby-677.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-677/"
Date: "2024-07-10"
Tags: "PwnTillDawn, Reversing, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-677"
Permalink: "/writeups/htb-tabby-677.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.79.13.47`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p443,3306,3268 10.51.77.85 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.83.44.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.107.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.75.210.56 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.96.45.70 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.73.137.237 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **GPP Password**.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.116.147.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.121.17.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p80,21,464 10.118.190.7 -oN scan.txt
evil-winrm -i 10.118.237.181 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.16.151.230 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `sqlmap`
- `kerbrute`
- `ldapsearch`
- `impacket`
- `secretsdump`
- `hydra`
- `wmiexec`

### Key Takeaways

- Remote Code Execution
- GPP Password
