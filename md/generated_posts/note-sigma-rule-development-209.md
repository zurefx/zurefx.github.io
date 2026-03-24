---
TitleSEO: "Sigma Rule Development | ZureFX"
TitlePost: "Sigma Rule Development"
Author: "ZureFX"
Description: "Personal notes on Sigma Rule Development. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, enumeration"
URL: "https://zurefx.github.io/notes/note-sigma-rule-development-209.html"
URL_IMAGES: ""
Date: "2024-02-17"
Tags: "DFIR, Windows, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-sigma-rule-development-209"
Permalink: "/notes/note-sigma-rule-development-209.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### crackmapexec

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.160.106 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `kerbrute`
- `Constrained Delegation`
- `AS-REP Roasting`
- `GetNPUsers`

## wpscan

### Kerberos

```bash
nmap -sCV -p8443,80,389 10.40.150.101 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.154.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p139,587,5985 10.91.48.168 -oN scan.txt
```

- `gobuster`
- `psexec`
- `atexec`

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```python
crackmapexec smb 10.44.246.49 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## IDOR

### secretsdump

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.94.104.93 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## gobuster

### NFS

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `ligolo-ng`
- `john`
- `SeDebugPrivilege`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.126.76.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.190.18/FUZZ
```

## MongoDB

### Python

```bash
feroxbuster -h
```

```python
nmap -sCV -p8888,53,993 10.47.207.72 -oN scan.txt
```
