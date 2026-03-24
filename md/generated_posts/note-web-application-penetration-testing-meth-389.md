---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, privilege escalation, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-389.html"
URL_IMAGES: ""
Date: "2026-02-22"
Tags: "Cheatsheet, Privilege Escalation, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-389"
Permalink: "/notes/note-web-application-penetration-testing-meth-389.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IDOR

### Pass the Ticket

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.37.244
evil-winrm -i 10.49.87.113 -u administrator -p 'P@ssw0rd!'
```

```python
crackmapexec smb 10.51.197.77 -u administrator -p 'P@ssw0rd!' --shares
```

## ligolo-ng

### Kali Linux

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
```

- `enum4linux`
- `nmap`
- `ldapsearch`
- `SeImpersonatePrivilege`
- `Kerberoasting`

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Kerberos

### chisel

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.129.82/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.44.202
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.33.155/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.222.59/FUZZ
```

> **Note:** XXE was identified as the primary attack vector in this scenario.

## pwncat

### Subdomain Takeover

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.207.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.65.15.111 -u administrator -p 'P@ssw0rd!' --shares
```

## Joomla

### SeImpersonatePrivilege

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.27.47/FUZZ
evil-winrm -i 10.105.27.124 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.135.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `evil-winrm`
- `Cron Job`
- `NFS No Root Squash`
- `Unconstrained Delegation`
