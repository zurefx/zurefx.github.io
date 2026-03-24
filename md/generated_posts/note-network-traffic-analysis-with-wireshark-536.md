---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, windows, linux, dfir"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-536.html"
URL_IMAGES: ""
Date: "2025-09-15"
Tags: "Persistence, Windows, Linux, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-536"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-536.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hashcat

### RPC

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.66.209.191/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `Cron Job`
- `Unquoted Service Path`
- `metasploit`
- `ACL Abuse`
- `LXD Privilege Escalation`

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## NTLM Relay

### DLL Hijacking

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.95.170.83 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.112.13.7 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.160.49
evil-winrm -i 10.57.126.151 -u administrator -p 'P@ssw0rd!'
```

## ACL Abuse

### Kerberoasting

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Silver Ticket`
- `CSRF`
- `hashcat`
- `kerbrute`
- `SeDebugPrivilege`

## Silver Ticket

### IDOR

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.70.159.204 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.47.239.219 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8888,25,8080 10.103.46.177 -oN scan.txt
```

- `ACL Abuse`
- `chisel`
- `ligolo-ng`
- `NTLM Relay`
- `Command Injection`
- `netcat`

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

- `XSS`
- `Broken Access Control`
- `socat`
- `john`
