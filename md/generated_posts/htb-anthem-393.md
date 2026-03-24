---
TitleSEO: "PwnTillDawn — Anthem (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Anthem (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Anthem. LXD Privilege Escalation and Unquoted Service Path to achieve easy compromise on FreeBSD."
Keywords: "easy, linux, forensics, insane, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-anthem-393.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-393/"
Date: "2025-02-28"
Tags: "Easy, Linux, Forensics, Insane, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-393"
Permalink: "/writeups/htb-anthem-393.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.114.214.1`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.172.92
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.173.191
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.135.167/FUZZ
evil-winrm -i 10.92.4.184 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Golden Ticket**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.94.200.16 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.225.241/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.155.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
gobuster dir -u http://10.122.53.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.50.161.3 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,22,1433 10.12.233.32 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `lookupsid`
- `sqlmap`
- `socat`
- `bloodhound`
- `atexec`
- `wmiexec`

### Key Takeaways

- LXD Privilege Escalation
- Unquoted Service Path
- GPP Password
- Golden Ticket
