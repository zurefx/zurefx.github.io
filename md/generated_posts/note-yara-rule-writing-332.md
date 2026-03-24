---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, networking, malware, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-332.html"
URL_IMAGES: ""
Date: "2025-04-14"
Tags: "Persistence, Networking, Malware, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-332"
Permalink: "/notes/note-yara-rule-writing-332.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IIS

### RDP

> **Note:** Writable PATH was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

> **Note:** AlwaysInstallElevated was identified as the primary attack vector in this scenario.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## WordPress

### Joomla

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
gobuster dir -u http://10.58.49.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.27.232.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,21,8080 10.53.200.175 -oN scan.txt
```

```python
gobuster dir -u http://10.59.77.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8443,3268,5985 10.118.227.59 -oN scan.txt
```

## Kali Linux

### Nginx

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.117.58/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.108.220.115 -u administrator -p 'P@ssw0rd!'
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## RPC

### mimikatz

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```python
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.81.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
