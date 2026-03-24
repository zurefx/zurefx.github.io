---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "linux, persistence, networking, lateral movement"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-334.html"
URL_IMAGES: ""
Date: "2024-07-22"
Tags: "Linux, Persistence, Networking, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-334"
Permalink: "/notes/note-powershell-for-red-teamers-334.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### Kerberoasting

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.221.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Ruby on Rails

### FTP

```bash
gobuster dir -u http://10.27.62.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.68.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Telnet

### Nginx

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.210.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `feroxbuster`
- `SSTI`
- `LXD Privilege Escalation`
- `NFS No Root Squash`

- `Resource-Based Constrained Delegation`
- `Golden Ticket`
- `Cron Job`
- `GPP Password`
- `sqlmap`
