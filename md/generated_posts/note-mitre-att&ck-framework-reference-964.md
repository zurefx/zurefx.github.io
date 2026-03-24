---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, windows, malware"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-964.html"
URL_IMAGES: ""
Date: "2024-04-09"
Tags: "Persistence, Blue Team, Windows, Malware"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-964"
Permalink: "/notes/note-mitre-att&ck-framework-reference-964.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### PowerShell

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Kerberoasting

### burpsuite

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `atexec`
- `wmiexec`
- `enum4linux`
- `CORS Misconfiguration`

## sharphound

### Python

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p5986,110,995 10.20.56.178 -oN scan.txt
```

- `impacket`
- `Weak Service Permissions`
- `Silver Ticket`
- `pwncat`

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## WordPress

### Active Directory

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.25.85.148 -u administrator -p 'P@ssw0rd!'
```

- `DCSync`
- `Writable PATH`
- `nikto`

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## AlwaysInstallElevated

### msfvenom

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.247.228
evil-winrm -i 10.98.36.152 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.117.182.147 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.36.216.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
feroxbuster -h
crackmapexec smb 10.17.231.116 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.174.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.
