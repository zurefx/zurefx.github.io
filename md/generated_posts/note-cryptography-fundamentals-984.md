---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, networking, dfir, blue team"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-984.html"
URL_IMAGES: ""
Date: "2025-12-28"
Tags: "Cheatsheet, Networking, DFIR, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-984"
Permalink: "/notes/note-cryptography-fundamentals-984.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Debian

### Writable PATH

```powershell
evil-winrm -i 10.83.20.7 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `ffuf`
- `crackmapexec`
- `john`

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## lookupsid

### Insecure Deserialization

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.105.48
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## GPP Password

### Kerberoasting

- `Subdomain Takeover`
- `ACL Abuse`
- `pwncat`

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.58.11
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.155.23/FUZZ
nmap -sCV -p135,135,5432 10.58.178.141 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.114.144/FUZZ
```
