---
TitleSEO: "OffSec Proving Grounds — Omni (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Omni (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Omni. Command Injection and Unconstrained Delegation to achieve easy compromise on Linux."
Keywords: "windows, forensics, tryhackme, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-omni-434.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-434/"
Date: "2024-08-03"
Tags: "Windows, Forensics, TryHackMe, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-434"
Permalink: "/writeups/htb-omni-434.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.129.57.190`.

### Objectives

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.207.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.61.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p80,143,1433 10.40.253.121 -oN scan.txt
crackmapexec smb 10.44.156.32 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.82.133.44 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.252.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,3389,5432 10.38.208.182 -oN scan.txt
gobuster dir -u http://10.104.233.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Command Injection**.

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.149.240
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.34.118.40 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.41.78
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.34.140.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.21.3/FUZZ
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p25,3268,587 10.68.148.208 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `socat`
- `rubeus`
- `metasploit`
- `mimikatz`
- `burpsuite`
- `bloodhound`

### Key Takeaways

- Command Injection
- Unconstrained Delegation
