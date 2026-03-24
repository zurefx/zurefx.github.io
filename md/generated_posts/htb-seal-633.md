---
TitleSEO: "OffSec Proving Grounds — Seal (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Seal (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Seal. Pass the Ticket and Constrained Delegation to achieve medium compromise on Linux."
Keywords: "reversing, easy, hackthebox, active directory, hard, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-seal-633.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-633/"
Date: "2024-05-20"
Tags: "Reversing, Easy, HackTheBox, Active Directory, Hard, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-633"
Permalink: "/writeups/htb-seal-633.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.104.106.199`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.230.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.53.100.33/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p22,995,23 10.68.154.126 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.120.138/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Pass the Ticket**.

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p143,3389,80 10.13.251.161 -oN scan.txt
evil-winrm -i 10.30.218.167 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.15.67.68/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.107.165.35 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.200.173/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `nikto`
- `bloodhound`
- `ligolo-ng`
- `impacket`

### Key Takeaways

- Pass the Ticket
- Constrained Delegation
- GPP Password
