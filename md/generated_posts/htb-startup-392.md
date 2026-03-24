---
TitleSEO: "TryHackMe — Startup (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Startup (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Startup. AS-REP Roasting and GPP Password to achieve easy compromise on Linux."
Keywords: "insane, web, easy, tryhackme, windows, forensics, reversing"
URL: "https://zurefx.github.io/writeups/htb-startup-392.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-392/"
Date: "2024-04-18"
Tags: "Insane, Web, Easy, TryHackMe, Windows, Forensics, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-392"
Permalink: "/writeups/htb-startup-392.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Startup** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.25.156.166`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.96.10.254 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,8888,3306 10.77.101.18 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.219.161
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.77.10.203 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.105.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

Key finding: **AS-REP Roasting**.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.76.1/FUZZ
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `wmiexec`
- `john`
- `kerbrute`
- `gobuster`
- `netcat`

### Key Takeaways

- AS-REP Roasting
- GPP Password
- LAPS Abuse
- Sudo Misconfiguration
