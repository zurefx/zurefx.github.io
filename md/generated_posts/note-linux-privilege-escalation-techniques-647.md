---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, windows, privilege escalation"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-647.html"
URL_IMAGES: ""
Date: "2025-10-05"
Tags: "Blue Team, Windows, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-647"
Permalink: "/notes/note-linux-privilege-escalation-techniques-647.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GPP Password

### FTP

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p143,110,22 10.71.17.181 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.12.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.126.202 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Kerberoasting

### Spring

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.1.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.130.11/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## ligolo-ng

### kerbrute

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.16.213 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Subdomain Takeover

### XXE

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.218.219
feroxbuster -h
```

- `Constrained Delegation`
- `metasploit`
- `pwncat`
- `hydra`
- `ffuf`

## atexec

### lookupsid

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

- `impacket`
- `sqlmap`
- `Golden Ticket`

```bash
nmap -sCV -p445,389,3268 10.111.222.42 -oN scan.txt
gobuster dir -u http://10.54.83.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
