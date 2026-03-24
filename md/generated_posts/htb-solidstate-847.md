---
TitleSEO: "HackTheBox — Solidstate (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Solidstate (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Solidstate. SQL Injection and Golden Ticket to achieve medium compromise on Linux."
Keywords: "web, hackthebox, active directory, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-solidstate-847.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-847/"
Date: "2024-07-23"
Tags: "Web, HackTheBox, Active Directory, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-847"
Permalink: "/writeups/htb-solidstate-847.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.17.86.193`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.127.229/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p25,3268,5985 10.65.13.242 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.144.131/FUZZ
feroxbuster -h
crackmapexec smb 10.51.154.215 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.206.167/FUZZ
gobuster dir -u http://10.55.104.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Golden Ticket**.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p21,443,3268 10.15.56.33 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.17.229/FUZZ
evil-winrm -i 10.95.32.4 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,1521,1433 10.109.141.135 -oN scan.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p25,8080,23 10.24.143.242 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `rubeus`
- `rpcclient`
- `atexec`
- `evil-winrm`
- `bloodhound`

### Key Takeaways

- SQL Injection
- Golden Ticket
- NTLM Relay
