---
TitleSEO: "HackTheBox — Forge (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Forge (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Forge. Unconstrained Delegation and Unquoted Service Path to achieve insane compromise on Linux."
Keywords: "hard, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-forge-756.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-756/"
Date: "2025-01-11"
Tags: "Hard, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-756"
Permalink: "/writeups/htb-forge-756.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.34.26.30`.

### Objectives

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.57.50.154 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.44.34.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.103.30.77 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Unconstrained Delegation**.

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.44.194.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.99.229
evil-winrm -i 10.36.19.152 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.237.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.47.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.27.250
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `hashcat`
- `mimikatz`
- `burpsuite`
- `nmap`
- `socat`
- `impacket`
- `hydra`

### Key Takeaways

- Unconstrained Delegation
- Unquoted Service Path
- NFS No Root Squash
