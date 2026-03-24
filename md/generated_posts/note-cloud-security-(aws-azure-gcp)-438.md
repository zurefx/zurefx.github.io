---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-438.html"
URL_IMAGES: ""
Date: "2025-02-08"
Tags: "Persistence, DFIR, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-438"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-438.html"
BtnLabel: "Read Notes"
Pick: 0
---
## atexec

### Laravel

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

- `ACL Abuse`
- `atexec`
- `Silver Ticket`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Telnet

### ligolo-ng

- `nikto`
- `Broken Access Control`
- `kerbrute`
- `Remote File Inclusion`
- `ACL Abuse`

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.98.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.128.164/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.120.103.208 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.218.19
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Local File Inclusion`
- `Pass the Hash`
- `Weak Service Permissions`
- `AS-REP Roasting`

## Pass the Ticket

### SSH

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Sudo Misconfiguration

### netcat

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```python
feroxbuster -h
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.126.8.116 -u administrator -p 'P@ssw0rd!'
```

## Writable PATH

### psexec

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

- `DLL Hijacking`
- `bloodhound`
- `DNS Rebinding`
- `Path Traversal`
- `pwncat`

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.71.193.51 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.
