---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, oscp, persistence, enumeration"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-253.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Malware, DFIR, OSCP, Persistence, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-253"
Permalink: "/notes/note-docker-security-hardening-253.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ruby on Rails

### Weak Service Permissions

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.186.153
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.246.160/FUZZ
```

## SSTI

### Remote File Inclusion

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.106.182/FUZZ
```

## WinRM

### AS-REP Roasting

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.22.59
crackmapexec smb 10.52.131.133 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.53.171.30 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p21,389,389 10.41.30.97 -oN scan.txt
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.1.105/FUZZ
```

## C#

### smbexec

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

- `rubeus`
- `SSRF`
- `lookupsid`
- `burpsuite`
- `LXD Privilege Escalation`

## metasploit

### Insecure Deserialization

```powershell
nmap -sCV -p143,5985,389 10.87.234.227 -oN scan.txt
nmap -sCV -p5432,143,995 10.108.92.164 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.150.16
```

## Local File Inclusion

### bloodhound

```powershell
gobuster dir -u http://10.55.15.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.13.229.196 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.101.151/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.94.8
feroxbuster -h
```
