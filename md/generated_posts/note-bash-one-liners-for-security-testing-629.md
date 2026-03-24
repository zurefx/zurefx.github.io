---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, networking, linux, windows, cheatsheet, malware"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-629.html"
URL_IMAGES: ""
Date: "2024-08-23"
Tags: "DFIR, Networking, Linux, Windows, Cheatsheet, Malware"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-629"
Permalink: "/notes/note-bash-one-liners-for-security-testing-629.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Docker Escape

### Remote File Inclusion

```bash
evil-winrm -i 10.30.252.104 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p53,3306,443 10.100.208.51 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.41.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
nmap -sCV -p389,993,993 10.18.90.202 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5985,21,389 10.29.78.245 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## evil-winrm

### Pass the Ticket

```python
crackmapexec smb 10.109.38.17 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.199.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.249.217/FUZZ
```

```bash
gobuster dir -u http://10.98.72.5/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

- `ldapsearch`
- `ligolo-ng`
- `Pass the Ticket`
- `Unconstrained Delegation`
- `CSRF`
- `atexec`

- `Path Traversal`
- `bloodhound`
- `XSS`
- `Open Redirect`
- `lookupsid`
- `ffuf`

## enum4linux

### Ubuntu 20.04

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

- `Sudo Misconfiguration`
- `ligolo-ng`
- `Silver Ticket`

## POP3

### Telnet

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
crackmapexec smb 10.68.24.81 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.127.51
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.29.77/FUZZ
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.85.251/FUZZ
```

- `SUID Binary`
- `smbclient`
- `SeDebugPrivilege`
