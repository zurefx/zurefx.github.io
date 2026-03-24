---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, malware, linux, dfir"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-970.html"
URL_IMAGES: ""
Date: "2025-11-07"
Tags: "OSCP, Malware, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-970"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-970.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### Django

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

- `wpscan`
- `SeImpersonatePrivilege`
- `sharphound`
- `NTLM Relay`
- `crackmapexec`
- `impacket`

## HTTP

### netcat

- `metasploit`
- `smbclient`
- `impacket`
- `Command Injection`
- `ffuf`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.86.110
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.154.215
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## SSH

### dcomexec

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.242.79
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
crackmapexec smb 10.88.81.227 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

- `smbclient`
- `burpsuite`
- `hydra`
- `DCSync`
- `Resource-Based Constrained Delegation`
- `CSRF`
