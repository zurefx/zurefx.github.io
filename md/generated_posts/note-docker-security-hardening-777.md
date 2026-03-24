---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, dfir, persistence, malware"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-777.html"
URL_IMAGES: ""
Date: "2025-12-09"
Tags: "Cheatsheet, DFIR, Persistence, Malware"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-777"
Permalink: "/notes/note-docker-security-hardening-777.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### SeImpersonatePrivilege

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

- `SSRF`
- `XSS`
- `smbclient`

## ligolo-ng

### Weak Service Permissions

```python
gobuster dir -u http://10.114.80.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `AS-REP Roasting`
- `Cron Job`
- `ACL Abuse`
- `Golden Ticket`
- `LXD Privilege Escalation`

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## MySQL

### SeDebugPrivilege

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.159.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.82.141.246/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## john

### Unconstrained Delegation

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## AlwaysInstallElevated

### DNS

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.79.107
nmap -sCV -p53,53,8080 10.85.11.92 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

- `DCSync`
- `Sudo Misconfiguration`
- `XSS`
