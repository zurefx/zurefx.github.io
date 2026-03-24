---
TitleSEO: "VulnHub — Networked (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Networked (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Networked. SUID Binary and SSRF to achieve easy compromise on Linux."
Keywords: "insane, hackthebox, reversing, pwntilldawn, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-networked-590.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-590/"
Date: "2024-09-26"
Tags: "Insane, HackTheBox, Reversing, PwnTillDawn, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-590"
Permalink: "/writeups/htb-networked-590.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.76.249.221`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.170.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.69.245.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.126.175.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.28.163
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.88.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Key finding: **SUID Binary**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.54.160
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.253.219/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
nmap -sCV -p464,25,445 10.71.21.66 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.209.11
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.153.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.50.201.223 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.81.253.179 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `GetNPUsers`
- `bloodhound`
- `impacket`
- `wmiexec`
- `john`
- `atexec`
- `burpsuite`

### Key Takeaways

- SUID Binary
- SSRF
- XSS
- Resource-Based Constrained Delegation
