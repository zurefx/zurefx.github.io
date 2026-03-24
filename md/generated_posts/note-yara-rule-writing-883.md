---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, cheatsheet, oscp, blue team, lateral movement"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-883.html"
URL_IMAGES: ""
Date: "2024-03-12"
Tags: "Persistence, Cheatsheet, OSCP, Blue Team, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-883"
Permalink: "/notes/note-yara-rule-writing-883.html"
BtnLabel: "Read Notes"
Pick: 0
---
## wpscan

### pwncat

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.195.57/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## chisel

### IIS

```bash
evil-winrm -i 10.66.112.14 -u administrator -p 'P@ssw0rd!'
```

```bash
evil-winrm -i 10.50.11.41 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p993,143,135 10.75.103.170 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.71.67
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## SNMP

### LAPS Abuse

```bash
evil-winrm -i 10.60.146.168 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.196.35/FUZZ
evil-winrm -i 10.81.167.251 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

- `XXE`
- `NTLM Relay`
- `Weak Service Permissions`

## DNS

### metasploit

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

- `impacket`
- `nikto`
- `SSTI`
- `ACL Abuse`
- `pwncat`
- `XXE`

- `SSRF`
- `psexec`
- `Remote File Inclusion`
- `Writable PATH`
- `rubeus`

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

- `burpsuite`
- `Constrained Delegation`
- `bloodhound`
- `Pass the Hash`
- `SQL Injection`
- `metasploit`
