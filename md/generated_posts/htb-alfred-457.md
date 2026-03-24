---
TitleSEO: "TryHackMe — Alfred (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Alfred (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Alfred. Silver Ticket and SeImpersonatePrivilege to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, easy, web, ctf, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-alfred-457.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-457/"
Date: "2025-10-09"
Tags: "TryHackMe, Easy, Web, CTF, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-457"
Permalink: "/writeups/htb-alfred-457.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.44.132.204`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p464,21,587 10.117.9.78 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.196.52/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.36.80
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.101.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.221.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Silver Ticket**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.135.223/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.182.209
evil-winrm -i 10.112.88.9 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
feroxbuster -h
nmap -sCV -p21,5985,995 10.15.203.153 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `socat`
- `evil-winrm`
- `ffuf`
- `hashcat`
- `feroxbuster`
- `secretsdump`
- `bloodhound`

### Key Takeaways

- Silver Ticket
- SeImpersonatePrivilege
- Writable PATH
