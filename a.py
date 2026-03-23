import json
import random
from datetime import datetime, timedelta

# Config
TOTAL = 2000

sections = ["Active Directory", "Linux", "Web", "Network", "Cloud", "Windows"]

tags_pool = [
    "cheatsheet", "web", "linux", "privesc", "activedirectory",
    "enumeration", "nmap", "sqli", "fuzzing", "bugbounty",
    "windows", "powershell", "adcs", "kerberos", "xss"
]

titles_pool = [
    "Privilege Escalation",
    "Enumeration Guide",
    "Attack Techniques",
    "Pentesting Notes",
    "Exploitation Basics",
    "Post Exploitation",
    "Recon Techniques",
    "Lateral Movement",
    "Persistence Methods"
]

descriptions_pool = [
    "Quick reference covering practical pentesting techniques.",
    "Cheatsheet with useful commands and methodologies.",
    "Notes for real-world offensive security scenarios.",
    "Collection of useful tricks and attack paths.",
    "Compact guide for common vulnerabilities."
]


def random_date():
    start = datetime(2025, 1, 1)
    end = datetime(2026, 3, 23)
    delta = end - start
    random_days = random.randint(0, delta.days)
    return (start + timedelta(days=random_days)).strftime("%Y-%m-%d")


def random_tags():
    return random.sample(tags_pool, k=random.randint(3, 5))


def generate_notes(n):
    notes = []

    for i in range(1, n + 1):
        subsection = random.choice(sections)
        base_title = random.choice(titles_pool)

        note = {
            "id": f"note-{i}",
            "title": f"{base_title} #{i}",
            "section": "notes",
            "description": random.choice(descriptions_pool),
            "permalink": f"/notes/note-{i}.html",
            "btn_label": random.choice(["View Notes", "View CheatSheet"]),
            "date": random_date(),
            "tags": random_tags(),
            "image": f"/img/note-{i}.png",
            "words": random.randint(40, 120),
            "readTime": f"{random.randint(1, 3)} min",
            "subsection": subsection
        }

        notes.append(note)

    return notes


if __name__ == "__main__":
    data = generate_notes(TOTAL)

    with open("notes_2k.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

    print(f"[+] Generated {TOTAL} notes -> notes_2k.json")