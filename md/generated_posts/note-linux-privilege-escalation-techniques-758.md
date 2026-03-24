---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-758.html"
URL_IMAGES: ""
Date: "2024-05-06"
Tags: "Cheatsheet, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-758"
Permalink: "/notes/note-linux-privilege-escalation-techniques-758.html"
BtnLabel: "Read Notes"
Pick: 0
---
## burpsuite

### Command Injection

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p445,995,22 10.70.43.238 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.39.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## socat

### psexec

- `Pass the Ticket`
- `Weak Service Permissions`
- `SQL Injection`
- `mimikatz`
- `ldapsearch`
- `SeImpersonatePrivilege`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.109.104
```

## LXD Privilege Escalation

### Telnet

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Command Injection`
- `Local File Inclusion`
- `psexec`

```bash
nmap -sCV -p5432,636,9200 10.125.206.54 -oN scan.txt
crackmapexec smb 10.62.99.44 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.224.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Debian

### sqlmap

```bash
gobuster dir -u http://10.18.26.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Weak Service Permissions

### lookupsid

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

- `john`
- `evil-winrm`
- `rubeus`
- `NFS No Root Squash`
- `SeImpersonatePrivilege`

```powershell
crackmapexec smb 10.93.142.30 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Golden Ticket

### Kerberoasting

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.16.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.72.232.88 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.
