---
TitleSEO: "HackTheBox — Solidstate (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Solidstate (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Solidstate. SUID Binary and LAPS Abuse to achieve medium compromise on Linux."
Keywords: "pwntilldawn, linux, tryhackme, hackthebox, windows, ctf, offsec"
URL: "https://zurefx.github.io/writeups/htb-solidstate-330.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-330/"
Date: "2024-03-29"
Tags: "PwnTillDawn, Linux, TryHackMe, HackTheBox, Windows, CTF, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-330"
Permalink: "/writeups/htb-solidstate-330.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Solidstate** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.31.206.43`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.36.41
feroxbuster -h
nmap -sCV -p80,8443,389 10.128.179.209 -oN scan.txt
nmap -sCV -p139,636,8443 10.23.16.117 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.40.42.148 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.49.33.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

Key finding: **LAPS Abuse**.

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.39.139.100 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.79.32.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.111.147.61 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.244.253 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.118.220.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.249.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `bloodhound`
- `feroxbuster`
- `socat`
- `enum4linux`
- `rpcclient`
- `wpscan`
- `secretsdump`
- `wmiexec`

### Key Takeaways

- SUID Binary
- LAPS Abuse
