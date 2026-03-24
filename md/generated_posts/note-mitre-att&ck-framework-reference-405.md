---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "malware, windows, dfir, persistence"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-405.html"
URL_IMAGES: ""
Date: "2024-01-31"
Tags: "Malware, Windows, DFIR, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-405"
Permalink: "/notes/note-mitre-att&ck-framework-reference-405.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Elasticsearch

### dcomexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

- `ffuf`
- `Docker Escape`
- `metasploit`

```bash
gobuster dir -u http://10.80.18.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,21,143 10.68.192.230 -oN scan.txt
crackmapexec smb 10.116.42.168 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

## Remote File Inclusion

### Django

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `smbclient`
- `Unconstrained Delegation`
- `rubeus`
- `mimikatz`

## Local File Inclusion

### Ubuntu 20.04

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Ruby on Rails

### Windows Server 2019

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.94.73.54 -u administrator -p 'P@ssw0rd!'
```

```bash
gobuster dir -u http://10.113.173.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.28.41.169 -u administrator -p 'P@ssw0rd!' --shares
```

## LAPS Abuse

### DNS Rebinding

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

- `DNS Rebinding`
- `Golden Ticket`
- `Sudo Misconfiguration`

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## pwncat

### SSRF

- `SSRF`
- `Local File Inclusion`
- `Docker Escape`
- `msfvenom`
- `john`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.230.86
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.104.154
```

```powershell
evil-winrm -i 10.35.178.101 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.36.41/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.
