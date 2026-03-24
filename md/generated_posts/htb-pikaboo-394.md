---
TitleSEO: "VulnHub — Pikaboo (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Pikaboo (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pikaboo. Remote Code Execution and CSRF to achieve medium compromise on Windows."
Keywords: "insane, linux, reversing, hackthebox, easy"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-394.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-394/"
Date: "2024-02-02"
Tags: "Insane, Linux, Reversing, HackTheBox, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-394"
Permalink: "/writeups/htb-pikaboo-394.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.14.185.121`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.218.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.126.210.222 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.87.101/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.115.151
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.84.182.223 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **CSRF**.

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p8443,53,8888 10.94.99.52 -oN scan.txt
nmap -sCV -p143,993,995 10.127.200.235 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.18.56.98 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.198.13
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.222.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p636,995,53 10.58.101.9 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.60.236/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.125.67/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.54.199.112 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `hydra`
- `smbclient`
- `rpcclient`
- `impacket`
- `wpscan`

### Key Takeaways

- Remote Code Execution
- CSRF
- Weak Service Permissions
- IDOR
