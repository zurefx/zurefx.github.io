---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "linux, dfir, networking, persistence, cheatsheet, enumeration"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-258.html"
URL_IMAGES: ""
Date: "2026-01-23"
Tags: "Linux, DFIR, Networking, Persistence, Cheatsheet, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-258"
Permalink: "/notes/note-web-application-penetration-testing-meth-258.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MSSQL

### wpscan

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## kerbrute

### ldapsearch

- `GetNPUsers`
- `NTLM Relay`
- `psexec`
- `Remote Code Execution`
- `Weak Service Permissions`

- `XSS`
- `pwncat`
- `hydra`
- `wpscan`
- `mimikatz`

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## gobuster

### SMB

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Remote Code Execution

### ligolo-ng

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.107.41
```

- `Unconstrained Delegation`
- `DLL Hijacking`
- `SSTI`

```python
crackmapexec smb 10.36.116.95 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## RDP

### mimikatz

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

> **Note:** CSRF was identified as the primary attack vector in this scenario.
