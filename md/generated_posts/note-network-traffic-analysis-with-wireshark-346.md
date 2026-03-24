---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, oscp, networking, linux"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-346.html"
URL_IMAGES: ""
Date: "2025-02-27"
Tags: "DFIR, OSCP, Networking, Linux"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-346"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-346.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LAPS Abuse

### mimikatz

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.210.224
evil-winrm -i 10.35.52.110 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.227.4/FUZZ
```

## enum4linux

### netcat

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

## IIS

### wpscan

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.1.250/FUZZ
```

- `XXE`
- `sqlmap`
- `wmiexec`
- `Broken Access Control`
- `crackmapexec`

- `sharphound`
- `SUID Binary`
- `Unquoted Service Path`
- `LAPS Abuse`

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.60.119/FUZZ
nmap -sCV -p993,993,5432 10.116.172.119 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## socat

### PowerShell

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.64.30/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.51.222/FUZZ
```

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.87.205/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

## SQL Injection

### Flask

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p1521,25,636 10.98.82.84 -oN scan.txt
```
