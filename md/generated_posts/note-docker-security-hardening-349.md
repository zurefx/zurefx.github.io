---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, blue team, cheatsheet"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-349.html"
URL_IMAGES: ""
Date: "2026-02-20"
Tags: "DFIR, Blue Team, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-349"
Permalink: "/notes/note-docker-security-hardening-349.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DLL Hijacking

### kerbrute

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## MongoDB

### Cron Job

- `XSS`
- `Broken Access Control`
- `LAPS Abuse`
- `ffuf`
- `AS-REP Roasting`

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

## Active Directory

### CSRF

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.253.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.173.73/FUZZ
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.216.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.47.48.20 -u administrator -p 'P@ssw0rd!' --shares
```

## Golden Ticket

### Ruby on Rails

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.141.176/FUZZ
nmap -sCV -p3389,143,3268 10.104.57.193 -oN scan.txt
```

> **Note:** IDOR was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.
