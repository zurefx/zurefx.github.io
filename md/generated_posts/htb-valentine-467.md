---
TitleSEO: "HackTheBox — Valentine (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — Valentine (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Valentine. AS-REP Roasting and DCSync to achieve insane compromise on Linux."
Keywords: "tryhackme, active directory, insane, forensics"
URL: "https://zurefx.github.io/writeups/htb-valentine-467.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-valentine-467/"
Date: "2025-02-11"
Tags: "TryHackMe, Active Directory, Insane, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-valentine-467"
Permalink: "/writeups/htb-valentine-467.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Valentine** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.87.247.22`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.135.211/FUZZ
gobuster dir -u http://10.41.10.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p389,5986,25 10.119.248.220 -oN scan.txt
gobuster dir -u http://10.45.149.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.15.21.99 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

Key finding: **AS-REP Roasting**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.67.183.164 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.89.122.160 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `GetNPUsers`
- `metasploit`
- `rpcclient`
- `evil-winrm`
- `ffuf`
- `wmiexec`

### Key Takeaways

- AS-REP Roasting
- DCSync
- Remote Code Execution
