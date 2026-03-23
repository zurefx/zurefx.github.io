---
TitleSEO:    "Fast Port Scanner in Python | ZureFX"
TitlePost:   "Fast Port Scanner in Python"
Author:      "ZureFX"
Description: "Multithreaded Python port scanner with banner grabbing, built as a lightweight alternative to nmap for CTF environments."
Keywords:    "port scanner, python, scripting, tools, ctf, networking"
URL:         "https://zurefx.github.io/scripting/port-scan-tool.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/scripting/port-scan-tool/"
Date:        "2026-03-17"
Tags:        "Python, Scripting, Tools, Networking"
Section:     "scripting"
Lang:        "en"
main_img:    "port-scan-tool"
Permalink:   "/scripting/port-scan-tool.html"
BtnLabel:    "View Script"
---

## Features

- Multithreaded (100 workers by default)
- Banner grabbing
- Output to file
- Top 1000 ports or custom range

## Usage

```bash
python3 scanner.py -t 10.10.10.10 -p 1-1000 -o results.txt
python3 scanner.py -t 10.10.10.10 --top
```

## Core

```python
from concurrent.futures import ThreadPoolExecutor
import socket

def scan_port(host, port, timeout=1):
    try:
        s = socket.socket()
        s.settimeout(timeout)
        s.connect((host, port))
        banner = s.recv(1024).decode(errors="ignore").strip()
        s.close()
        return port, banner
    except:
        return None
```
