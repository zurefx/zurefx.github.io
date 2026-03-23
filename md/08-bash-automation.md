---
TitleSEO:    "Bash Recon Automation Script | ZureFX"
TitlePost:   "Bash Recon Automation"
Author:      "ZureFX"
Description: "Bash script to automate initial recon: nmap, gobuster, whatweb and screenshot capture in one command."
Keywords:    "bash, automation, recon, scripting, pentesting, ctf"
URL:         "https://zurefx.github.io/scripting/bash-automation.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/scripting/bash-automation/"
Date:        "2026-03-12"
Tags:        "Bash, Scripting, Automation, Recon"
Section:     "scripting"
Lang:        "en"
main_img:    "bash-automation"
Permalink:   "/scripting/bash-automation.html"
BtnLabel:    "View Script"
---

## Usage

```bash
./recon.sh 10.10.10.10 output_dir
```

## Script

```bash
#!/bin/bash
TARGET=$1
DIR=$2

mkdir -p "$DIR"

echo "[*] Nmap full scan..."
nmap -p- --min-rate 5000 -oN "$DIR/nmap_full.txt" "$TARGET"

echo "[*] Gobuster..."
gobuster dir -u "http://$TARGET" -w /usr/share/wordlists/dirb/common.txt -o "$DIR/gobuster.txt"

echo "[*] WhatWeb..."
whatweb "$TARGET" | tee "$DIR/whatweb.txt"

echo "[+] Done! Results in $DIR/"
```
