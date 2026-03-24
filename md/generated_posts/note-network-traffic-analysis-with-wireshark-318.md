---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, malware, dfir, enumeration, lateral movement"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-318.html"
URL_IMAGES: ""
Date: "2025-06-02"
Tags: "Cheatsheet, Malware, DFIR, Enumeration, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-318"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-318.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rpcclient

### Remote Code Execution

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

- `CSRF`
- `Cron Job`
- `dcomexec`
- `pwncat`
- `Remote File Inclusion`

## lookupsid

### SSRF

```python
crackmapexec smb 10.59.68.191 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.120.71/FUZZ
gobuster dir -u http://10.125.170.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.45.44.191 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.174.194/FUZZ
```

- `lookupsid`
- `sqlmap`
- `Pass the Ticket`
- `SeImpersonatePrivilege`
- `Unconstrained Delegation`
- `secretsdump`

## WinRM

### wmiexec

```python
feroxbuster -h
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.120.172/FUZZ
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
crackmapexec smb 10.92.121.24 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.32.209/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.218.136/FUZZ
```

## ACL Abuse

### LAPS Abuse

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.52.243/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
evil-winrm -i 10.10.50.185 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.76.54.196 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Weak Service Permissions

### NTLM Relay

- `ACL Abuse`
- `IDOR`
- `Pass the Hash`

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.
