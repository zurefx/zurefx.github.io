---
TitleSEO:    "HackTheBox Hospital Writeup | ZureFX"
TitlePost:   "HTB Hospital — Medium Windows"
Author:      "ZureFX"
Description: "HackTheBox Hospital writeup. File upload bypass, CVE-2023-35001 Linux kernel exploit and RoundCube webmail attack chain."
Keywords:    "hackthebox, hospital, writeup, file upload, cve-2023-35001, windows"
URL:         "https://zurefx.github.io/writeups/htb-hospital.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-hospital/"
Date:        "2026-03-10"
Tags:        "HackTheBox, Medium, Windows, FileUpload, KernelExploit"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-hospital"
Permalink:   "/writeups/htb-hospital.html"
BtnLabel:    "Read Writeup"
---

## Recon

Open ports: 22, 80, 443, 3389.

Web app has a file upload feature for patient documents.

## Foothold

Upload restriction bypass: rename `.php` to `.phar`.

```bash
mv shell.php shell.phar
# Upload → trigger via browser → get RCE
```

## Linux Privilege Escalation

Running on WSL internally. Kernel version vulnerable to CVE-2023-35001.

```bash
uname -r  # 5.15.0-94-generic
./exploit  # root on WSL
```

## Windows Shell

Pivoted to Windows host via RoundCube credential spray from `/var/mail`.
