---
TitleSEO: "PwnTillDawn — Magic (Insane Linux) | ZureFX"
TitlePost: "PwnTillDawn — Magic (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Magic. AlwaysInstallElevated and Weak Service Permissions to achieve insane compromise on Linux."
Keywords: "reversing, easy, web, offsec, windows, insane, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-magic-156.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-magic-156/"
Date: "2024-06-18"
Tags: "Reversing, Easy, Web, OffSec, Windows, Insane, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-magic-156"
Permalink: "/writeups/htb-magic-156.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Magic** is rated **Insane** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.14.207.192`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.65.147.217 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.53.230.54 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.19.189/FUZZ
crackmapexec smb 10.117.149.42 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p110,443,25 10.62.77.166 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.165.163 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3389,3268,443 10.104.71.238 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **AlwaysInstallElevated**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.213.75/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.26.50.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.74.176
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.199.25
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.113.114.68 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.122.251.77 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetUserSPNs`
- `mimikatz`
- `smbclient`
- `smbexec`
- `ligolo-ng`

### Key Takeaways

- AlwaysInstallElevated
- Weak Service Permissions
- CSRF
- Unconstrained Delegation
