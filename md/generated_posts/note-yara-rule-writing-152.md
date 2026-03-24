---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, oscp, linux, lateral movement"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-152.html"
URL_IMAGES: ""
Date: "2025-09-06"
Tags: "Malware, DFIR, OSCP, Linux, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-152"
Permalink: "/notes/note-yara-rule-writing-152.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSRF

### hashcat

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## netcat

### SeImpersonatePrivilege

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## GPP Password

### Broken Access Control

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## wmiexec

### DCSync

> **Note:** Kerberoasting was identified as the primary attack vector in this scenario.

- `ligolo-ng`
- `SSRF`
- `gobuster`
- `Remote Code Execution`

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.10.156
```

## ldapsearch

### SNMP

- `Path Traversal`
- `GetUserSPNs`
- `smbexec`
- `Sudo Misconfiguration`
- `Insecure Deserialization`

- `SeDebugPrivilege`
- `pwncat`
- `Weak Service Permissions`
- `chisel`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.233.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.186.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p135,636,21 10.103.241.135 -oN scan.txt
```
