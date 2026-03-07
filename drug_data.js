const DRUGS = {

// ── AUTONOMIC ─────────────────────────────────────────────────────────────────
autonomic: [
  {
    group: "Parasympathetics",
    drugs: [
      {
        name: "Cholinomimetics (Direct)",
        aka: "Bethanechol · Carbachol · Pilocarpine · Methacholine",
        summary: "Direct **muscarinic agonists** that activate parasympathetic end organs without CNS activity (except pilocarpine).",
        moa: "Directly bind and activate **M1–M3 muscarinic receptors**, mimicking acetylcholine at parasympathetic effector organs.\nResistant to acetylcholinesterase hydrolysis.",
        use: "**Bethanechol:** postop/neurogenic urinary retention, postop ileus.\n**Pilocarpine:** open-angle glaucoma, Sjögren syndrome (stimulates salivary/lacrimal glands).\n**Methacholine:** bronchial provocation challenge to diagnose asthma.",
        se: "**DUMBBELLS:** Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Salivation. Sweating.",
        ci: "Asthma/COPD (bronchospasm); bowel or bladder obstruction; peptic ulcer disease.\nMethacholine contraindicated if FEV1 <60% predicted.",
        pk: "**Bethanechol:** quaternary amine — does NOT cross BBB.\n**Pilocarpine:** tertiary amine — crosses BBB. Both resistant to AChE.",
        pearl: "**Bethanechol** safely treats urinary retention because its quaternary structure prevents CNS entry.\n**Pilocarpine** contracts the ciliary muscle, opening Schlemm's canal to drain aqueous humor."
      },
      {
        name: "Acetylcholinesterase Inhibitors",
        aka: "Neostigmine · Pyridostigmine · Physostigmine · Edrophonium · Donepezil · Rivastigmine · Galantamine",
        summary: "Reversible **AChE inhibitors** that amplify ACh at both muscarinic and nicotinic synapses.",
        moa: "Bind the esteratic site of **acetylcholinesterase**, preventing ACh hydrolysis.\nIncrease ACh at **muscarinic** (parasympathetic effectors) and **nicotinic** (NMJ, autonomic ganglia) synapses.",
        use: "**Neostigmine/pyridostigmine:** myasthenia gravis, reversal of non-depolarizing NMB.\n**Edrophonium:** Tensilon test for MG diagnosis (ultra-short acting).\n**Donepezil/rivastigmine/galantamine:** Alzheimer dementia (symptomatic only).\n**Physostigmine:** reversal of central anticholinergic toxicity.",
        se: "**Cholinergic crisis:** DUMBBELLS + muscle fasciculations (nicotinic).\nExcess bradycardia, bronchospasm, urination, defecation.",
        ci: "Bowel or bladder obstruction; concurrent succinylcholine (prolongs depolarizing block).\n**Physostigmine:** avoid in TCA overdose (seizure risk).",
        pk: "**Physostigmine:** tertiary amine — crosses BBB (only AChEI for central anticholinergic toxicity).\n**Neostigmine/pyridostigmine:** quaternary amines — do NOT cross BBB.",
        pearl: "Use **physostigmine** for central anticholinergic toxicity (delirium, urinary retention, hot/dry/flushed).\nFor organophosphate poisoning, **atropine** controls muscarinic symptoms; **pralidoxime** regenerates AChE — must be given before the enzyme 'ages.'"
      },
      {
        name: "Muscarinic Antagonists (Anticholinergics)",
        aka: "Atropine · Scopolamine · Ipratropium · Tiotropium · Oxybutynin · Tolterodine · Benztropine · Glycopyrrolate",
        summary: "Competitive **M1–M3 muscarinic receptor antagonists** that reduce parasympathetic tone throughout the body.",
        moa: "Competitive antagonism at **M1–M3 receptors**, blocking ACh-mediated effects on heart, airway, GI/GU smooth muscle, exocrine glands, and pupils.",
        use: "**Atropine:** symptomatic bradycardia, organophosphate poisoning.\n**Scopolamine:** motion sickness (transdermal).\n**Ipratropium/tiotropium:** COPD (first-line bronchodilators), asthma add-on.\n**Benztropine:** Parkinson's disease, acute drug-induced dystonia.\n**Oxybutynin/tolterodine:** overactive bladder.",
        se: "**'Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter.'**\nTachycardia, urinary retention, constipation, decreased secretions, mydriasis, delirium (especially elderly).",
        ci: "**Narrow-angle glaucoma** (mydriasis closes drainage angle).\n**BPH** (urinary retention); hyperthermia (sweating blocked).",
        pk: "**Ipratropium/tiotropium:** inhaled quaternary amines — minimal systemic absorption.\n**Glycopyrrolate:** quaternary amine, does not cross BBB.\n**Scopolamine/benztropine:** tertiary amines, cross BBB.",
        pearl: "**Narrow-angle glaucoma** is the key contraindication — anticholinergic-induced mydriasis physically closes the anterior chamber angle, precipitating acute angle-closure glaucoma.\nAntidote for anticholinergic toxicity is **physostigmine** (only AChEI that crosses the BBB)."
      }
    ]
  },
  {
    group: "Sympathetics",
    drugs: [
      {
        name: "Epinephrine & Norepinephrine",
        aka: "Epinephrine · Norepinephrine",
        summary: "Endogenous catecholamines — epinephrine for **anaphylaxis and cardiac arrest**; norepinephrine as **first-line vasopressor in septic shock**.",
        moa: "**Epinephrine:** full agonist at α1, α2, β1, β2. Low doses: β2 dominates (bronchodilation); high doses: α1 vasoconstriction dominates.\n**Norepinephrine:** α1, α2, β1 agonist — minimal β2; predominantly vasoconstriction with modest inotropy.",
        use: "**Epinephrine:** anaphylaxis (IM thigh, 1:1000), cardiac arrest (IV 1:10,000), croup (nebulized racemic).\n**Norepinephrine:** septic shock (first-line vasopressor to maintain MAP ≥65 mmHg).",
        se: "Hypertension, tachyarrhythmias, tissue ischemia at infusion site.\n**Epinephrine:** hyperglycemia (β2-mediated glycogenolysis).\n**Norepinephrine:** reflex bradycardia, peripheral ischemia.",
        ci: "Epinephrine with cocaine/amphetamine toxicity (additive sympathomimesis).\nNo absolute CI in true anaphylaxis — epinephrine is always indicated.",
        pk: "Rapidly inactivated by MAO and COMT. Half-life ~2 minutes. Must be given IV or IM (not oral).",
        pearl: "**Epinephrine IM in anaphylaxis:** α1 vasoconstriction stops angioedema; β2 bronchodilation reverses bronchospasm.\n**Norepinephrine raises MAP** by increasing SVR — β1 inotropy often offset by reflex vagal slowing."
      },
      {
        name: "Dopamine & Dobutamine",
        aka: "Dopamine · Dobutamine",
        summary: "Inotropes for **cardiogenic shock**. Dopamine is dose-dependent; dobutamine is a pure inodilator.",
        moa: "**Dopamine:** dose-dependent — low (1–3 mcg/kg/min): D1 renal vasodilation; medium (3–10): β1 inotropy; high (>10): α1 vasoconstriction.\n**Dobutamine:** selective β1 > β2 — increases contractility and decreases afterload; does NOT increase MAP.",
        use: "**Dopamine:** cardiogenic shock with low BP, severe symptomatic bradycardia.\n**Dobutamine:** cardiogenic shock with adequate BP; pharmacological cardiac stress testing.",
        se: "Both: tachyarrhythmias, increased MVO2.\n**Dobutamine:** hypotension from β2-mediated vasodilation.",
        ci: "**Dobutamine:** HOCM (worsens outflow obstruction), tachyarrhythmias.\n**Dopamine:** pheochromocytoma.",
        pk: "Both require continuous IV infusion. Dopamine does NOT cross the BBB significantly at infusion doses.",
        pearl: "**Dobutamine increases contractility without raising MAP** — ideal for cardiogenic shock where the heart needs help but not more vascular resistance.\nStress echo uses dobutamine to unmask ischemia by increasing HR and contractility."
      },
      {
        name: "Phenylephrine & Isoproterenol",
        aka: "Phenylephrine · Isoproterenol",
        summary: "Selective adrenergic agonists with opposite hemodynamic profiles: phenylephrine raises BP with reflex bradycardia; isoproterenol raises HR with hypotension.",
        moa: "**Phenylephrine:** pure **α1 agonist** — increases SVR and MAP without direct cardiac stimulation.\n**Isoproterenol:** pure **β1 + β2 agonist** — increases HR and contractility while causing peripheral vasodilation.",
        use: "**Phenylephrine:** neurogenic shock, hypotension during neuraxial anesthesia, nasal decongestion, mydriatic eye drops.\n**Isoproterenol:** refractory bradycardia (bridge to pacing), Brugada syndrome unmasking.",
        se: "**Phenylephrine:** reflex bradycardia, severe HTN, tissue ischemia.\n**Isoproterenol:** tachycardia, severe hypotension, worsens angina.",
        ci: "**Phenylephrine:** severe hypertension.\n**Isoproterenol:** tachyarrhythmias, angina pectoris.",
        pk: "Rapid IV onset (seconds); short duration. Phenylephrine degraded by MAO; not a COMT substrate.",
        pearl: "**Phenylephrine** raises MAP causing **predictable reflex bradycardia** — useful to terminate AVNRT (vagal maneuver-like effect)."
      },
      {
        name: "Beta Blockers",
        aka: "Propranolol · Metoprolol · Atenolol · Carvedilol · Labetalol · Bisoprolol · Esmolol · Nadolol · Timolol",
        summary: "Competitive **β-adrenergic receptor antagonists** used for heart failure, hypertension, arrhythmias, and angina.",
        moa: "Block β1 (cardiac) and/or β2 (pulmonary, vascular) receptors, decreasing cAMP → reduced HR, contractility, and renin release.\n**Cardioselective agents** (metoprolol, atenolol, bisoprolol) prefer β1 at standard doses.",
        use: "**HFrEF** (carvedilol, metoprolol succinate, bisoprolol reduce mortality), post-MI, hypertension, stable angina, AFib rate control, migraine prophylaxis, hyperthyroidism symptom control.\n**Pheochromocytoma — only after alpha blockade is established.**",
        se: "Bradycardia, AV block, **bronchospasm** (non-selective), fatigue, erectile dysfunction, cold extremities.\n**Masks hypoglycemia** symptoms (tachycardia blunted — sweating preserved).\nRebound HTN/angina if stopped abruptly.",
        ci: "Decompensated HF, cardiogenic shock, high-degree AV block, severe reactive airway disease.\n**Never use in cocaine toxicity** (β2 blockade leaves α1 vasoconstriction unopposed).",
        pk: "**Propranolol:** crosses BBB, non-selective.\n**Esmolol:** IV, t1/2 ~9 min, ideal for acute perioperative rate control.\n**Carvedilol/labetalol:** also block α1 (vasodilation).\n**Nadolol:** renal elimination.",
        pearl: "**Only carvedilol, metoprolol succinate, and bisoprolol** have mortality benefit in HFrEF — not all beta-blockers are equivalent.\n**Never use non-selective beta-blockers in cocaine toxicity** — blocking β2 leaves α1 unopposed → severe hypertensive crisis."
      },
      {
        name: "Alpha Blockers",
        aka: "Prazosin · Terazosin · Doxazosin · Tamsulosin · Phentolamine · Phenoxybenzamine",
        summary: "**Alpha-adrenergic antagonists** that vasodilate arteries and relax urogenital smooth muscle.",
        moa: "**Prazosin/doxazosin/tamsulosin:** selective **α1 blockade** — vasodilation + relaxation of bladder neck/prostate smooth muscle.\n**Phentolamine/phenoxybenzamine:** non-selective **α1 + α2 blockade** — vasodilation; α2 blockade also increases NE release.",
        use: "**Tamsulosin:** BPH (uroselective α1A blockade).\n**Prazosin:** PTSD nightmares, hypertension.\n**Phentolamine:** hypertensive urgency from tyramine crisis, cocaine-induced HTN.\n**Phenoxybenzamine:** preoperative pheochromocytoma management (irreversible).",
        se: "**First-dose orthostatic hypotension** (start at bedtime).\nReflex tachycardia, nasal congestion, retrograde ejaculation (tamsulosin).",
        ci: "Concurrent PDE5 inhibitors (sildenafil) — severe additive hypotension.",
        pk: "**Phenoxybenzamine:** irreversible (alkylates α receptors), blockade outlasts the drug — used 10–14 days before pheo surgery.\n**Phentolamine:** reversible competitive, IV only.",
        pearl: "For **pheochromocytoma surgery**, α blockade (**phenoxybenzamine**) must be established BEFORE β blockade.\nStarting a beta-blocker first leaves α1-mediated vasoconstriction unopposed → catastrophic hypertensive crisis."
      },
      {
        name: "Local Anesthetics",
        aka: "Lidocaine · Bupivacaine · Ropivacaine · Mepivacaine · Prilocaine · Benzocaine · Cocaine · Tetracaine",
        summary: "Reversible **voltage-gated Na+ channel blockers** that prevent action potential propagation in peripheral nerves and the heart.",
        moa: "Enter axon as uncharged base, then become ionized inside to **block activated/inactivated Na+ channels** — use-dependent (more effective on rapidly firing neurons).",
        use: "Local infiltration, nerve blocks, epidural/spinal anesthesia.\n**Lidocaine:** Class IB antiarrhythmic for ventricular arrhythmias post-MI.\n**Cocaine:** only local anesthetic that also blocks NE reuptake (vasoconstriction useful in ENT).",
        se: "**CNS:** perioral tingling → seizures → coma (dose-dependent).\n**Bupivacaine:** highly cardiotoxic — wide QRS, refractory VF.\n**Benzocaine/prilocaine:** methemoglobinemia.\n**Cocaine:** HTN, coronary vasospasm.",
        ci: "**Bupivacaine IV for arrhythmias** (cardiotoxic).\nEpinephrine co-injection on **end-arteries** (digits, nose, penis, ear — ischemic necrosis).",
        pk: "**Amides** (lido**ca**ine, bupivacaine, ropivacaine) — hepatic CYP metabolism.\n**Esters** (co**ca**ine, tetracaine, benzocaine) — hydrolyzed by plasma pseudocholinesterase.",
        pearl: "**Infected/acidic tissue** causes more ionized drug (charged form can't cross membrane) — higher doses required.\nTreat **bupivacaine cardiotoxicity** with **20% lipid emulsion** (intralipid) to sequester the drug."
      },
      {
        name: "Neuromuscular Blocking Agents",
        aka: "Succinylcholine · Rocuronium · Vecuronium · Pancuronium · Atracurium · Cisatracurium",
        summary: "Paralytics at the NMJ for intubation and surgical relaxation — **depolarizing** (succinylcholine) vs. **non-depolarizing** (all others).",
        moa: "**Succinylcholine (depolarizing):** persistent agonist at nicotinic ACh receptors → sustained depolarization → fasciculations then flaccid paralysis. Resistant to AChE.\n**Rocuronium/vecuronium (non-depolarizing):** competitive nAChR antagonists — no fasciculations; reversed by sugammadex or neostigmine.",
        use: "Rapid sequence intubation, surgical muscle relaxation.\n**Succinylcholine:** RSI (fastest onset/offset).\n**Rocuronium:** preferred when succinylcholine is contraindicated (reversible with sugammadex).",
        se: "**Succinylcholine:** severe **hyperkalemia** (K+ released by depolarization — lethal in burn/crush/denervation injuries), **malignant hyperthermia** (with volatile anesthetics), prolonged block with pseudocholinesterase deficiency.\n**Non-depolarizing:** histamine release (atracurium).",
        ci: "**Succinylcholine:** burns/crush injuries >24 h, denervation, hyperkalemia, history of malignant hyperthermia, pseudocholinesterase deficiency.",
        pk: "**Succinylcholine:** hydrolyzed by **plasma pseudocholinesterase** (t1/2 ~10 min).\n**Atracurium/cisatracurium:** Hofmann elimination — safe in renal/hepatic failure.\n**Sugammadex** reverses rocuronium/vecuronium by encapsulation.",
        pearl: "**Succinylcholine hyperkalemia** results from extrajunctional nAChR upregulation after denervation — risk begins ~24 h after injury and persists for months.\nTreat malignant hyperthermia with **dantrolene** (blocks ryanodine receptor Ca²+ release)."
      },
      {
        name: "Barbiturates",
        aka: "Phenobarbital · Thiopental · Methohexital · Pentobarbital · Primidone",
        summary: "GABA-A positive allosteric modulators that increase **duration** of Cl⁻ channel opening — more lethal in overdose than benzodiazepines.",
        moa: "Bind a distinct site on **GABA-A receptors** → increase the **DURATION** of Cl⁻ channel opening per GABA binding event.\nAt high doses, can open the channel **independent of GABA** — no ceiling effect → respiratory depression and death.",
        use: "**Phenobarbital:** neonatal seizures, tonic-clonic seizures, status epilepticus.\n**Thiopental:** anesthesia induction, refractory elevated ICP.\n**Pentobarbital:** medically-induced coma for refractory ICP.",
        se: "Severe respiratory and cardiovascular depression (dose-dependent, no ceiling), tolerance, physical dependence.\n**Porphyria precipitation** (induces ALA synthase, increasing porphyrin synthesis).",
        ci: "**Porphyria** (absolute); severe respiratory insufficiency; history of addiction.",
        pk: "Strong **CYP450 inducers** — reduce levels of warfarin, OCPs, antiretrovirals, cyclosporine.\n**Thiopental:** short clinical duration due to rapid redistribution into fat (not by metabolism).",
        pearl: "**Barbiturates increase DURATION; benzodiazepines increase FREQUENCY** of Cl⁻ channel opening (mnemonic: Bar-D, Benzo-F).\nUnlike benzos, barbiturates can open channels without GABA and have no ceiling on respiratory depression — fatal overdose is easy."
      },
      {
        name: "Amphetamines & Methylphenidate",
        aka: "Amphetamine · Dextroamphetamine · Methamphetamine · Methylphenidate · Lisdexamfetamine",
        summary: "Indirect **sympathomimetics** that increase synaptic dopamine and norepinephrine — treating ADHD and narcolepsy, but with high abuse potential.",
        moa: "**Amphetamines:** enter the neuron via DAT/NET, then **reverse the transporter** (efflux pump), actively pushing DA and NE into the synapse; also block VMAT2.\n**Methylphenidate:** blocks DAT/NET reuptake without reversing them — a cleaner mechanism.",
        use: "ADHD, narcolepsy, binge eating disorder (lisdexamfetamine).\nAmphetamines also used for obesity (short-term).",
        se: "Hypertension, tachycardia, insomnia, anorexia, **growth suppression** (children), **psychosis** (mimics paranoid schizophrenia).\nRebound depression; high addiction potential (Schedule II).",
        ci: "MAOIs within 14 days (hypertensive crisis + serotonin syndrome); severe cardiovascular disease; hyperthyroidism.",
        pk: "Renal elimination; pH-dependent — alkaline urine increases reabsorption and prolongs toxicity.\n**Lisdexamfetamine:** inert prodrug requiring enzymatic cleavage in RBCs (abuse-deterrent design).",
        pearl: "**Amphetamines actively eject dopamine** via reverse transport — unlike cocaine which merely blocks reuptake.\nThis explains more profound dopamine release and longer-lasting neuronal depletion."
      }
    ]
  }
],

// ── CARDIO & RENAL ────────────────────────────────────────────────────────────
cv: [
  {
    group: "RAAS / Antihypertensives",
    drugs: [
      {
        name: "ACE Inhibitors",
        aka: "Lisinopril · Enalapril · Captopril · Ramipril · Benazepril · Fosinopril",
        summary: "Inhibit ACE to reduce angiotensin II and accumulate bradykinin — first-line for HFrEF, post-MI, and diabetic nephropathy.",
        moa: "Inhibit **angiotensin-converting enzyme (ACE)** → ↓ Ang II (less vasoconstriction + aldosterone) + ↑ **bradykinin** (vasodilation, but causes cough and angioedema).\nReduces efferent > afferent glomerular arteriolar tone — decreases GFR acutely but reduces proteinuria long-term.",
        use: "Hypertension, **HFrEF** (reduce mortality), **post-MI** (prevent remodeling), **diabetic nephropathy** (antiproteinuric), CKD with proteinuria.",
        se: "**CATCHH:** **C**ough (bradykinin-mediated, 10–15%), **A**ngioedema (rare but life-threatening), **T**eratogen (fetal renal tubular dysgenesis — Category D), **C**reatinine rise (~30% acceptable), **H**yperkalemia, **H**ypotension (first dose).",
        ci: "**Pregnancy** (Category D/X), bilateral renal artery stenosis (catastrophic GFR loss), prior ACEi-associated angioedema.",
        pk: "Most are prodrugs (enalapril → enalaprilat) requiring hepatic conversion. Renally excreted.\n**Captopril:** active drug with sulfhydryl group (more rash/taste disturbance).",
        pearl: "**ACEi cough and angioedema are both caused by bradykinin accumulation** — switching to an ARB eliminates cough but angioedema risk may persist early.\n**Do not use in bilateral RAS** — GFR depends on Ang II–mediated efferent constriction; removing this causes acute kidney injury."
      },
      {
        name: "ARBs",
        aka: "Losartan · Valsartan · Irbesartan · Candesartan · Olmesartan · Telmisartan",
        summary: "Block the AT1 receptor without affecting bradykinin — same indications as ACEi but **no cough**.",
        moa: "Competitive antagonism at the **AT1 receptor** (Gq-coupled), blocking Ang II–mediated vasoconstriction, aldosterone secretion, and cardiac/vascular remodeling.\nNo effect on ACE or bradykinin metabolism.",
        use: "Hypertension, HFrEF, diabetic nephropathy, post-MI.\n**Preferred over ACEi when cough is intolerable.**\nLosartan also lowers uric acid (blocks URAT1).",
        se: "**Hyperkalemia, ↑creatinine** (same mechanism as ACEi), **teratogenic** (Category D).\n**No cough** — key differentiator from ACEi.",
        ci: "Pregnancy, bilateral renal artery stenosis.\n**Never combine with ACEi** (ONTARGET trial: increased AKI/hyperkalemia without added benefit).",
        pk: "Hepatobiliary elimination more common than ACEi.\n**Losartan:** prodrug → active E-3174 metabolite (responsible for uric acid lowering and most antihypertensive effect).",
        pearl: "**ARBs do not elevate bradykinin** — correct substitution for ACEi-induced cough.\nAT1 blockade causes compensatory Ang II accumulation, which stimulates the unblocked AT2 receptor — AT2 activation is vasodilatory and contributes to ARB effect."
      },
      {
        name: "Aliskiren",
        aka: "Aliskiren",
        summary: "Direct **renin inhibitor** — the only drug in its class; blocks the RAAS at its first and rate-limiting step.",
        moa: "Directly binds and inhibits **renin**, preventing cleavage of angiotensinogen → Ang I.\nUniquely **lowers plasma renin activity (PRA)**, whereas ACEi and ARBs increase PRA via loss of negative feedback.",
        use: "Hypertension (monotherapy or combination). Limited use — no proven outcomes benefit over ACEi/ARBs.",
        se: "Hyperkalemia, ↑creatinine, **diarrhea** (more GI side effects than ACEi/ARBs), hypotension.",
        ci: "Pregnancy; **combination with ACEi or ARB in diabetics** (increased AKI + hyperkalemia — FDA black box warning).",
        pk: "Poor oral bioavailability (~2.5%); fatty meals reduce absorption. Renally eliminated. Long t1/2 (~40 hr).",
        pearl: "**Aliskiren is the only RAAS blocker that lowers PRA** — ACEi/ARBs both increase PRA via loss of Ang II feedback.\nCombination RAAS blockade (aliskiren + ACEi/ARB) is contraindicated in diabetics due to increased harm."
      },
      {
        name: "Hydralazine & Direct Vasodilators",
        aka: "Hydralazine · Minoxidil · Diazoxide",
        summary: "Direct arteriolar vasodilators that reduce afterload but provoke compensatory tachycardia and fluid retention — always combined with a beta-blocker and diuretic.",
        moa: "**Hydralazine:** increases **cGMP** to relax arteriolar smooth muscle selectively.\n**Minoxidil:** opens **ATP-sensitive K+ channels** → hyperpolarization → arteriolar relaxation.\nBoth cause pure afterload reduction with reflex sympathetic activation.",
        use: "**Hydralazine:** severe hypertension in pregnancy (safe for fetus), **HFrEF in African Americans** (hydralazine + isosorbide dinitrate reduces mortality when ACEi/ARBs not tolerated).\n**Minoxidil:** refractory hypertension, androgenic alopecia (topical).\n**Diazoxide:** acute hypoglycemia (inhibits insulin secretion).",
        se: "**Reflex tachycardia, severe fluid retention** — always co-prescribe beta-blocker + diuretic.\n**Hydralazine:** drug-induced lupus (anti-histone antibodies, slow acetylators at highest risk).\n**Minoxidil:** hypertrichosis (explains topical hair growth use).",
        ci: "Severe tachycardia, coronary artery disease (reflex tachycardia increases MVO2), **dissecting aortic aneurysm** (increased shear force).",
        pk: "**Hydralazine** is hepatically acetylated — **slow acetylators** develop higher drug levels and more lupus risk.\nMinoxidil active metabolite (minoxidil sulfate) opens K+ channels.",
        pearl: "**Hydralazine-induced lupus** features anti-histone antibodies with sparing of anti-dsDNA (unlike idiopathic SLE).\nThe A-HeFT trial established **hydralazine + isosorbide dinitrate** as mortality-reducing therapy in Black patients with HFrEF who cannot tolerate RAAS inhibitors."
      },
      {
        name: "Nitrates",
        aka: "Nitroglycerin · Isosorbide Dinitrate · Isosorbide Mononitrate · Sodium Nitroprusside",
        summary: "**Nitric oxide donors** that relax vascular smooth muscle — venodilation predominates, reducing preload; used in angina, acute HF, and hypertensive emergencies.",
        moa: "Release **nitric oxide (NO)** → activates soluble guanylyl cyclase → ↑cGMP → smooth muscle relaxation.\n**Low doses:** venodilation (↓ preload, ↓ wall stress). **High doses:** arteriolar dilation (↓ afterload).\n**Nitroprusside** releases NO + cyanide — metabolized to cyanide then thiocyanate.",
        use: "**Sublingual NTG:** acute angina attack (relief in 1–5 min).\n**IV NTG:** ACS, acute decompensated HF, hypertensive emergency.\n**Nitroprusside:** hypertensive emergency (most potent, most titratable).\n**Isosorbide dinitrate/mononitrate:** stable angina prophylaxis.",
        se: "**Headache** (cerebral vasodilation), **orthostatic hypotension**, reflex tachycardia.\n**Tachyphylaxis/tolerance** with continuous use — requires nitrate-free interval.\n**Nitroprusside:** cyanide toxicity (metabolic acidosis, elevated lactate) — treat with hydroxocobalamin + thiosulfate.",
        ci: "**PDE5 inhibitors** (sildenafil, tadalafil) — cGMP accumulates → severe hypotension and syncope (absolute CI).\n**Right ventricular infarction** (preload-dependent RV — NTG causes catastrophic hypotension).",
        pk: "**Sublingual NTG** bypasses hepatic first-pass metabolism via buccal absorption.\n**Tolerance** requires an 8–12 hour nitrate-free interval each day.\nNitroprusside: IV infusion only; monitor cyanide with prolonged use.",
        pearl: "**PDE5 + nitrate = absolute contraindication** — both drugs elevate cGMP, causing profound vasodilation.\n**Nitroprusside cyanide toxicity** manifests as paradoxical hypertension, lactic acidosis, and altered mental status — particularly in renal failure."
      }
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide · Bumetanide · Torsemide · Ethacrynic Acid",
        summary: "Most potent diuretics, blocking the **Na-K-2Cl cotransporter** in the thick ascending limb — first-line for pulmonary edema and edematous states.",
        moa: "Inhibit **NKCC2** in the thick ascending limb of Henle → disrupt the medullary osmotic gradient → massive natriuresis.\nAlso cause early venodilation (useful in acute pulmonary edema before diuresis begins).",
        use: "Acute pulmonary edema (IV furosemide — venodilation in minutes, diuresis in 30 min), chronic HF, cirrhotic ascites, **hypercalcemia** ('loops lose calcium'), nephrotic syndrome.",
        se: "**Hypokalemia**, metabolic alkalosis (contraction), hypomagnesemia, **hypocalcemia** (loops lose calcium).\n**Ototoxicity** (especially with aminoglycosides — synergistic).\nHyperuricemia (competes with urate secretion), hyperglycemia.",
        ci: "Severe sulfa allergy → use **ethacrynic acid** (only loop without sulfa structure, but more ototoxic).\nAnuria.",
        pk: "Highly protein-bound; secreted into tubular lumen via OAT transporters (NSAIDs block this, reducing efficacy).\nTorsemide has greater oral bioavailability than furosemide.",
        pearl: "**Loops lose calcium; thiazides save calcium** — a classic comparison.\nThe initial venodilatory effect of IV furosemide explains why it relieves dyspnea **before** significant diuresis begins."
      },
      {
        name: "Thiazide Diuretics",
        aka: "Hydrochlorothiazide · Chlorthalidone · Metolazone · Indapamide",
        summary: "Mild diuretics blocking the **NaCl cotransporter** in the DCT — first-line for hypertension and **calcium kidney stones**.",
        moa: "Inhibit the **NCC (Na-Cl cotransporter)** in the distal convoluted tubule.\nReduced intracellular Na+ increases basolateral Na/Ca exchange → more calcium reabsorbed from the tubule → **serum calcium rises** (hypercalcemia).",
        use: "Hypertension (first-line), **calcium nephrolithiasis** (reduce urinary calcium), **nephrogenic diabetes insipidus** (paradoxically reduce urine output via mild volume depletion → ↑ proximal reabsorption).",
        se: "**HyperGLUC:** Hyperglycemia, HyperLipidemia, HyperUricemia, Hypercalcemia.\nAlso: **hyponatremia, hypokalemia, metabolic alkalosis.** Sulfa cross-reactivity.",
        ci: "Sulfa allergy (relative); **not effective when GFR <30** — use loops instead.\nGout (raises uric acid).",
        pk: "Chlorthalidone has longer half-life and more consistent BP control than HCTZ.\nIneffective as diuretic in severe renal impairment.",
        pearl: "**Thiazides increase serum calcium** by increasing distal tubular calcium reabsorption — opposite of loops.\nUseful for calcium oxalate stone prevention (less calcium excreted in urine)."
      },
      {
        name: "K⁺-Sparing Diuretics",
        aka: "Spironolactone · Eplerenone · Amiloride · Triamterene",
        summary: "Distal diuretics that **retain potassium** via two distinct mechanisms — critical in heart failure and hyperaldosteronism.",
        moa: "**Spironolactone/eplerenone:** competitive antagonists at the **mineralocorticoid receptor** → block aldosterone-induced ENaC and Na/K-ATPase gene transcription → retain K+, lose Na+.\n**Amiloride/triamterene:** directly block **ENaC** channels in the collecting duct, independent of aldosterone.",
        use: "**Spironolactone:** HFrEF (reduces mortality — RALES trial), primary hyperaldosteronism, PCOS (anti-androgenic), ascites, resistant hypertension.\n**Eplerenone:** post-MI HF (EPHESUS).\n**Amiloride:** lithium-induced nephrogenic DI (blocks lithium entry via ENaC).",
        se: "**Hyperkalemia** (most important, potentially fatal).\n**Spironolactone:** gynecomastia, amenorrhea, impotence (anti-androgenic — blocks progesterone and androgen receptors).\n**Eplerenone:** no anti-androgenic effects (selective for MR).\n**Triamterene:** can crystallize in urine → kidney stones.",
        ci: "**Hyperkalemia**, severe renal failure (CrCl <30), concurrent ACEi/ARB without close monitoring.",
        pk: "**Spironolactone** acts via nuclear receptor transcription — onset requires 2–3 days; multiple active metabolites.\n**Amiloride/triamterene:** direct channel blockers, faster onset.",
        pearl: "**Spironolactone reduces HFrEF mortality beyond its diuretic effect** via anti-fibrotic mechanisms (blocks aldosterone-driven cardiac and vascular fibrosis).\n**Amiloride** treats lithium-induced DI by blocking ENaC, the channel lithium enters to cause collecting duct insensitivity."
      },
      {
        name: "Carbonic Anhydrase Inhibitors",
        aka: "Acetazolamide · Dorzolamide · Brinzolamide · Methazolamide",
        summary: "Proximal tubule diuretics causing **bicarbonate wasting** and metabolic acidosis — used for glaucoma, ICP, and altitude sickness.",
        moa: "Inhibit **carbonic anhydrase** in PCT cells → prevents H+ secretion + HCO3⁻ reabsorption → **bicarbonate wasting → hyperchloremic normal anion gap metabolic acidosis.**\nAlso decreases aqueous humor production by the ciliary body.",
        use: "**Open-angle glaucoma** (topical dorzolamide), **idiopathic intracranial hypertension (pseudotumor cerebri)**, **altitude sickness prophylaxis** (pre-treat 24–48 h before ascent), metabolic alkalosis correction.",
        se: "**Normal anion gap (hyperchloremic) metabolic acidosis**, hypokalemia, paresthesias (hands, feet, perioral).\nKidney stones (alkaline urine precipitates calcium phosphate), sulfa cross-reactivity.",
        ci: "Severe **hepatic disease** (metabolic acidosis impairs ammonia excretion → encephalopathy).\nSulfa allergy.",
        pk: "Renal excretion. Dorzolamide/brinzolamide are topical for glaucoma with minimal systemic absorption.",
        pearl: "**Altitude sickness mechanism:** acetazolamide induces metabolic acidosis → respiratory center interprets this as a drive to hyperventilate → respiratory alkalosis compensates → net increase in pO2 at altitude.\nThe prophylactic acidosis pre-acclimates respiratory drive before ascent."
      },
      {
        name: "Mannitol",
        aka: "Mannitol",
        summary: "Osmotic diuretic that acutely reduces **intracranial pressure** by drawing water from brain parenchyma into the vasculature.",
        moa: "Filtered at glomerulus but not reabsorbed → increases tubular fluid osmolarity → pulls water into the lumen → diuresis.\nAlso **draws interstitial fluid from brain into plasma** down osmotic gradient (if BBB is intact), rapidly decreasing ICP.",
        use: "**Acute elevated ICP** (head trauma, herniation), acute angle-closure glaucoma, prevention of oliguric ATN (controversial).",
        se: "**Initial volume expansion** (can precipitate acute pulmonary edema before diuresis begins), hypernatremia (free water lost).\n**Rebound ICP** with prolonged use (mannitol crosses damaged BBB).",
        ci: "**Severe HF or pulmonary edema** (initial volume expansion is dangerous), **active intracranial hemorrhage**, anuria.",
        pk: "IV bolus, 0.5–1 g/kg. Does NOT cross an intact blood-brain barrier — this is the basis for its ICP-lowering effect.",
        pearl: "**Mannitol's initial effect is volume expansion** (osmotic fluid shift from tissues to blood) BEFORE diuresis occurs — absolutely contraindicated in heart failure.\nMonitor serum osmolality (stop when >320 mOsm/kg to avoid tubular injury and rebound)."
      }
    ]
  },
  {
    group: "Antihypertensive Adjuncts",
    drugs: [
      {
        name: "Calcium Channel Blockers",
        aka: "Amlodipine · Nifedipine · Felodipine · Nicardipine · Verapamil · Diltiazem",
        summary: "Block **L-type Ca2+ channels** — DHPs target vascular smooth muscle; non-DHPs target cardiac SA/AV nodes.",
        moa: "**Dihydropyridines (DHPs — amlodipine, nifedipine):** preferentially block L-type Ca2+ channels in **vascular smooth muscle** → vasodilation; minimal cardiac effect.\n**Non-DHPs (verapamil, diltiazem):** block L-type Ca2+ channels in **SA and AV nodes** → decrease automaticity, prolong AV conduction; less vascular effect.",
        use: "**DHPs:** hypertension, stable angina, Prinzmetal/vasospastic angina, Raynaud phenomenon.\n**Non-DHPs:** AFib/AFL rate control, PSVT termination, hypertrophic cardiomyopathy (verapamil).\n**Nifedipine:** preterm labor tocolysis.",
        se: "**DHPs:** peripheral edema (precapillary vasodilation), reflex tachycardia, flushing, gingival hyperplasia.\n**Non-DHPs:** bradycardia, **AV block**, **severe constipation** (verapamil — most constipating drug in medicine), **negative inotropy** (worsens HFrEF).",
        ci: "**Non-DHPs:** HFrEF (negative inotropy), high-degree AV block, cardiogenic shock, concurrent beta-blockers (heart block risk).\n**WPW + AFib** — can accelerate accessory pathway → VF (absolute CI).",
        pk: "**Amlodipine:** t1/2 ~35–50 hr — once daily, gradual BP lowering.\n**Verapamil:** potent CYP3A4 and P-gp inhibitor (raises digoxin, statin, cyclosporine levels).",
        pearl: "**DHP peripheral edema** is from precapillary arteriolar dilation without matching venular dilation — it is NOT fluid overload and does NOT respond to diuretics.\nAdding an ACEi or ARB (by dilating venules) treats this edema.\n**Verapamil + beta-blocker** = dangerous complete AV block."
      }
    ]
  },
  {
    group: "Antiarrhythmics",
    drugs: [
      {
        name: "Adenosine",
        aka: "Adenosine",
        summary: "Endogenous purine nucleoside for **acute PSVT** — the fastest-acting and shortest-duration antiarrhythmic.",
        moa: "Activates **A1 adenosine receptors** on AV nodal cells → opens K+ channels (GIRK) → hyperpolarization → transiently blocks AV conduction.\nAlso inhibits cAMP → reduces pacemaker funny current.",
        use: "**First-line for acute PSVT** (AVNRT, AVRT — both AV-node dependent).\nDiagnostically slows/unmasks underlying atrial flutter/fibrillation by transiently blocking the AV node.",
        se: "Transient **chest pain/pressure**, flushing, dyspnea, **sense of impending doom** (benign, lasts ~10 seconds), bronchospasm, sinus pause.",
        ci: "Asthma/COPD (bronchospasm), high-degree AV block, **WPW with AFib** (can precipitate VF — avoid all AV nodal agents).",
        pk: "**IV rapid push (1–2 seconds) into a large vein** — adenosine is deaminated by red blood cells in ~10 seconds. Half-life <10 seconds.",
        pearl: "**Caffeine and theophylline are competitive adenosine receptor antagonists** — patients on theophylline may require higher adenosine doses.\nIf PSVT does not terminate with adenosine, it is unlikely to be AV-node dependent (consider VT or pre-excited tachycardia)."
      },
      {
        name: "Class II Antiarrhythmics (Beta-Blockers)",
        aka: "Metoprolol · Atenolol · Propranolol · Esmolol · Carvedilol · Bisoprolol",
        summary: "**Beta-1 adrenergic blockers** that slow automaticity and AV conduction — the most widely used antiarrhythmic class.",
        moa: "Competitive antagonism at **β1 adrenergic receptors** → decreases phase 4 spontaneous depolarization (automaticity) and **prolongs AV nodal conduction** (increases PR interval).",
        use: "**Rate control in AFib/AFL**, SVT termination and prevention, perioperative arrhythmia prevention (esmolol), ventricular rate control in thyrotoxicosis, VT/VF reduction after MI.",
        se: "Bradycardia, AV block, bronchospasm (non-selective), fatigue, masked hypoglycemia symptoms.",
        ci: "Decompensated HF, cardiogenic shock, high-degree AV block, severe reactive airway disease.\n**Never combine Class II + Class IV** (complete heart block risk).",
        pk: "**Esmolol:** IV only, t1/2 ~9 min (ester hydrolysis), ideal for acute perioperative rate control.\n**Metoprolol/atenolol:** cardioselective (β1 > β2), once daily oral.",
        pearl: "**Class II + Class IV (verapamil/diltiazem)** can cause fatal complete heart block — one of the most tested drug interactions on Step 1.\nEsmolol's ultra-short action makes it titratable for acute settings."
      },
      {
        name: "Class IV Antiarrhythmics (Non-DHP CCBs)",
        aka: "Verapamil · Diltiazem",
        summary: "**Non-DHP calcium channel blockers** that directly slow SA and AV nodal conduction — rate control and PSVT termination.",
        moa: "Block **L-type Ca2+ channels** in SA and AV nodal cells → reduce automaticity and prolong AV refractory period (increases PR interval).",
        use: "**AFib/AFL rate control**, **acute PSVT termination** (IV diltiazem), stable angina, hypertrophic cardiomyopathy (verapamil improves diastolic filling).",
        se: "**Bradycardia, AV block, severe constipation** (verapamil), hypotension, **negative inotropy worsens HFrEF.**",
        ci: "**HFrEF** (precipitates acute decompensation), high-degree AV block, concurrent beta-blockers (heart block).\n**WPW + AFib** — may accelerate accessory pathway conduction causing VF (absolute CI).",
        pk: "**Verapamil:** potent inhibitor of **CYP3A4 and P-glycoprotein** → raises digoxin levels (~2×), simvastatin, cyclosporine levels.",
        pearl: "**WPW + AFib + verapamil = VF.** Blocking the AV node forces conduction down the accessory pathway, which conducts much faster → rapid ventricular activation.\nTreat WPW + AFib with **procainamide or cardioversion**, never AV nodal agents."
      },
      {
        name: "Class IA Antiarrhythmics",
        aka: "Quinidine · Procainamide · Disopyramide",
        summary: "**Intermediate Na+ channel blockers** that also block K+ channels — prolongs both QRS and QTc, creating torsades risk.",
        moa: "Block **fast Na+ channels** (intermediate on/off kinetics → moderate QRS widening) AND **K+ channels** (prolongs action potential duration → QTc prolongation).\nEffect on accessory pathways makes them useful for WPW.",
        use: "AFib/AFL rhythm conversion and maintenance, VT, WPW-associated arrhythmias.\n**Procainamide:** IV agent for acute VT/VF.",
        se: "**Torsades de pointes** (from QTc prolongation).\n**Quinidine:** cinchonism (tinnitus, headache, visual changes), thrombocytopenia, **doubles digoxin levels** (displaces from tissue binding).\n**Procainamide:** **drug-induced lupus** (anti-histone antibodies, slow acetylators).\n**Disopyramide:** profound anticholinergic effects.",
        ci: "**Prolonged QTc**, heart block, HFrEF (disopyramide is strongly negative inotropic).",
        pk: "**Procainamide** is acetylated by NAT2 — slow acetylators accumulate more drug and develop lupus more readily.\nActive metabolite NAPA also blocks K+ channels.",
        pearl: "**Quinidine roughly doubles serum digoxin levels** by displacing digoxin from tissue protein binding sites — can cause digoxin toxicity.\n**Procainamide lupus** features anti-histone antibodies with sparing of anti-dsDNA (like hydralazine-induced lupus)."
      },
      {
        name: "Class IB Antiarrhythmics",
        aka: "Lidocaine · Mexiletine · Phenytoin",
        summary: "**Fast on/off Na+ channel blockers** selective for depolarized (ischemic) tissue — used for ventricular arrhythmias post-MI.",
        moa: "Block fast Na+ channels with **fast dissociation kinetics** — preferentially bind channels in the **inactivated state** (predominates in depolarized, ischemic myocardium).\nShortens action potential duration; minimal effect on normal tissue.",
        use: "**Acute ventricular arrhythmias** post-MI (lidocaine IV), digitalis-induced arrhythmias.\n**Mexiletine:** oral agent for chronic VT prevention.",
        se: "**CNS toxicity** (dose-dependent): perioral numbness, tinnitus → slurred speech → seizures → respiratory arrest.\nMinimal cardiac side effects at therapeutic doses.",
        ci: "High-degree AV block. Lidocaine IV in severe hepatic failure.",
        pk: "**Lidocaine:** IV only — extensive hepatic first-pass prevents oral use.\n**Mexiletine:** oral analog of lidocaine.",
        pearl: "**Class IB agents selectively suppress ischemic tissue** because depolarized cells spend more time in the inactivated state, which is the preferred binding state.\nLidocaine works for post-MI arrhythmias without suppressing healthy myocardium."
      },
      {
        name: "Class IC Antiarrhythmics",
        aka: "Flecainide · Propafenone",
        summary: "**Most potent Na+ channel blockers** with markedly slowed on/off kinetics — effective for AFib rhythm control but **dangerous in structural heart disease**.",
        moa: "Block fast Na+ channels with very **slow dissociation kinetics** → most pronounced QRS widening of all antiarrhythmics.\nAlso block K+ channels (propafenone). Markedly depress conduction at all cardiac sites.",
        use: "**AFib/AFL rhythm control in structurally normal hearts** (paroxysmal AFib — 'pill in the pocket' strategy).\nPropafenone also for SVT.",
        se: "**Highly proarrhythmic in diseased myocardium** — VT/VF, atrial flutter with 1:1 AV conduction.\nPropafenone: beta-blocking side effects.",
        ci: "**Structural heart disease** (CAD, HFrEF, LVH, prior MI) — absolute contraindication.\n**CAST trial** showed increased mortality post-MI with Class IC agents.",
        pk: "Propafenone has intrinsic beta-blocking activity. Flecainide is renally eliminated. Both are CYP2D6 substrates.",
        pearl: "**The CAST trial** (1989): Class IC drugs suppressed PVCs after MI but **tripled all-cause mortality** vs. placebo.\nThis classic trial demonstrated that suppressing a surrogate marker (PVCs) does not equal improved outcomes."
      },
      {
        name: "Class III Antiarrhythmics",
        aka: "Amiodarone · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "**K+ channel blockers** that prolong repolarization and the refractory period — amiodarone is the most effective antiarrhythmic but has extensive multi-organ toxicity.",
        moa: "Block **voltage-gated K+ channels** → delays repolarization → prolongs action potential duration and effective refractory period.\n**Amiodarone** also blocks Na+ channels (Class I), Ca2+ channels (Class IV), and beta receptors (Class II) — 'dirty' drug with broadest antiarrhythmic coverage.",
        use: "**Amiodarone:** VF/pulseless VT (first-line in ACLS), AFib rhythm control, rate control in WPW.\n**Sotalol:** AFib rhythm control (also has beta-blocking properties).\n**Dofetilide:** AFib (requires hospital initiation).\n**Ibutilide:** acute AFib cardioversion.",
        se: "**Amiodarone toxicity (PALE BT):** Pulmonary fibrosis, **hypo/hyperthyroidism** (40% iodine by weight), hepatotoxicity, corneal microdeposits (reversible, ~100%), Blue-gray skin discoloration, Thyroid disease.\n**Sotalol/dofetilide:** Torsades de pointes.",
        ci: "Amiodarone: severe sinus node dysfunction, iodine allergy, severe hepatic disease.\nSotalol/dofetilide: QTc >500 ms, renal failure.",
        pk: "**Amiodarone t1/2 = 40–55 days** (highly lipophilic, distributed in fat) — interactions and toxicity persist for months after stopping.\nPotent CYP3A4/2C9 inhibitor (raises warfarin, digoxin levels). Loading doses required.",
        pearl: "**Every patient starting amiodarone needs baseline TFTs, LFTs, and PFTs, repeated annually.**\nAmiodarone's 40% iodine content — ~100× the recommended daily intake — explains the near-universal thyroid effects.\nIts extraordinary half-life means stopping the drug does not quickly resolve toxicity."
      },
      {
        name: "Digoxin",
        aka: "Digoxin · Digitalis",
        summary: "Cardiac glycoside with a **narrow therapeutic index** — positive inotrope and vagotonic AV nodal agent for HF and AFib.",
        moa: "Inhibits **Na+/K+-ATPase** → intracellular Na+ rises → Na+/Ca2+ exchanger slows → intracellular Ca2+ increases → **positive inotropy**.\nAlso **increases vagal tone** → slows AV conduction (rate control in AFib).",
        use: "**HFrEF** (symptom control, reduces hospitalizations but NOT mortality).\n**AFib rate control** (especially at rest; less effective during exercise).",
        se: "**Classic toxicity triad:** GI (nausea, vomiting, anorexia), **visual disturbances** (xanthopsia — yellow halos), **virtually any arrhythmia** (especially AV block, PAT with block, ventricular bigeminy).\nHyperkalemia in acute toxicity.",
        ci: "VFib, **WPW** (AV block shunts conduction to accessory pathway → VF), high-degree AV block.",
        pk: "Renally eliminated; dose-reduce in renal failure. Narrow therapeutic index (0.5–0.9 ng/mL).\n**Hypokalemia** sensitizes the myocardium to digoxin toxicity.",
        pearl: "**Hypokalemia dramatically increases digoxin toxicity** — K+ and digoxin compete for the same binding site on Na/K-ATPase; low K+ allows more digoxin binding → toxic arrhythmias.\nLoops/thiazides → hypokalemia → digoxin toxicity is the classic sequence.\nTreat toxicity with **Digibind** (digoxin-specific Fab fragments) and correct electrolytes."
      },
      {
        name: "Magnesium Sulfate",
        aka: "Magnesium Sulfate",
        summary: "Divalent cation that stabilizes cardiac membranes and prevents **torsades de pointes** — also the drug of choice for eclamptic seizure prophylaxis.",
        moa: "Blocks **voltage-gated Ca2+ channels** and stabilizes the cardiac membrane.\nIn eclampsia, acts as an NMDA antagonist in the CNS, raising the seizure threshold.",
        use: "**Torsades de pointes** (drug of choice — even if Mg2+ level is normal), **eclampsia** seizure prophylaxis and treatment, severe asthma exacerbations (IV), preterm labor tocolysis.",
        se: "**Toxicity by level:** ↓DTRs (first sign, ~5–8 mEq/L), respiratory depression (~10–13 mEq/L), cardiac arrest (~15 mEq/L).\nNeonatal respiratory depression if used close to delivery.",
        ci: "Myasthenia gravis (NMJ blockade), heart block, severe renal failure (accumulates).",
        pk: "Renally eliminated. Antidote: **IV calcium gluconate** (directly antagonizes Mg2+ effects on membrane).",
        pearl: "**Monitor patellar reflex during magnesium infusion in eclampsia** — loss of deep tendon reflexes is the earliest sign of toxicity and precedes respiratory depression.\nIf DTRs disappear, slow or stop infusion and prepare calcium gluconate."
      },
      {
        name: "Ranolazine & Ivabradine",
        aka: "Ranolazine · Ivabradine",
        summary: "Novel antianginal (ranolazine) and heart rate-lowering agent (ivabradine) with mechanisms distinct from beta-blockers.",
        moa: "**Ranolazine:** blocks the **late inward Na+ current (INaL)** during ischemia → reduces intracellular Ca2+ overload → less diastolic dysfunction. Does NOT reduce HR or BP.\n**Ivabradine:** blocks **HCN channels (If 'funny' current)** in the SA node → reduces spontaneous diastolic depolarization → HR reduction without affecting contractility or BP.",
        use: "**Ranolazine:** refractory stable angina (add-on when beta-blockers/CCBs fail).\n**Ivabradine:** HFrEF with HR >70 bpm on maximally tolerated beta-blocker (SHIFT trial), stable angina when beta-blockers contraindicated.",
        se: "**Ranolazine:** QTc prolongation, constipation, dizziness.\n**Ivabradine:** visual phosphenes (transient luminous phenomena — 'visual brightness/halos'), bradycardia.",
        ci: "**Ivabradine:** atrial fibrillation (If only present in SA node — no effect in AFib), significant sinus bradycardia, sick sinus syndrome.\n**Ranolazine:** severe hepatic impairment.",
        pk: "Both are CYP3A4 substrates. Ivabradine contraindicated with strong CYP3A4 inhibitors.",
        pearl: "**Ivabradine is the only drug that lowers heart rate without affecting BP, contractility, or AV conduction** — requires sinus rhythm.\n**Ranolazine does not lower HR or BP** — ideal for patients with baseline bradycardia or hypotension who need anti-anginal therapy."
      }
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins",
        aka: "Atorvastatin · Rosuvastatin · Simvastatin · Pravastatin · Lovastatin · Fluvastatin · Pitavastatin",
        summary: "**First-line lipid-lowering agents** — the most evidence-based drugs for ASCVD prevention, primarily via LDL reduction.",
        moa: "Competitive inhibition of **HMG-CoA reductase** (rate-limiting enzyme in hepatic cholesterol synthesis) → hepatic cholesterol falls → **upregulation of LDL receptors** → increased LDL clearance from plasma.",
        use: "**ASCVD risk reduction** (primary and secondary prevention), familial hypercholesterolemia, post-ACS (high-intensity statin regardless of baseline LDL).",
        se: "**Myopathy → rhabdomyolysis** (elevated CK, myoglobinuria, AKI — monitor in hypothyroidism or on gemfibrozil).\n**Hepatotoxicity** (transaminase elevation), **teratogenic** (Category X), new-onset diabetes (modest risk).",
        ci: "**Pregnancy** (Category X — cholesterol needed for fetal development), active liver disease, **concurrent gemfibrozil** (dramatically increases myopathy risk).",
        pk: "**Atorvastatin, simvastatin, lovastatin:** heavily CYP3A4-dependent (ritonavir, macrolides, verapamil raise levels).\n**Rosuvastatin:** CYP2C9 substrate (less CYP3A4 interaction).\n**Pravastatin:** not CYP-metabolized (safest in transplant patients on calcineurin inhibitors).",
        pearl: "**Gemfibrozil + statin** is the most dangerous combination for rhabdomyolysis — gemfibrozil inhibits statin glucuronidation, raising plasma statin levels up to 5-fold.\n**Pravastatin and rosuvastatin** are safest with CYP3A4 inhibitors (immunosuppressants, antiretrovirals)."
      },
      {
        name: "Fibrates, Niacin & Other Lipid Agents",
        aka: "Gemfibrozil · Fenofibrate · Niacin · Ezetimibe · Cholestyramine · Colesevelam",
        summary: "Second-line lipid agents targeting **hypertriglyceridemia** (fibrates), **LDL absorption** (ezetimibe, sequestrants), and **HDL** (niacin).",
        moa: "**Fibrates:** activate **PPAR-alpha** → increase LPL expression → ↑ TG hydrolysis → ↓TG, ↑HDL.\n**Niacin:** inhibits hepatic **VLDL secretion** → ↓TG, ↓LDL, ↑HDL (best HDL-raising agent).\n**Ezetimibe:** inhibits **NPC1L1 transporter** in intestinal brush border → ↓ cholesterol absorption.\n**Bile acid sequestrants:** bind bile acids in gut → ↑ hepatic LDL receptors.",
        use: "**Fibrates:** severe hypertriglyceridemia (TG >500 to prevent pancreatitis).\n**Niacin:** isolated low HDL.\n**Ezetimibe:** add-on to statin when LDL goal not achieved.\n**Sequestrants:** LDL reduction, C. difficile toxin binding (cholestyramine), pruritus of cholestasis.",
        se: "**Fibrates:** myopathy (especially with statins), cholesterol gallstones.\n**Niacin:** intense **prostaglandin-mediated flushing** (prevented by aspirin pretreatment), hyperuricemia, hyperglycemia.\n**Sequestrants:** bind fat-soluble vitamins (A, D, E, K) and other drugs — separate by 4–6 hours.",
        ci: "**Gemfibrozil + statin** (rhabdomyolysis risk). Niacin: active gout, peptic ulcer disease.\nSequestrants: biliary obstruction, hypertriglyceridemia.",
        pk: "**Gemfibrozil** inhibits statin glucuronidation (major DDI). **Fenofibrate** is safer with statins (no UGT inhibition).\nNiacin flushing is PGD2-mediated from Langerhans skin cells.",
        pearl: "**Niacin flushing** is prevented by taking **aspirin 30 minutes before niacin** (blocks PGD2 release).\n**Cholestyramine binds virtually everything in the GI tract** — always separate other medications by 4–6 hours.\n**Fenofibrate is safer than gemfibrozil** when combined with a statin."
      }
    ]
  },
  {
    group: "Heart Failure Inotropes",
    drugs: [
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone · Nesiritide",
        summary: "**Inodilators** for short-term management of acute decompensated heart failure — increase inotropy AND reduce afterload/preload.",
        moa: "**Milrinone:** inhibits **phosphodiesterase-3 (PDE3)** → ↑cAMP in cardiomyocytes (inotropy) and vascular smooth muscle (vasodilation). Bypasses beta-receptors completely.\n**Nesiritide:** recombinant **BNP** → activates guanylate cyclase → ↑cGMP → venous and arterial vasodilation, promotes natriuresis.",
        use: "**Short-term bridge management** of severe acute decompensated HF unresponsive to standard therapy.\nMilrinone also used in right HF (reduces pulmonary vascular resistance).",
        se: "**Milrinone:** hypotension (from vasodilation), arrhythmias, thrombocytopenia.\n**Nesiritide:** hypotension, worsening renal function (controversial).",
        ci: "Milrinone: severe outflow tract obstruction (HOCM), VT/VF.",
        pk: "Both are IV infusions only. Milrinone is renally eliminated; dose-reduce in renal failure.",
        pearl: "**Milrinone bypasses beta-receptors** — the inotrope of choice when a patient is on maximum beta-blocker therapy (e.g., chronic HFrEF patient in acute decompensation).\nIts mechanism (PDE3 inhibition → ↑cAMP) is downstream of the beta-receptor, so beta-blocker therapy does not impair its effect."
      }
    ]
  }
],

// ── HEMATOLOGY ────────────────────────────────────────────────────────────────
blood: [
  {
    group: "Anticoagulants",
    drugs: [
      {
        name: "Heparin (UFH & LMWH)",
        aka: "Unfractionated Heparin · Enoxaparin · Dalteparin · Tinzaparin · Fondaparinux",
        summary: "Parenteral anticoagulants that potentiate **antithrombin III** — safe in pregnancy, rapidly reversible.",
        moa: "Bind and activate **antithrombin III (AT III)** → dramatically accelerates AT III's inhibition of **thrombin (IIa)** and **Factor Xa**.\nUFH inhibits both equally; LMWH predominantly inhibits Factor Xa; fondaparinux inhibits Factor Xa only.",
        use: "Acute PE/DVT treatment and prophylaxis, ACS, atrial fibrillation bridging.\n**Pregnancy** — does not cross the placenta; safe for fetus.",
        se: "**Bleeding** (most common).\n**HIT Type II:** immune-mediated (IgG against heparin-PF4 complex) → platelet activation → **paradoxical thrombosis** despite low platelets — onset 5–14 days.\nOsteoporosis (prolonged UFH), hyperkalemia (aldosterone suppression).",
        ci: "Active bleeding, HIT history, severe thrombocytopenia.",
        pk: "**UFH:** monitored with **aPTT** (goal 60–100 sec); reversed with **protamine sulfate**.\n**LMWH (enoxaparin):** monitored with **anti-Xa levels**; protamine partially reverses.\n**Fondaparinux:** no reliable reversal agent.",
        pearl: "**HIT Type II** is a paradoxical thrombotic state — stop ALL heparin products (including flushes and LMWH) and start a **direct thrombin inhibitor (argatroban, bivalirudin)**.\nDo NOT start warfarin immediately (Protein C depletion worsens hypercoagulability).\nDo NOT transfuse platelets."
      },
      {
        name: "Warfarin",
        aka: "Warfarin",
        summary: "Oral **vitamin K epoxide reductase inhibitor** — anticoagulant with a narrow therapeutic index and extensive drug/food interactions.",
        moa: "Inhibits **vitamin K epoxide reductase (VKOR)** → depletes active (reduced) vitamin K → cannot carboxylate clotting factors II, VII, IX, X and anticoagulant proteins C and S.\n**Factor VII** (shortest t1/2, ~6 hours) falls first, prolonging PT/INR initially.",
        use: "Chronic AFib, **mechanical heart valves** (only anticoagulant proven safe), VTE treatment/prophylaxis, antiphospholipid syndrome.",
        se: "**Bleeding**, **warfarin-induced skin necrosis** (Protein C depletion → early hypercoagulable state → microthrombi in dermal vessels; highest risk with Protein C deficiency).\n**Teratogenic** — crosses placenta (bone deformities weeks 6–12, CNS defects near term).",
        ci: "**Pregnancy** (especially weeks 6–12 and near term), active bleeding, severe hepatic disease.\nMechanical valves cannot use DOACs — only warfarin is proven safe.",
        pk: "Monitored with **INR** (PT ratio). Reversal: **Vitamin K** (oral/IV — takes 6–24 hrs), **FFP or 4-factor PCC** (immediate).\nInhibits CYP2C9 metabolism — CYP inducers (rifampin) decrease effect; inhibitors (amiodarone, fluconazole) increase bleeding risk.",
        pearl: "**Warfarin initiation causes a transient hypercoagulable state** because Protein C (t1/2 ~8 hours) is depleted before clotting factors — always overlap with heparin for ≥5 days AND until INR ≥2 for ≥24 hours.\nThis explains warfarin-induced skin necrosis: early in therapy, low Protein C allows microthrombi to form in dermal vessels."
      },
      {
        name: "Direct Oral Anticoagulants (DOACs)",
        aka: "Apixaban · Rivaroxaban · Edoxaban · Betrixaban · Dabigatran",
        summary: "**Target-specific oral anticoagulants** that directly inhibit thrombin or Factor Xa — no routine monitoring required.",
        moa: "**Apixaban, rivaroxaban, edoxaban, betrixaban:** direct, reversible inhibitors of **Factor Xa** (prevent conversion of prothrombin to thrombin).\n**Dabigatran:** direct, reversible inhibitor of **thrombin (Factor IIa)** — prevents fibrinogen cleavage and platelet activation.",
        use: "**Nonvalvular AFib** (reduce stroke risk), VTE treatment and prophylaxis, post-orthopedic surgery prophylaxis.",
        se: "**Bleeding** (GI bleeding higher with rivaroxaban/dabigatran than apixaban).\nDyspepsia (dabigatran — capsule form irritates GI mucosa).",
        ci: "**Mechanical heart valves** (absolute — RE-ALIGN trial: dabigatran caused valve thrombosis and excess strokes).\nSevere renal impairment (dabigatran primarily renally excreted).",
        pk: "**No routine monitoring** required.\nReversal: **Idarucizumab** (Praxbind) for dabigatran; **Andexanet alfa** for Xa inhibitors; 4-factor PCC for emergencies.\nDabigatran is the only DOAC dialyzable.",
        pearl: "**DOACs are absolutely contraindicated in mechanical heart valves** — a classic board trap.\nFor nonvalvular AFib, DOACs are preferred over warfarin (predictable PK, no monitoring, fewer food interactions)."
      }
    ]
  },
  {
    group: "Antiplatelets",
    drugs: [
      {
        name: "Aspirin (Antiplatelet)",
        aka: "Aspirin · Acetylsalicylic Acid",
        summary: "**Irreversible COX-1 inhibitor** — the cornerstone antiplatelet agent for ASCVD prevention.",
        moa: "Irreversibly **acetylates a serine residue on COX-1** → permanently inhibits thromboxane A2 (TXA2) synthesis in platelets (which lack nuclei and cannot regenerate COX).\nAlso inhibits prostacyclin (PGI2) synthesis in endothelium (cells can regenerate COX) — net effect is antiplatelet.",
        use: "**ACS** (immediate in STEMI/NSTEMI), **ASCVD secondary prevention** (post-MI, post-stroke, PAD), acute ischemic stroke, post-PCI (DAPT with P2Y12 inhibitor).",
        se: "**GI bleeding and ulceration** (COX-1 protects gastric mucosa).\n**Reye syndrome** in children with viral infections.\n**NSAID-exacerbated respiratory disease** (aspirin-sensitive asthma — leukotriene shunting).\n**Salicylism:** tinnitus, nausea.",
        ci: "Children with viral infections (Reye syndrome), NSAID-sensitive asthma, active GI bleeding, severe renal failure.",
        pk: "Antiplatelet effect lasts the **entire platelet lifespan (~7–10 days)** — platelets cannot synthesize new COX.\nStop 7–10 days before elective surgery.",
        pearl: "**Aspirin overdose:** (1) early **respiratory alkalosis** (salicylate directly stimulates the respiratory center) followed by (2) **high anion gap metabolic acidosis** (uncouples oxidative phosphorylation).\nThis mixed biphasic acid-base picture is classic and high-yield."
      },
      {
        name: "P2Y12 & GP IIb/IIIa Blockers",
        aka: "Clopidogrel · Ticagrelor · Prasugrel · Abciximab · Eptifibatide · Tirofiban",
        summary: "**ADP receptor and fibrinogen cross-link inhibitors** — used with aspirin as **dual antiplatelet therapy (DAPT)** post-ACS and post-PCI.",
        moa: "**P2Y12 inhibitors (clopidogrel, ticagrelor, prasugrel):** block **ADP receptors (P2Y12)** on platelets → prevent ADP-mediated platelet activation and aggregation.\n**GP IIb/IIIa inhibitors (abciximab, eptifibatide, tirofiban):** block **glycoprotein IIb/IIIa receptor** → prevent fibrinogen cross-linking between platelets (final common pathway).",
        use: "**DAPT** (aspirin + P2Y12) after ACS and PCI stenting.\n**GP IIb/IIIa inhibitors:** high-risk PCI, NSTEMI.",
        se: "**Bleeding** (most important).\n**Ticagrelor:** dyspnea (adenosine reuptake inhibition — not bronchospasm, does not require stopping).\n**Clopidogrel:** thrombotic thrombocytopenic purpura (rare).\n**Abciximab:** severe thrombocytopenia.",
        ci: "Prior intracranial hemorrhage, active bleeding.\n**Prasugrel:** do NOT use in patients with prior stroke/TIA (net clinical harm — TRITON trial).",
        pk: "**Clopidogrel:** irreversible prodrug requiring CYP2C19 activation — **poor metabolizers** (~25–30%, more common in Asians) have reduced efficacy.\n**Ticagrelor:** directly active (no prodrug activation — not affected by CYP2C19 genotype).\n**Prasugrel:** prodrug, more potent and faster onset than clopidogrel.",
        pearl: "**Omeprazole inhibits CYP2C19** and reduces clopidogrel activation — use **pantoprazole** as the PPI of choice with clopidogrel.\nTicagrelor is preferred over clopidogrel in ACS (PLATO trial) partly because it bypasses this genetic/drug interaction."
      },
      {
        name: "PDE3/PDE5 Inhibitors (Antiplatelet)",
        aka: "Cilostazol · Dipyridamole",
        summary: "Antiplatelet agents that increase cAMP/cGMP to prevent platelet aggregation — distinct from aspirin and P2Y12 inhibitors.",
        moa: "**Cilostazol:** inhibits **PDE3** in platelets and vascular smooth muscle → ↑cAMP → inhibits platelet aggregation + vasodilation.\n**Dipyridamole:** inhibits PDE and **blocks adenosine reuptake** → adenosine accumulates → ↑cAMP via A2A receptors; also dilates coronary arteries (coronary steal).",
        use: "**Cilostazol:** peripheral arterial disease (intermittent claudication — improves walking distance).\n**Dipyridamole:** combined with aspirin (Aggrenox) for **secondary stroke prevention**; IV for **pharmacological cardiac stress testing**.",
        se: "Headache, flushing.\n**Cilostazol:** tachycardia (PDE3 inhibition increases cAMP in cardiac muscle — similar to milrinone).\n**Dipyridamole stress testing:** angina, bronchospasm.",
        ci: "**Cilostazol: any degree of heart failure** — PDE3 inhibition → ↑cAMP in heart → pro-arrhythmic and increased mortality (like milrinone).",
        pk: "Dipyridamole stress test effects reversed by **aminophylline** (adenosine receptor antagonist).",
        pearl: "**Cilostazol is absolutely contraindicated in heart failure of any severity** — shares the PDE3 mechanism of milrinone, which is also contraindicated in chronic HF.\nDipyridamole causes **coronary steal** during stress testing by dilating normal vessels and redirecting flow away from stenosed territories."
      },
      {
        name: "tPA & Thrombolytics",
        aka: "Alteplase · Tenecteplase · Reteplase · Streptokinase · Urokinase",
        summary: "**Fibrinolytic agents** that dissolve established clots — used in STEMI, massive PE, and acute ischemic stroke.",
        moa: "Bind fibrin in a formed clot and convert **plasminogen → plasmin** locally, which cleaves fibrin and dissolves the clot.\n**Tenecteplase** is more fibrin-specific than alteplase (less systemic fibrinolysis).",
        use: "**Acute ischemic stroke** (within 4.5 hours), **STEMI** (when PCI unavailable), **massive PE** with hemodynamic compromise, acute limb ischemia.",
        se: "**Intracranial hemorrhage** (most serious, 2–6%), systemic hemorrhage (retroperitoneal, GI), orolingual angioedema (ACEi patients).",
        ci: "**Prior intracranial hemorrhage** (absolute, lifetime), recent intracranial surgery/trauma (<3 months), active internal bleeding, severe uncontrolled HTN, ischemic stroke >4.5 hours, known intracranial neoplasm/AVM.",
        pk: "Very short half-life (~5 min for alteplase). Reversal: **aminocaproic acid** or **tranexamic acid** (inhibit plasminogen activation); **cryoprecipitate** for fibrinogen replacement.",
        pearl: "**Any prior intracranial hemorrhage is an absolute lifetime contraindication** to thrombolytics.\nIn ischemic stroke, the window is 3–4.5 hours from symptom onset — use last-known-well time, not symptom discovery time.\nStreptokinase is antigenic (prior exposure → resistance/allergy); alteplase/tenecteplase are non-antigenic."
      }
    ]
  },
  {
    group: "Gout Agents",
    drugs: [
      {
        name: "Allopurinol & Febuxostat",
        aka: "Allopurinol · Febuxostat",
        summary: "**Xanthine oxidase inhibitors** for chronic gout prophylaxis — reduce uric acid synthesis rather than excretion.",
        moa: "Inhibit **xanthine oxidase (XO)** → hypoxanthine and xanthine cannot be converted to uric acid → serum urate decreases.\n**Allopurinol** is a prodrug → alloxanthine (active inhibitor).\n**Febuxostat:** non-purine selective XO inhibitor (used in allopurinol hypersensitivity).",
        use: "**Chronic gout prophylaxis** — start 2–4 weeks AFTER acute flare resolves, never during an acute attack.\n**Tumor lysis syndrome** prevention before chemotherapy.\nRecurrent uric acid nephrolithiasis.",
        se: "**Hypersensitivity reactions** including **DRESS syndrome** and **Stevens-Johnson syndrome** — more common with HLA-B*5801 (Han Chinese, Korean, Thai — screen before prescribing).\nFebuxostat: cardiovascular risk (FDA warning — increased CV mortality vs. allopurinol).",
        ci: "**Concurrent azathioprine or 6-MP without extreme dose reduction** — allopurinol inhibits XO, the enzyme that metabolizes 6-MP → 6-MP accumulation → fatal myelosuppression.",
        pk: "Both can precipitate acute gout flare when started (rapid urate lowering mobilizes joint deposits) — always co-prescribe colchicine for 3–6 months of initiation.",
        pearl: "**Allopurinol + azathioprine/6-MP = potentially fatal** — must reduce azathioprine/6-MP dose by 75% if combination is unavoidable.\nNever start urate-lowering therapy during an acute attack — wait for the flare to fully resolve."
      },
      {
        name: "Colchicine",
        aka: "Colchicine",
        summary: "**Microtubule inhibitor** that halts neutrophil migration into the joint — acute gout treatment and prophylaxis.",
        moa: "Binds tubulin dimers, inhibiting **microtubule polymerization** → prevents neutrophil chemotaxis and phagocytosis of urate crystals → blocks NLRP3 inflammasome activation (IL-1β production).\nDoes NOT lower uric acid.",
        use: "Acute gout flares (most effective within 12–24 hours of onset), gout prophylaxis during urate-lowering therapy initiation.\n**Pericarditis** (acute and recurrent — blocks IL-1β in pericardium), familial Mediterranean fever.",
        se: "**Diarrhea** (dose-limiting, most common), nausea, vomiting.\n**Myopathy** (prolonged use or with CYP3A4/P-gp inhibitors), bone marrow suppression (overdose).",
        ci: "Severe renal or hepatic impairment without dose reduction.\n**CYP3A4 inhibitors** (clarithromycin, itraconazole) dramatically raise colchicine levels — potentially fatal combination in renal/hepatic failure.",
        pk: "CYP3A4 and P-glycoprotein substrate — levels dramatically raised by inhibitors.\nRenally and hepatically eliminated.",
        pearl: "**Colchicine does NOT lower uric acid** — it reduces inflammation by blocking neutrophil function.\nUseful during initiation of allopurinol/febuxostat because urate mobilization can trigger flares.\n**Diarrhea** is the most common dose-limiting side effect."
      },
      {
        name: "Probenecid",
        aka: "Probenecid · Sulfinpyrazone",
        summary: "**Uricosuric agent** that increases renal uric acid excretion — for chronic gout in underexcretors.",
        moa: "Inhibits **URAT1 (urate transporter 1)** in the proximal tubule → prevents uric acid reabsorption → increased uric acid excretion.\nAlso inhibits **OAT transporters** responsible for tubular secretion of many drugs (prolongs penicillin half-life).",
        use: "Chronic gout prophylaxis in patients who underexcrete uric acid (confirmed by 24-hour urine uric acid <800 mg/day).\nHistorically used to prolong penicillin levels.",
        se: "**Uric acid nephrolithiasis** (increased urinary urate) — must maintain high fluid intake and alkalinize urine.\nGI upset, rash.",
        ci: "History of uric acid kidney stones, sulfa allergy (structural similarity), renal impairment (ineffective when GFR <50).",
        pk: "Competes with OAT transporters, prolonging penicillin/ampicillin levels.\n**Inhibited by aspirin** — even low-dose aspirin blocks the uricosuric effect.",
        pearl: "**Low-dose aspirin blocks probenecid's uricosuric effect** by competing for the same OAT transporter — a classic drug interaction.\nPatients must drink ≥2L of water daily and alkalinize urine (potassium citrate or sodium bicarbonate) to prevent uric acid crystallization in the kidney."
      }
    ]
  }
],

// ── NEURO & PSYCH ─────────────────────────────────────────────────────────────
neuro: [
  {
    group: "Anxiolytics & Sedatives",
    drugs: [
      {
        name: "Benzodiazepines",
        aka: "Diazepam · Lorazepam · Alprazolam · Clonazepam · Midazolam · Triazolam · Oxazepam · Temazepam · Chlordiazepoxide",
        summary: "**GABA-A positive allosteric modulators** that increase chloride channel opening frequency — useful for seizures, anxiety, and withdrawal but carry abuse/dependence risk.",
        moa: "Bind a **distinct allosteric site on GABA-A receptors** (between α and γ subunits) → increase the **FREQUENCY** of Cl⁻ channel opening in response to GABA.\nRequire GABA to be present — cannot open channel without GABA (ceiling effect → safer in overdose than barbiturates).",
        use: "**Status epilepticus** (IV lorazepam or IM midazolam — first-line), **alcohol withdrawal** (chlordiazepoxide, diazepam — prevent withdrawal seizures), procedural sedation, panic disorder, acute anxiety, muscle relaxation.",
        se: "Respiratory depression (especially with opioids — synergistic), CNS depression, anterograde amnesia.\n**Tolerance and physical dependence**, rebound anxiety/insomnia.\n**Paradoxical excitation** (especially in elderly, children, CNS lesions).",
        ci: "Myasthenia gravis (respiratory muscle weakness), acute narrow-angle glaucoma, severe respiratory insufficiency.\nUse extreme caution with opioids.",
        pk: "**LOT** (Lorazepam, Oxazepam, Temazepam) — short-acting, direct glucuronidation (phase II) — safe in hepatic disease and elderly.\n**Diazepam/chlordiazepoxide:** long-acting, CYP-metabolized, active metabolites.\n**Midazolam:** ultra-short acting IV (procedural sedation).",
        pearl: "**LOT = safe in Liver disease** — direct glucuronidation without CYP metabolism.\nThe reversal agent **flumazenil** can precipitate **life-threatening seizures** in benzo-dependent patients — use with extreme caution."
      },
      {
        name: "Non-Benzodiazepine Hypnotics (Z-drugs) & Ramelteon",
        aka: "Zolpidem · Zaleplon · Eszopiclone · Ramelteon",
        summary: "Targeted sleep aids — Z-drugs work on GABA-A α1 subunits (sedation only); ramelteon is a melatonin agonist with zero abuse potential.",
        moa: "**Z-drugs:** selectively modulate **GABA-A receptors containing α1 subunits** — sedation/hypnosis without the anxiolytic, anticonvulsant, or muscle relaxant effects of full benzodiazepines.\n**Ramelteon:** **MT1/MT2 melatonin receptor agonist** in the suprachiasmatic nucleus → advances and strengthens the circadian signal for sleep onset.",
        use: "**Z-drugs:** sleep-onset insomnia.\n**Ramelteon:** sleep-onset insomnia, circadian rhythm disorders — preferred agent in elderly and patients with substance use history.",
        se: "**Z-drugs:** complex sleep behaviors (sleep-walking, sleep-driving, sleep-eating — FDA black box), anterograde amnesia, rebound insomnia on discontinuation.\n**Ramelteon:** minimal (dizziness); **fluvoxamine dramatically raises ramelteon levels** (CYP1A2 inhibition).",
        ci: "Z-drugs: prior complex sleep behaviors, severe hepatic impairment (zolpidem).\n**Ramelteon + fluvoxamine:** contraindicated (massive increase in ramelteon AUC).",
        pk: "Zaleplon t1/2 ~1 hr (ultra-short, for middle-of-night dosing), zolpidem ~2.5 hr, eszopiclone ~6 hr.\nAll hepatic CYP3A4 metabolism. Ramelteon t1/2 ~1–2 hr.",
        pearl: "**Ramelteon is the only FDA-approved hypnotic with no scheduled status and zero abuse potential** — does not act on GABA receptors.\nIdeal for elderly patients (no falls risk), patients with substance use disorders, and patients on opioids."
      },
      {
        name: "Suvorexant & Orexin Antagonists",
        aka: "Suvorexant · Lemborexant",
        summary: "**Dual orexin receptor antagonists (DORAs)** that promote sleep by removing the active wakefulness drive.",
        moa: "Competitive antagonism at **OX1R and OX2R** (orexin/hypocretin receptors) in the lateral hypothalamus → blocks orexin-mediated wakefulness signaling.\nDoes not globally depress CNS — simply removes the signal that keeps you awake.",
        use: "Insomnia — effective for both sleep onset and sleep maintenance.",
        se: "Next-day somnolence, sleep paralysis, hypnagogic/hypnopompic hallucinations, complex sleep behaviors (rare).",
        ci: "**Narcolepsy** — orexin deficiency is the pathophysiology of narcolepsy; blocking residual orexin can cause cataplexy and worsen disease catastrophically.",
        pk: "CYP3A4 substrate; t1/2 ~12 hours (suvorexant). Take within 30 minutes of bedtime.",
        pearl: "**Suvorexant's mechanism is the conceptual inverse of narcolepsy** — narcolepsy is caused by orexin neuron destruction; suvorexant pharmacologically mimics this.\nPrescribing it to a narcoleptic patient is analogous to giving insulin to a patient with hypoglycemia."
      },
      {
        name: "Buspirone",
        aka: "Buspirone",
        summary: "**Non-addictive, non-sedating anxiolytic** for GAD — requires 2–4 weeks for effect; zero utility for acute anxiety.",
        moa: "**Partial agonist at 5-HT1A somatodendritic autoreceptors** → initially decreases serotonin firing (explains delayed onset).\nWeak D2 antagonist. Does NOT interact with GABA-A receptors.",
        use: "**Generalized Anxiety Disorder (GAD)** — must counsel patients about 2–4 week onset delay.\nNOT useful for panic disorder, acute anxiety, phobias, or PTSD.",
        se: "Dizziness, headache, nausea.\n**No sedation, no cognitive impairment, no dependence, no withdrawal, no abuse potential, no respiratory depression.**",
        ci: "Concurrent MAOI use (theoretical serotonin syndrome risk).\n**No cross-tolerance with benzodiazepines** — cannot prevent benzo withdrawal.",
        pk: "Extensive hepatic first-pass; active metabolite 1-PP. CYP3A4 substrate (grapefruit juice raises levels). t1/2 ~2–3 hr.",
        pearl: "**Buspirone does not prevent benzodiazepine withdrawal** — zero cross-tolerance; the benzo must be tapered separately.\nIdeal for GAD in patients with **substance use disorder** — no euphoria, no sedation, cannot be abused."
      },
      {
        name: "Memantine & Alzheimer's Agents",
        aka: "Memantine · Donepezil · Rivastigmine · Galantamine · Lecanemab",
        summary: "Symptomatic treatment only — **AChE inhibitors** for mild-moderate AD; **memantine** for moderate-severe; neither class slows neurodegeneration.",
        moa: "**Memantine:** low-affinity, voltage-dependent **NMDA receptor antagonist** — blocks excessive glutamate-mediated calcium influx (excitotoxicity) without blocking normal NMDA activity.\n**Donepezil/rivastigmine/galantamine:** inhibit **acetylcholinesterase (AChE)** in the CNS → increase synaptic ACh.\n**Lecanemab:** anti-amyloid monoclonal antibody that removes Aβ plaques — modest disease-slowing.",
        use: "**AChE inhibitors:** mild-to-moderate AD, Parkinson's dementia (rivastigmine preferred), Lewy body dementia.\n**Memantine:** moderate-to-severe AD (often combined with donepezil).\n**Lecanemab:** early AD with confirmed amyloid pathology.",
        se: "**AChE inhibitors:** GI upset, **bradycardia** (vagotonic — avoid in sick sinus, caution with beta-blockers), syncope, urinary incontinence.\n**Memantine:** dizziness, confusion at high doses.\n**Lecanemab:** ARIA (amyloid-related imaging abnormalities — edema/microhemorrhage on MRI).",
        ci: "AChE inhibitors: active GI bleeding, sick sinus syndrome, severe reactive airway disease.\nMemantine: severe renal failure.",
        pk: "**Donepezil** t1/2 ~70 hours (once daily). Memantine renally excreted — dose-reduce in CKD.\nRivastigmine available as transdermal patch.",
        pearl: "**Neither class slows AD progression** — purely symptomatic.\nDonepezil's bradycardia effect (vagotonic AChE inhibitor) can be significant — check baseline ECG.\n**Physostigmine (NOT donepezil)** reverses central anticholinergic toxicity — acts within minutes and crosses BBB faster."
      },
      {
        name: "Propofol, Etomidate & Ketamine",
        aka: "Propofol · Etomidate · Ketamine",
        summary: "IV induction anesthetics — each has a distinct **hemodynamic niche** that determines when to choose one over another.",
        moa: "**Propofol:** potentiates **GABA-A** (also inhibits NMDA).\n**Etomidate:** potentiates **GABA-A** (selective — minimal cardiac/vascular effects).\n**Ketamine:** blocks **NMDA receptors** → dissociative anesthesia; stimulates sympathetic outflow → increases HR, BP, and bronchodilation.",
        use: "**Propofol:** routine induction, ICU sedation, procedural sedation.\n**Etomidate:** induction in **hemodynamically unstable patients** (trauma, sepsis, massive GIB).\n**Ketamine:** induction in **bronchospasm/asthma**, pediatric procedural sedation, analgesia.",
        se: "**Propofol:** hypotension (vasodilation + negative inotropy), **propofol infusion syndrome** (metabolic acidosis + rhabdomyolysis with prolonged high-dose infusion), green urine (harmless).\n**Etomidate:** **adrenal suppression** (inhibits 11β-hydroxylase → blocks cortisol synthesis — avoid prolonged infusion in sepsis).\n**Ketamine:** emergence delirium (blunted by concurrent benzodiazepine), hypersalivation, raises ICP.",
        ci: "**Propofol:** egg/soy allergy (the lipid emulsion vehicle).\n**Etomidate:** septic shock (adrenal suppression in a patient already at risk for adrenal insufficiency).\n**Ketamine:** elevated ICP, psychosis.",
        pk: "Clinical duration of all three determined by **redistribution into fat** (not metabolism). Propofol CYP2B6 metabolism.",
        pearl: "**Etomidate preserves hemodynamics but suppresses cortisol** via 11β-hydroxylase inhibition — even a single induction dose can suppress the HPA axis for 24 hours.\n**Ketamine raises blood pressure and bronchodilates** — the only induction agent that protects both; ideal in hypotensive asthmatics."
      },
      {
        name: "Inhaled Anesthetics",
        aka: "Sevoflurane · Desflurane · Isoflurane · Halothane · Nitrous Oxide",
        summary: "Volatile halogenated agents for general anesthesia maintenance — potency inversely correlates with lipid solubility (MAC concept).",
        moa: "Potentiate **GABA-A and glycine receptors** (inhibitory) and inhibit **NMDA and AMPA receptors** (excitatory).\nExact molecular mechanism debated — possibly direct protein binding.",
        use: "General anesthesia maintenance (all).\n**Nitrous oxide:** analgesia (labor, minor procedures), dental anesthesia.\n**Sevoflurane:** preferred for inhalational induction (least pungent, fastest).",
        se: "**Malignant hyperthermia** (all halogenated agents + succinylcholine — hypermetabolic crisis from ryanodine receptor mutation).\n**Halothane hepatitis** (immune-mediated — rare but potentially fatal).\n**Nitrous oxide:** megaloblastic anemia (irreversibly oxidizes B12 — blocks methionine synthase), expansion of trapped gas (pneumothorax, bowel obstruction).",
        ci: "History of **malignant hyperthermia** (absolute for all halogenated agents + succinylcholine).\nNitrous oxide: B12 deficiency, presence of air-filled body spaces (pneumothorax, middle ear surgery).",
        pk: "**MAC** (Minimum Alveolar Concentration) is inversely proportional to potency.\nFaster onset/offset with **lower blood-gas partition coefficient** (desflurane fastest, halothane slowest).",
        pearl: "**Malignant hyperthermia** is triggered by volatile agents + succinylcholine via a **RYR1 mutation** → uncontrolled sarcoplasmic Ca2+ release → hypermetabolism + rigidity + rhabdomyolysis.\nTreat with **dantrolene** (blocks RYR1) + cooling.\n**Nitrous oxide** uniquely causes B12 inactivation — a single prolonged exposure can precipitate subacute combined degeneration in B12-deficient patients."
      }
    ]
  },
  {
    group: "Analgesics",
    drugs: [
      {
        name: "Opioid Analgesics",
        aka: "Morphine · Oxycodone · Hydrocodone · Fentanyl · Hydromorphone · Codeine · Tramadol · Methadone · Meperidine",
        summary: "**Mu, kappa, delta receptor agonists** — the most effective analgesics, but with significant constipation, respiratory depression, and abuse potential.",
        moa: "Agonists at **μ (mu), κ (kappa), δ (delta) opioid receptors** (Gi-coupled) → open K+ channels (hyperpolarization) + close presynaptic Ca2+ channels → decreased neurotransmitter release → analgesia, sedation, euphoria, respiratory depression, decreased GI motility.",
        use: "Moderate-to-severe pain, acute pulmonary edema (morphine — venodilation reduces preload), cough suppression (low-dose codeine).\n**Methadone:** opioid use disorder maintenance, chronic pain (unique NMDA antagonist properties).",
        se: "**Triad: Respiratory depression · Miosis · Constipation.**\nNausea/vomiting, urinary retention, histamine release (morphine), pruritus, euphoria.\n**Tolerance develops to all effects EXCEPT constipation and miosis.**",
        ci: "MAOI use within 14 days (especially **meperidine → life-threatening serotonin syndrome**).\nHead injury (↑CO2 → cerebral vasodilation → ↑ICP).",
        pk: "**Morphine:** active 6-glucuronide metabolite accumulates in renal failure → prolonged sedation.\n**Methadone:** variable, long t1/2 (12–150 hrs) — risk of QTc prolongation.\n**Meperidine:** metabolized to normeperidine (neurotoxic — seizures in renal failure).\n**Fentanyl:** highly lipophilic, rapid CNS penetration.",
        pearl: "**Tolerance does NOT develop to constipation or miosis** — reliable signs of opioid use.\n**Meperidine is contraindicated with MAOIs** — serotonin syndrome (meperidine weakly inhibits serotonin reuptake).\nIn renal failure, **avoid meperidine** (normeperidine accumulates → seizures)."
      },
      {
        name: "NSAIDs (Non-Opioid Analgesics)",
        aka: "Ibuprofen · Naproxen · Indomethacin · Ketorolac · Diclofenac · Meloxicam · Celecoxib · Acetaminophen",
        summary: "**COX inhibitors** — analgesic, antipyretic, anti-inflammatory. Acetaminophen lacks anti-inflammatory activity. Celecoxib selectively spares GI mucosa but increases CV risk.",
        moa: "Reversibly inhibit **COX-1 and COX-2** → decrease prostaglandin synthesis.\n**Celecoxib:** selectively inhibits **COX-2** (inducible, inflammatory) while sparing COX-1 (constitutive, gastric protection).\n**Acetaminophen:** central mechanism (may inhibit COX-3); no peripheral anti-inflammatory effect.",
        use: "Pain, fever, dysmenorrhea.\n**Indomethacin:** acute gout (most potent NSAID), **PDA closure** (blocks PGE2 that keeps ductus open), ankylosing spondylitis.\n**Ketorolac:** postoperative pain (IV/IM NSAID).\n**Celecoxib:** patients at high GI risk.",
        se: "**GI:** ulcers, bleeding (COX-1 protects mucosa — PGE2 stimulates mucus and bicarbonate).\n**Renal:** interstitial nephritis, sodium retention, AKI in pre-renal states (prostaglandins dilate afferent arteriole).\n**CV:** hypertension, increased MI/stroke risk (COX-2 selective > non-selective).\n**Acetaminophen:** hepatotoxicity (NAPQI metabolite depletes glutathione).",
        ci: "**Active GI bleeding**, severe renal/hepatic impairment, CABG surgery (celecoxib black box), late pregnancy (PDA closure).",
        pk: "**Acetaminophen** hepatotoxic metabolite is **NAPQI**, produced by CYP2E1/CYP3A4.\nChronic alcohol use induces CYP2E1, increasing NAPQI production.",
        pearl: "**Acetaminophen toxicity:** NAPQI depletes hepatic glutathione → covalent binding to hepatocyte proteins → zone 3 (centrilobular) necrosis.\nTreat with **N-acetylcysteine** (cysteine donor to replenish glutathione) — most effective within 8 hours, but give even late.\n**Chronic alcoholics** are at higher risk (CYP2E1 induction + glutathione depletion)."
      },
      {
        name: "Naloxone, Naltrexone & Buprenorphine",
        aka: "Naloxone · Naltrexone · Buprenorphine · Buprenorphine-Naloxone (Suboxone)",
        summary: "**Opioid receptor modulators** — antagonists reverse overdose and prevent relapse; buprenorphine treats opioid use disorder.",
        moa: "**Naloxone:** competitive **μ-opioid receptor antagonist** — displaces agonists, reversing respiratory depression.\n**Naltrexone:** similar antagonist but oral, long-acting, used for relapse prevention.\n**Buprenorphine:** **high-affinity partial μ-agonist + κ-antagonist** — ceiling effect on respiratory depression; high affinity displaces full agonists.",
        use: "**Naloxone:** acute opioid overdose reversal (IV/IM/intranasal — Narcan).\n**Naltrexone:** opioid use disorder (monthly IM Vivitrol) and **alcohol use disorder** (reduces cravings).\n**Buprenorphine (± naloxone):** opioid use disorder maintenance therapy (Suboxone).",
        se: "Both antagonists precipitate **acute opioid withdrawal** in opioid-dependent patients.\n**Naloxone t1/2 (~30–60 min) is shorter than most opioids** — requires repeat dosing or infusion for long-acting opioids.",
        ci: "**Naltrexone/buprenorphine:** patients in acute opioid withdrawal or physically dependent on full agonists (will precipitate severe withdrawal).\nMust confirm patient is in mild withdrawal (COWS score) before starting buprenorphine.",
        pk: "**Naloxone:** IV/IM/SQ — no oral bioavailability (extensive first-pass).\nNaloxone in Suboxone deters IV injection (swallowed naloxone is inactive; injected naloxone precipitates withdrawal).\n**Buprenorphine:** sublingual/buccal — bypasses first-pass.",
        pearl: "**Buprenorphine's extraordinarily high receptor affinity** means it will displace full agonists — if given to an actively using patient, it precipitates **severe precipitated withdrawal**.\nPatients must be in mild withdrawal (last use >12–24 hours for short-acting opioids) before the first dose."
      }
    ]
  },
  {
    group: "Antidepressants",
    drugs: [
      {
        name: "SSRIs & SNRIs",
        aka: "Fluoxetine · Sertraline · Escitalopram · Paroxetine · Citalopram · Venlafaxine · Duloxetine · Desvenlafaxine",
        summary: "**First-line antidepressants** — inhibit serotonin (and norepinephrine) reuptake. Broad utility across depression, anxiety, and pain disorders.",
        moa: "**SSRIs:** inhibit **SERT (serotonin transporter)** → increase synaptic serotonin.\n**SNRIs:** inhibit both **SERT and NET** → increase serotonin + NE.\nTherapeutic effects require weeks (receptor downregulation); side effects begin immediately.",
        use: "**First-line for MDD, GAD, panic disorder, PTSD, OCD, social anxiety.**\nDuloxetine: diabetic peripheral neuropathy, fibromyalgia, chronic MSK pain.\nEscitalopram/citalopram: most selective (fewest DDIs).",
        se: "**Sexual dysfunction** (most common — delayed ejaculation, anorgasmia), GI upset, insomnia.\n**Hyponatremia/SIADH** (especially in elderly).\n**Serotonin syndrome** (with MAOIs, tramadol, triptans).\n**Discontinuation syndrome** (flu-like symptoms — worst with paroxetine, least with fluoxetine).",
        ci: "Concurrent MAOI use — allow **14-day washout**.\nException: fluoxetine → 5-week washout when switching FROM fluoxetine TO MAOI.",
        pk: "**Fluoxetine:** very long t1/2 (~4–6 days, active metabolite ~1–2 weeks) — minimal discontinuation syndrome.\n**Paroxetine:** shortest t1/2, worst discontinuation syndrome, potent CYP2D6 inhibitor, most anticholinergic SSRI.",
        pearl: "**Serotonin syndrome vs. NMS:** Serotonin syndrome — tremor, myoclonus, hyperreflexia, clonus, diaphoresis; rapid onset (hours).\nNMS — lead-pipe rigidity, very high fever in an antipsychotic patient; gradual onset (days).\nTreat serotonin syndrome with **cyproheptadine** (5-HT2A antagonist) + supportive care."
      },
      {
        name: "Tricyclic Antidepressants (TCAs)",
        aka: "Amitriptyline · Nortriptyline · Imipramine · Desipramine · Clomipramine · Doxepin",
        summary: "**Non-selective 'dirty' antidepressants** with blocking activity at SERT, NET, muscarinic, H1, α1, and Na+ channels — multiple toxicity profiles.",
        moa: "Block **SERT and NET** (antidepressant effect).\nAlso block **muscarinic M1-M3** (anticholinergic), **H1** (sedation, weight gain), **α1** (orthostatic hypotension), and **fast cardiac Na+ channels** (Class I → QRS widening in overdose).",
        use: "**Neuropathic pain** (first-line), **migraine prophylaxis** (amitriptyline), enuresis (imipramine), OCD (clomipramine — high serotonin specificity), treatment-resistant depression.",
        se: "**3 C's of overdose: Coma · Convulsions · Cardiotoxicity (wide QRS → VT/VF).**\nAnticholinergic effects: dry mouth, constipation, urinary retention, blurred vision, delirium.\nOrthostatic hypotension (α1 block).",
        ci: "Recent MI, concurrent MAOI use, **prolonged QTc or QRS**, BPH, narrow-angle glaucoma.",
        pk: "Highly protein-bound and lipophilic — **not dialyzable**.\nHepatic CYP2D6 metabolism. Long half-lives.",
        pearl: "**TCA overdose cardiotoxicity:** Na+ channel blockade causes **wide QRS + VT/VF** — treat with **IV sodium bicarbonate** (alkalinizes plasma to reduce drug's positive charge, decreasing Na+ channel binding).\nMaintain serum pH 7.45–7.55.\n**Never give physostigmine in TCA overdose** — can precipitate seizures and cardiac arrest."
      },
      {
        name: "MAO Inhibitors (MAOIs)",
        aka: "Phenelzine · Tranylcypromine · Isocarboxazid · Selegiline · Moclobemide",
        summary: "**Irreversible MAO-A/B inhibitors** — highly effective for atypical depression but notorious for life-threatening food and drug interactions.",
        moa: "Irreversibly inhibit **MAO-A** (degrades serotonin, NE, tyramine) and **MAO-B** (degrades dopamine) → massively increase synaptic monoamines.\n**Selegiline (low dose):** selective MAO-B inhibitor — spares MAO-A, so dietary tyramine still metabolized (used for Parkinson's).\n**Moclobemide:** reversible MAO-A inhibitor (RIMA — less dietary restriction).",
        use: "Atypical depression (hypersomnia, hyperphagia, mood reactivity — more effective than TCAs for this subtype), treatment-resistant depression.\n**Selegiline:** Parkinson's disease adjunct (MAO-B inhibition preserves dopamine).",
        se: "**Hypertensive crisis** (tyramine-rich foods → massive NE release), **serotonin syndrome** (with serotonergic drugs), orthostatic hypotension, insomnia.",
        ci: "Concurrent SSRIs, SNRIs, TCAs, triptans, tramadol, meperidine, dextromethorphan, sympathomimetics, **tyramine-rich foods.**",
        pk: "Irreversible MAO inhibition requires **14-day washout** before starting any serotonergic drug.\nFluoxetine's long t1/2 requires 5 weeks to elapse after stopping fluoxetine before starting an MAOI.",
        pearl: "**Tyramine crisis mechanism:** dietary tyramine normally degraded by gut MAO-A; MAOI blocks this → tyramine enters circulation → displaces NE from sympathetic terminals → hypertensive crisis.\nFoods: aged cheese, cured meats, fermented products, wine.\nTreat with **phentolamine (IV)** or labetalol."
      },
      {
        name: "Atypical Antidepressants",
        aka: "Bupropion · Mirtazapine · Trazodone · Vilazodone · Vortioxetine",
        summary: "Mechanistically diverse agents — each chosen for a specific clinical scenario based on its unique side effect profile.",
        moa: "**Bupropion:** inhibits **DAT and NET** (dopamine + NE reuptake blockade) — no serotonergic activity.\n**Mirtazapine:** blocks **α2-autoreceptors** (disinhibits NE/5-HT release) + H1 (sedation) + 5-HT2/3 (no sexual dysfunction, less nausea).\n**Trazodone:** **5-HT2A antagonist + weak SERT inhibitor** + α1 blocker (orthostatic hypotension).",
        use: "**Bupropion:** depression, **smoking cessation** (reduces nicotine cravings), ADHD adjunct, **SSRI-induced sexual dysfunction**.\n**Mirtazapine:** depression with insomnia and significant weight loss (H1 blockade → sedation + appetite stimulation).\n**Trazodone (low dose):** insomnia (sedating, non-habit-forming).",
        se: "**Bupropion:** seizures (dose-dependent — lowers seizure threshold), insomnia, **NO sexual dysfunction** (key advantage).\n**Mirtazapine:** weight gain, sedation.\n**Trazodone:** **priapism** (α1 blockade in penile vasculature), orthostatic hypotension.",
        ci: "**Bupropion:** eating disorders (anorexia/bulimia — electrolyte abnormalities lower seizure threshold), seizure disorder, concurrent MAOI.",
        pk: "**Bupropion:** potent CYP2D6 inhibitor. Active metabolite (hydroxybupropion) responsible for antidepressant effect.",
        pearl: "**Bupropion does NOT cause sexual dysfunction** — go-to switch for SSRI-induced sexual dysfunction.\n**Absolutely contraindicated in anorexia/bulimia** — purging-induced electrolyte derangements lower the seizure threshold, and bupropion lowers it further.\n**Trazodone priapism** requires emergency urology intervention if erection lasts >4 hours."
      }
    ]
  },
  {
    group: "Mood Stabilizers",
    drugs: [
      {
        name: "Lithium",
        aka: "Lithium Carbonate · Lithium Citrate",
        summary: "First-line mood stabilizer for bipolar disorder — narrow therapeutic index with unique renal toxicity and drug interactions.",
        moa: "Inhibits **inositol monophosphatase** (depletes IP3/DAG second messenger signaling) and modulates **GSK-3β** activity.\nExact mood-stabilizing mechanism uncertain; also has neuroprotective effects (increases BDNF).",
        use: "**Bipolar disorder** (acute mania treatment, long-term maintenance — reduces suicide risk).\nAugmentation of antidepressants in unipolar depression.\nCluster headache prophylaxis.",
        se: "**Fine tremor** (dose-related — treat with propranolol), **polyuria/polydipsia** (nephrogenic DI — collecting duct insensitivity to ADH), **hypothyroidism** (blocks thyroid hormone release), weight gain.\n**Toxicity (coarse tremor → confusion → ataxia → seizures → coma → death).**\nTeratogen: **Ebstein anomaly** (tricuspid valve displacement).",
        ci: "Severe renal disease (renally excreted, narrow TI), severe cardiovascular disease, pregnancy (relative — Ebstein anomaly risk).",
        pk: "Renally excreted **unchanged**, handled identically to Na+ in the proximal tubule. Therapeutic range 0.6–1.2 mEq/L.\n**Anything that reduces Na+ or water → proximal tubular lithium reabsorption → toxicity.**",
        pearl: "**Lithium mimics sodium in the kidney** — volume/Na+ depletion (low-Na+ diet, thiazides, NSAIDs, ACEi/ARBs, dehydration) causes the kidney to avidly reabsorb both Na+ and Li+ → lithium toxicity.\n**Amiloride** treats lithium-induced nephrogenic DI by blocking ENaC (the channel lithium enters) without affecting lithium reabsorption elsewhere."
      }
    ]
  },
  {
    group: "Antiepileptics",
    drugs: [
      {
        name: "Phenytoin & Fosphenytoin",
        aka: "Phenytoin · Fosphenytoin",
        summary: "**Class IB-like Na+ channel blocker** for tonic-clonic and focal seizures — zero-order kinetics and extensive drug interactions make monitoring essential.",
        moa: "Blocks **voltage-gated Na+ channels** in their inactivated state (use-dependent) → prevents repetitive neuronal firing → stabilizes seizure threshold.\nDoes NOT potentiate GABA.",
        use: "Tonic-clonic and focal seizures, **status epilepticus** (IV fosphenytoin — prodrug), post-neurosurgical seizure prophylaxis.\nClass IB antiarrhythmic for digitalis-induced arrhythmias.",
        se: "**Acute IV toxicity:** nystagmus (first sign) → ataxia → diplopia → sedation → cardiovascular collapse (from propylene glycol vehicle — use fosphenytoin instead).\n**Chronic use:** gingival hyperplasia, hirsutism, coarsening of facial features, peripheral neuropathy, megaloblastic anemia (folate depletion), **teratogenic** (fetal hydantoin syndrome).",
        ci: "Heart block, **pregnancy** (fetal hydantoin syndrome — cleft lip/palate, digit hypoplasia), concurrent delavirdine.",
        pk: "**Zero-order (saturable) kinetics** — small dose increases cause disproportionately large plasma level rises.\nTherapeutic range 10–20 mcg/mL.\nPotent **CYP450 inducer** (reduces levels of warfarin, OCPs, carbamazepine, valproate).",
        pearl: "**Zero-order kinetics** means a small dose increase can cause toxicity — monitor levels carefully.\nPharmacists know phenytoin's interactions by heart: **induces CYP450** and **is itself induced by carbamazepine, rifampin**.\n**Fosphenytoin** is the water-soluble prodrug — safer for IV infusion (no propylene glycol vehicle, no hypotension/arrhythmia)."
      },
      {
        name: "Carbamazepine",
        aka: "Carbamazepine · Oxcarbazepine",
        summary: "**Na+ channel blocker** first-line for focal seizures and **trigeminal neuralgia** — induces its own metabolism and causes dangerous toxicities.",
        moa: "Blocks **voltage-gated Na+ channels** in their inactivated state → stabilizes hyperexcitable neuronal membranes.\nAlso useful for mood stabilization (bipolar disorder).",
        use: "Focal and generalized tonic-clonic seizures, **trigeminal neuralgia** (drug of choice), **bipolar disorder** (especially mixed episodes), alcohol withdrawal (alternative to benzos).",
        se: "**Diplopia, ataxia, nausea** (dose-dependent).\n**Aplastic anemia and agranulocytosis** (rare, monitor CBC).\n**SIADH** (hyponatremia — especially in elderly).\n**Stevens-Johnson syndrome** — higher risk with **HLA-B*1502** (Han Chinese, Southeast Asian — screen before prescribing).\nTeratogenic (neural tube defects).",
        ci: "Prior bone marrow suppression, concurrent MAOIs, **HLA-B*1502 positivity** without adequate risk discussion.",
        pk: "**Induces its own metabolism (autoinduction)** via CYP3A4 — doses must be increased over weeks as clearance increases.\nAlso induces CYP450 broadly — reduces levels of OCPs, warfarin, phenytoin, valproate.\nOxcarbazepine: less enzyme induction, fewer DDIs.",
        pearl: "**Carbamazepine is the drug of choice for trigeminal neuralgia** — blocks the repetitive high-frequency firing of the trigeminal nerve.\n**Autoinduction** is a classic pharmacokinetics concept — the drug induces the CYP3A4 that metabolizes it, requiring dose escalation over 3–5 weeks to maintain therapeutic levels."
      },
      {
        name: "Valproate (Valproic Acid)",
        aka: "Valproic Acid · Divalproex · Valproate",
        summary: "**Broad-spectrum antiepileptic** — first-line for absence, myoclonic, and generalized seizures, and **bipolar mania**.",
        moa: "Multiple mechanisms: blocks **voltage-gated Na+ channels**, enhances **GABA activity** (increases GABA synthesis/release, inhibits GABA-T), and blocks **T-type Ca2+ channels** (relevant for absence seizures).",
        use: "**Absence seizures** (with ethosuximide), myoclonic seizures, generalized tonic-clonic seizures, focal seizures.\n**Bipolar disorder** (mania and mood stabilization).\n**Migraine prophylaxis.**",
        se: "**Hepatotoxicity** (rare but fatal — especially in children <2 years on polypharmacy; monitor LFTs).\n**Pancreatitis** (acute, potentially fatal).\n**Neural tube defects** (teratogenic — spina bifida; Category D).\n**Weight gain, hair loss, tremor, thrombocytopenia.**",
        ci: "**Pregnancy** (Category D — neural tube defects risk ~1–2%), hepatic disease, urea cycle disorders.",
        pk: "**Inhibits CYP450** (raises phenytoin, phenobarbital, lamotrigine levels).\nHighly protein-bound; displaces other drugs.\nTherapeutic range 50–100 mcg/mL.",
        pearl: "**Valproate is a CYP inhibitor** — it raises lamotrigine levels, requiring halved lamotrigine doses to avoid toxicity.\nTeratogenicity is the most important clinical concern — strongly advise contraception and discuss folic acid supplementation.\n**Carnitine** is used to treat valproate-induced hepatotoxicity (valproate depletes carnitine)."
      },
      {
        name: "Ethosuximide",
        aka: "Ethosuximide",
        summary: "**T-type Ca2+ channel blocker** — drug of choice for **absence seizures (petit mal)** only.",
        moa: "Selectively blocks **T-type (low-voltage-activated) Ca2+ channels** in thalamic neurons → suppresses the 3-Hz spike-and-wave oscillations responsible for absence seizures.",
        use: "**Absence seizures only** (drug of choice or co-first-line with valproate).\nNo utility for tonic-clonic, focal, or other seizure types.",
        se: "GI upset (nausea, vomiting, anorexia), headache, drowsiness.\n**Rare:** aplastic anemia, SLE-like syndrome.",
        ci: "Not effective for any seizure type other than absence — do NOT use as monotherapy if patient has both absence and tonic-clonic seizures (use valproate instead).",
        pk: "Hepatic metabolism. t1/2 ~60 hours in adults, ~30 hours in children.",
        pearl: "**Ethosuximide vs. valproate for absence seizures:** ethosuximide is preferred if absence seizures only (fewer side effects); valproate is preferred if the patient also has tonic-clonic seizures (broader spectrum).\n**Absence seizures** are characterized by brief staring spells, eye blinking, no postictal phase — do NOT confuse with complex focal seizures."
      },
      {
        name: "Benzodiazepines (Antiepileptic Use)",
        aka: "Lorazepam · Diazepam · Midazolam · Clonazepam",
        summary: "**First-line agents for status epilepticus** — rapid onset via GABA-A potentiation makes them ideal for emergent seizure termination.",
        moa: "Increase the **FREQUENCY** of Cl⁻ channel opening at GABA-A receptors → rapid membrane hyperpolarization → seizure termination.",
        use: "**Status epilepticus:** IV lorazepam (first-line in hospital) or IM midazolam (first-line in prehospital setting).\n**Clonazepam:** chronic myoclonic and absence seizures, panic disorder.\n**Rectal diazepam (Diastat):** home rescue for breakthrough seizures.",
        se: "Respiratory depression (especially with other CNS depressants), sedation, tolerance with chronic use.",
        ci: "Severe respiratory insufficiency, myasthenia gravis.",
        pk: "IV lorazepam: onset ~2–5 min, duration ~12–24 hr (less redistribution than diazepam).\nIM midazolam: faster onset than rectal diazepam — now preferred for prehospital status epilepticus.",
        pearl: "**Status epilepticus treatment algorithm:** (1) benzodiazepine → (2) fosphenytoin or valproate → (3) levetiracetam → (4) phenobarbital → (5) propofol/ketamine (refractory).\n**IV lorazepam is preferred over IV diazepam** for status epilepticus because it has longer brain residence time (less redistribution to fat)."
      },
      {
        name: "Newer Antiepileptics",
        aka: "Levetiracetam · Lamotrigine · Gabapentin · Pregabalin · Topiramate · Zonisamide · Lacosamide",
        summary: "Broad-spectrum agents with better tolerability than older AEDs — levetiracetam is now first-line for many seizure types.",
        moa: "**Levetiracetam:** binds **SV2A** (synaptic vesicle protein 2A) → modulates neurotransmitter release — unique mechanism, broad spectrum.\n**Lamotrigine:** blocks Na+ channels (use-dependent) + inhibits glutamate release.\n**Gabapentin/pregabalin:** bind **α2δ subunit of voltage-gated Ca2+ channels** → reduce excitatory neurotransmitter release (analgesic + anticonvulsant).\n**Topiramate:** blocks Na+ channels + enhances GABA + blocks AMPA/kainate glutamate receptors + inhibits carbonic anhydrase.",
        use: "**Levetiracetam:** focal and generalized seizures, status epilepticus (IV), post-traumatic seizure prophylaxis.\n**Lamotrigine:** focal seizures, generalized seizures, bipolar disorder maintenance.\n**Gabapentin/pregabalin:** neuropathic pain (diabetic neuropathy, postherpetic neuralgia), fibromyalgia, anxiety (pregabalin).\n**Topiramate:** focal/generalized seizures, migraine prophylaxis, weight loss (off-label).",
        se: "**Levetiracetam:** behavioral changes (irritability, aggression, psychosis — 'Keppra rage').\n**Lamotrigine:** **Stevens-Johnson syndrome** (risk dramatically increased by rapid dose titration or concurrent valproate — valproate raises lamotrigine levels).\n**Topiramate:** kidney stones (carbonic anhydrase inhibition), **cognitive impairment** ('Dopamax'), paresthesias, **metabolic acidosis**, weight loss.\n**Gabapentin/pregabalin:** sedation, dizziness, peripheral edema, weight gain; abuse potential (pregabalin > gabapentin).",
        ci: "Lamotrigine with valproate without dose adjustment (SJS risk). Topiramate with other carbonic anhydrase inhibitors.",
        pk: "**Levetiracetam:** renally excreted unchanged — dose-reduce in renal failure; minimal drug interactions.\n**Lamotrigine:** glucuronidated — t1/2 halved by enzyme inducers (carbamazepine), doubled by enzyme inhibitors (valproate).",
        pearl: "**Lamotrigine SJS risk** is dramatically increased by rapid titration and by concurrent valproate (which doubles lamotrigine levels by inhibiting glucuronidation) — always titrate slowly and halve the dose when adding valproate.\n**Levetiracetam** is now widely used first-line due to minimal DDIs and IV availability — but watch for behavioral side effects."
      }
    ]
  },
  {
    group: "Antipsychotics",
    drugs: [
      {
        name: "Typical Antipsychotics (First-Generation)",
        aka: "Haloperidol · Chlorpromazine · Fluphenazine · Perphenazine · Thioridazine · Trifluoperazine",
        summary: "**D2 receptor antagonists** — effective for positive symptoms of schizophrenia but cause significant extrapyramidal side effects and tardive dyskinesia.",
        moa: "Block **D2 dopamine receptors** in mesolimbic pathway (antipsychotic effect) AND nigrostriatal pathway (EPS) AND tuberoinfundibular pathway (hyperprolactinemia).\nHigh-potency agents (haloperidol) have more EPS but less sedation/anticholinergic effects.",
        use: "Schizophrenia (positive symptoms), acute agitation (haloperidol IV/IM), Tourette's syndrome (haloperidol), intractable hiccups (chlorpromazine), nausea/vomiting.",
        se: "**EPS (extrapyramidal symptoms):** dystonia (acute — treat with benztropine or diphenhydramine), akathisia (restlessness — treat with propranolol or benzos), parkinsonism (treat with benztropine).\n**Tardive dyskinesia** (chronic — involuntary orofacial movements; often irreversible — treat with valbenazine/tetrabenazine).\n**Neuroleptic malignant syndrome (NMS):** hyperthermia, lead-pipe rigidity, altered mental status, autonomic instability — treat with **dantrolene + bromocriptine**.\n**Hyperprolactinemia** (galactorrhea, amenorrhea, gynecomastia).",
        ci: "Concurrent CNS depressants (additive), **NMS** history, Parkinson's disease (worsens dopamine depletion), QTc prolongation (thioridazine).",
        pk: "**High-potency:** haloperidol, fluphenazine (more EPS, less sedation).\n**Low-potency:** chlorpromazine (less EPS, more sedation, more anticholinergic).\nLong-acting IM depot formulations available for adherence.",
        pearl: "**NMS vs. serotonin syndrome:** NMS = lead-pipe rigidity, fever, bradyreflexia, gradual onset with antipsychotics; serotonin syndrome = hyperreflexia, clonus, tremor, rapid onset with serotonergic drugs.\nTreat NMS with **dantrolene** (muscle relaxation) + **bromocriptine** (D2 agonist to reverse blockade)."
      },
      {
        name: "Atypical Antipsychotics (Second-Generation)",
        aka: "Clozapine · Risperidone · Olanzapine · Quetiapine · Aripiprazole · Ziprasidone · Lurasidone · Paliperidone",
        summary: "**D2 + 5-HT2A antagonists** — less EPS than typicals; clozapine is reserved for treatment-resistant schizophrenia due to agranulocytosis risk.",
        moa: "Block **D2 receptors** (antipsychotic) + **5-HT2A receptors** (reduces EPS risk and improves negative symptoms).\n**Aripiprazole:** partial D2 agonist (not full antagonist) — unique mechanism, less metabolic side effects.\n**Clozapine:** also blocks multiple receptors (D4, 5-HT2, histamine, muscarinic, α1) — explains broad efficacy and extensive side effects.",
        use: "Schizophrenia (positive and negative symptoms), bipolar disorder (olanzapine, quetiapine, aripiprazole), MDD augmentation (aripiprazole, quetiapine), **Clozapine:** treatment-resistant schizophrenia (failed ≥2 antipsychotics) and suicidality in schizophrenia.",
        se: "**Metabolic syndrome** (weight gain, dyslipidemia, hyperglycemia, T2DM) — worst with clozapine and olanzapine.\n**Clozapine:** **agranulocytosis** (1–2% — requires mandatory ANC monitoring; fatal if missed), seizures (dose-dependent), hypersalivation, myocarditis.\n**Risperidone:** most EPS of atypicals, most hyperprolactinemia.\n**Quetiapine:** most sedating, least EPS.\n**Ziprasidone:** QTc prolongation (take with food).",
        ci: "**Clozapine:** history of clozapine-induced agranulocytosis, ANC <1500, uncontrolled epilepsy.",
        pk: "**Clozapine** requires enrollment in a REMS program with mandatory ANC monitoring (weekly for 6 months, then every 2 weeks, then monthly).\nMost are hepatically metabolized (CYP3A4, CYP2D6).",
        pearl: "**Clozapine is the only antipsychotic with proven mortality benefit in schizophrenia** (reduces suicide) — reserved for treatment-resistant cases due to agranulocytosis risk.\n**Weekly ANC monitoring** is mandatory — if ANC <1000 or absolute granulocyte count drops significantly, stop clozapine immediately."
      }
    ]
  },
  {
    group: "Parkinson's Agents",
    drugs: [
      {
        name: "Levodopa/Carbidopa",
        aka: "Levodopa · Carbidopa · Levodopa-Carbidopa (Sinemet)",
        summary: "**Most effective treatment for Parkinson's disease** — dopamine precursor that crosses the BBB, combined with carbidopa to reduce peripheral conversion.",
        moa: "**Levodopa:** amino acid precursor of dopamine — crosses the BBB via LAT1 transporter → converted to dopamine by DOPA decarboxylase in dopaminergic neurons → replenishes depleted striatal dopamine.\n**Carbidopa:** peripheral DOPA decarboxylase inhibitor — does NOT cross BBB → prevents peripheral conversion to dopamine → more levodopa reaches the brain, fewer peripheral side effects.",
        use: "**First-line for moderate-to-severe Parkinson's disease** (most effective agent — especially for motor symptoms: bradykinesia, rigidity, tremor).",
        se: "**Peripheral (without carbidopa):** nausea, vomiting, orthostatic hypotension, cardiac arrhythmias.\n**CNS:** **dyskinesias** (involuntary movements — after years of therapy), hallucinations, psychosis.\n**'On-off' phenomenon** and **wearing-off effect** (motor fluctuations after years of use).",
        ci: "Concurrent non-selective MAOIs (hypertensive crisis — 2-week washout required).\nNarrow-angle glaucoma.",
        pk: "Levodopa competes with large neutral amino acids (LNAAs) for transport across BBB — take on empty stomach or away from high-protein meals.\nLong-term use leads to dyskinesias and motor fluctuations as dopaminergic neurons continue to die.",
        pearl: "**Carbidopa alone has no antiparkinsonian effect** — it only inhibits peripheral decarboxylation, allowing more levodopa to reach the brain while reducing nausea and hypotension.\n**Dyskinesias after years of therapy** are caused by pulsatile (non-physiological) dopamine stimulation — use COMT inhibitors or MAO-B inhibitors to smooth dopamine levels."
      },
      {
        name: "Dopamine Agonists & Other Parkinson's Agents",
        aka: "Pramipexole · Ropinirole · Rotigotine · Bromocriptine · Selegiline · Rasagiline · Entacapone · Tolcapone · Amantadine · Benztropine",
        summary: "Adjuncts to levodopa that extend its efficacy, reduce off time, or target non-dopaminergic mechanisms.",
        moa: "**Dopamine agonists (pramipexole, ropinirole):** directly activate D2/D3 receptors — do not require enzymatic conversion; less dyskinesia than levodopa.\n**Selegiline/rasagiline:** selective **MAO-B inhibitors** → prevent dopamine breakdown in the striatum.\n**Entacapone/tolcapone:** **COMT inhibitors** → block peripheral/central dopamine breakdown → extend levodopa effect and reduce wearing-off.\n**Amantadine:** blocks NMDA receptors + increases dopamine release → useful for levodopa-induced dyskinesias.\n**Benztropine:** muscarinic antagonist → corrects acetylcholine/dopamine imbalance → useful for tremor and drug-induced EPS.",
        use: "**Dopamine agonists:** early PD monotherapy (younger patients, delay levodopa-associated dyskinesias), adjunct to levodopa.\n**MAO-B inhibitors:** early PD neuroprotection (possible), adjunct to levodopa.\n**COMT inhibitors:** adjunct to reduce wearing-off.\n**Amantadine:** levodopa-induced dyskinesias.\n**Benztropine:** drug-induced dystonia/parkinsonism.",
        se: "**Dopamine agonists:** impulse control disorders (gambling, hypersexuality, compulsive eating — 'dopamine dysregulation syndrome'), orthostatic hypotension, hallucinations, somnolence.\n**Tolcapone:** hepatotoxicity (rare but fatal — requires LFT monitoring; entacapone preferred).\n**Amantadine:** livedo reticularis, ankle edema, anticholinergic effects.",
        ci: "Dopamine agonists: active psychosis.\nTolcapone: hepatic disease.\nBenztropine: dementia with Lewy bodies (anticholinergic worsens cognition).",
        pk: "**Selegiline** at low doses is MAO-B selective — does NOT require the tyramine-free diet needed for non-selective MAOIs.\nHigh-dose or non-selective MAO inhibition requires dietary restrictions.",
        pearl: "**Dopamine agonist impulse control disorders** are a serious side effect — ask specifically about gambling, hypersexuality, and binge eating at every visit.\n**Tolcapone requires LFT monitoring** and is second-line to entacapone due to rare fatal hepatotoxicity.\n**Amantadine** is the only drug that reduces established levodopa-induced dyskinesias."
      }
    ]
  }
],

// ── MICROBIOLOGY ──────────────────────────────────────────────────────────────
micro: [
  {
    group: "Beta-Lactams",
    drugs: [
      {
        name: "Penicillins",
        aka: "Penicillin G · Penicillin V · Amoxicillin · Ampicillin · Nafcillin · Oxacillin · Dicloxacillin · Piperacillin-Tazobactam",
        summary: "**Beta-lactam cell wall synthesis inhibitors** — bactericidal via irreversible binding of penicillin-binding proteins (PBPs).",
        moa: "Bind and irreversibly inhibit **penicillin-binding proteins (PBPs)** (transpeptidases) → prevent cross-linking of peptidoglycan → cell wall weakens → osmotic lysis → bactericidal.\nBeta-lactamase inhibitors (clavulanate, tazobactam, sulbactam) protect against enzymatic inactivation.",
        use: "**Penicillin G/V:** streptococcal infections, syphilis (Treponema pallidum — drug of choice), actinomyces.\n**Ampicillin/amoxicillin:** Listeria, enterococcal UTIs, H. influenzae (with beta-lactamase inhibitor).\n**Nafcillin/oxacillin/dicloxacillin:** MSSA (penicillinase-resistant — drug of choice for MSSA bacteremia).\n**Piperacillin-tazobactam (pip-tazo):** broad-spectrum including Pseudomonas.",
        se: "**Hypersensitivity reactions** (most common drug allergy — urticarial rash to anaphylaxis).\nDiarrhea, GI upset.\n**Ampicillin rash** (maculopapular, non-allergic) in patients with EBV/CMV infection or on allopurinol.",
        ci: "Prior anaphylaxis to penicillin (use cephalosporins cautiously — ~1–2% cross-reactivity; avoid if prior anaphylaxis).\nSevere penicillin allergy → use aztreonam (for gram-negatives) or carbapenems (low cross-reactivity).",
        pk: "**Nafcillin/oxacillin:** hepatically eliminated — safe in renal failure (unlike most penicillins).\n**Piperacillin-tazobactam:** renally eliminated; dose-reduce in renal failure.\nTime-dependent killing — efficacy depends on time above MIC.",
        pearl: "**MRSA is resistant to ALL penicillins and cephalosporins** (altered PBP2a with low penicillin affinity — encoded by mecA gene).\nFor MSSA, **nafcillin/oxacillin are superior to vancomycin** — use them when susceptibility is confirmed.\n**Ampicillin rash** in mononucleosis is NOT a true penicillin allergy — patients may safely receive penicillins in the future."
      },
      {
        name: "Cephalosporins",
        aka: "Cephalexin · Cefazolin · Cefuroxime · Ceftriaxone · Cefepime · Ceftaroline · Ceftazidime",
        summary: "**Beta-lactam cell wall inhibitors** organized by generation — each generation adds gram-negative coverage while retaining gram-positive activity.",
        moa: "Same mechanism as penicillins — bind **PBPs** → prevent peptidoglycan cross-linking → bactericidal.\nMore resistant to many beta-lactamases than penicillins.",
        use: "**1st gen (cefazolin, cephalexin):** MSSA, streptococci, surgical prophylaxis (cefazolin).\n**2nd gen (cefuroxime, cefoxitin):** H. influenzae, Moraxella, oral anaerobes (cefoxitin — B. fragilis).\n**3rd gen (ceftriaxone, cefotaxime):** Neisseria gonorrhoeae, Neisseria meningitidis, community-acquired meningitis, Lyme disease.\n**4th gen (cefepime):** Pseudomonas + gram-positives (double coverage).\n**5th gen (ceftaroline):** **MRSA** coverage (only cephalosporin active against MRSA).",
        se: "Hypersensitivity (cross-reactivity with penicillin ~1–2%).\n**Ceftriaxone:** biliary sludge/pseudocholelithiasis (especially in neonates), disulfiram-like reaction with alcohol (MTT side chain).\nClostridum difficile-associated diarrhea.",
        ci: "Prior cephalosporin anaphylaxis. Ceftriaxone in neonates with hyperbilirubinemia (displaces bilirubin from albumin).",
        pk: "Most are renally eliminated except **ceftriaxone** (biliary/hepatic) — safe in renal failure.\nCeftriaxone has long t1/2 (8 hr) — once daily dosing ideal for outpatient parenteral therapy.",
        pearl: "**Generation mnemonic:** each generation adds 1 'G' of gram-negative coverage but may lose some gram-positive coverage.\n**Ceftriaxone** is the workhorse of empiric gram-negative coverage — meningitis, gonorrhea, community-acquired pneumonia, sepsis.\n**Ceftaroline** is the only cephalosporin with MRSA activity — it binds PBP2a with higher affinity."
      },
      {
        name: "Carbapenems & Monobactams",
        aka: "Imipenem-Cilastatin · Meropenem · Ertapenem · Doripenem · Aztreonam",
        summary: "**Broadest-spectrum beta-lactams** — carbapenems cover nearly everything including ESBL producers; aztreonam is gram-negative only and safe in penicillin allergy.",
        moa: "Same PBP-binding mechanism as penicillins.\n**Imipenem** is metabolized by renal dehydropeptidase I → nephrotoxic metabolites; **cilastatin** inhibits this enzyme (combined formulation).\n**Aztreonam (monobactam):** binds only **PBP3** of gram-negative bacteria — no activity against gram-positives or anaerobes.",
        use: "**Carbapenems:** serious nosocomial infections, **ESBL-producing** gram-negative infections, polymicrobial/mixed infections, febrile neutropenia.\n**Ertapenem:** no Pseudomonas or Acinetobacter coverage — useful for ESBL-producing UTIs/intra-abdominal infections in outpatient settings.\n**Aztreonam:** gram-negative infections in patients with **severe penicillin allergy** (no cross-reactivity with penicillins or carbapenems — safe to use).",
        se: "**Imipenem:** **seizures** (lowers seizure threshold — use meropenem for CNS infections).\nGI upset, hypersensitivity.\n**Aztreonam:** generally well-tolerated; minimal cross-reactivity with penicillins.",
        ci: "Imipenem in patients with seizure disorders or CNS infections — use meropenem instead.",
        pk: "Renally eliminated; dose-reduce in renal failure.\nCarbapenems have broad tissue penetration including CSF (meropenem preferred for CNS).",
        pearl: "**Imipenem is the most likely beta-lactam to cause seizures** — always use meropenem for CNS infections or in patients with seizure history.\n**Aztreonam has NO cross-reactivity with penicillins** — it is safe to use in patients with severe penicillin allergy (except those with ceftazidime allergy — identical R1 side chain)."
      },
      {
        name: "Vancomycin",
        aka: "Vancomycin",
        summary: "**Glycopeptide** cell wall inhibitor — the cornerstone agent for **MRSA** and serious gram-positive infections.",
        moa: "Binds the **D-Ala-D-Ala terminus** of peptidoglycan precursors → prevents transglycosylation → cell wall synthesis blocked → bactericidal against most gram-positive organisms.\nToo large to penetrate gram-negative outer membrane — inactive against gram-negatives.",
        use: "**MRSA** (bacteremia, pneumonia, endocarditis, osteomyelitis), **C. difficile colitis** (oral vancomycin — not absorbed, stays in gut), penicillin-allergic patients with serious gram-positive infections, empiric therapy for meningitis (with ceftriaxone).",
        se: "**'Red Man Syndrome'** (not allergy — histamine release from rapid infusion → flushing, erythema of face/neck/torso; prevented by slowing the infusion rate and pre-medicating with antihistamines).\n**Nephrotoxicity** (dose-dependent, synergistic with aminoglycosides).\n**Ototoxicity** (with aminoglycosides or loop diuretics).",
        ci: "Not truly contraindicated, but dose must be adjusted for renal function; avoid rapid infusion.",
        pk: "Monitored with **AUC/MIC** (preferred over trough-only monitoring).\nRenally eliminated; dose-reduce in renal failure.\n**Oral vancomycin** is NOT absorbed — only effective for intraluminal GI infections (C. diff).",
        pearl: "**Red Man Syndrome is not an allergy** — it is a rate-dependent infusion reaction. Slow the infusion to 1–2 hours and pretreat with diphenhydramine; patient can receive vancomycin again.\n**Vancomycin-resistant Enterococcus (VRE)** has altered D-Ala-D-Lac terminus — binding is prevented; treat with linezolid or daptomycin."
      }
    ]
  },
  {
    group: "Other Antibacterials",
    drugs: [
      {
        name: "Aminoglycosides",
        aka: "Gentamicin · Tobramycin · Amikacin · Streptomycin · Neomycin",
        summary: "**Concentration-dependent bactericidal agents** targeting the 30S ribosomal subunit — potent gram-negative coverage but significant nephrotoxicity and ototoxicity.",
        moa: "Bind the **30S ribosomal subunit** → inhibit initiation complex formation + cause misreading of mRNA → incorporation of wrong amino acids → dysfunctional proteins → bactericidal.\nRequire oxygen-dependent transport into bacteria — **inactive in anaerobic environments** (abscesses, necrotic tissue).",
        use: "Serious gram-negative infections (Pseudomonas, Enterobacteriaceae), **synergistic therapy** with beta-lactams for enterococcal/streptococcal endocarditis, tuberculosis (streptomycin), surgical prophylaxis.",
        se: "**Nephrotoxicity** (proximal tubular injury — reversible if caught early; synergistic with vancomycin, NSAIDs, contrast).\n**Ototoxicity** — **vestibular** (gentamicin, streptomycin → ataxia, vertigo) or **cochlear** (amikacin, neomycin → sensorineural hearing loss); often irreversible.\n**Neuromuscular blockade** (avoid in myasthenia gravis).",
        ci: "Myasthenia gravis, pregnancy (ototoxicity to fetus).\nAvoid or reduce dose in renal failure.",
        pk: "**Concentration-dependent killing** — once-daily dosing (higher peak → greater efficacy, longer post-antibiotic effect, less nephrotoxicity).\nMonitor with peak and trough levels (or AUC).\nExclusively renally excreted; dose-reduce in renal failure.",
        pearl: "**Aminoglycosides are inactive in acidic, anaerobic environments** (abscesses) — this is why they are combined with beta-lactams or metronidazole for intra-abdominal infections.\n**Ototoxicity is often irreversible** — monitor for tinnitus, hearing changes, and vertigo; cochlear damage affects high frequencies first."
      },
      {
        name: "Macrolides",
        aka: "Azithromycin · Clarithromycin · Erythromycin",
        summary: "**50S ribosomal inhibitors** that block translocation — first-line for community-acquired pneumonia and atypical organisms.",
        moa: "Bind the **23S rRNA of the 50S ribosomal subunit** → block translocation (peptide chain cannot advance) → bacteriostatic (bactericidal at high concentrations against some organisms).",
        use: "**Atypical pneumonia** (Mycoplasma, Chlamydophila, Legionella), community-acquired pneumonia, H. pylori eradication (clarithromycin), MAC prophylaxis/treatment (azithromycin), STIs (Chlamydia — azithromycin 1 g single dose), pertussis.",
        se: "**GI motility effects** (erythromycin — motilin receptor agonist → nausea, vomiting, abdominal cramps; useful for gastroparesis).\n**QTc prolongation** (all macrolides — especially azithromycin).\n**CYP3A4 inhibition** (clarithromycin > erythromycin >> azithromycin — major DDIs).\nCholestatic jaundice (erythromycin estolate form).",
        ci: "**Concurrent QTc-prolonging drugs** (azithromycin + fluoroquinolones = additive QTc risk).\nClarithromycin + simvastatin/lovastatin (CYP3A4 inhibition → rhabdomyolysis).",
        pk: "**Azithromycin:** long t1/2 (5 days), high tissue distribution — 5-day course achieves 10-day effective tissue levels. Minimal CYP interactions.\n**Clarithromycin:** potent CYP3A4 inhibitor — extensive DDIs. Also inhibits P-gp.",
        pearl: "**Erythromycin is a prokinetic** (motilin receptor agonist) — used at low doses for diabetic gastroparesis.\n**Clarithromycin has the most significant DDIs** of the macrolides — raises statin, cyclosporine, and digoxin levels.\n**Azithromycin QTc prolongation** was highlighted by the FDA after a study showing increased cardiovascular deaths — caution in patients with baseline QTc prolongation."
      },
      {
        name: "Fluoroquinolones",
        aka: "Ciprofloxacin · Levofloxacin · Moxifloxacin · Norfloxacin · Ofloxacin",
        summary: "**DNA gyrase and topoisomerase IV inhibitors** — concentration-dependent bactericidal agents with broad-spectrum activity.",
        moa: "Inhibit bacterial **DNA gyrase (topoisomerase II)** and **topoisomerase IV** → prevent DNA relaxation and strand separation during replication and transcription → bactericidal.\nConcentration-dependent killing.",
        use: "**Ciprofloxacin:** gram-negative coverage including Pseudomonas, UTIs, anthrax prophylaxis/treatment, typhoid fever.\n**Levofloxacin/moxifloxacin ('respiratory quinolones'):** community-acquired pneumonia (including atypicals), sinusitis.\n**Moxifloxacin:** anaerobic coverage — do NOT use for UTIs (no urinary excretion).",
        se: "**Tendinopathy and tendon rupture** (especially Achilles — inhibit tenocyte collagen synthesis; risk increased in elderly, corticosteroids, renal failure).\n**QTc prolongation** (especially moxifloxacin).\n**CNS effects:** dizziness, seizures, confusion (especially in elderly).\n**Cartilage damage** in children — generally avoided in pediatrics.\n**C. difficile** associated diarrhea.",
        ci: "**Children and adolescents** (cartilage toxicity — except when no alternatives exist: anthrax, complicated UTIs).\n**Concurrent QTc-prolonging agents.**\n**Myasthenia gravis** (can worsen neuromuscular blockade).",
        pk: "Excellent oral bioavailability (~80–95%) — oral = IV for most indications.\n**Chelation:** antacids, Ca2+, Mg2+, Fe2+, Al3+ decrease absorption by 50–90% — take 2 hours before or 6 hours after these agents.\n**Renally eliminated** (except moxifloxacin — hepatic).",
        pearl: "**Fluoroquinolone tendon rupture** is a black box warning — most commonly the Achilles tendon; risk is highest in patients >60, on corticosteroids, or with renal transplant.\n**Chelation by divalent/trivalent cations** is one of the most tested pharmacokinetic drug interactions — do NOT take with calcium, magnesium, iron, antacids, or dairy products."
      },
      {
        name: "Tetracyclines",
        aka: "Tetracycline · Doxycycline · Minocycline · Tigecycline",
        summary: "**30S ribosomal inhibitors** that block aminoacyl-tRNA entry — bacteriostatic agents for atypicals, Rickettsia, Chlamydia, and Lyme disease.",
        moa: "Bind the **30S ribosomal subunit** → block attachment of aminoacyl-tRNA to the A site → prevent peptide chain elongation → bacteriostatic.",
        use: "**Doxycycline:** Lyme disease (drug of choice for early and late stage), Rocky Mountain spotted fever (Rickettsia — also drug of choice), Chlamydia, atypical pneumonia, H. pylori (quadruple therapy), malaria prophylaxis, acne.\n**Minocycline:** MRSA skin/soft tissue infections (alternative to TMP-SMX).\n**Tigecycline:** serious drug-resistant gram-positive/gram-negative infections (reserve).",
        se: "**Photosensitivity** (doxycycline especially — wear sunscreen).\n**Teeth discoloration and enamel hypoplasia** in children <8 years and neonates (deposits in calcifying tissues).\n**GI upset**, esophageal ulceration (take upright with water).\n**Hepatotoxicity** (high doses, pregnancy).",
        ci: "**Children <8 years** (teeth/bone effects), **pregnancy** (same reason + hepatotoxicity risk), concurrent antacids, iron, dairy (chelation — reduces absorption).",
        pk: "**Doxycycline:** less affected by food/chelation than tetracycline; hepatically eliminated — can be used in renal failure.\n**Tetracycline:** must be taken on empty stomach; renally eliminated.",
        pearl: "**Doxycycline is the drug of choice for Rocky Mountain Spotted Fever** — even in children (in this case, the benefit outweighs tooth discoloration risk; single course does not cause significant staining).\n**Fanconi syndrome** can occur with degraded tetracyclines — never use expired tetracycline."
      },
      {
        name: "Clindamycin",
        aka: "Clindamycin",
        summary: "**50S ribosomal inhibitor** with excellent anaerobic and gram-positive coverage — most notorious for **C. difficile-associated colitis**.",
        moa: "Binds the **23S rRNA of the 50S ribosomal subunit** → blocks peptide bond formation (same binding site as macrolides and chloramphenicol — competitive antagonism) → bacteriostatic.",
        use: "Anaerobic infections (aspiration pneumonia, intra-abdominal, dental abscess), **MRSA** skin/soft tissue infections (community-acquired — CA-MRSA), streptococcal/staphylococcal infections, toxin suppression in toxic shock syndrome (inhibits protein synthesis → reduces toxin production), PCP prophylaxis (with primaquine), malaria.",
        se: "**C. difficile-associated diarrhea/pseudomembranous colitis** (one of the highest-risk antibiotics for C. diff — disrupts colonic flora → C. diff overgrowth).\nGI upset, rash.",
        ci: "Prior C. difficile infection (relative), inability to monitor for diarrhea.",
        pk: "Excellent tissue penetration including bone (useful for osteomyelitis).\nNOT effective for gram-negative organisms — no coverage of Enterobacteriaceae.",
        pearl: "**Clindamycin is one of the most common triggers of C. difficile colitis** — along with fluoroquinolones and cephalosporins.\nIt is specifically useful in toxic shock syndrome because **inhibiting protein synthesis reduces toxin production**, breaking the cycle of systemic toxin release even as the bacteria die."
      },
      {
        name: "Sulfonamides & Trimethoprim",
        aka: "Sulfamethoxazole · Trimethoprim · TMP-SMX (Bactrim) · Dapsone",
        summary: "**Sequential folate synthesis inhibitors** — synergistic bactericidal combination targeting dihydropteroate synthase (SMX) and dihydrofolate reductase (TMP).",
        moa: "**Sulfamethoxazole (SMX):** structural analog of PABA → competitively inhibits **dihydropteroate synthase** → prevents folate synthesis (bacteria must synthesize folate; humans obtain it from diet).\n**Trimethoprim (TMP):** inhibits **dihydrofolate reductase (DHFR)** → prevents conversion of dihydrofolate → tetrahydrofolate → blocks purine and pyrimidine synthesis.\nSequential blockade = synergistic bactericidal action.",
        use: "**TMP-SMX:** UTIs, PCP prophylaxis and treatment (drug of choice), Pneumocystis jirovecii pneumonia, Nocardia, Toxoplasma prophylaxis, MRSA skin/soft tissue (CA-MRSA), Stenotrophomonas.",
        se: "**Sulfonamides:** hypersensitivity (rash, **Stevens-Johnson syndrome**), **hemolytic anemia** in G6PD deficiency (oxidative stress), **kernicterus** in neonates (displaces bilirubin from albumin), crystalluria (hydrate well), nephrotoxicity.\n**TMP:** inhibits tubular creatinine secretion → spurious creatinine rise (not true AKI), hyperkalemia (blocks ENaC).",
        ci: "**G6PD deficiency** (hemolytic anemia), **pregnancy** (kernicterus risk, folate antagonism), neonates, severe renal/hepatic impairment.",
        pk: "TMP inhibits tubular secretion of creatinine — expect a small creatinine rise that is not indicative of true renal injury.\nLeucovorin (folinic acid) can be given to rescue normal human cells from TMP-induced folate depletion without rescuing bacteria.",
        pearl: "**TMP-SMX creatinine rise** is due to inhibition of tubular creatinine secretion, NOT true nephrotoxicity — GFR is unchanged.\n**G6PD deficiency** is the key contraindication for dapsone as well — both cause oxidative hemolysis in G6PD-deficient patients.\n**Leucovorin** bypasses DHFR to rescue human cells during TMP therapy in immunocompromised patients."
      },
      {
        name: "Metronidazole",
        aka: "Metronidazole (Flagyl)",
        summary: "**Nitroimidazole** with selective activity against **anaerobes and protozoa** — generates free radicals that cause DNA strand breaks.",
        moa: "Enters cells and is reduced by **ferredoxin-linked electron transport** (present only in anaerobes/protozoa) → reactive intermediate (nitro radical) → DNA strand breaks → bactericidal/cidal.",
        use: "**Anaerobic infections** (intra-abdominal, pelvic inflammatory disease, brain abscess, aspiration pneumonia — always add to cover anaerobes below the diaphragm).\n**C. difficile colitis** (oral metronidazole — now second-line to oral vancomycin/fidaxomicin).\n**Protozoa:** Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica (drug of choice for all three).\n**H. pylori** eradication regimens.",
        se: "**Disulfiram-like reaction** with alcohol (inhibits acetaldehyde dehydrogenase — nausea, flushing, vomiting; avoid alcohol during treatment and 48 hours after).\n**Metallic taste**, GI upset.\n**Peripheral neuropathy** and **CNS toxicity** (seizures, encephalopathy) with prolonged use.",
        ci: "**Alcohol use** during or within 48 hours of therapy (disulfiram-like reaction).\nFirst trimester of pregnancy (mutagenicity in high-dose animal studies — use with caution).",
        pk: "Excellent oral bioavailability, penetrates CNS and abscesses well.\nActivated in anaerobic environments — selective toxicity.",
        pearl: "**Metronidazole is NOT effective against aerobic bacteria** — it requires anaerobic reduction for activation.\nThe **disulfiram-like reaction with alcohol** is one of the most tested drug interactions: patients must avoid all alcohol including wine, beer, and medications containing alcohol (some cough syrups, mouthwash)."
      },
      {
        name: "Linezolid & Daptomycin",
        aka: "Linezolid · Daptomycin · Tedizolid",
        summary: "Reserve gram-positive agents for **VRE** and **MRSA** when vancomycin fails or is contraindicated.",
        moa: "**Linezolid (oxazolidinone):** binds the **23S rRNA of the 50S subunit** at the peptidyl transferase center → prevents formation of the 70S initiation complex → protein synthesis inhibited → bacteriostatic (bactericidal against Streptococcus).\n**Daptomycin:** calcium-dependent lipopeptide → inserts into **gram-positive cell membrane** → membrane depolarization → leakage of intracellular ions → rapid bactericidal killing.",
        use: "**Linezolid:** VRE infections, MRSA pneumonia and soft tissue infections (oral bioavailability = IV — great for step-down).\n**Daptomycin:** VRE, MRSA bacteremia and right-sided endocarditis (NOT for pneumonia — inactivated by pulmonary surfactant).",
        se: "**Linezolid:** **serotonin syndrome** (weak MAO inhibitor — avoid concurrent serotonergic drugs), thrombocytopenia (monitor weekly), anemia, peripheral and optic neuropathy (prolonged use), lactic acidosis.\n**Daptomycin:** **myopathy/rhabdomyolysis** (monitor CK weekly; hold statins during therapy).",
        ci: "**Linezolid + SSRIs/SNRIs/MAOIs:** serotonin syndrome.\n**Daptomycin for pneumonia:** inactivated by lung surfactant — do NOT use for respiratory infections.",
        pk: "**Linezolid:** excellent oral bioavailability (~100%) — same efficacy oral vs. IV; 100% bioavailability makes oral step-down ideal.\n**Daptomycin:** IV only; renally eliminated.",
        pearl: "**Daptomycin cannot treat pneumonia** — it is inactivated by pulmonary surfactant (the lipopeptide is bound and neutralized). This is one of the most tested facts about daptomycin.\n**Linezolid is a weak, reversible MAOI** — serotonin syndrome risk is real; avoid concurrent use with serotonergic agents."
      },
      {
        name: "Chloramphenicol & Others",
        aka: "Chloramphenicol · Rifampin · Nitrofurantoin · Polymyxin B · Colistin",
        summary: "Miscellaneous antibacterials — each with a specific niche and critical toxicity to know.",
        moa: "**Chloramphenicol:** binds **50S ribosomal subunit** → inhibits **peptidyltransferase** → blocks peptide bond formation.\n**Rifampin:** inhibits bacterial **DNA-dependent RNA polymerase** (β-subunit) → blocks mRNA synthesis → bactericidal.\n**Nitrofurantoin:** reduced by bacterial enzymes to reactive intermediates → damages DNA and other macromolecules.\n**Polymyxin B/Colistin:** cationic lipopeptides → disrupt gram-negative outer membrane → cell death.",
        use: "**Chloramphenicol:** meningitis in penicillin-allergic patients (penetrates CSF), Rocky Mountain Spotted Fever (alternative to doxycycline in pregnancy).\n**Rifampin:** TB (never used alone — resistance develops rapidly), meningococcal prophylaxis, Staph prosthetic valve/device infections (biofilm penetration), H. influenzae B prophylaxis, leprosy.\n**Nitrofurantoin:** uncomplicated UTIs (does NOT achieve systemic levels — only use for lower UTIs).\n**Polymyxin B/Colistin:** last-resort for MDR gram-negative infections (Pseudomonas, Acinetobacter, Klebsiella — 'last-resort' antibiotics).",
        se: "**Chloramphenicol:** **aplastic anemia** (idiosyncratic, irreversible — rare), **gray baby syndrome** (neonates — immature UGT → accumulation → circulatory collapse), dose-dependent bone marrow suppression.\n**Rifampin:** **orange/red coloration of all body fluids** (tears, urine, sweat — harmless but patients must be warned), hepatotoxicity, potent **CYP450 inducer** (reduces levels of OCPs, warfarin, methadone, antiretrovirals, azoles).\n**Nitrofurantoin:** pulmonary fibrosis (chronic use), peripheral neuropathy, hemolytic anemia (G6PD deficiency).\n**Polymyxin B/Colistin:** severe nephrotoxicity, neurotoxicity.",
        ci: "**Chloramphenicol:** neonates (gray baby syndrome), pregnancy.\n**Rifampin:** never as monotherapy (rapid resistance).\n**Nitrofurantoin:** GFR <30 (not effective, accumulates → toxicity), pregnancy at term (neonatal hemolysis).",
        pk: "**Rifampin** is the most potent CYP450 inducer in clinical medicine — affects virtually all hepatically metabolized drugs.\n**Nitrofurantoin** only achieves therapeutic concentrations in urine — ineffective for systemic infections.",
        pearl: "**Rifampin turns body fluids orange** — warn patients about tears staining contact lenses permanently.\n**Rifampin as a CYP inducer** renders OCPs ineffective — use barrier contraception.\n**Gray baby syndrome:** chloramphenicol accumulation in neonates (immature UGT glucuronidation) → vomiting, gray skin, cardiovascular collapse → fatal if not recognized."
      }
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin · Isoniazid · Pyrazinamide · Ethambutol · Streptomycin",
        summary: "Four-drug RIPE therapy for active TB — each drug has a distinct mechanism and unique toxicity to memorize.",
        moa: "**Rifampin:** inhibits **DNA-dependent RNA polymerase** (β-subunit) → bactericidal.\n**Isoniazid (INH):** prodrug activated by **KatG** (mycobacterial catalase-peroxidase) → inhibits **InhA** (enoyl-ACP reductase) → blocks mycolic acid synthesis → bactericidal against dividing organisms.\n**Pyrazinamide (PZA):** activated to pyrazinoic acid → disrupts membrane potential and energy production → bactericidal against dormant organisms in acidic environments (necrotic granulomas).\n**Ethambutol:** inhibits **arabinosyltransferase** → blocks arabinogalactan (cell wall component) synthesis → bacteriostatic.",
        use: "**Active TB:** 2 months RIPE → 4 months RI (total 6 months).\n**Latent TB:** 9 months INH or 3 months INH-rifapentine (weekly).\nINH monotherapy for latent TB (LTBI) in contacts of active TB.",
        se: "**Rifampin:** orange body fluids, hepatotoxicity, CYP450 inducer.\n**INH:** **peripheral neuropathy** (B6 deficiency → pyridoxine supplementation required), **hepatotoxicity** (especially in slow acetylators >35 years), drug-induced lupus, **sideroblastic anemia**.\n**PZA:** **hyperuricemia** (inhibits uric acid secretion → gout), hepatotoxicity, arthralgias.\n**Ethambutol:** **optic neuritis** → red-green color blindness, decreased visual acuity (monitor color vision monthly; stop if visual changes occur).",
        ci: "INH: active hepatic disease.\nEthambutol: young children who cannot report visual changes.",
        pk: "**INH** is acetylated by NAT2 — **fast acetylators** clear INH rapidly (need higher doses or shorter interval); **slow acetylators** accumulate INH → more hepatotoxicity and neuropathy.",
        pearl: "**INH toxicity mnemonic — Hepatotoxic, Neuropathy, Lupus-like, B6 (SHeLB):** Slow acetylators get Hepatotoxicity; give pyridoxine (B6) to prevent Neuropathy.\n**Ethambutol optic neuritis** is the most tested unique toxicity — affects visual acuity and red-green color discrimination; screen monthly and stop the drug if changes occur."
      }
    ]
  },
  {
    group: "Antifungals",
    drugs: [
      {
        name: "Azoles",
        aka: "Fluconazole · Itraconazole · Voriconazole · Posaconazole · Ketoconazole · Isavuconazole",
        summary: "**Ergosterol synthesis inhibitors** targeting lanosterol 14α-demethylase — the most widely used antifungal class.",
        moa: "Inhibit **fungal CYP51 (lanosterol 14α-demethylase)** → block conversion of lanosterol → ergosterol → accumulation of toxic methylated sterols + depletion of ergosterol → membrane dysfunction → fungistatic (fungicidal at high concentrations).",
        use: "**Fluconazole:** Candida (most species — NOT C. krusei or C. glabrata), Cryptococcus maintenance therapy, coccidioidomycosis.\n**Voriconazole:** **Aspergillus** (drug of choice), C. glabrata, C. krusei, endemic mycoses.\n**Itraconazole/posaconazole:** endemic mycoses (histoplasmosis, blastomycosis, coccidioidomycosis), Aspergillus prophylaxis in neutropenic patients.\n**Ketoconazole:** topical only now (systemic use abandoned due to toxicity).",
        se: "**Hepatotoxicity** (all azoles — monitor LFTs).\n**QTc prolongation** (all, especially itraconazole).\n**Voriconazole:** visual disturbances (photopsia — transient visual changes, 'visual halos'; common but usually benign), **photosensitivity/phototoxicity**, periostitis (bone pain with long-term use).\n**Ketoconazole:** **inhibits adrenal/gonadal steroidogenesis** → gynecomastia, adrenal insufficiency.",
        ci: "Concurrent **terfenadine or cisapride** (QTc prolongation → torsades — classic board interaction).\nCYP3A4 inhibition raises levels of many drugs (statins → rhabdomyolysis, cyclosporine → nephrotoxicity, warfarin → bleeding).",
        pk: "**Azoles are potent CYP3A4 inhibitors** (and CYP2C9 inhibitors) — extensive drug interactions.\n**Fluconazole:** excellent oral bioavailability (~90%), CSF penetration.\n**Itraconazole:** poor oral absorption — requires acidic environment (take with food; avoid PPIs).",
        pearl: "**Fluconazole does NOT cover Aspergillus** — use voriconazole for invasive aspergillosis.\n**Azoles + statins = rhabdomyolysis** (CYP3A4 inhibition raises statin levels dramatically).\n**Voriconazole visual changes** are very common (~30%) — transient photopsia, typically with the first dose; reassure the patient."
      },
      {
        name: "Amphotericin B",
        aka: "Amphotericin B · Liposomal Amphotericin B (AmBisome) · Amphotericin B Lipid Complex (ABLC)",
        summary: "**Gold standard for severe invasive fungal infections** — directly binds ergosterol to form membrane pores; significant nephrotoxicity limits use.",
        moa: "Binds **ergosterol** (the predominant sterol in fungal cell membranes) → inserts into the membrane → forms aqueous pores → leakage of electrolytes (K+, Mg2+) → cell death → **fungicidal**.\nAlso binds cholesterol (mammalian cell sterol) to a lesser degree → explains toxicity.",
        use: "**Severe/disseminated invasive fungal infections:** cryptococcal meningitis (with flucytosine induction → then fluconazole maintenance), invasive aspergillosis (2nd line to voriconazole), invasive candidiasis (severe), mucormycosis, histoplasmosis (severe).",
        se: "**Nephrotoxicity** (dose-limiting — tubular damage, distal RTA, K+/Mg2+ wasting; monitor BMP daily; use NS pre-hydration).\n**Infusion reactions** ('ampho-terrible' — fever, chills, rigors, hypotension during infusion; pretreat with acetaminophen, diphenhydramine, meperidine for rigors).\n**Hypokalemia and hypomagnesemia** (renal wasting).\n**Lipid formulations** are significantly less nephrotoxic — preferred in renal impairment.",
        ci: "Concurrent nephrotoxic agents (aminoglycosides, NSAIDs) — additive nephrotoxicity.",
        pk: "IV only (not orally absorbed). Very long t1/2 (weeks) — distributes widely to tissues.\nLiposomal formulation preferentially taken up by macrophages — delivers drug to sites of fungal infection in reticuloendothelial system with less renal exposure.",
        pearl: "**Lipid formulations (AmBisome, ABLC)** are preferred for nephroprotection — use when patient has preexisting renal impairment or requires prolonged therapy.\n**Pre-hydration with normal saline** reduces nephrotoxicity.\n**Hypokalemia** from amphotericin B is caused by direct tubular damage — aggressive potassium and magnesium replacement is required daily."
      },
      {
        name: "Echinocandins",
        aka: "Caspofungin · Micafungin · Anidulafungin",
        summary: "**Beta-1,3-glucan synthase inhibitors** — fungicidal against Candida and Aspergillus; no activity against Cryptococcus.",
        moa: "Inhibit **beta-(1,3)-D-glucan synthase** → prevents synthesis of glucan (a major structural component of the fungal cell wall) → fungicidal against Candida; fungistatic against Aspergillus.",
        use: "**Invasive candidiasis** (first-line for candidemia in most patients — especially non-neutropenic adults and ICU patients).\n**Invasive aspergillosis** (second-line or combination with voriconazole).\n**Empiric antifungal therapy** in febrile neutropenic patients.",
        se: "Generally well-tolerated — minimal nephrotoxicity and hepatotoxicity compared to amphotericin B.\nInfusion-related reactions (rare), transaminase elevation (mild), hypokalemia.",
        ci: "No major contraindications. Caspofungin: caution in severe hepatic disease (reduced hepatic metabolism).",
        pk: "IV only; hepatically metabolized.\n**Minimal drug interactions** compared to azoles — do not inhibit CYP450.\n**Caspofungin** is a substrate of CYP3A4 — rifampin can reduce levels.",
        pearl: "**Echinocandins have NO activity against Cryptococcus** — Cryptococcus lacks the beta-glucan target.\nThey are the preferred first-line treatment for invasive candidiasis in critically ill patients because of excellent safety profile and activity against azole-resistant Candida species (including C. glabrata and C. krusei)."
      },
      {
        name: "Other Antifungals",
        aka: "Flucytosine · Terbinafine · Griseofulvin · Nystatin",
        summary: "Niche antifungals — flucytosine for cryptococcal meningitis combination therapy; topical agents for superficial infections.",
        moa: "**Flucytosine (5-FC):** converted to **5-fluorouracil (5-FU)** by fungal cytosine deaminase → inhibits thymidylate synthase → blocks DNA synthesis (fungi have cytosine deaminase; humans lack significant activity).\n**Terbinafine:** inhibits **squalene epoxidase** → squalene accumulates (toxic) + ergosterol depleted → fungicidal against dermatophytes.\n**Griseofulvin:** disrupts **microtubule function** (binds β-tubulin) → inhibits mitosis → fungistatic.\n**Nystatin:** binds ergosterol → membrane pores → fungicidal — too toxic for systemic use (topical/oral only).",
        use: "**Flucytosine:** combination with amphotericin B for **cryptococcal meningitis** (synergistic induction therapy — never use alone, rapid resistance).\n**Terbinafine:** onychomycosis (fingernail/toenail), tinea capitis, tinea corporis — most effective agent for dermatophytes.\n**Griseofulvin:** tinea capitis (especially in children — oral; deposited in keratin).\n**Nystatin:** oropharyngeal and esophageal candidiasis (oral swish and swallow/suppositories).",
        se: "**Flucytosine:** bone marrow suppression (leukopenia, thrombocytopenia — monitor CBC), GI upset, hepatotoxicity.\n**Terbinafine:** hepatotoxicity (rare), GI upset, headache; can cause taste/smell disturbance.\n**Griseofulvin:** headache, GI upset, disulfiram-like reaction with alcohol, teratogenic, CYP450 inducer (reduces warfarin/OCP levels).",
        ci: "**Flucytosine monotherapy:** rapid resistance emergence.\n**Griseofulvin:** pregnancy (teratogenic), hepatic failure.",
        pk: "**Flucytosine** is renally excreted — dose-reduce in renal failure (drug accumulates → increased toxicity).\n**Terbinafine** accumulates in nails, hair, skin — very long duration needed for onychomycosis (6 weeks fingernail, 12 weeks toenail).",
        pearl: "**Flucytosine + amphotericin B** is the standard induction for cryptococcal meningitis — synergistic because amphotericin B disrupts the membrane, allowing more flucytosine to enter.\n**Flucytosine is converted to 5-FU** inside fungal cells — bone marrow suppression is its dose-limiting toxicity (same mechanism as chemotherapy-use 5-FU)."
      }
    ]
  },
  {
    group: "Antivirals",
    drugs: [
      {
        name: "Herpes Antivirals",
        aka: "Acyclovir · Valacyclovir · Famciclovir · Ganciclovir · Valganciclovir · Foscarnet · Cidofovir",
        summary: "**Nucleoside/nucleotide analogs** that inhibit viral DNA polymerase — acyclovir for HSV/VZV; ganciclovir for CMV.",
        moa: "**Acyclovir:** guanosine analog → phosphorylated FIRST by **viral thymidine kinase (TK)** (HSV/VZV-specific — not present in uninfected cells) → then by cellular kinases → triphosphate form inhibits **viral DNA polymerase** and acts as a chain terminator. **Selectivity** comes from preferential activation by viral TK.\n**Ganciclovir:** similar mechanism; activated by **CMV UL97 kinase** → inhibits CMV DNA polymerase.\n**Foscarnet:** directly inhibits **viral DNA polymerase** and **reverse transcriptase** WITHOUT requiring kinase activation — active against acyclovir/ganciclovir-resistant viruses.\n**Cidofovir:** nucleotide analog (already monophosphorylated) — does not require viral kinase.",
        use: "**Acyclovir/valacyclovir:** HSV-1/2 (genital herpes, cold sores, encephalitis), VZV (chickenpox, shingles).\n**Ganciclovir/valganciclovir:** CMV retinitis, CMV prophylaxis in transplant patients.\n**Foscarnet:** acyclovir-resistant HSV, ganciclovir-resistant CMV, CMV retinitis.\n**Cidofovir:** CMV retinitis (second-line).",
        se: "**Acyclovir:** generally well-tolerated; **crystalluria/AKI** with rapid IV infusion (hydrate well); neurotoxicity (encephalopathy) at high doses in renal failure.\n**Ganciclovir:** **myelosuppression** (leukopenia, thrombocytopenia — dose-limiting), teratogenic, carcinogenic.\n**Foscarnet:** **nephrotoxicity** (chelates Ca2+ and Mg2+ in renal tubules → hypo/hypercalcemia, hypo/hyperphosphatemia), seizures.\n**Cidofovir:** severe nephrotoxicity (proximal tubular injury — always administer with probenecid and IV hydration).",
        ci: "**Ganciclovir:** concurrent myelosuppressive agents (additive bone marrow toxicity), pregnancy.",
        pk: "**Valacyclovir/valganciclovir:** oral prodrugs with improved bioavailability (vs. acyclovir ~20%, valacyclovir ~55%).\n**Foscarnet/cidofovir:** IV only; renally eliminated.\n**Cidofovir** requires probenecid (blocks tubular secretion) to reduce nephrotoxicity.",
        pearl: "**Acyclovir resistance** develops when HSV mutates to lose **thymidine kinase** (drug cannot be activated) — treat resistant HSV with **foscarnet** (does not require viral TK activation).\n**Ganciclovir myelosuppression** is the dose-limiting toxicity — monitor CBC; hold if ANC <500."
      },
      {
        name: "HIV Antiretrovirals — Overview",
        aka: "NRTIs · NNRTIs · PIs · INSTIs · Entry Inhibitors · CCR5 Antagonists",
        summary: "**Combination antiretroviral therapy (cART)** targets multiple steps in the HIV lifecycle — standard of care is a 3-drug regimen including 2 NRTIs + 1 anchor drug.",
        moa: "**NRTIs (nucleoside RT inhibitors — zidovudine, tenofovir, emtricitabine, lamivudine, abacavir):** require cellular activation → triphosphate form competes with natural nucleotides for HIV RT → chain termination (lacks 3'-OH).\n**NNRTIs (efavirenz, rilpivirine, doravirine):** bind directly to HIV RT at an allosteric site (not the active site) → conformational change → RT inactivated.\n**PIs (ritonavir, darunavir, atazanavir):** inhibit **HIV protease** → prevent cleavage of Gag-Pol polyprotein → immature non-infectious virions.\n**INSTIs (dolutegravir, bictegravir, raltegravir):** inhibit **HIV integrase** → prevent viral DNA from integrating into host genome.\n**Entry inhibitors (enfuvirtide):** block fusion of HIV with CD4 cell.\n**CCR5 antagonists (maraviroc):** block CCR5 co-receptor → prevent R5-tropic HIV entry.",
        use: "All HIV-infected patients regardless of CD4 count — initiate cART as soon as possible.\nPreferred regimen: tenofovir + emtricitabine + dolutegravir (or bictegravir).\n**PrEP:** tenofovir + emtricitabine (Truvada) or tenofovir alafenamide + emtricitabine (Descovy).",
        se: "**Zidovudine (AZT):** anemia, neutropenia, **lactic acidosis** (mitochondrial toxicity), lipodystrophy.\n**Tenofovir (TDF):** nephrotoxicity (Fanconi syndrome — proximal tubular injury), decreased bone density.\n**Abacavir:** **hypersensitivity reaction** (HLA-B*5701 — screen before prescribing; potentially fatal re-challenge).\n**Efavirenz:** CNS effects (vivid dreams, dizziness, depression — 'trip-a-van'; teratogenic — Category D).\n**Ritonavir:** potent **CYP3A4 inhibitor** — used at low doses to 'boost' other PIs (pharmacokinetic boosting).\n**Atazanavir:** indirect hyperbilirubinemia (UGT1A1 inhibition — benign, scleral icterus).",
        ci: "**Abacavir:** HLA-B*5701 positive (potentially fatal hypersensitivity reaction).\n**Efavirenz:** pregnancy (especially first trimester — neural tube defects in primate studies).",
        pk: "**Ritonavir as pharmacokinetic booster:** even at low doses, ritonavir potently inhibits CYP3A4, raising levels of co-administered PIs (darunavir/r, lopinavir/r) → allows lower doses with better efficacy.\n**INSTIs (dolutegravir, bictegravir):** high barrier to resistance, minimal DDIs, preferred anchor drugs.",
        pearl: "**Abacavir hypersensitivity** (HLA-B*5701): screen ALL patients before prescribing — the reaction is potentially fatal, and re-challenge after hypersensitivity is absolutely contraindicated.\n**INSTIs (dolutegravir/bictegravir)** have the highest genetic barrier to resistance of any HIV drug class — now the preferred anchor drugs in most guidelines."
      },
      {
        name: "Influenza & Respiratory Antivirals",
        aka: "Oseltamivir · Zanamivir · Baloxavir · Amantadine · Rimantadine",
        summary: "**Neuraminidase inhibitors** for influenza — most effective when started within 48 hours of symptom onset.",
        moa: "**Oseltamivir/zanamivir:** inhibit **neuraminidase** (essential for release of new viral particles from infected cells) → virions remain clumped on cell surface → cannot spread to new cells.\n**Baloxavir:** inhibits **cap-dependent endonuclease** of influenza polymerase → prevents mRNA synthesis → novel mechanism.\n**Amantadine/rimantadine:** block **M2 ion channel** of influenza A → prevent viral uncoating — now largely obsolete (H3N2 and 2009 H1N1 are universally resistant).",
        use: "**Oseltamivir (Tamiflu):** treatment and prophylaxis of influenza A and B (start within 48 hours for maximum benefit; can still use in severe disease or immunocompromised regardless of timing).\n**Zanamivir:** inhaled oseltamivir alternative (not for patients with respiratory disease).\n**Baloxavir:** single-dose option for uncomplicated influenza.",
        se: "**Oseltamivir:** nausea, vomiting (take with food).\n**Zanamivir:** bronchospasm (avoid in asthma/COPD).\n**Amantadine:** CNS effects (confusion, hallucinations, insomnia — dopaminergic mechanism; also used for Parkinson's and drug-induced EPS).",
        ci: "Zanamivir: reactive airway disease (bronchospasm risk).",
        pk: "**Oseltamivir:** renally eliminated; dose-reduce in renal failure.\n**Zanamivir:** inhaled — minimal systemic absorption.",
        pearl: "**Neuraminidase inhibitors are most effective when started within 48 hours** — but still use in hospitalized or severely ill patients regardless of timing.\n**Amantadine/rimantadine are no longer recommended** for seasonal influenza — widespread resistance among circulating strains (H3N2 and pandemic H1N1 are >99% resistant)."
      },
      {
        name: "Hepatitis Antivirals",
        aka: "Sofosbuvir · Ledipasvir · Daclatasvir · Ribavirin · Entecavir · Tenofovir · Pegylated Interferon",
        summary: "**Direct-acting antivirals (DAAs)** have revolutionized HCV treatment — >95% cure rates; HBV requires long-term suppressive therapy.",
        moa: "**HCV DAAs — Sofosbuvir (NS5B polymerase inhibitor):** nucleotide prodrug → inhibits HCV RNA-dependent RNA polymerase → chain termination.\n**NS5A inhibitors (ledipasvir, daclatasvir):** block NS5A protein → inhibit viral replication and assembly.\n**Ribavirin:** broad-spectrum antiviral — exact mechanism uncertain (guanosine analog → possibly inhibits viral RNA-dependent RNA polymerase and depletes GTP pools).\n**Entecavir/tenofovir:** nucleoside/nucleotide analogs → inhibit HBV reverse transcriptase → suppress HBV replication.",
        use: "**HCV:** sofosbuvir-based combination regimens (e.g., Harvoni: sofosbuvir + ledipasvir) → 8–12 week cure for most HCV genotypes.\n**HBV:** entecavir or tenofovir (long-term suppression — not curative); pegylated interferon-α (finite course, some functional cure).\n**Ribavirin:** adjunct in some HCV regimens; RSV (inhaled ribavirin — controversial); hemorrhagic fevers.",
        se: "**DAAs:** generally excellent tolerability. Sofosbuvir combinations: headache, fatigue, nausea.\n**Ribavirin:** **hemolytic anemia** (dose-limiting), **teratogenic** (absolutely contraindicated in pregnancy and for 6 months after — Category X), rash, cough.\n**Entecavir/tenofovir:** generally well-tolerated; tenofovir — nephrotoxicity, bone density loss.\n**Pegylated interferon:** flu-like syndrome, depression, myelosuppression, autoimmune effects.",
        ci: "**Ribavirin:** pregnancy (absolute — Category X, teratogenic even at low doses; requires 2 forms of contraception during therapy and 6 months after).\nSofosbuvir with amiodarone: severe bradycardia (black box warning).",
        pk: "**DAA regimens:** most are once-daily oral; short durations (8–12 weeks) for HCV.\n**Entecavir/tenofovir for HBV:** indefinite therapy in most cases (stopping can cause HBV flare).",
        pearl: "**HCV is now curable** with DAA regimens (>95% SVR12 = cure) — a paradigm shift from interferon-based therapy.\n**Ribavirin hemolytic anemia** is the major dose-limiting toxicity in ribavirin-containing regimens.\n**Never stop entecavir/tenofovir abruptly in HBV** — rebound hepatitis flare can be severe and fatal, particularly in cirrhotic patients."
      }
    ]
  }
],

// ── GI & HEPATIC ──────────────────────────────────────────────────────────────
gi: [
  {
    group: "GI Drugs",
    drugs: [
      {
        name: "Proton Pump Inhibitors (PPIs)",
        aka: "Omeprazole · Lansoprazole · Pantoprazole · Esomeprazole · Rabeprazole",
        summary: "**Irreversible H+/K+-ATPase inhibitors** — most potent acid suppressants; first-line for GERD, peptic ulcer disease, and H. pylori eradication.",
        moa: "Prodrugs activated in the acidic canaliculi of parietal cells → irreversibly inhibit the **H+/K+-ATPase (proton pump)** → suppress gastric acid secretion by up to 99%.\nRequire activation in acid environment — best taken 30–60 minutes before a meal.",
        use: "GERD, peptic ulcer disease (H. pylori eradication and NSAID-induced), **Zollinger-Ellison syndrome** (high-dose), Barrett's esophagus, stress ulcer prophylaxis, **H. pylori** (component of triple/quadruple therapy).",
        se: "**Acute:** headache, GI upset, hypomagnesemia (with prolonged use).\n**Chronic:** **C. difficile** (reduced acid barrier), community-acquired pneumonia risk, **B12 malabsorption** (requires acid for release from food), **osteoporosis/hip fractures** (impaired Ca2+ absorption), **Clostridium difficile**, hypomagnesemia.\n**Omeprazole/esomeprazole:** inhibit **CYP2C19** → reduce clopidogrel activation (use pantoprazole instead).",
        ci: "Concurrent clopidogrel use → prefer pantoprazole (minimal CYP2C19 inhibition).",
        pk: "Irreversible inhibition — acid suppression persists 24–48 hours after a single dose (new pumps must be synthesized).\nAll are CYP2C19 substrates; omeprazole/esomeprazole are also CYP2C19 inhibitors.",
        pearl: "**Omeprazole inhibits CYP2C19**, reducing clopidogrel activation → use **pantoprazole** when gastroprotection is needed with clopidogrel.\nPPIs are most effective taken **30–60 minutes before breakfast** — the pump must be active (secreting acid) to be irreversibly inhibited."
      },
      {
        name: "H2 Receptor Antagonists",
        aka: "Famotidine · Cimetidine · Ranitidine · Nizatidine",
        summary: "**Competitive H2 receptor antagonists** on parietal cells — less potent than PPIs but useful for mild GERD and nocturnal acid breakthrough.",
        moa: "Competitive antagonism at **H2 receptors** on gastric parietal cells → reduced cAMP → decreased H+/K+-ATPase activity → less acid secretion.\nReversible — tolerance develops with continuous use.",
        use: "Mild-to-moderate GERD, peptic ulcer disease (adjunct), nocturnal acid breakthrough (add-on to PPI), stress ulcer prophylaxis.",
        se: "Generally well-tolerated.\n**Cimetidine:** potent **CYP450 inhibitor** (raises warfarin, phenytoin, theophylline, lidocaine levels), **anti-androgenic** (gynecomastia, impotence — blocks androgen receptors), CNS effects (confusion in elderly).",
        ci: "Cimetidine with narrow therapeutic index drugs (warfarin, phenytoin, theophylline).",
        pk: "Renally excreted; reduce dose in renal failure.\n**Cimetidine:** most DDIs of all H2 blockers (avoid this agent in most patients).",
        pearl: "**Cimetidine is the most 'dirty' H2 blocker** — inhibits CYP450, blocks androgen receptors, causes CNS toxicity in elderly.\n**Famotidine is the preferred H2 blocker** — minimal DDIs, no anti-androgenic effects, renally dosed."
      },
      {
        name: "H. pylori Eradication",
        aka: "Triple Therapy · Quadruple Therapy · Bismuth · Clarithromycin · Amoxicillin · Metronidazole",
        summary: "**Combination antibiotic regimens** for eradicating H. pylori — the cause of most peptic ulcers and a risk factor for gastric cancer.",
        moa: "**H. pylori** is a gram-negative spiral bacterium that colonizes the gastric antrum, secreting urease (raises local pH), causing chronic gastritis, peptic ulcers, and increasing gastric adenocarcinoma and MALT lymphoma risk.\nAntibiotics target the bacterial cell wall (amoxicillin), protein synthesis (clarithromycin), or DNA (metronidazole); PPI suppresses acid to improve antibiotic efficacy; bismuth disrupts the cell membrane.",
        use: "All confirmed H. pylori infections.\n**Standard triple therapy:** PPI + clarithromycin + amoxicillin × 14 days.\n**Bismuth quadruple therapy (BQT):** PPI + bismuth + metronidazole + tetracycline × 10–14 days (first-line in high-clarithromycin-resistance areas, or if prior macrolide exposure).",
        se: "GI upset (metallic taste from metronidazole, diarrhea), **C. difficile risk**, antibiotic-associated side effects.",
        ci: "Penicillin allergy → replace amoxicillin with metronidazole in triple therapy.",
        pk: "Success depends on antibiotic resistance patterns — clarithromycin resistance is rising. Confirm eradication with urea breath test or stool antigen ≥4 weeks after therapy.",
        pearl: "**Confirm H. pylori eradication** with urea breath test or stool antigen test ≥4 weeks after completing therapy (not with serology — antibodies remain positive after successful treatment).\n**Bismuth** has direct bactericidal properties and is included in quadruple therapy for its synergistic effect and ability to treat resistant strains."
      },
      {
        name: "Antiemetics",
        aka: "Ondansetron · Metoclopramide · Prochlorperazine · Promethazine · Dronabinol · Aprepitant · Scopolamine",
        summary: "Diverse antiemetic classes targeting different receptor pathways — 5-HT3 antagonists are first-line for chemotherapy-induced nausea.",
        moa: "**Ondansetron (5-HT3 antagonist):** blocks serotonin receptors in the GI tract and chemoreceptor trigger zone (CTZ) → most effective for chemotherapy and postoperative nausea.\n**Metoclopramide (D2 antagonist + 5-HT4 agonist):** blocks CTZ + prokinetic (increases LES tone, accelerates gastric emptying).\n**Prochlorperazine/promethazine:** phenothiazine D2/H1 antagonists — effective for motion sickness and pregnancy nausea.\n**Aprepitant:** **NK1 receptor antagonist** (blocks substance P) — added for high-emetogenic chemotherapy.\n**Dronabinol:** synthetic THC — CB1 agonist → reduces emesis (chemotherapy-induced).",
        use: "**Ondansetron:** chemotherapy-induced nausea/vomiting (CINV), postoperative nausea, hyperemesis gravidarum.\n**Metoclopramide:** gastroparesis, GERD adjunct, CINV.\n**Aprepitant:** cisplatin and high-emetogenic regimens (with ondansetron + dexamethasone).\n**Scopolamine:** motion sickness (transdermal patch).",
        se: "**Ondansetron:** **QTc prolongation** (especially IV), headache, constipation.\n**Metoclopramide:** EPS (D2 blockade — akathisia, acute dystonia), **tardive dyskinesia** with prolonged use, hyperprolactinemia.\n**Promethazine:** excessive sedation, tissue necrosis if IV infiltration (black box — prefer IM).\n**Aprepitant:** moderate CYP3A4 inhibitor.",
        ci: "**Metoclopramide:** bowel obstruction, Parkinson's disease (worsens dopamine deficiency — all dopamine antagonists).\n**Promethazine IV** in children <2 years (respiratory depression — black box warning).",
        pk: "Ondansetron has hepatic CYP metabolism — dose-reduce in severe hepatic failure.\n**Aprepitant:** induces CYP3A4 and CYP2C9 after 3 days — can reduce OCP and dexamethasone levels.",
        pearl: "**Metoclopramide tardive dyskinesia** risk increases with duration of use — FDA black box warning for use >12 weeks.\n**Dexamethasone potentiates antiemetics** — the triple combination of aprepitant + ondansetron + dexamethasone is standard for highly emetogenic chemotherapy (e.g., cisplatin)."
      },
      {
        name: "Laxatives & Antidiarrheals",
        aka: "Polyethylene Glycol · Lactulose · Bisacodyl · Senna · Docusate · Loperamide · Diphenoxylate · Bismuth",
        summary: "Bowel regulators — laxatives for constipation and hepatic encephalopathy; antidiarrheals for secretory and motility-related diarrhea.",
        moa: "**PEG (polyethylene glycol):** osmotic — retains water in the colon (non-absorbable polymer).\n**Lactulose:** osmotic + acidifies colon → traps NH4+ → reduces ammonia absorption (hepatic encephalopathy).\n**Bisacodyl/senna:** stimulant laxatives — directly stimulate enteric neurons and colon smooth muscle.\n**Docusate:** surfactant — softens stool by allowing water and fat penetration.\n**Loperamide:** peripheral μ-opioid receptor agonist → decreases intestinal motility and secretion; does NOT cross BBB (no CNS effects at therapeutic doses).\n**Bismuth subsalicylate:** antibacterial + antisecretory; anti-H. pylori.",
        use: "**PEG/lactulose:** chronic constipation; **lactulose** also for hepatic encephalopathy and portal systemic encephalopathy.\n**Bisacodyl/senna:** acute constipation, bowel prep.\n**Loperamide:** non-infectious acute diarrhea, traveler's diarrhea (not for febrile/bloody diarrhea — may worsen invasive infection).\n**Bismuth:** traveler's diarrhea prophylaxis and treatment.",
        se: "**Loperamide:** can be abused at high doses (cardiac toxicity — QTc prolongation and arrhythmias at supratherapeutic doses).\n**Stimulant laxatives:** electrolyte disturbances, melanosis coli (harmless brown pigmentation of colon mucosa with long-term use).\n**Lactulose:** bloating, flatulence.",
        ci: "**Loperamide:** bloody diarrhea, febrile diarrhea, suspected invasive infection (C. difficile, Shigella, E. coli O157:H7) — may prolong disease and worsen outcomes.\n**Lactulose:** galactosemia.",
        pk: "Loperamide undergoes first-pass metabolism — minimal systemic absorption at therapeutic doses (P-gp substrate keeps it in the GI tract).",
        pearl: "**Lactulose acidifies the colon**, converting NH3 (absorbable) to NH4+ (non-absorbable charged ion) — this is why it reduces blood ammonia in hepatic encephalopathy.\n**Loperamide should NOT be given for infectious diarrhea** — stopping motility traps the pathogen and worsens systemic illness (especially HUS risk in STEC O157:H7)."
      },
      {
        name: "IBD Agents",
        aka: "Mesalamine · Sulfasalazine · Prednisone · Azathioprine · 6-Mercaptopurine · Methotrexate · Infliximab · Adalimumab · Vedolizumab · Ustekinumab",
        summary: "**Stepwise therapy for inflammatory bowel disease** — aminosalicylates for UC maintenance, immunomodulators for steroid-sparing, biologics for moderate-to-severe disease.",
        moa: "**Mesalamine (5-ASA):** topical anti-inflammatory acting on colonic mucosa; exact mechanism unclear (reduces prostaglandins and cytokines).\n**Sulfasalazine:** prodrug cleaved by colonic bacteria to **5-ASA + sulfapyridine** (the sulfapyridine causes most systemic side effects).\n**Azathioprine/6-MP:** antimetabolites → inhibit purine synthesis → reduce lymphocyte proliferation.\n**Infliximab/adalimumab:** anti-**TNF-α** monoclonal antibodies → reduce intestinal inflammation.\n**Vedolizumab:** anti-**α4β7 integrin** — blocks gut-specific lymphocyte trafficking (gut-selective immunosuppression).",
        use: "**Mesalamine:** UC (induction and maintenance — first-line for mild-moderate UC; topical suppositories for proctitis).\n**Sulfasalazine:** UC and Crohn's arthropathy.\n**Azathioprine/6-MP:** maintenance after steroid induction; steroid-sparing.\n**Anti-TNF (infliximab/adalimumab):** moderate-to-severe Crohn's and UC; fistulizing Crohn's (infliximab).\n**Vedolizumab:** moderate-to-severe UC and Crohn's — gut-selective (preferred when systemic immunosuppression is undesirable).",
        se: "**Mesalamine:** generally well-tolerated; rare interstitial nephritis.\n**Sulfasalazine:** reversible **oligospermia**, folate deficiency (inhibits folate absorption), hemolytic anemia (G6PD), sulfa allergy.\n**Azathioprine/6-MP:** myelosuppression, hepatotoxicity; **TPMT enzyme** genotype determines metabolism — low TPMT activity → drug accumulates → severe myelosuppression.\n**Anti-TNF:** risk of **reactivation of latent TB** (screen with TST or IGRA before starting), opportunistic infections, demyelinating disease, worsening HF.",
        ci: "Anti-TNF: active infections, latent TB not yet treated, moderate-to-severe HF, prior demyelinating disease.",
        pk: "**TPMT genotyping/activity** should be checked before starting azathioprine/6-MP — low activity requires dose reduction to prevent life-threatening myelosuppression.\n**Allopurinol + azathioprine/6-MP** is a dangerous combination (allopurinol inhibits XO, the enzyme that metabolizes 6-MP).",
        pearl: "**Screen for latent TB before starting anti-TNF therapy** — TNF blockade reactivates dormant Mycobacterium tuberculosis; this is mandatory before initiation.\n**TPMT genotyping/activity** before azathioprine prevents potentially fatal myelosuppression from drug accumulation in poor metabolizers."
      },
      {
        name: "Liver & Biliary Agents",
        aka: "Ursodeoxycholic Acid · N-Acetylcysteine · Lactulose · Rifaximin · Cholestyramine · Naltrexone",
        summary: "Agents targeting specific hepatic conditions — biliary disease (UDCA), acetaminophen toxicity (NAC), and hepatic encephalopathy (lactulose/rifaximin).",
        moa: "**Ursodeoxycholic acid (UDCA):** replaces hydrophobic bile acids (that damage biliary epithelium) with the hydrophilic, less-toxic UDCA → reduces cholestasis and biliary injury.\n**N-Acetylcysteine (NAC):** cysteine donor → replenishes **hepatic glutathione** → detoxifies NAPQI (acetaminophen toxic metabolite); also reduces inflammation in non-acetaminophen acute liver failure.\n**Rifaximin:** minimally absorbed antibiotic → reduces ammonia-producing gut bacteria → decreases portal ammonia → reduces hepatic encephalopathy episodes.\n**Cholestyramine:** bile acid sequestrant → reduces itching from bile acid deposition in cholestasis.",
        use: "**UDCA:** primary biliary cholangitis (PBC — first-line; slows disease progression), primary sclerosing cholangitis (PSC — less clear benefit), dissolution of cholesterol gallstones.\n**NAC:** **acetaminophen overdose** (most effective within 8 hours; give even if >24 hours in severe cases), non-acetaminophen acute liver failure.\n**Rifaximin:** secondary prophylaxis of hepatic encephalopathy (added to lactulose).\n**Cholestyramine:** cholestatic pruritus, C. diff toxin binding, hypercholesterolemia.",
        se: "**UDCA:** GI upset (generally well-tolerated), diarrhea at high doses.\n**NAC:** nausea/vomiting (oral), anaphylactoid reaction (IV — manage by slowing infusion).\n**Rifaximin:** generally well-tolerated; rarely C. diff.",
        ci: "**Cholestyramine:** biliary obstruction (cannot excrete bound bile acids), concurrent medications within 4–6 hours (binds virtually everything).",
        pk: "NAC oral vs. IV regimens both effective — IV preferred for severe toxicity or if patient cannot take oral.",
        pearl: "**NAC is most effective within 8 hours of acetaminophen ingestion** (before NAPQI causes irreversible hepatocyte damage), but should still be administered even at later timepoints if AST is rising.\n**The Rumack-Matthew nomogram** uses serum acetaminophen level at a specific time after ingestion to determine if NAC is needed."
      }
    ]
  }
],

// ── ENDOCRINOLOGY ─────────────────────────────────────────────────────────────
endo: [
  {
    group: "Diabetes",
    drugs: [
      {
        name: "Insulin",
        aka: "Regular · NPH · Glargine · Detemir · Degludec · Lispro · Aspart · Glulisine",
        summary: "**The most effective glucose-lowering agent** — multiple formulations matched to pharmacokinetic needs from rapid mealtime to basal coverage.",
        moa: "Binds **insulin receptor** (receptor tyrosine kinase) → autophosphorylation → activation of PI3K/Akt and MAPK pathways → GLUT4 translocation to cell surface → glucose uptake in muscle and fat; inhibits hepatic gluconeogenesis and glycogenolysis; promotes anabolism.",
        use: "**Type 1 diabetes** (required for survival), **Type 2 diabetes** (when oral agents insufficient), **DKA** (IV regular insulin), **hyperkalemia** (drives K+ into cells — with dextrose to prevent hypoglycemia), **gestational diabetes**.",
        se: "**Hypoglycemia** (most common and dangerous), weight gain, lipohypertrophy at injection sites, hypokalemia (K+ shifts intracellularly).",
        ci: "Hypoglycemia (relative — adjust dose).",
        pk: "**Rapid-acting (lispro, aspart, glulisine):** onset 15 min, peak 1–2 hr, duration 3–5 hr — give with meals.\n**Short-acting (regular):** onset 30 min, peak 2–4 hr, duration 5–8 hr — give 30 min before meals; used IV for DKA.\n**Intermediate (NPH):** onset 2–4 hr, peak 4–12 hr, duration 12–18 hr.\n**Long-acting (glargine, detemir, degludec):** no pronounced peak — basal coverage.",
        pearl: "**Glargine cannot be mixed with other insulins** (pH 4 formulation precipitates in neutral pH).\n**DKA treatment:** IV regular insulin infusion PLUS potassium replacement (insulin drives K+ into cells — hypokalemia can be fatal; do NOT start insulin if K+ <3.5 mEq/L)."
      },
      {
        name: "Metformin",
        aka: "Metformin · Glucophage",
        summary: "**First-line oral agent for T2DM** — activates AMPK to reduce hepatic glucose output; weight-neutral or causes slight weight loss.",
        moa: "Inhibits **mitochondrial complex I** (electron transport chain) → decreases ATP/AMP ratio → activates **AMPK** → reduces hepatic gluconeogenesis and glycogenolysis (primary effect) + increases peripheral insulin sensitivity.\nDoes NOT stimulate insulin secretion → **does NOT cause hypoglycemia as monotherapy.**",
        use: "**First-line for T2DM** (ADA/EASD guidelines), pre-diabetes prevention, PCOS (off-label — reduces insulin resistance, induces ovulation).",
        se: "**GI upset** (nausea, diarrhea, abdominal pain — mitigated by taking with food or extended-release formulation).\n**Lactic acidosis** (rare but potentially fatal — occurs with predisposing factors: renal failure, hepatic failure, excessive alcohol, iodinated contrast).\n**B12 deficiency** (reduces ileal absorption — monitor B12 annually).",
        ci: "**eGFR <30** (lactic acidosis risk from drug accumulation; hold if eGFR <45 for contrast procedures).\nAcute illness with hemodynamic instability, hepatic failure, heavy alcohol use.",
        pk: "Renally eliminated unchanged. eGFR monitoring required. Hold before IV contrast and restart 48 hours after if renal function stable.",
        pearl: "**Metformin does NOT cause hypoglycemia** as monotherapy — it does not stimulate insulin secretion.\n**Lactic acidosis risk** is highest when metformin accumulates (renal failure) — the kidney normally clears the drug rapidly; accumulation shifts metabolism toward anaerobic lactate production."
      },
      {
        name: "Sulfonylureas & Meglitinides",
        aka: "Glipizide · Glyburide · Glimepiride · Repaglinide · Nateglinide",
        summary: "**Insulin secretagogues** that close K-ATP channels in beta cells — effective but cause hypoglycemia and weight gain.",
        moa: "Bind and close **ATP-sensitive K+ channels (K-ATP)** on pancreatic beta cells → membrane depolarization → Ca2+ influx → insulin granule exocytosis.\nEffect is **glucose-independent** — insulin is released even when blood glucose is low → hypoglycemia risk.\n**Meglitinides** (repaglinide, nateglinide): same mechanism but shorter duration — used just before meals.",
        use: "**Sulfonylureas:** T2DM (second-line after metformin failure; very inexpensive).\n**Meglitinides:** postprandial hyperglycemia, patients who cannot eat on schedule (shorter action allows flexible dosing).",
        se: "**Hypoglycemia** (most important — prolonged with glyburide, especially in elderly and renal failure).\n**Weight gain** (insulin effect). **Disulfiram-like reaction** (chlorpropamide — first-gen, now obsolete).",
        ci: "**Glyburide in renal failure** (active metabolites accumulate → prolonged severe hypoglycemia — use glipizide instead, which has inactive metabolites).",
        pk: "**Glyburide:** active metabolites, renally excreted — AVOID in CKD/elderly.\n**Glipizide:** inactive metabolites — preferred in renal failure.\nAll hepatically metabolized by CYP2C9 (fluconazole raises levels → hypoglycemia).",
        pearl: "**Glyburide is the most dangerous sulfonylurea in elderly patients and renal failure** — its active metabolites accumulate, causing prolonged and refractory hypoglycemia.\n**Glipizide** is preferred in this population because it produces inactive metabolites."
      },
      {
        name: "SGLT2 Inhibitors",
        aka: "Empagliflozin · Dapagliflozin · Canagliflozin · Ertugliflozin",
        summary: "**Glucose-lowering AND cardio/nephroprotective agents** — inhibit renal glucose reabsorption; reduce CV mortality in T2DM with established ASCVD.",
        moa: "Inhibit **SGLT2 (sodium-glucose cotransporter 2)** in the proximal convoluted tubule → block ~90% of filtered glucose reabsorption → glucosuria → lowers blood glucose AND calories.\nAlso promote natriuresis (osmotic diuresis) → reduces preload and afterload → cardiac benefit.",
        use: "**T2DM** (second-line after metformin; preferred in patients with HFrEF or CKD for cardioprotection).\n**HFrEF with reduced ejection fraction** (empagliflozin/dapagliflozin reduce CV death and HF hospitalization — regardless of diabetes status).\n**CKD with proteinuria** (reduce progression to ESRD).",
        se: "**Genital mycotic infections** (glucosuria creates warm, glucose-rich environment for Candida — most common SE).\n**UTIs** (increased bacterial colonization of urinary tract).\n**Euglycemic DKA** (rare but dangerous — glucose may be normal or near-normal; insulin deficiency + stress → ketogenesis; hold before surgery).\n**Fournier's gangrene** (rare necrotizing perineal infection — FDA black box).\n**Canagliflozin:** lower limb amputations (avoid in peripheral vascular disease).",
        ci: "Type 1 DM (euglycemic DKA risk), eGFR <20–30 (depending on agent — reduced glucose-lowering efficacy), recurrent genital infections.",
        pk: "Once-daily oral dosing. Glucosuria is proportional to filtered glucose load — less effective as eGFR falls, but cardioprotection persists even in moderate CKD.",
        pearl: "**SGLT2 inhibitors reduce all-cause mortality and HF hospitalization** — a benefit independent of glucose lowering (possibly via preload/afterload reduction and ketone body utilization as alternate cardiac fuel).\n**Euglycemic DKA** is the most dangerous SE — glucose may be normal; always check ketones if a patient on SGLT2i presents with acidosis symptoms."
      },
      {
        name: "GLP-1 Receptor Agonists",
        aka: "Semaglutide · Liraglutide · Dulaglutide · Exenatide · Tirzepatide",
        summary: "**Incretin mimetics** with glucose-lowering, weight loss, and cardiovascular benefits — among the most impactful diabetes/obesity drugs in decades.",
        moa: "Bind and activate **GLP-1 receptors** → glucose-dependent insulin secretion (only when glucose is elevated — minimal hypoglycemia risk) + suppressed glucagon + delayed gastric emptying + increased satiety (acts on hypothalamic centers).\n**Tirzepatide:** dual GLP-1/GIP receptor agonist — even greater weight loss.",
        use: "**T2DM** (significant HbA1c reduction + weight loss + CV benefit in high-risk patients).\n**Obesity/overweight** (semaglutide 2.4 mg SC weekly — Wegovy; liraglutide — Saxenda).\n**Cardiovascular risk reduction** in T2DM with ASCVD (liraglutide — LEADER trial; semaglutide — SUSTAIN-6).",
        se: "**Nausea, vomiting, diarrhea** (most common — GI motility effects; decreases with dose titration).\n**Pancreatitis** (rare — stop if suspected; avoid in history of pancreatitis).\n**Possible increased risk of medullary thyroid cancer** (black box — C-cell hyperplasia in rodents; contraindicated in MEN2/familial medullary thyroid cancer).\n**Injection site reactions.**",
        ci: "**Personal or family history of medullary thyroid carcinoma or MEN type 2** (black box).\nHistory of pancreatitis (relative).",
        pk: "Once-weekly SC injection (semaglutide, dulaglutide). Semaglutide also available orally (Rybelsus — must be taken on empty stomach with water only).",
        pearl: "**GLP-1 agonists cause glucose-dependent insulin secretion** — they do NOT cause hypoglycemia as monotherapy because secretion shuts off when glucose normalizes.\n**Tirzepatide (GLP-1/GIP dual agonist)** produces greater weight loss than any prior obesity pharmacotherapy — up to ~20% of body weight in clinical trials."
      },
      {
        name: "DPP-4 Inhibitors & Other Antidiabetics",
        aka: "Sitagliptin · Saxagliptin · Alogliptin · Linagliptin · Pioglitazone · Acarbose · Miglitol",
        summary: "Second-line diabetes agents — DPP-4 inhibitors are weight-neutral with low hypoglycemia risk; thiazolidinediones reduce insulin resistance.",
        moa: "**DPP-4 inhibitors ('gliptins'):** inhibit **dipeptidyl peptidase-4** → prevents degradation of endogenous GLP-1 and GIP → modest increase in active incretin levels → glucose-dependent insulin secretion + reduced glucagon.\n**Thiazolidinediones (pioglitazone):** activate **PPAR-γ** in adipose tissue → increase insulin sensitivity + adiponectin → glucose uptake in fat and muscle.\n**Alpha-glucosidase inhibitors (acarbose):** inhibit intestinal brush border alpha-glucosidases → delay starch/disaccharide digestion → blunts postprandial glucose spike.",
        use: "**DPP-4 inhibitors:** T2DM add-on (weight-neutral, safe in renal disease — linagliptin is hepatically eliminated).\n**Pioglitazone:** T2DM with insulin resistance.\n**Acarbose:** postprandial hyperglycemia, dumping syndrome.",
        se: "**DPP-4 inhibitors:** generally well-tolerated; **nasopharyngitis**, rare pancreatitis, joint pain.\n**Saxagliptin:** increased HF hospitalizations (SAVOR-TIMI trial — avoid in HF).\n**Pioglitazone:** **weight gain** (fluid retention), **HF exacerbation** (fluid retention — contraindicated in HF), **bladder cancer** risk (prolonged use), **osteoporosis/fractures** (women).\n**Acarbose:** flatulence, bloating, diarrhea (carbohydrate fermentation in the colon); GI-limiting.",
        ci: "**Pioglitazone:** heart failure (any degree), active bladder cancer, hepatic disease.\n**Saxagliptin:** heart failure.",
        pk: "**Linagliptin:** unique among gliptins — eliminated hepatically/fecally, **no dose reduction needed in renal or hepatic failure**.\n**Acarbose:** minimally absorbed; acts locally in the GI tract.",
        pearl: "**Pioglitazone is contraindicated in heart failure** — fluid retention from PPAR-γ activation can precipitate acute decompensation.\n**Linagliptin is the only DPP-4 inhibitor that requires no renal dose adjustment** — useful in advanced CKD."
      }
    ]
  },
  {
    group: "Thyroid",
    drugs: [
      {
        name: "Thyroid Hormones & Antithyroid Agents",
        aka: "Levothyroxine · Liothyronine · Methimazole · Propylthiouracil (PTU) · Radioactive Iodine · Potassium Iodide · Lugol's Solution",
        summary: "Replacement (levothyroxine) and reduction (methimazole/PTU) of thyroid hormone — each agent has a distinct mechanism and preferred clinical context.",
        moa: "**Levothyroxine (T4):** exogenous T4 → converted peripherally to active T3 by deiodinases.\n**Methimazole/PTU:** inhibit **thyroid peroxidase (TPO)** → block organification of iodide and coupling of iodotyrosines → reduce thyroid hormone synthesis.\n**PTU additionally** inhibits peripheral **5'-deiodinase** → blocks T4 → T3 conversion (extra benefit in thyroid storm).\n**Radioactive iodine (RAI, I-131):** concentrated in thyroid → emits β-radiation → thyroid cell destruction → permanent hypothyroidism.\n**Potassium iodide/Lugol's:** high iodide concentrations transiently suppress thyroid hormone synthesis and release (**Wolff-Chaikoff effect**) — used to reduce vascularity before surgery and after nuclear exposure.",
        use: "**Levothyroxine:** hypothyroidism (T4 replacement — first-line), thyroid cancer suppression (high-dose to suppress TSH).\n**Methimazole:** hyperthyroidism (Graves' disease — first-line except in first trimester of pregnancy).\n**PTU:** hyperthyroidism in **first trimester of pregnancy**, **thyroid storm** (blocks T4→T3 conversion).\n**RAI:** Graves' disease (first-line in U.S. for non-pregnant adults), toxic nodular goiter.\n**Potassium iodide:** pre-thyroidectomy vascularity reduction, Lugol's solution after nuclear radiation exposure (blocks thyroid uptake of radioactive iodine).",
        se: "**Levothyroxine overdose:** tachycardia, arrhythmias, osteoporosis, anxiety.\n**Methimazole:** agranulocytosis (0.5% — present as sore throat/fever; check CBC immediately), teratogenic (**aplasia cutis** — skin defect in fetus; avoid in first trimester).\n**PTU:** agranulocytosis (more common than methimazole), **fulminant hepatic necrosis** (rare but fatal — black box warning).\n**RAI:** transient thyroiditis, permanent hypothyroidism (expected outcome), contraindicated in pregnancy.",
        ci: "**Methimazole:** first trimester of pregnancy (aplasia cutis) → use PTU.\n**PTU:** second and third trimester (hepatotoxicity risk) → switch back to methimazole.\n**RAI:** pregnancy, breastfeeding.",
        pk: "**Levothyroxine:** long t1/2 (~7 days) — once daily dosing; absorption decreased by antacids, iron, calcium, PPI → take on empty stomach, separate other medications by 4 hours.\n**Methimazole:** preferred over PTU except in first trimester (less hepatotoxicity, longer t1/2, once daily).",
        pearl: "**PTU is preferred in the first trimester** (methimazole causes aplasia cutis); **methimazole is preferred otherwise** (PTU carries greater hepatotoxicity risk with prolonged use).\n**Agranulocytosis** from either antithyroid drug presents as sore throat and fever — ALWAYS check CBC and stop the drug immediately; do not rechallenge with the same drug."
      }
    ]
  },
  {
    group: "Bone & Mineral",
    drugs: [
      {
        name: "Bisphosphonates & Bone Agents",
        aka: "Alendronate · Risedronate · Zoledronic Acid · Ibandronate · Denosumab · Teriparatide · Abaloparatide · Romosozumab",
        summary: "**Antiresorptive and anabolic agents** for osteoporosis — bisphosphonates inhibit osteoclasts; teriparatide stimulates new bone formation.",
        moa: "**Bisphosphonates:** incorporate into bone matrix → ingested by osteoclasts → inhibit **farnesyl pyrophosphate synthase** (enzyme in the mevalonate pathway) → impairs osteoclast function and survival → reduced bone resorption.\n**Denosumab:** monoclonal antibody against **RANKL** → prevents RANKL-RANK interaction → inhibits osteoclast formation and activation.\n**Teriparatide/abaloparatide:** recombinant **PTH analogs** → intermittent dosing activates osteoblasts → **anabolic effect** (builds new bone — unique among osteoporosis drugs).\n**Romosozumab:** anti-**sclerostin** antibody → disinhibits Wnt signaling → increases bone formation AND reduces resorption (dual mechanism).",
        use: "**Bisphosphonates:** osteoporosis (first-line for most patients), Paget's disease, hypercalcemia of malignancy, bone metastases prevention.\n**Denosumab:** osteoporosis (especially poor GI tolerance or renal failure — no dose adjustment needed), bone metastases.\n**Teriparatide:** severe osteoporosis with high fracture risk, steroid-induced osteoporosis, prior fracture on antiresorptive therapy.\n**Romosozumab:** severe osteoporosis with very high fracture risk (12-month course, then switch to antiresorptive).",
        se: "**Bisphosphonates:** **esophageal ulceration** (oral — must take upright with full glass of water, remain upright 30–60 min), **osteonecrosis of the jaw (ONJ)** (more common with IV, cancer doses, dental procedures — minimize dental work before starting), **atypical femur fractures** (subtrochanteric, long-term use — thigh/groin pain warning sign).\n**Denosumab:** hypocalcemia (especially if vitamin D deficient), ONJ, **rebound bone loss if abruptly discontinued** → transition to bisphosphonate before stopping.\n**Teriparatide:** **black box — osteosarcoma** (in rats — contraindicated in prior bone radiation; limit to 2 years lifetime).\n**Romosozumab:** increased CV risk (FDA black box — avoid in prior MI or stroke within 1 year).",
        ci: "Oral bisphosphonates: esophageal disease, inability to remain upright, hypocalcemia, eGFR <30–35.\nTeriparatide: hypercalcemia, prior radiation to bone, Paget's disease, prior osteosarcoma, eGFR <35.\nRomosozumab: MI or stroke within past year.",
        pk: "**Oral bisphosphonates:** extremely poor bioavailability (~1%) — take on empty stomach with 8 oz water only.\n**Zoledronic acid:** annual IV infusion — improves adherence dramatically.\n**Denosumab:** SC injection every 6 months; no renal dose adjustment.",
        pearl: "**Teriparatide is the only anabolic osteoporosis drug** — it builds new bone rather than simply preventing resorption; duration is limited to 2 years due to osteosarcoma concern from rat studies.\n**Denosumab rebound:** if stopped without bridging to a bisphosphonate, rapid and severe bone loss with vertebral fractures occurs within months — always plan a transition."
      },
      {
        name: "Calcium, Vitamin D & PTH Agents",
        aka: "Calcium Carbonate · Calcium Citrate · Calcitriol · Cholecalciferol · Cinacalcet · Sevelamer",
        summary: "Agents for calcium-phosphate homeostasis — critical in osteoporosis prevention, CKD-MBD, and hyperparathyroidism.",
        moa: "**Calcium carbonate/citrate:** supplement dietary calcium; calcium carbonate requires acid for dissolution.\n**Cholecalciferol (D3)/Ergocalciferol (D2):** substrate for 25-hydroxylation (liver) then 1α-hydroxylation (kidney) → active **calcitriol (1,25-(OH)2D)**.\n**Calcitriol:** binds nuclear **VDR** → increases intestinal Ca2+/phosphate absorption + promotes renal Ca2+ reabsorption.\n**Cinacalcet:** **calcimimetic** → activates calcium-sensing receptor (CaSR) on parathyroid gland → suppresses PTH secretion.\n**Sevelamer:** non-absorbable polymer → binds dietary phosphate in GI tract → reduces phosphate absorption.",
        use: "**Calcium supplements:** osteoporosis prevention (with vitamin D), hypocalcemia, CKD-MBD.\n**Vitamin D:** vitamin D deficiency, osteoporosis, rickets, osteomalacia.\n**Calcitriol:** CKD (kidney cannot 1α-hydroxylate → calcitriol bypasses this step), hypoparathyroidism.\n**Cinacalcet:** secondary hyperparathyroidism in dialysis patients, parathyroid carcinoma.\n**Sevelamer:** hyperphosphatemia in dialysis patients (phosphate binder).",
        se: "**Calcium supplements:** hypercalcemia, **nephrolithiasis** (calcium oxalate/phosphate stones), constipation.\n**Calcium carbonate** requires gastric acid — poorly absorbed in achlorhydria (PPIs) or on empty stomach.\n**Cinacalcet:** hypocalcemia (suppresses PTH → less calcium mobilization).\n**Sevelamer:** GI upset, blocks absorption of co-administered drugs.",
        ci: "**Calcium carbonate:** achlorhydria, PPIs → use calcium citrate instead (does not require acid).",
        pk: "**Calcium citrate** is preferred in patients on PPIs or achlorhydric patients (does not require acidic environment for dissolution).\nSevelamer must be taken with meals to bind dietary phosphate.",
        pearl: "**Calcium carbonate requires acid for absorption** — use calcium citrate in patients on PPIs or those with achlorhydria (atrophic gastritis).\n**Cinacalcet** is called a calcimimetic because it acts as if calcium is present, activating the CaSR and suppressing PTH — the 'calcium-sensing receptor tells the parathyroid to quiet down.'"
      }
    ]
  },
  {
    group: "Hormones & Steroids",
    drugs: [
      {
        name: "Glucocorticoids",
        aka: "Prednisone · Methylprednisolone · Dexamethasone · Hydrocortisone · Budesonide · Fludrocortisone · Betamethasone",
        summary: "**Most potent anti-inflammatory and immunosuppressive agents** — wide therapeutic use across virtually every specialty, but with extensive toxicity with prolonged use.",
        moa: "Bind cytoplasmic **glucocorticoid receptor (GR)** → GR-ligand complex translocates to nucleus → binds GREs → **increases anti-inflammatory gene transcription** (IL-10, lipocortin/annexin A1) and **represses pro-inflammatory transcription** (NF-κB, AP-1) → reduces cytokines (IL-1, IL-6, TNF), decreases COX-2 expression, reduces capillary permeability.",
        use: "Broad: asthma/COPD exacerbations, allergic reactions, autoimmune diseases, IBD, RA/SLE, organ transplant rejection prevention, spinal cord compression, cerebral edema.\n**Dexamethasone:** cerebral edema (vasogenic), airway edema (croup), **bacterial meningitis** (reduces neurological sequelae), **fetal lung maturity** (given to mother at 24–34 weeks if preterm delivery expected — induces surfactant).\n**Fludrocortisone:** mineralocorticoid replacement in primary adrenal insufficiency.\n**Betamethasone IM:** fetal lung maturation (preferred over dexamethasone for this indication).",
        se: "**Short-term:** hyperglycemia, HTN, mood/sleep disturbances, GI ulcers (with NSAIDs).\n**Chronic use (mnemonic CUSHINGOID):** Cataracts (posterior subcapsular), Ulcers (PUD), Skin thinning/striae, Hypertension, Infections (↑susceptibility, reactivation TB), Neuropsychiatric effects, Glucose ↑, Osteoporosis, Immunosuppression, Delayed wound healing.\nAlso: **adrenal suppression** (HPA axis suppression with chronic use — taper slowly), **avascular necrosis of femoral head**, cushingoid features.",
        ci: "Systemic fungal infections (without antifungal cover), live vaccines during immunosuppressive doses.",
        pk: "**Taper required** after prolonged use (>2–3 weeks) to allow HPA axis recovery — abrupt discontinuation causes adrenal crisis.\n**Dexamethasone** does NOT cross-react with cortisol assay → preferred for dexamethasone suppression test.",
        pearl: "**HPA axis suppression** from exogenous glucocorticoids can cause life-threatening adrenal crisis if the drug is stopped abruptly — the hypothalamus and pituitary atrophy from suppression and cannot produce ACTH on demand.\n**Stress dosing** of corticosteroids is required for surgery in patients on chronic glucocorticoids."
      },
      {
        name: "Oral Contraceptives & HRT",
        aka: "Combined Oral Contraceptives · Progestin-Only Pills · Levonorgestrel · Medroxyprogesterone · Conjugated Estrogens · Desogestrel",
        summary: "**Estrogen-progestin or progestin-only contraceptives** — mechanisms extend beyond ovulation suppression; VTE risk is the critical adverse effect.",
        moa: "**Combined OCPs (estrogen + progestin):** suppress **LH surge** (prevents ovulation) + thicken cervical mucus + alter endometrial receptivity — triple mechanism.\n**Progestin-only ('mini-pill'):** primarily thicken cervical mucus + alter endometrial receptivity; less reliable ovulation suppression → more dependent on timing.\n**Medroxyprogesterone (Depo-Provera):** high-dose progestin → complete ovulation suppression.",
        use: "**OCPs:** contraception, **dysmenorrhea**, endometriosis, PCOS (reduces androgenic effects), polycystic ovary syndrome, acne, menorrhagia.\n**Emergency contraception:** levonorgestrel (Plan B) within 72 hr; ulipristal within 120 hr.\n**Menopause HRT:** estrogen ± progestin for vasomotor symptoms, osteoporosis prevention.",
        se: "**Estrogen-containing OCPs:** **VTE** (DVT/PE — 3–4× increased risk; highest with desogestrel/gestodene; additive with Factor V Leiden), **hypertension**, stroke (migraineurs with aura), **hepatic adenoma**, cholestasis.\n**All OCPs:** nausea, breakthrough bleeding, decreased libido, mood changes.\n**Postmenopausal HRT:** increased breast cancer risk (combined estrogen + progestin), increased CVD risk if started >10 years after menopause.",
        ci: "**Absolute CI for estrogen-containing OCPs:** prior VTE, migraines with aura, stroke, CAD, uncontrolled hypertension, hepatic adenoma, known thrombophilia (Factor V Leiden), pregnancy, age >35 who smokes.",
        pk: "**Rifampin** (potent CYP3A4 inducer) dramatically reduces OCP levels — use backup contraception.\nSt. John's Wort also induces CYP3A4 — reduces OCP efficacy.",
        pearl: "**Migraine with aura + OCPs = absolute contraindication** — the combination dramatically increases ischemic stroke risk (aura indicates underlying vascular/cortical spreading depression susceptibility).\n**Rifampin renders OCPs ineffective** — a board classic; always counsel patients on rifampin to use barrier contraception."
      },
      {
        name: "Hormonal Therapies (Oncology/Endocrine)",
        aka: "Tamoxifen · Raloxifene · Aromatase Inhibitors · Leuprolide · Finasteride · Spironolactone · Danazol",
        summary: "**Hormone modulators** used for cancer treatment, BPH, and endocrine disorders — each works on estrogen, androgen, or gonadotropin pathways.",
        moa: "**Tamoxifen:** **SERM** (selective estrogen receptor modulator) — antagonist in breast tissue (blocks ER-α) + agonist in bone and uterine endometrium.\n**Raloxifene:** SERM — antagonist in breast + bone agonist (prevents osteoporosis) — NO uterine agonist effect (unlike tamoxifen).\n**Aromatase inhibitors (letrozole, anastrozole, exemestane):** inhibit aromatase → block conversion of androgens → estrogens → reduce estrogen in post-menopausal women.\n**Leuprolide:** GnRH agonist → continuous stimulation (rather than pulsatile) → **downregulation of LH/FSH** → castration-level testosterone/estrogen → medical gonadectomy.\n**Finasteride:** inhibits **5α-reductase** → blocks testosterone → DHT conversion → less DHT at prostate.",
        use: "**Tamoxifen:** ER+ breast cancer treatment and chemoprevention (pre- and post-menopausal).\n**Raloxifene:** osteoporosis + breast cancer prevention (post-menopausal only).\n**AIs:** post-menopausal ER+ breast cancer (more effective than tamoxifen post-menopause).\n**Leuprolide:** prostate cancer, endometriosis, uterine fibroids, precocious puberty (all pulsatile), PCOS.\n**Finasteride:** BPH (shrinks prostate), male-pattern baldness.",
        se: "**Tamoxifen:** **endometrial cancer** (uterine agonist effect), **VTE** (DVT/PE), hot flashes, cataracts.\n**Raloxifene:** VTE (same as tamoxifen), hot flashes — **no uterine cancer risk**.\n**AIs:** osteoporosis/fractures (profound estrogen depletion), arthralgia, hot flashes.\n**Leuprolide (initial):** **testosterone flare** (initial agonist response before receptor downregulation — can cause bone pain/ureteral obstruction with prostate cancer; co-treat with anti-androgen for 2 weeks).\n**Finasteride:** sexual dysfunction, gynecomastia, reduced PSA (halves PSA — adjust interpretation).",
        ci: "**Tamoxifen:** pregnancy (teratogenic), prior VTE, uterine sarcoma.\n**Leuprolide for prostate cancer:** avoid without anti-androgen initially (testosterone flare).",
        pk: "**Tamoxifen** requires CYP2D6 activation to active metabolite endoxifen — CYP2D6 inhibitors (fluoxetine, paroxetine) reduce efficacy → use venlafaxine or citalopram for hot flashes instead.\n**Finasteride** reduces PSA by ~50% — this should be factored into PSA interpretation for prostate cancer screening.",
        pearl: "**Tamoxifen causes endometrial cancer** (uterine agonist) but prevents osteoporosis and breast cancer — must screen for abnormal uterine bleeding annually.\n**Raloxifene has the benefits of tamoxifen without the uterine risk** — but does NOT treat pre-existing breast cancer.\n**Finasteride halves PSA** — a 'normal' PSA on finasteride may actually be elevated; double the result for interpretation."
      }
    ]
  }
],

// ── PULMONARY ─────────────────────────────────────────────────────────────────
pulm: [
  {
    group: "Pulmonary Drugs",
    drugs: [
      {
        name: "Short-Acting Bronchodilators (SABAs & SAMAs)",
        aka: "Albuterol · Levalbuterol · Ipratropium · Terbutaline",
        summary: "**Rescue bronchodilators** — SABAs for acute bronchoconstriction; ipratropium (SAMA) for COPD and add-on asthma.",
        moa: "**Albuterol (β2 agonist):** activates β2-adrenergic receptors on airway smooth muscle → ↑cAMP → PKA activation → smooth muscle relaxation + bronchodilation. Also stabilizes mast cells (reduces mediator release).\n**Ipratropium (M3 antagonist):** blocks muscarinic M3 receptors on airway smooth muscle → prevents ACh-mediated bronchoconstriction.",
        use: "**Albuterol:** acute asthma exacerbations (first-line rescue), exercise-induced bronchospasm, acute COPD exacerbation, **hyperkalemia** (β2 stimulation drives K+ into cells — temporizing measure).\n**Ipratropium:** acute COPD exacerbations (combined with albuterol for additive effect), status asthmaticus (add-on), rhinorrhea.",
        se: "**Albuterol:** tachycardia, tremor, hypokalemia (K+ shift intracellularly), hyperglycemia.\n**Ipratropium:** dry mouth, urinary retention, constipation (anticholinergic — minimal systemic absorption via inhaled route).",
        ci: "**Ipratropium:** narrow-angle glaucoma if eye contact (spray directly into eye precipitates acute angle closure), BPH (urinary retention).",
        pk: "**Albuterol:** onset 5 min, duration 4–6 hr. IV/nebulized/MDI.\n**Ipratropium:** onset 15–30 min, slower than albuterol — onset makes it unsuitable as sole rescue agent in acute severe bronchospasm.",
        pearl: "**Albuterol is a temporizing measure for hyperkalemia** (shifts K+ intracellularly) — does not remove potassium from the body; must use sodium polystyrene, patiromer, or dialysis for definitive K+ removal.\n**Tachycardia from albuterol** is dose-related — switch to levalbuterol (R-enantiomer only) if cardiac side effects are problematic."
      },
      {
        name: "Long-Acting Bronchodilators (LABAs & LAMAs)",
        aka: "Salmeterol · Formoterol · Indacaterol · Tiotropium · Umeclidinium · Glycopyrronium · Aclidinium",
        summary: "**Maintenance bronchodilators** — LABAs and LAMAs form the backbone of COPD therapy; LABAs must be combined with ICS in asthma.",
        moa: "**LABAs (salmeterol, formoterol):** long-acting β2 agonists → prolonged bronchodilation (12–24 hr). Formoterol has fast onset (can be used for rescue in some protocols).\n**LAMAs (tiotropium, umeclidinium):** long-acting M1/M3 muscarinic antagonists → sustained prevention of ACh-mediated bronchoconstriction (24 hr — once daily dosing).",
        use: "**COPD maintenance:** LAMA ± LABA (first-line for symptomatic COPD per GOLD guidelines; combination reduces exacerbations and improves FEV1).\n**Asthma:** LABAs must ALWAYS be combined with **inhaled corticosteroids (ICS)** — NEVER as monotherapy (increases asthma mortality).",
        se: "**LABAs:** tachycardia, tremor, hypokalemia (same as SABAs but milder).\n**LAMAs:** dry mouth (most common), urinary retention, constipation, blurred vision, worsening narrow-angle glaucoma (minimal systemic absorption — still caution).",
        ci: "**LABAs as monotherapy in asthma** — FDA black box warning; must be used with ICS.",
        pk: "**Tiotropium:** once-daily inhaled (Handihaler or Respimat); extensive tissue binding → very long duration.\n**Salmeterol:** 12 hr duration; slower onset — NOT appropriate as rescue inhaler.",
        pearl: "**LABAs are absolutely contraindicated as asthma monotherapy** (SMART trial: increased asthma-related deaths vs. placebo).\nFixed-dose ICS/LABA combinations (e.g., fluticasone/salmeterol — Advair) ensure the LABA is never taken without ICS — preferred formulation to ensure compliance with the combination requirement."
      },
      {
        name: "Inhaled Corticosteroids (ICS)",
        aka: "Fluticasone · Budesonide · Beclomethasone · Mometasone · Ciclesonide",
        summary: "**Cornerstone of persistent asthma maintenance therapy** — reduce airway inflammation with minimal systemic effects when used correctly.",
        moa: "Bind **glucocorticoid receptors** in airway epithelium and smooth muscle → suppress NF-κB and AP-1 → reduce production of inflammatory cytokines (IL-4, IL-5, IL-13), decrease eosinophil recruitment, reduce mast cell mediator release, decrease mucus hypersecretion → decreased airway hyperresponsiveness.",
        use: "**Persistent asthma** (mild, moderate, severe) — step-up therapy starting at Step 2 in GINA guidelines.\n**COPD** with frequent exacerbations (combined with LABA ± LAMA).\n**Budesonide:** Crohn's disease (oral — local gut effect, minimal systemic absorption), croup.",
        se: "**Local:** **oropharyngeal candidiasis** (Candida overgrowth from local immunosuppression — prevent by rinsing mouth and gargling after each use), **dysphonia** (hoarseness from vocal cord myopathy).\n**Systemic (at high doses):** HPA suppression, growth retardation in children, cataracts, skin thinning.",
        ci: "Acute bronchospasm (not for rescue — onset too slow).",
        pk: "Use a **spacer/valved holding chamber** to improve delivery to small airways and reduce oropharyngeal deposition.\nHigh first-pass metabolism for most ICS (reduces systemic bioavailability from swallowed fraction).",
        pearl: "**Always rinse mouth after ICS use** to prevent oropharyngeal candidiasis — this is a counseling point every prescriber should give.\n**ICS do NOT provide immediate symptom relief** — they reduce underlying inflammation over days to weeks; always prescribe a SABA for rescue alongside ICS maintenance therapy."
      },
      {
        name: "Leukotriene Modifiers & Cromolyn",
        aka: "Montelukast · Zafirlukast · Zileuton · Cromolyn Sodium",
        summary: "**Anti-inflammatory add-on agents** for asthma — leukotriene modifiers are particularly effective in aspirin-sensitive asthma and exercise-induced bronchospasm.",
        moa: "**Montelukast/zafirlukast (CysLT1 antagonists):** block **leukotriene D4 (LTD4)** receptor → prevent LTD4-mediated bronchoconstriction, mucus production, and eosinophil recruitment.\n**Zileuton (5-LOX inhibitor):** inhibits **5-lipoxygenase** → blocks synthesis of all cysteinyl leukotrienes (LTC4, LTD4, LTE4).\n**Cromolyn:** stabilizes **mast cell membranes** → prevents degranulation → blocks release of histamine and leukotrienes.",
        use: "**Montelukast:** persistent asthma (Step 2–3 add-on or alternative to low-dose ICS), **aspirin-sensitive asthma** (blocks CysLT1, which is upregulated in NSAID-exacerbated respiratory disease), exercise-induced bronchospasm, seasonal allergic rhinitis.\n**Zileuton:** severe asthma refractory to montelukast.\n**Cromolyn:** allergen and exercise-induced bronchospasm prophylaxis (preventive — used 15–30 min before exposure).",
        se: "**Montelukast/zafirlukast:** generally well-tolerated; **neuropsychiatric effects** (FDA black box — depression, suicidality, aggression — especially in pediatric patients; reassess benefit-risk).\n**Zileuton:** **hepatotoxicity** (monitor LFTs); CYP1A2 inhibitor (raises theophylline, warfarin levels).\n**Cromolyn:** minimal — occasional cough, bad taste.",
        ci: "Montelukast: caution in patients with psychiatric history (neuropsychiatric effects).\nZileuton: hepatic disease.",
        pk: "Montelukast: once daily, well-tolerated orally. Cromolyn: inhaled only, 4× daily.",
        pearl: "**Aspirin-sensitive asthma (NSAID-exacerbated respiratory disease):** COX inhibition shifts arachidonic acid toward 5-LOX → excess leukotrienes → bronchoconstriction. **Leukotriene antagonists** directly address this mechanism.\n**Montelukast's neuropsychiatric black box** (2020 FDA) means it is no longer first-line for allergic rhinitis — ICS remain preferred for rhinitis."
      },
      {
        name: "Asthma Biologics",
        aka: "Omalizumab · Mepolizumab · Benralizumab · Dupilumab · Tezepelumab",
        summary: "**Targeted biologics** for severe uncontrolled asthma — each targets a distinct step in the type 2 inflammatory cascade.",
        moa: "**Omalizumab (anti-IgE):** binds free **IgE** → prevents IgE from binding mast cells and basophils → blocks allergen-triggered degranulation.\n**Mepolizumab/reslizumab (anti-IL-5):** neutralize **IL-5** → reduce eosinophil maturation and survival.\n**Benralizumab (anti-IL-5Rα):** binds **IL-5 receptor** on eosinophils → ADCC-mediated eosinophil depletion.\n**Dupilumab (anti-IL-4Rα):** blocks both **IL-4 and IL-13** signaling (shared receptor) → reduces Th2 inflammation, mucus production, and airway remodeling.\n**Tezepelumab (anti-TSLP):** blocks thymic stromal lymphopoietin (TSLP) — the master upstream regulator of type 2 inflammation → broadest mechanism.",
        use: "**Omalizumab:** severe persistent **allergic asthma** with elevated IgE + sensitization to perennial allergen.\n**Mepolizumab/benralizumab:** severe **eosinophilic asthma** (blood eosinophils ≥150–300/μL).\n**Dupilumab:** severe eosinophilic or OCS-dependent asthma; also approved for atopic dermatitis, CRS with nasal polyps, eosinophilic esophagitis.\n**Tezepelumab:** severe asthma regardless of phenotype (eosinophilic or non-eosinophilic — broadest indication).",
        se: "**Omalizumab:** anaphylaxis (rare — observe 30 min after injection), injection site reactions.\n**Anti-IL-5 agents:** headache, injection site reactions; **risk of helminth infection** (eosinophils participate in anti-parasitic defense — screen for parasites before use in endemic areas).\n**Dupilumab:** conjunctivitis (most common biologic-related SE), injection site reactions.",
        ci: "All: active helminth infection (relative). Taper oral corticosteroids slowly when adding biologics — do NOT abruptly stop.",
        pk: "All are SC injections every 2–8 weeks (varies by agent).\n**Benralizumab:** SC every 4 weeks for first 3 doses, then every 8 weeks (dosing simplicity improves adherence).",
        pearl: "**Tezepelumab works regardless of eosinophil count** — the only severe asthma biologic approved for non-eosinophilic phenotype.\n**Dupilumab's most common side effect is conjunctivitis** — thought to be related to altered conjunctival goblet cell function with IL-4/IL-13 blockade; treat with topical antihistamine eye drops."
      },
      {
        name: "Theophylline & Methylxanthines",
        aka: "Theophylline · Aminophylline · Caffeine",
        summary: "**Phosphodiesterase inhibitors and adenosine antagonists** — narrow therapeutic index bronchodilators now largely replaced by safer agents.",
        moa: "Inhibit **phosphodiesterase (PDE)** → ↑cAMP and cGMP → smooth muscle relaxation + bronchodilation.\nAlso competitive antagonism of **adenosine receptors** → prevents adenosine-mediated bronchoconstriction.\n**Caffeine** (IV): used for **apnea of prematurity** via central respiratory stimulation (adenosine A1 antagonism in respiratory centers).",
        use: "**Theophylline:** now largely reserve agent for refractory COPD/asthma (narrow TI limits use).\n**IV caffeine:** apnea of prematurity (first-line — safer, longer t1/2 than aminophylline).\n**Aminophylline IV:** severe acute asthma or COPD exacerbation when other agents fail.",
        se: "**Narrow therapeutic index** (5–15 mcg/mL therapeutic; >20 toxic).\n**Toxicity:** tachyarrhythmias (PDE inhibition in cardiac muscle), **seizures**, nausea/vomiting, headache, insomnia.\n**Hypokalemia** (β2-like effect from ↑cAMP).",
        ci: "Active peptic ulcer disease, seizure disorder (lowers seizure threshold at toxic levels).",
        pk: "**CYP1A2 substrate** — many drugs and conditions alter levels.\n**CYP1A2 inhibitors** (ciprofloxacin, fluvoxamine, cimetidine) raise theophylline levels → toxicity.\n**CYP1A2 inducers** (rifampin, smoking) lower levels → reduced efficacy.\n**Caffeine/adenosine interaction:** caffeine blocks adenosine receptors → patients need higher adenosine doses for SVT termination.",
        pearl: "**Smoking induces CYP1A2** — smokers metabolize theophylline faster (require higher doses); if a patient stops smoking, theophylline levels rise → toxicity.\n**Ciprofloxacin + theophylline:** CYP1A2 inhibition → theophylline levels can double → arrhythmias and seizures."
      },
      {
        name: "Pulmonary Hypertension Agents",
        aka: "Sildenafil · Tadalafil · Riociguat · Bosentan · Ambrisentan · Macitentan · Epoprostenol · Treprostinil · Iloprost · Selexipag",
        summary: "Targeted vasodilators that reduce pulmonary vascular resistance via three pathways: **PDE5/cGMP**, **endothelin receptor**, and **prostacyclin**.",
        moa: "**PDE5 inhibitors (sildenafil, tadalafil):** inhibit PDE5 in pulmonary vasculature → ↑cGMP (from eNOS-derived NO) → pulmonary arterial vasodilation.\n**Riociguat:** soluble guanylate cyclase (sGC) stimulator → ↑cGMP independent of NO — also sensitizes sGC to available NO.\n**Endothelin receptor antagonists — ERAs (bosentan, ambrisentan, macitentan):** block ET-A (and ET-B in bosentan) receptors → prevent endothelin-1–mediated vasoconstriction and pulmonary vascular remodeling.\n**Prostacyclin analogs (epoprostenol, treprostinil, iloprost):** activate IP receptors → ↑cAMP → pulmonary vasodilation, antiplatelet, and antiproliferative effects.",
        use: "**Group 1 PAH** (idiopathic, heritable, connective tissue disease–associated, HIV-associated).\n**Epoprostenol (IV):** most potent — gold standard for severe/rapidly progressive PAH; also improves survival in SSc-associated PAH.\n**Sildenafil/tadalafil:** moderate PAH, also used in erectile dysfunction (Viagra/Cialis — same mechanism in penile vs. pulmonary vasculature).\n**ERAs:** PAH + systemic sclerosis with pulmonary fibrosis component.\n**Riociguat:** PAH + **chronic thromboembolic pulmonary hypertension (CTEPH)** — only approved medical therapy for CTEPH.",
        se: "**PDE5 inhibitors:** systemic hypotension, headache, visual disturbances, priapism.\n**ERAs:** **hepatotoxicity** (bosentan — monthly LFTs required; ambrisentan lower risk), **teratogenicity** (Category X — all ERAs), fluid retention, nasal congestion.\n**Prostacyclin analogs:** jaw pain (hallmark — from vasodilation of jaw vessels), flushing, diarrhea, headache. **Epoprostenol requires continuous IV infusion** (t1/2 ~6 min) — accidental catheter disconnection causes rapid clinical deterioration.",
        ci: "**PDE5 inhibitors + nitrates = absolute contraindication** (profound hypotension from additive cGMP accumulation).\n**Riociguat + PDE5 inhibitors:** contraindicated (additive cGMP increase).\n**All ERAs:** pregnancy (Category X — teratogenic; mandatory REMS program with monthly pregnancy tests).",
        pk: "**Epoprostenol:** continuous IV infusion only; t1/2 ~6 minutes at physiological pH; very sensitive to temperature and interruption.\n**Treprostinil:** available SC, inhaled, oral, and IV — most route-flexible prostanoid.\n**Sildenafil:** CYP3A4 substrate; also inhibits CYP2C9.",
        pearl: "**Epoprostenol's ~6-minute half-life means acute pump failure or line disconnection causes near-immediate clinical deterioration** — patients carry emergency supplies and must be instructed on this risk.\n**Bosentan requires monthly LFT monitoring** due to dose-dependent hepatotoxicity; ambrisentan has much less hepatotoxicity and is preferred in many patients."
      },
      {
        name: "Cystic Fibrosis Modulators",
        aka: "Ivacaftor · Lumacaftor-Ivacaftor · Tezacaftor-Ivacaftor · Elexacaftor-Tezacaftor-Ivacaftor (Trikafta)",
        summary: "**CFTR modulators** — the first disease-modifying therapies for CF; target the underlying protein defect rather than downstream complications.",
        moa: "**CFTR mutations:** Class I–VI mutations with different defects — most common is ΔF508 (Class II — misfolded protein degraded before reaching cell surface; ~85% of CF patients have ≥1 copy).\n**Ivacaftor (potentiator):** binds CFTR protein at cell surface → increases **channel open probability** (gate function) — active only if functional CFTR is present at membrane.\n**Lumacaftor/tezacaftor (correctors):** improve folding and trafficking of misfolded ΔF508-CFTR to the cell surface.\n**Elexacaftor-tezacaftor-ivacaftor (Trikafta):** next-generation triple combination — elexacaftor + tezacaftor (dual correction of ΔF508 trafficking) + ivacaftor (potentiation) → largest benefit observed.",
        use: "**Ivacaftor alone:** G551D and other 'gating' mutations (Class III — CFTR reaches membrane but gate is stuck closed).\n**Trikafta:** ΔF508 homozygous or heterozygous — eligible for patients ≥6 years with at least one ΔF508 allele (the vast majority of CF patients).",
        se: "**Hepatotoxicity** (all — monitor LFTs every 3 months for first year; reduce dose in hepatic impairment).\n**Cataracts** (juvenile cataracts — ophthalmologic exams recommended in pediatric patients).\nNausea, abdominal pain, rash, headache.",
        ci: "Severe hepatic impairment (dose reduction required). CYP3A4 inhibitors dramatically increase levels (rifampin — a CYP3A4 inducer — dramatically reduces efficacy).",
        pk: "All CFTR modulators are CYP3A4 substrates — strong inducers (rifampin) reduce levels by ~90%; strong inhibitors (itraconazole, clarithromycin) dramatically raise levels.\nHigh-fat meal increases oral absorption — take with fat-containing food.",
        pearl: "**Trikafta changed the trajectory of CF** — patients with ΔF508 mutations (85% of CF patients) show dramatic improvements in FEV1, sweat chloride, BMI, and quality of life.\n**Ivacaftor is ineffective for ΔF508 mutations** without a corrector — the protein never reaches the membrane to be potentiated; this distinction (corrector vs. potentiator) is fundamental to CFTR pharmacology."
      },
      {
        name: "Antifibrotics & Other Pulmonary Agents",
        aka: "Pirfenidone · Nintedanib · N-Acetylcysteine · Surfactant · Dornase Alfa",
        summary: "Agents for **idiopathic pulmonary fibrosis (IPF)**, neonatal RDS, and CF-related lung disease.",
        moa: "**Pirfenidone:** anti-fibrotic and anti-inflammatory — inhibits TGF-β–mediated fibroblast proliferation and collagen synthesis; exact mechanism partially unclear.\n**Nintedanib:** inhibits multiple **tyrosine kinases** (PDGFR, VEGFR, FGFR) involved in fibroblast proliferation and differentiation → slows IPF progression.\n**Surfactant (beractant, poractant alfa):** exogenous phospholipid-protein mixture → reduces alveolar surface tension → prevents alveolar collapse (atelectasis) in surfactant-deficient neonates.\n**Dornase alfa (DNase):** recombinant human DNase → cleaves extracellular DNA in CF airways (released from dead neutrophils) → reduces mucus viscosity → improves airflow.",
        use: "**Pirfenidone/nintedanib:** IPF (slow FVC decline — both slow progression but neither is curative).\n**Nintedanib:** also approved for progressive pulmonary fibrosis associated with systemic sclerosis and other ILDs.\n**Surfactant:** **neonatal RDS** (prophylactic or rescue — intratracheal instillation); ARDS (benefit not clearly established in adults).\n**Dornase alfa:** CF (inhaled daily — reduces mucus viscosity, decreases exacerbations).",
        se: "**Pirfenidone:** **photosensitivity** (wear sunscreen — requires UVA/UVB protection), nausea, GI upset, hepatotoxicity (monitor LFTs).\n**Nintedanib:** **diarrhea** (most common dose-limiting SE), nausea, hepatotoxicity, bleeding, arterial thromboembolic events.\n**Surfactant:** transient hypoxia during instillation, endotracheal tube obstruction (brief).",
        ci: "Pirfenidone: severe hepatic impairment, concurrent fluvoxamine (potent CYP1A2 inhibition raises levels dramatically).\nNintedanib: pregnancy (teratogenic).",
        pk: "**Pirfenidone:** CYP1A2 substrate — avoid fluvoxamine, smoking cessation increases levels acutely.\n**Nintedanib:** P-gp substrate; hepatically metabolized.",
        pearl: "**Pirfenidone + fluvoxamine:** fluvoxamine is a potent CYP1A2 inhibitor → dramatically raises pirfenidone levels → increased toxicity; avoid combination.\n**Neither antifibrotic reverses established fibrosis** — they only slow the rate of FVC decline, preserving remaining lung function. Lung transplantation remains the only potentially curative option for IPF."
      }
    ]
  }
],

// ── ONCOLOGY ──────────────────────────────────────────────────────────────────
onco: [
  {
    group: "Chemotherapy",
    drugs: [
      {
        name: "Alkylating Agents",
        aka: "Cyclophosphamide · Ifosfamide · Melphalan · Busulfan · Carmustine · Chlorambucil · Bendamustine",
        summary: "**Cell cycle–nonspecific** agents that cross-link DNA strands — broad antitumor activity but cause significant myelosuppression and secondary malignancies.",
        moa: "Form **covalent interstrand and intrastrand DNA cross-links** via alkylation of guanine N7 position → prevents DNA strand separation → blocks replication and transcription → apoptosis.\n**Cell cycle–nonspecific** — kill both dividing and resting cells.",
        use: "**Cyclophosphamide:** breast/lung/lymphoma/leukemia, **SLE and autoimmune nephritis** (immunosuppression), conditioning for bone marrow transplant.\n**Busulfan:** chronic myelogenous leukemia (CML), bone marrow transplant conditioning.\n**Carmustine:** CNS tumors (lipophilic — crosses BBB), Hodgkin's lymphoma.\n**Chlorambucil:** CLL, Waldenström's macroglobulinemia.",
        se: "**Myelosuppression** (all — dose-limiting for most).\n**Hemorrhagic cystitis** (cyclophosphamide and ifosfamide — acrolein metabolite is toxic to bladder urothelium; prevent with **Mesna** — binds acrolein in urine + aggressive hydration).\n**SIADH** (cyclophosphamide).\n**Pulmonary fibrosis** (busulfan — 'busulfan lung').\n**Secondary malignancies** (especially AML/MDS — 3–10 years later; alkylating-agent leukemias have monosomy 5 or 7).\n**Infertility** — alkylating agents are most gonadotoxic chemotherapy class.",
        ci: "Severe bone marrow suppression, active bleeding. Ifosfamide without Mesna.",
        pk: "**Cyclophosphamide:** prodrug activated by hepatic CYP2B6/3A4 to active phosphoramide mustard + toxic acrolein.\n**Carmustine:** highly lipophilic → excellent CNS penetration (useful for brain tumors).",
        pearl: "**Mesna (2-mercaptoethane sulfonate)** inactivates acrolein in the bladder, preventing hemorrhagic cystitis — always required with ifosfamide and high-dose cyclophosphamide.\n**Alkylating-agent leukemia** appears 3–10 years later with characteristic cytogenetics (monosomy 5, monosomy 7, del5q) — a late dose-limiting toxicity."
      },
      {
        name: "Antimetabolites",
        aka: "Methotrexate · 5-Fluorouracil · Cytarabine · Gemcitabine · 6-Mercaptopurine · 6-Thioguanine · Hydroxyurea · Cladribine · Fludarabine",
        summary: "**S-phase specific** agents that mimic nucleotide precursors or block their synthesis — particularly effective against rapidly dividing cells.",
        moa: "**Methotrexate (MTX):** inhibits **dihydrofolate reductase (DHFR)** → depletes THF → cannot synthesize thymidylate or purines → blocks DNA synthesis. Also inhibits aminoimidazole carboxamide ribonucleotide transformylase (AICAR) → anti-inflammatory.\n**5-FU:** converted to **FdUMP** → inhibits **thymidylate synthase (TS)** (blocks dTMP synthesis); also incorporated into RNA → disrupts RNA processing.\n**Cytarabine (Ara-C):** incorporates into DNA as cytidine analog → chain termination.\n**6-MP/6-TG:** purine analogs → incorporated into DNA/RNA + block purine synthesis.",
        use: "**MTX:** ALL, breast cancer, osteosarcoma, choriocarcinoma; **RA, psoriasis, Crohn's** (anti-inflammatory at low doses via AICAR mechanism).\n**5-FU:** colorectal, breast, head and neck cancers; topical for actinic keratosis/basal cell carcinoma.\n**Cytarabine:** AML (backbone of induction).\n**Gemcitabine:** pancreatic, lung, bladder, breast cancers.\n**Hydroxyurea:** CML (reduces WBC), sickle cell disease (↑HbF synthesis), essential thrombocythemia.",
        se: "**MTX:** **myelosuppression, mucositis, hepatotoxicity** (fibrosis with prolonged use), **pulmonary toxicity**, **teratogenic** (absolutely — Category X); **renal failure** delays MTX excretion → severe toxicity (leucovorin rescue).\n**5-FU:** myelosuppression, mucositis; **Hand-foot syndrome** (palmar-plantar erythrodysesthesia), **photosensitivity**; with **leucovorin** (folinic acid), 5-FU toxicity is enhanced (leucovorin stabilizes the FdUMP-TS complex).\n**Cytarabine (high-dose):** **cerebellar toxicity** (ataxia, dysarthria), conjunctivitis (use steroid eye drops prophylactically).\n**Hydroxyurea:** myelosuppression, skin ulcers.",
        ci: "MTX: pregnancy, severe renal failure (accumulation), significant hepatic disease, pleural effusion or ascites ('third space' — MTX accumulates → severe toxicity).",
        pk: "**Leucovorin (folinic acid) rescues** normal cells from MTX toxicity by bypassing DHFR — must be timed appropriately after high-dose MTX infusion.\n**DPD enzyme deficiency** causes severe 5-FU toxicity (DPD is the major 5-FU catabolic enzyme — 3–5% of patients have partial or complete deficiency) — test before capecitabine/5-FU.",
        pearl: "**Leucovorin ENHANCES 5-FU cytotoxicity** (stabilizes the ternary complex of FdUMP-TS-leucovorin, prolonging TS inhibition) — but it RESCUES from MTX toxicity (repletes the THF that MTX depletes).\n**Same drug, completely opposite effects on 5-FU vs. MTX** — one of the most tested chemo pharmacology distinctions."
      },
      {
        name: "Anthracyclines",
        aka: "Doxorubicin · Daunorubicin · Epirubicin · Idarubicin · Bleomycin",
        summary: "**DNA intercalating agents and topoisomerase II inhibitors** — highly effective but with dose-limiting **cardiotoxicity** (doxorubicin) and pulmonary fibrosis (bleomycin).",
        moa: "**Anthracyclines (doxorubicin, daunorubicin):** intercalate between DNA base pairs + inhibit **topoisomerase II** → prevent DNA re-ligation → double-strand breaks + apoptosis. Also generate **free radicals** via redox cycling (responsible for cardiotoxicity).\n**Bleomycin:** generates **reactive oxygen species** that cause direct DNA single- and double-strand breaks; concentrated in lung and skin (tissues with high bleomycin hydrolase levels are protected → lung/skin lack this enzyme → selective toxicity).",
        use: "**Doxorubicin:** breast cancer, lymphomas (CHOP regimen), leukemias, sarcomas.\n**Daunorubicin:** AML, ALL.\n**Bleomycin:** Hodgkin's lymphoma (ABVD regimen), testicular cancer, squamous cell carcinoma.",
        se: "**Doxorubicin:** **cumulative dose–dependent cardiomyopathy** (dilated — total lifetime dose limit ~550 mg/m²; free radical damage to cardiomyocytes); red/orange urine (harmless — drug metabolite).\n**Bleomycin:** **pulmonary fibrosis** (dose-limiting — cumulative dose monitoring required; worsened by high FiO2 → **minimize supplemental O2 during/after bleomycin therapy**).\nAll anthracyclines: severe myelosuppression, mucositis, alopecia, vesicant (tissue necrosis if extravasated).",
        ci: "Doxorubicin: prior cardiomyopathy, prior cumulative anthracycline dose near limit.\nBleomycin: prior pulmonary fibrosis, severely compromised pulmonary function.",
        pk: "**Dexrazoxane:** iron-chelating cardioprotective agent — reduces doxorubicin cardiotoxicity by preventing free radical generation; used in patients requiring high cumulative anthracycline doses.\n**Liposomal doxorubicin (Doxil):** reduced cardiotoxicity + increased tumor accumulation (EPR effect).",
        pearl: "**Bleomycin + high FiO2 = catastrophic pulmonary toxicity** — high inspired oxygen generates more free radicals with bleomycin; alert anesthesiologists before any surgery (use lowest FiO2 possible, even years after therapy).\n**Dexrazoxane** is the antidote for anthracycline extravasation AND cardioprotection — chelates iron to prevent free radical formation in cardiac tissue."
      },
      {
        name: "Taxanes & Vinca Alkaloids",
        aka: "Paclitaxel · Docetaxel · Cabazitaxel · Vincristine · Vinblastine · Vinorelbine",
        summary: "**Antimicrotubule agents** — taxanes stabilize microtubules (prevent depolymerization); vinca alkaloids destabilize them (prevent polymerization). Both cause mitotic arrest.",
        moa: "**Taxanes (paclitaxel, docetaxel):** bind β-tubulin → **stabilize microtubule polymers** → prevent depolymerization → spindle cannot disassemble → cells arrested in **M phase** → apoptosis.\n**Vinca alkaloids (vincristine, vinblastine):** bind β-tubulin → **prevent microtubule polymerization** → mitotic spindle cannot form → cells arrested in **M phase** → apoptosis.",
        use: "**Paclitaxel/docetaxel:** breast, ovarian, lung, prostate cancers.\n**Vincristine:** ALL (cornerstone of induction), Hodgkin's lymphoma (ABVD uses vinblastine), non-Hodgkin's lymphoma (CHOP regimen).\n**Vinblastine:** Hodgkin's, testicular, bladder cancers.",
        se: "**Taxanes:** **peripheral neuropathy** (dose-limiting — sensory > motor), myelosuppression, alopecia; **hypersensitivity reactions** (paclitaxel — due to Cremophor EL vehicle; premedicate with corticosteroids + antihistamines; nab-paclitaxel avoids this).\n**Vincristine:** **peripheral neuropathy** (dose-limiting — almost exclusively neurotoxic; minimal myelosuppression — enables use in CHOP regimen without additive bone marrow toxicity); **SIADH**.\n**Vinblastine:** myelosuppression (dose-limiting), less neurotoxic than vincristine.",
        ci: "**Vincristine intrathecally = fatal** (absolute CI — causes ascending myeloencephalopathy; always confirm route before administering).",
        pk: "**Paclitaxel:** CYP3A4/2C8 substrate; Cremophor EL vehicle causes hypersensitivity (premedicate).\n**Vincristine:** vesicant — severe tissue damage if extravasated; hepatic elimination.",
        pearl: "**Vincristine intrathecally is universally fatal** — this medication error has caused well-documented deaths; must NEVER be given intrathecally.\n**Vincristine is uniquely neurotoxic** with minimal myelosuppression — this distinguishes it from most other chemotherapy and is why it fits well in myelosuppressive combination regimens."
      },
      {
        name: "Topoisomerase Inhibitors & Platinum Agents",
        aka: "Etoposide · Irinotecan · Topotecan · Cisplatin · Carboplatin · Oxaliplatin",
        summary: "**DNA strand break inducers and DNA cross-linkers** — platinum agents are the backbone of many solid tumor regimens.",
        moa: "**Etoposide (Top II inhibitor):** stabilizes the topoisomerase II–DNA cleavable complex → prevents religation → persistent DNA double-strand breaks → apoptosis. **Cell cycle–specific (late S/G2).**\n**Irinotecan/topotecan (Top I inhibitors):** stabilize topoisomerase I–DNA complex → single-strand breaks accumulate → replication forks collapse → cell death.\n**Cisplatin/carboplatin/oxaliplatin:** form **intrastrand and interstrand platinum–DNA cross-links** (at guanine N7) → block DNA replication and transcription → apoptosis. Similar mechanism to alkylating agents.",
        use: "**Etoposide:** lung cancer (SCLC), testicular cancer, lymphomas.\n**Irinotecan:** colorectal cancer (FOLFIRI regimen), gastric, lung cancers.\n**Topotecan:** ovarian, cervical, SCLC.\n**Cisplatin:** testicular (curative), lung, bladder, head and neck, ovarian cancers.\n**Carboplatin:** substitute for cisplatin in patients with renal impairment or neuropathy (less nephrotoxic and neurotoxic, more myelosuppressive).\n**Oxaliplatin:** colorectal cancer (FOLFOX — oxaliplatin + leucovorin + 5-FU).",
        se: "**Cisplatin:** **nephrotoxicity** (proximal tubular injury — prevent with aggressive IV hydration and amifostine), **peripheral neuropathy**, **ototoxicity** (high-frequency sensorineural hearing loss, tinnitus — cumulative, irreversible), **severe nausea/vomiting** (most emetogenic traditional chemotherapy).\n**Carboplatin:** myelosuppression (dose-limiting), less nephrotoxicity/neurotoxicity than cisplatin.\n**Oxaliplatin:** **cold-induced peripheral neuropathy** (classic — touching cold objects or drinking cold liquids triggers dysesthesias; avoid cold exposure during and after infusion).\n**Irinotecan:** **diarrhea** (acute — cholinergic, treat with atropine; delayed — secretory, treat with loperamide) and myelosuppression.\n**Etoposide:** secondary **AML** (3–5 years; topoisomerase II inhibitor–related; balanced translocation involving 11q23).",
        ci: "Cisplatin: pre-existing renal failure or severe neuropathy.",
        pk: "**Irinotecan:** prodrug activated to SN-38 by carboxylesterases; SN-38 inactivated by UGT1A1. **UGT1A1*28 polymorphism** → reduced SN-38 glucuronidation → higher SN-38 levels → severe neutropenia and diarrhea.\n**Carboplatin:** dose calculated by Calvert formula using GFR (AUC dosing — renally dosed).",
        pearl: "**Oxaliplatin cold-induced neuropathy** is unique and acute — warn patients not to touch cold surfaces or drink cold beverages during the infusion period.\n**Etoposide-related leukemia** has a distinctive signature (MLL gene rearrangements at 11q23, balanced translocations) — different from alkylating-agent leukemia (which has monosomy 5/7)."
      },
      {
        name: "Targeted & Immunotherapy Agents",
        aka: "Imatinib · Erlotinib · Trastuzumab · Bevacizumab · Rituximab · Pembrolizumab · Nivolumab · Ipilimumab",
        summary: "**Molecularly targeted agents** and **immune checkpoint inhibitors** — precision oncology targeting specific driver mutations or restoring anti-tumor immune responses.",
        moa: "**Imatinib (BCR-ABL inhibitor):** binds the ATP-binding site of **BCR-ABL tyrosine kinase** (the constitutively active fusion product of t(9;22) in CML) → blocks phosphorylation → inhibits CML cell proliferation and induces apoptosis.\n**Erlotinib/gefitinib (EGFR inhibitors):** block **EGFR tyrosine kinase** — activating EGFR mutations (exon 19 del, L858R) are sensitive targets in NSCLC.\n**Trastuzumab (anti-HER2):** binds **HER2/neu** extracellular domain → inhibits HER2 signaling + ADCC → for HER2-overexpressing breast/gastric cancer.\n**Bevacizumab (anti-VEGF):** binds circulating **VEGF-A** → prevents VEGFR binding → blocks tumor angiogenesis.\n**Rituximab (anti-CD20):** binds **CD20** on B cells → ADCC, CDC, and direct apoptosis → depletes B-cell lineage (normal and malignant).\n**Pembrolizumab/nivolumab (PD-1 inhibitors):** block **PD-1** receptor on T cells → prevent tumor-mediated T cell exhaustion via PD-L1 → restore cytotoxic T cell activity.\n**Ipilimumab (CTLA-4 inhibitor):** blocks **CTLA-4** → prevents inhibitory signal on T cells in lymph nodes → broader and earlier T cell activation.",
        use: "**Imatinib:** CML (t(9;22) — BCR-ABL), GIST (c-KIT/PDGFRA mutations).\n**Erlotinib/osimertinib:** EGFR-mutated NSCLC.\n**Trastuzumab:** HER2+ breast cancer, HER2+ gastric cancer.\n**Bevacizumab:** colorectal, lung, ovarian, cervical cancers.\n**Rituximab:** CD20+ B-cell lymphomas/leukemias, RA, ANCA vasculitis.\n**PD-1/PD-L1 inhibitors (pembrolizumab):** melanoma, NSCLC, MSI-H/dMMR tumors, many other cancers (PD-L1/TMB guided).\n**Ipilimumab:** melanoma (often combined with nivolumab).",
        se: "**Imatinib:** nausea, fluid retention/edema, myelosuppression, hepatotoxicity; **QTc prolongation** (dasatinib > imatinib).\n**Trastuzumab:** **cardiotoxicity** (reversible dilated cardiomyopathy/HF — different from anthracycline cardiotoxicity which is permanent; monitor LVEF).\n**Bevacizumab:** **hypertension**, **wound healing impairment** (hold 4–6 weeks before/after surgery), **bowel perforation**, **arterial thromboembolism**, **proteinuria**.\n**Rituximab:** **infusion reactions** (cytokine release syndrome during first infusion), **progressive multifocal leukoencephalopathy (PML)** (JC virus reactivation — rare but fatal), HBV reactivation (screen all patients before rituximab).\n**Checkpoint inhibitors (PD-1/CTLA-4):** **immune-related adverse events (irAEs)** — autoimmune inflammation in any organ: pneumonitis, colitis, hepatitis, endocrinopathies (hypothyroidism, hypophysitis, adrenal insufficiency), nephritis, myocarditis (rare but potentially fatal). Treat with high-dose corticosteroids.",
        ci: "**Trastuzumab:** prior anthracycline cardiotoxicity (additive cardiac risk); baseline LVEF <50%.\n**Bevacizumab:** recent (≤6 months) arterial thrombotic event, uncontrolled hypertension, hemoptysis, bowel perforation history.",
        pk: "**Imatinib:** CYP3A4 substrate and inhibitor.\n**Checkpoint inhibitors:** no hepatic metabolism (large monoclonal antibodies — eliminated via proteolysis).\n**Rituximab:** CD20-targeted delivery; B-cell depletion lasts months (do NOT administer live vaccines for 6–12 months).",
        pearl: "**Trastuzumab cardiotoxicity is REVERSIBLE** (unlike anthracycline cardiotoxicity which is permanent) — this distinction matters for management.\n**Checkpoint inhibitor irAEs** mimic any autoimmune disease — high index of suspicion in patients on immunotherapy presenting with pneumonitis, diarrhea, hepatitis, rash, or new endocrinopathy.\n**Bevacizumab's wound healing impairment** necessitates a surgical hold period — anti-VEGF blocks the angiogenesis required for wound healing."
      }
    ]
  }
],

// ── TOXICOLOGY ────────────────────────────────────────────────────────────────
toxicology: [
  {
    group: "Drug Antidotes",
    drugs: [
      {
        name: "Antidotes Master Table",
        aka: "Naloxone · Flumazenil · N-Acetylcysteine · Atropine · Pralidoxime · Digibind · Protamine · Vitamin K · FFP · Deferoxamine · Dimercaprol · EDTA · Succimer · Hydroxocobalamin · Methylene Blue · Physostigmine · Glucagon",
        summary: "High-yield antidote–toxin pairings — the most tested toxicology associations on Step 1 and Step 2.",
        moa: "Each antidote works via a distinct mechanism matched to its specific poison:\n**Naloxone:** competitive μ-opioid antagonist (opioids).\n**Flumazenil:** competitive benzodiazepine antagonist (benzos — use with extreme caution in chronic users; can precipitate seizures).\n**N-Acetylcysteine:** replenishes glutathione to detoxify NAPQI (acetaminophen).\n**Atropine:** competitive muscarinic antagonist; **Pralidoxime (2-PAM):** reactivates AChE before 'aging' (organophosphates/nerve agents).\n**Digibind (Fab fragments):** bind and sequester digoxin (digoxin toxicity).\n**Protamine sulfate:** binds heparin (negatively charged, heparin is positively charged) — neutralizes UFH (partially reverses LMWH).\n**Vitamin K / FFP / 4-factor PCC:** restore vitamin K–dependent clotting factors (warfarin overdose — Vitamin K takes hours; FFP/PCC are immediate).\n**Deferoxamine:** chelates free iron (iron overdose).\n**Dimercaprol (BAL):** chelates arsenic, mercury, lead (competes with -SH groups on enzymes).\n**EDTA:** chelates lead (preferred for encephalopathy).\n**Succimer (DMSA):** oral chelator for lead and arsenic (especially in children).\n**Hydroxocobalamin:** binds cyanide to form cyanocobalamin → excreted (cyanide poisoning).\n**Methylene blue:** reduces methemoglobin (Fe3+→Fe2+) via NADPH-metHb reductase pathway (methemoglobinemia).\n**Physostigmine:** reversible AChE inhibitor that crosses BBB (anticholinergic toxidrome).\n**Glucagon:** activates glucagon receptor → bypasses beta-receptor → increases cAMP → positive inotropy and chronotropy (beta-blocker and calcium channel blocker overdose).",
        use: "See individual entries. Each antidote has a specific paired toxin for which it is the treatment of choice.",
        se: "**Flumazenil:** seizures in benzo-dependent patients; short t1/2 (re-sedation can occur).\n**Pralidoxime:** ineffective after organophosphate 'aging' (hours to days depending on the compound); use EARLY.\n**Methylene blue ineffective in G6PD deficiency** (relies on NADPH from G6PD pathway) → use exchange transfusion instead.\n**Deferoxamine:** produces vin rosé–colored urine (confirms iron chelation).",
        ci: "**Flumazenil** in chronic benzodiazepine users or epilepsy patients on benzos — acute withdrawal seizures.\n**Methylene blue** in G6PD deficiency — paradoxically worsens methemoglobinemia.",
        pk: "**Naloxone t1/2 (~30–60 min)** is shorter than most opioids — may require repeated dosing or infusion for long-acting opioids (methadone, buprenorphine).\n**Pralidoxime** must be given within hours of organophosphate exposure before the phosphorylated AChE undergoes 'aging' (irreversible conformational change).",
        pearl: "**'Aging' of organophosphate–AChE complex** means pralidoxime becomes ineffective — administer as soon as possible.\n**Methylene blue requires G6PD activity** for its reductive mechanism — in G6PD-deficient patients with methemoglobinemia, exchange transfusion is the only option."
      },
      {
        name: "Acetaminophen Toxicity",
        aka: "Acetaminophen Overdose · NAPQI · N-Acetylcysteine",
        summary: "**Most common cause of acute liver failure in the U.S.** — toxicity from NAPQI accumulation when glutathione is depleted; antidote is N-acetylcysteine.",
        moa: "Normal metabolism: ~95% of acetaminophen is glucuronidated and sulfated → renally excreted; ~5% metabolized by CYP2E1/CYP3A4 to **NAPQI** (toxic reactive intermediate) → normally conjugated by glutathione → excreted.\n**Overdose:** glucuronidation and sulfation are saturated → CYP pathway predominates → NAPQI overwhelms glutathione stores → NAPQI covalently binds hepatocyte macromolecules → **zone 3 (centrilobular) necrosis** (highest CYP activity pericentral).",
        use: "Clinical stages: **Stage 1 (0–24 hr):** nausea, vomiting, malaise — labs often normal.\n**Stage 2 (24–72 hr):** RUQ pain, elevated AST/ALT, coagulopathy.\n**Stage 3 (72–96 hr):** fulminant hepatic failure — peak toxicity.\n**Stage 4:** recovery or death.",
        se: "**Risk factors for toxicity at lower doses:** chronic alcohol use (CYP2E1 induction + glutathione depletion), fasting/malnutrition (depleted glutathione), concurrent CYP inducers (isoniazid, rifampin).",
        ci: "No contraindication to NAC — always administer when indicated by the Rumack-Matthew nomogram.",
        pk: "**Rumack-Matthew nomogram:** plots acetaminophen level vs. time after ingestion — any level in the treatment zone (>150 mcg/mL at 4 hours) mandates NAC.\n**NAC most effective within 8 hours** of ingestion — still give even late if AST is rising.",
        pearl: "**NAC mechanism:** cysteine donor → replenishes hepatic glutathione → detoxifies NAPQI.\nAlso directly reduces NAPQI and has anti-inflammatory and microcirculatory effects.\n**The 4-hour post-ingestion acetaminophen level** is the key triage lab — if level falls in the toxic zone on the nomogram, initiate NAC regardless of symptoms."
      },
      {
        name: "Organophosphate & Cholinergic Toxicity",
        aka: "Organophosphates · Carbamates · Nerve Agents · Sarin · VX",
        summary: "**Irreversible AChE inhibitors** causing massive cholinergic surge — requires atropine (muscarinic symptoms) and pralidoxime (reactivate AChE before aging).",
        moa: "Irreversibly phosphorylate the serine in the active site of **acetylcholinesterase** → ACh accumulates at all synapses → overwhelming muscarinic AND nicotinic stimulation.\nWithin hours, the phosphorylated AChE undergoes **'aging'** (irreversible conformational change) → pralidoxime no longer effective.",
        use: "**Muscarinic symptoms (SLUDGE/DUMBELS):** salivation, lacrimation, urination, defecation, GI cramps/emesis, bradycardia, bronchospasm, miosis.\n**Nicotinic symptoms:** muscle fasciculations → weakness → paralysis, tachycardia (nicotinic overrides muscarinic at ganglia), hypertension.",
        se: "Respiratory failure is the most common cause of death — bronchospasm + respiratory muscle paralysis.",
        ci: "Do NOT use scopolamine or glycopyrrolate (cannot cross BBB) to treat CNS symptoms — only atropine penetrates the CNS.",
        pk: "**Atropine titrated to drying of secretions** (not heart rate) — large doses may be needed (10–20+ mg in severe poisoning).\n**Pralidoxime** cleaves the phosphate–serine bond to regenerate active AChE — must give within hours (before aging).",
        pearl: "**Atropine treats muscarinic symptoms; pralidoxime regenerates AChE** — both are required for adequate treatment.\n**Titrate atropine to drying of pulmonary secretions** (not to heart rate — tachycardia is a nicotinic effect that atropine does not reliably treat)."
      },
      {
        name: "Opioid, Stimulant & Sedative Toxidromes",
        aka: "Opioid Overdose · Cocaine Toxicity · Benzodiazepine Overdose · Serotonin Syndrome · NMS",
        summary: "**Toxidrome pattern recognition** — identify the syndrome from vital signs and exam findings, then apply targeted treatment.",
        moa: "**Opioid toxidrome:** μ-opioid receptor–mediated CNS/respiratory depression.\n**Stimulant (cocaine/amphetamine):** catecholamine surge → sympathomimetic toxidrome.\n**Serotonin syndrome:** excess serotonergic activity at 5-HT1A and 5-HT2A receptors.\n**NMS:** D2 receptor blockade in nigrostriatal pathway → dopamine depletion.",
        use: "**Opioid:** miosis + respiratory depression + coma ('opioid triad') → naloxone (IV/IM/intranasal).\n**Cocaine/stimulants:** agitation, mydriasis, tachycardia, hypertension, hyperthermia → benzodiazepines (first-line for all sympathomimetic symptoms); **NEVER use beta-blockers** (leave α1-mediated vasoconstriction unopposed → worse hypertension).\n**Serotonin syndrome:** hyperthermia, tremor, clonus, hyperreflexia, diaphoresis → **cyproheptadine** (5-HT2A antagonist) + supportive; discontinue all serotonergic agents.\n**NMS:** lead-pipe rigidity, hyperthermia, altered mental status, autonomic instability (antipsychotic exposure) → **dantrolene + bromocriptine**; stop antipsychotic.",
        se: "Toxidrome treatment must be directed at the correct syndrome — misidentification is the key failure point.",
        ci: "**Beta-blockers in cocaine overdose** — absolute contraindication (unopposed alpha → hypertensive crisis).\n**Flumazenil** in benzo-dependent patients — acute withdrawal seizures.",
        pk: "Serotonin syndrome has rapid onset (hours); NMS develops over days. This temporal distinction helps differentiate them.",
        pearl: "**Serotonin syndrome vs. NMS key differences:**\nSerotonin syndrome: onset hours, hyperreflexia + clonus (unique), diaphoresis, serotonergic drug exposure.\nNMS: onset days-weeks, lead-pipe rigidity, antipsychotic exposure, absent clonus.\n**Treat serotonin syndrome** with cyproheptadine + benzos + cooling.\n**Treat NMS** with dantrolene + bromocriptine + stopping the offending drug."
      },
      {
        name: "Heavy Metal & Environmental Toxins",
        aka: "Lead · Mercury · Arsenic · Iron · Cyanide · Carbon Monoxide · Methanol · Ethylene Glycol",
        summary: "**Environmental and industrial toxins** — each has a specific antidote and characteristic clinical presentation.",
        moa: "**Lead:** binds sulfhydryl groups → inhibits ALAD and ferrochelatase → impaired heme synthesis + incorporation of zinc into protoporphyrin → zinc protoporphyrin accumulates; also disrupts NMDA receptors (neurotoxicity) and demyelination.\n**Mercury (organic):** lipophilic, concentrates in CNS; binds sulfhydryl groups → neuronal damage.\n**Cyanide:** binds **cytochrome c oxidase (Complex IV)** → blocks electron transport → lactic acidosis + histotoxic hypoxia (cannot utilize O2 despite normal delivery).\n**Carbon monoxide:** binds hemoglobin with 250× the affinity of O2 → carboxyhemoglobin → reduced O2 delivery; also binds myoglobin (cardiac toxicity) and cytochrome oxidase.\n**Methanol:** metabolized to **formic acid** (by ADH and ALDH) → inhibits cytochrome oxidase → **optic nerve toxicity** (classic — 'wood alcohol blindness') + high anion gap metabolic acidosis.\n**Ethylene glycol:** metabolized to **oxalic acid** → precipitates as calcium oxalate crystals in renal tubules → AKI + hypocalcemia.",
        use: "**Lead:** dimercaprol (severe encephalopathy), EDTA (lead encephalopathy — pairs well with dimercaprol), **succimer (DMSA)** (oral — preferred for mild-moderate lead toxicity in children).\n**Mercury/arsenic:** dimercaprol (acute), succimer (chronic).\n**Iron:** deferoxamine (specific iron chelator).\n**Cyanide:** hydroxocobalamin (preferred — binds CN⁻ to form cyanocobalamin) or sodium thiosulfate (provides sulfur donor → rhodanese converts cyanide to thiocyanate).\n**CO:** 100% oxygen (displaces CO from hemoglobin, reduces half-life from ~5 hr on room air to ~90 min); hyperbaric O2 for severe poisoning.\n**Methanol/ethylene glycol:** **fomepizole (4-MP)** (inhibits ADH → blocks toxic metabolite formation) or ethanol (competing ADH substrate); hemodialysis for severe poisoning.",
        se: "Dimercaprol: hypertension, tachycardia, nausea, pain at injection site, contraindicated in iron/selenium poisoning (forms toxic complexes).\nFomepizole: headache, nausea, dizziness.",
        ci: "**Dimercaprol in iron or selenium poisoning** — forms more toxic complexes.\n**Methylene blue in G6PD deficiency** — ineffective and potentially worsening.",
        pk: "**Fomepizole (4-MP)** is the preferred antidote for methanol and ethylene glycol — it inhibits ADH competitively, preventing formation of formic acid (methanol) or oxalic acid (ethylene glycol). Ethanol works similarly but is harder to titrate.",
        pearl: "**CO poisoning:** cherry-red skin color is a classic description but rarely seen clinically. The key is pulse oximetry WILL read falsely normal (oximeters cannot distinguish HbCO from HbO2) — must measure **co-oximetry** for carboxyhemoglobin.\n**Methanol vs. ethylene glycol:** both cause high AGMA + osmol gap early. Methanol → vision loss (formic acid attacks optic nerve). Ethylene glycol → calcium oxalate crystals in urine + AKI + hypocalcemia (oxalate binds Ca2+)."
      }
    ]
  }
]

}; // end DRUGS
