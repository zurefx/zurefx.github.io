---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, cheatsheet, oscp, linux, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-523.html"
URL_IMAGES: ""
Date: "2025-04-25"
Tags: "Lateral Movement, Cheatsheet, OSCP, Linux, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-523"
Permalink: "/notes/note-active-directory-attack-paths-523.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IMAP

### hashcat

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

- `psexec`
- `Pass the Hash`
- `sqlmap`
- `LXD Privilege Escalation`
- `ldapsearch`

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

- `hydra`
- `Remote Code Execution`
- `ACL Abuse`

## Pass the Ticket

### Elasticsearch

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

- `SUID Binary`
- `impacket`
- `Open Redirect`
- `LAPS Abuse`
- `Path Traversal`

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## nikto

### GPP Password

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.137.147
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Apache

### chisel

```bash
nmap -sCV -p9200,8443,3268 10.123.59.61 -oN scan.txt
crackmapexec smb 10.57.4.198 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.
