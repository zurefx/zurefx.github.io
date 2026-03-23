---
TitleSEO:    "SMB Enumeration Cheatsheet | ZureFX"
TitlePost:   "SMB Enumeration"
Author:      "ZureFX"
Description: "SMB enumeration techniques using smbclient, enum4linux, crackmapexec and impacket for Active Directory pentesting."
Keywords:    "smb, enumeration, active directory, crackmapexec, impacket, pentesting"
URL:         "https://zurefx.github.io/notes/smb-enumeration.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/smb-enumeration/"
Date:        "2026-03-08"
Tags:        "CheatSheet, SMB, ActiveDirectory, Enumeration"
Section:     "notes"
Subsection:  "Active Directory"
Lang:        "en"
main_img:    "smb-enumeration"
Permalink:   "/notes/smb-enumeration.html"
BtnLabel:    "View CheatSheet"
---

## smbclient

```bash
smbclient -L //10.10.10.10 -N
smbclient //10.10.10.10/share -U user
```

## enum4linux-ng

```bash
enum4linux-ng -A 10.10.10.10
```

## CrackMapExec

```bash
cme smb 10.10.10.10 -u user -p pass --shares
cme smb 10.10.10.10 -u user -p pass --users
```

## Impacket

```bash
impacket-smbclient user:pass@10.10.10.10
impacket-lookupsid user:pass@10.10.10.10
```
