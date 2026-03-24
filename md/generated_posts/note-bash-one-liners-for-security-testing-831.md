---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "linux, malware, oscp, cheatsheet"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-831.html"
URL_IMAGES: ""
Date: "2024-11-24"
Tags: "Linux, Malware, OSCP, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-831"
Permalink: "/notes/note-bash-one-liners-for-security-testing-831.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Golden Ticket

### MSSQL

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.84.95 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.79.175.125 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## pwncat

### PHP

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Drupal

### AS-REP Roasting

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.
