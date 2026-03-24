---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, lateral movement, malware, oscp, privilege escalation, persistence"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-595.html"
URL_IMAGES: ""
Date: "2024-08-26"
Tags: "Blue Team, Lateral Movement, Malware, OSCP, Privilege Escalation, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-595"
Permalink: "/notes/note-mitre-att&ck-framework-reference-595.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PHP

### WordPress

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## rubeus

### nikto

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.146.62
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.253.114/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## ldapsearch

### chisel

- `smbclient`
- `hashcat`
- `msfvenom`
- `ffuf`
- `DLL Hijacking`

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

- `hashcat`
- `XSS`
- `Subdomain Takeover`

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## DNS Rebinding

### wpscan

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).
