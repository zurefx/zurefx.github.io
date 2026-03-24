---
TitleSEO: "HackTheBox — Arctic (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Arctic (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Arctic. CSRF and DNS Rebinding to achieve medium compromise on Linux."
Keywords: "insane, forensics, linux, web, hard"
URL: "https://zurefx.github.io/writeups/htb-arctic-131.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-131/"
Date: "2024-03-24"
Tags: "Insane, Forensics, Linux, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-131"
Permalink: "/writeups/htb-arctic-131.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Arctic** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.41.142.114`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p53,3389,25 10.41.229.182 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.37.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.72.138 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.44.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.147.67/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,110,27017 10.41.251.171 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

Key finding: **DNS Rebinding**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.24.29.167 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.24.185.80 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.121.69.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p587,21,443 10.101.6.210 -oN scan.txt
crackmapexec smb 10.100.175.6 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p139,1433,22 10.27.155.3 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `feroxbuster`
- `kerbrute`
- `john`
- `rubeus`

### Key Takeaways

- CSRF
- DNS Rebinding
