---
TitleSEO: "TryHackMe — Armageddon (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. XSS and Sudo Misconfiguration to achieve insane compromise on FreeBSD."
Keywords: "web, windows, medium, easy, ctf, offsec"
URL: "https://zurefx.github.io/writeups/htb-armageddon-870.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-870/"
Date: "2024-07-06"
Tags: "Web, Windows, Medium, Easy, CTF, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-870"
Permalink: "/writeups/htb-armageddon-870.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.84.45.21`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.139.72
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.249.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.94.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.66.36
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **XSS**.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3306,1521,445 10.49.179.244 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
gobuster dir -u http://10.122.164.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.243.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.23.103.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.194.235/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `nikto`
- `socat`
- `evil-winrm`
- `bloodhound`
- `psexec`
- `atexec`
- `sharphound`
- `enum4linux`

### Key Takeaways

- XSS
- Sudo Misconfiguration
- Docker Escape
- Broken Access Control
