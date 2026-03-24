---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "linux, privilege escalation, cheatsheet"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-341.html"
URL_IMAGES: ""
Date: "2025-09-11"
Tags: "Linux, Privilege Escalation, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-341"
Permalink: "/notes/note-mitre-att&ck-framework-reference-341.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GPP Password

### PostgreSQL

- `dcomexec`
- `lookupsid`
- `Resource-Based Constrained Delegation`
- `enum4linux`
- `psexec`

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Laravel

### lookupsid

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

> **Note:** GPP Password was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## SeDebugPrivilege

### ligolo-ng

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.222.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.114.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.123.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

- `Local File Inclusion`
- `sqlmap`
- `Pass the Hash`

- `hashcat`
- `Writable PATH`
- `Command Injection`
- `mimikatz`

```bash
feroxbuster -h
gobuster dir -u http://10.112.188.248/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.74.95/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Java

### Local File Inclusion

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `sharphound`
- `enum4linux`
- `Cron Job`
- `burpsuite`

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.
