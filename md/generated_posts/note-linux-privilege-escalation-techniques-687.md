---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, oscp, privilege escalation, persistence, windows"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-687.html"
URL_IMAGES: ""
Date: "2024-09-30"
Tags: "Malware, OSCP, Privilege Escalation, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-687"
Permalink: "/notes/note-linux-privilege-escalation-techniques-687.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSH

### ldapsearch

- `ACL Abuse`
- `ldapsearch`
- `XSS`

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## CMD

### sharphound

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

- `XXE`
- `feroxbuster`
- `SQL Injection`
- `ligolo-ng`
- `pwncat`
- `bloodhound`

```powershell
evil-winrm -i 10.73.76.231 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.108.207
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.252.42
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## XSS

### GetNPUsers

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## Broken Access Control

### SSRF

```bash
nmap -sCV -p5432,5985,3306 10.40.88.72 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## rubeus

### Unquoted Service Path

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5986,21,993 10.67.43.166 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## HTTP

### AlwaysInstallElevated

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
