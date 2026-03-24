---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, malware, cheatsheet, privilege escalation"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-776.html"
URL_IMAGES: ""
Date: "2025-03-11"
Tags: "Blue Team, Malware, Cheatsheet, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-776"
Permalink: "/notes/note-threat-hunting-with-splunk-776.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SMTP

### pwncat

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Open Redirect

### Elasticsearch

- `DCSync`
- `metasploit`
- `SSRF`
- `ACL Abuse`
- `nikto`
- `kerbrute`

```python
crackmapexec smb 10.12.146.174 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.94.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.109.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.206.97
feroxbuster -h
```

## SQL Injection

### chisel

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

- `ACL Abuse`
- `nmap`
- `Cron Job`
- `hashcat`
- `rpcclient`
- `GetUserSPNs`

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.21.223.248 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.47.14.70 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.
