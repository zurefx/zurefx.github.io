---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "linux, dfir, enumeration, oscp"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-143.html"
URL_IMAGES: ""
Date: "2025-05-24"
Tags: "Linux, DFIR, Enumeration, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-143"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-143.html"
BtnLabel: "Read Notes"
Pick: 0
---
## DCSync

### Cron Job

```bash
gobuster dir -u http://10.21.237.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** SSRF was identified as the primary attack vector in this scenario.

## Open Redirect

### HTTP

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## SSH

### ffuf

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.93.147.104 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.60.6.163/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.64.181.195 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.223.208
```
