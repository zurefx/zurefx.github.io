---
TitleSEO: "OffSec Proving Grounds — Cereal (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Cereal (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Cereal. LXD Privilege Escalation and CSRF to achieve medium compromise on Linux."
Keywords: "forensics, windows, web, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-cereal-267.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-267/"
Date: "2024-12-25"
Tags: "Forensics, Windows, Web, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-267"
Permalink: "/writeups/htb-cereal-267.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Cereal** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.43.93.119`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.41.6.90 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.171.7/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.22.89 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.200.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.154.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.41.60.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.227.43/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.232.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.33.179/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **LXD Privilege Escalation**.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p143,5432,8443 10.33.191.43 -oN scan.txt
gobuster dir -u http://10.123.67.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.123.41.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,464,5985 10.94.35.143 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `sharphound`
- `GetNPUsers`
- `smbclient`
- `pwncat`

### Key Takeaways

- LXD Privilege Escalation
- CSRF
