---
TitleSEO: "PwnTillDawn — TheNotebook (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — TheNotebook (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn TheNotebook. Pass the Hash and Kerberoasting to achieve insane compromise on Windows."
Keywords: "web, active directory, hard, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-268.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-268/"
Date: "2025-07-24"
Tags: "Web, Active Directory, Hard, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-268"
Permalink: "/writeups/htb-thenotebook-268.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.107.140.52`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.30.94.150 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.80.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.89.18.218 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.179.1/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

Key finding: **Kerberoasting**.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.68.235.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.90.129.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```powershell
gobuster dir -u http://10.62.191.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `enum4linux`
- `impacket`
- `smbexec`
- `ffuf`
- `hashcat`
- `john`
- `crackmapexec`

### Key Takeaways

- Pass the Hash
- Kerberoasting
- LAPS Abuse
