---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, oscp, malware"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-778.html"
URL_IMAGES: ""
Date: "2025-06-06"
Tags: "Blue Team, Enumeration, OSCP, Malware"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-778"
Permalink: "/notes/note-linux-privilege-escalation-techniques-778.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### Java

```powershell
gobuster dir -u http://10.57.48.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

- `crackmapexec`
- `LAPS Abuse`
- `CORS Misconfiguration`

## Node.js

### Open Redirect

- `Insecure Deserialization`
- `ffuf`
- `msfvenom`
- `evil-winrm`
- `XXE`
- `Broken Access Control`

- `feroxbuster`
- `hashcat`
- `chisel`
- `Remote Code Execution`

- `chisel`
- `AlwaysInstallElevated`
- `feroxbuster`
- `nmap`
- `smbexec`
- `smbclient`

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## LXD Privilege Escalation

### Cron Job

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```python
crackmapexec smb 10.81.105.242 -u administrator -p 'P@ssw0rd!' --shares
```
