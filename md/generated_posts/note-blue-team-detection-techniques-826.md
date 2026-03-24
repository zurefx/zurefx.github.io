---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, linux, dfir, lateral movement"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-826.html"
URL_IMAGES: ""
Date: "2024-11-13"
Tags: "Malware, Linux, DFIR, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-826"
Permalink: "/notes/note-blue-team-detection-techniques-826.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Pass the Ticket

### SeImpersonatePrivilege

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p53,5986,3268 10.122.60.225 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.237.202
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.20.148
nmap -sCV -p464,587,5985 10.62.67.225 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## MSSQL

### SNMP

- `Insecure Deserialization`
- `sqlmap`
- `feroxbuster`
- `SSRF`
- `XXE`
- `SQL Injection`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.35.25/FUZZ
crackmapexec smb 10.128.254.108 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3268,3389,53 10.40.249.63 -oN scan.txt
nmap -sCV -p445,5432,445 10.58.26.138 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## SUID Binary

### kerbrute

- `Path Traversal`
- `Weak Service Permissions`
- `crackmapexec`
- `ffuf`

```powershell
gobuster dir -u http://10.90.172.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,8080,1433 10.19.163.202 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## IDOR

### secretsdump

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Writable PATH

### Python

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

- `smbclient`
- `hashcat`
- `Resource-Based Constrained Delegation`
- `gobuster`
- `NFS No Root Squash`
- `Open Redirect`

- `Unconstrained Delegation`
- `enum4linux`
- `SSRF`
- `Weak Service Permissions`

```powershell
gobuster dir -u http://10.86.86.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,1521,389 10.57.161.142 -oN scan.txt
```
