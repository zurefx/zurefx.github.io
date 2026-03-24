---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, blue team, linux"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-968.html"
URL_IMAGES: ""
Date: "2025-06-12"
Tags: "Enumeration, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-968"
Permalink: "/notes/note-incident-response-playbook-968.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SUID Binary

### psexec

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.208.86/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
evil-winrm -i 10.15.144.94 -u administrator -p 'P@ssw0rd!'
```

```bash
crackmapexec smb 10.90.157.27 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.27.142.58 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.27.77
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## NTLM Relay

### wpscan

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.6.18
```

```bash
evil-winrm -i 10.69.199.225 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Apache

### SSRF

- `Command Injection`
- `GetUserSPNs`
- `secretsdump`
- `SeImpersonatePrivilege`
- `DNS Rebinding`
- `XXE`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.178.238/FUZZ
```

## LXD Privilege Escalation

### Insecure Deserialization

- `Subdomain Takeover`
- `LAPS Abuse`
- `impacket`
- `Resource-Based Constrained Delegation`
- `gobuster`
- `secretsdump`

- `Cron Job`
- `Resource-Based Constrained Delegation`
- `XSS`
- `wpscan`

## chisel

### pwncat

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p1433,53,139 10.123.152.248 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.21.4
evil-winrm -i 10.67.95.107 -u administrator -p 'P@ssw0rd!'
```

## NFS

### Python

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.167.167
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.
