---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, windows, enumeration, cheatsheet"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-287.html"
URL_IMAGES: ""
Date: "2024-06-11"
Tags: "Lateral Movement, Windows, Enumeration, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-287"
Permalink: "/notes/note-linux-privilege-escalation-techniques-287.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Debian

### wpscan

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

- `DLL Hijacking`
- `nmap`
- `nikto`
- `GPP Password`
- `Subdomain Takeover`
- `gobuster`

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## XXE

### Windows Server 2019

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.114.41/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.237.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.218.115/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.67.151/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## Laravel

### SSH

```bash
nmap -sCV -p80,636,5986 10.114.123.182 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.4.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.
