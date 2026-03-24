---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, networking, lateral movement, dfir"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-844.html"
URL_IMAGES: ""
Date: "2024-06-06"
Tags: "Persistence, Privilege Escalation, Networking, Lateral Movement, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-844"
Permalink: "/notes/note-reverse-engineering-basics-844.html"
BtnLabel: "Read Notes"
Pick: 0
---
## feroxbuster

### WinRM

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

## HTTPS

### psexec

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.51.77.154 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8080,464,9200 10.77.47.194 -oN scan.txt
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.18.111.128 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.102.15.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## ACL Abuse

### hashcat

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.
