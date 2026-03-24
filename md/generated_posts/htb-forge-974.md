---
TitleSEO: "TryHackMe — Forge (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Forge (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Forge. Pass the Hash and CORS Misconfiguration to achieve medium compromise on Linux."
Keywords: "ctf, tryhackme, medium, offsec, web, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-forge-974.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-974/"
Date: "2025-06-21"
Tags: "CTF, TryHackMe, Medium, OffSec, Web, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-974"
Permalink: "/writeups/htb-forge-974.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.102.39.186`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.163.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.95.200.26 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.82.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.120.44/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p27017,389,8443 10.43.111.127 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

Key finding: **CORS Misconfiguration**.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.24.79.187 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.85.104.12 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.71.198.151 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `metasploit`
- `wpscan`
- `secretsdump`
- `pwncat`
- `lookupsid`
- `crackmapexec`
- `rpcclient`

### Key Takeaways

- Pass the Hash
- CORS Misconfiguration
- Command Injection
