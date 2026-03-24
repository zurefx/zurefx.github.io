---
TitleSEO: "VulnHub — Love (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Love (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Love. Silver Ticket and IDOR to achieve easy compromise on FreeBSD."
Keywords: "medium, reversing, windows"
URL: "https://zurefx.github.io/writeups/htb-love-555.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-love-555/"
Date: "2025-11-19"
Tags: "Medium, Reversing, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-love-555"
Permalink: "/writeups/htb-love-555.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Love** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.90.177.196`.

### Objectives

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3389,8888,9200 10.121.45.99 -oN scan.txt
evil-winrm -i 10.122.16.7 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.196.235/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.22.93.225 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.158.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Silver Ticket**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.116.203.10 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p1521,110,143 10.97.80.59 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.200.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.63.226.115 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.207.244/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `enum4linux`
- `GetNPUsers`
- `rubeus`
- `impacket`
- `evil-winrm`
- `metasploit`

### Key Takeaways

- Silver Ticket
- IDOR
- SQL Injection
- Open Redirect
