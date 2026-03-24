---
TitleSEO: "TryHackMe — Fuse (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Fuse (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Fuse. Subdomain Takeover and Pass the Hash to achieve medium compromise on OpenBSD."
Keywords: "linux, web, forensics, hard, ctf, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-fuse-185.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-185/"
Date: "2026-02-11"
Tags: "Linux, Web, Forensics, Hard, CTF, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-185"
Permalink: "/writeups/htb-fuse-185.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.18.23.148`.

### Objectives

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p139,23,445 10.43.252.163 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.46.102/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.74.3.141 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.208.162/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.63.138.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.193.108/FUZZ
nmap -sCV -p110,8080,587 10.123.141.107 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **ACL Abuse**.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.99.65.197 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,27017,8443 10.53.160.25 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.26.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,143,27017 10.34.216.178 -oN scan.txt
nmap -sCV -p25,22,143 10.13.112.131 -oN scan.txt
evil-winrm -i 10.41.184.200 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.74.140.234 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.5.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.73.141/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `rubeus`
- `enum4linux`
- `wpscan`
- `nikto`

### Key Takeaways

- Subdomain Takeover
- Pass the Hash
- Path Traversal
- ACL Abuse
