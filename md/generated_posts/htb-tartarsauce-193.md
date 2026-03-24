---
TitleSEO: "VulnHub — Tartarsauce (Easy Linux) | ZureFX"
TitlePost: "VulnHub — Tartarsauce (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tartarsauce. LAPS Abuse and AS-REP Roasting to achieve easy compromise on Linux."
Keywords: "tryhackme, reversing, active directory, web, windows, medium, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-193.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-193/"
Date: "2024-01-09"
Tags: "TryHackMe, Reversing, Active Directory, Web, Windows, Medium, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-193"
Permalink: "/writeups/htb-tartarsauce-193.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Easy** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.23.98.59`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p995,9200,464 10.59.194.80 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.76.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
nmap -sCV -p139,23,1433 10.60.86.113 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.41.215/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.216.79 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **LAPS Abuse**.

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.29.244/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.83.142
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.126.73.93 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,25,5986 10.104.221.9 -oN scan.txt
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `lookupsid`
- `bloodhound`
- `secretsdump`
- `ligolo-ng`
- `ldapsearch`
- `socat`
- `john`

### Key Takeaways

- LAPS Abuse
- AS-REP Roasting
- Insecure Deserialization
