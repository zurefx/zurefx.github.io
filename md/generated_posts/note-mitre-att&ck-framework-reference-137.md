---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, persistence, linux, dfir"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-137.html"
URL_IMAGES: ""
Date: "2025-09-05"
Tags: "Cheatsheet, Persistence, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-137"
Permalink: "/notes/note-mitre-att&ck-framework-reference-137.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### ligolo-ng

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.130.245
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.172.157/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.106.80/FUZZ
```

## MySQL

### atexec

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.70.153.107 -u administrator -p 'P@ssw0rd!'
```

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Telnet

### DCSync

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```python
gobuster dir -u http://10.73.77.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).
