---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-487.html"
URL_IMAGES: ""
Date: "2025-06-05"
Tags: "Blue Team, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-487"
Permalink: "/notes/note-kubernetes-security-assessment-487.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ligolo-ng

### nmap

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.167.120/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
```

```bash
evil-winrm -i 10.18.114.52 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.219.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## ldapsearch

### Ubuntu 20.04

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

- `Resource-Based Constrained Delegation`
- `Docker Escape`
- `bloodhound`
- `ldapsearch`

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## NTLM Relay

### sharphound

- `psexec`
- `wmiexec`
- `netcat`
- `impacket`

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.
