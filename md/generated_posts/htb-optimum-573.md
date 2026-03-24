---
TitleSEO: "PwnTillDawn — Optimum (Hard OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Optimum (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Optimum. NFS No Root Squash and IDOR to achieve hard compromise on OpenBSD."
Keywords: "web, windows, medium, hard"
URL: "https://zurefx.github.io/writeups/htb-optimum-573.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-573/"
Date: "2024-04-07"
Tags: "Web, Windows, Medium, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-573"
Permalink: "/writeups/htb-optimum-573.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Hard** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.33.71.20`.

### Objectives

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.206.45
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.106.229
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

Key finding: **IDOR**.

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.129.15.225 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.77.241.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.196.88/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.64.154.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `dcomexec`
- `hashcat`
- `enum4linux`
- `wpscan`
- `crackmapexec`
- `ffuf`
- `john`

### Key Takeaways

- NFS No Root Squash
- IDOR
