---
TitleSEO: "HackTheBox — Arctic (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Arctic (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Arctic. XSS and DCSync to achieve insane compromise on Linux."
Keywords: "reversing, tryhackme, medium, forensics, active directory"
URL: "https://zurefx.github.io/writeups/htb-arctic-862.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-862/"
Date: "2025-11-27"
Tags: "Reversing, TryHackMe, Medium, Forensics, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-862"
Permalink: "/writeups/htb-arctic-862.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.93.130.80`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.21.196.97 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.205.172
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.75.245.159 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p139,636,22 10.61.173.209 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p8443,5432,3306 10.16.118.222 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,5985,995 10.84.197.37 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.70.103/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **DCSync**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.26.227.97 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.77.213.40 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,5986,5432 10.59.79.155 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.37.189/FUZZ
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.208.220/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `gobuster`
- `dcomexec`
- `burpsuite`
- `GetNPUsers`
- `evil-winrm`
- `atexec`
- `pwncat`
- `sharphound`

### Key Takeaways

- XSS
- DCSync
- Remote Code Execution
- Unquoted Service Path
