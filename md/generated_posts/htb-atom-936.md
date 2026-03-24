---
TitleSEO: "VulnHub — Atom (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Atom (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Atom. DNS Rebinding and AS-REP Roasting to achieve easy compromise on OpenBSD."
Keywords: "windows, forensics, linux, medium, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-atom-936.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-936/"
Date: "2024-09-23"
Tags: "Windows, Forensics, Linux, Medium, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-936"
Permalink: "/writeups/htb-atom-936.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Atom** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.23.123.2`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.158.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p5985,587,22 10.86.125.208 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.213.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.231.227
crackmapexec smb 10.36.145.143 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.254.14
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

Key finding: **AS-REP Roasting**.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.70.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.54.49.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
feroxbuster -h
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.90.220
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `impacket`
- `feroxbuster`
- `ffuf`
- `dcomexec`
- `gobuster`
- `nmap`
- `chisel`
- `enum4linux`

### Key Takeaways

- DNS Rebinding
- AS-REP Roasting
