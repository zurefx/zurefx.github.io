---
TitleSEO: "VulnHub — Forge (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Forge (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Forge. Kerberoasting and Pass the Ticket to achieve easy compromise on Windows."
Keywords: "web, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-forge-605.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-605/"
Date: "2025-04-06"
Tags: "Web, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-605"
Permalink: "/writeups/htb-forge-605.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.56.69.246`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.106.173.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.36.175
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.174.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.44.199.182 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,53,3268 10.116.8.154 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.239.39/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p80,445,21 10.120.92.246 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Pass the Ticket**.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.18.182.251 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p9200,22,993 10.21.190.152 -oN scan.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `enum4linux`
- `sqlmap`
- `nikto`
- `metasploit`
- `dcomexec`
- `nmap`
- `pwncat`
- `impacket`

### Key Takeaways

- Kerberoasting
- Pass the Ticket
- SSRF
- ACL Abuse
