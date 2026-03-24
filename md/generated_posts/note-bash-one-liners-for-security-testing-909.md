---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-909.html"
URL_IMAGES: ""
Date: "2024-02-28"
Tags: "Windows, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-909"
Permalink: "/notes/note-bash-one-liners-for-security-testing-909.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### Writable PATH

- `ligolo-ng`
- `ldapsearch`
- `burpsuite`
- `socat`

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## wpscan

### Java

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.87.115.212/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.72.18.139 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## Kali Linux

### MySQL

```bash
feroxbuster -h
```

- `Local File Inclusion`
- `Constrained Delegation`
- `Silver Ticket`

```bash
nmap -sCV -p21,27017,8888 10.85.107.176 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.171.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.92.2.181 -u administrator -p 'P@ssw0rd!' --shares
```

## smbclient

### Telnet

- `hydra`
- `Constrained Delegation`
- `john`
- `IDOR`
- `Unconstrained Delegation`

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Joomla

### chisel

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

- `ldapsearch`
- `crackmapexec`
- `DNS Rebinding`
- `Kerberoasting`
- `DLL Hijacking`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.20.29/FUZZ
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
gobuster dir -u http://10.73.122.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

## kerbrute

### burpsuite

```bash
feroxbuster -h
```

```python
evil-winrm -i 10.60.182.253 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.127.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.34.146.42 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).
