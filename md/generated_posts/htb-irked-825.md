---
TitleSEO: "VulnHub — Irked (Insane Windows) | ZureFX"
TitlePost: "VulnHub — Irked (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Irked. Path Traversal and Open Redirect to achieve insane compromise on Windows."
Keywords: "medium, easy, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-irked-825.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-825/"
Date: "2024-06-16"
Tags: "Medium, Easy, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-825"
Permalink: "/writeups/htb-irked-825.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Insane** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.41.9.127`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.10.107.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p21,8443,143 10.75.230.13 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.72.175 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.115.98.149 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.111.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.65.92.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p22,9200,8888 10.58.119.186 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.239.76
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Key finding: **Path Traversal**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.86.21.129 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
gobuster dir -u http://10.115.88.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.236.222/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.6.106
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.19.221.127 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.205.202 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `wpscan`
- `hashcat`
- `secretsdump`
- `smbexec`
- `netcat`
- `smbclient`

### Key Takeaways

- Path Traversal
- Open Redirect
- AS-REP Roasting
- Unconstrained Delegation
