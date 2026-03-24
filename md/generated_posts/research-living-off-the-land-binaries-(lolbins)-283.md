---
TitleSEO: "Living off the Land Binaries (LOLBins) | ZureFX"
TitlePost: "Living off the Land Binaries (LOLBins)"
Author: "ZureFX"
Description: "Technical research on Living off the Land Binaries (LOLBins). In-depth analysis with PoC and mitigation strategies."
Keywords: "exploit development, shellcode, buffer overflow, rop"
URL: "https://zurefx.github.io/research/research-living-off-the-land-binaries-(lolbins)-283.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-living-off-the-land-binaries-(lolbins)-283/"
Date: "2025-03-19"
Tags: "Exploit Development, Shellcode, Buffer Overflow, ROP"
Section: "research"
Lang: "en"
main_img: "research-living-off-the-land-binaries-(lolbins)-28"
Permalink: "/research/research-living-off-the-land-binaries-(lolbins)-283.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Background

### Context

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Related Work

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Technical Analysis

### Vulnerability Details

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p3389,135,389 10.19.129.70 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
gobuster dir -u http://10.94.226.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Proof of Concept

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,5985,5986 10.65.215.2 -oN scan.txt
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Exploitation Chain

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.22.240.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Impact Assessment

### Risk Analysis

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Mitigation

### Short-term Fixes

- The service was running without proper input validation, leading to injection vulnerabilities.
- The service was running without proper input validation, leading to injection vulnerabilities.
- The kernel version was outdated and vulnerable to a publicly known exploit.

### Long-term Recommendations

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

## Conclusion

### Final Thoughts

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.
