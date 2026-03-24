---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, dfir, networking, linux, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-969.html"
URL_IMAGES: ""
Date: "2025-09-01"
Tags: "Cheatsheet, DFIR, Networking, Linux, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-969"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-969.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DNS Rebinding

### sharphound

- `LAPS Abuse`
- `LXD Privilege Escalation`
- `impacket`
- `pwncat`
- `netcat`

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```python
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.4.183
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.90.86
feroxbuster -h
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.19.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.147.216
```

## PostgreSQL

### Pass the Ticket

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** LXD Privilege Escalation was identified as the primary attack vector in this scenario.

- `SUID Binary`
- `pwncat`
- `LXD Privilege Escalation`
- `IDOR`
- `crackmapexec`
- `john`

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## nikto

### burpsuite

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.165.111/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.125.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

## Path Traversal

### evil-winrm

- `Kerberoasting`
- `nmap`
- `Weak Service Permissions`
- `john`
- `impacket`
- `NFS No Root Squash`

```bash
nmap -sCV -p1521,389,587 10.96.74.237 -oN scan.txt
feroxbuster -h
nmap -sCV -p1433,5432,25 10.54.111.15 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.6.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
