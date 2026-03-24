---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "malware, privilege escalation, dfir, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-323.html"
URL_IMAGES: ""
Date: "2024-09-20"
Tags: "Malware, Privilege Escalation, DFIR, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-323"
Permalink: "/notes/note-digital-forensics-methodology-323.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ACL Abuse

### Java

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

> **Note:** Pass the Ticket was identified as the primary attack vector in this scenario.

- `Unquoted Service Path`
- `SSRF`
- `evil-winrm`
- `NTLM Relay`
- `GetUserSPNs`

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## CentOS

### wpscan

- `Resource-Based Constrained Delegation`
- `crackmapexec`
- `msfvenom`
- `Weak Service Permissions`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Spring

### SMTP

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

- `lookupsid`
- `CORS Misconfiguration`
- `GetUserSPNs`
- `Resource-Based Constrained Delegation`

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Nginx

### ligolo-ng

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```python
evil-winrm -i 10.96.109.238 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Open Redirect

### C#

- `secretsdump`
- `CSRF`
- `GPP Password`
- `NFS No Root Squash`

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
