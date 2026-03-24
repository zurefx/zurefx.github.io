---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "networking, malware, lateral movement, persistence, linux"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-499.html"
URL_IMAGES: ""
Date: "2024-04-10"
Tags: "Networking, Malware, Lateral Movement, Persistence, Linux"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-499"
Permalink: "/notes/note-sigma-rule-development-499.html"
BtnLabel: "Read Notes"
Pick: 0
---
## john

### Pass the Hash

- `DLL Hijacking`
- `Path Traversal`
- `SSTI`
- `ligolo-ng`
- `chisel`
- `XSS`

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## pwncat

### netcat

- `Command Injection`
- `dcomexec`
- `SSRF`

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.25.191/FUZZ
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## PostgreSQL

### DNS Rebinding

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.87.129
```

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

- `ldapsearch`
- `kerbrute`
- `Unquoted Service Path`
- `ligolo-ng`
- `Constrained Delegation`
- `SUID Binary`

## GetNPUsers

### Kali Linux

- `DNS Rebinding`
- `wpscan`
- `evil-winrm`
- `Constrained Delegation`

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

## gobuster

### Laravel

```bash
gobuster dir -u http://10.71.6.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

- `gobuster`
- `NFS No Root Squash`
- `rpcclient`
- `atexec`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.2.117
```

## DNS

### rpcclient

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.
