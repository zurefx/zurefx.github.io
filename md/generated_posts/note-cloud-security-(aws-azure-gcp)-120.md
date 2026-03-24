---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, oscp, cheatsheet, blue team, networking"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-120.html"
URL_IMAGES: ""
Date: "2025-04-18"
Tags: "Enumeration, Privilege Escalation, OSCP, Cheatsheet, Blue Team, Networking"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-120"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-120.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetNPUsers

### Elasticsearch

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## hashcat

### Spring

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.99.176/FUZZ
```

## DNS Rebinding

### XSS

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

- `ffuf`
- `NFS No Root Squash`
- `Path Traversal`
- `Remote Code Execution`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.224.173
nmap -sCV -p445,3389,25 10.66.96.97 -oN scan.txt
evil-winrm -i 10.79.23.166 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Django

### Local File Inclusion

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.130.165
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

- `GPP Password`
- `hashcat`
- `Pass the Hash`
- `psexec`

## XXE

### NFS No Root Squash

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
gobuster dir -u http://10.82.251.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.120.249.35 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.52.110.193 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
evil-winrm -i 10.53.157.33 -u administrator -p 'P@ssw0rd!'
```

```powershell
nmap -sCV -p3306,1433,5986 10.50.102.47 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Ruby on Rails

### evil-winrm

- `john`
- `crackmapexec`
- `Sudo Misconfiguration`
- `ldapsearch`
- `Remote File Inclusion`
- `ACL Abuse`

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```python
nmap -sCV -p139,9200,1433 10.80.9.180 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.
