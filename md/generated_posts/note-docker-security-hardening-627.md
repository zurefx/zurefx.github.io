---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, oscp, linux, privilege escalation"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-627.html"
URL_IMAGES: ""
Date: "2026-01-16"
Tags: "Blue Team, OSCP, Linux, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-627"
Permalink: "/notes/note-docker-security-hardening-627.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Constrained Delegation

### bloodhound

- `wmiexec`
- `john`
- `Insecure Deserialization`
- `GetNPUsers`
- `Open Redirect`
- `Command Injection`

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Unquoted Service Path

### Django

- `Weak Service Permissions`
- `sqlmap`
- `Path Traversal`
- `gobuster`
- `CORS Misconfiguration`

```powershell
crackmapexec smb 10.128.147.234 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.193.87/FUZZ
```

## GetUserSPNs

### dcomexec

- `impacket`
- `NTLM Relay`
- `SSRF`
- `Golden Ticket`
- `chisel`

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## kerbrute

### WinRM

```bash
gobuster dir -u http://10.107.245.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.117.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.148.129 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.95.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## GetNPUsers

### RPC

```bash
nmap -sCV -p22,3268,995 10.68.140.88 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.
