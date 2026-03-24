---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, blue team, networking, oscp, linux"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-759.html"
URL_IMAGES: ""
Date: "2025-07-23"
Tags: "Lateral Movement, Blue Team, Networking, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-759"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-759.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XSS

### rpcclient

```bash
evil-winrm -i 10.52.110.19 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
gobuster dir -u http://10.38.21.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.127.121/FUZZ
```

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## LXD Privilege Escalation

### CMD

- `Sudo Misconfiguration`
- `GPP Password`
- `Command Injection`
- `SeImpersonatePrivilege`
- `smbexec`

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.124.156.19/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## IDOR

### enum4linux

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## AlwaysInstallElevated

### Cron Job

```bash
gobuster dir -u http://10.92.124.62/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.105.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.250.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

- `sharphound`
- `metasploit`
- `ffuf`
- `enum4linux`
- `dcomexec`

- `rpcclient`
- `sqlmap`
- `chisel`
- `GetNPUsers`

```python
gobuster dir -u http://10.71.59.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.101.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p110,3268,139 10.51.47.167 -oN scan.txt
evil-winrm -i 10.38.114.149 -u administrator -p 'P@ssw0rd!'
```

## Django

### dcomexec

- `smbclient`
- `Weak Service Permissions`
- `SUID Binary`
- `Insecure Deserialization`
- `socat`
- `Kerberoasting`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.146.253
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.184.20
```

## Docker Escape

### DLL Hijacking

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

- `ACL Abuse`
- `NTLM Relay`
- `secretsdump`
- `crackmapexec`
