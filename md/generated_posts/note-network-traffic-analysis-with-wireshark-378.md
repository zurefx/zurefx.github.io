---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "malware, networking, blue team"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-378.html"
URL_IMAGES: ""
Date: "2024-07-07"
Tags: "Malware, Networking, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-378"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-378.html"
BtnLabel: "Read Notes"
Pick: 0
---
## metasploit

### secretsdump

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.98.38.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

> **Note:** CSRF was identified as the primary attack vector in this scenario.

## nmap

### lookupsid

- `IDOR`
- `DCSync`
- `Unconstrained Delegation`
- `Golden Ticket`
- `DNS Rebinding`

```bash
evil-winrm -i 10.42.181.165 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.217.231
```

## Writable PATH

### Java

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.14.58.90 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.38.110.156 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## HTTPS

### ligolo-ng

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.83.128.52 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Node.js

### msfvenom

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## bloodhound

### Debian

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.152.238/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.192.226/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.
