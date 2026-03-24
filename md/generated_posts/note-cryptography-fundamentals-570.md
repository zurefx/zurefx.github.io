---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "malware, blue team, privilege escalation, persistence, oscp, lateral movement"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-570.html"
URL_IMAGES: ""
Date: "2025-02-20"
Tags: "Malware, Blue Team, Privilege Escalation, Persistence, OSCP, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-570"
Permalink: "/notes/note-cryptography-fundamentals-570.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetUserSPNs

### sharphound

- `dcomexec`
- `ffuf`
- `mimikatz`
- `sharphound`

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.224.135 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,5986,22 10.74.102.53 -oN scan.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.253.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.40.41/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.27.190
crackmapexec smb 10.32.133.72 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Pass the Ticket

### Ubuntu 20.04

- `Path Traversal`
- `msfvenom`
- `Resource-Based Constrained Delegation`
- `impacket`
- `ACL Abuse`
- `smbclient`

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

## Weak Service Permissions

### SeImpersonatePrivilege

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.49.94.164 -u administrator -p 'P@ssw0rd!' --shares
```

- `Pass the Ticket`
- `hashcat`
- `Open Redirect`

## Spring

### RDP

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `AlwaysInstallElevated`
- `Path Traversal`
- `rubeus`
- `enum4linux`

## Debian

### RPC

> **Note:** DNS Rebinding was identified as the primary attack vector in this scenario.

```python
nmap -sCV -p23,135,3306 10.101.79.196 -oN scan.txt
evil-winrm -i 10.13.180.64 -u administrator -p 'P@ssw0rd!'
```
