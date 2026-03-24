---
TitleSEO: "VulnHub — Monitors (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Monitors (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Monitors. Remote File Inclusion and Silver Ticket to achieve easy compromise on Linux."
Keywords: "easy, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-monitors-592.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-592/"
Date: "2025-11-28"
Tags: "Easy, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-592"
Permalink: "/writeups/htb-monitors-592.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Monitors** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.66.246.249`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,587,53 10.112.119.90 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.10.168.230 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
evil-winrm -i 10.64.119.1 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.151.107/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Silver Ticket**.

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p139,25,110 10.73.1.248 -oN scan.txt
nmap -sCV -p21,53,8443 10.106.243.22 -oN scan.txt
gobuster dir -u http://10.18.237.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.113.108
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `hydra`
- `bloodhound`
- `hashcat`
- `ligolo-ng`
- `mimikatz`

### Key Takeaways

- Remote File Inclusion
- Silver Ticket
- AS-REP Roasting
- XXE
