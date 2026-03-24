---
TitleSEO: "TryHackMe — Alfred (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Alfred (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Alfred. SeDebugPrivilege and Local File Inclusion to achieve easy compromise on Linux."
Keywords: "easy, reversing, offsec, ctf, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-alfred-328.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-328/"
Date: "2024-03-05"
Tags: "Easy, Reversing, OffSec, CTF, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-328"
Permalink: "/writeups/htb-alfred-328.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.91.39.24`.

### Objectives

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.16.166.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.17.158.88 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p587,8080,8080 10.27.167.4 -oN scan.txt
nmap -sCV -p25,53,1521 10.81.55.206 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Key finding: **Local File Inclusion**.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.183.205
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.243.173/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.40.9.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `GetUserSPNs`
- `chisel`
- `kerbrute`
- `enum4linux`

### Key Takeaways

- SeDebugPrivilege
- Local File Inclusion
- Subdomain Takeover
