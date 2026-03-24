---
TitleSEO: "TryHackMe — Omni (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Omni (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Omni. IDOR and XSS to achieve medium compromise on Linux."
Keywords: "active directory, insane, ctf, forensics"
URL: "https://zurefx.github.io/writeups/htb-omni-374.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-374/"
Date: "2024-11-18"
Tags: "Active Directory, Insane, CTF, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-374"
Permalink: "/writeups/htb-omni-374.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Omni** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.75.139.104`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.10.137
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.87.97.53 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1433,993,636 10.70.14.182 -oN scan.txt
gobuster dir -u http://10.58.82.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.122.248.118 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Remote Code Execution**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8443,53,389 10.84.252.90 -oN scan.txt
gobuster dir -u http://10.83.51.74/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.67.193.207 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5986,80,9200 10.82.86.238 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `wmiexec`
- `crackmapexec`
- `metasploit`
- `ligolo-ng`
- `atexec`
- `evil-winrm`

### Key Takeaways

- IDOR
- XSS
- Remote Code Execution
- Silver Ticket
