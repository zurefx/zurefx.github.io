---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, windows, malware, enumeration"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-170.html"
URL_IMAGES: ""
Date: "2025-06-26"
Tags: "Lateral Movement, Windows, Malware, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-170"
Permalink: "/notes/note-yara-rule-writing-170.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### GetUserSPNs

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.95.147.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.143.201/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.74.184
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Open Redirect

### WinRM

- `Pass the Ticket`
- `SeImpersonatePrivilege`
- `SeDebugPrivilege`
- `hydra`
- `CORS Misconfiguration`
- `DLL Hijacking`

- `impacket`
- `Remote Code Execution`
- `XXE`
- `feroxbuster`
- `Kerberoasting`

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## NFS

### Windows Server 2019

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## XSS

### bloodhound

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.236.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## enum4linux

### lookupsid

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.109.97/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

- `Docker Escape`
- `impacket`
- `CSRF`
- `LXD Privilege Escalation`

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## rubeus

### Pass the Hash

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.141.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.29.173.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
