---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "oscp, linux, enumeration, privilege escalation, cheatsheet"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-517.html"
URL_IMAGES: ""
Date: "2024-06-05"
Tags: "OSCP, Linux, Enumeration, Privilege Escalation, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-517"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-517.html"
BtnLabel: "Read Notes"
Pick: 0
---
## sqlmap

### atexec

```bash
crackmapexec smb 10.87.196.16 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.40.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p110,8080,3268 10.92.1.191 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

- `rubeus`
- `Cron Job`
- `SSRF`
- `Silver Ticket`
- `AlwaysInstallElevated`
- `wpscan`

## Ubuntu 20.04

### Ruby on Rails

```powershell
nmap -sCV -p22,143,443 10.59.16.51 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.118.81
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.140.152/FUZZ
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.252.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.65.17.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** NFS No Root Squash was identified as the primary attack vector in this scenario.

> **Note:** SeImpersonatePrivilege was identified as the primary attack vector in this scenario.

## chisel

### rubeus

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.
