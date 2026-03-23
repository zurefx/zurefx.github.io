---
TitleSEO:    "ZFX Recon Tool — Automated Recon Framework | ZureFX"
TitlePost:   "ZFX Recon Tool"
Author:      "ZureFX"
Description: "Automated reconnaissance framework for CTF and pentesting. Chains nmap, ffuf, whatweb and screenshots into a single command with structured output."
Keywords:    "recon tool, automation, python, ctf, pentesting, nmap, ffuf, open source"
URL:         "https://zurefx.github.io/research/zfx-recon-tool.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/zfx-recon-tool/"
Date:        "2026-03-22"
Tags:        "Python, Automation, Recon, OpenSource, Tools"
Section:     "projects"
Lang:        "en"
main_img:    "zfx-recon-tool"
Permalink:   "/research/zfx-recon-tool.html"
BtnLabel:    "View on GitHub"
Features:    "- Automated nmap + ffuf + whatweb chain\n- Structured markdown output per target\n- Screenshot capture via gowitness\n- Plugin system for custom modules"
---

## Overview

ZFX Recon Tool chains the most common recon tools into a single command, outputting a structured report per target.

## Usage

```bash
python3 zfx-recon.py --target 10.10.10.10 --out ./reports
```

## Stack

- Python 3.11
- nmap, ffuf, whatweb, gowitness
- Jinja2 for report templating