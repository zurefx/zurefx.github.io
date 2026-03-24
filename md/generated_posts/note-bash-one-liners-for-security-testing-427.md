---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, dfir, enumeration, persistence, oscp"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-427.html"
URL_IMAGES: ""
Date: "2024-09-04"
Tags: "Privilege Escalation, DFIR, Enumeration, Persistence, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-427"
Permalink: "/notes/note-bash-one-liners-for-security-testing-427.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### Spring

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.120.86.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `metasploit`
- `Sudo Misconfiguration`
- `Path Traversal`
- `burpsuite`
- `ligolo-ng`
- `Subdomain Takeover`

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Remote File Inclusion

### Debian

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.88.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.233.130
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.184.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.92.154.170 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Windows Server 2019

### Sudo Misconfiguration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## AlwaysInstallElevated

### Ubuntu 20.04

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.84.69.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.91.161.81 -u administrator -p 'P@ssw0rd!'
```
