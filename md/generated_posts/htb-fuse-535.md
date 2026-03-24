---
TitleSEO: "OffSec Proving Grounds — Fuse (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Fuse (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Fuse. SeImpersonatePrivilege and Command Injection to achieve easy compromise on Linux."
Keywords: "hard, linux, easy, pwntilldawn, tryhackme, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-fuse-535.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-fuse-535/"
Date: "2024-06-11"
Tags: "Hard, Linux, Easy, PwnTillDawn, TryHackMe, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-fuse-535"
Permalink: "/writeups/htb-fuse-535.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Fuse** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.84.205.248`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.88.201.138 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.201.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.68.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.69.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.40.22.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.25.71.151/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.167.216
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Command Injection**.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.117.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.13.55
gobuster dir -u http://10.22.46.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.13.111.131 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p5432,143,80 10.27.8.7 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `msfvenom`
- `atexec`
- `smbexec`
- `lookupsid`
- `psexec`
- `metasploit`

### Key Takeaways

- SeImpersonatePrivilege
- Command Injection
