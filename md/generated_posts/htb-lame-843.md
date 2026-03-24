---
TitleSEO: "HackTheBox — Lame (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Lame (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Lame. Remote Code Execution and CORS Misconfiguration to achieve easy compromise on Linux."
Keywords: "web, tryhackme, ctf, linux, easy, medium"
URL: "https://zurefx.github.io/writeups/htb-lame-843.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-843/"
Date: "2025-07-05"
Tags: "Web, TryHackMe, CTF, Linux, Easy, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-843"
Permalink: "/writeups/htb-lame-843.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.27.200.35`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.160.146
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.37.124/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.89.129/FUZZ
gobuster dir -u http://10.95.19.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.60.44
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.46.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Key finding: **CORS Misconfiguration**.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.125.237.145 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.83.84.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `msfvenom`
- `gobuster`
- `GetUserSPNs`
- `enum4linux`
- `socat`
- `sharphound`
- `rubeus`

### Key Takeaways

- Remote Code Execution
- CORS Misconfiguration
- AS-REP Roasting
