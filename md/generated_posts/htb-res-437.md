---
TitleSEO: "VulnHub — Res (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Res (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Res. DLL Hijacking and Resource-Based Constrained Delegation to achieve easy compromise on Linux."
Keywords: "offsec, hackthebox, linux, medium, reversing, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-res-437.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-res-437/"
Date: "2024-12-27"
Tags: "OffSec, HackTheBox, Linux, Medium, Reversing, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-res-437"
Permalink: "/writeups/htb-res-437.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Res** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.73.238.109`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.47.155
gobuster dir -u http://10.117.244.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.36.202.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.87.166.99 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

Key finding: **Resource-Based Constrained Delegation**.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.14.204.207 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.27.115
evil-winrm -i 10.114.204.31 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.31.161.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.68.172.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `wpscan`
- `psexec`
- `smbexec`
- `GetUserSPNs`
- `wmiexec`

### Key Takeaways

- DLL Hijacking
- Resource-Based Constrained Delegation
- Subdomain Takeover
- Sudo Misconfiguration
