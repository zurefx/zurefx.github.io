---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "blue team, malware, dfir, cheatsheet, networking, persistence"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-955.html"
URL_IMAGES: ""
Date: "2025-06-01"
Tags: "Blue Team, Malware, DFIR, Cheatsheet, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-955"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-955.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### .NET

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.225.133/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.111.195/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## WinRM

### Golden Ticket

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.113.51.175 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.40.147.150 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

- `Constrained Delegation`
- `impacket`
- `sharphound`

- `hashcat`
- `SSTI`
- `Constrained Delegation`

## SSRF

### Insecure Deserialization

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.143.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.59.155/FUZZ
```

```bash
nmap -sCV -p5985,5985,3389 10.19.252.106 -oN scan.txt
gobuster dir -u http://10.103.38.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.26.71.193 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,143,110 10.46.33.191 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## msfvenom

### Python

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## SUID Binary

### PostgreSQL

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.217.32
feroxbuster -h
```

```powershell
evil-winrm -i 10.22.155.168 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## IIS

### SQL Injection

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.184.51/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.
