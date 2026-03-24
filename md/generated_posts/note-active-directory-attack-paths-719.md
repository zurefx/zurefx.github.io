---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, cheatsheet, malware, oscp, windows"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-719.html"
URL_IMAGES: ""
Date: "2025-03-07"
Tags: "Privilege Escalation, Cheatsheet, Malware, OSCP, Windows"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-719"
Permalink: "/notes/note-active-directory-attack-paths-719.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XXE

### Weak Service Permissions

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.141.80
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## SUID Binary

### Flask

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## DLL Hijacking

### WordPress

```bash
gobuster dir -u http://10.55.85.126/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,3268,636 10.60.147.104 -oN scan.txt
nmap -sCV -p995,8080,3268 10.93.71.205 -oN scan.txt
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.125.190.195 -u administrator -p 'P@ssw0rd!' --shares
```

## Insecure Deserialization

### Command Injection

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.
