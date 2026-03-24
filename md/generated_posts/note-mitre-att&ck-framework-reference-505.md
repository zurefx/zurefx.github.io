---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "windows, enumeration, blue team, persistence"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-505.html"
URL_IMAGES: ""
Date: "2024-09-01"
Tags: "Windows, Enumeration, Blue Team, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-505"
Permalink: "/notes/note-mitre-att&ck-framework-reference-505.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Weak Service Permissions

### atexec

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `Remote File Inclusion`
- `metasploit`
- `NTLM Relay`
- `Path Traversal`
- `Constrained Delegation`
- `nmap`

## .NET

### IDOR

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

- `impacket`
- `Constrained Delegation`
- `AlwaysInstallElevated`
- `GetNPUsers`
- `LXD Privilege Escalation`
- `metasploit`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.46.205/FUZZ
evil-winrm -i 10.97.81.81 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Laravel

### HTTP

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `crackmapexec`
- `chisel`
- `NTLM Relay`
- `Silver Ticket`

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## socat

### Flask

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.68.125
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.175.27
nmap -sCV -p445,445,445 10.36.36.233 -oN scan.txt
```

## GetUserSPNs

### CentOS

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5986,143,1433 10.35.226.182 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.211.36
nmap -sCV -p110,993,5985 10.50.127.28 -oN scan.txt
```

- `GetNPUsers`
- `metasploit`
- `LAPS Abuse`
- `secretsdump`
- `AlwaysInstallElevated`

- `smbexec`
- `sqlmap`
- `DCSync`
- `SSTI`
- `Unquoted Service Path`
- `dcomexec`

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## hashcat

### RPC

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.195.85
gobuster dir -u http://10.15.24.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `SUID Binary`
- `CSRF`
- `hashcat`

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.34.115/FUZZ
nmap -sCV -p5985,5986,3389 10.95.227.178 -oN scan.txt
```
