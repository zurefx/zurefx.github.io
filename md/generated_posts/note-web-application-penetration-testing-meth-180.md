---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "linux, privilege escalation, oscp, blue team"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-180.html"
URL_IMAGES: ""
Date: "2026-02-19"
Tags: "Linux, Privilege Escalation, OSCP, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-180"
Permalink: "/notes/note-web-application-penetration-testing-meth-180.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nikto

### FTP

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `Cron Job`
- `burpsuite`
- `XXE`
- `ligolo-ng`
- `Command Injection`
- `hydra`

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.161.202
```

## bloodhound

### Elasticsearch

```bash
crackmapexec smb 10.113.94.163 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.86.181.188 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.16.54.201 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.98.201
```

```python
gobuster dir -u http://10.91.173.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Unconstrained Delegation

### SeDebugPrivilege

- `crackmapexec`
- `lookupsid`
- `DNS Rebinding`
- `smbclient`

```powershell
crackmapexec smb 10.71.142.138 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.129.11.95 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `evil-winrm`
- `Command Injection`
- `SSTI`
- `psexec`

## feroxbuster

### LAPS Abuse

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.
