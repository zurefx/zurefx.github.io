---
TitleSEO: "HackTheBox — TheNotebook (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — TheNotebook (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox TheNotebook. SUID Binary and CSRF to achieve insane compromise on Linux."
Keywords: "hard, web, reversing"
URL: "https://zurefx.github.io/writeups/htb-thenotebook-736.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-thenotebook-736/"
Date: "2025-12-19"
Tags: "Hard, Web, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-thenotebook-736"
Permalink: "/writeups/htb-thenotebook-736.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **TheNotebook** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.74.20.165`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,9200,8888 10.115.34.143 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.157.24
nmap -sCV -p1521,139,587 10.50.51.34 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.44.46/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **CSRF**.

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.154.124
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.213.43
crackmapexec smb 10.113.40.92 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.238.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.33.29.7/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `mimikatz`
- `psexec`
- `ligolo-ng`
- `wpscan`

### Key Takeaways

- SUID Binary
- CSRF
