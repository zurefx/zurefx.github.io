---
TitleSEO: "PwnTillDawn — Dynstr (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Dynstr (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Dynstr. Pass the Hash and XXE to achieve easy compromise on Linux."
Keywords: "pwntilldawn, reversing, easy, insane, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-dynstr-506.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-506/"
Date: "2025-09-01"
Tags: "PwnTillDawn, Reversing, Easy, Insane, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-506"
Permalink: "/writeups/htb-dynstr-506.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Dynstr** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.60.119.80`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5986,464,80 10.58.128.249 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.156.219
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.199.115
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.96.122/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.99.243.177 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Pass the Hash**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.51.93.226 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.79.45.176 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.249.15
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.241.84
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.10.59
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `psexec`
- `pwncat`
- `smbexec`
- `rpcclient`
- `john`
- `feroxbuster`

### Key Takeaways

- Pass the Hash
- XXE
