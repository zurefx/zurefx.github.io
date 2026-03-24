---
TitleSEO: "VulnHub — Worker (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Worker (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Worker. NTLM Relay and SeImpersonatePrivilege to achieve easy compromise on FreeBSD."
Keywords: "linux, web, insane, easy"
URL: "https://zurefx.github.io/writeups/htb-worker-895.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-worker-895/"
Date: "2025-11-19"
Tags: "Linux, Web, Insane, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-worker-895"
Permalink: "/writeups/htb-worker-895.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Worker** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.15.205.94`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.123.185.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.72.243.9 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.76.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.47.251/FUZZ
nmap -sCV -p389,995,5985 10.42.96.131 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SSTI**.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.116.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.110.222.218 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.199.140
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `GetUserSPNs`
- `ffuf`
- `chisel`
- `psexec`

### Key Takeaways

- NTLM Relay
- SeImpersonatePrivilege
- SSTI
- Kerberoasting
