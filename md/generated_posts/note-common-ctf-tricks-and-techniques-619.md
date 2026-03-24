---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, lateral movement, enumeration"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-619.html"
URL_IMAGES: ""
Date: "2024-03-12"
Tags: "DFIR, Lateral Movement, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-619"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-619.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberos

### Java

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.98.10.114 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.23.22.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

## hydra

### mimikatz

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.47.114
evil-winrm -i 10.20.69.127 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.7.25/FUZZ
```

## Ruby on Rails

### LXD Privilege Escalation

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `SSTI`
- `Weak Service Permissions`
- `Golden Ticket`
