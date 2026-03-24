---
TitleSEO: "VulnHub — Writer (Hard OpenBSD) | ZureFX"
TitlePost: "VulnHub — Writer (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Writer. NTLM Relay and XXE to achieve hard compromise on OpenBSD."
Keywords: "ctf, pwntilldawn, reversing, forensics, web, hackthebox, hard"
URL: "https://zurefx.github.io/writeups/htb-writer-810.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-810/"
Date: "2024-06-20"
Tags: "CTF, PwnTillDawn, Reversing, Forensics, Web, HackTheBox, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-810"
Permalink: "/writeups/htb-writer-810.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Writer** is rated **Hard** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.93.150.75`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.19.31.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.64.179.252 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.63.159/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.241.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p143,110,1521 10.108.105.230 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.133.168
nmap -sCV -p3389,5986,995 10.13.64.29 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.173.43/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Subdomain Takeover**.

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.35.83.222 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.190.253 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.215.132/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```powershell
gobuster dir -u http://10.29.53.136/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `socat`
- `pwncat`
- `crackmapexec`
- `GetNPUsers`
- `burpsuite`

### Key Takeaways

- NTLM Relay
- XXE
- Subdomain Takeover
