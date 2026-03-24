---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, oscp, linux, lateral movement, windows"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-706.html"
URL_IMAGES: ""
Date: "2024-10-25"
Tags: "Blue Team, OSCP, Linux, Lateral Movement, Windows"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-706"
Permalink: "/notes/note-kubernetes-security-assessment-706.html"
BtnLabel: "Read Notes"
Pick: 0
---
## secretsdump

### psexec

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.27.15.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.60.140
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.131.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.123.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

## SUID Binary

### Telnet

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

- `SSRF`
- `IDOR`
- `ACL Abuse`
- `evil-winrm`

## XSS

### RPC

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `sqlmap`
- `enum4linux`
- `Docker Escape`
- `Remote Code Execution`
- `feroxbuster`

## AlwaysInstallElevated

### Bash

```powershell
gobuster dir -u http://10.72.223.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,143,5432 10.80.19.58 -oN scan.txt
gobuster dir -u http://10.71.246.74/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `smbclient`
- `psexec`
- `ldapsearch`
- `hydra`
- `enum4linux`

## XXE

### Constrained Delegation

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.10.176.125 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.86.32/FUZZ
evil-winrm -i 10.85.54.110 -u administrator -p 'P@ssw0rd!'
```

- `msfvenom`
- `SeDebugPrivilege`
- `IDOR`

## Insecure Deserialization

### MySQL

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** DCSync was identified as the primary attack vector in this scenario.

```powershell
evil-winrm -i 10.116.141.249 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.79.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.
