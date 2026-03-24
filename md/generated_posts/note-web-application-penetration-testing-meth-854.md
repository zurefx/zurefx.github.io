---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, privilege escalation, lateral movement, windows, malware"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-854.html"
URL_IMAGES: ""
Date: "2024-03-01"
Tags: "DFIR, Privilege Escalation, Lateral Movement, Windows, Malware"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-854"
Permalink: "/notes/note-web-application-penetration-testing-meth-854.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RPC

### pwncat

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

- `dcomexec`
- `SeDebugPrivilege`
- `psexec`
- `SQL Injection`
- `XSS`
- `Constrained Delegation`

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.14.226
```

## Writable PATH

### Pass the Ticket

```python
crackmapexec smb 10.97.238.101 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.160.130
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.154.2/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.127.238
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.136.193
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## GPP Password

### DCSync

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## SUID Binary

### Spring

- `john`
- `ldapsearch`
- `SeDebugPrivilege`
- `nikto`
- `impacket`
- `Unquoted Service Path`

```bash
evil-winrm -i 10.21.220.250 -u administrator -p 'P@ssw0rd!'
```

## nmap

### Open Redirect

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.
