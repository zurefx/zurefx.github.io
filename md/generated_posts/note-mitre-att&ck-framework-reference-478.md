---
TitleSEO: "MITRE ATT&CK Framework Reference | ZureFX"
TitlePost: "MITRE ATT&CK Framework Reference"
Author: "ZureFX"
Description: "Personal notes on MITRE ATT&CK Framework Reference. Quick reference for pentesting and CTF challenges."
Keywords: "windows, networking, dfir, persistence"
URL: "https://zurefx.github.io/notes/note-mitre-att&ck-framework-reference-478.html"
URL_IMAGES: ""
Date: "2025-02-15"
Tags: "Windows, Networking, DFIR, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-mitre-att&ck-framework-reference-478"
Permalink: "/notes/note-mitre-att&ck-framework-reference-478.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Spring

### lookupsid

- `Weak Service Permissions`
- `Remote File Inclusion`
- `GetNPUsers`
- `Broken Access Control`
- `NTLM Relay`
- `Pass the Ticket`

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## hashcat

### LDAP

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.194.4
nmap -sCV -p110,3268,587 10.45.175.40 -oN scan.txt
nmap -sCV -p22,5985,27017 10.42.29.134 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

- `psexec`
- `DNS Rebinding`
- `ffuf`

## SSH

### Kali Linux

```bash
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.106.118
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.156.230
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
