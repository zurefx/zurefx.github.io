---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, persistence, networking, privilege escalation"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-540.html"
URL_IMAGES: ""
Date: "2024-10-23"
Tags: "Windows, DFIR, Persistence, Networking, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-540"
Permalink: "/notes/note-memory-forensics-with-volatility-540.html"
BtnLabel: "Read Notes"
Pick: 0
---
## wpscan

### NTLM Relay

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `GetUserSPNs`
- `SeDebugPrivilege`
- `AlwaysInstallElevated`
- `Silver Ticket`
- `nikto`
- `kerbrute`

## Flask

### Command Injection

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## sqlmap

### burpsuite

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.206.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## CSRF

### SMB

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.184.152
```
