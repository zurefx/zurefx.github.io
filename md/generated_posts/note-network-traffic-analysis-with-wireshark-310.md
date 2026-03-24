---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "networking, enumeration, malware, lateral movement, dfir"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-310.html"
URL_IMAGES: ""
Date: "2026-03-02"
Tags: "Networking, Enumeration, Malware, Lateral Movement, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-310"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-310.html"
BtnLabel: "Read Notes"
Pick: 0
---
## hydra

### Broken Access Control

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.101.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.36.139.54 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.76.78.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.213.205/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.68.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.86.94 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Drupal

### .NET

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.115.39.69 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.10.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.125.31.46 -u administrator -p 'P@ssw0rd!'
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.116.96/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8443,3389,3389 10.12.174.158 -oN scan.txt
```

- `evil-winrm`
- `SeDebugPrivilege`
- `Command Injection`
- `burpsuite`
- `Weak Service Permissions`

## gobuster

### DNS

```python
evil-winrm -i 10.56.89.75 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.54.142.127 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

- `smbexec`
- `Sudo Misconfiguration`
- `Command Injection`

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

- `crackmapexec`
- `LAPS Abuse`
- `impacket`
- `burpsuite`
