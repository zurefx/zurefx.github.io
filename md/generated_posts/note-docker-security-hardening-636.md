---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, networking, cheatsheet, linux, windows"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-636.html"
URL_IMAGES: ""
Date: "2024-11-22"
Tags: "Blue Team, Networking, Cheatsheet, Linux, Windows"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-636"
Permalink: "/notes/note-docker-security-hardening-636.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Laravel

### LXD Privilege Escalation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.110.174.210 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## impacket

### .NET

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.104.151.154 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.159.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.32.198.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Open Redirect

### NFS No Root Squash

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.70.24.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## HTTPS

### AS-REP Roasting

- `DLL Hijacking`
- `nikto`
- `mimikatz`
- `Local File Inclusion`

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

- `kerbrute`
- `SeDebugPrivilege`
- `hashcat`

## SQL Injection

### rpcclient

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.36.108.233 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.153.86
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `XSS`
- `SSRF`
- `enum4linux`

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## bloodhound

### smbclient

```bash
gobuster dir -u http://10.61.104.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.38.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.195.182/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.140.53
```
