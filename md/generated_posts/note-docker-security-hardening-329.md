---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "networking, windows, malware, persistence, lateral movement, linux"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-329.html"
URL_IMAGES: ""
Date: "2025-06-06"
Tags: "Networking, Windows, Malware, Persistence, Lateral Movement, Linux"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-329"
Permalink: "/notes/note-docker-security-hardening-329.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### IDOR

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## wmiexec

### WinRM

```bash
crackmapexec smb 10.129.195.31 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.83.111.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.67.74.57 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Laravel

### burpsuite

- `ACL Abuse`
- `Pass the Hash`
- `nmap`
- `LAPS Abuse`
- `enum4linux`

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.69.78.211 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.43.192.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** XXE was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## rubeus

### XXE

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.
