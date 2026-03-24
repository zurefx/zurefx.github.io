---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, windows, linux, oscp"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-864.html"
URL_IMAGES: ""
Date: "2025-06-17"
Tags: "Enumeration, Privilege Escalation, Windows, Linux, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-864"
Permalink: "/notes/note-docker-security-hardening-864.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ruby on Rails

### enum4linux

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.49.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## metasploit

### RPC

- `Sudo Misconfiguration`
- `sharphound`
- `Writable PATH`
- `chisel`
- `Cron Job`
- `ldapsearch`

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Python

### SeImpersonatePrivilege

- `Kerberoasting`
- `lookupsid`
- `AlwaysInstallElevated`
- `feroxbuster`
- `nikto`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.208.76/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.
