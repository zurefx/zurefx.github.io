---
TitleSEO: "VulnHub — Node (Medium Linux) | ZureFX"
TitlePost: "VulnHub — Node (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Node. Writable PATH and SSRF to achieve medium compromise on Linux."
Keywords: "linux, offsec, reversing"
URL: "https://zurefx.github.io/writeups/htb-node-569.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-569/"
Date: "2025-02-24"
Tags: "Linux, OffSec, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-node-569"
Permalink: "/writeups/htb-node-569.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Node** is rated **Medium** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.40.143.129`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.31.203.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.121.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.55.228.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.115.50
gobuster dir -u http://10.106.152.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.6.70/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.107.193/FUZZ
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Writable PATH**.

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p21,3389,1521 10.93.17.83 -oN scan.txt
nmap -sCV -p8443,1521,1433 10.13.176.126 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.38.221/FUZZ
nmap -sCV -p139,464,3306 10.33.212.215 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.47.27.157/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
gobuster dir -u http://10.119.114.164/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.113.12.168 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `GetUserSPNs`
- `ligolo-ng`
- `chisel`
- `metasploit`
- `kerbrute`

### Key Takeaways

- Writable PATH
- SSRF
