---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "networking, dfir, persistence"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-730.html"
URL_IMAGES: ""
Date: "2024-11-08"
Tags: "Networking, DFIR, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-730"
Permalink: "/notes/note-bash-one-liners-for-security-testing-730.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### wmiexec

```bash
evil-winrm -i 10.33.137.20 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.173.20
```

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

## LDAP

### Flask

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `DCSync`
- `Sudo Misconfiguration`
- `hashcat`
- `bloodhound`

## DNS Rebinding

### Unquoted Service Path

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.70.89
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## WinRM

### Cron Job

```python
evil-winrm -i 10.23.213.162 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.
