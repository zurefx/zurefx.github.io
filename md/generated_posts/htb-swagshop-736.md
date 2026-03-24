---
TitleSEO: "OffSec Proving Grounds — SwagShop (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — SwagShop (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds SwagShop. LXD Privilege Escalation and Remote File Inclusion to achieve medium compromise on Linux."
Keywords: "tryhackme, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-swagshop-736.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-736/"
Date: "2024-01-26"
Tags: "TryHackMe, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-736"
Permalink: "/writeups/htb-swagshop-736.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **SwagShop** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.64.71.55`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.37.102
evil-winrm -i 10.84.205.55 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p636,587,80 10.78.94.97 -oN scan.txt
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.4.155/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.249.210
nmap -sCV -p5985,587,3389 10.50.83.144 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **LXD Privilege Escalation**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.61.208.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.17.238.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.99.188.106 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.39.6
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.120.101/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.93.72.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `GetNPUsers`
- `secretsdump`
- `kerbrute`
- `ldapsearch`
- `feroxbuster`
- `wmiexec`

### Key Takeaways

- LXD Privilege Escalation
- Remote File Inclusion
- Path Traversal
- XXE
