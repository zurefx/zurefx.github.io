---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, networking, linux, enumeration, cheatsheet"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-445.html"
URL_IMAGES: ""
Date: "2024-07-25"
Tags: "Blue Team, Networking, Linux, Enumeration, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-445"
Permalink: "/notes/note-oscp-exam-preparation-notes-445.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Golden Ticket

### SMB

```bash
gobuster dir -u http://10.106.241.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.84.192.208 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.59.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.244.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## IDOR

### AlwaysInstallElevated

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

## Remote Code Execution

### NTLM Relay

```python
crackmapexec smb 10.24.144.63 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,1433,80 10.76.42.212 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.
