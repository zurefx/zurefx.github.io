---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, persistence, linux"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-389.html"
URL_IMAGES: ""
Date: "2025-12-22"
Tags: "Blue Team, Enumeration, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-389"
Permalink: "/notes/note-kubernetes-security-assessment-389.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Path Traversal

### SSRF

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

- `GetUserSPNs`
- `enum4linux`
- `hydra`
- `GPP Password`

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## Active Directory

### SMB

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.147.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.7.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## hashcat

### Insecure Deserialization

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Subdomain Takeover

### GetNPUsers

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

- `socat`
- `CORS Misconfiguration`
- `Weak Service Permissions`
- `hydra`

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.
