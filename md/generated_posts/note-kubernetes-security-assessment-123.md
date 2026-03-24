---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, networking, privilege escalation, oscp"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-123.html"
URL_IMAGES: ""
Date: "2025-04-13"
Tags: "Windows, Cheatsheet, Networking, Privilege Escalation, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-123"
Permalink: "/notes/note-kubernetes-security-assessment-123.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rpcclient

### AS-REP Roasting

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.100.186.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Unconstrained Delegation`
- `secretsdump`
- `Constrained Delegation`
- `psexec`
- `GPP Password`
- `Sudo Misconfiguration`

- `Silver Ticket`
- `pwncat`
- `Weak Service Permissions`

- `hashcat`
- `Constrained Delegation`
- `atexec`

## hashcat

### Nginx

- `Pass the Ticket`
- `Broken Access Control`
- `sharphound`
- `NTLM Relay`

```bash
evil-winrm -i 10.83.172.150 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.48.171.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.114.220.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p143,27017,995 10.112.132.1 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## dcomexec

### SMB

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```python
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## WinRM

### atexec

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,3306,5432 10.108.210.75 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Drupal

### IIS

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

- `netcat`
- `ldapsearch`
- `smbclient`
- `SeImpersonatePrivilege`
