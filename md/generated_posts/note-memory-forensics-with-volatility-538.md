---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, persistence, malware"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-538.html"
URL_IMAGES: ""
Date: "2024-12-06"
Tags: "Linux, Lateral Movement, Persistence, Malware"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-538"
Permalink: "/notes/note-memory-forensics-with-volatility-538.html"
BtnLabel: "Read Notes"
Pick: 0
---
## crackmapexec

### XSS

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.38.56.80/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.62.194.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.104.161.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
evil-winrm -i 10.71.52.137 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Path Traversal

### PowerShell

```powershell
gobuster dir -u http://10.20.242.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.151.14
crackmapexec smb 10.35.34.109 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Ruby on Rails

### Spring

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.235.128
gobuster dir -u http://10.20.51.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.40.57.188 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.119.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## SSTI

### Subdomain Takeover

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.
