---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, windows, dfir, linux, enumeration"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-460.html"
URL_IMAGES: ""
Date: "2024-06-21"
Tags: "Persistence, Privilege Escalation, Windows, DFIR, Linux, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-460"
Permalink: "/notes/note-bash-one-liners-for-security-testing-460.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### POP3

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

- `secretsdump`
- `kerbrute`
- `DLL Hijacking`
- `evil-winrm`

## MongoDB

### CSRF

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.8.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.213.250/FUZZ
gobuster dir -u http://10.79.122.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `IDOR`
- `crackmapexec`
- `AlwaysInstallElevated`
- `LXD Privilege Escalation`
- `Open Redirect`

- `Sudo Misconfiguration`
- `wpscan`
- `NFS No Root Squash`

## XSS

### Weak Service Permissions

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.134.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.12.183.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.71.2.34 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.40.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
evil-winrm -i 10.91.254.140 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.84.160.199 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.39.167.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.
