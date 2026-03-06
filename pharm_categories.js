/* Auto-extracted tracker categories — shared by tracker page and index.html */
const PHARM_CATEGORIES = [
  {
    id:"autonomic", name:"Autonomic Pharmacology", why:"Foundational for CV, neuro, and organ systems", time:"2.5 hrs",
    videos:[
      {id:"au1",num:"1.1",name:"Cholinomimetics",time:"16min"},
      {id:"au2",num:"1.2",name:"Cholinesterase Inhibitors",time:"21min"},
      {id:"au3",num:"1.3",name:"Muscarinic Antagonists",time:"20min"},
      {id:"au4",num:"2.1",name:"Sympathomimetics",time:"30min"},
      {id:"au5",num:"2.2",name:"Indirect Sympathomimetics",time:"17min"},
      {id:"au6",num:"2.3",name:"Alpha Drugs",time:"22min"},
      {id:"au7",num:"2.4",name:"Beta Blockers",time:"24min"}
    ]
  },
  {
    id:"cv", name:"Cardiovascular & Renal", why:"CV drugs are heavily tested on Step 1", time:"4 hrs",
    videos:[
      {id:"cv1",num:"1.1",name:"Digoxin, Milrinone, Nesiritide",time:"20min"},
      {id:"cv2",num:"1.2",name:"ACE Inhibitors, ARBs, Aliskiren",time:"26min"},
      {id:"cv3",num:"2.1",name:"Acetazolamide, Mannitol",time:"24min"},
      {id:"cv4",num:"2.2",name:"Loop Diuretics",time:"21min"},
      {id:"cv5",num:"2.3",name:"Thiazides",time:"20min"},
      {id:"cv6",num:"2.4",name:"K+ Sparing Diuretics",time:"25min"},
      {id:"cv7",num:"3.1",name:"Calcium Channel Blockers",time:"21min"},
      {id:"cv8",num:"3.2",name:"Primary HTN & Hypertensive Emergency",time:"25min"},
      {id:"cv9",num:"4.1",name:"Antiarrhythmics - Class I A-C",time:"24min"},
      {id:"cv10",num:"4.2",name:"Antiarrhythmics - Class II",time:"10min"},
      {id:"cv11",num:"4.3",name:"Antiarrhythmics - Class III",time:"12min"},
      {id:"cv12",num:"4.4",name:"Antiarrhythmics - Class IV",time:"9min"},
      {id:"cv13",num:"4.5",name:"Antiarrhythmics - Class V (Adenosine, Mg)",time:"13min"}
    ]
  },
  {
    id:"blood", name:"Blood & Inflammation", why:"Anticoagulants and NSAIDs appear on nearly every exam", time:"3.5 hrs",
    videos:[
      {id:"bl1",num:"1.1",name:"Heparin, LMWH, Fondaparinux, DTIs, Direct Xa",time:"30min"},
      {id:"bl2",num:"1.2",name:"Warfarin",time:"21min"},
      {id:"bl3",num:"1.3",name:"Anti-Platelet Agents",time:"29min"},
      {id:"bl4",num:"1.4",name:"Thrombolytics",time:"15min"},
      {id:"bl5",num:"2.1",name:"Statins (HMG-CoA Reductase Inhibitors)",time:"26min"},
      {id:"bl6",num:"2.2",name:"Cholestyramine, Ezetimibe",time:"17min"},
      {id:"bl7",num:"2.3",name:"Fibrates, Niacin",time:"16min"},
      {id:"bl8",num:"3.1",name:"NSAIDs",time:"34min"},
      {id:"bl9",num:"3.2",name:"Gout Drugs",time:"24min"}
    ]
  },
  {
    id:"smooth", name:"Smooth Muscle", why:"Asthma and migraine drugs test MOA and specificity", time:"1.5 hrs",
    videos:[
      {id:"sm1",num:"1.1",name:"Nitrates",time:"19min"},
      {id:"sm2",num:"1.2",name:"Triptans & Migraine",time:"9min"},
      {id:"sm3",num:"1.3",name:"Prostaglandins, Prostacyclin, Bosentan, PDE5i",time:"16min"},
      {id:"sm4",num:"2.1",name:"Anti-Histamines",time:"16min"},
      {id:"sm5",num:"2.2",name:"Asthma Therapy",time:"22min"}
    ]
  },
  {
    id:"gi", name:"GI & Endocrine", why:"Diabetes drugs are extremely high-yield", time:"3.75 hrs",
    videos:[
      {id:"gi1",num:"1.1",name:"Anti-Emetic Agents",time:"19min"},
      {id:"gi2",num:"1.2",name:"H2 Receptor Blockers, PPIs",time:"23min"},
      {id:"gi3",num:"1.3",name:"Laxative Agents",time:"17min"},
      {id:"gi4",num:"2.1",name:"Insulin, Sulfonylureas, Meglitinides, GLP-1, DPP-4",time:"30min"},
      {id:"gi5",num:"2.2",name:"Metformin, TZDs, Pramlintide, SGLT2 Inhibitors",time:"24min"},
      {id:"gi6",num:"3.1",name:"Propylthiouracil, Methimazole, Levothyroxine",time:"22min"},
      {id:"gi7",num:"3.2",name:"Bisphosphonates, Raloxifene, Denosumab, Calcitonin",time:"18min"},
      {id:"gi8",num:"3.3",name:"Teriparatide, Vitamin D, Cinacalcet, Sevelamer",time:"19min"},
      {id:"gi9",num:"3.4",name:"Glucocorticoids",time:"21min"},
      {id:"gi10",num:"4.1",name:"ADH, DDAVP, ADH Receptor Antagonists",time:"19min"},
      {id:"gi11",num:"4.2",name:"Growth Hormone, Mecasermin, Octreotide, Pegvisomant",time:"18min"}
    ]
  },
  {
    id:"neuro", name:"Neuro & Psych", why:"Antidepressants and antipsychotics appear constantly", time:"4.5 hrs",
    videos:[
      {id:"np1",num:"1.1",name:"Benzodiazepines, Flumazenil",time:"20min"},
      {id:"np2",num:"1.2",name:"Nonbenzo Hypnotics, Melatonin, Ramelteon",time:"13min"},
      {id:"np3",num:"1.3",name:"Barbiturates",time:"14min"},
      {id:"np4",num:"2.1",name:"Propofol, Etomidate, Ketamine",time:"10min"},
      {id:"np5",num:"2.2",name:"Inhaled Anesthetics, Dantrolene",time:"15min"},
      {id:"np6",num:"2.3",name:"Opiates, Naloxone, Naltrexone",time:"21min"},
      {id:"np7",num:"3.1",name:"SSRIs, SNRIs, Cyproheptadine",time:"21min"},
      {id:"np8",num:"3.2",name:"Tricyclic Antidepressants",time:"16min"},
      {id:"np9",num:"3.3",name:"MAO Inhibitors",time:"13min"},
      {id:"np10",num:"3.4",name:"Bupropion, Mirtazapine, Trazodone",time:"15min"},
      {id:"np11",num:"4.1",name:"Lithium",time:"12min"},
      {id:"np12",num:"4.2",name:"Valproate, Topiramate, Lamotrigine, Levetiracetam",time:"14min"},
      {id:"np13",num:"4.3",name:"Carbamazepine, Phenytoin, Gabapentin, Tiagabine, Vigabatrin",time:"19min"},
      {id:"np14",num:"4.4",name:"Ethosuximide",time:"6min"},
      {id:"np15",num:"5.1",name:"First Generation Antipsychotics",time:"20min"},
      {id:"np16",num:"5.2",name:"Second Generation Antipsychotics",time:"17min"},
      {id:"np17",num:"5.3",name:"Parkinson's Pharmacology",time:"20min"}
    ]
  },
  {
    id:"antimicro", name:"Antimicrobials", why:"Infections are the largest Step 1 category", time:"5.5 hrs",
    videos:[
      {id:"am1",num:"1.1",name:"Penicillin",time:"13min"},
      {id:"am2",num:"1.2",name:"Nafcillin, Oxacillin, Methicillin, Dicloxacillin",time:"6min"},
      {id:"am3",num:"1.3",name:"Ampicillin, Amoxicillin, Piperacillin, Ticarcillin",time:"13min"},
      {id:"am4",num:"1.4",name:"Cephalosporins",time:"15min"},
      {id:"am5",num:"1.5",name:"Monobactams & Carbapenems",time:"9min"},
      {id:"am6",num:"1.6",name:"Vancomycin",time:"11min"},
      {id:"am7",num:"1.7",name:"Daptomycin",time:"6min"},
      {id:"am8",num:"2.1",name:"Tetracyclines",time:"13min"},
      {id:"am9",num:"2.2",name:"Macrolides",time:"7min"},
      {id:"am10",num:"2.3",name:"Clindamycin",time:"11min"},
      {id:"am11",num:"2.4",name:"Chloramphenicol",time:"5min"},
      {id:"am12",num:"2.5",name:"Linezolid",time:"7min"},
      {id:"am13",num:"2.6",name:"Aminoglycosides",time:"13min"},
      {id:"am14",num:"3.1",name:"Tuberculosis Drugs",time:"17min"},
      {id:"am15",num:"3.2",name:"Leprosy Drugs",time:"7min"},
      {id:"am16",num:"4.1",name:"Trimethoprim / Sulfamethoxazole",time:"17min"},
      {id:"am17",num:"4.2",name:"Fluoroquinolones",time:"12min"},
      {id:"am18",num:"4.3",name:"Metronidazole",time:"9min"},
      {id:"am19",num:"5.1",name:"Amphotericin B, Flucytosine",time:"12min"},
      {id:"am20",num:"5.2",name:"Azoles",time:"12min"},
      {id:"am21",num:"5.3",name:"Griseofulvin, Terbinafine, Echinocandins",time:"9min"},
      {id:"am22",num:"6.1",name:"NRTIs",time:"11min"},
      {id:"am23",num:"6.2",name:"NNRTIs",time:"5min"},
      {id:"am24",num:"6.3",name:"Protease Inhibitors",time:"7min"},
      {id:"am25",num:"6.4",name:"Maraviroc, Fusion Inhibitors, Integrase Inhibitors",time:"10min"},
      {id:"am26",num:"7.1",name:"IFN-α, IFN-β, IFN-γ",time:"10min"},
      {id:"am27",num:"7.2",name:"Ribavirin, Sofosbuvir, Simeprevir",time:"11min"},
      {id:"am28",num:"8.1",name:"Acyclovir, Valacyclovir, Famciclovir, Cidofovir, Foscarnet",time:"14min"},
      {id:"am29",num:"8.2",name:"Ganciclovir, Valganciclovir, Foscarnet, Cidofovir",time:"12min"}
    ]
  },
  {
    id:"onco", name:"Antineoplastics", why:"Focus heavily on unique drug toxicities", time:"~2 hrs",
    videos:[
      {id:"on1",num:"1.1",name:"Methotrexate, Leucovorin, 5-FU, Hydroxyurea",time:"29min"},
      {id:"on2",num:"1.2",name:"Azathioprine, 6-MP, Mycophenolate Mofetil",time:"16min"},
      {id:"on3",num:"1.3",name:"Cladribine, Cytarabine, Gemcitabine",time:"7min"},
      {id:"on4",num:"2.1",name:"Cyclophosphamide, Ifosfamide, Busulfan, Nitrosureas",time:"12min"},
      {id:"on5",num:"2.2",name:"Cisplatin, Carboplatin, Amifostine",time:"6min"},
      {id:"on6",num:"2.3",name:"Bleomycin, Doxorubicin, Daunorubicin",time:"8min"},
      {id:"on7",num:"2.4",name:"Etoposide, Teniposide, Topotecan, Irinotecan",time:"6min"},
      {id:"on8",num:"2.5",name:"Vincristine, Vinblastine, Paclitaxel",time:"7min"},
      {id:"on9",num:"3.1",name:"Imatinib, Erlotinib, Sorafenib, Sunitinib, Vemurafenib",time:"15min"},
      {id:"on10",num:"3.2",name:"Rituximab, Cetuximab, Bevacizumab, Alemtuzumab, Trastuzumab",time:"23min"}
    ]
  }
];
