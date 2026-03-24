---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, networking, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-451.html"
URL_IMAGES: ""
Date: "2026-02-01"
Tags: "Persistence, Networking, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-451"
Permalink: "/notes/note-blue-team-detection-techniques-451.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### NTLM Relay

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.15.2
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p995,995,8443 10.86.207.214 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.226.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.53.118.116 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Unconstrained Delegation

### Kerberos

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

- `ffuf`
- `dcomexec`
- `nikto`
- `XXE`
- `wmiexec`

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## GetUserSPNs

### Writable PATH

```bash
evil-winrm -i 10.27.132.133 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.44.68.160 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.125.69.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.185.217/FUZZ
nmap -sCV -p5432,143,464 10.20.67.192 -oN scan.txt
feroxbuster -h
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.17.90
evil-winrm -i 10.105.54.201 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.68.23.170 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## socat

### Kali Linux

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## DCSync

### Remote File Inclusion

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
