---
TitleSEO: "OffSec Proving Grounds — Knife (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Knife (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Knife. CORS Misconfiguration and XXE to achieve medium compromise on Linux."
Keywords: "linux, pwntilldawn, insane, windows, ctf, medium, offsec"
URL: "https://zurefx.github.io/writeups/htb-knife-233.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-233/"
Date: "2026-01-10"
Tags: "Linux, PwnTillDawn, Insane, Windows, CTF, Medium, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-233"
Permalink: "/writeups/htb-knife-233.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Knife** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.59.236.180`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.64.89.6 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.37.140.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.28.123.203 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8080,995,389 10.105.180.193 -oN scan.txt
nmap -sCV -p1433,139,445 10.90.54.102 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.192.139
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p22,22,587 10.64.49.73 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **CORS Misconfiguration**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.136.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,23,21 10.54.115.233 -oN scan.txt
evil-winrm -i 10.123.103.195 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.72.22.233 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.81.52.143 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.137.98/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.68.46.253 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.30.244.93 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `enum4linux`
- `ligolo-ng`
- `socat`
- `evil-winrm`
- `pwncat`

### Key Takeaways

- CORS Misconfiguration
- XXE
