---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "linux, networking, enumeration, persistence, oscp"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-176.html"
URL_IMAGES: ""
Date: "2024-02-07"
Tags: "Linux, Networking, Enumeration, Persistence, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-176"
Permalink: "/notes/note-yara-rule-writing-176.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### secretsdump

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

> **Note:** SeDebugPrivilege was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

- `DLL Hijacking`
- `SeDebugPrivilege`
- `CSRF`
- `GPP Password`
- `Constrained Delegation`

- `Pass the Ticket`
- `Insecure Deserialization`
- `chisel`

## Sudo Misconfiguration

### NFS No Root Squash

- `crackmapexec`
- `Pass the Hash`
- `SSTI`
- `nikto`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.107.205.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.108.34.247 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.25.217
```

## POP3

### hashcat

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.119.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## IMAP

### Ruby on Rails

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.158.170/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.102.5
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

## Unquoted Service Path

### AlwaysInstallElevated

- `SSRF`
- `Open Redirect`
- `DNS Rebinding`
- `SQL Injection`
- `rpcclient`

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.
