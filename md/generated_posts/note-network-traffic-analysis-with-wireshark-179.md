---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, networking, windows, cheatsheet, dfir, privilege escalation"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-179.html"
URL_IMAGES: ""
Date: "2024-07-25"
Tags: "OSCP, Networking, Windows, Cheatsheet, DFIR, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-179"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-179.html"
BtnLabel: "Read Notes"
Pick: 0
---
## XSS

### RPC

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## nmap

### pwncat

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.91.217/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.102.203/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.235.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
gobuster dir -u http://10.115.42.66/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## LAPS Abuse

### ffuf

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

- `smbclient`
- `socat`
- `bloodhound`
- `rpcclient`
