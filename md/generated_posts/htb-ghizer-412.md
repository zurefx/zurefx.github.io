---
TitleSEO: "TryHackMe — Ghizer (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Ghizer (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ghizer. Weak Service Permissions and Open Redirect to achieve insane compromise on Linux."
Keywords: "offsec, easy, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-ghizer-412.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-412/"
Date: "2024-06-23"
Tags: "OffSec, Easy, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-412"
Permalink: "/writeups/htb-ghizer-412.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ghizer** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.27.217.178`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.41.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p1433,9200,993 10.71.81.74 -oN scan.txt
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.16.191 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.165.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.251.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Remote Code Execution**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.237.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.107.205.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.115.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.112.53/FUZZ
feroxbuster -h
evil-winrm -i 10.34.8.197 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `socat`
- `lookupsid`
- `impacket`
- `sqlmap`
- `rubeus`
- `smbexec`
- `wpscan`

### Key Takeaways

- Weak Service Permissions
- Open Redirect
- Remote Code Execution
