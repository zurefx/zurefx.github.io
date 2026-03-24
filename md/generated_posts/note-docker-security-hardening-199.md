---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, malware, oscp, lateral movement, enumeration, cheatsheet"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-199.html"
URL_IMAGES: ""
Date: "2024-08-23"
Tags: "Persistence, Malware, OSCP, Lateral Movement, Enumeration, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-199"
Permalink: "/notes/note-docker-security-hardening-199.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Telnet

### netcat

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.101.144/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## john

### Subdomain Takeover

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.166.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.67.101/FUZZ
```

- `Remote Code Execution`
- `Golden Ticket`
- `AS-REP Roasting`

## Docker Escape

### Active Directory

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

> **Note:** Silver Ticket was identified as the primary attack vector in this scenario.
