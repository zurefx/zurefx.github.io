---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, oscp, lateral movement, malware"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-687.html"
URL_IMAGES: ""
Date: "2025-06-16"
Tags: "Privilege Escalation, Enumeration, OSCP, Lateral Movement, Malware"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-687"
Permalink: "/notes/note-sigma-rule-development-687.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### Kerberoasting

```bash
evil-winrm -i 10.18.33.218 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.52.151.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,23,5432 10.22.128.33 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Constrained Delegation

### sharphound

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.129.187.29 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.99.162.124 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.36.169.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## DNS

### Elasticsearch

- `SUID Binary`
- `secretsdump`
- `GetUserSPNs`

- `Resource-Based Constrained Delegation`
- `pwncat`
- `DNS Rebinding`

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

- `sqlmap`
- `Kerberoasting`
- `LXD Privilege Escalation`
- `CSRF`
- `DLL Hijacking`
- `secretsdump`

## GetNPUsers

### gobuster

- `ligolo-ng`
- `XXE`
- `DCSync`
- `secretsdump`
- `NFS No Root Squash`
- `Remote File Inclusion`

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## evil-winrm

### NFS

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.60.245/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.26.217.169 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.128.183
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## impacket

### NTLM Relay

```powershell
feroxbuster -h
crackmapexec smb 10.103.233.25 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.
