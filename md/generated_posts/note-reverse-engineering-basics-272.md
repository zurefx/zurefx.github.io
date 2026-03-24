---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, windows, oscp, lateral movement, networking, linux"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-272.html"
URL_IMAGES: ""
Date: "2024-09-04"
Tags: "Privilege Escalation, Windows, OSCP, Lateral Movement, Networking, Linux"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-272"
Permalink: "/notes/note-reverse-engineering-basics-272.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### Drupal

```bash
gobuster dir -u http://10.72.64.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.109.87.80 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.176.199/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## msfvenom

### Windows Server 2019

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** Unconstrained Delegation was identified as the primary attack vector in this scenario.

```python
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.100.63/FUZZ
```

## evil-winrm

### enum4linux

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## psexec

### john

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Open Redirect`
- `GPP Password`
- `DLL Hijacking`
- `smbclient`
- `evil-winrm`
- `LAPS Abuse`

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.104.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.240.211
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

## Telnet

### ffuf

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

- `DLL Hijacking`
- `gobuster`
- `wmiexec`
- `Docker Escape`
- `Pass the Hash`

## Golden Ticket

### Silver Ticket

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

- `ACL Abuse`
- `wmiexec`
- `Cron Job`
- `Subdomain Takeover`
- `SSTI`

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.
