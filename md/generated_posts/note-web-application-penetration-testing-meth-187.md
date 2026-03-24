---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, persistence, linux"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-187.html"
URL_IMAGES: ""
Date: "2025-05-26"
Tags: "Enumeration, Lateral Movement, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-187"
Permalink: "/notes/note-web-application-penetration-testing-meth-187.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Apache

### Pass the Ticket

- `Command Injection`
- `DLL Hijacking`
- `Kerberoasting`
- `Remote Code Execution`

```powershell
gobuster dir -u http://10.49.109.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
crackmapexec smb 10.22.34.20 -u administrator -p 'P@ssw0rd!' --shares
```

- `DNS Rebinding`
- `smbexec`
- `SeDebugPrivilege`
- `CSRF`
- `LXD Privilege Escalation`

## atexec

### chisel

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.28.174.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.123.136/FUZZ
crackmapexec smb 10.124.140.228 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.109.151.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## sqlmap

### Telnet

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.91.218
gobuster dir -u http://10.95.229.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## ffuf

### .NET

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.
