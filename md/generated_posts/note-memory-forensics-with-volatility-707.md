---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, lateral movement, linux, dfir"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-707.html"
URL_IMAGES: ""
Date: "2024-03-09"
Tags: "Persistence, Lateral Movement, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-707"
Permalink: "/notes/note-memory-forensics-with-volatility-707.html"
BtnLabel: "Read Notes"
Pick: 0
---
## crackmapexec

### ldapsearch

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `Path Traversal`
- `mimikatz`
- `GPP Password`

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Debian

### Open Redirect

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.37.95/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.44.165/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.163.41
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
nmap -sCV -p636,389,443 10.121.211.184 -oN scan.txt
feroxbuster -h
```

```powershell
evil-winrm -i 10.111.5.99 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,5986,25 10.20.191.70 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.174.148/FUZZ
```

## Constrained Delegation

### kerbrute

- `ACL Abuse`
- `Remote File Inclusion`
- `enum4linux`
- `mimikatz`

> **Note:** Weak Service Permissions was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## AlwaysInstallElevated

### Python

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.232.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p110,21,3268 10.115.152.195 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.
