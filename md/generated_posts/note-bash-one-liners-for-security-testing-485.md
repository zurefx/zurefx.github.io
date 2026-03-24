---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-485.html"
URL_IMAGES: ""
Date: "2024-08-28"
Tags: "Enumeration, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-485"
Permalink: "/notes/note-bash-one-liners-for-security-testing-485.html"
BtnLabel: "Read Notes"
Pick: 0
---
## nmap

### NTLM Relay

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```python
feroxbuster -h
gobuster dir -u http://10.50.205.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
evil-winrm -i 10.126.24.30 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.78.188/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.95.32
crackmapexec smb 10.13.169.152 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
evil-winrm -i 10.69.133.87 -u administrator -p 'P@ssw0rd!'
```

## NFS No Root Squash

### Constrained Delegation

```bash
evil-winrm -i 10.46.102.119 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,443,5432 10.127.81.137 -oN scan.txt
```

> **Note:** SQL Injection was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.11.248.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,80,22 10.110.224.237 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.123.66/FUZZ
```

## Python

### rpcclient

> **Note:** Broken Access Control was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.39.202.194 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.28.202.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.116.2.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## LDAP

### Resource-Based Constrained Delegation

- `feroxbuster`
- `nikto`
- `SQL Injection`
- `LAPS Abuse`
- `ligolo-ng`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.149.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.82.6.213 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.75.20/FUZZ
nmap -sCV -p25,636,389 10.125.243.216 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

- `Constrained Delegation`
- `smbclient`
- `Silver Ticket`
- `Insecure Deserialization`
- `gobuster`
- `feroxbuster`

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Java

### sharphound

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
nmap -sCV -p23,3389,389 10.10.99.235 -oN scan.txt
```

## XXE

### ldapsearch

- `CORS Misconfiguration`
- `XSS`
- `chisel`

```python
nmap -sCV -p8443,3389,1433 10.36.239.81 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.38.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.218.98 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p135,389,443 10.15.88.164 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.216.140/FUZZ
nmap -sCV -p1521,143,139 10.48.195.42 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.
