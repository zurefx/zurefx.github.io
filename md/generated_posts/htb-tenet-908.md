---
TitleSEO: "HackTheBox — Tenet (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Tenet (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tenet. Silver Ticket and Constrained Delegation to achieve medium compromise on Linux."
Keywords: "active directory, easy, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-tenet-908.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-908/"
Date: "2026-02-02"
Tags: "Active Directory, Easy, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-908"
Permalink: "/writeups/htb-tenet-908.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.97.133.72`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.15.104.11 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.11.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p139,53,389 10.14.26.91 -oN scan.txt
nmap -sCV -p135,80,995 10.118.21.62 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Silver Ticket**.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.59.26/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.93.254
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.183.163/FUZZ
gobuster dir -u http://10.50.131.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `lookupsid`
- `john`
- `impacket`
- `wmiexec`
- `nikto`
- `bloodhound`
- `ffuf`
- `smbclient`

### Key Takeaways

- Silver Ticket
- Constrained Delegation
- Writable PATH
- AS-REP Roasting
