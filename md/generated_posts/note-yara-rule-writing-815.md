---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, cheatsheet, windows, dfir"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-815.html"
URL_IMAGES: ""
Date: "2025-07-14"
Tags: "Enumeration, Lateral Movement, Cheatsheet, Windows, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-815"
Permalink: "/notes/note-yara-rule-writing-815.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Active Directory

### IIS

- `impacket`
- `enum4linux`
- `netcat`

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

- `Cron Job`
- `AlwaysInstallElevated`
- `DLL Hijacking`
- `john`
- `XXE`

## ligolo-ng

### CMD

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.171.46/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.148.110
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Remote File Inclusion

### feroxbuster

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

- `chisel`
- `SSTI`
- `Open Redirect`
- `atexec`
- `CORS Misconfiguration`
- `DNS Rebinding`

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## LDAP

### DLL Hijacking

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.155.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.106.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.240.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## CORS Misconfiguration

### MSSQL

- `hydra`
- `Weak Service Permissions`
- `XXE`
- `rpcclient`
- `Remote Code Execution`
- `IDOR`

- `Remote Code Execution`
- `CORS Misconfiguration`
- `ffuf`
- `atexec`
- `impacket`
- `Broken Access Control`
