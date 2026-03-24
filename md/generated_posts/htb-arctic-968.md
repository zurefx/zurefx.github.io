---
TitleSEO: "HackTheBox — Arctic (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Arctic (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Arctic. XXE and Pass the Ticket to achieve insane compromise on Linux."
Keywords: "web, hard, reversing, easy, medium, pwntilldawn, active directory"
URL: "https://zurefx.github.io/writeups/htb-arctic-968.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-968/"
Date: "2024-03-15"
Tags: "Web, Hard, Reversing, Easy, Medium, PwnTillDawn, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-968"
Permalink: "/writeups/htb-arctic-968.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.114.237.203`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.100.228.142 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.152.5
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.69.94/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.25.247
nmap -sCV -p80,3268,53 10.45.74.156 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.55.167.101 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **XXE**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.89.28.137 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.112.156.128 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.116.40.67 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `netcat`
- `smbclient`
- `rpcclient`
- `hashcat`
- `nmap`
- `msfvenom`
- `wmiexec`

### Key Takeaways

- XXE
- Pass the Ticket
