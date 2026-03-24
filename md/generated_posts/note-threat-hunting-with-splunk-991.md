---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "linux, oscp, persistence, networking"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-991.html"
URL_IMAGES: ""
Date: "2025-03-24"
Tags: "Linux, OSCP, Persistence, Networking"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-991"
Permalink: "/notes/note-threat-hunting-with-splunk-991.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IMAP

### NFS No Root Squash

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.49.125.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.188.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.194.208/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.30.45/FUZZ
crackmapexec smb 10.37.205.126 -u administrator -p 'P@ssw0rd!' --shares
```

## impacket

### Local File Inclusion

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p139,80,3306 10.116.182.1 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## DLL Hijacking

### Telnet

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.91.65.167/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
crackmapexec smb 10.97.139.250 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** SSRF was identified as the primary attack vector in this scenario.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.178.14/FUZZ
```

## Bash

### XXE

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.144.169
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.
