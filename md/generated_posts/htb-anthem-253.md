---
TitleSEO: "PwnTillDawn — Anthem (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Anthem (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Anthem. Resource-Based Constrained Delegation and ACL Abuse to achieve hard compromise on Linux."
Keywords: "hard, linux, windows, insane, hackthebox, forensics"
URL: "https://zurefx.github.io/writeups/htb-anthem-253.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-253/"
Date: "2025-07-05"
Tags: "Hard, Linux, Windows, Insane, HackTheBox, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-253"
Permalink: "/writeups/htb-anthem-253.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.58.229.134`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.222.230/FUZZ
nmap -sCV -p1433,3306,5432 10.114.106.137 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.74.216 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.155.79/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.104.100/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.103.17
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Open Redirect**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.176.248/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.211.251
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.231.138
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `kerbrute`
- `burpsuite`
- `wmiexec`
- `bloodhound`
- `sharphound`
- `pwncat`
- `netcat`

### Key Takeaways

- Resource-Based Constrained Delegation
- ACL Abuse
- Open Redirect
