---
TitleSEO: "PwnTillDawn — Vulnnet (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Vulnnet (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Vulnnet. DLL Hijacking and IDOR to achieve easy compromise on Linux."
Keywords: "forensics, windows, easy, insane"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-463.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-463/"
Date: "2025-10-27"
Tags: "Forensics, Windows, Easy, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-463"
Permalink: "/writeups/htb-vulnnet-463.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.67.123.196`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.120.119.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.226.38
feroxbuster -h
nmap -sCV -p3268,25,636 10.33.193.231 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.140.63
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.76.18.184 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **IDOR**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.82.104.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `kerbrute`
- `psexec`
- `netcat`
- `atexec`
- `wmiexec`
- `bloodhound`
- `secretsdump`

### Key Takeaways

- DLL Hijacking
- IDOR
- Pass the Hash
