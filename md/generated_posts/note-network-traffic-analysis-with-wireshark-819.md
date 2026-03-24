---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "malware, enumeration, oscp, privilege escalation, persistence"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-819.html"
URL_IMAGES: ""
Date: "2024-12-01"
Tags: "Malware, Enumeration, OSCP, Privilege Escalation, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-819"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-819.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GetUserSPNs

### GetNPUsers

```bash
feroxbuster -h
crackmapexec smb 10.43.113.125 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.60.9.163 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

## mimikatz

### nikto

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.191.143/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.145.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.106.24.196 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p23,3268,995 10.79.63.243 -oN scan.txt
```

## Node.js

### pwncat

- `XXE`
- `wmiexec`
- `impacket`
- `Pass the Hash`
- `Weak Service Permissions`
- `kerbrute`

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Apache

### SMB

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Remote Code Execution`
- `metasploit`
- `XXE`
- `Insecure Deserialization`

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

## FTP

### Python

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.
