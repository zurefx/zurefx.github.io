---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "windows, networking, privilege escalation, cheatsheet, oscp"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-717.html"
URL_IMAGES: ""
Date: "2025-08-01"
Tags: "Windows, Networking, Privilege Escalation, Cheatsheet, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-717"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-717.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### MSSQL

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.35.246.191 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.91.114.191 -u administrator -p 'P@ssw0rd!'
```

## ACL Abuse

### burpsuite

```python
nmap -sCV -p139,995,27017 10.98.159.177 -oN scan.txt
gobuster dir -u http://10.100.91.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

- `ffuf`
- `Command Injection`
- `Writable PATH`
- `enum4linux`

## wpscan

### CMD

- `AlwaysInstallElevated`
- `CORS Misconfiguration`
- `nmap`
- `Docker Escape`

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

- `hydra`
- `sqlmap`
- `DCSync`

## rpcclient

### Node.js

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Broken Access Control`
- `Open Redirect`
- `pwncat`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.51.125/FUZZ
crackmapexec smb 10.17.197.62 -u administrator -p 'P@ssw0rd!' --shares
```

## metasploit

### sqlmap

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Python

### SeImpersonatePrivilege

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.
