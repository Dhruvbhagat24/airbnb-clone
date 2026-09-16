import json

transcript_path = r'C:\Users\dhruv\.gemini\antigravity-ide\brain\17c4cb55-a37b-4179-a90a-3662d9bbec92\.system_generated\logs\transcript_full.jsonl'

with open(transcript_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 2309:
            obj = json.loads(line)
            content = obj['content']
            idx = content.find('Get JSON amenity map')
            print("Content around 'Get JSON amenity map':")
            print(content[idx:idx+1500])
