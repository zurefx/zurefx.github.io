---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-160.html"
URL_IMAGES: ""
Date: "2026-02-02"
Tags: "Enumeration, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-160"
Permalink: "/notes/note-cryptography-fundamentals-160.html"
BtnLabel: "Read Notes"
Pick: 0
---
## dcomexec

### Ubuntu 20.04

- `lookupsid`
- `SSTI`
- `mimikatz`

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Open Redirect

### SNMP

```bash
evil-winrm -i 10.107.99.28 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.88.73.252 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.4.76/FUZZ
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.61.94/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## SSRF

### Nginx

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```python
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `Insecure Deserialization`
- `impacket`
- `ACL Abuse`
- `metasploit`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.50.150 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
