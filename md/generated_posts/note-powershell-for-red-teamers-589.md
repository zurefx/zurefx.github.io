---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-589.html"
URL_IMAGES: ""
Date: "2025-02-25"
Tags: "OSCP, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-589"
Permalink: "/notes/note-powershell-for-red-teamers-589.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Joomla

### SSH

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
feroxbuster -h
evil-winrm -i 10.120.12.183 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.42.118.236 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.21.44.50 -u administrator -p 'P@ssw0rd!'
```

## kerbrute

### Broken Access Control

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Active Directory

### SSTI

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.17.5.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.250.194
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.144.163/FUZZ
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.21.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.99.103.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Apache

### ffuf

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## CMD

### SSRF

```powershell
gobuster dir -u http://10.94.90.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.123.11.149 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.42.206.90 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## LXD Privilege Escalation

### netcat

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.25.20.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,139,443 10.78.150.21 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.112.92
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.123.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.75.71/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.
