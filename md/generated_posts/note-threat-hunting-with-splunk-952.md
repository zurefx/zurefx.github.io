---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, windows, dfir, networking, oscp, linux"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-952.html"
URL_IMAGES: ""
Date: "2025-05-12"
Tags: "Lateral Movement, Windows, DFIR, Networking, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-952"
Permalink: "/notes/note-threat-hunting-with-splunk-952.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Bash

### CSRF

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.107.200
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.119.15.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
crackmapexec smb 10.32.193.107 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.198.18
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.119.196
```

- `hydra`
- `rubeus`
- `SSRF`
- `pwncat`

## Golden Ticket

### RDP

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `SSRF`
- `enum4linux`
- `ACL Abuse`
- `SUID Binary`
- `wmiexec`
- `XSS`

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

## nmap

### SQL Injection

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.108.38.32 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.
