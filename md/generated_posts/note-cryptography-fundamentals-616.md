---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "windows, cheatsheet, enumeration, linux, dfir, malware"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-616.html"
URL_IMAGES: ""
Date: "2025-05-03"
Tags: "Windows, Cheatsheet, Enumeration, Linux, DFIR, Malware"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-616"
Permalink: "/notes/note-cryptography-fundamentals-616.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Windows Server 2019

### Sudo Misconfiguration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.70.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p389,5985,445 10.117.101.128 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `GetNPUsers`
- `Golden Ticket`
- `kerbrute`
- `Constrained Delegation`
- `DCSync`

## wpscan

### NFS

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.166.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

- `GetNPUsers`
- `NFS No Root Squash`
- `smbexec`
- `Remote File Inclusion`
- `mimikatz`

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

- `sharphound`
- `Resource-Based Constrained Delegation`
- `crackmapexec`
- `Command Injection`

## ffuf

### ldapsearch

- `NFS No Root Squash`
- `Resource-Based Constrained Delegation`
- `Remote File Inclusion`
- `rpcclient`
- `lookupsid`
- `wmiexec`

- `socat`
- `ffuf`
- `SeImpersonatePrivilege`
- `metasploit`
