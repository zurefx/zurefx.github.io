---
TitleSEO: "OffSec Proving Grounds — Brainstorm (Medium FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Brainstorm (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Brainstorm. Golden Ticket and Remote File Inclusion to achieve medium compromise on FreeBSD."
Keywords: "web, pwntilldawn, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-793.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-793/"
Date: "2025-10-08"
Tags: "Web, PwnTillDawn, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-793"
Permalink: "/writeups/htb-brainstorm-793.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Medium** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.76.133.11`.

### Objectives

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.74.38.6 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.254.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.40.112/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.86.224
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

Key finding: **LXD Privilege Escalation**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.70.124.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.83.24.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.248.36/FUZZ
gobuster dir -u http://10.31.9.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.55.230.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.106.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.41.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.142.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.229.175 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.68.231.119 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.26.147.127 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `nmap`
- `nikto`
- `impacket`
- `sqlmap`

### Key Takeaways

- Golden Ticket
- Remote File Inclusion
- LXD Privilege Escalation
- Sudo Misconfiguration
