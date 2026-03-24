#!/usr/bin/env python3
"""
gen_posts.py — Generador masivo de posts Markdown para ZureFX
=============================================================
Genera 2000 archivos .md con frontmatter y contenido aleatorio
listos para ser procesados con convert.py.

Uso:
    python gen_posts.py              # genera en ./generated_posts/
    python gen_posts.py --out posts  # carpeta personalizada
    python gen_posts.py --count 500  # cantidad distinta
"""

import random
import string
import argparse
from pathlib import Path
from datetime import date, timedelta

# ══════════════════════════════════════════════════════════════════════════════
#  DATOS DE RELLENO
# ══════════════════════════════════════════════════════════════════════════════

SECTIONS = ["writeups", "notes", "research", "scripting", "projects"]

SECTION_TAGS = {
    "writeups":  ["HackTheBox", "TryHackMe", "CTF", "PwnTillDawn", "OffSec",
                  "Easy", "Medium", "Hard", "Insane", "Windows", "Linux",
                  "Active Directory", "Web", "Reversing", "Forensics"],
    "notes":     ["Linux", "Windows", "Networking", "Cheatsheet", "OSCP",
                  "Privilege Escalation", "Enumeration", "Blue Team", "DFIR",
                  "Malware", "Persistence", "Lateral Movement"],
    "research":  ["Malware Analysis", "Exploit Development", "CVE", "Zero Day",
                  "Kernel", "Shellcode", "ROP", "Heap Exploitation", "ASLR Bypass",
                  "UAF", "Buffer Overflow", "Format String"],
    "scripting": ["Python", "Bash", "PowerShell", "Go", "Rust", "C", "Automation",
                  "Tool", "Script", "Parser", "Scanner", "Fuzzer"],
    "projects":  ["Tool", "Open Source", "Security", "Automation", "Framework",
                  "Plugin", "Extension", "Library", "CLI"],
}

PLATFORMS = ["HackTheBox", "TryHackMe", "PwnTillDawn", "VulnHub", "OffSec Proving Grounds"]
DIFFICULTIES = ["Easy", "Medium", "Hard", "Insane"]
OS_TYPES = ["Windows", "Linux", "FreeBSD", "OpenBSD"]

MACHINE_NAMES = [
    "Lame", "Legacy", "Devel", "Optimum", "Bastard", "Arctic", "Grandpa",
    "Granny", "Nibbles", "Shocker", "Beep", "Cronos", "Nineveh", "Sense",
    "Solidstate", "Node", "Valentine", "Poison", "Sunday", "Tartarsauce",
    "Irked", "FriendZone", "SwagShop", "Networked", "Jarvis", "Sense",
    "OpenAdmin", "Traverxec", "ServMon", "Magic", "Admirer", "Blunder",
    "Tabby", "Doctor", "Buff", "Passage", "Remote", "Worker", "Omni",
    "Fuse", "Academy", "Delivery", "Ready", "Tenet", "Armageddon",
    "Spectra", "Ophiuchi", "TheNotebook", "Knife", "Cap", "Pikaboo",
    "Forge", "Horizontall", "Writer", "Seal", "Pit", "Intelligence",
    "Bolt", "Dynstr", "Monitors", "Love", "Cereal", "Atom", "Crossfit",
    "Tentacle", "Breadcrumbs", "Ophiuchi", "Bucket", "ScriptKiddie",
    "Spectra", "Tenet", "Armageddon", "Delivery", "Doctor", "Passage",
    "Vulnnet", "Skynet", "Alfred", "Brainstorm", "Steel Mountain",
    "Game Zone", "Relevant", "Blue", "Ice", "Deja Vu", "Anthem",
    "Res", "Mindgames", "Overpass", "Startup", "Internal", "Buffer",
    "Ghizer", "Mindgames", "Mustacchio", "Deja Vu", "Convertmyfund",
]

TOOLS = [
    "nmap", "gobuster", "ffuf", "feroxbuster", "hydra", "hashcat", "john",
    "impacket", "evil-winrm", "crackmapexec", "bloodhound", "sharphound",
    "rubeus", "mimikatz", "chisel", "ligolo-ng", "pwncat", "netcat",
    "socat", "msfvenom", "metasploit", "burpsuite", "sqlmap", "nikto",
    "wpscan", "enum4linux", "rpcclient", "smbclient", "ldapsearch",
    "kerbrute", "GetNPUsers", "GetUserSPNs", "secretsdump", "psexec",
    "wmiexec", "smbexec", "dcomexec", "atexec", "lookupsid",
]

VULNERABILITIES = [
    "SQL Injection", "Remote Code Execution", "Local File Inclusion",
    "Remote File Inclusion", "SSRF", "XXE", "SSTI", "CSRF",
    "Insecure Deserialization", "Broken Access Control", "IDOR",
    "Path Traversal", "Command Injection", "XSS", "CORS Misconfiguration",
    "Open Redirect", "Subdomain Takeover", "DNS Rebinding",
    "Kerberoasting", "AS-REP Roasting", "DCSync", "Pass the Hash",
    "Pass the Ticket", "Golden Ticket", "Silver Ticket", "NTLM Relay",
    "GPP Password", "LAPS Abuse", "ACL Abuse", "Constrained Delegation",
    "Unconstrained Delegation", "Resource-Based Constrained Delegation",
    "SeImpersonatePrivilege", "SeDebugPrivilege", "AlwaysInstallElevated",
    "Unquoted Service Path", "DLL Hijacking", "Weak Service Permissions",
    "Writable PATH", "SUID Binary", "Sudo Misconfiguration", "Cron Job",
    "Docker Escape", "LXD Privilege Escalation", "NFS No Root Squash",
]

TECH_WORDS = [
    "Active Directory", "SMB", "LDAP", "Kerberos", "WinRM", "RDP",
    "HTTP", "HTTPS", "FTP", "SSH", "Telnet", "SNMP", "NFS", "RPC",
    "DNS", "SMTP", "POP3", "IMAP", "MySQL", "MSSQL", "PostgreSQL",
    "MongoDB", "Redis", "Elasticsearch", "Apache", "Nginx", "IIS",
    "WordPress", "Joomla", "Drupal", "Laravel", "Django", "Flask",
    "Spring", "Node.js", "PHP", "Python", "Ruby on Rails",
    "PowerShell", "CMD", "Bash", "Python", "C#", ".NET", "Java",
    "Windows Server 2019", "Ubuntu 20.04", "Debian", "CentOS", "Kali Linux",
]

VERBS_ACTION = [
    "enumerate", "exploit", "bypass", "escalate", "pivot", "persist",
    "exfiltrate", "dump", "crack", "brute force", "fuzz", "inject",
    "traverse", "intercept", "forge", "impersonate", "abuse", "leverage",
]

NOTE_TOPICS = [
    "Linux Privilege Escalation Techniques",
    "Windows Post-Exploitation Cheatsheet",
    "Active Directory Attack Paths",
    "Web Application Penetration Testing Methodology",
    "Buffer Overflow Exploitation Guide",
    "Reverse Engineering Basics",
    "Network Traffic Analysis with Wireshark",
    "Malware Analysis Environment Setup",
    "OSCP Exam Preparation Notes",
    "Common CTF Tricks and Techniques",
    "Python Scripting for Pentesting",
    "Bash One-Liners for Security Testing",
    "PowerShell for Red Teamers",
    "Docker Security Hardening",
    "Kubernetes Security Assessment",
    "Cloud Security (AWS/Azure/GCP)",
    "Threat Hunting with Splunk",
    "YARA Rule Writing",
    "Sigma Rule Development",
    "MITRE ATT&CK Framework Reference",
    "Blue Team Detection Techniques",
    "Incident Response Playbook",
    "Digital Forensics Methodology",
    "Memory Forensics with Volatility",
    "Cryptography Fundamentals",
]

SCRIPT_TOPICS = [
    "Automated Port Scanner",
    "SMB Share Enumeration Script",
    "Password Spraying Tool",
    "Custom Wordlist Generator",
    "Log Parser and Analyzer",
    "Subdomain Enumeration Tool",
    "JWT Token Analyzer",
    "Hash Identifier and Cracker Wrapper",
    "Reverse Shell Generator",
    "C2 Beacon Simulator",
    "Process Injection PoC",
    "AMSI Bypass Collection",
    "EDR Evasion Techniques",
    "Payload Obfuscation Script",
    "Network Packet Sniffer",
    "DNS Resolver and Brute Forcer",
    "Web Crawler and Spider",
    "API Security Testing Framework",
    "Automated Report Generator",
    "CTF Challenge Solver Template",
]

RESEARCH_TOPICS = [
    "Analysis of CVE-2024-XXXX: Remote Code Execution",
    "Deep Dive into Windows Kernel Exploitation",
    "Evading Modern EDR Solutions",
    "Novel Persistence Mechanisms in Linux",
    "Browser Exploitation Techniques",
    "Fuzzing Embedded Firmware",
    "Supply Chain Attack Vectors",
    "Living off the Land Binaries (LOLBins)",
    "Bypassing AppLocker and WDAC",
    "Advanced Phishing Infrastructure Setup",
    "Cobalt Strike Profile Development",
    "Custom C2 Framework Architecture",
    "Red Team Infrastructure Design",
    "OPSEC Considerations for Red Teams",
    "Threat Intelligence Integration",
]

LOREM_SENTENCES = [
    "The target system was identified as running a vulnerable version of the service.",
    "Initial enumeration revealed several interesting open ports on the target.",
    "Authentication bypass was achieved through careful manipulation of the login mechanism.",
    "The service was running without proper input validation, leading to injection vulnerabilities.",
    "Privilege escalation was possible due to misconfigured sudo permissions.",
    "The application stored sensitive credentials in an unencrypted configuration file.",
    "Network traffic analysis revealed unencrypted communications containing user credentials.",
    "The web application was vulnerable to Server-Side Template Injection (SSTI).",
    "Lateral movement was facilitated by reusing discovered credentials across services.",
    "Post-exploitation enumeration revealed a path to domain administrator privileges.",
    "The backup files contained sensitive information that should not have been accessible.",
    "Weak file permissions allowed modification of critical system files.",
    "The scheduled task ran with elevated privileges and could be abused for escalation.",
    "Command injection was possible through unsanitized user input in the search functionality.",
    "The database credentials were hardcoded in the application source code.",
    "Token impersonation allowed elevation to SYSTEM privileges on the target.",
    "The kernel version was outdated and vulnerable to a publicly known exploit.",
    "Group Policy Preferences contained encrypted but recoverable credentials.",
    "The service account had excessive permissions assigned in Active Directory.",
    "Unconstrained delegation was enabled on the compromised machine.",
]

# ══════════════════════════════════════════════════════════════════════════════
#  GENERADORES DE CONTENIDO
# ══════════════════════════════════════════════════════════════════════════════

def rand_date(start_year=2024, end_year=2026) -> str:
    start = date(start_year, 1, 1)
    end   = date(end_year, 3, 23)
    delta = (end - start).days
    return (start + timedelta(days=random.randint(0, delta))).strftime("%Y-%m-%d")

def rand_slug(words: list[str]) -> str:
    chosen = random.sample(words, min(3, len(words)))
    slug = "-".join(w.lower().replace(" ", "-").replace("(", "").replace(")", "") for w in chosen)
    slug += f"-{random.randint(100, 999)}"
    return slug

def rand_ip() -> str:
    return f"10.{random.randint(10,129)}.{random.randint(1,254)}.{random.randint(1,254)}"

def rand_port() -> int:
    common = [21, 22, 23, 25, 53, 80, 110, 135, 139, 143, 389, 443,
              445, 464, 587, 636, 993, 995, 1433, 1521, 3268, 3306,
              3389, 5432, 5985, 5986, 8080, 8443, 8888, 9200, 27017]
    return random.choice(common)

def rand_hash() -> str:
    return ''.join(random.choices(string.hexdigits.lower(), k=32))

def rand_sentences(n=3) -> str:
    return " ".join(random.choices(LOREM_SENTENCES, k=n))

def rand_tool_cmd(tool: str) -> str:
    ip = rand_ip()
    port = rand_port()
    cmds = {
        "nmap":    f"nmap -sCV -p{port},{rand_port()},{rand_port()} {ip} -oN scan.txt",
        "gobuster":f"gobuster dir -u http://{ip}/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html",
        "ffuf":    f"ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://{ip}/FUZZ",
        "hydra":   f"hydra -l admin -P /usr/share/wordlists/rockyou.txt {ip} http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'",
        "hashcat": f"hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force",
        "john":    f"john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt",
        "evil-winrm": f"evil-winrm -i {ip} -u administrator -p 'P@ssw0rd!'",
        "impacket": f"impacket-secretsdump administrator:'P@ssw0rd!'@{ip}",
        "crackmapexec": f"crackmapexec smb {ip} -u administrator -p 'P@ssw0rd!' --shares",
        "bloodhound": f"bloodhound-python -u user -p 'P@ssw0rd!' -d domain.local -ns {ip} -c All",
    }
    return cmds.get(tool, f"{tool} -h")

def rand_code_block(lang="bash") -> str:
    tool = random.choice(TOOLS[:10])
    cmd  = rand_tool_cmd(tool)
    extra_lines = [rand_tool_cmd(random.choice(TOOLS[:10])) for _ in range(random.randint(0, 3))]
    all_lines = [cmd] + extra_lines
    return f"```{lang}\n" + "\n".join(all_lines) + "\n```"

def rand_section_content(depth=0) -> str:
    """Genera un bloque de contenido: párrafos, código, listas."""
    parts = []
    num_blocks = random.randint(2, 5)

    for _ in range(num_blocks):
        choice = random.choices(
            ["paragraph", "code", "list", "note"],
            weights=[50, 30, 15, 5]
        )[0]

        if choice == "paragraph":
            n_sent = random.randint(2, 5)
            parts.append(rand_sentences(n_sent))

        elif choice == "code":
            lang = random.choice(["bash", "python", "powershell", "bash", "bash"])
            parts.append(rand_code_block(lang))

        elif choice == "list":
            items = random.sample(TOOLS + VULNERABILITIES, random.randint(3, 6))
            lines = [f"- `{i}`" for i in items]
            parts.append("\n".join(lines))

        elif choice == "note":
            vuln = random.choice(VULNERABILITIES)
            parts.append(f"> **Note:** {vuln} was identified as the primary attack vector in this scenario.")

    return "\n\n".join(parts)

# ══════════════════════════════════════════════════════════════════════════════
#  GENERADORES POR SECCIÓN
# ══════════════════════════════════════════════════════════════════════════════

def gen_writeup() -> tuple[dict, str]:
    platform   = random.choice(PLATFORMS)
    machine    = random.choice(MACHINE_NAMES)
    difficulty = random.choice(DIFFICULTIES)
    os_type    = random.choice(OS_TYPES)
    ip         = rand_ip()
    tools_used = random.sample(TOOLS, random.randint(4, 8))
    vulns      = random.sample(VULNERABILITIES, random.randint(2, 4))
    tags       = random.sample(SECTION_TAGS["writeups"], random.randint(3, 7))

    title_post = f"{platform} — {machine} ({difficulty} {os_type})"
    title_seo  = f"{title_post} | ZureFX"
    slug       = f"htb-{machine.lower().replace(' ', '-')}-{random.randint(100,999)}"
    permalink  = f"/writeups/{slug}.html"
    url        = f"https://zurefx.github.io{permalink}"
    url_images = f"https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/{slug}/"
    description = (f"Full writeup for {platform} {machine}. "
                   f"{' and '.join(vulns[:2])} to achieve {difficulty.lower()} "
                   f"compromise on {os_type}.")

    meta = {
        "TitleSEO":    title_seo,
        "TitlePost":   title_post,
        "Author":      "ZureFX",
        "Description": description,
        "Keywords":    ", ".join(t.lower() for t in tags),
        "URL":         url,
        "URL_IMAGES":  url_images,
        "Date":        rand_date(),
        "Tags":        ", ".join(tags),
        "Section":     "writeups",
        "Lang":        "en",
        "main_img":    slug,
        "Permalink":   permalink,
        "BtnLabel":    "Read Writeup",
        "Pick":        random.choice([0, 0, 0, 1]),
    }

    sections_h2 = [
        ("Machine Info", [
            ("Overview", f"The target **{machine}** is rated **{difficulty}** on {platform}. "
                        f"It runs **{os_type}** and the IP address during this analysis was `{ip}`."),
            ("Objectives", rand_sentences(2)),
        ]),
        ("Enumeration", [
            ("Port Scanning", f"Starting with a full port scan to identify the attack surface.\n\n"
                             f"{rand_code_block('bash')}\n\n{rand_sentences(2)}"),
            ("Service Enumeration", f"{rand_sentences(3)}\n\n{rand_code_block('bash')}\n\n{rand_sentences(2)}"),
            ("Web Enumeration" if "Web" in tags else "SMB Enumeration",
             f"{rand_sentences(2)}\n\n{rand_code_block('bash')}\n\n{rand_sentences(3)}"),
        ]),
        ("Exploitation", [
            ("Vulnerability Identification", f"{rand_sentences(3)}\n\nKey finding: **{random.choice(vulns)}**.\n\n{rand_sentences(2)}"),
            ("Initial Access", f"{rand_sentences(2)}\n\n{rand_code_block('bash')}\n\n{rand_sentences(3)}"),
        ]),
        ("Privilege Escalation", [
            ("Enumeration", f"{rand_sentences(3)}\n\n{rand_code_block('bash' if os_type == 'Linux' else 'powershell')}"),
            ("Exploitation", f"{rand_sentences(2)}\n\n{rand_code_block('bash' if os_type == 'Linux' else 'powershell')}\n\n{rand_sentences(2)}"),
            ("Root/SYSTEM", f"Successfully obtained **{'root' if os_type == 'Linux' else 'SYSTEM'}** access on the target.\n\n{rand_sentences(2)}"),
        ]),
        ("Summary", [
            ("Tools Used", "\n".join(f"- `{t}`" for t in tools_used)),
            ("Key Takeaways", "\n".join(f"- {v}" for v in vulns)),
        ]),
    ]

    body = _build_body(sections_h2)
    return meta, body


def gen_note() -> tuple[dict, str]:
    topic = random.choice(NOTE_TOPICS)
    tags  = random.sample(SECTION_TAGS["notes"], random.randint(3, 6))
    slug  = f"note-{topic.lower().replace(' ', '-').replace('/', '-')[:40]}-{random.randint(100,999)}"
    permalink  = f"/notes/{slug}.html"
    url        = f"https://zurefx.github.io{permalink}"
    description = f"Personal notes on {topic}. Quick reference for pentesting and CTF challenges."

    meta = {
        "TitleSEO":    f"{topic} | ZureFX",
        "TitlePost":   topic,
        "Author":      "ZureFX",
        "Description": description,
        "Keywords":    ", ".join(t.lower() for t in tags),
        "URL":         url,
        "URL_IMAGES":  "",
        "Date":        rand_date(),
        "Tags":        ", ".join(tags),
        "Section":     "notes",
        "Lang":        "en",
        "main_img":    slug[:50],
        "Permalink":   permalink,
        "BtnLabel":    "Read Notes",
        "Pick":        0,
    }

    num_sections = random.randint(3, 6)
    subtopics = random.sample(TECH_WORDS + TOOLS + VULNERABILITIES, num_sections * 2)

    sections_h2 = []
    for i in range(num_sections):
        h2_title = subtopics[i * 2]
        subsections = [
            (subtopics[i * 2 + 1], rand_section_content()),
        ]
        sections_h2.append((h2_title, subsections))

    body = _build_body(sections_h2)
    return meta, body


def gen_scripting() -> tuple[dict, str]:
    topic  = random.choice(SCRIPT_TOPICS)
    lang   = random.choice(["Python", "Bash", "PowerShell", "Go"])
    tags   = random.sample(SECTION_TAGS["scripting"], random.randint(3, 6))
    if lang not in tags:
        tags.append(lang)
    slug   = f"script-{topic.lower().replace(' ', '-')[:40]}-{random.randint(100,999)}"
    permalink  = f"/scripting/{slug}.html"
    url        = f"https://zurefx.github.io{permalink}"
    description = f"A {lang} script for {topic.lower()}. Built for security research and automation."

    meta = {
        "TitleSEO":    f"{topic} in {lang} | ZureFX",
        "TitlePost":   f"{topic} — {lang}",
        "Author":      "ZureFX",
        "Description": description,
        "Keywords":    ", ".join(t.lower() for t in tags),
        "URL":         url,
        "URL_IMAGES":  "",
        "Date":        rand_date(),
        "Tags":        ", ".join(tags),
        "Section":     "scripting",
        "Lang":        "en",
        "main_img":    slug[:50],
        "Permalink":   permalink,
        "BtnLabel":    "View Script",
        "Pick":        0,
    }

    code_lang = lang.lower().replace("powershell", "powershell").replace("go", "go")

    sections_h2 = [
        ("Overview", [
            ("Description", f"{rand_sentences(3)}\n\nBuilt with **{lang}** for offensive security automation."),
            ("Requirements", f"- {lang}\n" + "\n".join(f"- `{random.choice(TOOLS)}`" for _ in range(3))),
        ]),
        ("Implementation", [
            ("Core Logic", f"{rand_sentences(2)}\n\n{rand_code_block(code_lang)}\n\n{rand_sentences(2)}"),
            ("Helper Functions", f"{rand_sentences(2)}\n\n{rand_code_block(code_lang)}"),
        ]),
        ("Usage", [
            ("Basic Usage", f"{rand_sentences(2)}\n\n{rand_code_block('bash')}"),
            ("Advanced Options", f"{rand_sentences(3)}\n\n{rand_code_block('bash')}"),
        ]),
        ("Output", [
            ("Example Output", f"{rand_sentences(2)}\n\n```\n"
                              f"[+] Scanning target...\n"
                              f"[+] Found {random.randint(1,20)} results\n"
                              f"[+] Done in {random.uniform(0.5, 30.0):.2f}s\n"
                              f"```"),
        ]),
    ]

    body = _build_body(sections_h2)
    return meta, body


def gen_research() -> tuple[dict, str]:
    topic = random.choice(RESEARCH_TOPICS)
    tags  = random.sample(SECTION_TAGS["research"], random.randint(3, 6))
    slug  = f"research-{topic.lower().replace(' ', '-').replace('/', '-').replace(':', '')[:45]}-{random.randint(100,999)}"
    permalink  = f"/research/{slug}.html"
    url        = f"https://zurefx.github.io{permalink}"
    description = f"Technical research on {topic}. In-depth analysis with PoC and mitigation strategies."

    meta = {
        "TitleSEO":    f"{topic} | ZureFX",
        "TitlePost":   topic,
        "Author":      "ZureFX",
        "Description": description,
        "Keywords":    ", ".join(t.lower() for t in tags),
        "URL":         url,
        "URL_IMAGES":  f"https://raw.githubusercontent.com/zurefx/images/refs/heads/main/research/{slug}/",
        "Date":        rand_date(),
        "Tags":        ", ".join(tags),
        "Section":     "research",
        "Lang":        "en",
        "main_img":    slug[:50],
        "Permalink":   permalink,
        "BtnLabel":    "Read Research",
        "Pick":        random.choice([0, 0, 1]),
    }

    sections_h2 = [
        ("Abstract", [("Summary", rand_sentences(4))]),
        ("Background", [
            ("Context", rand_sentences(3)),
            ("Related Work", rand_sentences(3)),
        ]),
        ("Technical Analysis", [
            ("Vulnerability Details", f"{rand_sentences(3)}\n\n{rand_code_block('bash')}\n\n{rand_sentences(2)}"),
            ("Proof of Concept", f"{rand_sentences(2)}\n\n{rand_code_block('python')}\n\n{rand_sentences(2)}"),
            ("Exploitation Chain", f"{rand_sentences(3)}\n\n{rand_code_block('bash')}"),
        ]),
        ("Impact Assessment", [("Risk Analysis", rand_sentences(4))]),
        ("Mitigation", [
            ("Short-term Fixes", "\n".join(f"- {rand_sentences(1)}" for _ in range(3))),
            ("Long-term Recommendations", rand_sentences(3)),
        ]),
        ("Conclusion", [("Final Thoughts", rand_sentences(3))]),
    ]

    body = _build_body(sections_h2)
    return meta, body


def gen_project() -> tuple[dict, str]:
    topic = random.choice(SCRIPT_TOPICS + RESEARCH_TOPICS[:5])
    tags  = random.sample(SECTION_TAGS["projects"], random.randint(3, 5))
    slug  = f"project-{topic.lower().replace(' ', '-').replace('/', '-').replace(':', '')[:40]}-{random.randint(100,999)}"
    permalink  = f"/research/{slug}.html"
    url        = f"https://zurefx.github.io{permalink}"
    description = f"Open source security project: {topic}. Built for the community."

    meta = {
        "TitleSEO":    f"{topic} | ZureFX Projects",
        "TitlePost":   topic,
        "Author":      "ZureFX",
        "Description": description,
        "Keywords":    ", ".join(t.lower() for t in tags),
        "URL":         url,
        "URL_IMAGES":  "",
        "Date":        rand_date(),
        "Tags":        ", ".join(tags),
        "Section":     "projects",
        "Lang":        "en",
        "main_img":    slug[:50],
        "Permalink":   permalink,
        "BtnLabel":    "View Project",
        "Pick":        0,
        "Features":    ", ".join(random.sample(TOOLS[:10], 3)),
    }

    sections_h2 = [
        ("Project Overview", [("Description", rand_sentences(4))]),
        ("Features", [("Key Features", "\n".join(f"- **{t}**: {rand_sentences(1)}" for t in random.sample(TOOLS[:8], 4)))]),
        ("Installation", [
            ("Requirements", f"- Python 3.8+\n" + "\n".join(f"- `{random.choice(TOOLS)}`" for _ in range(3))),
            ("Setup", f"```bash\ngit clone https://github.com/zurefx/{slug}\ncd {slug}\npip install -r requirements.txt\n```"),
        ]),
        ("Usage", [("Examples", f"{rand_sentences(2)}\n\n{rand_code_block('bash')}")]),
        ("Contributing", [("How to Contribute", rand_sentences(3))]),
    ]

    body = _build_body(sections_h2)
    return meta, body


# ══════════════════════════════════════════════════════════════════════════════
#  BUILDER GENÉRICO
# ══════════════════════════════════════════════════════════════════════════════

def _build_body(sections: list[tuple]) -> str:
    """
    sections = [ (h2_title, [ (h3_title, content), ... ]), ... ]
    """
    parts = []
    for h2_title, subsections in sections:
        parts.append(f"## {h2_title}")
        for h3_title, content in subsections:
            parts.append(f"### {h3_title}")
            parts.append(content)
    return "\n\n".join(parts)


def build_frontmatter(meta: dict) -> str:
    lines = ["---"]
    for k, v in meta.items():
        if isinstance(v, str):
            safe = v.replace('"', '\\"')
            lines.append(f'{k}: "{safe}"')
        else:
            lines.append(f"{k}: {v}")
    lines.append("---")
    return "\n".join(lines)


def build_md(meta: dict, body: str) -> str:
    return build_frontmatter(meta) + "\n" + body + "\n"


# ══════════════════════════════════════════════════════════════════════════════
#  MAIN
# ══════════════════════════════════════════════════════════════════════════════

GENERATORS = {
    "writeups":  gen_writeup,
    "notes":     gen_note,
    "scripting": gen_scripting,
    "research":  gen_research,
    "projects":  gen_project,
}

# Distribución aproximada de posts por sección
SECTION_WEIGHTS = {
    "writeups":  0.40,
    "notes":     0.30,
    "scripting": 0.15,
    "research":  0.10,
    "projects":  0.05,
}


def main():
    parser = argparse.ArgumentParser(description="Generador masivo de posts .md para ZureFX")
    parser.add_argument("--out",   default="generated_posts", help="Carpeta de salida")
    parser.add_argument("--count", type=int, default=2000,    help="Cantidad de posts a generar")
    parser.add_argument("--seed",  type=int, default=None,    help="Semilla aleatoria (reproducible)")
    args = parser.parse_args()

    if args.seed is not None:
        random.seed(args.seed)

    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Calcular cuántos posts por sección según los pesos
    sections_list = list(SECTION_WEIGHTS.keys())
    weights       = list(SECTION_WEIGHTS.values())
    counts        = {s: 0 for s in sections_list}

    assigned = random.choices(sections_list, weights=weights, k=args.count)
    for s in assigned:
        counts[s] += 1

    print(f"\n🎲 Generando {args.count} posts en '{out_dir}/'")
    print("   Distribución:")
    for s, n in counts.items():
        print(f"     {s:12s} → {n} posts")
    print()

    generated = 0
    slugs_seen = set()

    for section, n in counts.items():
        gen_fn = GENERATORS[section]
        for i in range(n):
            # Generar hasta obtener slug único
            for _ in range(10):
                meta, body = gen_fn()
                slug = meta["Permalink"].rstrip("/").split("/")[-1].replace(".html", "")
                if slug not in slugs_seen:
                    slugs_seen.add(slug)
                    break

            filename = out_dir / f"{slug}.md"
            filename.write_text(build_md(meta, body), encoding="utf-8")

            generated += 1
            if generated % 100 == 0 or generated == args.count:
                pct = generated / args.count * 100
                bar = "█" * (generated * 30 // args.count) + "░" * (30 - generated * 30 // args.count)
                print(f"\r   [{bar}] {generated}/{args.count} ({pct:.0f}%)", end="", flush=True)

    print(f"\n\n✅ {generated} archivos generados en '{out_dir}/'")
    print(f"   Ejemplo de uso con convert.py:")
    first = next(out_dir.iterdir())
    print(f"   python tools/convert.py {first}")
    print(f"\n   Para convertir todos:")
    print(f"   for f in {out_dir}/*.md; do python tools/convert.py \"$f\"; done")


if __name__ == "__main__":
    main()