---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, windows, linux, lateral movement, oscp, malware"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-675.html"
URL_IMAGES: ""
Date: "2024-12-19"
Tags: "Enumeration, Windows, Linux, Lateral Movement, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-675"
Permalink: "/notes/note-blue-team-detection-techniques-675.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MongoDB

### Pass the Ticket

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `SSRF`
- `bloodhound`
- `ldapsearch`
- `Remote File Inclusion`

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Apache

### Silver Ticket

- `feroxbuster`
- `sharphound`
- `evil-winrm`
- `Path Traversal`
- `kerbrute`
- `msfvenom`

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Java

### Ruby on Rails

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

- `smbclient`
- `ffuf`
- `hashcat`
- `CORS Misconfiguration`
- `Subdomain Takeover`
- `feroxbuster`

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## psexec

### Bash

- `CSRF`
- `psexec`
- `ACL Abuse`
- `LAPS Abuse`

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.112.127
crackmapexec smb 10.107.176.103 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.12.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.25.167.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.17.42.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.124.235
```

## Sudo Misconfiguration

### socat

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

- `SUID Binary`
- `Broken Access Control`
- `atexec`

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## RDP

### Nginx

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.2.166/FUZZ
```
