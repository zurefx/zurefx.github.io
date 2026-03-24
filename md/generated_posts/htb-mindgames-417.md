---
TitleSEO: "VulnHub — Mindgames (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Mindgames (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. IDOR and Remote File Inclusion to achieve hard compromise on Linux."
Keywords: "insane, active directory, medium"
URL: "https://zurefx.github.io/writeups/htb-mindgames-417.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-417/"
Date: "2024-10-29"
Tags: "Insane, Active Directory, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-417"
Permalink: "/writeups/htb-mindgames-417.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.124.246.236`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.124.95.147 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.60.19.184 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p993,1521,110 10.41.203.167 -oN scan.txt
crackmapexec smb 10.75.52.52 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.208.229
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Remote File Inclusion**.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.156.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.114.15.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.94.181/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8443,25,135 10.44.130.109 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.55.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `ffuf`
- `gobuster`
- `ligolo-ng`
- `enum4linux`
- `kerbrute`

### Key Takeaways

- IDOR
- Remote File Inclusion
- CORS Misconfiguration
