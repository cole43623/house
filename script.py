# Percorso del file da leggere
filepath = "casi.js"

keys = {}

with open(filepath, "r", encoding="utf-8") as f:
    for line in f:
        line = line.lstrip()              # trim iniziale
        if not line:                      # linea vuota
            continue
        
        first = line[0]
        # Se il primo carattere NON è { o } o /
        if first not in ['{', '}', '/']:
            # Prendi la parte fino ai due punti
            if ":" in line:
                key = line.split(":", 1)[0]
                if key in keys:
                    keys[key]+=1
                else:
                    keys[key]=1

# Stampa il set risultante
for k, v in sorted(keys.items(), key=lambda item: item[1]):
    print('"'+k+'",')
