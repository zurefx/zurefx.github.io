---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, windows, dfir, malware, enumeration"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-429.html"
URL_IMAGES: ""
Date: "2024-12-16"
Tags: "OSCP, Windows, DFIR, Malware, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-429"
Permalink: "/notes/note-yara-rule-writing-429.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### psexec

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.144.89
gobuster dir -u http://10.62.27.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.90.106.38 -u administrator -p 'P@ssw0rd!'
```

## Insecure Deserialization

### burpsuite

- `LAPS Abuse`
- `Broken Access Control`
- `hydra`
- `Unconstrained Delegation`

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

## SQL Injection

### MSSQL

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.53.98
nmap -sCV -p389,636,443 10.91.7.44 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Constrained Delegation

### chisel

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.149.89
gobuster dir -u http://10.129.107.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.155.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.
