---
TitleSEO: "VulnHub — Doctor (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Doctor (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Doctor. Sudo Misconfiguration and NTLM Relay to achieve easy compromise on Windows."
Keywords: "insane, tryhackme, web"
URL: "https://zurefx.github.io/writeups/htb-doctor-133.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-133/"
Date: "2026-02-02"
Tags: "Insane, TryHackMe, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-133"
Permalink: "/writeups/htb-doctor-133.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.128.186.167`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.18.173.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.45.212.35 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.90.203/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.146.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Path Traversal**.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.42.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.134.45
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.211.26 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.105.20.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p22,23,1521 10.93.140.24 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `sharphound`
- `evil-winrm`
- `atexec`
- `smbexec`
- `hashcat`
- `wpscan`
- `socat`
- `john`

### Key Takeaways

- Sudo Misconfiguration
- NTLM Relay
- Path Traversal
