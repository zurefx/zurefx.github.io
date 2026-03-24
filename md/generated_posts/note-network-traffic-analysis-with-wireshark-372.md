---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, malware, oscp, linux"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-372.html"
URL_IMAGES: ""
Date: "2024-04-23"
Tags: "Persistence, DFIR, Malware, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-372"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-372.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Sudo Misconfiguration

### nmap

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Spring

### HTTPS

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.159.247
nmap -sCV -p8443,110,5985 10.59.62.162 -oN scan.txt
```

## Active Directory

### Flask

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

- `evil-winrm`
- `smbclient`
- `Unquoted Service Path`
- `CORS Misconfiguration`

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.219.84
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

## CentOS

### .NET

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.166.203/FUZZ
evil-winrm -i 10.81.205.135 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,21,3268 10.70.253.58 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.95.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
feroxbuster -h
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.37.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.146.132
```

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.69.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.48.85.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.45.252.107 -u administrator -p 'P@ssw0rd!' --shares
```

## Drupal

### sqlmap

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## metasploit

### Elasticsearch

```bash
crackmapexec smb 10.41.191.82 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `ffuf`
- `burpsuite`
- `mimikatz`
- `ligolo-ng`
- `GetNPUsers`
