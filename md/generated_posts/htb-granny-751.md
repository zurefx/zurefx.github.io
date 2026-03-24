---
TitleSEO: "PwnTillDawn — Granny (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Granny (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Granny. NTLM Relay and Pass the Hash to achieve insane compromise on Windows."
Keywords: "easy, reversing, active directory, medium, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-granny-751.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-751/"
Date: "2024-07-28"
Tags: "Easy, Reversing, Active Directory, Medium, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-751"
Permalink: "/writeups/htb-granny-751.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Granny** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.107.21.159`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p8443,464,5986 10.13.99.169 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.153.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.105.55.224 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
nmap -sCV -p3306,23,1433 10.120.95.102 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.43.200.117 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.142.88
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Pass the Hash**.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.89.142.253 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,135,9200 10.113.187.97 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `rubeus`
- `feroxbuster`
- `wpscan`
- `smbclient`
- `sharphound`
- `enum4linux`

### Key Takeaways

- NTLM Relay
- Pass the Hash
- Unquoted Service Path
- Kerberoasting
