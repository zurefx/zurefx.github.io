---
TitleSEO: "HackTheBox — Delivery (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Delivery (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Delivery. Unconstrained Delegation and NTLM Relay to achieve medium compromise on Linux."
Keywords: "easy, active directory, web, hard"
URL: "https://zurefx.github.io/writeups/htb-delivery-535.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-delivery-535/"
Date: "2024-06-16"
Tags: "Easy, Active Directory, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-delivery-535"
Permalink: "/writeups/htb-delivery-535.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Delivery** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.39.144.236`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
evil-winrm -i 10.82.72.107 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.8.177
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.21.14
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.21.18
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.19.115.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **NTLM Relay**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.102.159/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.67.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.39.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `mimikatz`
- `evil-winrm`
- `pwncat`
- `hashcat`
- `lookupsid`
- `bloodhound`

### Key Takeaways

- Unconstrained Delegation
- NTLM Relay
- LXD Privilege Escalation
