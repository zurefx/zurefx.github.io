---
TitleSEO: "OffSec Proving Grounds — Vulnnet (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Vulnnet (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Vulnnet. Pass the Ticket and CSRF to achieve easy compromise on Linux."
Keywords: "forensics, web, tryhackme, medium"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-729.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-729/"
Date: "2024-05-29"
Tags: "Forensics, Web, TryHackMe, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-729"
Permalink: "/writeups/htb-vulnnet-729.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.79.241.13`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.22.238.231 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.94.239.193 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.22.108.96 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.36.46.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.190.55
crackmapexec smb 10.80.181.154 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **CSRF**.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.176.75
nmap -sCV -p3268,25,9200 10.17.251.54 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.215.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.32.6.57 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.33.121/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.207.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.19.25.254 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.103.47.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,389,1433 10.85.155.8 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `hashcat`
- `smbexec`
- `pwncat`
- `impacket`
- `sqlmap`
- `enum4linux`
- `wmiexec`
- `sharphound`

### Key Takeaways

- Pass the Ticket
- CSRF
- Writable PATH
- Constrained Delegation
