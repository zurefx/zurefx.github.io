---
TitleSEO: "PwnTillDawn — Traverxec (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Traverxec (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Traverxec. Local File Inclusion and NTLM Relay to achieve insane compromise on FreeBSD."
Keywords: "insane, linux, medium, hard, easy"
URL: "https://zurefx.github.io/writeups/htb-traverxec-956.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-956/"
Date: "2024-02-26"
Tags: "Insane, Linux, Medium, Hard, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-956"
Permalink: "/writeups/htb-traverxec-956.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.116.9.191`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.66.41.194/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.60.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3389,389,8443 10.123.126.12 -oN scan.txt
gobuster dir -u http://10.84.63.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.29.78
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Local File Inclusion**.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Initial Access

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.55.20.63 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.151.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.51.43.136 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.225.144/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `GetUserSPNs`
- `evil-winrm`
- `sqlmap`
- `psexec`
- `metasploit`
- `wpscan`
- `ldapsearch`
- `smbclient`

### Key Takeaways

- Local File Inclusion
- NTLM Relay
- LXD Privilege Escalation
- SUID Binary
