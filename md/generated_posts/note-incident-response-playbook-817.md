---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, windows"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-817.html"
URL_IMAGES: ""
Date: "2024-07-28"
Tags: "Linux, Lateral Movement, Windows"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-817"
Permalink: "/notes/note-incident-response-playbook-817.html"
BtnLabel: "Read Notes"
Pick: 0
---
## gobuster

### SMTP

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## AS-REP Roasting

### SSRF

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.68.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.41.107.180 -u administrator -p 'P@ssw0rd!'
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.41.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.61.164/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.86.75/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

- `ldapsearch`
- `Constrained Delegation`
- `burpsuite`
- `Remote Code Execution`
- `john`
- `pwncat`

## C#

### XXE

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

- `feroxbuster`
- `socat`
- `ACL Abuse`
- `secretsdump`

## hashcat

### Windows Server 2019

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.110.100.3/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.52.71.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
gobuster dir -u http://10.16.37.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.15.42.228 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## kerbrute

### feroxbuster

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

- `smbexec`
- `enum4linux`
- `sharphound`
- `Subdomain Takeover`

```python
gobuster dir -u http://10.75.127.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.83.166.17 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.12.65.147 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
