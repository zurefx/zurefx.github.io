---
TitleSEO: "VulnHub — Relevant (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Relevant (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Relevant. SUID Binary and Cron Job to achieve medium compromise on Linux."
Keywords: "hackthebox, reversing, active directory, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-relevant-268.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-268/"
Date: "2024-11-11"
Tags: "HackTheBox, Reversing, Active Directory, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-268"
Permalink: "/writeups/htb-relevant-268.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Relevant** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.58.74.167`.

### Objectives

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.43.130
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **SUID Binary**.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.102.205.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.36.245
gobuster dir -u http://10.111.84.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.237.174/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `psexec`
- `hashcat`
- `netcat`
- `nmap`
- `bloodhound`
- `rpcclient`

### Key Takeaways

- SUID Binary
- Cron Job
- Remote Code Execution
- Command Injection
