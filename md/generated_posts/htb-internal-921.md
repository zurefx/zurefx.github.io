---
TitleSEO: "PwnTillDawn — Internal (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Internal (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Internal. DCSync and ACL Abuse to achieve medium compromise on FreeBSD."
Keywords: "linux, windows, insane"
URL: "https://zurefx.github.io/writeups/htb-internal-921.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-internal-921/"
Date: "2025-11-27"
Tags: "Linux, Windows, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-internal-921"
Permalink: "/writeups/htb-internal-921.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Internal** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.70.33.236`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.49.157 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p21,636,5432 10.125.142.80 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.192.144/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.223.239 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.116.198
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.42.228
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **DCSync**.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.251.21/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.211.190
gobuster dir -u http://10.41.166.102/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5986,993,995 10.125.248.234 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p27017,135,1433 10.66.91.215 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.240.48/FUZZ
```

### Exploitation

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `sharphound`
- `GetNPUsers`
- `feroxbuster`
- `impacket`
- `GetUserSPNs`
- `chisel`
- `netcat`
- `smbclient`

### Key Takeaways

- DCSync
- ACL Abuse
- Remote File Inclusion
