---
TitleSEO: "HackTheBox — Cap (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Cap (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Cap. Subdomain Takeover and GPP Password to achieve hard compromise on Windows."
Keywords: "windows, hackthebox, linux, medium, hard, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-cap-834.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-834/"
Date: "2026-02-20"
Tags: "Windows, HackTheBox, Linux, Medium, Hard, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-834"
Permalink: "/writeups/htb-cap-834.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.47.115.248`.

### Objectives

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.18.146/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.252.192/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.64.122
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p445,9200,22 10.54.238.86 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.165.89/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.63.14/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.233.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.79.146.2/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,9200,587 10.93.213.117 -oN scan.txt
nmap -sCV -p53,8443,587 10.28.253.141 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Subdomain Takeover**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.16.250.5 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.88.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.56.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `smbexec`
- `GetUserSPNs`
- `ldapsearch`
- `netcat`
- `impacket`
- `bloodhound`
- `nikto`

### Key Takeaways

- Subdomain Takeover
- GPP Password
