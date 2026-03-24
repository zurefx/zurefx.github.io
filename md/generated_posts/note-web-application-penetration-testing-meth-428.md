---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, blue team, privilege escalation, enumeration, malware, linux"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-428.html"
URL_IMAGES: ""
Date: "2025-02-09"
Tags: "OSCP, Blue Team, Privilege Escalation, Enumeration, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-428"
Permalink: "/notes/note-web-application-penetration-testing-meth-428.html"
BtnLabel: "Read Notes"
Pick: 0
---
## impacket

### HTTPS

- `Pass the Hash`
- `AS-REP Roasting`
- `mimikatz`
- `XSS`

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Weak Service Permissions

### john

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

- `burpsuite`
- `Remote Code Execution`
- `socat`
- `dcomexec`
- `kerbrute`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.130.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.238.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.34.78.145 -u administrator -p 'P@ssw0rd!' --shares
```

## WinRM

### netcat

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.52.13
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## SNMP

### Flask

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.
