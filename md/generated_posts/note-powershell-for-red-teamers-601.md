---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "linux, cheatsheet, lateral movement, persistence, dfir, enumeration"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-601.html"
URL_IMAGES: ""
Date: "2025-07-31"
Tags: "Linux, Cheatsheet, Lateral Movement, Persistence, DFIR, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-601"
Permalink: "/notes/note-powershell-for-red-teamers-601.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### Active Directory

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## chisel

### CORS Misconfiguration

- `wpscan`
- `smbclient`
- `Golden Ticket`
- `john`
- `Pass the Hash`
- `bloodhound`

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```python
feroxbuster -h
feroxbuster -h
```

## impacket

### netcat

- `feroxbuster`
- `DLL Hijacking`
- `Weak Service Permissions`

- `ACL Abuse`
- `Cron Job`
- `Resource-Based Constrained Delegation`
- `LXD Privilege Escalation`
- `NFS No Root Squash`
- `SSRF`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.172.6
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.
