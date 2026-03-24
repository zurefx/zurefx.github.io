---
TitleSEO: "TryHackMe — Monitors (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Monitors (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Monitors. LXD Privilege Escalation and DNS Rebinding to achieve medium compromise on OpenBSD."
Keywords: "linux, forensics, hard"
URL: "https://zurefx.github.io/writeups/htb-monitors-568.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-568/"
Date: "2024-11-02"
Tags: "Linux, Forensics, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-568"
Permalink: "/writeups/htb-monitors-568.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.128.230.16`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.52.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.30.13
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
gobuster dir -u http://10.34.252.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,5432,143 10.15.70.32 -oN scan.txt
evil-winrm -i 10.49.226.233 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **SSRF**.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.33.30.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
gobuster dir -u http://10.10.76.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.41.194.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.144.126/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.228.58/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `wmiexec`
- `netcat`
- `GetNPUsers`
- `burpsuite`
- `pwncat`

### Key Takeaways

- LXD Privilege Escalation
- DNS Rebinding
- SSRF
