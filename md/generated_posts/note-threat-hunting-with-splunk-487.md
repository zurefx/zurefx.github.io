---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "windows, privilege escalation, cheatsheet, persistence, dfir, lateral movement"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-487.html"
URL_IMAGES: ""
Date: "2024-11-02"
Tags: "Windows, Privilege Escalation, Cheatsheet, Persistence, DFIR, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-487"
Permalink: "/notes/note-threat-hunting-with-splunk-487.html"
BtnLabel: "Read Notes"
Pick: 0
---
## sqlmap

### SSRF

```bash
feroxbuster -h
```

- `smbexec`
- `Docker Escape`
- `chisel`

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## PowerShell

### hydra

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** SSRF was identified as the primary attack vector in this scenario.

```bash
crackmapexec smb 10.82.177.190 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.33.118.98 -u administrator -p 'P@ssw0rd!' --shares
```

- `socat`
- `SeImpersonatePrivilege`
- `SSRF`

## Debian

### PostgreSQL

> **Note:** SeImpersonatePrivilege was identified as the primary attack vector in this scenario.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Windows Server 2019

### kerbrute

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

- `ldapsearch`
- `chisel`
- `rubeus`
- `DNS Rebinding`

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## smbclient

### Ubuntu 20.04

```powershell
gobuster dir -u http://10.45.54.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3306,3389,1433 10.98.246.70 -oN scan.txt
```

```bash
crackmapexec smb 10.42.80.200 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
nmap -sCV -p5986,27017,53 10.58.10.240 -oN scan.txt
```

- `nikto`
- `Pass the Ticket`
- `ffuf`

## lookupsid

### RDP

```python
crackmapexec smb 10.122.145.40 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.24.170.143 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `burpsuite`
- `rpcclient`
- `ldapsearch`
- `secretsdump`

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.
