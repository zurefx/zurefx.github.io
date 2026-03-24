---
TitleSEO: "OffSec Proving Grounds — Nineveh (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Nineveh (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Nineveh. LXD Privilege Escalation and NTLM Relay to achieve easy compromise on Linux."
Keywords: "reversing, tryhackme, pwntilldawn, forensics, insane, hard"
URL: "https://zurefx.github.io/writeups/htb-nineveh-352.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-352/"
Date: "2024-08-11"
Tags: "Reversing, TryHackMe, PwnTillDawn, Forensics, Insane, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-352"
Permalink: "/writeups/htb-nineveh-352.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Nineveh** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.128.68.169`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.246.95 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.98.112
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

Key finding: **NTLM Relay**.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.120.174.163 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.219.159 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p27017,445,1433 10.111.216.172 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.64.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p143,27017,139 10.52.24.195 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.2.85
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `john`
- `gobuster`
- `chisel`
- `hashcat`
- `burpsuite`
- `ffuf`
- `ligolo-ng`

### Key Takeaways

- LXD Privilege Escalation
- NTLM Relay
