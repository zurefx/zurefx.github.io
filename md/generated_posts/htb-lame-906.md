---
TitleSEO: "HackTheBox — Lame (Hard OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Lame (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Lame. CORS Misconfiguration and Unconstrained Delegation to achieve hard compromise on OpenBSD."
Keywords: "pwntilldawn, offsec, hard, web, ctf"
URL: "https://zurefx.github.io/writeups/htb-lame-906.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-906/"
Date: "2024-02-16"
Tags: "PwnTillDawn, OffSec, Hard, Web, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-906"
Permalink: "/writeups/htb-lame-906.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Lame** is rated **Hard** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.77.120.46`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.21.244
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.235.223
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.80.64
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.152.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.59.206.36 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p135,636,53 10.68.69.166 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Unconstrained Delegation**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.195.127 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.128.35.32 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p139,445,8443 10.48.166.26 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p53,139,9200 10.112.224.246 -oN scan.txt
nmap -sCV -p21,1433,3306 10.20.109.252 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.215.154
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.244.228
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `kerbrute`
- `secretsdump`
- `bloodhound`
- `GetUserSPNs`
- `msfvenom`

### Key Takeaways

- CORS Misconfiguration
- Unconstrained Delegation
