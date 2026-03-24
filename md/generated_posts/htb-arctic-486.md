---
TitleSEO: "VulnHub — Arctic (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Arctic (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Arctic. DLL Hijacking and Pass the Ticket to achieve easy compromise on Linux."
Keywords: "insane, windows, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-arctic-486.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-486/"
Date: "2026-02-15"
Tags: "Insane, Windows, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-486"
Permalink: "/writeups/htb-arctic-486.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Arctic** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.123.68.226`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.85.165.86 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.38.86/FUZZ
crackmapexec smb 10.33.4.72 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p636,1521,80 10.76.215.154 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.95.241.215 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Pass the Ticket**.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.18.254.10 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.117.30.245 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.103.74.58 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.129.214.61 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.58.176.147 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.172.101 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.38.87.53/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.46.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.103.223
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `dcomexec`
- `psexec`
- `GetNPUsers`
- `ligolo-ng`
- `sharphound`

### Key Takeaways

- DLL Hijacking
- Pass the Ticket
- Sudo Misconfiguration
- Constrained Delegation
