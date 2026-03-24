---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "networking, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-568.html"
URL_IMAGES: ""
Date: "2024-09-24"
Tags: "Networking, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-568"
Permalink: "/notes/note-web-application-penetration-testing-meth-568.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Laravel

### Active Directory

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `secretsdump`
- `wpscan`
- `crackmapexec`
- `NTLM Relay`

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

- `ldapsearch`
- `burpsuite`
- `NTLM Relay`
- `msfvenom`
- `IDOR`

## socat

### Windows Server 2019

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Insecure Deserialization

### .NET

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Drupal

### Pass the Ticket

- `CSRF`
- `ffuf`
- `AlwaysInstallElevated`

- `CORS Misconfiguration`
- `nikto`
- `ffuf`
- `pwncat`
- `LXD Privilege Escalation`
- `SeImpersonatePrivilege`

```bash
evil-winrm -i 10.17.76.205 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.10.58.52 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.127.144.62 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## gobuster

### HTTPS

- `GPP Password`
- `sharphound`
- `ffuf`
- `wmiexec`

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

- `smbexec`
- `atexec`
- `Silver Ticket`
- `psexec`
- `rubeus`
