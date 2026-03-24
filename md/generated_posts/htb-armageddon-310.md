---
TitleSEO: "TryHackMe — Armageddon (Hard Linux) | ZureFX"
TitlePost: "TryHackMe — Armageddon (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Armageddon. Pass the Ticket and SUID Binary to achieve hard compromise on Linux."
Keywords: "insane, offsec, web, ctf"
URL: "https://zurefx.github.io/writeups/htb-armageddon-310.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-310/"
Date: "2025-11-23"
Tags: "Insane, OffSec, Web, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-310"
Permalink: "/writeups/htb-armageddon-310.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Hard** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.54.65.25`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.87.251/FUZZ
evil-winrm -i 10.80.43.163 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.228.27/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.245.131
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.247.29
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SUID Binary**.

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.33.119.186 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.85.10/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.216.133
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.63.12
crackmapexec smb 10.79.126.56 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.58.64.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.60.80.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.3.37
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `metasploit`
- `smbclient`
- `netcat`
- `rpcclient`
- `john`
- `wmiexec`
- `hydra`
- `hashcat`

### Key Takeaways

- Pass the Ticket
- SUID Binary
