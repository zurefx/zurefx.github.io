---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "linux, cheatsheet, malware, oscp"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-624.html"
URL_IMAGES: ""
Date: "2025-10-25"
Tags: "Linux, Cheatsheet, Malware, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-624"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-624.html"
BtnLabel: "Read Notes"
Pick: 0
---
## CORS Misconfiguration

### netcat

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p993,389,993 10.91.33.79 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
gobuster dir -u http://10.121.63.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.127.68
```

- `Unquoted Service Path`
- `GetNPUsers`
- `gobuster`
- `Unconstrained Delegation`

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.92.177/FUZZ
```

## Redis

### hydra

```bash
nmap -sCV -p143,3306,110 10.64.69.131 -oN scan.txt
crackmapexec smb 10.22.174.51 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

```powershell
gobuster dir -u http://10.63.50.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Bash

### sqlmap

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.82.121/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.117.92
nmap -sCV -p25,5986,21 10.40.164.72 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

- `DCSync`
- `smbexec`
- `crackmapexec`
- `hydra`
- `IDOR`

```python
crackmapexec smb 10.50.237.91 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Nginx

### DCSync

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.235.236
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.226.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

- `CSRF`
- `SQL Injection`
- `Pass the Ticket`
- `Remote Code Execution`
- `SeDebugPrivilege`
- `Unquoted Service Path`

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Kerberoasting

### chisel

> **Note:** DCSync was identified as the primary attack vector in this scenario.

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.47.244.199 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.125.115/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## WordPress

### Remote File Inclusion

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.216.24/FUZZ
crackmapexec smb 10.112.51.231 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
crackmapexec smb 10.69.49.34 -u administrator -p 'P@ssw0rd!' --shares
```
