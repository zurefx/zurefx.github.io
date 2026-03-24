---
TitleSEO: "PowerShell for Red Teamers | ZureFX"
TitlePost: "PowerShell for Red Teamers"
Author: "ZureFX"
Description: "Personal notes on PowerShell for Red Teamers. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, dfir, persistence"
URL: "https://zurefx.github.io/notes/note-powershell-for-red-teamers-785.html"
URL_IMAGES: ""
Date: "2024-11-27"
Tags: "Enumeration, DFIR, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-powershell-for-red-teamers-785"
Permalink: "/notes/note-powershell-for-red-teamers-785.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSH

### SNMP

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## kerbrute

### ligolo-ng

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.113.91
```

- `smbclient`
- `Broken Access Control`
- `Constrained Delegation`
- `ligolo-ng`
- `LXD Privilege Escalation`
- `DCSync`

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.180.149 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.48.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8888,53,25 10.31.167.49 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Ruby on Rails

### AlwaysInstallElevated

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.11.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.40.182.33 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.123.94.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.134.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## SQL Injection

### Constrained Delegation

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.55.194/FUZZ
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.234.4/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

## wpscan

### gobuster

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## psexec

### .NET

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.30.16.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.64.123/FUZZ
nmap -sCV -p135,995,22 10.57.73.18 -oN scan.txt
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.
