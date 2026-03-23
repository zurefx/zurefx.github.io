---
TitleSEO:    "HackTheBox Keeper Writeup | ZureFX"
TitlePost:   "HTB Keeper — Easy Linux"
Author:      "ZureFX"
Description: "Full writeup for HackTheBox Keeper. Exploiting default credentials in a ticket system and KeePass memory dump to get root."
Keywords:    "hackthebox, keeper, writeup, keepass, cve-2023-32784, linux"
URL:         "https://zurefx.github.io/writeups/htb-keeper.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-keeper/"
Date:        "2026-03-05"
Tags:        "HackTheBox, Easy, Linux, KeePass, DefaultCreds"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-keeper"
Permalink:   "/writeups/htb-keeper.html"
BtnLabel:    "Read Writeup"
---

## Enumeration

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1
80/tcp open  http    nginx 1.18.0
```

## Foothold

Default credentials on Request Tracker: `root:password`.

Found user credentials in a ticket note: `lnorgaard:Welcome2023!`

## Privilege Escalation

KeePass dump file in home directory → CVE-2023-32784.

```bash
python3 keepass-dump-masterkey.py -d KeePassDumpFull.dmp
```

Recovered master password, extracted root SSH key from `.kdbx` database.
