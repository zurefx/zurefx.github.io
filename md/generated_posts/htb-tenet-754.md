---
TitleSEO: "HackTheBox — Tenet (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Tenet (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tenet. Kerberoasting and AS-REP Roasting to achieve hard compromise on Windows."
Keywords: "forensics, windows, active directory"
URL: "https://zurefx.github.io/writeups/htb-tenet-754.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-754/"
Date: "2024-03-06"
Tags: "Forensics, Windows, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-754"
Permalink: "/writeups/htb-tenet-754.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.32.216.189`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.216.208/FUZZ
nmap -sCV -p995,139,3389 10.42.63.23 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p636,3268,445 10.80.67.5 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.106.120/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **AS-REP Roasting**.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.242.191/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.73.184
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.45.228/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.25.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,80,587 10.27.77.83 -oN scan.txt
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.40.40.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `burpsuite`
- `smbexec`
- `secretsdump`
- `rubeus`

### Key Takeaways

- Kerberoasting
- AS-REP Roasting
- GPP Password
- Unconstrained Delegation
