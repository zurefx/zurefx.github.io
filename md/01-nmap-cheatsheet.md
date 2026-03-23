---
TitleSEO:    "Nmap Cheatsheet | ZureFX"
TitlePost:   "Nmap Cheatsheet"
Author:      "ZureFX"
Description: "Quick reference for Nmap: scan types, timing, scripts and output formats for pentesting."
Keywords:    "nmap, port scanning, pentesting, oscp, cheatsheet"
URL:         "https://zurefx.github.io/notes/nmap-cheatsheet.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/nmap-cheatsheet/"
Date:        "2026-03-01"
Tags:        "CheatSheet, Network, Nmap, Enumeration"
Section:     "notes"
Subsection:  "Network"
pick:        "1"
Lang:        "en"
main_img:    "nmap-cheatsheet"
Permalink:   "/notes/nmap-cheatsheet.html"
BtnLabel:    "View CheatSheet"
---

## Basic Scans

```bash
nmap -sV -sC -oN scan.txt <target>
nmap -p- --min-rate 5000 <target>
nmap -sU -top-ports 20 <target>
```

## Timing Templates

| Flag | Name     | Speed  |
|------|----------|--------|
| -T1  | Sneaky   | Slow   |
| -T3  | Normal   | Medium |
| -T5  | Insane   | Fast   |

## NSE Scripts

```bash
nmap --script=vuln <target>
nmap --script=smb-enum-shares <target>
nmap --script=http-title <target>
```
