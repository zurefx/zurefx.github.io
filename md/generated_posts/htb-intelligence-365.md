---
TitleSEO: "OffSec Proving Grounds — Intelligence (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Intelligence (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Intelligence. Pass the Hash and Subdomain Takeover to achieve insane compromise on Linux."
Keywords: "ctf, hard, active directory"
URL: "https://zurefx.github.io/writeups/htb-intelligence-365.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-intelligence-365/"
Date: "2026-03-22"
Tags: "CTF, Hard, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-intelligence-365"
Permalink: "/writeups/htb-intelligence-365.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Intelligence** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.33.207.169`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.83.53.150 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.62.228.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.183.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.113.158.131 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Subdomain Takeover**.

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.73.23.196 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.71.46.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5985,993,143 10.102.71.61 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.207.166
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.4.10
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.204.229
crackmapexec smb 10.102.59.136 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `bloodhound`
- `feroxbuster`
- `wmiexec`
- `metasploit`
- `hashcat`
- `psexec`
- `netcat`

### Key Takeaways

- Pass the Hash
- Subdomain Takeover
- DNS Rebinding
