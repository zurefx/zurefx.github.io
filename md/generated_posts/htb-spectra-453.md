---
TitleSEO: "VulnHub — Spectra (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Spectra (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. XXE and Remote Code Execution to achieve medium compromise on Linux."
Keywords: "pwntilldawn, insane, hackthebox, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-453.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-453/"
Date: "2025-06-05"
Tags: "PwnTillDawn, Insane, HackTheBox, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-453"
Permalink: "/writeups/htb-spectra-453.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.58.37.69`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.182.144/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.207.56/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.188.56/FUZZ
feroxbuster -h
crackmapexec smb 10.75.230.188 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Remote Code Execution**.

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.241.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p139,3306,464 10.22.109.53 -oN scan.txt
gobuster dir -u http://10.72.10.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.66.228.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.25.168
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.76.47.101 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `lookupsid`
- `dcomexec`
- `feroxbuster`
- `wpscan`
- `mimikatz`

### Key Takeaways

- XXE
- Remote Code Execution
- AS-REP Roasting
