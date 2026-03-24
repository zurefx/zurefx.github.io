---
TitleSEO: "VulnHub — Legacy (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Legacy (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Legacy. SSRF and Path Traversal to achieve insane compromise on Linux."
Keywords: "ctf, web, linux, pwntilldawn, reversing, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-legacy-460.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-460/"
Date: "2025-10-17"
Tags: "CTF, Web, Linux, PwnTillDawn, Reversing, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-460"
Permalink: "/writeups/htb-legacy-460.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.89.163.83`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p9200,135,464 10.62.91.122 -oN scan.txt
evil-winrm -i 10.87.4.97 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.124.192.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.92.241.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Cron Job**.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.238.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.120.102.52 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p1433,445,995 10.110.147.7 -oN scan.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.10.247.47 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.107.19.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.40.167.198 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.73.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `feroxbuster`
- `crackmapexec`
- `evil-winrm`
- `kerbrute`
- `john`
- `mimikatz`
- `wmiexec`
- `ffuf`

### Key Takeaways

- SSRF
- Path Traversal
- Cron Job
