---
TitleSEO: "TryHackMe — Legacy (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Legacy (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Legacy. Pass the Ticket and AS-REP Roasting to achieve insane compromise on Linux."
Keywords: "linux, web, easy, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-legacy-583.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-583/"
Date: "2024-10-02"
Tags: "Linux, Web, Easy, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-583"
Permalink: "/writeups/htb-legacy-583.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.85.88.81`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p23,443,8443 10.106.32.73 -oN scan.txt
feroxbuster -h
evil-winrm -i 10.68.28.242 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.18.76.103 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.92.88.41/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.42.186.156 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.92.73.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Pass the Ticket**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.69.168.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.106.197.154 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.183.229
evil-winrm -i 10.104.9.183 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.122.217.27 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `msfvenom`
- `chisel`
- `wmiexec`
- `rpcclient`
- `enum4linux`
- `evil-winrm`
- `john`
- `atexec`

### Key Takeaways

- Pass the Ticket
- AS-REP Roasting
