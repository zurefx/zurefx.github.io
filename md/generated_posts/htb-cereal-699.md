---
TitleSEO: "HackTheBox — Cereal (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Cereal (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cereal. Insecure Deserialization and Silver Ticket to achieve easy compromise on Linux."
Keywords: "forensics, linux, web, pwntilldawn, offsec"
URL: "https://zurefx.github.io/writeups/htb-cereal-699.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-699/"
Date: "2025-07-11"
Tags: "Forensics, Linux, Web, PwnTillDawn, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-699"
Permalink: "/writeups/htb-cereal-699.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cereal** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.52.224.161`.

### Objectives

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.48.212.93 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.112.173.140 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.131.6 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.159.13
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **GPP Password**.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.35.105.9 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.21.168.164 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.40.114.224 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `msfvenom`
- `smbexec`
- `ldapsearch`
- `burpsuite`
- `hashcat`
- `sharphound`
- `rubeus`

### Key Takeaways

- Insecure Deserialization
- Silver Ticket
- GPP Password
- Writable PATH
