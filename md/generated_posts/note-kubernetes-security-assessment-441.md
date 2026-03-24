---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, dfir, lateral movement, cheatsheet, windows, networking"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-441.html"
URL_IMAGES: ""
Date: "2024-10-18"
Tags: "Enumeration, DFIR, Lateral Movement, Cheatsheet, Windows, Networking"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-441"
Permalink: "/notes/note-kubernetes-security-assessment-441.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTP

### chisel

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.52.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## lookupsid

### POP3

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Open Redirect`
- `Golden Ticket`
- `nmap`
- `msfvenom`
- `Docker Escape`

## WinRM

### RPC

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.
