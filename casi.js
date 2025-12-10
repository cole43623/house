const casi = [
    // ---------------- CASO 1: PORFIRIA ACUTA INTERMITTENTE ----------------
    {
        id: 1,
        nome_malattia: "Porfiria Acuta Intermittente",
        livello_difficolta: "Difficile",
        
        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 32,
        sintomi: "Dolore addominale lancinante diffuso (VAS 9/10), nausea, stipsi ostinata, ansia severa, insonnia e parestesie agli arti.",
        anamnesi: "Storia di accessi multipli al PS per dolori addominali etichettati come psicosomatici. Appendicectomia a 20 anni (appendice sana). Ha assunto sulfamidici (Bactrim) 3 giorni fa.",
        note_infermiera: "Paziente molto agitata, quasi psicotica. Ho notato che le urine nella sacca, lasciate sul davanzale, hanno cambiato colore diventando rosso scuro/violaceo.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.5 g/dL, Leucociti 8.500/mmc (nella norma), Piastrine 250.000/mmc. Nessuna anemia o infezione evidente.",
        chimica_clinica: "Iponatriemia significativa (Sodio 125 mEq/L - probabile SIADH). Potassio, Calcio, Creatinina e Transaminasi nei limiti.",
        emogas: "pH 7.40, pO2 98%, pCO2 40mmHg. Scambi gassosi e pH perfettamente nella norma.",
        ves_pcr: "VES 10 mm/h, PCR 0.5 mg/dL. Indici di flogosi negativi (nessuna infiammazione in atto).",
        emocoltura: "Negativa. Nessuna crescita batterica dopo 48 ore.",
        esame_urine: "Peso specifico 1020. Stick urine: Proteine assenti, Leucociti assenti. Emoglobina NEGATIVA (il colore rosso non è sangue).",
        autoanticorpi: "ANA, ENA e ANCA negativi. Nessun segno di patologia autoimmune.",
        tossicologico: "Screening negativo per oppiacei, cocaina, cannabinoidi, anfetamine e benzodiazepine.",
        esame_liquor: "Liquor limpido, incolore. Pressione di apertura normale. Chimico-fisico nella norma.",
        striscio_sangue: "Normocitosi, normocromia. Nessuna anomalia morfologica.",
        dosaggi_specifici: "Porfobilinogeno (PBG) e Acido Delta-Aminolevulinico (ALA) urinari: FORTEMENTE AUMENTATI (Diagnostico).",

        // --- IMAGING ---
        rx: "RX Torace e Addome in bianco: Campi polmonari liberi. Non livelli idroaerei, non aria libera.",
        tc: "TC Addome/Pelvi con mdc: Organi parenchimatosi regolari. Non versamenti, non masse, non segni di ischemia. Tutto normale.",
        risonanza: "RMN Encefalo: Strutture della linea mediana in asse. Assenza di aree di alterato segnale.",
        angio: "Angio-TC Aorta: Pervietà conservata dei vasi. Nessuna dissecazione.",
        ecografia: "Eco Addome: Fegato e vie biliari regolari. Reni in sede. Non liquido libero.",
        ecocardiogramma: "Cinesi e morfologia nella norma. FE 60%.",
        pet: "Non indicata. Nessun accumulo patologico.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non eseguita. Nessun target identificato.",
        endoscopia: "Gastroscopia: Mucosa regolare. Piloro pervio.",
        paracentesi: "Non eseguibile (assenza di ascite).",
        eeg: "Attività di fondo lievemente rallentata ma aspecifica.",
        emg: "Velocità di conduzione nervosa ridotta. Segni iniziali di neuropatia motoria assonale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Peggioramento dei sintomi e aumento della nausea.",
        cortisone: "Nessun cambiamento nel quadro clinico.",
        dialisi: "Inefficace per i sintomi acuti.",
        intubazione: "Necessaria solo in caso di paralisi respiratoria avanzata.",
        immunoglobuline: "Nessun beneficio clinico."
    },

    // ---------------- CASO 2: BOTULISMO ----------------
    {
        id: 2,
        nome_malattia: "Botulismo Alimentare",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 45,
        sintomi: "Visione doppia (diplopia), ptosi palpebrale (occhi chiusi), bocca secca, difficoltà a deglutire e parlare (disfagia/disartria). Debolezza discendente.",
        anamnesi: "Nessuna patologia pregressa. Ieri sera ha partecipato a una cena in campagna con amici.",
        note_infermiera: "Il paziente è perfettamente lucido e orientato, ma sembra 'paralizzato' in faccia. Non ha febbre. Le pupille sono dilatate.",

        // --- LABORATORIO ---
        emocromo: "Hb 14.2 g/dL, Leucociti 6.000/mmc, Piastrine 220.000/mmc. Tutto nella norma.",
        chimica_clinica: "Elettroliti, funzionalità renale ed epatica perfettamente nella norma.",
        emogas: "pH 7.32, pCO2 50mmHg (Lieve acidosi respiratoria da ipoventilazione iniziale).",
        ves_pcr: "Indici di infiammazione negativi. VES 2 mm/h.",
        emocoltura: "Negativa.",
        esame_urine: "Esame chimico-fisico nella norma.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo per droghe.",
        esame_liquor: "Proteine e cellule nella norma.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Ricerca tossina botulinica nel siero e nelle feci: POSITIVA.",

        // --- IMAGING ---
        rx: "RX Torace: Modesta riduzione dell'espansione polmonare basale, parenchima pulito.",
        tc: "TC Encefalo: Negativa. Nessun segno di ictus o emorragia.",
        risonanza: "RMN Encefalo e Tronco: Nessuna lesione demielinizzante o ischemica.",
        angio: "Vasi del collo pervi.",
        ecografia: "Negativa.",
        ecocardiogramma: "Cuore strutturalmente sano.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        endoscopia: "Non indicata.",
        paracentesi: "Non indicata.",
        eeg: "Normale.",
        emg: "Risposta incrementale alla stimolazione ripetitiva ad alta frequenza (Segno specifico di blocco presinaptico).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sui sintomi (la tossina è già in circolo).",
        cortisone: "Nessun effetto.",
        dialisi: "Non rimuove la tossina legata ai nervi.",
        intubazione: "SALVAVITA. Il paziente sta andando in arresto respiratorio, necessita ventilazione meccanica.",
        immunoglobuline: "Nessun effetto, serve l'antitossina specifica."
    },

    // ---------------- CASO 3: MALATTIA DI WILSON ----------------
    {
        id: 3,
        nome_malattia: "Malattia di Wilson",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 19,
        sintomi: "Tremore intenzionale alle mani (peggiora quando cerca di afferrare oggetti), difficoltà nell'articolare le parole (disartria), ittero sclerale (occhi gialli), episodi di aggressività inspiegabile.",
        anamnesi: "In cura da uno psichiatra da 6 mesi per sospetta depressione e disturbi comportamentali, con scarso successo. Nessuna storia di abuso di alcol o droghe.",
        note_infermiera: "Il paziente ha un'andatura impacciata. Osservando gli occhi con la luce incidente, si nota un sottile anello di colore bruno-verdastro attorno alla cornea.",

        // --- LABORATORIO ---
        emocromo: "Hb 10.2 g/dL (lieve anemia), Piastrine 90.000/mmc (lieve trombocitopenia), Leucociti nella norma.",
        chimica_clinica: "AST 145 U/L, ALT 180 U/L (Aumentate). Bilirubina Totale 2.5 mg/dL (Aumentata). Fosfatasi Alcalina bassa.",
        emogas: "pH 7.42, pO2 96%, pCO2 38mmHg. Lattati nella norma.",
        ves_pcr: "VES 8 mm/h, PCR 0.3 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Esame standard nella norma. Glicosuria lieve presente.",
        autoanticorpi: "ANA negativi. ASMA (Anti-muscolo liscio) negativi. LKM-1 negativi.",
        tossicologico: "Negativo per etanolo, oppiacei, cocaina.",
        esame_liquor: "Limpido. Proteine e glucosio nei limiti. Nessuna banda oligoclonale.",
        striscio_sangue: "Anisocitosi. Presenza di rari sferociti.",
        dosaggi_specifici: "Ceruloplasmina sierica: 12 mg/dL (Range normale: 20-60). Rame urinario 24h: 250 µg (Range normale: <50).",

        // --- IMAGING ---
        rx: "RX Torace: Ombra cardiaca nei limiti. Campi polmonari liberi.",
        tc: "TC Addome: Fegato di dimensioni ridotte con profili bozzuti. Milza ingrandita (Splenomegalia).",
        risonanza: "RMN Encefalo T2-pesata: Iperintensità di segnale bilaterale e simmetrica a livello dei nuclei della base (putamen) e del tronco encefalico.",
        angio: "Non indicata.",
        ecografia: "Eco Addome: Ecostruttura epatica disomogenea, grossolana, compatibile con cirrosi. Ipertensione portale. Ascite lieve.",
        ecocardiogramma: "Nella norma.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Epatica: Steatosi marcata, fibrosi settale e depositi di rame quantificabili >250 µg/g peso secco.",
        endoscopia: "Esofagogastroduodenoscopia (EGDS): Varici esofagee di grado F1.",
        paracentesi: "Liquido ascitico: Trasudato. Conta cellulare negativa.",
        eeg: "Rallentamento aspecifico diffuso.",
        emg: "Tremore posturale e cinetico a 4-6 Hz. Nessuna denervazione periferica.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessuna variazione clinica.",
        cortisone: "Nessun miglioramento della sintomatologia neurologica o epatica.",
        dialisi: "Nessun effetto significativo sui livelli tissutali.",
        intubazione: "Non indicata al momento.",
        immunoglobuline: "Nessun effetto.",
        // Nota: Nel gioco, la cura corretta sarebbe "Penicillamina" o "Trientina" (chelanti), se l'utente le chiedesse.
    },

    // ---------------- CASO 4: MALATTIA DI FABRY ----------------
    {
        id: 4,
        nome_malattia: "Malattia di Fabry",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 24,
        sintomi: "Dolori urenti e lancinanti alle mani e ai piedi (acroparestesie), peggiorati dopo l'attività fisica. Affaticamento cronico. Palpitazioni occasionali.",
        anamnesi: "Storia di 'dolori della crescita' nell'infanzia mai risolti. Riferisce di non aver mai sudato molto, anche durante lo sport intenso (ipoidrosi). Zio materno in dialisi.",
        note_infermiera: "Parametri stabili, ma il paziente ha la febbre a 37.8°C dopo essere stato al sole in attesa dell'ambulanza. Ho notato numerose piccole macchioline rosso-violacee a capocchia di spillo nella zona tra l'ombelico e le cosce.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.0 g/dL, Leucociti 7.200/mmc, Piastrine 280.000/mmc.",
        chimica_clinica: "Creatinina 1.5 mg/dL (Valore superiore alla norma per l'età). Azotemia 55 mg/dL. Elettroliti nella norma.",
        emogas: "pH 7.40, Scambi gassosi regolari.",
        ves_pcr: "VES 12 mm/h, PCR negativa.",
        emocoltura: "Negativa.",
        esame_urine: "Proteine: 3+ (Proteinuria significativa). Sedimento: Presenza di corpi ovali grassi e lipidi birifrangenti ('Croce di Malta').",
        esame_feci: "Le feci mostrano malassorbimento moderato con residui lipidici aumentati.",
        autoanticorpi: "ANA, ENA, Anti-DNA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Non indicato.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Attività alfa-galattosidasi A leucocitaria: < 1% del valore di riferimento.",

        // --- IMAGING ---
        rx: "RX Torace: Lieve ingrandimento dell'ombra cardiaca. Campi polmonari limpidi.",
        tc: "TC Addome: Reni di dimensioni conservate ma con cisti parapieliche bilaterali. Non calcoli.",
        risonanza: "RMN Encefalo: Iperintensità della sostanza bianca periventricolare e profonda (segni di microangiopatia ischemica cronica in paziente giovane). Tortuosità dei vasi vertebro-basilari.",
        angio: "Non indicata.",
        ecografia: "Eco Renale: Aumento dell'ecogenicità corticale (segno di nefropatia medica).",
        ecocardiogramma: "Ipertrofia Ventricolare Sinistra (IVS) concentrica significativa. Frazione di Eiezione 55%.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Renale: Glomerulosclerosi focale e segmentale. Al microscopio elettronico: presenza di inclusioni citoplasmatiche lamellari osmiofile ('Zebra bodies') nei podociti.",
        endoscopia: "Non indicata.",
        paracentesi: "Non indicata.",
        eeg: "Normale.",
        emg: "Velocità di conduzione nella norma. Non segni di polineuropatia grandi fibre (il danno è alle piccole fibre, non rilevabile con EMG standard).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto sul dolore neuropatico o sulla proteinuria.",
        dialisi: "Non necessaria al momento, ma indicata in futuro per progressione danno renale.",
        intubazione: "Non indicata.",
        immunoglobuline: "Nessun effetto."
        // Terapia corretta: Terapia enzimatica sostitutiva (Agalsidasi)
    },

    // ---------------- CASO 5: EMOCROMATOSI EREDITARIA ----------------
    {
        id: 5,
        nome_malattia: "Emocromatosi Ereditaria",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 48,
        sintomi: "Astenia profonda (stanchezza cronica), dolori articolari persistenti alle mani (specialmente alle nocche), calo della libido e impotenza. Riferisce sete eccessiva e poliuria ultimamente.",
        anamnesi: "Nessun precedente di alcolismo. Il padre è morto di cirrosi epatica 'da causa ignota' a 55 anni. Non assume farmaci abituali.",
        note_infermiera: "La pelle del paziente ha un colorito scuro, brunastro-grigio, diffuso su tutto il corpo, anche nelle zone non esposte al sole. Non sembra un'abbronzatura naturale.",

        // --- LABORATORIO ---
        emocromo: "Hb 14.5 g/dL, Piastrine 150.000/mmc (limiti bassi), Leucociti nella norma.",
        chimica_clinica: "Glicemia a digiuno: 195 mg/dL (Diabete non controllato). ALT 110 U/L, AST 95 U/L (Transaminasi aumentate ~3x). Bilirubina totale lievemente mossa.",
        emogas: "Nella norma.",
        ves_pcr: "VES 15 mm/h. Fattore Reumatoide negativo (Esclude Artrite Reumatoide classica).",
        emocoltura: "Negativa.",
        esame_urine: "Glicosuria +++. Chetoni negativi.",
        autoanticorpi: "ANA, AMA, ASMA negativi. Anti-HCV e HBsAg negativi (Esclude epatiti virali).",
        tossicologico: "Negativo. Etanolemia 0.",
        esame_liquor: "Non indicato.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Ferritina: 2800 ng/mL (Valore critico). Saturazione della Transferrina: 92% (Valore diagnostico >45%). Testosterone totale basso.",

        // --- IMAGING ---
        rx: "RX Mani: Restringimento dello spazio articolare e presenza di osteofiti 'a uncino' sulle teste metacarpali del 2° e 3° dito.",
        tc: "TC Addome: Epatomegalia marcata. Densità epatica aumentata in modo omogeneo (il fegato appare più 'bianco' della milza senza mezzo di contrasto).",
        risonanza: "RMN Fegato e Cuore (T2*): Marcata ipointensità di segnale nel parenchima epatico e miocardico (compatibile con sovraccarico di metalli pesanti).",
        angio: "Non indicata.",
        ecografia: "Eco Addome: Fegato ingrossato con ecostruttura iperiflettente 'brillante'. Segni iniziali di ipertensione portale.",
        ecocardiogramma: "Ventricolo sinistro lievemente dilatato. Frazione di Eiezione 50%.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Epatica: Struttura sovvertita da setti fibrosi (Cirrosi micronodulare). Colorazione di Perls (Blu di Prussia): Positività massiva grado 4 (depositi blu scuro negli epatociti).",
        endoscopia: "Non indicata in urgenza.",
        paracentesi: "Non indicata.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Peggioramento del controllo glicemico. Nessun beneficio sui dolori articolari.",
        dialisi: "Non indicata.",
        intubazione: "Non indicata.",
        immunoglobuline: "Nessun effetto.",
        // Nota terapeutica: La terapia corretta sarebbe il "Salasso terapeutico" (flebotomia).
    },

// ---------------- CASO 6: FEBBRE MEDITERRANEA FAMILIARE ----------------
    {
        id: 6,
        nome_malattia: "Febbre Mediterranea Familiare",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 22,
        sintomi: "Dolore addominale acuto diffuso con difesa (addome a tavola), febbre a 39.5°C, dolore toracico puntorio che peggiora con l'inspirazione.",
        anamnesi: "Episodi dolorosi addominali ricorrenti dall'adolescenza, durata 48-72 ore, risoluzione spontanea. Appendicectomia a 19 anni (referto istologico: appendice sana).",
        note_infermiera: "Paziente immobile nel letto, rifiuta di essere toccato sull'addome. Presenza di placca eritematosa calda e dolente sulla caviglia destra.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 18.500/mmc (Neutrofili 88%), Hb 13.0 g/dL, Piastrine 450.000/mmc.",
        chimica_clinica: "Creatinina 0.9 mg/dL, AST/ALT nella norma. Elettroliti regolari.",
        emogas: "pH 7.45, pCO2 38 mmHg, pO2 98%.",
        ves_pcr: "VES 85 mm/h, PCR 18.0 mg/dL, Fibrinogeno 700 mg/dL (Indici di flogosi alle stelle).",
        emocoltura: "Negativa dopo 48h.",
        esame_urine: "Proteinuria ++ (1g/24h). Sedimento inattivo.",
        autoanticorpi: "ANA negativi, ANCA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, incolore. Pressione, cellule e proteine nella norma.",
        striscio_sangue: "Neutrofilia con granulazioni tossiche.",
        dosaggi_specifici: "Analisi molecolare gene MEFV: Omozigosi per mutazione M694V (Diagnostico).",

        // --- IMAGING ---
        rx: "RX Addome: Modesta distensione gassosa delle anse ileali (ileo riflesso). Assenza di livelli idroaerei significativi. Non aria libera.",
        tc: "TC Addome/Pelvi: Falda di versamento liquido nel cavo di Douglas e tra le anse. Ispessimento diffuso del peritoneo. Non ascessi.",
        risonanza: "RMN Addome: Conferma versamento peritoneale libero. Nessuna massa solida.",
        angio: "Vasi mesenterici pervi. Nessuna ischemia vascolare.",
        ecografia: "Versamento libero perisplenico e in fossa iliaca destra.",
        ecocardiogramma: "Scollamento pericardico posteriore (versamento lieve).",
        pet: "Captazione diffusa a livello del peritoneo e della pleura (sierosite infiammatoria).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia grasso periombelicale (Agoaspirato): Negativa per amiloide (Rosso Congo negativo).",
        endoscopia: "Colonscopia: Mucosa regolare fino al cieco. Nessuna ulcera.",
        paracentesi: "Liquido peritoneale: Essudato sterile. Leucociti > 2000/mmc (90% polimorfonucleati). Coltura negativa.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessuna variazione della febbre o del dolore addominale.",
        cortisone: "Lieve e transitoria riduzione della sintomatologia dolorosa.",
        dialisi: "Nessuna variazione clinica.",
        intubazione: "Non necessaria, scambi gassosi conservati.",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 7: DEFICIT DI ALFA-1-ANTITRIPSINA ----------------
    {
        id: 7,
        nome_malattia: "Deficit di Alfa-1-antitripsina",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 38,
        sintomi: "Dispnea progressiva da sforzo, tosse secca persistente, respiro sibilante.",
        anamnesi: "Non fumatrice. Bibliotecaria. Padre deceduto per cirrosi epatica a 50 anni.",
        note_infermiera: "Saturazione O2 91% in aria ambiente. Torace iperespanso ('a botte'). Murmure vescicolare ridotto su tutto l'ambito.",

        // --- LABORATORIO ---
        emocromo: "Hb 16.5 g/dL, Ematocrito 52%, Leucociti 7.000/mmc.",
        chimica_clinica: "ALT 68 U/L, AST 60 U/L, Bilirubina totale 1.2 mg/dL.",
        emogas: "pH 7.38, pO2 62 mmHg, pCO2 42 mmHg.",
        ves_pcr: "VES 5 mm/h, PCR 0.1 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Esame chimico-fisico nella norma.",
        autoanticorpi: "ANA negativi, ANCA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, incolore. Pressione di apertura 15 cmH2O.",
        striscio_sangue: "Normocitosi.",
        dosaggi_specifici: "Alfa-1 Antitripsina sierica: 18 mg/dL (Range: 90-200).",

        // --- IMAGING ---
        rx: "RX Torace: Ipertrasparenza dei campi polmonari, appiattimento emidiaframmi. Cuore verticalizzato.",
        tc: "TC Torace HR: Enfisema panlobulare diffuso con predominanza ai lobi basali.",
        risonanza: "RMN Encefalo: Parenchima cerebrale nella norma.",
        angio: "Angio-TC Polmonare: Assenza di difetti di riempimento endoluminali.",
        ecografia: "Eco Addome: Fegato a ecostruttura grossolana e disomogenea.",
        ecocardiogramma: "Ventricolo destro lievemente dilatato. PAPs 40 mmHg.",
        pet: "Distribuzione fisiologica del tracciante.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Epatica: Inclusi globulari PAS-positivi diastasi-resistenti negli epatociti periportali.",
        endoscopia: "Mucosa bronchiale pallida, secrezioni scarse.",
        paracentesi: "Nessun versamento accessibile.",
        eeg: "Attività di fondo alfa 10Hz reagente.",
        emg: "Tracciato nei limiti della norma.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessuna variazione della dispnea.",
        cortisone: "Lieve miglioramento soggettivo del broncospasmo.",
        dialisi: "Nessuna variazione.",
        intubazione: "Ventilazione difficile per elevate pressioni di picco.",
        immunoglobuline: "Nessun effetto clinico."
    },

    // ---------------- CASO 8: SINDROME DI MARFAN (Dissecazione Aortica) ----------------
    {
        id: 8,
        nome_malattia: "Sindrome di Marfan (Dissecazione Aortica)",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 26,
        sintomi: "Dolore toracico trafittivo improvviso irradiato alla regione interscapolare. Sincope all'esordio.",
        anamnesi: "Miopia elevata. Nessun precedente cardiologico noto.",
        note_infermiera: "Paziente longilineo (196 cm). Pressione arteriosa differenziale: 170/95 braccio destro, 110/60 braccio sinistro.",

        // --- LABORATORIO ---
        emocromo: "Hb 11.8 g/dL, Leucociti 14.000/mmc.",
        chimica_clinica: "Creatinina 1.3 mg/dL, Troponina I negativa.",
        emogas: "pH 7.30, Lattati 3.5 mmol/L.",
        ves_pcr: "PCR 2.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Ematuria microscopica.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Liquor ematico (se puntura traumatica) o limpido.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Test genetico non disponibile in urgenza.",

        // --- IMAGING ---
        rx: "RX Torace: Slargamento del mediastino superiore.",
        tc: "TC Torace con MdC: Doppio lume in aorta ascendente esteso all'arco e all'aorta discendente. Versamento pleurico sinistro.",
        risonanza: "Non eseguibile per instabilità clinica.",
        angio: "Flap intimale visibile dall'aorta ascendente alle iliache.",
        ecografia: "Eco Addome: Aorta addominale con flap di dissecazione visibile.",
        ecocardiogramma: "Dilatazione radice aortica (55mm). Insufficienza aortica severa. Flap intimale in aorta ascendente.",
        pet: "Non eseguibile.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Tessuto muscolare normale.",
        endoscopia: "Esofagogastroscopia: Peggioramento improvviso del dolore e dell'instabilità emodinamica durante l'insufflazione.",
        paracentesi: "Nessun liquido.",
        eeg: "Rallentamento diffuso da ipoperfusione cerebrale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Aumento della pressione arteriosa (effetto indesiderato).",
        dialisi: "Ipotensione grave durante la seduta.",
        intubazione: "Stabilizzazione temporanea dei parametri respiratori.",
        immunoglobuline: "Nessun effetto."
    },

    // ---------------- CASO 9: CARENZA DI G6PD (FAVISMO) ----------------
    {
        id: 9,
        nome_malattia: "Carenza di G6PD (Crisi Emolitica)",
        livello_difficolta: "Facile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 8,
        sintomi: "Astenia improvvisa, pallore cutaneo, dolori lombari, urine ipercromiche.",
        anamnesi: "Ieri pranzo in agriturismo.",
        note_infermiera: "Sclere itteriche. Urine emesse di colore rosso scuro/bruno.",

        // --- LABORATORIO ---
        emocromo: "Hb 7.2 g/dL, Reticolociti 15%, Piastrine 200.000/mmc.",
        chimica_clinica: "Bilirubina Totale 5.8 mg/dL (Indiretta 5.0). LDH 1450 U/L. Aptoglobina < 10 mg/dL.",
        emogas: "pH 7.40, pO2 98%.",
        ves_pcr: "VES 10 mm/h.",
        emocoltura: "Negativa.",
        esame_urine: "Sangue +++ (emoglobinuria). Sedimento: rari eritrociti.",
        autoanticorpi: "Coombs Diretto e Indiretto: NEGATIVI.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido.",
        striscio_sangue: "Anisopoichilocitosi, presenza di 'Bite cells' e 'Blister cells'.",
        dosaggi_specifici: "G6PD eritrocitaria: 2.5 U/g Hb (Ridotta).",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Addome: Splenomegalia omogenea. Reni lievemente ingranditi.",
        risonanza: "Encefalo normale.",
        angio: "Vasi regolari.",
        ecografia: "Eco Addome: Milza diametro longitudinale aumentato. Ecostruttura omogenea.",
        ecocardiogramma: "Tachicardia ipercinetica. FE 70%.",
        pet: "Non captazioni patologiche.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Midollo osseo: Iperplasia della serie eritroide.",
        endoscopia: "Mucosa gastrica indenne.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Somministrazione di Sulfamidici: Crollo dell'Emoglobina a 5.0 g/dL e peggioramento dell'ittero.",
        cortisone: "Nessuna variazione dell'emolisi.",
        dialisi: "Riduzione dei livelli di bilirubina e metaboliti, supporto in caso di blocco renale.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun rallentamento dell'emolisi."
    },


// ---------------- CASO 10: MALATTIA DI LYME (Neuroborreliosi) ----------------
    {
        id: 10,
        nome_malattia: "Malattia di Lyme",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 29,
        sintomi: "Paralisi facciale destra (la bocca storta), dolore alle articolazioni migratorio (prima ginocchio, poi spalla), cefalea nucale.",
        anamnesi: "Appassionata di trekking. Due mesi fa è stata in vacanza nelle foreste del Trentino. Ricorda una 'puntura di insetto' sulla coscia che ha fatto un cerchio rosso, poi sparito.",
        note_infermiera: "La paziente non riesce a chiudere l'occhio destro. Ho notato che il battito cardiaco è molto lento (bradicardia) sul monitor.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.5 g/dL, Leucociti nella norma.",
        chimica_clinica: "Funzionalità epatica e renale nella norma.",
        emogas: "Normale.",
        ves_pcr: "VES 30 mm/h (Lievemente aumentata).",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA positivi a basso titolo (Aspecifici).",
        tossicologico: "Negativo.",
        esame_liquor: "Pleocitosi linfocitaria (presenza di globuli bianchi nel liquor). Proteine aumentate. Glucosio normale (Quadro virale/atipico).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Sierologia Borrelia Burgdorferi (ELISA + Western Blot): POSITIVA (IgM e IgG presenti).",

        // --- IMAGING ---
        rx: "Nessuna anomalia pleuro-parenchimale.",
        tc: "TC Encefalo: Nessuna emorragia o massa.",
        risonanza: "RMN Encefalo: Iperintensità dei nervi cranici (VII nervo facciale). Nessuna lesione ischemica.",
        angio: "Vasi pervi.",
        ecografia: "Milza di dimensioni normali. Nessun versamento addominale.",
        ecocardiogramma: "Strutturalmente sano, ma bradicardia evidente.",
        pet: "Nessuna captazione patologica focale.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia cutanea (su vecchia lesione): Infiltrato infiammatorio aspecifico.",
        endoscopia: "Mucosa gastrica rosea.",
        paracentesi: "Nessun liquido prelevabile.",
        eeg: "Rallentamento diffuso lieve.",
        emg: "Segni di denervazione attiva nel territorio del nervo facciale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Miglioramento progressivo dei sintomi nelle settimane successive (Doxiciclina/Ceftriaxone).",
        cortisone: "Nessun miglioramento della paralisi, possibile peggioramento dell'infezione.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun effetto significativo."
    },

    // ---------------- CASO 11: LUPUS ERITEMATOSO SISTEMICO (LES) ----------------
    {
        id: 11,
        nome_malattia: "Lupus Eritematoso Sistemico (LES)",
        livello_difficolta: "Facile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 22,
        sintomi: "Dolori articolari a mani e polsi (artrite), stanchezza estrema, ulcere in bocca non dolorose. Riferisce di avere la febbre ogni pomeriggio.",
        anamnesi: "Nessuna patologia pregressa. Prende la pillola anticoncezionale.",
        note_infermiera: "Ho notato un arrossamento a forma di farfalla sul viso (guance e naso) che sembra peggiorato dopo che l'abbiamo portata sotto le luci forti della sala visite.",

        // --- LABORATORIO ---
        emocromo: "Leucopenia (Globuli bianchi bassi: 3.000/mmc), Piastrinopenia (90.000/mmc), Anemia emolitica lieve.",
        chimica_clinica: "Creatinina 1.3 mg/dL (Insufficienza renale lieve).",
        emogas: "Normale.",
        ves_pcr: "VES molto alta (80 mm/h). PCR solo lievemente mossa (Discrepanza tipica del Lupus).",
        emocoltura: "Negativa.",
        esame_urine: "Proteinuria ++, Ematuria microscopica, Cilindri cellulari (Segni di nefrite).",
        autoanticorpi: "ANA Positivi (Titolo 1:1280, pattern omogeneo). Anti-dsDNA POSITIVI (Specifici). C3 e C4 ridotti (Consumo del complemento).",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Test di Coombs Diretto: Positivo.",

        // --- IMAGING ---
        rx: "Versamento pleurico bilaterale di modesta entità.",
        tc: "Linfoadenomegalie aspecifiche in sede ascellare e mediastinica. Versamento pericardico lieve.",
        risonanza: "Nessuna alterazione focale encefalica.",
        angio: "Nessuna embolia polmonare.",
        ecografia: "Reni di dimensioni normali ma iper-ecogeni (infiammazione parenchimale).",
        ecocardiogramma: "Versamento pericardico (Pericardite). Valvole con lievi ispessimenti (Endocardite di Libman-Sacks).",
        pet: "Ipercaptazione diffusa ai linfonodi e alle articolazioni (infiammazione sistemica).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Renale: Glomerulonefrite proliferativa diffusa (Classe IV). Depositi di immuni-complessi 'full house'.",
        endoscopia: "Nessuna lesione gastrica.",
        paracentesi: "Liquido pleurico: Essudato sterile.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla febbre.",
        cortisone: "Miglioramento rapido e spettacolare dei sintomi articolari e della febbre.",
        dialisi: "Non necessaria in acuto, ma la funzionalità renale va monitorata.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Miglioramento della conta piastrinica."
    },

    // ---------------- CASO 12: FEOCROMOCITOMA ----------------
    {
        id: 12,
        nome_malattia: "Feocromocitoma",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 40,
        sintomi: "Cefalea pulsante esplosiva, sudorazione profusa (il paziente è zuppo), palpitazioni violente, sensazione di morte imminente.",
        anamnesi: "Episodi simili in passato ma più lievi, diagnosticati come 'attacchi di panico'. Non fuma.",
        note_infermiera: "La pressione arteriosa è impazzita: un minuto fa era 220/110, ora è 180/100. Il paziente è pallidissimo.",

        // --- LABORATORIO ---
        emocromo: "Ematocrito lievemente aumentato (emoconcentrazione).",
        chimica_clinica: "Iperglicemia (200 mg/dL - adrenalina alza lo zucchero). Ipokaliemia lieve.",
        emogas: "Normale.",
        ves_pcr: "Normale.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo (Esclude cocaina/anfetamine che darebbero sintomi simili).",
        esame_liquor: "Pressione normale, limpido.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Metanefrine plasmatiche e urinarie (24h): Valori 10 volte superiori alla norma.",

        // --- IMAGING ---
        rx: "Ombra cardiaca nei limiti. Polmoni puliti.",
        tc: "TC Addome: Massa surrenalica destra di 4 cm, a densità disomogenea. Surrene sinistro normale.",
        risonanza: "Massa surrenalica destra iperintensa in T2 ('Light bulb sign').",
        angio: "Arterie renali pervie (esclude ipertensione renovascolare).",
        ecografia: "Massa sovrarenale destra ipoecogena.",
        ecocardiogramma: "Ipertrofia concentrica del ventricolo sinistro (segno di ipertensione di lunga data).",
        pet: "Captazione intensa in sede surrenalica destra.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia della massa: RISCHIO MORTALE. La puntura ha scatenato una crisi ipertensiva massiva (rilascio di catecolamine).",
        endoscopia: "Normale.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria se sopravviene emorragia cerebrale da picco ipertensivo.",
        immunoglobuline: "Nessun effetto."
    },

    // ---------------- CASO 13: RABBIA (Lyssavirus) ----------------
    {
        id: 13,
        nome_malattia: "Rabbia",
        livello_difficolta: "Letale",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 35,
        sintomi: "Agitazione psicomotoria, insonnia, parestesie (formicolio/prurito) alla mano destra, spasmi alla gola quando cerca di bere.",
        anamnesi: "Viaggiatore frequente (backpacker). È tornato dall'India 3 mesi fa. Riferisce vagamente di essere stato morso da un cane randagio a New Delhi, ma ha solo lavato la ferita.",
        note_infermiera: "Ho provato a dargli un bicchiere d'acqua e ha avuto uno spasmo laringeo violento, urlando di terrore (Idrofobia). Salivazione eccessiva.",

        // --- LABORATORIO ---
        emocromo: "Leucocitosi neutrofila moderata.",
        chimica_clinica: "Sodio lievemente basso, CPK aumentato (per gli spasmi muscolari).",
        emogas: "Alcalosi respiratoria (per l'iperventilazione/ansia).",
        ves_pcr: "Nella norma o lievemente mosse.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo (Esclude intossicazione da stricnina o tetano).",
        esame_liquor: "Lieve pleocitosi linfocitaria, proteine lievemente aumentate. (Quadro di encefalite virale aspecifica).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "PCR virale su saliva e biopsia nucale: POSITIVA per RNA virus della Rabbia.",

        // --- IMAGING ---
        rx: "Polmonite ab ingestis iniziale (ha inalato saliva).",
        tc: "Edema cerebrale diffuso lieve. Nessuna lesione focale.",
        risonanza: "Iperintensità T2 nei gangli della base, talamo e tronco encefalico (aree tipiche del virus).",
        angio: "Normale.",
        ecografia: "Normale.",
        ecocardiogramma: "Tachicardia sinusale, cuore sano.",
        pet: "Ipermetabolismo nel tronco encefalico.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia cutanea nucale (attaccatura capelli): Presenza di antigene virale nelle terminazioni nervose dei follicoli piliferi.",
        endoscopia: "Spasmo esofageo impossibile da superare.",
        paracentesi: "Nessun liquido.",
        eeg: "Attività di fondo disorganizzata, onde lente diffuse (encefalopatia).",
        emg: "Fascicolazioni diffuse.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria per proteggere le vie aeree e sedare il paziente (coma farmacologico).",
        immunoglobuline: "Somministrazione tardiva inutile (il virus è già nel cervello). Prognosi infausta al 100%."
    },

    // ---------------- CASO 14: SINDROME DI GUILLAIN-BARRÉ ----------------
    {
        id: 14,
        nome_malattia: "Sindrome di Guillain-Barré",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 50,
        sintomi: "Debolezza alle gambe iniziata 3 giorni fa, ora fatica a camminare. Formicolii alle mani e ai piedi.",
        anamnesi: "Gastroenterite risolta 2 settimane fa (diarrea e febbre).",
        note_infermiera: "Il paziente non riesce ad alzarsi dalla sedia a rotelle. Riflessi rotulei assenti.",

        // --- LABORATORIO ---
        emocromo: "Hb 14.0 g/dL, Leucociti 6.500/mmc.",
        chimica_clinica: "CPK normale. Elettroliti nella norma.",
        emogas: "pH 7.35, pCO2 48 mmHg (Lieve ritenzione CO2 per debolezza muscoli respiratori).",
        ves_pcr: "VES 15 mm/h.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Anti-gangliosidi (GM1) Positivi.",
        tossicologico: "Negativo.",
        esame_liquor: "Dissociazione albumino-citologica (Proteine 150 mg/dL, Cellule < 5/mmc).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Campylobacter jejuni nelle feci (precedente): Negativo (infezione risolta).",

        // --- IMAGING ---
        rx: "RX Torace: Sollevamento degli emidiaframmi (ridotta espansione).",
        tc: "TC Encefalo: Negativa.",
        risonanza: "RMN Rachide: Ispessimento e impregnazione (enhancement) delle radici nervose della cauda equina.",
        angio: "Negativa.",
        ecografia: "Vescica distesa (ritenzione urinaria).",
        ecocardiogramma: "Normale.",
        pet: "Negativa.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia nervo surale: Demielinizzazione segmentale, infiltrazione linfocitaria.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Blocchi di conduzione motoria, velocità di conduzione rallentata, latenze distali aumentate.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla paralisi.",
        cortisone: "Nessun miglioramento clinico significativo.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria per peggioramento della capacità vitale forzata (< 20 ml/kg).",
        immunoglobuline: "Arresto della progressione dei sintomi e miglioramento graduale della forza muscolare."
    },

// ---------------- CASO 15: MALATTIA DI WHIPPLE ----------------
    {
        id: 15,
        nome_malattia: "Malattia di Whipple",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 54,
        sintomi: "Diarrea cronica, calo ponderale massiccio (12 kg in 3 mesi), dolori articolari migratori (polsi, ginocchia), dolore addominale post-prandiale.",
        anamnesi: "Storia di artralgie intermittenti negli ultimi 5 anni, trattate come 'artrite sieronegativa' con scarsi risultati. Riferisce febbricola serale ricorrente.",
        note_infermiera: "Paziente cachettico (molto magro). La pelle presenta una iperpigmentazione grigiastra diffusa (nonostante non prenda sole). Ipotensione ortostatica (capogiro quando si alza).",

        // --- LABORATORIO ---
        emocromo: "Hb 9.5 g/dL (Anemia microcitica), Leucociti 11.000/mmc, Piastrine 400.000/mmc.",
        chimica_clinica: "Albumina 2.1 g/dL (Ipoalbuminemia grave). Calcio 7.5 mg/dL. Colesterolo totale 90 mg/dL (Malassorbimento).",
        emogas: "pH 7.38, bicarbonati lievemente ridotti (perdita intestinale).",
        ves_pcr: "VES 45 mm/h, PCR 4.0 mg/dL.",
        emocoltura: "Negativa", // (il batterio T. whipplei cresce molto difficilmente in coltura standard).
        esame_urine: "Normale.",
        esame_feci: "Le feci presentano significativa steatorrea, indicativa di malassorbimento cronico.",
        autoanticorpi: "Fattore Reumatoide negativo. ANA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Cellule 10/mmc (lieve pleocitosi)", //PCR per T. whipplei sul liquor: POSITIVA (Coinvolgimento neurologico asintomatico)
        striscio_sangue: "Ipocromia, microcitosi.",
        dosaggi_specifici: "Esame liquor test PCR (DNA) su sangue periferico per Tropheryma whipplei: POSITIVO.",

        // --- IMAGING ---
        rx: "RX Addome: Distensione anse tenui, assenza di livelli.",
        tc: "TC Addome: Ispessimento parietale del digiuno e dell'ileo. Linfoadenomegalie mesenteriche multiple a bassa densità (aspetto 'grasso-liquido').",
        risonanza: "RMN Encefalo: Aree di iperintensità in T2 a livello ipotalamico.",
        angio: "Vasi pervi.",
        ecografia: "Eco Addome: Anse intestinali ispessite con peristalsi accentuata. Liquido libero in addome (ascite da ipoalbuminemia).",
        ecocardiogramma: "Ispessimento dei lembi della valvola mitrale con lieve rigurgito. Vegetazioni non chiaramente visibili.",
        pet: "Captazione diffusa a livello delle anse intestinali e dei linfonodi addominali.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Duodenale (EGDS): Villi appiattiti e dilatati. Infiltrazione massiva della lamina propria da parte di macrofagi schiumosi PAS-positivi, Diastasi-resistenti. Colorazione Ziehl-Neelsen negativa (esclude micobatteri).",
        endoscopia: "EGDS: Mucosa duodenale pallida e villi edematosi (aspetto a 'tappeto a pelo lungo').",
        paracentesi: "Trasudato sterile.",
        eeg: "Rallentamento diffuso.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Miglioramento clinico lento ma progressivo (risoluzione febbre e diarrea in 2 settimane con Ceftriaxone/Cotrimossazolo).",
        cortisone: "Transitorio miglioramento dei dolori articolari, ma persistenza della diarrea e del calo ponderale.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun effetto. Peggioramento se associati a immunosoppressori (TNF-inibitori scatenano la malattia fulminante)."
    },

// ---------------- CASO 16: LEPTOSPIROSI (SINDROME DI WEIL) ----------------
    {
        id: 16,
        nome_malattia: "Leptospirosi",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 34,
        sintomi: "Febbre alta (39.8°C) con brividi, cefalea frontale intensa, mialgie severe (soprattutto ai polpacci e regione lombare), urine scarse e scure.",
        anamnesi: "Nessuna patologia cronica. Riferisce di aver praticato kayak e nuoto in un fiume 10 giorni fa durante una vacanza.",
        note_infermiera: "Paziente itterico. Presenta arrossamento oculare bilaterale senza secrezione purulenta (suffusione congiuntivale). Pressione 90/60 mmHg.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 16.500/mmc (Neutrofili 90%), Hb 10.2 g/dL, Piastrine 45.000/mmc.",
        chimica_clinica: "Creatinina 4.5 mg/dL, Azotemia 120 mg/dL. Bilirubina Totale 15.8 mg/dL (Diretta 10.2). AST 150 U/L, ALT 140 U/L. CPK 2500 U/L. Potassio 3.0 mEq/L.",
        emogas: "pH 7.28, pCO2 32 mmHg, HCO3 14 mEq/L, Lattati 4.0 mmol/L.",
        ves_pcr: "VES 65 mm/h, PCR 18.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteine ++, Emoglobina +++, Bilirubina +++. Sedimento: cilindri granulosi e ialini, cellule tubulari.",
        autoanticorpi: "ANA negativi, ANCA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido. Cellule 80/mmc (prevalenza linfociti), Proteine 60 mg/dL, Glucosio 60 mg/dL.",
        striscio_sangue: "Normale morfologia eritrocitaria. Piastrinopenia confermata.",
        dosaggi_specifici: "IgM anti-Leptospira (ELISA): POSITIVO. MAT (Test di Microagglutinazione): Titolo 1:800.",

        // --- IMAGING ---
        rx: "RX Torace: Infiltrati alveolari a chiazze bilaterali diffusi.",
        tc: "TC Addome: Epatomegalia, reni aumentati di volume con edema perirenale. Non calcoli, non idronefrosi.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Negativa.",
        ecografia: "Reni globosi con iperecogenicità corticale diffusa. Fegato ingrandito.",
        ecocardiogramma: "Funzione sistolica conservata. Non vegetazioni.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia renale (non in urgenza): Nefrite tubulo-interstiziale acuta.",
        endoscopia: "Gastroscopia: Gastrite erosiva emorragica diffusa.",
        paracentesi: "Nessun liquido.",
        eeg: "Rallentamento aspecifico.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Defervescenza graduale e riduzione degli indici di flogosi dopo 48-72 ore.",
        cortisone: "Nessuna variazione significativa del decorso clinico.",
        dialisi: "Correzione dell'acidosi metabolica e riduzione di azotemia/creatinina.",
        intubazione: "Miglioramento degli scambi gassosi (se presente distress respiratorio da emorragia alveolare).",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 17: BRUCELLOSI ----------------
    {
        id: 17,
        nome_malattia: "Brucellosi",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 52,
        sintomi: "Febbre ricorrente a 'ondate' (picchi serali seguiti da remissione), sudorazione notturna profusa dall'odore sgradevole, dolori alla bassa schiena e alle anche, astenia marcata.",
        anamnesi: "Nessun viaggio tropicale recente. Riferisce consumo abituale di formaggi artigianali freschi acquistati direttamente in fattoria.",
        note_infermiera: "Paziente pallido. Linfonodi cervicali e ascellari palpabili di piccole dimensioni. Dolore alla percussione della colonna lombare.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 3.800/mmc (Leucopenia con linfocitosi relativa), Hb 10.5 g/dL, Piastrine 130.000/mmc.",
        chimica_clinica: "ALT 95 U/L, AST 110 U/L, Fosfatasi Alcalina 180 U/L. Bilirubina nella norma.",
        emogas: "Normale.",
        ves_pcr: "VES 40 mm/h, PCR 3.5 mg/dL.",
        emocoltura: "Negativa dopo 5 giorni di incubazione standard.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi, Fattore Reumatoide negativo.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, chimico-fisico nella norma.",
        striscio_sangue: "Linfociti attivati.",
        dosaggi_specifici: "Sieroagglutinazione di Wright (Rose Bengal): Titolo 1:1280.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo. RX Rachide Lombare: Modesta sclerosi delle articolazioni sacro-iliache.",
        tc: "TC Addome: Epatomegalia e splenomegalia moderata. Linfoadenomegalie mesenteriche aspecifiche.",
        risonanza: "RMN Bacino/Rachide: Edema osseo a carico delle superfici articolari sacro-iliache bilaterali (Sacroileite). Spondilodiscite L4-L5.",
        angio: "Negativa.",
        ecografia: "Fegato e milza aumentati di volume ecostruttura omogenea.",
        ecocardiogramma: "Valvole integre, nessuna vegetazione visibile.",
        pet: "Ipercaptazione a livello dei corpi vertebrali L4-L5 e delle articolazioni sacro-iliache.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Midollare: Granulomi non caseosi costituiti da cellule epitelioidi.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Defervescenza graduale e riduzione della sudorazione dopo 7 giorni di terapia combinata (Doxiciclina + Rifampicina).",
        cortisone: "Riduzione temporanea dei dolori articolari, persistenza della febbre.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 18: ENCEFALITE ERPETICA (HSV-1) ----------------
    {
        id: 18,
        nome_malattia: "Encefalite Erpetica",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 58,
        sintomi: "Febbre (38.5°C), cefalea ingravescente da 3 giorni, alterazioni comportamentali acute (aggressività, linguaggio incoerente), episodio di crisi convulsiva tonico-clonica all'ingresso.",
        anamnesi: "Storia di Herpes Labiale ricorrente. Nessun viaggio recente. Ipertensione arteriosa ben controllata.",
        note_infermiera: "La paziente appare confusa, non riconosce i familiari. Riferisce insistentemente di sentire 'puzza di bruciato' (allucinazione olfattiva) anche se non c'è fumo.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 11.500/mmc (Linfociti 40%), Hb 13.2 g/dL, Piastrine 210.000/mmc.",
        chimica_clinica: "Sodio 130 mEq/L (Lieve iponatriemia). Funzionalità renale ed epatica nella norma.",
        emogas: "pH 7.42, pO2 96%, pCO2 38 mmHg.",
        ves_pcr: "VES 25 mm/h, PCR 1.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi. Anti-NMDA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Aspetto 'a canna di rocca' (lievemente xantocromico/giallo). Pressione 25 cmH2O. Cellule 150/mmc (90% Linfociti). Proteine 95 mg/dL (Aumentate). Glucosio 60 mg/dL (Rapporto liquor/siero normale). Eritrociti 80/mmc.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "PCR Real-Time su Liquor per HSV-1 (Herpes Simplex Virus 1): POSITIVA.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Encefalo (senza mdc): Area di tenue ipodensità mal definita a carico del lobo temporale sinistro. Non emorragie massive.",
        risonanza: "RMN Encefalo: Area di alterato segnale iperintensa nelle sequenze T2/FLAIR coinvolgente il lobo temporale sinistro, l'ippocampo e la corteccia insulare. Lieve effetto massa.",
        angio: "Vasi intracranici pervi. Nessun segno di trombosi venosa.",
        ecografia: "Eco Addome: Normale.",
        ecocardiogramma: "Normale.",
        pet: "Ipermetabolismo focale temporale sinistro.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Cerebrale (stereotassica): Necrosi emorragica, infiltrati infiammatori perivascolari, inclusioni nucleari eosinofile (Corpi di Cowdry A).",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Scariche epilettiformi periodiche lateralizzate (PLEDs) sulle derivazioni temporali di sinistra. Rallentamento dell'attività di fondo.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun miglioramento dello stato neurologico o della febbre.",
        cortisone: "Nessuna variazione significativa del quadro clinico.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria in caso di stato di male epilettico o depressione respiratoria post-critica.",
        antivirale: "Arresto del peggioramento clinico e graduale recupero dello stato di coscienza dopo 48-72 ore di Acyclovir endovena.",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 19: FEBBRE Q ----------------
    {
        id: 19,
        nome_malattia: "Febbre Q",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 44,
        sintomi: "Febbre elevata improvvisa (39-40°C), cefalea retro-orbitaria violenta (dolore dietro gli occhi), tosse secca stizzosa, brividi scuotenti.",
        anamnesi: "Nessun viaggio all'estero. Vive in zona rurale. Riferisce di aver aiutato il vicino nel parto delle capre circa 3 settimane fa.",
        note_infermiera: "Paziente prostrato, fotofobico. Lamenta dolore al fianco destro sotto le costole.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 8.500/mmc (nella norma), Hb 13.0 g/dL, Piastrine 110.000/mmc (Lieve trombocitopenia).",
        chimica_clinica: "AST 180 U/L, ALT 210 U/L (Epatite acuta). Bilirubina totale 1.5 mg/dL. LDH 850 U/L (Aumentato).",
        emogas: "pH 7.42, pO2 90% (Lieve ipossiemia).",
        ves_pcr: "VES 50 mm/h, PCR 8.5 mg/dL.",
        emocoltura: "Negativa (Coxiella è un batterio intracellulare, non cresce nei terreni standard).",
        esame_urine: "Microematuria discreta.",
        autoanticorpi: "ANA negativi. Anti-muscolo liscio (ASMA) positivi a basso titolo (1:40).",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Sierologia Coxiella burnetii (IFA): Titolo IgM Fase II > 1:200 (Infezione acuta).",

        // --- IMAGING ---
        rx: "RX Torace: Opacità parenchimali rotondeggianti multiple ('a palla di cannone') ai lobi inferiori.",
        tc: "TC Torace: Aree di consolidamento parenchimale focale senza broncogramma aereo. Linfoadenomegalie mediastiniche.",
        risonanza: "Encefalo normale.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Epatomegalia con ecostruttura conservata. Milza ai limiti superiori (splenomegalia lieve).",
        ecocardiogramma: "Valvole integre. Nessuna vegetazione (esclude endocardite cronica al momento).",
        pet: "Captazione focale polmonare ed epatica.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Epatica: Granulomi fibrinoidei con vacuola lipidica centrale circondata da istiociti ('Doughnut granulomas' / Granulomi a ciambella).",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Somministrazione Penicilline/Cefalosporine: Nessun effetto. Somministrazione Doxiciclina: Defervescenza rapida in 48 ore.",
        cortisone: "Nessun effetto sulla febbre, lieve riduzione mialgie.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 20: NAEGLERIA FOWLERI ----------------
    {
        id: 20,
        nome_malattia: "Naegleria fowleri (Meningoencefalite Amebica Primaria)",
        livello_difficolta: "Letale",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 12,
        sintomi: "Cefalea frontale severa improvvisa, febbre a 40°C, nausea, vomito a getto, rigidità nucale.",
        anamnesi: "Bambino sano. 5 giorni fa ha fatto il bagno in un lago d'acqua dolce durante una gita scolastica. Riferisce di aver inalato acqua col naso dopo un tuffo.",
        note_infermiera: "Il paziente è confuso e agitato. Riferisce che il cibo 'sa di marcio' (parosmia) e sente odori strani che non ci sono. Rapido deterioramento dello stato di coscienza nell'ultima ora.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 24.000/mmc (Neutrofilia marcata), Hb 13.5 g/dL, Piastrine 300.000/mmc.",
        chimica_clinica: "Glucosio 140 mg/dL (da stress), Sodio 145 mEq/L. Funzionalità organi nella norma.",
        emogas: "pH 7.48, pCO2 30 mmHg (Alcalosi respiratoria da iperventilazione centrale).",
        ves_pcr: "PCR 12.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Chetoni + (digiuno).",
        esame_feci: "Le feci non mostrano cisti né trofozoiti di amebe intestinali.",
        autoanticorpi: "Non indicati.",
        tossicologico: "Negativo.",
        esame_liquor: "Aspetto torbido/purulento. Pressione apertura molto elevata (>40 cmH2O). Leucociti 4.500/mmc (Neutrofili 98%). Glucosio 10 mg/dL (Ipoglicorrachia marcata). Proteine 400 mg/dL. Colorazione di Gram: NEGATIVA (Nessun batterio visibile).",
        striscio_sangue: "Neutrofilia.",
        dosaggi_specifici: "PCR Real-Time su Liquor per Naegleria fowleri: POSITIVO.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Encefalo: Edema cerebrale diffuso, cancellazione dei solchi corticali, compressione dei ventricoli. Nessuna massa focale.",
        risonanza: "RMN Encefalo (con gadolinio): Enhancement leptomeningeo marcato, localizzato prevalentemente alla base del cervello e ai bulbi olfattivi.",
        angio: "Negativa.",
        ecografia: "Negativa.",
        ecocardiogramma: "Tachicardia sinusale.",
        pet: "Non eseguibile.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non eseguibile in vivo.",
        endoscopia: "Non indicata.",
        paracentesi: "Non indicata.",
        eeg: "Attività delta diffusa polimorfa (sofferenza cerebrale grave).",
        emg: "Non indicato.",
        esame_microscopico_liquor: "Esame a fresco (Wet mount): Presenza di trofozoiti mobili (movimento a 'lumaca') tra i neutrofili.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Ceftriaxone/Vancomicina: Nessun effetto. Progressione rapida verso il coma.",
        cortisone: "Riduzione temporanea dell'edema cerebrale, ma nessuna inibizione del patogeno.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria per protezione vie aeree e gestione ipertensione endocranica (GCS < 8).",
        farmaco_amfotericina: "Somministrazione intratecale: Rallentamento della replicazione (unica chance terapeutica, spesso tardiva).",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 21: GRANULOMATOSI CON POLIANGIOITE (WEGENER) ----------------
    {
        id: 21,
        nome_malattia: "Granulomatosi con poliangioite (Wegener)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 46,
        sintomi: "Ostruzione nasale persistente con croste ematiche, epistassi (sangue dal naso) ricorrente, tosse con espettorato striato di sangue, dolori articolari, febbre serale.",
        anamnesi: "In cura da 3 mesi per 'sinusite cronica' resistente a molteplici cicli antibiotici. Riferisce calo dell'udito recente all'orecchio destro.",
        note_infermiera: "Ho notato un abbassamento del ponte nasale (deformità a 'sella'). Le urine nel pappagallo sono color coca-cola.",

        // --- LABORATORIO ---
        emocromo: "Hb 9.8 g/dL (Anemia normocitica), Leucociti 13.000/mmc (Neutrofilia), Piastrine 450.000/mmc (Trombocitosi reattiva).",
        chimica_clinica: "Creatinina 2.8 mg/dL (Insufficienza renale acuta), Azotemia 85 mg/dL. Potassio 5.2 mEq/L.",
        emogas: "pH 7.35, pO2 92%.",
        ves_pcr: "VES 90 mm/h, PCR 12.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteine ++, Sangue +++ (Ematuria). Sedimento: tappeto di eritrociti dismorfici e cilindri eritrocitari.",
        autoanticorpi: "ANA negativi. Anti-GBM negativi. c-ANCA (Anti-PR3) POSITIVI a titolo elevato.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Complemento C3 e C4 nella norma.",

        // --- IMAGING ---
        rx: "RX Torace: Opacità nodulari multiple bilaterali, alcune delle quali presentano escavazione centrale (cavitate).",
        tc: "TC Massiccio Facciale: Pansinusite con erosione delle pareti ossee e distruzione del setto nasale.",
        risonanza: "RMN Encefalo: Ispessimento della dura madre (pachimeningite) in sede frontale.",
        angio: "Angio-TC Polmonare: Nessuna embolia. Conferma noduli cavitati e aree di vetro smerigliato (emorragia alveolare).",
        ecografia: "Reni di dimensioni normali, iperecogeni.",
        ecocardiogramma: "Funzione cardiaca normale. Nessuna vegetazione.",
        pet: "Captazione intensa a livello dei seni paranasali e dei noduli polmonari.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Renale: Glomerulonefrite pauci-immune necrotizzante con semilune (crescents). Biopsia mucoso nasale: Vasculite granulomatosa necrotizzante.",
        endoscopia: "Broncoscopia: Mucosa infiammata, presenza di sangue nell'albero bronchiale (alveolite emorragica).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Segni di mononeurite multipla (asimmetrica).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun miglioramento della sintomatologia nasale o sistemica.",
        cortisone: "Rapido miglioramento della febbre e dei dolori articolari. Stabilizzazione della funzione renale.",
        dialisi: "Necessaria temporaneamente per gestire l'iperazotemia e l'equilibrio acido-base.",
        intubazione: "Necessaria solo in caso di emorragia alveolare massiva con insufficienza respiratoria.",
        farmaco_immunosoppressore: "Ciclofosfamide/Rituximab: Remissione clinica e radiologica progressiva nelle settimane successive."
    },

// ---------------- CASO 22: SARCOIDOSI ----------------
    {
        id: 22,
        nome_malattia: "Sarcoidosi",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 34,
        sintomi: "Tosse secca stizzosa da 3 mesi, dispnea da sforzo, dolori articolari alle caviglie, calo visivo e fotofobia (fastidio alla luce).",
        anamnesi: "Non fumatrice. Nessuna esposizione professionale a polveri. Trattata dal medico curante per 'asma' con inalatori senza alcun beneficio.",
        note_infermiera: "La paziente presenta noduli rossi, caldi e dolenti sulla parte anteriore delle gambe (tibie). Gli occhi sono arrossati.",

        // --- LABORATORIO ---
        emocromo: "Hb 12.5 g/dL, Leucociti 4.500/mmc (Linfopenia assoluta), Piastrine 280.000/mmc.",
        chimica_clinica: "Calcio sierico 11.5 mg/dL (Ipercalcemia). Funzionalità renale ed epatica nella norma. Fosfatasi alcalina lievemente aumentata.",
        emogas: "pH 7.42, pO2 88 mmHg (Lieve ipossiemia a riposo).",
        ves_pcr: "VES 40 mm/h, PCR 1.2 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Ipercalciuria (Calcio nelle urine 24h: 350 mg).",
        autoanticorpi: "ANA negativi. ANCA negativi. Fattore Reumatoide negativo.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "ACE (Angiotensin Converting Enzyme) sierico: 110 U/L (Valore di riferimento < 60).",

        // --- IMAGING ---
        rx: "RX Torace: Slargamento mediastinico per linfoadenomegalie ilari bilaterali e simmetriche ('a patata'). Trasparenza parenchimale sostanzialmente conservata.",
        tc: "TC Torace HR: Linfoadenopatie mediastiniche e ilari bilaterali. Micronoduli a distribuzione perilinfatica lungo le scissure e i fasci bronco-vascolari.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Negativa per embolia.",
        ecografia: "Eco Addome: Epatosplenomegalia lieve. Non calcoli renali.",
        ecocardiogramma: "Normale. Non segni di ipertensione polmonare.",
        pet: "Captazione patologica intensa e simmetrica a livello dei linfonodi ilari e mediastinici.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia transbronchiale (TBNA) linfonodo mediastinico: Granulomi epitelioidi non caseificanti. Colorazione Ziehl-Neelsen per micobatteri: NEGATIVA. Colorazione Grocott (funghi): NEGATIVA.",
        endoscopia: "Broncoscopia: Mucosa bronchiale con aspetto a 'ciottolato'.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto clinico sulla tosse o sui noduli cutanei.",
        cortisone: "Miglioramento rapido della dispnea, risoluzione dell'eritema nodoso e normalizzazione della calcemia.",
        dialisi: "Riduzione temporanea della calcemia, non necessaria per funzione renale.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun effetto."
    },

// ---------------- CASO 23: ARTERITE A CELLULE GIGANTI (DI HORTON) ----------------
    {
        id: 23,
        nome_malattia: "Arterite a cellule giganti (di Horton)",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 74,
        sintomi: "Cefalea temporale sinistra lancinante e continua, ipersensibilità del cuoio capelluto (dolore anche solo a pettinarsi), dolore alla mandibola mentre mangia che la costringe a smettere (claudicatio mandibolare).",
        anamnesi: "Da circa un mese lamenta rigidità mattutina alle spalle e alle anche (Polimialgia Reumatica). Ieri ha avuto un episodio di oscuramento della vista all'occhio sinistro durato 5 minuti (amaurosi fugace).",
        note_infermiera: "L'arteria temporale sinistra appare tortuosa, ispessita e dolente alla palpazione. Polso temporale assente.",

        // --- LABORATORIO ---
        emocromo: "Hb 10.5 g/dL (Anemia normocitica), Piastrine 550.000/mmc (Trombocitosi reattiva), Leucociti 11.000/mmc.",
        chimica_clinica: "Fosfatasi Alcalina 160 U/L (Lievemente aumentata). Funzionalità renale nella norma. Glucosio 95 mg/dL.",
        emogas: "Normale.",
        ves_pcr: "VES 110 mm/h (Estremamente elevata), PCR 8.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi. ANCA negativi. Fattore Reumatoide negativo.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Rouleaux eritrocitari (impilamento dei globuli rossi dovuto all'alta VES).",
        dosaggi_specifici: "Non indicati.",

        // --- IMAGING ---
        rx: "RX Torace: Sclerosi aortica. Non addensamenti polmonari.",
        tc: "TC Encefalo: Assenza di emorragie o ischemie acute cerebrali. Ispessimento dei tessuti molli in regione temporale sinistra.",
        risonanza: "RMN Encefalo: Presenza di enhancement (impregnazione) parietale dell'arteria temporale superficiale.",
        angio: "Angio-RM vasi epiaortici: Stenosi segmentarie delle arterie vertebrali.",
        ecografia: "Eco-Doppler Arterie Temporali: Presenza di 'Segno dell'alone' (Halo sign) ipoecogeno attorno al lume arterioso (edema della parete vasale).",
        ecocardiogramma: "Ipertrofia ventricolare sinistra lieve. Aorta ascendente di dimensioni ai limiti superiori.",
        pet: "Captazione lineare lungo il decorso dell'arteria temporale, succlavia e ascellare.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Arteria Temporale (Gold Standard): Panarterite granulomatosa con infiltrato di cellule mononucleate e cellule giganti multinucleate. Frammentazione della lamina elastica interna.",
        endoscopia: "Fundus Oculi (Esame del fondo oculare): Papilla ottica pallida ed edematosa (Neuropatia Ottica Ischemica Anteriore).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sul dolore o sull'infiammazione.",
        cortisone: "Bolo di Metilprednisolone: Risoluzione della cefalea in 24 ore, normalizzazione della VES in giorni, salvataggio della vista residua.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        immunoglobuline: "Nessun beneficio aggiuntivo in acuto rispetto agli steroidi."
    },

// ---------------- CASO 24: ENCEFALITE ANTI-NMDA ----------------
    {
        id: 24,
        nome_malattia: "Encefalite anti-NMDA",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 23,
        sintomi: "Allucinazioni visive e uditive, paranoia grave, insonnia, agitazione psicomotoria alternata a catatonia (immobilità).",
        anamnesi: "Nessuna storia psichiatrica pregressa. Due settimane fa ha avuto una sindrome simil-influenzale (febbre, mal di testa). Ricoverata in Psichiatria 3 giorni fa per 'esordio psicotico acuto', trasferita in medicina per comparsa di convulsioni.",
        note_infermiera: "La paziente esegue movimenti ripetitivi e involontari con la bocca e la lingua (discinesie orofacciali / masticazione a vuoto). Pressione arteriosa e battito cardiaco sono molto instabili (disautonomia).",

        // --- LABORATORIO ---
        emocromo: "Leucociti 11.000/mmc, Hb 12.8 g/dL, Piastrine 250.000/mmc.",
        chimica_clinica: "CPK 600 U/L (lievemente aumentato per agitazione muscolare). Elettroliti nella norma.",
        emogas: "Normale.",
        ves_pcr: "VES 15 mm/h, PCR 0.8 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi, ENA negativi, Anti-TPO negativi (esclude Encefalopatia di Hashimoto).",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido. Pleocitosi linfocitaria moderata (40 cellule/mmc). Proteine lievemente aumentate (60 mg/dL). Bande oligoclonali presenti.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Anticorpi anti-recettore NMDA (GluN1) su Liquor e Siero: POSITIVI.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Encefalo: Negativa. Nessuna massa o emorragia.",
        risonanza: "RMN Encefalo: Iperintensità T2/FLAIR nei lobi temporali mediali e ippocampo, ma quadro aspecifico o addirittura normale nel 50% dei casi.",
        angio: "Negativa.",
        ecografia: "Eco Pelvi/Transvaginale: Presenza di massa annessiale destra di 4 cm a struttura complessa (cistica e solida) con calcificazioni interne.",
        ecocardiogramma: "Normale.",
        pet: "Ipermetabolismo regioni fronto-temporali.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Resezione massa ovarica (Esame Istologico): Teratoma cistico maturo contenente tessuto nervoso ectopico.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Rallentamento diffuso dell'attività di fondo. Presenza di attività 'Extreme Delta Brush' (Onde delta ritmiche con sovrapposta attività beta rapida).",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Miglioramento graduale dei sintomi neurologici dopo diversi giorni.",
        dialisi: "Nessun effetto.",
		plasmaferesi: "Scambio plasmatico: Miglioramento clinico significativo e riduzione del titolo anticorpale.",
        intubazione: "Necessaria per ipoventilazione centrale e protezione vie aeree durante le crisi convulsive.",
        farmaco_antipsicotico: "Peggioramento della rigidità muscolare e della disautonomia (rischio Sindrome Maligna da Neurolettici).",
        intervento_chirurgico: "Ovariectomia (rimozione teratoma): Accelerazione netta del recupero clinico."
    },

// ---------------- CASO 25: SINDROME DI GOODPASTURE ----------------
    {
        id: 25,
        nome_malattia: "Sindrome di Goodpasture (Malattia anti-GBM)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 29,
        sintomi: "Emottisi (tosse con espettorato rosso vivo), dispnea ingravescente anche a riposo, astenia, oliguria (riduzione della quantità di urine).",
        anamnesi: "Forte fumatore. Nessuna storia di malattie renali in famiglia. Nelle ultime due settimane ha avuto sintomi simil-influenzali trattati con sciroppo per la tosse senza beneficio.",
        note_infermiera: "Paziente pallido e tachipnoico. Saturazione O2 88% in aria ambiente. Le urine raccolte sono scarse e di colore bruno-rossastro (Coca-Cola).",

        // --- LABORATORIO ---
        emocromo: "Hb 8.5 g/dL (Anemia microcitica severa), Leucociti 12.000/mmc, Piastrine 250.000/mmc.",
        chimica_clinica: "Creatinina 5.8 mg/dL (Insufficienza Renale Acuta grave), Azotemia 110 mg/dL. Potassio 5.8 mEq/L (Iperkaliemia).",
        emogas: "pH 7.32, pO2 60 mmHg (Ipossiemia severa), pCO2 35 mmHg.",
        ves_pcr: "VES 60 mm/h, PCR 4.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteine ++, Sangue +++. Sedimento: Cilindri eritrocitari e numerosi eritrociti dismorfici.",
        esame_feci: "Le feci mostrano sangue occulto, compatibile con possibile coinvolgimento gastrointestinale.",
        autoanticorpi: "ANA negativi. ANCA negativi (importante per diagnosi differenziale con Wegener).",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Ipocromia.",
        dosaggi_specifici: "Anticorpi anti-MBG (Membrana Basale Glomerulare) sierici: POSITIVI ad alto titolo.",

        // --- IMAGING ---
        rx: "RX Torace: Infiltrati alveolari bilaterali diffusi a 'ali di farfalla', prevalentemente ai campi medi e inferiori.",
        tc: "TC Torace: Aree di consolidamento parenchimale a vetro smerigliato (ground glass) diffuse, compatibili con emorragia alveolare.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Angio-TC Polmonare: Negativa per embolia polmonare.",
        ecografia: "Eco Renale: Reni di dimensioni normali (malattia acuta) ma con corticale iperecogena.",
        ecocardiogramma: "Funzione biventricolare conservata. Nessuna valvulopatia.",
        pet: "Captazione diffusa polmonare.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Renale: Glomerulonefrite crescentica (con semilune) necrotizzante. Immunofluorescenza: Depositi LINEARI di IgG lungo la membrana basale glomerulare (Reperto patognomonico).",
        endoscopia: "Broncoscopia con BAL (Lavaggio Broncoalveolare): Liquido di lavaggio progressivamente più ematico (segno di emorragia alveolare attiva). Presenza di macrofagi carichi di emosiderina.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun miglioramento clinico o radiologico.",
        cortisone: "Bolo endovena: Arresto della progressione dell'insufficienza respiratoria.",
        dialisi: "Necessaria per gestione dell'iperkaliemia e del sovraccarico idrico (anuria).",
        intubazione: "Necessaria per insufficienza respiratoria ipossiemica acuta.",
        plasmaferesi: "Rapida riduzione del titolo anticorpale e miglioramento della prognosi renale se iniziata precocemente."
    },

// ---------------- CASO 26: PANARTERITE NODOSA ----------------
    {
        id: 26,
        nome_malattia: "Panarterite Nodosa",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 45,
        sintomi: "Dolore addominale post-prandiale diffuso, 'piede cadente' destro (inciampa camminando), febbre persistente, dolori muscolari ai polpacci, calo di peso (8kg in 2 mesi).",
        anamnesi: "Ex tossicodipendente in remisione da 10 anni. Storia pregressa di Epatite B cronica non trattata.",
        note_infermiera: "Pressione arteriosa 170/110 mmHg (Ipertensione severa). Sulla pelle delle gambe è visibile un reticolo violaceo ('Livedo reticularis') e noduli sottocutanei dolenti.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 14.500/mmc (Neutrofilia), Hb 10.5 g/dL, Piastrine 400.000/mmc.",
        chimica_clinica: "Creatinina 2.1 mg/dL, Azotemia 70 mg/dL. ALT 120 U/L, AST 90 U/L. CPK nella norma.",
        emogas: "Normale.",
        ves_pcr: "VES 85 mm/h, PCR 9.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteinuria modesta (+). Microematuria. Assenza di cilindri eritrocitari (esclude glomerulonefrite attiva).",
        autoanticorpi: "ANA negativi. ANCA (p-ANCA e c-ANCA) NEGATIVI.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "HBsAg (Antigene di superficie Epatite B): POSITIVO. HBeAg: Positivo. Carica virale HBV-DNA elevata.",

        // --- IMAGING ---
        rx: "RX Torace: Campi polmonari perfettamente liberi (assenza di infiltrati o noduli).",
        tc: "TC Addome: Infarti renali cuneiformi multipli (aree ipodense triangolari). Ispessimento delle pareti intestinali.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Angiografia Mesenterica e Renale: Stenosi segmentarie alternate a dilatazioni aneurismatiche sacciformi (aspetto a 'corona di rosario') delle arterie di medio calibro.",
        ecografia: "Eco Renale: Reni di dimensioni normali con aree di ipoperfusione corticale.",
        ecocardiogramma: "Ipertrofia ventricolare sinistra concentrica.",
        pet: "Captazione vascolare diffusa addominale.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia nodulo cutaneo/muscolare: Vasculite necrotizzante delle arterie di medio calibro con infiltrato infiammatorio misto. Risparmio di venule e capillari.",
        endoscopia: "Colonscopia: Mucosa ischemica e ulcerata a chiazze nel colon destro.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Mononeurite multipla (asimmetrica): denervazione attiva nel territorio del nervo peroneo destro.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Riduzione della febbre e dei dolori articolari, ma rischio di aumentare la replicazione virale (HBV).",
        dialisi: "Gestione dell'uremia, nessun effetto sulla patogenesi vascolare.",
        intubazione: "Non necessaria.",
        antivirale: "Lamivudina/Entecavir: Riduzione della carica virale.",
        plasmaferesi: "Miglioramento clinico rapido (rimozione immunocomplessi circolanti)."
    },

// ---------------- CASO 27: AVVELENAMENTO DA TALLIO ----------------
    {
        id: 27,
        nome_malattia: "Avvelenamento da Tallio",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 42,
        sintomi: "Dolori atroci ai piedi e alle gambe ('piedi che bruciano'), dolori addominali crampiformi, stipsi ostinata, perdita di capelli a ciocche.",
        anamnesi: "I sintomi sono iniziati 2 settimane fa con nausea e vomito, trattati come gastroenterite. Lavora in un laboratorio chimico universitario (accesso a reagenti).",
        note_infermiera: "Il paziente urla se le lenzuola sfiorano i piedi (allodinia tattile estrema). Ho trovato molti capelli sul cuscino stamattina. Presenti linee bianche trasversali sulle unghie delle mani.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.0 g/dL, Leucociti 9.000/mmc, Piastrine 220.000/mmc.",
        chimica_clinica: "Potassio 3.2 mEq/L (Ipokaliemia lievissima). Creatinina 1.1 mg/dL. ALT 60 U/L, AST 55 U/L.",
        emogas: "Normale.",
        ves_pcr: "VES 12 mm/h, PCR 0.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteinuria lieve.",
        autoanticorpi: "ANA negativi. Anti-Gangliosidi negativi (per differenziarla da Guillain-Barré).",
        tossicologico: "Screening standard urine (Oppiacei, Coca, THC, BZO, Anfetamine): NEGATIVO. Metalli pesanti sangue (Piombo, Mercurio, Arsenico): NEGATIVI.",
        esame_liquor: "Limpido. Proteine 80 mg/dL (Aumentate). Cellule 2/mmc. (Dissociazione albumino-citologica).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Tallio urinario (24h): 4500 µg/L (Valore normale < 1 µg/L). Tallio ematico: 800 µg/L.",

        // --- IMAGING ---
        rx: "RX Addome: Ipotonia intestinale con stasi fecale.",
        tc: "TC Encefalo: Negativa.",
        risonanza: "RMN Encefalo e Midollo: Assenza di lesioni demielinizzanti o compressive.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Steatosi epatica lieve.",
        ecocardiogramma: "Tachicardia sinusale a 110 bpm. Funzione di pompa normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Analisi capello (Forede): Presenza di depositi di Tallio nella matrice.",
        endoscopia: "Gastroscopia: Gastrite aspecifica.",
        paracentesi: "Nessun liquido.",
        eeg: "Attività lenta diffusa aspecifica.",
        emg: "Neuropatia assonale sensitivo-motoria distale (ampiezza potenziali ridotta). Fibrillazione muscolare assente.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto sul dolore neuropatico.",
        dialisi: "Emodialisi: Riduzione della concentrazione plasmatica del metallo (efficace ma non rimuove quello nei tessuti).",
        intubazione: "Non necessaria.",
        farmaco_antidoto: "Blu di Prussia (per via orale): Aumento progressivo dell'eliminazione del metallo nelle feci e miglioramento lento della neuropatia."
    },

// ---------------- CASO 28: INTOSSICAZIONE DA MONOSSIDO DI CARBONIO ----------------
    {
        id: 28,
        nome_malattia: "Intossicazione da Monossido di Carbonio",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 72,
        sintomi: "Cefalea pulsante diffusa ('cerchio alla testa'), nausea, vertigini, confusione mentale, debolezza muscolare improvvisa.",
        anamnesi: "Trovata in stato confusionale dalla figlia che era passata a trovarla. La paziente riferisce di aver acceso il braciere in casa perché 'la caldaia si è rotta'. Anche il gatto è stato trovato morto.",
        note_infermiera: "Paziente soporosa ma risvegliabile. Colorito della pelle e delle mucose insolitamente roseo ('Rosso Ciliegia'). Saturazione O2 al dito: 100% in aria ambiente.",

        // --- LABORATORIO ---
        emocromo: "Hb 14.0 g/dL, Leucociti 12.000/mmc (Leucocitosi da stress).",
        chimica_clinica: "Troponina I: 0.15 ng/mL (Lieve rialzo da sofferenza miocardica ipossica). CPK 300 U/L. Glucosio 130 mg/dL.",
        emogas: "pH 7.28 (Acidosi metabolica). pO2 95 mmHg (Ossigeno disciolto normale). pCO2 38 mmHg. Lattati 6.5 mmol/L (Ipossia tissutale grave). HCO3 16 mEq/L.",
        ves_pcr: "Normali.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo per alcool e droghe.",
        esame_liquor: "Limpido, pressione normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Carbossiemoglobina (COHb) su sangue arterioso: 35% (Valore normale < 1.5% nei non fumatori).",

        // --- IMAGING ---
        rx: "RX Torace: Negativo. Campi polmonari trasparenti.",
        tc: "TC Encefalo: Ipodensità bilaterale simmetrica dei nuclei della base (Globo Pallido). Assenza di emorragie.",
        risonanza: "RMN Encefalo: Iperintensità T2/FLAIR nel Globo Pallido bilaterale (segno di necrosi ipossica selettiva).",
        angio: "Negativa.",
        ecografia: "Normale.",
        ecocardiogramma: "Ipocinesia diffusa lieve. FE 50%.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Onde lente diffuse delta/theta (Encefalopatia metabolica).",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto.",
        dialisi: "Nessun effetto sulla rimozione del CO.",
        intubazione: "Necessaria in caso di coma (GCS < 8) per garantire ventilazione.",
        ossigeno_alta_concentrazione: "Somministrazione O2 100% in maschera (Reservoir): Riduzione dell'emivita della Carbossiemoglobina da 320 minuti a 80 minuti. Miglioramento clinico.",
        camera_iperbarica: "Riduzione dell'emivita della Carbossiemoglobina a 20 minuti. Prevenzione della sindrome neurologica tardiva."
    },

// ---------------- CASO 29: SINDROME SEROTONINERGICA ----------------
    {
        id: 29,
        nome_malattia: "Sindrome Serotoninergica",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 42,
        sintomi: "Agitazione psicomotoria estrema, tremori diffusi, sudorazione profusa (diaforesi), diarrea, confusione mentale.",
        anamnesi: "Paziente in terapia cronica con Paroxetina (SSRI) per depressione maggiore. Da 2 giorni assume Tramadolo per una lombalgia acuta.",
        note_infermiera: "Febbre alta (39.8°C). Le pupille sono dilatate (midriasi) e poco reagenti. La paziente ha scatti muscolari continui alle gambe.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 14.000/mmc (Leucocitosi), Hb 13.5 g/dL, Piastrine 280.000/mmc.",
        chimica_clinica: "CPK 3.500 U/L (Rabdomiolisi significativa). Creatinina 1.4 mg/dL. Sodio 140 mEq/L. Potassio 4.0 mEq/L.",
        emogas: "pH 7.30, pCO2 35 mmHg, HCO3 18 mEq/L (Acidosi metabolica lattacida).",
        ves_pcr: "VES 10 mm/h, PCR 0.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Urine scure. Presenza di Mioglobina. Assenza di nitriti o leucociti.",
        autoanticorpi: "Negativi.",
        tossicologico: "Screening droghe d'abuso negativo (esclude cocaina/amfetamine).",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Livelli sierici di farmaci antidepressivi nel range terapeutico (non è un sovradosaggio, è un'interazione).",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Encefalo: Negativa.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Negativa.",
        ecografia: "Vescica vuota. Reni regolari.",
        ecocardiogramma: "Tachicardia sinusale (130 bpm). Cuore ipercinetico.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        endoscopia: "Non indicata.",
        paracentesi: "Nessun liquido.",
        eeg: "Attività rapida diffusa e disorganizzata.",
        emg: "Attività muscolare continua involontaria.",
        esame_neurologico_specifico: "Iperreflessia osteotendinea marcata (più agli arti inferiori che superiori). Clono patellare e achilleo inesauribile. Babinski bilaterale positivo.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla febbre.",
        cortisone: "Nessun effetto.",
        dialisi: "Gestione dell'insufficienza renale da mioglobinuria, inefficace per rimuovere i farmaci lipofili.",
        intubazione: "Necessaria per paralisi muscolare indotta (se ipertermia > 41°C) e sedazione profonda.",
        farmaco_benzodiazepine: "Riduzione parziale dell'agitazione e della rigidità muscolare.",
        farmaco_ciproeptadina: "Somministrazione per sondino nasogastrico: Graduale risoluzione dell'ipertermia e normalizzazione del tono muscolare nelle 24 ore successive."
    },

// ---------------- CASO 30: TIREOTOSSICOSI (TEMPESTA TIROIDEA) ----------------
    {
        id: 30,
        nome_malattia: "Tempesta Tiroidea",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 34,
        sintomi: "Agitazione psicomotoria, delirio, palpitazioni violente, vomito profuso, diarrea, intolleranza estrema al caldo.",
        anamnesi: "Riferisce calo ponderale di 10 kg negli ultimi 2 mesi nonostante polifagia (mangia molto). Ha smesso di prendere 'una pillola bianca' prescritta dal medico 3 settimane fa.",
        note_infermiera: "Paziente febbrile (40.5°C). La pelle è calda, umida e molto sudata. Tremore fine delle mani. Sguardo sbarrato con retrazione della palpebra superiore.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 13.000/mmc (Leucocitosi neutrofila). Hb 12.5 g/dL.",
        chimica_clinica: "Glucosio 160 mg/dL. Calcio 11.2 mg/dL (Ipercalcemia lieve). AST 60 U/L, ALT 55 U/L. Colesterolo Totale 90 mg/dL (Basso).",
        emogas: "pH 7.48, pCO2 28 mmHg (Alcalosi respiratoria da iperventilazione).",
        ves_pcr: "VES 20 mm/h.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Ab anti-Recettore TSH (TRAb): POSITIVI.",
        tossicologico: "Negativo per cocaina/anfetamine.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "TSH < 0.01 mIU/L (Soppresso). fT3 e fT4 > 100 pmol/L (Valori superiori alla scala di misurazione).",

        // --- IMAGING ---
        rx: "RX Torace: Lieve congestione ilare (iniziale scompenso). Ombra cardiaca nei limiti.",
        tc: "TC Encefalo: Negativa per lesioni acute.",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Negativa.",
        ecografia: "Eco Collo/Tiroide: Ghiandola tiroidea diffusamente ingrandita, ipoecogena. Al color-Doppler: ipervascolarizzazione massiva diffusa ('Inferno tiroideo').",
        ecocardiogramma: "Frazione di Eiezione 75% (Cuore iperdinamico). Insufficienza mitralica lieve funzionale.",
        pet: "Non indicata.",
        elettrocardiogramma: "Fibrillazione Atriale a elevata risposta ventricolare (FC 170-180 bpm).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non indicata.",
        endoscopia: "Non indicata.",
        paracentesi: "Nessun liquido.",
        eeg: "Attività rapida diffusa (Beta) mista a onde lente.",
        emg: "Tremore fisiologico esaltato.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla frequenza cardiaca o sulla temperatura.",
        farmaco_aspirina: "PEGGIORAMENTO: Aumento della quota libera di ormoni tiroidei (spiazzamento dalle proteine di legame).",
        farmaco_betabloccante: "Propranololo EV: Rapida riduzione della frequenza cardiaca e controllo del tremore.",
        farmaco_antitiroideo: "Metimazolo/Propiltiouracile: Blocco della sintesi ormonale (effetto clinico ritardato).",
        cortisone: "Idrocortisone: Riduzione della conversione periferica di T4 in T3 e supporto surrenalico. Miglioramento clinico.",
        intubazione: "Necessaria in caso di scompenso cardiaco refrattario o coma."
    },

// ---------------- CASO 31: PORPORA TROMBOTICA TROMBOCITOPENICA (TTP) ----------------
    {
        id: 31,
        nome_malattia: "Porpora Trombotica Trombocitopenica (TTP)",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 36,
        sintomi: "Cefalea intensa, confusione mentale fluttuante (a momenti è lucida, poi disorientata), comparsa di lividi spontanei senza traumi, febbre.",
        anamnesi: "Nessuna patologia nota. Riferisce estrema stanchezza nell'ultima settimana.",
        note_infermiera: "La paziente presenta innumerevoli puntini rossi (petecchie) sugli stinchi e sugli avambracci. Ha avuto un episodio di afasia transitoria (non riusciva a parlare) durato 10 minuti, ora risolto.",

        // --- LABORATORIO ---
        emocromo: "Hb 7.8 g/dL, Piastrine 12.000/mmc (Gravissima trombocitopenia), Leucociti 10.500/mmc.",
        chimica_clinica: "LDH 1800 U/L (Molto aumentato). Bilirubina Totale 3.5 mg/dL (Indiretta 2.9). Creatinina 1.6 mg/dL. Aptoglobina < 10 mg/dL.",
        emogas: "Normale.",
        ves_pcr: "VES 20 mm/h.",
        coagulazione: "PT e aPTT: NORMALI. Fibrinogeno normale.",
        emocoltura: "Negativa.",
        esame_urine: "Ematuria microscopica, emoglobinuria.",
        esame_feci: "Le feci risultano positive per sangue occulto, possibile segno di ischemia intestinale secondaria.",
        autoanticorpi: "Test di Coombs Diretto e Indiretto: NEGATIVO.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Presenza massiva di Schistociti (>1% dei globuli rossi).",
        dosaggi_specifici: "Attività ADAMTS13: < 5% (Grave deficit). Presenza di inibitore anti-ADAMTS13.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Encefalo: Negativa. Nessuna emorragia.",
        risonanza: "RMN Encefalo: Aree puntiformi iperintense in T2 nella sostanza bianca profonda (microischemie), ma spesso negativa in fase acuta.",
        angio: "Negativa.",
        ecografia: "Reni di dimensioni e morfologia normali.",
        ecocardiogramma: "Normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia midollare: Iperplasia eritroide e megacariocitaria (il midollo funziona e cerca di compensare).",
        endoscopia: "Non indicata.",
        paracentesi: "Nessun liquido.",
        eeg: "Rallentamento diffuso.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Lieve miglioramento transitorio, non risolutivo.",
        dialisi: "Non necessaria per il volume, ma non risolve la patologia di base.",
        intubazione: "Necessaria solo se il livello di coscienza decade (GCS < 8).",
        trasfusione_piastrine: "PEGGIORAMENTO DRAMMATICO: Aumento della confusione mentale, comparsa di nuovi deficit neurologici, febbre in aumento (alimenta la microtrombosi).",
        plasmaferesi: "Plasma Exchange (PEX): Rapida risalita della conta piastrinica e normalizzazione dell'LDH nelle 24-48 ore successive."
    },

// ---------------- CASO 32: SINDROME DA SCHIACCIAMENTO (RABDOMIOLISI TRAUMATICA) ----------------
    {
        id: 32,
        nome_malattia: "Sindrome da Schiacciamento",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 35,
        sintomi: "Dolore atroce alla gamba destra, insensibilità al piede (parestesia), debolezza generale, nausea.",
        anamnesi: "Operaio edile. È rimasto con la gamba incastrata sotto una trave di cemento crollata per 6 ore. È stato estratto dai vigili del fuoco 2 ore fa.",
        note_infermiera: "La gamba destra appare gonfia, tesa, dura al tatto ('lignea') e fredda. Il paziente ha urinato poco fa: le urine sono color marrone scuro ('Coca-Cola').",

        // --- LABORATORIO ---
        emocromo: "Hb 16.0 g/dL (Emoconcentrazione da disidratazione), Leucociti 15.000/mmc, Piastrine 200.000/mmc.",
        chimica_clinica: "CPK (Creatinchinasi): 85.000 U/L (Valore massivo). Potassio 7.2 mEq/L (Iperkaliemia grave). Creatinina 2.8 mg/dL (Insufficienza renale acuta). Calcio 7.0 mg/dL (Ipocalcemia da deposizione nei muscoli).",
        emogas: "pH 7.25, HCO3 14 mEq/L (Acidosi metabolica). Lattati 5.0 mmol/L.",
        ves_pcr: "PCR 10 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Stick: Sangue +++ (Falso positivo per emoglobina). Sedimento: Rari eritrociti (La positività dello stick è dovuta alla Mioglobina).",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Mioglobina sierica e urinaria: Valori > 20.000 ng/mL.",

        // --- IMAGING ---
        rx: "RX Gamba DX: Frattura composta di tibia e perone.",
        tc: "TC Arto Inferiore: Edema massivo dei compartimenti muscolari della loggia anteriore e posteriore della gamba. Assenza di flusso arterioso distale.",
        risonanza: "RMN Arto: Segnale di edema diffuso e necrosi muscolare.",
        angio: "Angio-TC: Compressione ab estrinseco dell'arteria tibiale (i muscoli gonfi schiacciano i vasi).",
        ecografia: "Eco color-Doppler gamba DX: Flusso arterioso assente a valle del ginocchio. Tessuti sottocutanei ispessiti.",
        ecocardiogramma: "Normale contrattilità, onde T appuntite all'ECG monitorato.",
        pet: "Captazione muscolare diffusa.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Muscolare: Necrosi massiva delle fibre muscolari, perdita della striatura, edema interstiziale.",
        endoscopia: "Mucosa gastrica regolare.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Silenzio elettrico sui muscoli della loggia anteriore della gamba (necrosi/denervazione ischemica).",
        misurazione_pressione_compartimentale: "Pressione intracompartimentale gamba DX: 65 mmHg (Valore critico per sindrome compartimentale).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessuna variazione sui valori di CPK o sulla funzione renale.",
        cortisone: "Nessun effetto significativo sull'edema muscolare ischemico.",
        dialisi: "Rapida correzione dell'iperkaliemia e dell'acidosi metabolica. Supporto alla funzione renale.",
        intubazione: "Sedazione necessaria per l'intervento chirurgico.",
        fluidoterapia: "Aumento della diuresi e diluizione parziale della mioglobina.",
        intervento_chirurgico: "Fasciotomia decompressiva: Ripristino del flusso arterioso distale, riduzione della pressione compartimentale, fuoriuscita di tessuto muscolare necrotico."
    },

// ---------------- CASO 33: AMILOIDOSI SISTEMICA (AL) ----------------
    {
        id: 33,
        nome_malattia: "Amiloidosi Sistemica (AL)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 68,
        sintomi: "Dispnea da sforzo ingravescente, edemi (gonfiore) importanti alle gambe fino all'inguine, astenia profonda, difficoltà a deglutire (sente la lingua 'grossa').",
        anamnesi: "Storia di Sindrome del Tunnel Carpale bilaterale operata 2 anni fa. In cura per 'Scompenso cardiaco con funzione conservata' ma non risponde ai farmaci standard.",
        note_infermiera: "Ho notato ematomi violacei attorno a entrambi gli occhi ('Occhi di procione') comparsi spontaneamente. La lingua presenta le impronte dei denti sui bordi (Macroglossia).",

        // --- LABORATORIO ---
        emocromo: "Hb 10.5 g/dL (Anemia normocitica), Leucociti 6.000/mmc, Piastrine 180.000/mmc.",
        chimica_clinica: "Creatinina 1.9 mg/dL. Albumina sierica 2.5 g/dL (Bassa). Fosfatasi Alcalina 250 U/L (Aumentata). NT-proBNP > 5000 pg/mL (Scompenso cardiaco).",
        emogas: "Normale.",
        ves_pcr: "VES 35 mm/h. PCR 0.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteine ++++ (Proteinuria massiva: 6g/24h). Urine schiumose. Sedimento inattivo.",
        esame_feci: "Le feci contengono elevate quantità di grassi non assorbiti, compatibile con insufficienza digestiva e malassorbimento.",
        autoanticorpi: "ANA negativi. Fattore Reumatoide negativo.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Rouleaux eritrocitari.",
        dosaggi_specifici: "Elettroforesi sierica: Picco monoclonale (Componente M) in zona gamma. Catene leggere libere nel siero (FLC): Rapporto Lambda/Kappa 50:1 (Fortemente alterato).",

        // --- IMAGING ---
        rx: "RX Torace: Versamento pleurico bilaterale. Congestione polmonare.",
        tc: "TC Torace/Addome: Linfoadenomegalie aspecifiche. Fegato e milza aumentati di volume.",
        risonanza: "RMN Cuore: Enhancement tardivo (LGE) subendocardico diffuso e circonferenziale (non segue i territori coronarici). T1 mapping nativo aumentato.",
        angio: "Coronarie pervie (esclude infarto ischemico).",
        ecografia: "Eco Addome: Epatomegalia e splenomegalia. Reni aumentati di volume con ecogenicità corticale aumentata.",
        ecocardiogramma: "Ipertrofia ventricolare sinistra concentrica severa (SIV 18mm) con aspetto miocardico 'granular sparkling' (brillante/granulare). Atri dilatati.",
        elettrocardiogramma: "Microvoltaggi diffusi dei complessi QRS (Discrepanza fondamentale: il cuore appare grosso all'eco, ma elettricamente è debole). Pseudoinfarto anteriore.",
        pet: "Captazione miocardica diffusa (se usato tracciante specifico per amiloide ossea o FDG in fase avanzata).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia grasso periombelicale (Agoaspirato): Materiale amorfo extracellulare. Colorazione Rosso Congo: Positiva per Birifrangenza verde-mela alla luce polarizzata.",
        endoscopia: "Gastroscopia: Ispessimento delle pliche gastriche.",
        paracentesi: "Trasudato.",
        eeg: "Normale.",
        emg: "Sindrome del tunnel carpale bilaterale. Polineuropatia assonale sensitiva distale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Riduzione temporanea dell'edema (effetto mineralcorticoide negativo se non gestito). Parte della terapia chemioterapica.",
        dialisi: "Gestione del sovraccarico idrico e dell'azotemia. Nessuna rimozione delle fibrille dai tessuti.",
        intubazione: "Difficoltosa a causa della macroglossia (lingua ingrossata) e rigidità cervicale.",
        farmaco_betabloccante: "Peggioramento dell'ipotensione e della fatica (il cuore rigido ha bisogno della frequenza per mantenere la gittata, bloccandola crolla la portata).",
        chemioterapia: "Bortezomib/Daratumumab: Riduzione delle catene leggere nel sangue e arresto della deposizione di nuova amiloide."
    },

// ---------------- CASO 34: MALATTIA DI STILL DELL'ADULTO ----------------
    {
        id: 34,
        nome_malattia: "Malattia di Still dell'adulto",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 28,
        sintomi: "Febbre molto alta (>39°C) con brividi che si presenta una volta al giorno (solitamente la sera), mal di gola intenso (faringodinia), dolori articolari a polsi e ginocchia.",
        anamnesi: "In buona salute fino a 3 settimane fa. Ha già fatto 2 cicli di antibiotici prescritti dal medico di base senza alcun risultato.",
        note_infermiera: "Durante il picco febbrile compare un rash cutaneo maculare color 'rosa salmone' sul tronco e sulle cosce, che scompare completamente quando la febbre scende.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 22.000/mmc (Leucocitosi neutrofila marcata). Hb 10.2 g/dL. Piastrine 450.000/mmc.",
        chimica_clinica: "ALT 180 U/L, AST 160 U/L. LDH 900 U/L. Fibrinogeno 600 mg/dL.",
        emogas: "Normale.",
        ves_pcr: "VES 100 mm/h. PCR 22.0 mg/dL.",
        emocoltura: "Negativa (ripetuta 3 volte).",
        esame_urine: "Proteinuria lieve.",
        autoanticorpi: "ANA negativi. Fattore Reumatoide negativo. ANCA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile.",
        striscio_sangue: "Granulociti neutrofili con granulazioni tossiche. Assenza di blasti.",
        dosaggi_specifici: "Ferritina sierica: 12.500 ng/mL. Frazione glicosilata della ferritina < 20%.",

        // --- IMAGING ---
        rx: "RX Torace: Versamento pleurico bilaterale lieve. Ombra cardiaca ai limiti superiori.",
        tc: "TC Total Body: Linfoadenomegalie multiple aspecifiche (collo, ascelle, mediastino). Epatosplenomegalia omogenea. Non masse solide o ascessi.",
        risonanza: "Non indicata.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Milza ingrandita (16 cm). Fegato ingrandito con ecostruttura conservata.",
        ecocardiogramma: "Versamento pericardico circonferenziale di 10mm senza segni di tamponamento.",
        pet: "Captazione diffusa midollare, splenica e linfonodale (reattiva).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Midollare: Iperplasia granulocitaria (midollo reattivo). Assenza di cellule neoplastiche o leishmania. Biopsia cutanea: Infiltrato infiammatorio perivascolare aspecifico con neutrofili.",
        endoscopia: "Faringoscopia: Iperemia diffusa della faringe senza essudato purulento.",
        paracentesi: "Nessun liquido accessibile.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Persistenza dei picchi febbrili e del quadro clinico.",
        cortisone: "Metilprednisolone EV: Defervescenza rapida (scomparsa febbre in 12 ore) e netto miglioramento dei dolori articolari.",
        dialisi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        farmaco_fans: "Indometacina: Controllo parziale della febbre, persistenza dell'artrite.",
        farmaco_biologico: "Anakinra (Anti-IL1): Remissione completa dei sintomi in caso di cortico-resistenza."
    },

// ---------------- CASO 35: MIASTENIA GRAVIS ----------------
    {
        id: 35,
        nome_malattia: "Miastenia Gravis",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 26,
        sintomi: "Visione doppia (diplopia) che compare soprattutto la sera, palpebra sinistra cadente (ptosi), difficoltà a masticare cibi duri (si stanca la mandibola), voce che diventa nasale dopo aver parlato a lungo.",
        anamnesi: "I sintomi sono fluttuanti: al mattino sta bene, peggiora drasticamente con la fatica e lo stress. Nessun trauma recente.",
        note_infermiera: "La paziente sembra 'annoiata' o assonnata a causa delle palpebre semichiuse. Se le chiedo di guardare in alto per 60 secondi, la palpebra cade progressivamente coprendo la pupilla.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.2 g/dL, Leucociti 6.500/mmc, Piastrine 240.000/mmc.",
        chimica_clinica: "CPK nella norma (differenza fondamentale con le miositi). Elettroliti e funzionalità tiroidea (TSH) nella norma.",
        emogas: "pH 7.38, pCO2 42 mmHg (Scambi gassosi conservati a riposo).",
        ves_pcr: "VES 5 mm/h. PCR negativa.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA positivi a basso titolo (1:80).",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Anticorpi anti-Recettore Acetilcolina (AChR): POSITIVI. Anticorpi anti-MuSK: Negativi.",

        // --- IMAGING ---
        rx: "RX Torace: Slargamento del mediastino anteriore.",
        tc: "TC Torace: Presenza di massa solida lobulata nel mediastino anteriore (sospetto Timoma). Parenchima polmonare indenne.",
        risonanza: "RMN Encefalo: Orbite e parenchima cerebrale nella norma (Esclude ictus o lesioni occupanti spazio).",
        angio: "Negativa.",
        ecografia: "Normale.",
        ecocardiogramma: "Normale.",
        pet: "Captazione mediastinica anteriore.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia massa mediastinica: Timoma corticale linfocitico.",
        endoscopia: "Deglutizione con videofluoroscopia: Ristagno di cibo nei seni piriformi, aspirazione silente dopo affaticamento.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Stimolazione ripetitiva a bassa frequenza (3Hz): Decremento dell'ampiezza del potenziale d'azione muscolare composto (CMAP) > 10% (Segno di esaurimento della placca neuromuscolare).",
        test_del_ghiaccio: "Applicazione di ghiaccio sulla palpebra per 2 minuti: Risoluzione completa e transitoria della ptosi.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Somministrazione di Gentamicina/Ciprofloxacina: Peggioramento acuto della debolezza muscolare e comparsa di dispnea (Crisi miastenica iatrogena).",
        cortisone: "Peggioramento transitorio iniziale, seguito da miglioramento graduale dopo settimane.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria se la capacità vitale forzata scende sotto 20 ml/kg (Crisi respiratoria).",
        farmaco_inibitore_acetilcolinesterasi: "Piridostigmina (Mestinon): Miglioramento rapido e significativo della forza muscolare e risoluzione della ptosi in 30-60 minuti.",
        immunoglobuline: "Miglioramento della forza muscolare dopo 4-5 giorni."
    },

// ---------------- CASO 36: EMOGLOBINURIA PAROSSISTICA NOTTURNA (EPN) ----------------
    {
        id: 36,
        nome_malattia: "Emoglobinuria Parossistica Notturna (EPN)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 33,
        sintomi: "Dolore addominale crampiforme ricorrente, stanchezza estrema, episodi di 'urine nere' soprattutto al risveglio, impotenza erettile.",
        anamnesi: "Storia di anemie recidivanti trattate con ferro senza successo. Un episodio pregresso di trombosi venosa profonda alla gamba sinistra a 28 anni.",
        note_infermiera: "Le prime urine del mattino raccolte nel pappagallo erano color caffè scuro. Quelle raccolte nel pomeriggio sono diventate giallo carico, più limpide.",

        // --- LABORATORIO ---
        emocromo: "Hb 8.2 g/dL, Reticolociti aumentati (180.000/mmc). Leucociti 3.500/mmc (Leucopenia lieve). Piastrine 90.000/mmc (Trombocitopenia).",
        chimica_clinica: "LDH 2800 U/L (Valore critico). Bilirubina Totale 3.8 mg/dL (Indiretta 3.2). Aptoglobina < 7 mg/dL (Indosabile). Ferritina 15 ng/mL (Bassa).",
        emogas: "Normale.",
        ves_pcr: "VES 5 mm/h. PCR 0.1 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Sangue ++++ (Stick fortemente positivo). Sedimento: Assenza di eritrociti (Discrepanza emoglobinuria/ematuria). Presenza di emosiderina urinaria.",
        autoanticorpi: "Test di Coombs Diretto e Indiretto: NEGATIVI.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Policromasia. Assenza di schistociti (esclude cause meccaniche come TTP).",
        dosaggi_specifici: "Citometria a flusso (sangue periferico): Assenza delle proteine ancorate al GPI (CD55 e CD59) sul 60% dei granulociti e dei globuli rossi.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Addome con MdC: Epatomegalia con disomogeneità del parenchima (fegato a noce moscata). Difetto di riempimento nella vena sovraepatica destra e nella vena porta (Trombosi venosa splancnica/Sindrome di Budd-Chiari).",
        risonanza: "RMN Encefalo: Negativa.",
        angio: "Conferma trombosi parziale della vena porta.",
        ecografia: "Eco Doppler Addome: Flusso assente/rallentato nelle vene sovraepatiche.",
        ecocardiogramma: "Pressioni polmonari lievemente aumentate (rischio microembolie).",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Midollare: Iperplasia della serie eritroide (tentativo di compenso). Cellularità conservata.",
        endoscopia: "Varici esofagee F1 (iniziale ipertensione portale).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun miglioramento dell'emolisi o dell'Hb.",
        dialisi: "Non indicata.",
        intubazione: "Non necessaria.",
        ferro_supplementare: "Aumento della reticolocitosi, ma possibile scatenamento di emolisi acuta (il ferro stimola la produzione di globuli rossi difettosi che vengono subito distrutti).",
        farmaco_biologico: "Eculizumab (Anti-C5): Cessazione rapida dell'emoglobinuria (urine chiare in 24h) e stabilizzazione dell'emoglobina.",
        anticoagulante: "Eparina: Stabilizzazione della trombosi portale."
    },

// ---------------- CASO 37: SINDROME DA CARCINOIDE ----------------
    {
        id: 37,
        nome_malattia: "Sindrome da Carcinoide",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 58,
        sintomi: "Diarrea acquosa esplosiva (fino a 10 scariche al giorno), vampate di calore improvvise al volto e al collo (flushing) che durano pochi minuti, respiro sibilante, gonfiore alle gambe.",
        anamnesi: "Sintomi presenti da mesi, diagnosticati erroneamente come 'Colon Irritabile' e 'Attacchi di panico'. Riferisce che gli attacchi peggiorano se beve vino rosso o mangia formaggi stagionati.",
        note_infermiera: "Durante la visita il paziente è diventato improvvisamente rosso violaceo in viso e sul petto. La pressione arteriosa è scesa a 90/60 mmHg durante l'episodio.",

        // --- LABORATORIO ---
        emocromo: "Hb 13.0 g/dL, Leucociti 6.000/mmc, Piastrine 250.000/mmc.",
        chimica_clinica: "Elettroliti: Ipokaliemia lieve (Potassio 3.3 mEq/L da diarrea). Funzionalità epatica: GGT e Fosfatasi Alcalina aumentate (2x norma). Bilirubina nella norma.",
        emogas: "pH 7.42, HCO3 20 mEq/L (Lieve acidosi metabolica ipercloremica).",
        ves_pcr: "VES 10 mm/h. PCR negativa.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Acido 5-idrossi-indolacetico (5-HIAA) urinario 24h: 180 mg (Valore normale < 10 mg). Cromogranina A sierica: 1200 ng/mL (Marcatamente aumentata).",

        // --- IMAGING ---
        rx: "RX Torace: Campi polmonari liberi. Cuore di dimensioni ai limiti.",
        tc: "TC Addome con MdC: Lesione solida mesenterica di 3 cm con calcificazioni e reazione desmoplastica (raggrinzimento) circostante. Multiple lesioni focali epatiche ipervascolari (metastasi).",
        risonanza: "RMN Fegato: Conferma multiple lesioni secondarie.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Fegato metastatico.",
        ecocardiogramma: "Ventricolo sinistro normale. Ventricolo destro dilatato. Valvola Tricuspide: Lembi ispessiti, rigidi e retratti con mancata coaptazione (insufficienza severa). Valvola Polmonare: Stenosi lieve. Sezioni sinistre indenni.",
        pet: "PET con 68Ga-DOTATATE: Captazione intensa (espressione recettori somatostatina) a livello della massa ileale e delle lesioni epatiche.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia epatica: Tumore neuroendocrino ben differenziato (NET G2). Immunoistochimica: Cromogranina A +, Sinaptofisina +, Ki-67 5%.",
        endoscopia: "Colonscopia: Polipo sessile nell'ileo terminale (sospetto tumore primitivo).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla diarrea o sul flushing.",
        cortisone: "Nessun effetto significativo.",
        dialisi: "Nessun effetto.",
        intubazione: "Rischio di broncospasmo severo durante l'induzione.",
        //manovre_addominali: "La palpazione profonda del fegato scatena un violento episodio di flushing e ipotensione (rilascio massivo di mediatori).",
        farmaco_octreotide: "Somministrazione analogo della Somatostatina: Rapida scomparsa del flushing e arresto della diarrea.",
        farmaco_adrenalina: "PEGGIORAMENTO: Ipotensione paradossa e peggioramento del flushing (stimola il rilascio di sostanze vasoattive dal tumore)."
    },

// ---------------- CASO 38: ENDOCARDITE BATTERICA SUBACUTA ----------------
    {
        id: 38,
        nome_malattia: "Endocardite Batterica Subacuta",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 55,
        sintomi: "Febbricola persistente (37.5°C - 38°C) da un mese, stanchezza ingravescente, calo di peso, sudorazioni notturne, dolori muscolari vaghi.",
        anamnesi: "Portatore di protesi valvolare biologica (impiantata 4 anni fa) o storia di febbre reumatica. Riferisce di aver subito un'estrazione dentaria complicata 6 settimane fa senza profilassi antibiotica.",
        note_infermiera: "Paziente pallido. Ho notato delle piccole linee scure sotto le unghie delle mani (emorragie a scheggia) e dei nodulini rossi dolenti sui polpastrelli.",

        // --- LABORATORIO ---
        emocromo: "Hb 10.5 g/dL (Anemia da disordine cronico), Leucociti 12.500/mmc (Lieve leucocitosi), Piastrine 150.000/mmc.",
        chimica_clinica: "Creatinina 1.4 mg/dL (Sofferenza renale lieve da microemboli/complesso immune). LDH lievemente aumentato. PCR 4.5 mg/dL.",
        emogas: "Normale.",
        ves_pcr: "VES 55 mm/h (Aumentata).",
        emocoltura: "POSITIVA (3 flaconi su 3): Crescita di Streptococcus viridans (o Enterococco).",
        esame_urine: "Ematuria microscopica (Sangue ++).",
        autoanticorpi: "Fattore Reumatoide POSITIVO (Falso positivo frequente nell'endocardite cronica).",
        tossicologico: "Negativo.",
        esame_liquor: "Normale (o lieve pleocitosi se embolia settica cerebrale asintomatica).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Complemento C3 e C4 ridotti (Glomerulonefrite da immunocomplessi).",

        // --- IMAGING ---
        rx: "RX Torace: Lieve congestione polmonare. Ombra cardiaca nei limiti.",
        tc: "TC Total Body: Infarti splenici (milza) e renali cuneiformi (segni di embolizzazione sistemica).",
        risonanza: "RMN Encefalo: Multiple piccole aree ischemiche puntiformi ('shower embolico').",
        angio: "Negativa per aneurismi micotici al momento.",
        ecografia: "Eco Addome: Splenomegalia.",
        ecocardiogramma: "Ecocardiogramma Transesofageo (TEE): Presenza di vegetazione mobile di 8mm sulla valvola mitrale (o sulla protesi). Rigurgito valvolare moderato.",
        pet: "Captazione focale a livello della valvola cardiaca (utile se l'eco è dubbia su protesi).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia lesione cutanea (Nodulo di Osler): Vasculite da immunocomplessi.",
        endoscopia: "Fondo oculare: Presenza di Macchie di Roth (emorragie retiniche a centro pallido).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Terapia mirata (es. Penicillina + Gentamicina): Defervescenza lenta (3-4 giorni) e sterilizzazione delle emocolture successive.",
        cortisone: "Nessun effetto sull'infezione, possibile mascheramento della febbre.",
        dialisi: "Non necessaria in acuto.",
        intubazione: "Necessaria solo in caso di scompenso cardiaco acuto da rottura valvolare (edema polmonare).",
        anticoagulante: "Rischio elevato di trasformazione emorragica degli emboli cerebrali (da usare con estrema cautela)."
    },

// ---------------- CASO 39: MORBO DI ADDISON ----------------
    {
        id: 39,
        nome_malattia: "Morbo di Addison (Insufficienza Surrenalica Primaria)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 32,
        sintomi: "Astenia profonda (fatica estrema), nausea, vomito, dolori addominali diffusi, vertigini quando si alza in piedi, forte desiderio di cibi salati.",
        anamnesi: "In cura per Tiroidite di Hashimoto (spesso associata). Riferisce perdita di peso di 6 kg nell'ultimo mese e amenorrea (assenza ciclo).",
        note_infermiera: "Paziente molto debole, necessita aiuto per salire sul lettino. La pelle ha un colorito bronzeo diffuso, particolarmente scuro sulle nocche delle mani, sui gomiti e sulle gengive, nonostante la stagione invernale. PA 85/50 mmHg.",

        // --- LABORATORIO ---
        emocromo: "Hb 11.5 g/dL (Lieve anemia), Eosinofilia (Eosinofili 8%).",
        chimica_clinica: "Sodio 128 mEq/L (Iponatriemia), Potassio 5.6 mEq/L (Iperkaliemia), Cloro 96 mEq/L. Glucosio 65 mg/dL (Tendenzialmente basso). Creatinina 1.1 mg/dL.",
        emogas: "pH 7.32, HCO3 18 mEq/L (Acidosi metabolica lieve).",
        ves_pcr: "VES 15 mm/h. PCR negativa.",
        emocoltura: "Negativa.",
        esame_urine: "Sodio urinario elevato (perdita di sali).",
        autoanticorpi: "Anticorpi anti-TPO positivi (dalla storia di Hashimoto).",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Eosinofilia relativa.",
        dosaggi_specifici: "Cortisolo basale (ore 8:00): 2.0 µg/dL (Molto basso). ACTH: > 1250 pg/mL (Alle stelle). Anticorpi anti-21-idrossilasi: POSITIVI.",

        // --- IMAGING ---
        rx: "RX Torace: Cuore di dimensioni ridotte (Microcardia da ipovolemia). Campi polmonari chiari.",
        tc: "TC Addome: Ghiandole surrenali di dimensioni ridotte, atrofiche. Assenza di masse o calcificazioni.",
        risonanza: "RMN Encefalo: Ipofisi normale (esclude causa secondaria).",
        angio: "Negativa.",
        ecografia: "Eco Addome: Organi nella norma. Surreni non visualizzabili (troppo piccoli).",
        ecocardiogramma: "Cavità cardiache di dimensioni ridotte, contrattilità normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        endoscopia: "Gastroscopia: Gastrite cronica atrofica.",
        paracentesi: "Nessun liquido.",
        eeg: "Rallentamento diffuso (encefalopatia metabolica lieve).",
        emg: "Normale.",
        test_stimolo_acth: "Test al Synacthen (iniezione ACTH sintetico): Il Cortisolo rimane basso (< 18 µg/dL) dopo 30 e 60 minuti (conferma che il surrene non funziona).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto clinico.",
        cortisone: "Idrocortisone EV: Spettacolare e rapido miglioramento dell'astenia, della pressione arteriosa e della nausea nelle ore successive.",
        dialisi: "Correzione temporanea elettroliti, ma rischio ipotensivo elevato.",
        intubazione: "Non necessaria.",
        fluidoterapia: "Soluzione Fisiologica: Miglioramento transitorio della pressione arteriosa e dell'iponatriemia.",
        insulina: "PERICOLO: Induzione immediata di ipoglicemia severa (manca il cortisolo che è contro-insulare)."
    },

// ---------------- CASO 40: SINDROME DI MUNCHAUSEN ----------------
    {
        id: 40,
        nome_malattia: "Sindrome di Munchausen (Ipoglicemia fattizia)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 39,
        sintomi: "Episodi ricorrenti di sincope (svenimento), convulsioni tonico-cloniche, confusione mentale, sudorazione fredda profusa.",
        anamnesi: "Ex infermiera professionale. Storia clinica complessa con numerosi ricoveri in vari ospedali per sintomi neurologici vaghi e dolori addominali. Riferisce allergie a multipli farmaci e mezzi di contrasto.",
        note_infermiera: "Paziente trovata incosciente nel letto poco dopo la visita dei parenti. L'accesso venoso periferico appare arrossato. Sull'addome sono presenti numerose cicatrici chirurgiche ('addome a carta geografica') da pregressi interventi esplorativi.",

        // --- LABORATORIO ---
        emocromo: "Hb 12.8 g/dL, Leucociti 7.500/mmc, Piastrine 220.000/mmc.",
        chimica_clinica: "Glucosio plasmatico: 22 mg/dL (Ipoglicemia grave critica). Elettroliti nella norma. Funzionalità epatica e renale nella norma.",
        emogas: "Normale.",
        ves_pcr: "VES 12 mm/h.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Anticorpi anti-Insulina: Assenti (o bassi).",
        tossicologico: "Screening Sulfaniluree su sangue e urine: NEGATIVO (Esclude assunzione di farmaci stimolanti il pancreas).",
        esame_liquor: "Glucosio 15 mg/dL (basso, specchio della glicemia sistemica). Per il resto normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Insulina plasmatica: > 200 µU/mL (Valore estremamente elevato). Peptide C: < 0.1 ng/mL (Soppresso/Indosabile). Proinsulina: Bassa.",

        // --- IMAGING ---
        rx: "RX Torace: Normale.",
        tc: "TC Addome trifasica (Pancreas): Parenchima pancreatico di dimensioni e morfologia regolari. Nessuna lesione focale ipervascolare identificabile (Nessun segno di Insulinoma).",
        risonanza: "RMN Pancreas: Assenza di lesioni nodulari.",
        angio: "Negativa.",
        ecografia: "Eco Endoscopica Pancreatica: Parenchima omogeneo. Nessuna massa visibile.",
        ecocardiogramma: "Normale.",
        pet: "PET con DOPA o Gallio: Nessuna captazione patologica pancreatica.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia pancreatica (se eseguita per errore): Tessuto pancreatico istologicamente normale. Iperplasia delle isole assente.",
        endoscopia: "Gastroscopia: Normale.",
        paracentesi: "Nessun liquido.",
        eeg: "Onde lente generalizzate durante l'episodio (sofferenza metabolica). Normalizzazione dopo somministrazione di glucosio.",
        emg: "Normale.",
        ricerca_ambientale: "Ispezione effetti personali (autorizzata): Rinvenimento di fiale di insulina rapida e siringhe nascoste nel beauty case.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Iperglicemia transitoria, ma inefficace nel prevenire nuovi episodi ipoglicemici severi.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria durante le crisi convulsive prolungate o coma ipoglicemico.",
        glucosio_ev: "Soluzione Glucosata 33%: Risveglio rapido e normalizzazione dei sintomi, seguito da nuova crisi ipoglicemica dopo 2-3 ore.",
        intervento_chirurgico: "Pancreasectomia distale/totale: Esame istologico del pezzo operatorio completamente normale. Persistenza delle crisi ipoglicemiche nel post-operatorio (se la paziente continua a iniettarsi insulina)."
    },

// ---------------- CASO 41: DERMATOMIOSITE ----------------
    {
        id: 41,
        nome_malattia: "Dermatomiosite",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 54,
        sintomi: "Debolezza muscolare progressiva (non riesce a pettinarsi o ad alzarsi dalla tazza del water), eruzione cutanea sul viso e sulle mani, difficoltà a deglutire (disfagia), calo di peso.",
        anamnesi: "Menopausa da 3 anni. Riferisce di sentirsi stanca da mesi. Nessun trauma o infezione recente.",
        note_infermiera: "La paziente presenta una colorazione violacea sulle palpebre superiori ('Rash eliotropo') e papule arrossate sulle nocche delle mani. Presente anche arrossamento a 'V' sulla scollatura.",

        // --- LABORATORIO ---
        emocromo: "Hb 11.0 g/dL, Leucociti 8.000/mmc, Piastrine 250.000/mmc.",
        chimica_clinica: "CPK (Creatinchinasi) 4.500 U/L (Aumentato). LDH 650 U/L. AST 140 U/L, ALT 110 U/L (Transaminasi aumentate di origine muscolare).",
        emogas: "Normale.",
        ves_pcr: "VES 45 mm/h, PCR 3.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Mioglobina presente.",
        autoanticorpi: "ANA Positivi (pattern maculato). Anti-Jo1 Positivi. Anti-Mi2 Positivi.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Marcatore CA-125: 150 U/mL (Aumentato - sospetto neoplasia ovarica).",

        // --- IMAGING ---
        rx: "RX Torace: Ispessimento interstiziale basale bilaterale (Interstiziopatia polmonare iniziale).",
        tc: "TC Torace/Addome: Polmonite interstiziale non specifica (NSIP). Presenza di massa ovarica destra di 5 cm a margini irregolari.",
        risonanza: "RMN Muscoli (Cosce/Spalle): Iperintensità diffusa in STIR a carico della muscolatura prossimale ed edema fasciale.",
        angio: "Negativa.",
        ecografia: "Eco Pelvi: Formazione espansiva annessiale destra solida e vascolarizzata.",
        ecocardiogramma: "Normale.",
        pet: "Captazione muscolare diffusa prossimale e focale intensa in sede ovarica.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Muscolare: Atrofia perifascicolare (reperto patognomonico), infiltrato infiammatorio perivascolare prevalentemente di linfociti B e CD4+. Biopsia Cutanea: Dermatite d'interfaccia con degenerazione vacuolare dello strato basale.",
        endoscopia: "Gastroscopia: Disfagia orofaringea con ristagno nei seni piriformi.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Potenziali di unità motoria di breve durata, bassa ampiezza e polifasici (tracciato miopatico). Attività spontanea (fibrillazione) a riposo.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Prednisone 1mg/kg: Miglioramento della forza muscolare e attenuazione del rash cutaneo dopo 2 settimane.",
        dialisi: "Nessun effetto.",
        intubazione: "Necessaria in caso di polmonite ab ingestis grave da disfagia.",
        immunoglobuline: "Miglioramento significativo della forza prossimale.",
        intervento_chirurgico: "Annessiectomia (rimozione ovaio): Miglioramento del quadro paraneoplastico muscolare."
    },

// ---------------- CASO 42: GRAVIDANZA EXTRAUTERINA (ECTOPICA ROTTA) ----------------
    {
        id: 42,
        nome_malattia: "Gravidanza Extrauterina (Ectopica Rotta)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 26,
        sintomi: "Dolore lancinante improvviso in fossa iliaca destra (basso ventre), vertigini, lipotimia (sensazione di svenimento), dolore riflesso alla spalla destra.",
        anamnesi: "Nessuna patologia cronica nota. Riferisce di aver sentito la fitta dolorosa improvvisamente mentre sollevava un peso in palestra. Assume regolarmente la pillola anticoncezionale da 3 anni. Nega febbre o disturbi alimentari recenti.",
        note_infermiera: "Paziente pallida e sudata. Pressione arteriosa 85/50 mmHg (Ipotensione). Frequenza cardiaca 120 bpm. Addome molto dolente alla palpazione nei quadranti inferiori.",

        // --- LABORATORIO ---
        emocromo: "Hb 8.5 g/dL (Calo acuto rispetto ai controlli annuali precedenti), Leucociti 12.000/mmc (Leucocitosi da stress).",
        chimica_clinica: "Creatinina e Elettroliti nella norma.",
        emogas: "Lattati 2.5 mmol/L (Segno iniziale di shock ipovolemico).",
        ves_pcr: "PCR 1.5 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Ematuria assente (esclude colica renale).",
        autoanticorpi: "Non indicati.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Beta-HCG (Gonadotropina Corionica): 15.000 mIU/mL (POSITIVO).",

        // --- IMAGING ---
        rx: "RX Addome in bianco: Assenza di aria libera sottodiaframmatica (esclude perforazione intestinale).",
        tc: "TC Addome (se eseguita per errore prima dell'eco): Versamento liquido iperdenso (sangue) nel cavo di Douglas. Utero di dimensioni normali.",
        risonanza: "Non indicata in urgenza.",
        angio: "Stravaso di mezzo di contrasto attivo in sede annessiale destra.",
        ecografia: "Eco Transvaginale (FAST): Utero vuoto. Falda liquida corpuscolata nel Douglas (Emoperitoneo). Massa disomogenea annessiale destra con 'Ring of Fire' al Doppler.",
        ecocardiogramma: "Cuore ipercinetico, camere vuote (ipovolemia).",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non indicata.",
        endoscopia: "Non indicata.",
        paracentesi: "Culdocentesi (aspirazione dal fondo vaginale): Sangue scuro incoagulabile (Emoperitoneo confermato).",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto.",
        dialisi: "Non necessaria.",
        intubazione: "Necessaria solo in caso di shock emorragico irreversibile pre-operatorio.",
        fluidoterapia: "Miglioramento transitorio della pressione arteriosa, ma persistente calo dell'emoglobina (il rubinetto è aperto).",
        intervento_chirurgico: "Laparoscopia d'urgenza (Salpingectomia): Arresto dell'emorragia e rimozione della tuba rotta."
    },

// ---------------- CASO 43: AIDS (ESORDIO CON PNEUMOCYSTIS JIROVECII) ----------------
    {
        id: 43,
        nome_malattia: "AIDS (Stadio C - Polmonite da Pneumocystis)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 31,
        sintomi: "Dispnea (fame d'aria) ingravescente da 2 settimane, tosse secca non produttiva, febbre persistente, calo ponderale di 8 kg in un mese.",
        anamnesi: "Già trattato due volte nell'ultimo mese per 'bronchite' con Amoxicillina e Azitromicina senza alcun miglioramento. Riferisce sudorazioni notturne che bagnano il pigiama.",
        note_infermiera: "Saturazione O2 bassa (88%) che crolla a 75% se prova a camminare. Ho notato delle placche biancastre sulla lingua e sul palato che sanguinano se grattate via.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 2.800/mmc (Leucopenia). Linfociti totali 400/mmc (Linfopenia severa). Hb 10.5 g/dL.",
        chimica_clinica: "LDH (Lattato Deidrogenasi): 650 U/L (Aumentato - indice di danno polmonare interstiziale). Funzionalità renale ed epatica nella norma.",
        emogas: "pH 7.45, pO2 55 mmHg (Ipossiemia grave), pCO2 30 mmHg (Alcalosi respiratoria da iperventilazione).",
        ves_pcr: "VES 40 mm/h. PCR 2.5 mg/dL.",
        emocoltura: "Negativa per batteri comuni.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Limpido, sterile. Test antigenico Criptococco negativo.",
        striscio_sangue: "Assenza di atipie cellulari.",
        dosaggi_specifici: "Test HIV 1/2 Ag/Ab (IV generazione): REATTIVO. Conta Linfociti T CD4+: 45 cellule/mmc (Valore critico < 200). Carica Virale HIV-RNA: > 750.000 copie/mL.",

        // --- IMAGING ---
        rx: "RX Torace: Infiltrati interstiziali diffusi bilaterali a 'vetro smerigliato' (ground glass) che risparmiano la periferia polmonare. Non addensamenti lobari franchi.",
        tc: "TC Torace HR: Ground glass diffuso bilaterale, presenza di alcune cisti a pareti sottili (pneumatoceli). Assenza di versamento pleurico.",
        risonanza: "RMN Encefalo: Atrofia corticale lieve superiore all'età anagrafica. Nessuna lesione focale.",
        angio: "Negativa per embolia.",
        ecografia: "Eco Addome: Lieve splenomegalia. Reni regolari.",
        ecocardiogramma: "Ipertensione polmonare lieve. Funzione sistolica conservata.",
        pet: "Captazione diffusa polmonare bilaterale.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non indicata.",
        endoscopia: "Broncoscopia con BAL (Lavaggio Broncoalveolare): Liquido schiumoso. Colorazione di Grocott (Argentica): POSITIVA per cisti di Pneumocystis jirovecii. Ricerca BAAR (Tubercolosi): Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Polineuropatia distale sensitiva (assenza riflessi achillei).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Amoxicillina/Ceftriaxone: Nessun effetto clinico sulla febbre o sulla dispnea.",
        cortisone: "Prednisone in aggiunta all'antibiotico specifico: Miglioramento rapido degli scambi gassosi e riduzione del rischio di insufficienza respiratoria.",
        dialisi: "Non necessaria.",
        intubazione: "Necessaria se pO2 < 60 mmHg nonostante ossigenoterapia ad alti flussi.",
        farmaco_cotrimossazolo: "Trimethoprim-Sulfametossazolo (Bactrim) ad alte dosi: Graduale miglioramento della dispnea e della febbre in 5-7 giorni.",
        farmaco_antiretrovirale: "Inizio terapia (HAART): Soppressione della carica virale nel tempo. Attenzione: se iniziata subito durante la polmonite, possibile peggioramento acuto per IRIS (Sindrome infiammatoria da ricostituzione immune)."
    },

// ---------------- CASO 44: COREA DI HUNTINGTON ----------------
    {
        id: 44,
        nome_malattia: "Corea di Huntington",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 38,
        sintomi: "Movimenti involontari a scatto degli arti e del volto, irritabilità, aggressività inspiegabile, difficoltà di concentrazione sul lavoro, frequenti cadute.",
        anamnesi: "Recentemente licenziato per errori banali e sbalzi d'umore. Il padre è morto giovane in un istituto psichiatrico per 'demenza precoce'.",
        note_infermiera: "Il paziente non riesce a stare fermo sulla sedia ('impersistenza motoria'). Muove le dita come se suonasse il piano. Fa smorfie bizzarre con la bocca.",

        // --- LABORATORIO ---
        emocromo: "Normale.",
        chimica_clinica: "Elettroliti, funzionalità epatica e renale nella norma. Ceruloplasmina normale.",
        emogas: "Normale.",
        ves_pcr: "Normale.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi. Anti-fosfolipidi negativi.",
        tossicologico: "Negativo per alcool, cocaina e anfetamine (importante per escludere cause tossiche dei movimenti).",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Test genetico molecolare (PCR) gene HTT: Presenza di 45 ripetizioni della tripletta CAG (Valore patologico > 36).",

        // --- IMAGING ---
        rx: "RX Torace: Normale.",
        tc: "TC Encefalo: Dilatazione dei corni frontali dei ventricoli laterali ('aspetto a scatola').",
        risonanza: "RMN Encefalo: Atrofia marcata della testa del nucleo caudato e del putamen. Ampliamento degli spazi liquorali.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Normale.",
        ecocardiogramma: "Normale.",
        pet: "Ipometabolismo striatale bilaterale (nucleo caudato e putamen).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non indicata.",
        endoscopia: "Non indicata.",
        paracentesi: "Nessun liquido.",
        eeg: "Appiattimento diffuso del tracciato (basso voltaggio), assenza di ritmo alfa organizzato.",
        emg: "Normale conduzione nervosa.",
        test_neuropsicologici: "Deficit delle funzioni esecutive, rigidità mentale, rallentamento psicomotorio.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Nessun effetto.",
        dialisi: "Nessun effetto.",
        farmaco_levodopa: "PEGGIORAMENTO netto dei movimenti coreici e dell'agitazione psicomotoria.",
        farmaco_neurolettico: "Aloperidolo/Olanzepina: Riduzione dei movimenti coreici e controllo dell'agitazione.",
        farmaco_tetrabenazina: "Riduzione significativa della corea."
    },

// ---------------- CASO 45: MIXOMA ATRIALE SINISTRO ----------------
    {
        id: 45,
        nome_malattia: "Mixoma Atriale Sinistro",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 48,
        sintomi: "Dispnea improvvisa che compare solo quando si alza in piedi (Platipnea) e migliora sdraiandosi. Episodi di svenimento (sincope), febbricola serale, formicolio al braccio sinistro.",
        anamnesi: "6 mesi fa ha avuto un TIA (Attacco Ischemico Transitorio) trattato come vascolare. Nessun fattore di rischio cardiovascolare (non fuma, colesterolo basso).",
        note_infermiera: "Mentre le provavo la pressione da seduta è quasi svenuta. Sdraiata sul lettino sta benissimo. All'auscultazione sento un rumore strano, tipo un tonfo ('Plop'), subito dopo il battito cardiaco.",

        // --- LABORATORIO ---
        emocromo: "Hb 10.2 g/dL (Anemia emolitica meccanica), Piastrine 450.000/mmc (Trombocitosi reattiva), Leucociti 11.000/mmc.",
        chimica_clinica: "LDH aumentato (emolisi). Funzionalità renale ed epatica nella norma. Globuline sieriche aumentate.",
        emogas: "Ipossiemia lieve in ortostatismo (in piedi), normale in clinostatismo (sdraiata).",
        ves_pcr: "VES 70 mm/h. PCR 6.5 mg/dL (Indici infiammatori molto alti, simulano infezione).",
        emocoltura: "Negativa (Differenza chiave con l'Endocardite).",
        esame_urine: "Microematuria.",
        autoanticorpi: "ANA positivi a basso titolo (Aspecifici, simulano il Lupus).",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Schistociti rari (emolisi da impatto meccanico).",
        dosaggi_specifici: "Interleuchina-6 (IL-6) sierica: Molto elevata (Prodotta dal tumore, causa la febbre).",

        // --- IMAGING ---
        rx: "RX Torace: Modesta congestione venosa polmonare. Cuore di dimensioni normali.",
        tc: "TC Encefalo: Piccole aree ipodense di pregressi infarti ischemici silenti (emboli partiti dal cuore).",
        risonanza: "RMN Cuore: Massa intracavitaria nell'atrio sinistro, peduncolata, isointensa al miocardio, mobile col ciclo cardiaco.",
        angio: "Coronarie normali.",
        ecografia: "Eco Addome: Infarti splenici (milza) pregressi.",
        ecocardiogramma: "Massa gelatinosa e mobile di 4x3 cm nell'atrio sinistro, adesa al setto interatriale. Durante la diastole la massa prolassa attraverso la valvola mitrale ostruendola parzialmente.",
        pet: "Nessuna captazione maligna a distanza (è un tumore benigno ma pericoloso meccanicamente).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Analisi istologica (post-operatoria): Cellule stellate in matrice mixoide ricca di mucopolisaccaridi. Emorragie interne.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto sulla febbre o sulla VES.",
        cortisone: "Lieve riduzione temporanea della febbre.",
        dialisi: "Non indicata.",
        intubazione: "Necessaria per l'intervento cardiochirurgico.",
        anticoagulante: "Warfarin/Eparina: RISCHIOSO. Non scioglie la massa e aumenta il rischio di emorragia intratumorale con embolizzazione massiva.",
        intervento_chirurgico: "Resezione della massa in circolazione extracorporea: Guarigione completa, scomparsa immediata dei sintomi e normalizzazione degli esami."
    },

// ---------------- CASO 46: SINDROME DI CUSHING (ADENOMA IPOFISARIO) ----------------
    {
        id: 46,
        nome_malattia: "Malattia di Cushing (Adenoma Ipofisario ACTH-secernente)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 34,
        sintomi: "Aumento di peso rapido concentrato sull'addome e sul viso, assottigliamento di braccia e gambe, debolezza muscolare (fatica a salire le scale), depressione, irregolarità mestruali.",
        anamnesi: "In cura per ipertensione arteriosa di recente insorgenza e diabete di tipo 2 diagnosticato 6 mesi fa. Nega assunzione di cortisonici per bocca o creme.",
        note_infermiera: "Il viso della paziente è molto rotondo ('Facies lunare') e arrossato. Sull'addome sono presenti grosse smagliature di colore violaceo (Strie rubre). Presente un accumulo di grasso dietro al collo ('Gobba di bufalo'). PA 160/98 mmHg.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 13.000/mmc (Neutrofilia), Linfociti 900/mmc (Linfopenia), Hb 14.5 g/dL.",
        chimica_clinica: "Glucosio a digiuno 195 mg/dL. Sodio 146 mEq/L. Potassio 3.1 mEq/L (Ipokaliemia). Colesterolo Totale 280 mg/dL.",
        emogas: "pH 7.46, HCO3 30 mEq/L (Alcalosi metabolica).",
        ves_pcr: "VES 10 mm/h. PCR 0.3 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Glicosuria ++. Calciuria elevata.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Cortisolo urinario 24h: 450 µg/24h (Valore normale < 50). ACTH plasmatico: 85 pg/mL (Aumentato). Cortisolo salivare notturno: Elevato.",

        // --- IMAGING ---
        rx: "RX Rachide Lombare: Crolli vertebrali da osteoporosi (L3-L4).",
        tc: "TC Addome: Iperplasia surrenalica bilaterale diffusa (ghiandole ingrossate ma senza noduli). Steatosi epatica.",
        risonanza: "RMN Encefalo (Sella Turcica): Microadenoma ipofisario di 6mm ipointenso in T1 dopo gadolinio.",
        angio: "Negativa.",
        ecografia: "Eco Addome: Fegato steatosico 'brillante'. Reni nella norma.",
        ecocardiogramma: "Ipertrofia ventricolare sinistra concentrica.",
        pet: "Non captazione patologica extracranica.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Attività rapida beta diffusa.",
        emg: "Miopatia prossimale senza denervazione.",
        
        // --- TEST DINAMICI ORMONALI ---
        test_soppressione_desametasone: "Test a basse dosi (1mg): Nessuna soppressione del cortisolo. Test ad alte dosi (8mg): Soppressione del cortisolo > 50% (Conferma origine ipofisaria).",
        test_stimolo_acth: "Risposta supranormale: Picco di Cortisolo > 35 µg/dL (Iper-responsività surrenalica dovuta a iperplasia ghiandolare).",

        // --- EFFETTI TERAPIE ---
        antibiotici: "Nessun effetto.",
        cortisone: "Peggioramento dell'iperglicemia, dell'ipertensione e della psicosi.",
        dialisi: "Correzione temporanea dell'ipokaliemia.",
        intubazione: "Non necessaria.",
        farmaco_ketoconazolo: "Riduzione della sintesi di cortisolo e miglioramento graduale dei sintomi.",
        intervento_chirurgico: "Adenectomia trans-sfenoidale: Crollo dei livelli di cortisolo post-operatorio (necessita terapia sostitutiva transitoria) e risoluzione del quadro clinico."
    },

// ---------------- CASO 47: OVERDOSE DA FENTANYL ----------------
    {
        id: 47,
        nome_malattia: "Overdose da Fentanyl",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 24,
        sintomi: "Stato di incoscienza (coma profondo), colorito bluastro delle labbra e delle dita (cianosi), respiro estremamente lento e rumoroso ('death rattle').",
        anamnesi: "Trovato privo di sensi in un parco. Gli amici riferiscono che 'ha comprato delle pillole di Xanax per strada' poco prima. Nessuna storia nota di abuso di oppiacei.",
        note_infermiera: "Paziente non risvegliabile agli stimoli dolorosi (GCS 3). Frequenza respiratoria 4 atti/minuto (Bradipnea estrema). Le pupille sono puntiformi ('a spillo').",

        // --- LABORATORIO ---
        emocromo: "Leucocitosi lieve da stress (12.000/mmc).",
        ves_pcr: "Valori nella norma.",
        coagulazione: "INR e PTT nella norma.",
        dosaggi_specifici: "Striscia reattiva specifica per Fentanyl su urine: POSITIVA (Unico modo per rilevarlo).",
        autoanticorpi: "Negativi.",
        test_stimolo_acth: "Cortisolo aumenta regolarmente (surrene funzionante, esame inutile).",
        test_soppressione_desametasone: "Cortisolo soppresso (asse ormonale intatto, esame inutile).",
        esame_urine: "Chimico fisico normale.",
        striscio_sangue: "Normale.",
        chimica_clinica: "CPK 800 U/L (Lieve rabdomiolisi da immobilizzazione prolungata sul terreno).",
        emocoltura: "Nessuna crescita batterica.",
        esame_liquor: "Limpido, pressione normale.",
        esame_microscopico_liquor: "Acellulare.",
        glucosio_ev: "Glicemia sale a 200 mg/dL, ma il coma persiste invariato (esclude coma ipoglicemico).",
        emogas: "pH 7.10, pCO2 85 mmHg, pO2 50 mmHg (Acidosi respiratoria severa con ipercapnia e ipossiemia).",

        // --- IMAGING ---
        ecografia: "Vescica distesa (globo vescicale da ritenzione urinaria).",
        risonanza: "Encefalo: Nessuna lesione acuta, segni lievi di edema citotossico da ipossia.",
        rx: "RX Torace: Opacità a vetro smerigliato bilaterali (Edema polmonare non cardiogeno).",
        tc: "TC Encefalo: Ipodensità diffusa da edema cerebrale ipossico iniziale.",
        pet: "Distribuzione metabolica normale.",
        angio: "Vasi pervi.",
        elettrocardiogramma: "Bradicardia sinusale marcata (38 bpm). Intervallo QTc lievemente prolungato.",
        ecocardiogramma: "Cinesi cardiaca ridotta globalmente per ipossia, ma strutturalmente sano.",
        eeg: "Attività delta diffusa (coma), depressione generalizzata del voltaggio.",
        test_neuropsicologici: "Paziente non valutabile (coma).",
        test_del_ghiaccio: "Nessun effetto sulle pupille o sullo stato di coscienza.",
        esame_neurologico_specifico: "Pupille miotiche (< 1mm) fisse. Rigidità muscolare toracica ('Wooden Chest syndrome'). Riflessi osteotendinei ipoeccitabili.",
        misurazione_pressione_compartimentale: "Pressioni logge muscolari nella norma.",
        ricerca_ambientale: "Rinvenimento di pillole contraffatte nelle tasche con logo simile a farmaci noti.",

        // --- PROCEDURE ---
        plasmaferesi: "Nessuna variazione clinica (il farmaco ha alto volume di distribuzione, non si lava via).",
        dialisi: "Nessun miglioramento dello stato di coscienza.",
        trasfusione_piastrine: "Nessun effetto.",
        intervento_chirurgico: "Stress chirurgico inutile su paziente instabile.",
        intubazione: "Ventilazione meccanica efficace: normalizzazione dei valori emogas (pH e pCO2), ma il paziente rimane in coma farmacologico.",
        camera_iperbarica: "Miglioramento dell'ossigenazione plasmatica, ma persistenza dell'apnea centrale.",
        paracentesi: "Nessun liquido prelevabile.",
        chemioterapia: "Nessun effetto.",
        fluidoterapia: "Soluzione fisiologica: Miglioramento della pressione arteriosa (da 80/50 a 100/60 mmHg), ma permane la bradicardia.",

        // --- ALTRO ---
        anticoagulante: "Aumento del rischio emorragico senza benefici.",
        biopsia: "Tessuto sano.",
        tossicologico: "Screening standard urine (Oppiacei, Coca, THC, BZO, Anfetamine): NEGATIVO per oppiacei.",

        // --- FARMACI ---
        farmaco_ketoconazolo: "Nessun effetto acuto.",
        farmaco_ciproeptadina: "Nessun effetto.",
        farmaco_fans: "Nessun effetto.",
        farmaco_levodopa: "Nessun effetto.",
        farmaco_tetrabenazina: "Nessun effetto.",
        farmaco_antitiroideo: "Nessun effetto.",
        farmaco_benzodiazepine: "PEGGIORAMENTO CRITICO: Arresto respiratorio completo e ipotensione grave (effetto sinergico depressivo).",
        farmaco_adrenalina: "Aumento temporaneo della frequenza cardiaca a 80 bpm, ma nessuna ripresa della respirazione spontanea.",
        farmaco_betabloccante: "ARRESTO CARDIACO: Crollo della frequenza cardiaca da 38 bpm all'asistolia completa.",
        farmaco_cotrimossazolo: "Nessun effetto.",
        farmaco_inibitore_acetilcolinesterasi: "Aumento delle secrezioni bronchiali, peggioramento degli scambi gassosi.",
        farmaco_immunosoppressore: "Nessun effetto.",
        farmaco_biologico: "Nessun effetto.",
        farmaco_antiretrovirale: "Nessun effetto.",
        farmaco_aspirina: "Nessun effetto.",
        farmaco_octreotide: "Nessun effetto.",
        plasmaferesi: "Nessun effetto.",
        
        // TERAPIA RISOLUTIVA
        farmaco_antidoto: "Naloxone (Narcan) EV/Intranasale: Risveglio improvviso ed esplosivo in 30 secondi. Il paziente si siede, diventa agitato, aggressivo, vomita e iperventila (Sindrome da astinenza precipitata).",
        farmaco_neurolettico: "Peggioramento della sedazione e rischio di aspirazione.",
        farmaco_amfotericina: "Nessun effetto.",
        farmaco_antipsicotico: "Nessun effetto.",
        antibiotici: "Nessun effetto immediato sullo stato clinico.",
        antivirale: "Nessun effetto.",
        insulina: "Rischio di ipoglicemia su paziente in coma.",
        cortisone: "Nessun effetto sul drive respiratorio.",
        ferro_supplementare: "Nessun effetto.",
        immunoglobuline: "Nessun effetto.",
        ossigeno_alta_concentrazione: "Correzione della saturazione arteriosa, ma persistenza dell'acidosi respiratoria (la CO2 non viene espirata perché il paziente non ventila)."
    },

// ---------------- CASO 48: NEUROCISTICERCOSI (TENIA SOLIUM) ----------------
    {
        id: 48,
        nome_malattia: "Neurocisticercosi (Tenia Solium)",
        livello_difficolta: "Media",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 35,
        sintomi: "Crisi epilettica tonico-clonica generalizzata (prima volta nella vita), cefalea cronica che peggiora al mattino, nausea.",
        anamnesi: "Immigrato da zona endemica (Sud America o Sud-Est Asiatico) da 5 anni. Riferisce di mangiare spesso carne di maiale, talvolta poco cotta. Nega traumi cranici.",
        note_infermiera: "Dopo la crisi il paziente è rimasto confuso per un'ora (Stato post-ictale). Lamenta debolezza al braccio sinistro (Paresi di Todd).",

        // --- LABORATORIO ---
        emocromo: "Leucociti 11.000/mmc. Eosinofili 12% (Eosinofilia moderata: indizio parassitario). Hb 14.0 g/dL.",
        chimica_clinica: "Elettroliti, funzionalità renale ed epatica nella norma. CPK 400 U/L (da attività muscolare convulsiva).",
        emogas: "Acidosi lattica lieve (post-convulsiva), si normalizza rapidamente.",
        ves_pcr: "VES 25 mm/h. PCR 1.0 mg/dL.",
        coagulazione: "Normale.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo (esclude cause tossiche delle convulsioni).",
        striscio_sangue: "Eosinofilia confermata.",
        dosaggi_specifici: "Sierologia (EITB/Western Blot) per Taenia solium: POSITIVA.",
        esame_feci: "Esame parassitologico: Presenza di uova di Taenia spp.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo. RX Muscoli (Coscia): Presenza di piccole calcificazioni fusiformi a chicco di riso (cisti muscolari calcifiche).",
        tc: "TC Encefalo: Multiple lesioni calcifiche puntiformi diffuse ('Starry Sky' / 'Cielo stellato'). Alcune lesioni ipodense con edema perilesionale.",
        risonanza: "RMN Encefalo: Lesioni cistiche multiple in vari stadi: alcune con nodulo murale eccentrico (scolece visibile), altre con edema anulare (fase infiammatoria), altre calcifiche.",
        angio: "Negativa.",
        ecografia: "Eco Oculare (B-scan): Assenza di cisti retiniche (Fondamentale controllare prima della terapia: se si uccide una cisti nell'occhio si causa cecità).",
        ecocardiogramma: "Normale.",
        elettrocardiogramma: "Normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia cerebrale (stereotassica): Cisti contenente larva di Taenia solium con infiammazione granulomatosa circostante.",
        esame_liquor: "Limpido. Pressione lievemente aumentata. Pleocitosi (30 cellule/mmc) con presenza di Eosinofili (reperti rari ma suggestivi). Glucosio normale.",
        eeg: "Attività epilettiforme focale in regione fronto-parietale destra.",
        emg: "Normale.",
        test_neuropsicologici: "Lieve deficit cognitivo.",
        ricerca_ambientale: "Non pertinente.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        plasmaferesi: "Nessun effetto.",
        trasfusione_piastrine: "Nessun effetto.",
        intervento_chirurgico: "Rimozione neurochirurgica: Necessaria solo per cisti intraventricolari che bloccano il liquor (idrocefalo) o cisti giganti.",
        intubazione: "Necessaria solo se stato di male epilettico refrattario.",
        
        // --- FARMACI ---
        antibiotici: "Nessun effetto sulle cisti o sulle crisi.",
        antivirale: "Nessun effetto.",
        farmaco_antiparassitario: "Albendazolo/Praziquantel con Desametasone sopprime la risposta infiammatoria dell'ospite alla morte del parassita. Le cisti vengono uccise dall'Albendazolo e iniziano a calcificare o ridursi senza causare edema cerebrale acuto. Prognosi favorevole.",
        cortisone: "Desametasone ad alte dosi: Riduzione dell'edema cerebrale e prevenzione della reazione infiammatoria post-lisi parassitaria. Va iniziato PRIMA dell'antiparassitario.",
        farmaco_fans: "Nessun effetto sull'edema cerebrale.",
        ossigeno_alta_concentrazione: "Utile solo durante la fase post-critica.",
        fluidoterapia: "Mantenimento idratazione."
    },

// ---------------- CASO 49: EPATITE TOSSICA FULMINANTE (DA PARACETAMOLO) ----------------
    {
        id: 49,
        nome_malattia: "Epatite Tossica Fulminante (Avvelenamento da Paracetamolo)",
        livello_difficolta: "Emergenza",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 19,
        sintomi: "Nausea incoercibile, vomito ripetuto, dolore al quadrante addominale superiore destro (ipocondrio), stato confusionale.",
        anamnesi: "Odontalgia persistente da 3 giorni. Assunzione incontrollata di molteplici preparati a base di Paracetamolo (Tachipirina, Efferalgan). Ultima assunzione 24 ore fa.",
        note_infermiera: "Sclere itteriche. Paziente sonnolenta, risponde lentamente alle domande. Alito dolciastro ('Fetor hepaticus').",

        // --- LABORATORIO ---
        emocromo: "Hb 13.5 g/dL. Leucociti 11.000/mmc. Piastrine 190.000/mmc.",
        chimica_clinica: "AST 12.500 U/L, ALT 15.800 U/L. Bilirubina Totale 5.5 mg/dL. Creatinina 2.1 mg/dL. Glucosio 55 mg/dL.",
        emogas: "pH 7.28, Lattati 8.5 mmol/L. Bicarbonati 15 mEq/L.",
        coagulazione: "PT (Tempo di Protrombina): 35 secondi. INR: 4.5.",
        ves_pcr: "PCR 2.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Bilirubina +++. Urobilinogeno aumentato.",
        autoanticorpi: "ANA, ASMA, LKM-1 negativi.",
        tossicologico: "Screening droghe negativo.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Livello sierico Paracetamolo (Acetaminofene): 80 µg/mL (Tossico a 24h). Sierologia Epatiti A, B, C, E: NEGATIVA.",

        // --- IMAGING ---
        rx: "RX Torace: Negativo.",
        tc: "TC Addome: Fegato ipodenso da edema diffuso. Assenza di dilatazione delle vie biliari. Assenza di masse.",
        risonanza: "Non indicata.",
        angio: "Vasi epatici e portali pervi.",
        ecografia: "Eco Fegato: Ecostruttura epatica 'brillante' (Starry sky pattern). Colecisti alitiasica.",
        elettrocardiogramma: "Tachicardia sinusale.",
        ecocardiogramma: "Normale.",
        eeg: "Rallentamento diffuso con onde trifasiche.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Epatica (Transgiugulare): Necrosi confluente della Zona 3 (centrolobulare). Assenza di fibrosi.",
        paracentesi: "Nessun liquido ascitico prelevabile.",
        esame_neurologico_specifico: "Asterixis (Flapping tremor) presente.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Correzione dell'acidosi metabolica e dell'uremia. Scarsa rimozione delle tossine epatiche legate alle proteine.",
        plasmaferesi: "Riduzione temporanea della bilirubina e delle citochine infiammatorie. Correzione transitoria dell'INR.",
        trasfusione_piastrine: "Nessuna variazione significativa del rischio emorragico (coagulopatia da deficit di fattori, non piastrinica).",
        intervento_chirurgico: "Trapianto di Fegato: Risoluzione completa dell'insufficienza d'organo e normalizzazione progressiva dei parametri vitali.",
        intubazione: "Stabilizzazione delle vie aeree e prevenzione dell'aspirazione in paziente comatoso.",
        
        // FARMACI
        antibiotici: "Nessuna variazione degli enzimi epatici o dell'INR.",
        cortisone: "Nessun effetto sulla necrosi epatica.",
        antivirale: "Nessun effetto.",
        farmaco_antidoto: "N-Acetilcisteina (NAC) EV: Ripristino delle scorte di Glutatione, miglioramento dell'emodinamica epatica e riduzione della mortalità.",
        fluidoterapia: "Soluzione Glucosata: Normalizzazione della glicemia e prevenzione del danno neurologico da ipoglicemia.",
    },

// ---------------- CASO 50: MALATTIA DI ERDHEIM-CHESTER ----------------
    {
        id: 50,
        nome_malattia: "Malattia di Erdheim-Chester",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 56,
        sintomi: "Dolore osseo profondo e costante alle gambe (soprattutto ginocchia e tibie), sete inestinguibile (polidipsia) e poliuria (urina tantissimo), dispnea lieve.",
        anamnesi: "Storia di 'fibrosi retroperitoneale' diagnosticata anni fa ma mai chiarita. Riferisce di bere 6-8 litri d'acqua al giorno da mesi.",
        note_infermiera: "Il paziente ha delle placche giallastre e morbide sulle palpebre (xantelasmi) e gli occhi sembrano sporgere in fuori (esoftalmo). Si lamenta che il dolore alle gambe è 'dentro l'osso', non sull'articolazione.",

        // --- LABORATORIO ---
        emocromo: "Hb 11.2 g/dL (Anemia normocitica cronica), Leucociti e Piastrine nella norma.",
        chimica_clinica: "Creatinina 1.6 mg/dL (Insufficienza renale lieve). Sodio 148 mEq/L (Tendenzialmente alto). Osmolarità urinaria bassa (Urine molto diluite).",
        emogas: "Normale.",
        ves_pcr: "VES 60 mm/h. PCR 3.5 mg/dL (Stato infiammatorio cronico).",
        emocoltura: "Negativa.",
        esame_urine: "Peso specifico 1002 (Urine 'acqua di roccia').",
        autoanticorpi: "ANA negativi. ANCA negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Normale.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Mutazione BRAF V600E su DNA circolante o tissutale: POSITIVA.",

        // --- IMAGING ---
        rx: "RX Arti Inferiori (Femore/Tibia): Osteosclerosi diafisaria e metafisaria bilaterale e simmetrica (midollo osseo sostituito da osso denso).",
        tc: "TC Addome: Infiltrazione del grasso perirenale che assume aspetto frastagliato ('Hairy Kidney' / Rene peloso). Tessuto solido che avvolge l'aorta addominale ('Coated Aorta').",
        risonanza: "RMN Encefalo: Ispessimento del peduncolo ipofisario (causa del Diabete Insipido). Masse retro-orbitali bilaterali.",
        angio: "Manicotto di tessuto perivascolare attorno all'aorta toracica e addominale.",
        ecografia: "Eco Cuore: Ispessimento delle pareti atriali e presenza di massa pseudo-tumorale nell'atrio destro. Versamento pericardico.",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Infiltrazione del solco atrio-ventricolare.",
        pet: "Captazione intensa simmetrica alle ossa lunghe (tibie e femori) e al grasso perirenale.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia ossea o del grasso perirenale: Infiltrato di istiociti schiumosi (Foamy histiocytes) carichi di lipidi e cellule giganti di Touton. Immunoistochimica: CD68 POSITIVO, CD1a NEGATIVO (Differenza chiave con l'Istiocitosi a cellule di Langerhans). S100 Negativo.",
        endoscopia: "Negativa.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Gestione dell'uremia se presente ostruzione ureterale, nessun effetto sulla malattia sistemica.",
        plasmaferesi: "Nessun effetto.",
        trasfusione_piastrine: "Non indicata.",
        intervento_chirurgico: "Decompressione ureterale (stent) se la fibrosi blocca i reni.",
        intubazione: "Non necessaria.",
        
        // FARMACI
        antibiotici: "Nessun effetto.",
        antivirale: "Nessun effetto.",
        insulina: "Nessun effetto sulla poliuria (è diabete insipido, non mellito).",
        cortisone: "Miglioramento transitorio dei sintomi infiammatori e del dolore osseo, recidiva alla sospensione.",
        ferro_supplementare: "Nessun effetto significativo.",
        immunoglobuline: "Nessun effetto.",
        ossigeno_alta_concentrazione: "Non necessario.",
        farmaco_biologico: "Interferone-alfa: Risposta parziale con stabilizzazione della malattia.",
        farmaco_antidoto: "Vemurafenib (Inibitore BRAF): Rapida regressione delle masse infiltrative, risoluzione del dolore osseo e miglioramento della funzione renale e cardiaca in poche settimane."
    },

// ---------------- CASO 51: LEBBRA (MORBO DI HANSEN) ----------------
    {
        id: 51,
        nome_malattia: "Lebbra (Forma Lepromatosa)",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 45,
        sintomi: "Formicolio persistente a mani e piedi, ostruzione nasale cronica con sangue (epistassi), comparsa di noduli cutanei sul volto e sulle orecchie.",
        anamnesi: "Immigrato dal Brasile 15 anni fa (lunga incubazione). Trattato per anni per 'allergia' e 'tunnel carpale' senza successo.",
        note_infermiera: "Mentre gli prendevo la vena ho notato una bruciatura di sigaretta sul dito medio: il paziente non se n'era accorto (anestesia termica). Ha perso la parte esterna delle sopracciglia (Madarosi).",

        // --- LABORATORIO ---
        emocromo: "Hb 11.5 g/dL (Anemia da malattia cronica), Leucociti nella norma.",
        chimica_clinica: "Funzionalità renale ed epatica nella norma. Globuline aumentate (Ipergammaglobulinemia policlonale).",
        emogas: "Normale.",
        ves_pcr: "VES 60 mm/h. PCR 2.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Proteinuria lieve.",
        autoanticorpi: "ANA positivi a basso titolo. Fattore Reumatoide positivo.",
        tossicologico: "Negativo.",
        esame_liquor: "Lieve aumento delle proteine.",
        striscio_sangue: "Rouleaux eritrocitari.",
        // IL TRABOCCHETTO:
        dosaggi_specifici: "VDRL (Test Sifilide): POSITIVO (Falso positivo biologico). TPHA (Conferma Sifilide): NEGATIVO (Discrepanza fondamentale).",

        // --- IMAGING ---
        rx: "RX Mani/Piedi: Assottigliamento e riassorbimento delle falangi distali ('dita a clessidra' o acro-osteolisi).",
        tc: "TC Massiccio Facciale: Erosione della spina nasale anteriore e dei turbinati (Rinite specifica).",
        risonanza: "RMN Nervi Periferici: Ispessimento fusiforme del nervo ulnare e del nervo auricolare, con segnale iperintenso (edema/infiammazione).",
        angio: "Normale.",
        ecografia: "Eco Nervi: Nervo ulnare ingrossato (> 8mm) e ipoecogeno.",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Normale.",
        pet: "Captazione diffusa ai nervi periferici e ai noduli cutanei.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Cutanea/Nervo: Infiltrato di macrofagi schiumosi (Cellule di Virchow) pieni di bacilli acido-resistenti. Colorazione di Fite-Faraco: POSITIVA per Mycobacterium leprae (La colorazione classica Ziehl-Neelsen spesso è negativa perché il batterio è meno acido-resistente della TBC).",
        esame_microscopico_liquor: "Negativo.",
        eeg: "Normale.",
        emg: "Neuropatia sensitivo-motoria assonale e demielinizzante multifocale (Mononeurite multipla).",
        esame_neurologico_specifico: "Nervi ulnari e peronieri palpabili e ingrossati ('a cordone'). Aree di pelle ipocromica con assenza di sudorazione e sensibilità.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        plasmaferesi: "Nessun effetto.",
        trasfusione_piastrine: "Nessun effetto.",
        intervento_chirurgico: "Decompressione del nervo ulnare: Sollievo parziale dal dolore, ma non cura l'infezione.",
        intubazione: "Non necessaria.",
        
        // FARMACI
        antibiotici: "Penicillina (per presunta Sifilide): NESSUN EFFETTO clinico (il paziente non guarisce).",
        cortisone: "Riduzione temporanea dell'infiammazione neurale e dei noduli (utile nelle reazioni lebrose), ma non elimina il batterio.",
        antivirale: "Nessun effetto.",
        farmaco_antidoto: "Rifampicina + Dapsone + Clofazimina: Urine color arancio (Rifampicina) e progressiva pigmentazione rosso-bruna della pelle (Clofazimina). Negativizzazione graduale dello smear cutaneo e arresto del danno neurologico. Risoluzione rapida dell'Eritema Nodoso Leproso (reazione infiammatoria acuta di Tipo 2 durante la cura con talidomide).",
        fluidoterapia: "Nessun effetto rilevante."
    },

// ---------------- CASO 52: ARTERITE DI TAKAYASU ----------------
    {
        id: 52,
        nome_malattia: "Arterite di Takayasu",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 26,
        sintomi: "Debolezza alle braccia quando le tiene alzate (es. per asciugarsi i capelli), vertigini, disturbi visivi transitori, dolore al collo.",
        anamnesi: "Nessun fattore di rischio cardiovascolare. Da circa 6 mesi lamenta febbricola serale, sudorazioni notturne e dolori articolari vaghi, trattati come 'stress' o 'influenza'.",
        note_infermiera: "Non riesco a trovare il polso al polso sinistro. La pressione arteriosa è molto diversa tra le due braccia: 150/90 a destra, 85/50 a sinistra. Soffio udibile sopra la clavicola sinistra.",

        // --- LABORATORIO ---
        emocromo: "Hb 10.8 g/dL (Anemia normocitica da disordine cronico). Leucociti e Piastrine nella norma.",
        chimica_clinica: "Funzionalità renale ed epatica nella norma. Profilo lipidico perfetto (Esclude aterosclerosi precoce).",
        emogas: "Normale.",
        ves_pcr: "VES 85 mm/h. PCR 4.5 mg/dL (Indici di flogosi marcatamente elevati).",
        coagulazione: "Normale.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "ANA negativi. ANCA negativi. (Fondamentale per distinguere da altre vasculiti).",
        tossicologico: "Negativo.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Complemento C3 e C4 normali.",

        // --- IMAGING ---
        rx: "RX Torace: Slargamento del mediastino superiore e dell'aorta toracica. Calcificazioni assenti (tipico in giovane età).",
        tc: "TC Angio Aorta: Ispessimento concentrico murale ('Macaroni sign') dell'arco aortico e dei tronchi sovra-aortici. Stenosi critica dell'arteria succlavia sinistra e della carotide comune sinistra.",
        risonanza: "Angio-RM: Edema della parete aortica (segno di infiammazione attiva) con enhancement tardivo dopo contrasto.",
        angio: "Angiografia digitale (DSA): Restringimenti lunghi e affusolati a 'coda di topo' delle arterie succlavie. Circoli collaterali sviluppati.",
        ecografia: "Eco-Doppler Tronchi Sovra-aortici: Flusso 'parvus et tardus' (onda smorzata) a valle della stenosi nella succlavia sinistra. Ispessimento intimale medio-congenito diffuso.",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Insufficienza valvolare aortica lieve (da dilatazione della radice aortica).",
        pet: "FDG-PET: Intensa captazione lineare lungo le pareti dell'arco aortico e delle grandi arterie (attività metabolica infiammatoria).",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia arteriosa (raramente eseguita): Panarterite granulomatosa con infiltrato di cellule giganti e distruzione della tonaca media.",
        esame_liquor: "Normale.",
        eeg: "Normale.",
        test_neuropsicologici: "Normali.",
        esame_neurologico_specifico: "Scomparsa dei polsi radiali. Soffi vascolari multipli (carotidi, succlavie, addome).",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto sulla vasculite sistemica.",
        plasmaferesi: "Nessun beneficio dimostrato.",
        trasfusione_piastrine: "Nessun effetto.",
        
        intervento_chirurgico: "Bypass vascolare / Angioplastica: ALTO RISCHIO DI FALLIMENTO se eseguito in fase infiammatoria attiva (i tessuti sono fragili e si richiudono/restenosizzano rapidamente). Va fatto solo dopo raffreddamento dell'infiammazione.",
        
        intubazione: "Non necessaria.",
        
        // FARMACI
        antibiotici: "Nessun effetto (non è un'infezione batterica).",
        antivirale: "Nessun effetto.",
        
        cortisone: "Prednisone ad alte dosi (1mg/kg): Rapida scomparsa dei sintomi sistemici (febbre, dolori), normalizzazione della VES e arresto della progressione delle stenosi.",
        
        farmaco_immunosoppressore: "Metotrexato/Azatioprina: Mantenimento della remissione a lungo termine per risparmiare cortisone.",
        farmaco_biologico: "Tocilizumab (Anti-IL6) o Infliximab (Anti-TNF): Efficace nei casi refrattari ai cortisonici.",
        
        fluidoterapia: "Nessun effetto emodinamico significativo a lungo termine.",
        anticoagulante: "Aspirina/Antiaggreganti: Prevenzione di eventi ischemici secondari alla turbolenza del flusso, ma non cura la malattia.",
        farmaco_antidoto: "Nessun effetto."
    },

// ---------------- CASO 52: MENINGIOMA SPINALE ----------------
    {
        id: 52,
        nome_malattia: "Meningioma Spinale",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 62,
        sintomi: "Debolezza progressiva alle gambe (paraparesi), rigidità muscolare, dolore alla schiena localizzato 'a cintura' che peggiora di notte stando sdraiata, disturbi urinari (urgenza).",
        anamnesi: "In cura da anni per 'artrosi lombare' e 'sciatalgia' senza benefici con FANS o fisioterapia.",
        note_infermiera: "La paziente cammina con andatura 'a forbice' (spastica). Riferisce che le gambe saltano da sole quando è a riposo (clono spontaneo).",

        // --- LABORATORIO ---
        emocromo: "Normale.",
        chimica_clinica: "Normale.",
        emogas: "Normale.",
        ves_pcr: "Normale.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        esame_liquor: "Dissociazione albumino-citologica: Proteine molto elevate (> 100 mg/dL) con cellule normali (Sindrome di Froin da blocco del flusso liquorale).",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Marcatori tumorali negativi.",

        // --- IMAGING ---
        rx: "RX Rachide: Spondilosi diffusa (artrosi), nessun crollo vertebrale o lesione osteolitica evidente.",
        tc: "TC Rachide (senza mdc): Modeste protrusioni discali, non giustificano la clinica. Massa isodensa nel canale spinale difficile da distinguere dal midollo senza contrasto.",
        risonanza: "RMN Rachide Dorsale (con Gadolinio): Massa intradurale extramidollare a livello D8-D9, che comprime severamente il midollo spinale. Presenza del segno della 'coda durale' (Dural tail sign).",
        angio: "Negativa.",
        ecografia: "Vescica a pareti ispessite (Vescica neurologica).",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Normale.",
        pet: "Nessuna captazione suggestiva di metastasi.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Esame istologico (post-operatorio): Meningioma psammomatoso (benigno, Grado I WHO).",
        eeg: "Normale.",
        emg: "Nessun segno di denervazione nei muscoli degli arti superiori. Segni di sofferenza piramidale agli arti inferiori.",
        esame_neurologico_specifico: "Iperreflessia rotulea e achillea bilaterale. Segno di Babinski positivo bilaterale. Livello sensitivo (ipoestesia) al di sotto dell'ombelico.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        plasmaferesi: "Nessun effetto.",
        intubazione: "Non necessaria.",
        
        // FARMACI
        antibiotici: "Nessun effetto.",
        cortisone: "Desametasone: Riduzione dell'edema peritumorale con transitorio miglioramento della forza e del dolore.",
        farmaco_fans: "Sollievo minimo dal dolore.",
        chemioterapia: "Non indicata per meningiomi benigni.",
        
        // TERAPIA RISOLUTIVA
        intervento_chirurgico: "Laminectomia e asportazione della massa: Recupero graduale della funzione motoria e sfinterica. Prognosi eccellente."
    },

    // ---------------- CASO 53: INFEZIONE DA CHLAMYDIA (CON SINDROME DI FITZ-HUGH-CURTIS) ----------------
    {
        id: 53,
        nome_malattia: "Infezione da Chlamydia Trachomatis (PID + Fitz-Hugh-Curtis)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 24,
        sintomi: "Dolore al basso ventre (pelvico) persistente, dolore acuto al fianco destro (zona fegato) che peggiora tossendo o respirando profondo, perdite vaginali anomale.",
        anamnesi: "Attiva sessualmente, partner multipli recenti. Riferisce dolore durante i rapporti sessuali (dispareunia) nelle ultime settimane.",
        note_infermiera: "Temperatura 38°C. Palpazione dell’addome superiore destro dolorosa con respiro bloccato, all’esame ginecologico marcato dolore alla mobilizzazione della cervice (segno del lampadario).",

        // --- LABORATORIO ---
        emocromo: "Leucociti 13.500/mmc (Neutrofilia). Hb normale.",
        chimica_clinica: "ALT e AST nella norma o lievemente mosse (il fegato parenchimale è sano, è la capsula a essere infiammata). Bilirubina normale.",
        emogas: "Normale.",
        ves_pcr: "VES 40 mm/h. PCR 6.0 mg/dL.",
        emocoltura: "Negativa.",
        esame_urine: "Leucociti nelle urine (piuria sterile, per contiguità).",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        striscio_sangue: "Normale.",
        dosaggi_specifici: "Test di gravidanza (Beta-HCG): Negativo.",
        
        // --- IMAGING ---
        rx: "RX Torace: Negativo. Non aria libera sottodiaframmatica.",
        tc: "TC Addome: Ispessimento della capsula epatica (fase arteriosa precoce). Discreto versamento pelvico. Annessi lievemente ingrossati.",
        risonanza: "Non indicata.",
        angio: "Negativa.",
        ecografia: "Eco Pelvi: Tube di Falloppio dilatate e ripiene di liquido (Idrosalpinge). Eco Fegato: Parenchima normale, ma dolore al passaggio della sonda sulla capsula (Peri-epatite).",
        elettrocardiogramma: "Tachicardia sinusale.",
        ecocardiogramma: "Normale.",
        pet: "Captazione flogistica in sede pelvica e peri-epatica.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria.",
        intervento_chirurgico: "Visualizzazione di aderenze fibrose 'a corda di violino' tra la capsula epatica e la parete addominale anteriore (Segno patognomonico della S. di Fitz-Hugh-Curtis).",
        paracentesi: "Nessun liquido ascitico significativo.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        intervento_chirurgico: "Lisi delle aderenze se il dolore cronico persiste, ma non cura l'infezione acuta.",
        
        // FARMACI
        antibiotici: "Doxiciclina + Ceftriaxone (o Azitromicina): Risoluzione della febbre e del dolore pelvico/addominale in 48-72 ore.",
        cortisone: "Nessun effetto curativo, possibile mascheramento dei sintomi.",
        antivirale: "Nessun effetto.",
        farmaco_fans: "Riduzione parziale del dolore.",
        fluidoterapia: "Nessun effetto particolare."
    },

// ---------------- CASO 54: MALATTIA CELIACA (FORMA PEDIATRICA CLASSICA) ----------------
    {
        id: 54,
        nome_malattia: "Malattia Celiaca (Forma Classica)",
        livello_difficolta: "Facile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 3,
        sintomi: "Diarrea cronica con feci abbondanti, chiare e molto maleodoranti (steatorrea). Arresto della crescita (Failure to thrive), distensione addominale marcata, irritabilità e cambiamenti d'umore (piange spesso senza motivo).",
        anamnesi: "Nato a termine, sano. I problemi sono iniziati gradualmente intorno ai 9-12 mesi di vita. La madre riferisce che 'ha smesso di prendere peso' da un anno.",
        note_infermiera: "Il bambino ha un aspetto caratteristico 'a ragno': pancia molto gonfia e tesa, ma braccia e gambe sottilissime. Ho notato che i glutei sono quasi scomparsi (atrofia muscolare glutea o 'segno delle braghe calate').",

        // --- LABORATORIO ---
        emocromo: "Hb 9.5 g/dL (Anemia microcitica sideropenica). Piastrine 450.000/mmc (Trombocitosi da carenza di ferro).",
        chimica_clinica: "Ferro sierico: 15 µg/dL (Molto basso). Ferritina: 4 ng/mL. Albumina: 2.9 g/dL (Ipoalbuminemia da malassorbimento). Calcio: 8.0 mg/dL. Transaminasi (AST/ALT): 80/90 U/L ('Epatite celiaca' ipertransaminasemia isolata).",
        emogas: "Normale.",
        ves_pcr: "VES lievemente mossa. PCR negativa.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi (per escludere malattie reumatiche).",
        tossicologico: "Non indicato.",
        esame_feci: "Ricerca parassiti negativa (Giardia). Test Sudan III: Positivo (presenza di grassi nelle feci).",
        striscio_sangue: "Microcitosi, ipocromia.",
        
        // IL TEST CHIAVE
        dosaggi_specifici: "Anticorpi anti-Transglutaminasi (tTG) IgA: > 100 U/mL (Valore > 10 volte la norma, in pediatria permette diagnosi anche senza biopsia se confermato da EMA). Anticorpi anti-Endomisio (EMA): POSITIVI. IgA totali: Normali.",

        // --- IMAGING ---
        rx: "RX Ossa (Polso per età ossea): Ritardo di maturazione scheletrica rispetto all'età anagrafica.",
        tc: "Non indicata.",
        risonanza: "Non indicata.",
        angio: "Non indicata.",
        ecografia: "Eco Addome: Meteorismo intestinale massivo. Anse intestinali dilatate e piene di liquido. Peristalsi vivace.",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Duodenale (se eseguita): Atrofia totale dei villi, iperplasia delle cripte, aumento linfociti intraepiteliali (Marsh 3c).",
        endoscopia: "EGDS: Mucosa del duodeno piatta, assenza delle pliche ('aspetto a tubo di gomma').",
        paracentesi: "Non indicata.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        intervento_chirurgico: "Non indicato.",
        trasfusione_piastrine: "Non indicata.",
        intubazione: "Non necessaria.",
        
        // FARMACI
        antibiotici: "Nessun miglioramento della diarrea (esclude sovracrescita batterica o infezioni).",
        cortisone: "Lieve miglioramento temporaneo dell'umore e dell'appetito, ma persistenza dell'atrofia.",
        ferro_supplementare: "Orale: Scarsa risposta (l'intestino atrofico non lo assorbe).",
    },

// ---------------- CASO 55: SINDROME DI VON HIPPEL-LINDAU (VHL) ----------------
    {
        id: 55,
        nome_malattia: "Sindrome di von Hippel-Lindau",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Maschio",
        eta: 32,
        sintomi: "Cefalea nucale persistente, vertigini, nausea mattutina, calo della vista all'occhio destro, palpitazioni improvvise.",
        anamnesi: "Il padre è morto a 40 anni per un 'tumore al rene'. Il paziente riferisce di avere la pressione alta da qualche mese nonostante sia sportivo e magro.",
        note_infermiera: "Pressione arteriosa molto instabile (picchi di 190/110 mmHg). Al fondo dell'occhio destro vedo un vaso sanguigno molto dilatato e tortuoso che finisce in una pallina rossa.",

        // --- LABORATORIO ---
        emocromo: "Hb 18.5 g/dL (Poliglobulia/Eritrocitosi). Ematocrito 55%. (Causata dalla produzione di Eritropoietina da parte del tumore cerebellare o renale).",
        chimica_clinica: "Funzionalità renale normale. Glicemia normale.",
        emogas: "Normale.",
        ves_pcr: "Normali.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        striscio_sangue: "Normale.",
        
        // IL TEST CHIAVE
        dosaggi_specifici: "Catecolamine urinarie/Metanefrine: Aumentate (presenza di Feocromocitoma). Eritropoietina (EPO) sierica: Alta. Test genetico VHL: Mutazione presente.",

        // --- IMAGING ---
        rx: "RX Torace: Normale.",
        tc: "TC Addome: Reni disseminati di cisti multiple bilaterali. Presenza di massa surrenalica destra (Feocromocitoma). Cisti multiple nel pancreas.",
        risonanza: "RMN Encefalo: Massa cistica nel cervelletto con nodulo murale che prende contrasto (Emangioblastoma cerebellare).",
        angio: "Angiografia retinica: Angioma retinico periferico.",
        ecografia: "Eco Reni: Reni policistici atipici (cisti complesse).",
        elettrocardiogramma: "Tachicardia sinusale, segni di ipertrofia ventricolare sx (da ipertensione).",
        ecocardiogramma: "Ipertrofia concentrica.",
        pet: "Non indicata come prima linea.",

        // --- PROCEDURE & NEURO ---
        biopsia: "CONTROINDICATA sul feocromocitoma prima del blocco alfa (rischio crisi ipertensiva mortale). Istologia post-operatoria emangioblastoma: Cellule stromali vacuolate ricche di lipidi ('stromal cells') e ricca rete capillare.",
        endoscopia: "Non indicata.",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",
        esame_neurologico_specifico: "Atassia cerebellare (il paziente non riesce a camminare in linea retta, cade verso un lato). Nistagmo.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Non necessaria (funzione renale conservata).",
        intubazione: "Necessaria solo per gli interventi neurochirurgici.",
        
        // FARMACI
        antibiotici: "Nessun effetto.",
        cortisone: "Riduzione temporanea dell'edema cerebrale attorno all'emangioblastoma (Sintomatico).",
        farmaco_betabloccante: "DA NON DARE DA SOLO prima degli alfa-bloccanti nel feocromocitoma: Rischio di crisi ipertensiva paradossa (blocco vasodilatazione periferica).",
        
        // TERAPIA RISOLUTIVA
        intervento_chirurgico: "Resezione dell'emangioblastoma cerebellare (risolve vertigini e cefalea) e surrenalectomia (risolve ipertensione). Monitoraggio a vita per Carcinoma Renale a cellule chiare.",
    },

    // ---------------- CASO 56: MORBILLO (IN ADULTO) ----------------
    {
        id: 56,
        nome_malattia: "Morbillo (Complicato da Polmonite)",
        livello_difficolta: "Medio",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 27,
        sintomi: "Febbre altissima (40°C), tosse stizzosa, naso che cola (rinorrea profusa), occhi rossi che lacrimano (congiuntivite), fastidio alla luce (fotofobia).",
        anamnesi: "La paziente non è mai stata vaccinata ('i miei genitori erano contrari'). È tornata da un viaggio internazionale 10 giorni fa. Nega allergie.",
        note_infermiera: "La paziente sembra 'sporca' in viso, ma è un'eruzione cutanea rossa che sta iniziando dietro le orecchie e scende verso il collo. Aprendo la bocca ho visto dei puntini bianchi sulla mucosa delle guance che sembrano granelli di sale.",

        // --- LABORATORIO ---
        emocromo: "Leucociti 2.500/mmc (Leucopenia marcata). Linfociti bassi. Piastrine 130.000/mmc (Lieve trombocitopenia).",
        chimica_clinica: "PCR 4.0 mg/dL. Transaminasi lievemente mosse. LDH aumentato.",
        emogas: "pO2 70 mmHg (Ipossiemia lieve da inizio polmonite interstiziale).",
        ves_pcr: "VES aumentata.",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "Negativi.",
        tossicologico: "Negativo.",
        striscio_sangue: "Linfociti reattivi.",
        
        // IL TEST CHIAVE
        dosaggi_specifici: "IgM anti-Morbillo: POSITIVE. RT-PCR per Morbillo su tampone faringeo/urine: POSITIVA.",

        // --- IMAGING ---
        rx: "RX Torace: Infiltrati interstiziali bilaterali diffusi ('Polmonite a cellule giganti' virale).",
        tc: "TC Torace (se fatta per dubbi): Aree di ground-glass diffuse.",
        risonanza: "Non indicata (a meno di segni di encefalite).",
        angio: "Negativa.",
        ecografia: "Splenomegalia reattiva.",
        elettrocardiogramma: "Tachicardia sinusale.",
        ecocardiogramma: "Normale.",
        pet: "Non indicata.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Non necessaria. Se fatta (es. polmone): Cellule giganti multinucleate di Warthin-Finkeldey.",
        eeg: "Rallentamento lieve (se encefalite in corso).",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        intervento_chirurgico: "Non indicato.",
        trasfusione_piastrine: "Non indicata.",
        intubazione: "Necessaria solo in caso di insufficienza respiratoria grave (polmonite morbillosa acuta).",
        
        // FARMACI
        antibiotici: "Nessun effetto sul virus. Utili solo se si sovrappone una polmonite batterica (superinfezione).",
        cortisone: "Controverso, generalmente non usato nella fase acuta virale.",
        antivirale: "Ribavirina: Usata talvolta nei casi gravissimi o immunodepressi (uso off-label).",
        
        // TERAPIA DI SUPPORTO SPECIFICA
        fluidoterapia: "Idratazione di supporto per la febbre alta.",
        farmaco_fans: "Paracetamolo: Controllo della febbre."
    },

// ---------------- CASO 57: MORBO DI CROHN ----------------
    {
        id: 57,
        nome_malattia: "Morbo di Crohn",
        livello_difficolta: "Difficile",

        // --- DATI PAZIENTE ---
        sesso: "Femmina",
        eta: 22,
        sintomi: "Dolori addominali crampiformi ricorrenti (soprattutto in basso a destra), diarrea non sanguinolenta ma mucosa (4-5 scariche al dì), calo di peso importante, febbricola serale.",
        anamnesi: "Ha perso 8 kg negli ultimi 3 mesi. Riferisce dolori articolari alle caviglie e piaghe dolorose in bocca (afte) che vanno e vengono. Ex fumatrice (il fumo peggiora il Crohn, al contrario della Colite Ulcerosa).",
        note_infermiera: "La paziente è molto magra e pallida. Mi ha chiesto una garza perché ha una 'bolla che perde pus' vicino all'ano (Fistola perianale - indizio fondamentale).",

        // --- LABORATORIO ---
        emocromo: "Hb 9.8 g/dL (Anemia mista: sideropenica da perdita e megaloblastica da malassorbimento B12). Piastrine 450.000/mmc (Trombocitosi reattiva all'infiammazione). Leucociti 11.000/mmc.",
        chimica_clinica: "Albumina 2.8 g/dL (Bassa - malassorbimento/perdita proteica). Ferro basso. Vitamina B12 bassa (indica danno all'ileo terminale).",
        emogas: "Normale.",
        ves_pcr: "VES 65 mm/h. PCR 5.0 mg/dL (Infiammazione attiva).",
        emocoltura: "Negativa.",
        esame_urine: "Normale.",
        autoanticorpi: "p-ANCA negativi (tipici della Colite Ulcerosa).",
        tossicologico: "Negativo.",
        esame_feci: "Calprotectina fecale: > 1000 µg/g (Marcatore specifico di infiammazione intestinale). Sangue occulto positivo. Coprocoltura negativa (esclude Salmonella/Campylobacter).",
        striscio_sangue: "Anisocitosi.",
        
        // IL TEST CHIAVE (Sierologico)
        dosaggi_specifici: "Anticorpi anti-Saccharomyces cerevisiae (ASCA): POSITIVI (Specifici per Crohn).",

        // --- IMAGING ---
        rx: "RX Addome: Alcune anse del tenue dilatate con livelli idroaerei (sub-occlusione).",
        tc: "TC Enterografia: Ispessimento parietale dell'ileo terminale ('Segno del bersaglio'). Segno del pettine ('Comb sign': vasi mesenterici ingorgati). Presenza di 'skip lesions' (tratti malati alternati a tratti sani).",
        risonanza: "RMN Pelvi: Complessa fistola perianale transfinterica con ascesso ramificato.",
        angio: "Negativa.",
        ecografia: "Eco Anse Intestinali: Pareti dell'ileo ispessite (>4mm), perdita della stratificazione, grasso periviscerale infiammato ('Creeping fat').",
        elettrocardiogramma: "Normale.",
        ecocardiogramma: "Normale.",
        pet: "Captazione focale discontinua lungo il tenue e il colon destro.",

        // --- PROCEDURE & NEURO ---
        biopsia: "Biopsia Ileale/Colica: Infiammazione transmurale (a tutto spessore), aggregati linfoidi e granulomi non caseificanti (reperto patognomonico che lo distingue dalla Colite Ulcerosa).",
        endoscopia: "Colonscopia (ileo-colonscopia): Ulcere serpiginose profonde longitudinali, aspetto della mucosa a 'ciottolato' (Cobblestone appearance). Retto risparmiato (spesso).",
        paracentesi: "Nessun liquido.",
        eeg: "Normale.",
        emg: "Normale.",

        // --- EFFETTI TERAPIE ---
        dialisi: "Nessun effetto.",
        
        intervento_chirurgico: "Resezione ileo-colica: Risolve la stenosi o l'ascesso acuto, ma NON CURA la malattia. Era meglio evitare.",
        
        intubazione: "Non necessaria.",
        trasfusione_piastrine: "Non indicata.",
        
        // FARMACI
        antibiotici: "Metronidazolo/Ciprofloxacina: Utili per trattare l'ascesso perianale e ridurre il drenaggio della fistola, ma non spengono l'infiammazione intestinale sistemica.",
        cortisone: "Budesonide/Prednisone: Rapida induzione della remissione (spegne la riacutizzazione), ma non usabile a lungo termine per gli effetti collaterali.",
        farmaco_fans: "PEGGIORAMENTO: Rischio di scatenare una riacutizzazione severa o un sanguinamento.",
        farmaco_biologico: "Infliximab/Adalimumab (Anti-TNF alfa): Terapia cardine per chiudere le fistole e mantenere la remissione profonda (guarigione mucosale).",
        farmaco_immunosoppressore: "Azatioprina: Utile per il mantenimento a lungo termine.",
    }
];


let esamiDisponibili = {
    "Esami di laboratorio generali": [
        "emocromo",
        "ves_pcr",
        "coagulazione",
        "autoanticorpi",
        "test_stimolo_acth",
        "test_soppressione_desametasone",
        "esame_urine",
        "esame_feci",
        "striscio_sangue",
        "chimica_clinica",
        "emocoltura",
        "esame_liquor",
        "esame_microscopico_liquor",
        "glucosio_ev",
        "emogas"
    ],
    "Esami strumentali/diagnostici": [
        "angio",
        "eeg",
        "ecocardiogramma",
        "ecografia",
        "elettrocardiogramma",
        "emg",
        "esame_neurologico_specifico",
        "misurazione_pressione_compartimentale",
        "pet",
        "risonanza",
        "rx",
        "tc",
        "test_del_ghiaccio",
        "test_neuropsicologici"
    ],
    "Procedure/interventi": [
        "biopsia",
        "camera_iperbarica",
        "chemioterapia",
        "dialisi",
        "endoscopia",
        "intervento_chirurgico",
        "intubazione",
        "paracentesi",
        "plasmaferesi",
        "trasfusione_piastrine"
    ],
    "Altro / generici / monitoraggi": [
        "anticoagulante",
        "fluidoterapia",
        "ricerca_ambientale",
        "tossicologico"
    ],
    "Farmaci": [
        "antibiotici",
        "antivirale",
        "cortisone",
        "farmaco_adrenalina",
        "farmaco_amfotericina",
        "farmaco_antiparassitario",
        "farmaco_antipsicotico",
        "farmaco_antiretrovirale",
        "farmaco_antitiroideo",
        "farmaco_aspirina",
        "farmaco_benzodiazepine",
        "farmaco_betabloccante",
        "farmaco_biologico",
        "farmaco_ciproeptadina",
        "farmaco_cotrimossazolo",
        "farmaco_fans",
        "farmaco_immunosoppressore",
        "farmaco_inibitore_acetilcolinesterasi",
        "farmaco_ketoconazolo",
        "farmaco_levodopa",
        "farmaco_neurolettico",
        "farmaco_octreotide",
        "farmaco_tetrabenazina",
        "ferro_supplementare",
        "immunoglobuline",
        "insulina",
        "ossigeno_alta_concentrazione"
    ],
    "SPOILER: Esami Soluzione": [
        "dosaggi_specifici",
        "farmaco_antidoto"
    ]
};