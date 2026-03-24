---
TitleSEO: "OffSec Proving Grounds — Tabby (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tabby (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tabby. Writable PATH and Cron Job to achieve easy compromise on Windows."
Keywords: "ctf, web, insane, easy, reversing"
URL: "https://zurefx.github.io/writeups/htb-tabby-249.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-249/"
Date: "2025-08-11"
Tags: "CTF, Web, Insane, Easy, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-249"
Permalink: "/writeups/htb-tabby-249.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.71.152.98`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.150.41
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.43.77.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.243.131
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.74.231.252 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.68.23.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

Key finding: **Writable PATH**.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.46.155.78 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.16.195.89 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.68.168.117 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,389,5432 10.25.215.220 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.47.190.229 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `crackmapexec`
- `sharphound`
- `impacket`
- `sqlmap`
- `smbclient`
- `atexec`

### Key Takeaways

- Writable PATH
- Cron Job
