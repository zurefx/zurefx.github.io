---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "malware, enumeration, linux, cheatsheet"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-269.html"
URL_IMAGES: ""
Date: "2024-11-02"
Tags: "Malware, Enumeration, Linux, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-269"
Permalink: "/notes/note-web-application-penetration-testing-meth-269.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Node.js

### Joomla

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Path Traversal

### SSTI

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

- `nmap`
- `CSRF`
- `SeDebugPrivilege`
- `nikto`

- `rubeus`
- `impacket`
- `Unconstrained Delegation`
- `CSRF`
- `crackmapexec`

- `DLL Hijacking`
- `john`
- `enum4linux`
- `dcomexec`
- `Constrained Delegation`
- `GPP Password`

## LAPS Abuse

### Telnet

```bash
crackmapexec smb 10.124.186.28 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `chisel`
- `SUID Binary`
- `feroxbuster`
- `rubeus`
- `Golden Ticket`

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## gobuster

### Broken Access Control

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.115.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Insecure Deserialization

### pwncat

> **Note:** GPP Password was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.116.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## XXE

### Kali Linux

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.209.131
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.14.10/FUZZ
```

- `dcomexec`
- `DLL Hijacking`
- `SeImpersonatePrivilege`
