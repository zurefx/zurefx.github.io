---
TitleSEO: "VulnHub — Passage (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Passage (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Passage. DNS Rebinding and AS-REP Roasting to achieve easy compromise on Windows."
Keywords: "ctf, pwntilldawn, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-passage-672.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-672/"
Date: "2024-10-21"
Tags: "CTF, PwnTillDawn, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-672"
Permalink: "/writeups/htb-passage-672.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Passage** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.111.168.16`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.97.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.187.243
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,110,443 10.128.7.152 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.251.49/FUZZ
nmap -sCV -p443,5432,53 10.89.195.42 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **AS-REP Roasting**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.70.57.43 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.50.238/FUZZ
nmap -sCV -p3268,139,53 10.117.156.94 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.48.52/FUZZ
```

### Exploitation

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.202.77/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.55.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.51.41.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.11.83.215 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `metasploit`
- `mimikatz`
- `burpsuite`
- `lookupsid`
- `evil-winrm`
- `impacket`
- `dcomexec`
- `netcat`

### Key Takeaways

- DNS Rebinding
- AS-REP Roasting
