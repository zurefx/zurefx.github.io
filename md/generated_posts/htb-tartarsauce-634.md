---
TitleSEO: "PwnTillDawn — Tartarsauce (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Tartarsauce (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tartarsauce. Sudo Misconfiguration and ACL Abuse to achieve hard compromise on Linux."
Keywords: "hackthebox, linux, windows, pwntilldawn, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-634.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-634/"
Date: "2025-09-06"
Tags: "HackTheBox, Linux, Windows, PwnTillDawn, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-634"
Permalink: "/writeups/htb-tartarsauce-634.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.86.243.151`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.99.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.228.32
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.189.131/FUZZ
evil-winrm -i 10.97.195.49 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.18.117.56 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **ACL Abuse**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.194.158/FUZZ
crackmapexec smb 10.67.142.208 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.103.216.101 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.29.239.23 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.83.240.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.100.134.2/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.28.206.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p995,21,8888 10.59.234.221 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `impacket`
- `evil-winrm`
- `ligolo-ng`
- `burpsuite`
- `metasploit`
- `GetUserSPNs`

### Key Takeaways

- Sudo Misconfiguration
- ACL Abuse
