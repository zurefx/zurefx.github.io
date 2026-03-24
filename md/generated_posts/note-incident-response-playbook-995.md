---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, blue team, linux, privilege escalation"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-995.html"
URL_IMAGES: ""
Date: "2024-02-01"
Tags: "Persistence, Blue Team, Linux, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-995"
Permalink: "/notes/note-incident-response-playbook-995.html"
BtnLabel: "Read Notes"
Pick: 0
---
## HTTPS

### Kerberos

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Django

### netcat

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.77.225.171 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.36.245 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Insecure Deserialization

### ACL Abuse

- `psexec`
- `evil-winrm`
- `SUID Binary`
- `Unconstrained Delegation`

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `Pass the Hash`
- `Silver Ticket`
- `ACL Abuse`
- `SUID Binary`
- `nikto`
- `Writable PATH`
