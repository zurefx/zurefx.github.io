---
TitleSEO: "VulnHub — Doctor (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Doctor (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Doctor. Unquoted Service Path and Constrained Delegation to achieve medium compromise on Linux."
Keywords: "forensics, pwntilldawn, insane, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-doctor-598.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-598/"
Date: "2025-11-08"
Tags: "Forensics, PwnTillDawn, Insane, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-598"
Permalink: "/writeups/htb-doctor-598.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Doctor** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.64.4.219`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.70.82
feroxbuster -h
gobuster dir -u http://10.76.2.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.168.244
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.83.123.196 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **Constrained Delegation**.

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.79.124.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.61.206/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.11.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.242.150
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.130.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `sqlmap`
- `socat`
- `GetUserSPNs`
- `rubeus`
- `burpsuite`
- `evil-winrm`

### Key Takeaways

- Unquoted Service Path
- Constrained Delegation
- DNS Rebinding
- ACL Abuse
