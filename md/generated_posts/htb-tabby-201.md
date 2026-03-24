---
TitleSEO: "TryHackMe — Tabby (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Tabby (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tabby. DCSync and XSS to achieve easy compromise on Windows."
Keywords: "medium, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-tabby-201.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-201/"
Date: "2025-03-22"
Tags: "Medium, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-201"
Permalink: "/writeups/htb-tabby-201.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.66.165.169`.

### Objectives

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.114.137/FUZZ
crackmapexec smb 10.119.31.32 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.136.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.105.177.172 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.58.118
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.203.54
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.13.16.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.127.44/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.72.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

Key finding: **Weak Service Permissions**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.205.208
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.94.49.42 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.56.27.224 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.70.211.239 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `sqlmap`
- `ldapsearch`
- `wpscan`
- `ligolo-ng`
- `impacket`
- `ffuf`
- `feroxbuster`
- `rubeus`

### Key Takeaways

- DCSync
- XSS
- Weak Service Permissions
- Remote Code Execution
