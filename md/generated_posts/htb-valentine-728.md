---
TitleSEO: "TryHackMe — Valentine (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Valentine (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Valentine. Golden Ticket and Docker Escape to achieve insane compromise on Linux."
Keywords: "windows, forensics, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-valentine-728.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-valentine-728/"
Date: "2025-09-22"
Tags: "Windows, Forensics, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-valentine-728"
Permalink: "/writeups/htb-valentine-728.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Valentine** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.99.24.171`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.242.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.29.135
nmap -sCV -p443,9200,143 10.89.13.69 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p1521,8888,135 10.18.63.237 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.22.48.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.7.18/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.235.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p636,8888,1521 10.68.32.169 -oN scan.txt
evil-winrm -i 10.89.233.54 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Golden Ticket**.

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.74.131.131/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.19.41
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.21.82.48 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.79.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.91.207/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `ldapsearch`
- `ffuf`
- `bloodhound`
- `secretsdump`
- `pwncat`

### Key Takeaways

- Golden Ticket
- Docker Escape
- LXD Privilege Escalation
