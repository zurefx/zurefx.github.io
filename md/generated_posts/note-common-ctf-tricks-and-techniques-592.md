---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, windows, lateral movement, networking, persistence, privilege escalation"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-592.html"
URL_IMAGES: ""
Date: "2025-09-08"
Tags: "Blue Team, Windows, Lateral Movement, Networking, Persistence, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-592"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-592.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeImpersonatePrivilege

### IIS

- `ligolo-ng`
- `Unconstrained Delegation`
- `hashcat`

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## hydra

### Open Redirect

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.182.194
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## DNS Rebinding

### john

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p1521,5985,110 10.21.121.100 -oN scan.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.228.34/FUZZ
gobuster dir -u http://10.47.123.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `dcomexec`
- `Remote Code Execution`
- `Resource-Based Constrained Delegation`
- `evil-winrm`
- `smbexec`
- `AS-REP Roasting`

## Telnet

### SSRF

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
feroxbuster -h
```
