---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-633.html"
URL_IMAGES: ""
Date: "2024-06-19"
Tags: "Cheatsheet, Enumeration, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-633"
Permalink: "/notes/note-bash-one-liners-for-security-testing-633.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### .NET

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

- `Unconstrained Delegation`
- `gobuster`
- `Pass the Ticket`
- `DNS Rebinding`

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

- `Local File Inclusion`
- `sqlmap`
- `gobuster`
- `lookupsid`
- `CSRF`

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## XSS

### Golden Ticket

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.71.129
crackmapexec smb 10.69.118.108 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.76.142.188/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## IMAP

### sharphound

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.110.65.92 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.74.66/FUZZ
```

```bash
crackmapexec smb 10.51.172.252 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.121.23.169 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.222.188/FUZZ
```

## Elasticsearch

### Django

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

## nikto

### secretsdump

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.193.22
```

- `Golden Ticket`
- `evil-winrm`
- `sqlmap`

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## msfvenom

### ACL Abuse

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.69.228.164 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.
