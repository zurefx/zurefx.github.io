---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, networking, cheatsheet, enumeration, dfir"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-917.html"
URL_IMAGES: ""
Date: "2025-03-09"
Tags: "OSCP, Networking, Cheatsheet, Enumeration, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-917"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-917.html"
BtnLabel: "Read Notes"
Pick: 0
---
## john

### Joomla

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p3306,9200,139 10.31.152.144 -oN scan.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.48.92/FUZZ
crackmapexec smb 10.123.121.180 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `dcomexec`
- `mimikatz`
- `Resource-Based Constrained Delegation`
- `smbclient`
- `Golden Ticket`

## SNMP

### Remote Code Execution

- `Path Traversal`
- `Pass the Ticket`
- `Constrained Delegation`
- `Silver Ticket`

- `Open Redirect`
- `smbclient`
- `Path Traversal`
- `Insecure Deserialization`
- `lookupsid`
- `kerbrute`

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## LAPS Abuse

### Spring

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Command Injection

### pwncat

```python
nmap -sCV -p636,445,9200 10.77.154.188 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.49.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `Open Redirect`
- `socat`
- `nmap`

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.40.246.34 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.132.233
crackmapexec smb 10.97.5.21 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.54.241.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```
