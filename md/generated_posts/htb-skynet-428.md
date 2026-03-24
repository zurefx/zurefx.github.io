---
TitleSEO: "HackTheBox — Skynet (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Skynet (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Skynet. SeDebugPrivilege and GPP Password to achieve easy compromise on Linux."
Keywords: "pwntilldawn, insane, ctf"
URL: "https://zurefx.github.io/writeups/htb-skynet-428.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-428/"
Date: "2025-05-25"
Tags: "PwnTillDawn, Insane, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-428"
Permalink: "/writeups/htb-skynet-428.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.105.31.228`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p23,993,25 10.15.19.167 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.45.50.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.89.29.23 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.247.188
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.82.226.87 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **SeDebugPrivilege**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.109.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.159.217/FUZZ
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.171.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `atexec`
- `sqlmap`
- `rubeus`
- `GetUserSPNs`
- `rpcclient`
- `hydra`
- `ligolo-ng`

### Key Takeaways

- SeDebugPrivilege
- GPP Password
