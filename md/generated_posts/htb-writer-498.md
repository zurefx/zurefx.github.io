---
TitleSEO: "VulnHub — Writer (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Writer (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Writer. NTLM Relay and Pass the Ticket to achieve easy compromise on OpenBSD."
Keywords: "insane, active directory, forensics, reversing, hard, ctf, web"
URL: "https://zurefx.github.io/writeups/htb-writer-498.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-498/"
Date: "2024-03-15"
Tags: "Insane, Active Directory, Forensics, Reversing, Hard, CTF, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-498"
Permalink: "/writeups/htb-writer-498.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.19.68.52`.

### Objectives

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3268,135,9200 10.74.56.240 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.71.33/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p135,5432,21 10.129.20.46 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.252.223
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.146.11
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Pass the Ticket**.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
nmap -sCV -p80,22,993 10.26.94.113 -oN scan.txt
nmap -sCV -p993,1433,3389 10.111.87.48 -oN scan.txt
crackmapexec smb 10.49.193.56 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
crackmapexec smb 10.33.138.230 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.98.252.119 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.93.51.239/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.55.102.113 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `nmap`
- `ldapsearch`
- `mimikatz`
- `GetNPUsers`

### Key Takeaways

- NTLM Relay
- Pass the Ticket
