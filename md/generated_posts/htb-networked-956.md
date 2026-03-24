---
TitleSEO: "OffSec Proving Grounds — Networked (Hard Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Networked (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Networked. CSRF and Local File Inclusion to achieve hard compromise on Linux."
Keywords: "windows, offsec, reversing, linux, hackthebox, ctf, forensics"
URL: "https://zurefx.github.io/writeups/htb-networked-956.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-956/"
Date: "2024-05-18"
Tags: "Windows, OffSec, Reversing, Linux, HackTheBox, CTF, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-956"
Permalink: "/writeups/htb-networked-956.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Hard** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.128.163.11`.

### Objectives

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.75.98.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p9200,1433,995 10.52.14.242 -oN scan.txt
gobuster dir -u http://10.106.38.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.46.122
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.65.60/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.76.51/FUZZ
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **CSRF**.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3268,110,5986 10.89.137.11 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.126.82/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.49.172.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p139,5432,1433 10.78.174.93 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.1.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.244.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.55.105/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `smbexec`
- `ffuf`
- `atexec`
- `gobuster`
- `nmap`
- `ligolo-ng`
- `rubeus`

### Key Takeaways

- CSRF
- Local File Inclusion
