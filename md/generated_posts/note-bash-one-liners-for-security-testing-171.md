---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, cheatsheet"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-171.html"
URL_IMAGES: ""
Date: "2025-08-12"
Tags: "Lateral Movement, DFIR, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-171"
Permalink: "/notes/note-bash-one-liners-for-security-testing-171.html"
BtnLabel: "Read Notes"
Pick: 0
---
## smbclient

### GetUserSPNs

- `Silver Ticket`
- `DLL Hijacking`
- `Command Injection`
- `XXE`
- `nikto`
- `burpsuite`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.70.141.116 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## nikto

### Unconstrained Delegation

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.195.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `feroxbuster`
- `Resource-Based Constrained Delegation`
- `Cron Job`
- `ligolo-ng`

- `SSTI`
- `crackmapexec`
- `sharphound`
- `sqlmap`

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## mimikatz

### RPC

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## NFS No Root Squash

### HTTP

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.238.155
crackmapexec smb 10.59.250.199 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.79.149.42 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## smbexec

### feroxbuster

```powershell
gobuster dir -u http://10.75.232.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.125.61
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `feroxbuster`
- `SQL Injection`
- `Broken Access Control`

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Apache

### Remote File Inclusion

```python
crackmapexec smb 10.57.7.254 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.44.49.7 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.126.154
```

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.
