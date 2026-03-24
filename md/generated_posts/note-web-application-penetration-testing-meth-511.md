---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "windows, enumeration, dfir, cheatsheet"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-511.html"
URL_IMAGES: ""
Date: "2025-03-25"
Tags: "Windows, Enumeration, DFIR, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-511"
Permalink: "/notes/note-web-application-penetration-testing-meth-511.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### NFS No Root Squash

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.80.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.241.47/FUZZ
crackmapexec smb 10.88.253.47 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

## .NET

### Joomla

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## chisel

### kerbrute

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.233.53
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.
