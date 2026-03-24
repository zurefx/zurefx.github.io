---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, oscp, cheatsheet, privilege escalation"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-125.html"
URL_IMAGES: ""
Date: "2025-03-03"
Tags: "Persistence, OSCP, Cheatsheet, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-125"
Permalink: "/notes/note-reverse-engineering-basics-125.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSH

### Ubuntu 20.04

- `CORS Misconfiguration`
- `GPP Password`
- `Open Redirect`
- `john`

> **Note:** CSRF was identified as the primary attack vector in this scenario.

## dcomexec

### SUID Binary

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,23,23 10.46.131.159 -oN scan.txt
nmap -sCV -p993,5432,995 10.64.13.183 -oN scan.txt
```

- `SeDebugPrivilege`
- `sharphound`
- `XXE`
- `DLL Hijacking`
- `GetNPUsers`

## CMD

### .NET

```bash
crackmapexec smb 10.20.56.185 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.26.88.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8080,3306,27017 10.58.38.85 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
nmap -sCV -p143,21,8888 10.83.19.212 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.177.152
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.241.245/FUZZ
```

- `Local File Inclusion`
- `smbexec`
- `burpsuite`
- `SSRF`
- `smbclient`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.64.210
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.92.113/FUZZ
gobuster dir -u http://10.28.79.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## DCSync

### NTLM Relay

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

- `SSTI`
- `gobuster`
- `Pass the Hash`

## AlwaysInstallElevated

### XXE

> **Note:** NTLM Relay was identified as the primary attack vector in this scenario.

```python
nmap -sCV -p5986,22,9200 10.21.236.150 -oN scan.txt
evil-winrm -i 10.36.16.106 -u administrator -p 'P@ssw0rd!'
```

```bash
gobuster dir -u http://10.15.15.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.200.243/FUZZ
crackmapexec smb 10.47.21.215 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.106.92.33 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.81.64.243 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.
