---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, cheatsheet, privilege escalation, enumeration, persistence"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-774.html"
URL_IMAGES: ""
Date: "2025-05-15"
Tags: "Windows, OSCP, Cheatsheet, Privilege Escalation, Enumeration, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-774"
Permalink: "/notes/note-incident-response-playbook-774.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Pass the Ticket

### SSTI

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.213.14
crackmapexec smb 10.126.5.11 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.89.51
crackmapexec smb 10.56.207.88 -u administrator -p 'P@ssw0rd!' --shares
```

## wpscan

### Laravel

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p8888,5986,995 10.129.91.215 -oN scan.txt
evil-winrm -i 10.70.18.87 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.199.2 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `bloodhound`
- `DLL Hijacking`
- `smbclient`
- `Open Redirect`

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.120.12/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.72.154.252 -u administrator -p 'P@ssw0rd!' --shares
```

## Kerberoasting

### WordPress

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Drupal

### chisel

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.
