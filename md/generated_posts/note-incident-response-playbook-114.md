---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, windows, privilege escalation, networking, blue team, malware"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-114.html"
URL_IMAGES: ""
Date: "2024-02-01"
Tags: "Enumeration, Windows, Privilege Escalation, Networking, Blue Team, Malware"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-114"
Permalink: "/notes/note-incident-response-playbook-114.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CentOS

### Laravel

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

- `gobuster`
- `socat`
- `SeImpersonatePrivilege`
- `Kerberoasting`
- `Remote File Inclusion`
- `ldapsearch`

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## socat

### SeDebugPrivilege

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.40.225.115 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.51.247.136 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## dcomexec

### WordPress

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

- `Unconstrained Delegation`
- `Constrained Delegation`
- `DLL Hijacking`

> **Note:** CORS Misconfiguration was identified as the primary attack vector in this scenario.

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

- `msfvenom`
- `XXE`
- `socat`
- `GetUserSPNs`
- `GetNPUsers`
- `Remote Code Execution`
