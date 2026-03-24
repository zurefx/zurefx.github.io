---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, dfir, privilege escalation"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-573.html"
URL_IMAGES: ""
Date: "2025-07-29"
Tags: "Enumeration, DFIR, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-573"
Permalink: "/notes/note-bash-one-liners-for-security-testing-573.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SMTP

### GetUserSPNs

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `wpscan`
- `Constrained Delegation`
- `impacket`
- `atexec`
- `Insecure Deserialization`
- `gobuster`

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## evil-winrm

### Spring

- `AlwaysInstallElevated`
- `ldapsearch`
- `rubeus`
- `msfvenom`
- `Subdomain Takeover`

- `enum4linux`
- `Path Traversal`
- `Kerberoasting`
- `burpsuite`

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## LXD Privilege Escalation

### Broken Access Control

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.11.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.112.46.188 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## lookupsid

### sharphound

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `XSS`
- `Path Traversal`
- `DLL Hijacking`
- `nmap`
- `SSTI`
- `AlwaysInstallElevated`

## netcat

### Command Injection

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p1433,8080,23 10.30.128.180 -oN scan.txt
```

## CORS Misconfiguration

### LDAP

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

- `burpsuite`
- `GetUserSPNs`
- `SeImpersonatePrivilege`
- `Silver Ticket`
- `wmiexec`

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.
