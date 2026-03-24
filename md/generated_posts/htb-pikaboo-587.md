---
TitleSEO: "VulnHub — Pikaboo (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Pikaboo (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pikaboo. SSRF and Broken Access Control to achieve insane compromise on Linux."
Keywords: "hackthebox, ctf, insane, web, windows, linux, reversing"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-587.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-587/"
Date: "2024-11-28"
Tags: "HackTheBox, CTF, Insane, Web, Windows, Linux, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-587"
Permalink: "/writeups/htb-pikaboo-587.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.46.143.45`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.65.128.193 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.14.74.224 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.52.4.113 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.114.143
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **SSRF**.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p53,22,135 10.87.104.126 -oN scan.txt
evil-winrm -i 10.58.215.132 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p139,1521,53 10.55.145.15 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.38.108.183 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.95.27/FUZZ
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.103.116.100 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.62.235/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `rpcclient`
- `GetNPUsers`
- `sqlmap`
- `crackmapexec`
- `enum4linux`
- `lookupsid`

### Key Takeaways

- SSRF
- Broken Access Control
- Weak Service Permissions
