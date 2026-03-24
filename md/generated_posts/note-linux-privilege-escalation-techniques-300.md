---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, persistence, malware"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-300.html"
URL_IMAGES: ""
Date: "2026-03-21"
Tags: "Enumeration, Persistence, Malware"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-300"
Permalink: "/notes/note-linux-privilege-escalation-techniques-300.html"
BtnLabel: "Read Notes"
Pick: 0
---
## sharphound

### rpcclient

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
evil-winrm -i 10.74.80.4 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3268,5985,464 10.59.133.196 -oN scan.txt
crackmapexec smb 10.10.240.175 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## psexec

### DNS

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
```

- `bloodhound`
- `Docker Escape`
- `smbexec`
- `Path Traversal`

## FTP

### Elasticsearch

```python
crackmapexec smb 10.99.225.138 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.238.139
feroxbuster -h
nmap -sCV -p636,1521,443 10.50.49.160 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

- `sharphound`
- `Insecure Deserialization`
- `enum4linux`
- `wpscan`

## burpsuite

### PostgreSQL

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.
