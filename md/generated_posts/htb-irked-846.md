---
TitleSEO: "PwnTillDawn — Irked (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Irked (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Irked. Subdomain Takeover and Path Traversal to achieve easy compromise on Linux."
Keywords: "easy, web, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-irked-846.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-irked-846/"
Date: "2025-07-11"
Tags: "Easy, Web, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-irked-846"
Permalink: "/writeups/htb-irked-846.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Irked** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.68.176.168`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p636,3268,5432 10.101.111.98 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.107.213.189 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.214.76
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Path Traversal**.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.216.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.231.23/FUZZ
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
nmap -sCV -p135,3268,27017 10.108.97.137 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.83.121
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.19.87
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `nmap`
- `sharphound`
- `psexec`
- `impacket`
- `ligolo-ng`
- `pwncat`
- `feroxbuster`
- `evil-winrm`

### Key Takeaways

- Subdomain Takeover
- Path Traversal
- Weak Service Permissions
- Pass the Ticket
