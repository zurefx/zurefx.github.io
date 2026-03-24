---
TitleSEO: "VulnHub — Nineveh (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Nineveh (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Nineveh. Cron Job and NTLM Relay to achieve hard compromise on Linux."
Keywords: "easy, ctf, web, reversing, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-nineveh-510.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-510/"
Date: "2025-01-12"
Tags: "Easy, CTF, Web, Reversing, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-510"
Permalink: "/writeups/htb-nineveh-510.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.121.195.228`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.55.79.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.8.37/FUZZ
gobuster dir -u http://10.89.77.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p21,587,5432 10.70.128.85 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Key finding: **NTLM Relay**.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.44.5.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.102.251.32 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.135.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.169.138
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.216.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.205.26/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `GetUserSPNs`
- `feroxbuster`
- `gobuster`
- `netcat`
- `mimikatz`
- `bloodhound`

### Key Takeaways

- Cron Job
- NTLM Relay
