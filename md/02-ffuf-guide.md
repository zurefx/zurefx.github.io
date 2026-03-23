---
TitleSEO:    "FFUF Web Fuzzing Guide | ZureFX"
TitlePost:   "FFUF Web Fuzzing Guide"
Author:      "ZureFX"
Description: "Practical FFUF guide for directory, parameter and subdomain fuzzing during web pentests."
Keywords:    "ffuf, fuzzing, web pentesting, directory brute force, bug bounty"
URL:         "https://zurefx.github.io/notes/ffuf-guide.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/ffuf-guide/"
Date:        "2026-03-03"
Tags:        "Web, Fuzzing, FFUF, BugBounty"
Section:     "notes"
Subsection:  "Web"
Lang:        "en"
pick:        "0"
main_img:    "ffuf-guide"
Permalink:   "/notes/ffuf-guide.html"
BtnLabel:    "View CheatSheet"
---

## Directory Fuzzing

```bash
ffuf -u https://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt
ffuf -u https://target.com/FUZZ -w wordlist.txt -fc 404
```

## Parameter Fuzzing

```bash
ffuf -u https://target.com/page?FUZZ=value -w params.txt
ffuf -u https://target.com/page?id=FUZZ -w numbers.txt -mr "admin"
```

## Subdomain Fuzzing

```bash
ffuf -u https://FUZZ.target.com -w subdomains.txt -fs 0
```
