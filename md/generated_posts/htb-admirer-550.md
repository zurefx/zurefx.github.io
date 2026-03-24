---
TitleSEO: "OffSec Proving Grounds — Admirer (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Admirer (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Admirer. Sudo Misconfiguration and NTLM Relay to achieve easy compromise on Linux."
Keywords: "pwntilldawn, insane, forensics, web"
URL: "https://zurefx.github.io/writeups/htb-admirer-550.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-550/"
Date: "2025-09-04"
Tags: "PwnTillDawn, Insane, Forensics, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-550"
Permalink: "/writeups/htb-admirer-550.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.80.144.162`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.103.91.157 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.224.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **LXD Privilege Escalation**.

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.49.73.36 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.191.109
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.69.70
gobuster dir -u http://10.96.189.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.28.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.31.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `msfvenom`
- `john`
- `nikto`
- `sharphound`
- `atexec`
- `smbexec`

### Key Takeaways

- Sudo Misconfiguration
- NTLM Relay
- LXD Privilege Escalation
