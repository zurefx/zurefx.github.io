---
TitleSEO: "Advanced Phishing Infrastructure Setup | ZureFX"
TitlePost: "Advanced Phishing Infrastructure Setup"
Author: "ZureFX"
Description: "Technical research on Advanced Phishing Infrastructure Setup. In-depth analysis with PoC and mitigation strategies."
Keywords: "malware analysis, heap exploitation, cve, uaf"
URL: "https://zurefx.github.io/research/research-advanced-phishing-infrastructure-setup-108.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/research-advanced-phishing-infrastructure-setup-108/"
Date: "2024-07-14"
Tags: "Malware Analysis, Heap Exploitation, CVE, UAF"
Section: "research"
Lang: "en"
main_img: "research-advanced-phishing-infrastructure-setup-10"
Permalink: "/research/research-advanced-phishing-infrastructure-setup-108.html"
BtnLabel: "Read Research"
Pick: 1
---
## Abstract

### Summary

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Background

### Context

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Related Work

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Technical Analysis

### Vulnerability Details

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p8080,3268,27017 10.94.89.55 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.244.44
nmap -sCV -p389,143,143 10.108.176.115 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Proof of Concept

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.143.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.81.19.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p23,53,8888 10.41.74.157 -oN scan.txt
crackmapexec smb 10.19.14.254 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### Exploitation Chain

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p636,389,389 10.115.6.176 -oN scan.txt
```

## Impact Assessment

### Risk Analysis

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Mitigation

### Short-term Fixes

- The web application was vulnerable to Server-Side Template Injection (SSTI).
- Network traffic analysis revealed unencrypted communications containing user credentials.
- The scheduled task ran with elevated privileges and could be abused for escalation.

### Long-term Recommendations

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

## Conclusion

### Final Thoughts

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.
