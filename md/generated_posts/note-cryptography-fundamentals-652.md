---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "networking, malware, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-652.html"
URL_IMAGES: ""
Date: "2025-08-13"
Tags: "Networking, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-652"
Permalink: "/notes/note-cryptography-fundamentals-652.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hashcat

### Debian

- `Pass the Ticket`
- `mimikatz`
- `atexec`
- `evil-winrm`
- `secretsdump`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.197.57
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.72.198/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.233.64/FUZZ
crackmapexec smb 10.100.57.70 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## impacket

### MySQL

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## LAPS Abuse

### AlwaysInstallElevated

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.40.188/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.177.81
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `psexec`
- `DLL Hijacking`
- `SeImpersonatePrivilege`

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## IDOR

### Sudo Misconfiguration

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.225.12
feroxbuster -h
gobuster dir -u http://10.93.158.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `hashcat`
- `kerbrute`
- `ldapsearch`
- `GetNPUsers`
- `rubeus`
- `chisel`
