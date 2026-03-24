---
TitleSEO: "Bypassing AppLocker and WDAC | ZureFX"
TitlePost: "Bypassing AppLocker and WDAC"
Author: "ZureFX"
Description: "Technical research on Bypassing AppLocker and WDAC. In-depth analysis with PoC and mitigation strategies."
Keywords: "exploit development, uaf, rop, shellcode"
URL: "https://zurefx.github.io/research/research-bypassing-applocker-and-wdac-854.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-bypassing-applocker-and-wdac-854/"
Date: "2024-06-01"
Tags: "Exploit Development, UAF, ROP, Shellcode"
Section: "research"
Lang: "en"
main_img: "research-bypassing-applocker-and-wdac-854"
Permalink: "/research/research-bypassing-applocker-and-wdac-854.html"
BtnLabel: "Read Research"
Pick: 0
---
## Abstract

### Summary

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Background

### Context

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

### Related Work

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Technical Analysis

### Vulnerability Details

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
evil-winrm -i 10.74.58.136 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.15.213.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Proof of Concept

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.91.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Exploitation Chain

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p135,995,995 10.12.5.86 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.42.86
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.15.63
```

## Impact Assessment

### Risk Analysis

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Mitigation

### Short-term Fixes

- The web application was vulnerable to Server-Side Template Injection (SSTI).
- The backup files contained sensitive information that should not have been accessible.
- Unconstrained delegation was enabled on the compromised machine.

### Long-term Recommendations

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Conclusion

### Final Thoughts

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.
