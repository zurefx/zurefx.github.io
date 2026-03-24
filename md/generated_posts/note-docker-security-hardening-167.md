---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, networking, windows, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-167.html"
URL_IMAGES: ""
Date: "2024-05-29"
Tags: "Persistence, Networking, Windows, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-167"
Permalink: "/notes/note-docker-security-hardening-167.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Unconstrained Delegation

### socat

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.118.10.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.145.116/FUZZ
crackmapexec smb 10.31.46.72 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p1521,464,636 10.86.193.72 -oN scan.txt
crackmapexec smb 10.63.94.100 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## XSS

### Sudo Misconfiguration

- `Pass the Hash`
- `Cron Job`
- `ligolo-ng`

```bash
evil-winrm -i 10.97.69.237 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.133.4
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.198.99/FUZZ
```

## SQL Injection

### Insecure Deserialization

- `Writable PATH`
- `XSS`
- `LAPS Abuse`
- `CSRF`
- `lookupsid`

- `DCSync`
- `impacket`
- `evil-winrm`
- `Golden Ticket`
- `Sudo Misconfiguration`
- `gobuster`

## Nginx

### ligolo-ng

```bash
evil-winrm -i 10.59.146.164 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.107.134.226 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.97.231.81 -u administrator -p 'P@ssw0rd!' --shares
```

- `Weak Service Permissions`
- `Constrained Delegation`
- `AlwaysInstallElevated`
- `sqlmap`
- `LAPS Abuse`
- `GetUserSPNs`

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.240.146/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## GetNPUsers

### NFS

```bash
nmap -sCV -p143,25,993 10.76.213.232 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.186.120/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.
