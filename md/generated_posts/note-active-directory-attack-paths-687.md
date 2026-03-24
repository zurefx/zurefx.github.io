---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, blue team, windows, dfir, linux, lateral movement"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-687.html"
URL_IMAGES: ""
Date: "2024-04-07"
Tags: "Cheatsheet, Blue Team, Windows, DFIR, Linux, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-687"
Permalink: "/notes/note-active-directory-attack-paths-687.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CSRF

### ligolo-ng

- `Silver Ticket`
- `GetUserSPNs`
- `sharphound`

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.31.196/FUZZ
evil-winrm -i 10.114.103.134 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.123.44.5 -u administrator -p 'P@ssw0rd!'
```

## Ubuntu 20.04

### IDOR

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Kerberoasting

### nmap

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## burpsuite

### Redis

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.246.17
nmap -sCV -p135,587,3268 10.65.134.133 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `sharphound`
- `nmap`
- `rubeus`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.81.178.233 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.97.4.130 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.100.72.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## FTP

### Silver Ticket

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.111.159.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## SNMP

### impacket

- `smbexec`
- `dcomexec`
- `gobuster`

```bash
nmap -sCV -p993,8443,8888 10.21.15.78 -oN scan.txt
nmap -sCV -p5986,445,1433 10.124.207.83 -oN scan.txt
crackmapexec smb 10.36.248.39 -u administrator -p 'P@ssw0rd!' --shares
```
