---
TitleSEO: "TryHackMe — Tabby (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Tabby (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tabby. SQL Injection and Resource-Based Constrained Delegation to achieve easy compromise on Linux."
Keywords: "windows, forensics, hard, insane, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-tabby-294.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-294/"
Date: "2025-03-09"
Tags: "Windows, Forensics, Hard, Insane, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-294"
Permalink: "/writeups/htb-tabby-294.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.16.13.9`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.119.231.128 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.138.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Resource-Based Constrained Delegation**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.214.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.72.13.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,587,993 10.92.245.195 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.136.51
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.198.234/FUZZ
crackmapexec smb 10.126.75.36 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.135.242
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `dcomexec`
- `metasploit`
- `pwncat`
- `ligolo-ng`

### Key Takeaways

- SQL Injection
- Resource-Based Constrained Delegation
