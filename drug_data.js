const DRUGS = {

autonomic: [
  {
    group: "Parasympathetics",
    drugs: [
      {
        name: "Cholinomimetics (Direct)",
        aka: "Bethanechol · Carbachol · Pilocarpine · Methacholine",
        summary: "Direct **muscarinic agonists** that activate parasympathetic end organs.",
        moa: "Directly bind **M1 to M3** receptors.",
        use: "**Bethanechol:** postop ileus, urinary retention. **Pilocarpine:** open-angle glaucoma, Sjögren syndrome. **Methacholine:** asthma challenge.",
        se: "**DUMBBELLS** (Diarrhea, Urination, Miosis, Bradycardia, Bronchospasm, Emesis, Lacrimation, Salivation).",
        ci: "Asthma or COPD (bronchospasm risk); bowel/bladder obstruction; peptic ulcer disease.",
        pk: "**Bethanechol:** quaternary amine (does NOT cross BBB). **Pilocarpine:** tertiary amine (crosses BBB).",
        pearl: "**Bethanechol** treats urinary retention safely because its quaternary structure prevents CNS entry. **Pilocarpine** treats glaucoma by contracting the ciliary muscle to open the trabecular meshwork."
      },
      {
        name: "Acetylcholinesterase Inhibitors",
        aka: "Neostigmine · Pyridostigmine · Physostigmine · Edrophonium · Donepezil · Rivastigmine · Galantamine",
        summary: "Reversible **AChE inhibitors** that increase synaptic acetylcholine.",
        moa: "Inhibit AChE to increase ACh at **muscarinic** and **nicotinic** synapses.",
        use: "**Neostigmine/pyridostigmine:** myasthenia gravis, NMB reversal. **Edrophonium:** MG diagnosis (Tensilon test). **Donepezil:** Alzheimer disease. **Physostigmine:** anticholinergic toxicity.",
        se: "**Cholinergic crisis** (DUMBBELLS), muscle fasciculations.",
        ci: "Bowel or bladder obstruction; concurrent succinylcholine use.",
        pk: "**Physostigmine** crosses the BBB. **Neostigmine/pyridostigmine** do NOT cross the BBB.",
        pearl: "Treat central anticholinergic toxicity with **physostigmine**. Treat organophosphate poisoning with **atropine** first, then **pralidoxime**."
      },
      {
        name: "Muscarinic Antagonists (Anticholinergics)",
        aka: "Atropine · Scopolamine · Ipratropium · Tiotropium · Oxybutynin · Tolterodine · Benztropine · Glycopyrrolate · Hyoscine",
        summary: "Competitive **muscarinic receptor antagonists** that reduce parasympathetic tone.",
        moa: "Competitive antagonism at **M1 to M3** receptors.",
        use: "**Atropine:** symptomatic bradycardia. **Scopolamine:** motion sickness. **Ipratropium/tiotropium:** COPD/asthma. **Benztropine:** Parkinsonism, acute dystonia.",
        se: "**Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter.** Mydriasis, cycloplegia, tachycardia, delirium.",
        ci: "Narrow-angle glaucoma; benign prostatic hyperplasia.",
        pk: "**Ipratropium/tiotropium** are inhaled quaternary amines with minimal systemic absorption.",
        pearl: "Classic anticholinergic toxicity is reversed by **physostigmine**."
      }
    ]
  },
  {
    group: "Sympathetics",
    drugs: [
      {
        name: "Epinephrine & Norepinephrine",
        aka: "Epinephrine (Adrenaline, EpiPen) · Norepinephrine (Levophed)",
        summary: "Endogenous catecholamines for **anaphylaxis** and **shock**.",
        moa: "**Epinephrine:** alpha-1, alpha-2, beta-1, beta-2 full agonist. **Norepinephrine:** alpha-1, alpha-2, beta-1 agonist (minimal beta-2).",
        use: "**Epinephrine:** anaphylaxis (IM), cardiac arrest. **Norepinephrine:** septic shock (first-line vasopressor).",
        se: "Hypertension, tachyarrhythmias, tissue ischemia. **Epinephrine** causes hyperglycemia via beta-2 receptors.",
        ci: "Use caution in cocaine/amphetamine toxicity.",
        pk: "Rapidly degraded by MAO and COMT.",
        pearl: "**Epinephrine** is life-saving in anaphylaxis via alpha-1 vasoconstriction and beta-2 bronchodilation. **Norepinephrine** increases MAP via vasoconstriction, but reflex bradycardia often offsets its beta-1 chronotropy."
      },
      {
        name: "Dopamine & Dobutamine",
        aka: "Dopamine (Intropin) · Dobutamine (Dobutrex)",
        summary: "Inotropes and vasoactive agents for **cardiogenic shock**.",
        moa: "**Dopamine:** D1 (low dose), beta-1 (medium dose), alpha-1 (high dose). **Dobutamine:** beta-1 > beta-2 agonist.",
        use: "**Dopamine:** cardiogenic shock, severe bradycardia. **Dobutamine:** cardiogenic shock, cardiac stress testing.",
        se: "Tachyarrhythmias, increased myocardial oxygen demand.",
        ci: "Dobutamine: HOCM. Dopamine: tachyarrhythmias.",
        pk: "Continuous IV infusion only.",
        pearl: "**Dobutamine** increases myocardial oxygen demand, unmasking ischemia during stress echocardiography."
      },
      {
        name: "Phenylephrine & Isoproterenol",
        aka: "Phenylephrine (Neo-Synephrine) · Isoproterenol (Isuprel)",
        summary: "Selective alpha or beta agonists with opposing hemodynamic effects.",
        moa: "**Phenylephrine:** selective alpha-1 agonist. **Isoproterenol:** beta-1 and beta-2 agonist.",
        use: "**Phenylephrine:** nasal decongestant, neurogenic shock, mydriatic. **Isoproterenol:** electrophysiology evaluation, refractory bradycardia.",
        se: "**Phenylephrine:** reflex bradycardia, severe hypertension. **Isoproterenol:** tachycardia, flushing, hypotension.",
        ci: "Phenylephrine: severe hypertension. Isoproterenol: angina, tachyarrhythmias.",
        pk: "Rapid onset and offset.",
        pearl: "**Phenylephrine** increases MAP and causes a predictable reflex bradycardia. **Isoproterenol** increases heart rate and decreases MAP, widening the pulse pressure."
      },
      {
        name: "Beta Blockers (β-blockers)",
        aka: "Propranolol · Metoprolol (Lopressor, Toprol XL) · Atenolol · Carvedilol · Labetalol · Bisoprolol · Esmolol · Nadolol · Timolol",
        summary: "Competitive antagonists of **beta-adrenergic receptors**.",
        moa: "Block beta-1 and/or beta-2 receptors to decrease cAMP, lowering heart rate, contractility, and renin release.",
        use: "Hypertension, stable angina, **HFrEF**, post-MI, SVT, hyperthyroidism symptom control.",
        se: "**Bradycardia, AV block, bronchospasm**, masked hypoglycemia symptoms.",
        ci: "Decompensated HF, cardiogenic shock, heart block, severe asthma (non-selective).",
        pk: "**Propranolol** crosses the BBB. **Esmolol** is ultra-short acting. **Carvedilol/labetalol** block alpha-1 and beta receptors.",
        pearl: "**Carvedilol, metoprolol succinate, and bisoprolol** reduce mortality in heart failure. Never use non-selective beta-blockers in cocaine toxicity due to unopposed alpha vasoconstriction."
      },
      {
        name: "Alpha Blockers (α-blockers)",
        aka: "Prazosin · Terazosin · Doxazosin · Tamsulosin (Flomax) · Phentolamine · Phenoxybenzamine",
        summary: "Alpha-adrenergic antagonists causing vasodilation and smooth muscle relaxation.",
        moa: "**Prazosin/tamsulosin:** block alpha-1. **Phentolamine/phenoxybenzamine:** block alpha-1 and alpha-2.",
        use: "**Tamsulosin:** BPH. **Prazosin:** PTSD nightmares, hypertension. **Phentolamine:** tyramine crisis. **Phenoxybenzamine:** pheochromocytoma.",
        se: "**First-dose orthostatic hypotension**, reflex tachycardia.",
        ci: "Concurrent use of PDE5 inhibitors (additive hypotension).",
        pk: "**Phenoxybenzamine** is irreversible. **Phentolamine** is reversible.",
        pearl: "For pheochromocytoma, you must give alpha blockers (**phenoxybenzamine**) before beta blockers to avoid a catastrophic hypertensive crisis."
      },
      {
        name: "Local Anesthetics",
        aka: "Lidocaine · Bupivacaine · Ropivacaine · Mepivacaine · Prilocaine · Benzocaine · Cocaine · Tetracaine",
        summary: "Agents that block sodium channels to prevent action potential propagation.",
        moa: "Reversibly block **voltage-gated Na+ channels** from the inner membrane side. Bind preferentially to activated/inactivated channels.",
        use: "Local infiltration, nerve blocks, epidural anesthesia. **Lidocaine** for ventricular arrhythmias.",
        se: "**CNS excitation followed by seizures**. Bupivacaine is highly cardiotoxic. Benzocaine causes methemoglobinemia.",
        ci: "Bupivacaine IV for arrhythmias; epinephrine co-administration on end-arteries (digits/nose).",
        pk: "**Amides** have two 'i's in their name and undergo hepatic metabolism. **Esters** have one 'i' and are hydrolyzed by plasma esterases.",
        pearl: "Infected, acidic tissue requires higher doses because the drug becomes ionized and cannot cross the cell membrane. Treat **bupivacaine cardiotoxicity** with lipid emulsion."
      },
      {
        name: "Neuromuscular Blocking Agents",
        aka: "Succinylcholine (Anectine) · Rocuronium (Zemuron) · Vecuronium · Pancuronium · Atracurium · Cisatracurium · Mivacurium",
        summary: "Paralytics acting at the neuromuscular junction for intubation and surgery.",
        moa: "**Succinylcholine:** depolarizing agonist at nicotinic ACh receptors. **Rocuronium/vecuronium:** non-depolarizing competitive antagonists.",
        use: "Endotracheal intubation, surgical muscle relaxation.",
        se: "**Succinylcholine:** severe hyperkalemia, malignant hyperthermia. **Non-depolarizing:** histamine release (atracurium).",
        ci: "Succinylcholine: major burns, crush injuries, denervation injuries (hyperkalemia risk).",
        pk: "**Succinylcholine** is rapidly hydrolyzed by pseudocholinesterase. **Atracurium** degrades spontaneously via Hofmann elimination.",
        pearl: "**Succinylcholine** is absolutely contraindicated in burn or crush injuries >24 hours old due to life-threatening hyperkalemia. Treat malignant hyperthermia with **dantrolene**."
      },
      {
        name: "Barbiturates",
        aka: "Phenobarbital · Thiopental · Methohexital · Pentobarbital · Secobarbital · Primidone",
        summary: "GABA-A potentiators causing severe dose-dependent CNS depression.",
        moa: "Bind GABA-A receptor to increase the **DURATION** of chloride channel opening.",
        use: "Seizures, anesthesia induction (thiopental), elevated ICP.",
        se: "**Severe respiratory and cardiovascular depression**, tolerance, dependence.",
        ci: "**Porphyria** (induces heme synthesis enzymes).",
        pk: "Strong CYP450 inducers. Thiopental has a short duration due to rapid redistribution into fat.",
        pearl: "Barbiturates increase the **duration** of chloride channel opening and can open the channel independent of GABA at high doses, making them lethal in overdose."
      },
      {
        name: "Amphetamines & Methylphenidate",
        aka: "Amphetamine (Adderall) · Dextroamphetamine · Methamphetamine · Methylphenidate (Ritalin, Concerta) · Lisdexamfetamine (Vyvanse)",
        summary: "Indirect sympathomimetics that increase synaptic monoamines.",
        moa: "**Amphetamines:** reverse DAT/NET transporters. **Methylphenidate:** block DAT/NET reuptake.",
        use: "ADHD, narcolepsy, binge eating disorder.",
        se: "Hypertension, tachycardia, **insomnia, anorexia, psychosis**, high addiction potential.",
        ci: "MAO inhibitor use within 14 days; severe cardiovascular disease.",
        pk: "Renal elimination is pH-dependent (alkalinizing urine increases reabsorption).",
        pearl: "**Amphetamines** actively push dopamine into the synapse by reversing the transporter. Treat severe overdose with cooling, benzodiazepines, and phentolamine."
      }
    ]
  }
],

cv: [
  {
    group: "RAAS / Antihypertensives",
    drugs: [
      {
        name: "ACE Inhibitors",
        aka: "Lisinopril · Enalapril · Captopril · Ramipril · Benazepril · Fosinopril · Quinapril · Perindopril",
        summary: "Inhibit ACE to lower blood pressure and reduce cardiac remodeling.",
        moa: "Inhibit **ACE** to decrease Ang II and aldosterone. Increases **bradykinin**.",
        use: "Hypertension, HFrEF, post-MI, diabetic nephropathy.",
        se: "**CATCH:** Cough, Angioedema, Teratogen, increased Creatinine, Hyperkalemia.",
        ci: "Pregnancy, bilateral renal artery stenosis, history of angioedema.",
        pk: "Most are prodrugs and renally cleared.",
        pearl: "**Cough and angioedema** are directly caused by increased bradykinin. Teratogenic effects include fetal renal tubular dysgenesis."
      },
      {
        name: "ARBs (Angiotensin Receptor Blockers)",
        aka: "Losartan (Cozaar) · Valsartan (Diovan) · Irbesartan · Candesartan · Olmesartan · Telmisartan · Azilsartan",
        summary: "Block AT1 receptors without increasing bradykinin.",
        moa: "Competitive antagonism at the **AT1 receptor**, decreasing vasoconstriction and aldosterone.",
        use: "Hypertension, HFrEF, diabetic nephropathy. Alternative for ACE inhibitor intolerance.",
        se: "**Hyperkalemia, increased creatinine, teratogenic.** No cough.",
        ci: "Pregnancy, bilateral renal artery stenosis.",
        pk: "Hepatobiliary elimination is more common here than with ACE inhibitors.",
        pearl: "ARBs do not affect bradykinin metabolism, making them the exact correct choice for a patient with an ACE inhibitor-induced cough."
      },
      {
        name: "Aliskiren",
        aka: "Aliskiren (Tekturna)",
        summary: "Direct renin inhibitor.",
        moa: "Directly inhibits **renin**, preventing the cleavage of angiotensinogen to Ang I.",
        use: "Hypertension.",
        se: "Hyperkalemia, increased creatinine, hypotension.",
        ci: "Pregnancy; combination with ACEi or ARB in diabetics.",
        pk: "Poor oral bioavailability.",
        pearl: "**Aliskiren** uniquely lowers plasma renin activity (PRA), whereas ACE inhibitors and ARBs increase PRA due to the loss of negative feedback."
      },
      {
        name: "Hydralazine & Direct Vasodilators",
        aka: "Hydralazine (Apresoline) · Minoxidil · Diazoxide",
        summary: "Direct arteriolar vasodilators that profoundly reduce afterload.",
        moa: "**Hydralazine:** increases cGMP to relax smooth muscle. **Minoxidil:** opens K+ ATP channels to hyperpolarize the membrane.",
        use: "Hydralazine: severe hypertension, pregnancy hypertension, HFrEF in African Americans. Minoxidil: refractory hypertension, androgenic alopecia.",
        se: "**Reflex tachycardia, severe fluid retention.** Hydralazine: drug-induced lupus. Minoxidil: hypertrichosis.",
        ci: "Severe tachycardia, dissecting aortic aneurysm.",
        pk: "Hydralazine is acetylated in the liver.",
        pearl: "Always co-administer with a beta-blocker to prevent reflex tachycardia. **Hydralazine** causes drug-induced lupus characterized by **anti-histone antibodies**."
      }
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide (Lasix) · Bumetanide · Torsemide · Ethacrynic Acid",
        summary: "Highly potent diuretics blocking the Na-K-2Cl cotransporter.",
        moa: "Inhibit **NKCC2** in the thick ascending limb, disrupting the medullary osmotic gradient.",
        use: "Edematous states (heart failure, cirrhosis), acute pulmonary edema, hypercalcemia.",
        se: "**Hypokalemia, metabolic alkalosis, hypomagnesemia, hypocalcemia, ototoxicity, hyperuricemia.**",
        ci: "Severe sulfa allergy (use ethacrynic acid instead).",
        pk: "Highly protein bound. Acts from the luminal side of the tubule.",
        pearl: "**Loops lose calcium.** Use ethacrynic acid strictly for patients with severe sulfa allergies who require diuresis."
      },
      {
        name: "Thiazide Diuretics",
        aka: "Hydrochlorothiazide (HCTZ) · Chlorthalidone · Metolazone · Indapamide",
        summary: "Distal convoluted tubule diuretics for hypertension and calcium stones.",
        moa: "Inhibit **NaCl cotransporter** in the DCT. Enhances calcium reabsorption.",
        use: "Hypertension, calcium nephrolithiasis, nephrogenic diabetes insipidus.",
        se: "**Hypokalemia, hyponatremia, metabolic alkalosis.** HyperGLUC (HyperGlycemia, HyperLipidemia, HyperUricemia, HyperCalcemia).",
        ci: "Sulfa allergy, anuria.",
        pk: "Ineffective at low GFR (use loops instead).",
        pearl: "**Thiazides increase serum calcium**, making them the drug of choice for preventing recurrent calcium kidney stones."
      },
      {
        name: "K⁺-Sparing Diuretics",
        aka: "Spironolactone (Aldactone) · Eplerenone (Inspra) · Amiloride · Triamterene",
        summary: "Distal diuretics that retain potassium and reduce remodeling.",
        moa: "**Spironolactone/eplerenone:** mineralocorticoid receptor antagonists. **Amiloride/triamterene:** block ENaC channels in the collecting duct.",
        use: "Heart failure, primary hyperaldosteronism, PCOS (spironolactone).",
        se: "**Hyperkalemia.** Spironolactone: gynecomastia, amenorrhea.",
        ci: "Hyperkalemia, severe renal failure.",
        pk: "Spironolactone acts via nuclear gene transcription, so onset takes days.",
        pearl: "**Spironolactone** reduces mortality in heart failure via anti-fibrotic effects. **Eplerenone** lacks the anti-androgenic side effects."
      },
      {
        name: "Carbonic Anhydrase Inhibitors",
        aka: "Acetazolamide (Diamox) · Dorzolamide (Trusopt, topical) · Brinzolamide (topical) · Methazolamide",
        summary: "Proximal tubule diuretics that cause bicarbonate wasting.",
        moa: "Inhibit **carbonic anhydrase**, decreasing bicarbonate and Na+ reabsorption in the PCT. Decreases aqueous humor production.",
        use: "Glaucoma, idiopathic intracranial hypertension, altitude sickness.",
        se: "**Normal anion gap metabolic acidosis**, hypokalemia, paresthesias, sulfa allergy cross-reactivity.",
        ci: "Severe liver disease (increases ammonia).",
        pk: "Renal excretion.",
        pearl: "Treats **altitude sickness** by inducing a metabolic acidosis, which stimulates a compensatory respiratory alkalosis to increase tissue oxygenation."
      },
      {
        name: "Mannitol",
        aka: "Mannitol (Osmitrol)",
        summary: "Osmotic diuretic for acute reduction of intracranial or intraocular pressure.",
        moa: "Increases tubular fluid osmolarity to pull water into the lumen. Draws fluid out of brain parenchyma into the vasculature.",
        use: "Elevated ICP, acute angle-closure glaucoma.",
        se: "**Initial volume expansion**, pulmonary edema, hypernatremia.",
        ci: "Severe heart failure, active intracranial bleeding.",
        pk: "Given IV. Does not cross an intact blood-brain barrier.",
        pearl: "Absolutely contraindicated in **severe heart failure** due to the initial transient volume expansion before diuresis occurs."
      }
    ]
  },
  {
    group: "Antihypertensive Adjuncts",
    drugs: [
      {
        name: "Calcium Channel Blockers (CCBs)",
        aka: "Amlodipine (Norvasc) · Nifedipine · Felodipine · Nicardipine — Dihydropyridines (DHP) | Verapamil · Diltiazem — Non-DHPs",
        summary: "Block L-type calcium channels in vascular or cardiac tissue.",
        moa: "**DHPs (amlodipine):** vascular smooth muscle vasodilation. **Non-DHPs (verapamil/diltiazem):** cardiac SA/AV node depression.",
        use: "Hypertension, stable angina. **Non-DHPs:** SVT, AFib rate control.",
        se: "**DHPs:** peripheral edema, reflex tachycardia, flushing. **Non-DHPs:** bradycardia, AV block, severe constipation (verapamil).",
        ci: "Non-DHPs: HFrEF, heart block.",
        pk: "Amlodipine has a very long half-life.",
        pearl: "DHP-induced **peripheral edema** is caused by precapillary arteriolar vasodilation, not fluid overload, and therefore does not respond to diuretics."
      }
    ]
  },
  {
    group: "Antiarrhythmics",
    drugs: [
      {
        name: "Adenosine",
        aka: "Adenosine (Adenocard)",
        summary: "Endogenous purine nucleoside for acute SVT.",
        moa: "Activates **A1 adenosine receptors** on the AV node, increasing K+ efflux and hyperpolarizing the cell.",
        use: "First-line for acute PSVT.",
        se: "Transient chest pain, flushing, bronchospasm, sense of impending doom.",
        ci: "Asthma, high-degree AV block.",
        pk: "IV rapid push only. Half-life is 10 seconds.",
        pearl: "Effects are competitively blocked by xanthines like **caffeine and theophylline**. Strongly contraindicated in asthma."
      },
      {
        name: "Class IA Antiarrhythmics",
        aka: "Quinidine · Procainamide · Disopyramide",
        summary: "Intermediate Na+ channel blockers that prolong the QRS and QTc.",
        moa: "Block fast Na+ channels and K+ channels.",
        use: "AFib conversion, VT, WPW.",
        se: "**Torsades de pointes.** Quinidine: cinchonism, increased digoxin levels. Procainamide: drug-induced lupus.",
        ci: "Prolonged QTc, heart block.",
        pk: "Procainamide is acetylated in the liver.",
        pearl: "**Procainamide** causes lupus in slow acetylators. **Quinidine** roughly doubles serum digoxin levels by displacing it from tissue binding sites."
      },
      {
        name: "Class IB Antiarrhythmics",
        aka: "Lidocaine · Mexiletine · Phenytoin",
        summary: "Fast Na+ channel blockers selective for ischemic tissue.",
        moa: "Block fast Na+ channels with fast kinetics. Shortens action potential duration.",
        use: "Acute ventricular arrhythmias post-MI, digitalis-induced arrhythmias.",
        se: "**CNS toxicity** (perioral numbness, tinnitus, seizures).",
        ci: "High-degree AV block.",
        pk: "Lidocaine is IV only due to extensive first-pass metabolism.",
        pearl: "Selectively binds to Na+ channels in the **inactivated state**, which is prevalent in depolarized, ischemic myocardium."
      },
      {
        name: "Class IC Antiarrhythmics",
        aka: "Flecainide (Tambocor) · Propafenone (Rythmol)",
        summary: "Potent Na+ channel blockers with the most pronounced QRS widening.",
        moa: "Block fast Na+ channels with slow on/off kinetics.",
        use: "AFib rhythm control in structurally normal hearts.",
        se: "**Highly proarrhythmic.**",
        ci: "Structural heart disease, post-MI.",
        pk: "Propafenone has beta-blocking effects.",
        pearl: "Absolutely contraindicated in **structural heart disease or post-MI**. The CAST trial showed they increase mortality in these populations."
      },
      {
        name: "Class III Antiarrhythmics",
        aka: "Amiodarone (Cordarone, Pacerone) · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "K+ channel blockers that prolong repolarization.",
        moa: "Block K+ channels to increase action potential duration. Amiodarone blocks Na+, Ca2+, and beta receptors as well.",
        use: "Amiodarone: VF/pulseless VT, AFib rhythm control.",
        se: "**Amiodarone:** Pulmonary fibrosis, hyper/hypothyroidism, hepatotoxicity, corneal deposits, blue-gray skin. **Sotalol:** Torsades de pointes.",
        ci: "Amiodarone: severe sinus node dysfunction, iodine allergy.",
        pk: "Amiodarone has a half-life of 40-55 days and is highly lipophilic.",
        pearl: "Every patient starting amiodarone needs baseline and annual **TFTs, LFTs, and PFTs**."
      },
      {
        name: "Digoxin",
        aka: "Digoxin (Lanoxin) · Digitalis",
        summary: "Cardiac glycoside with a narrow therapeutic index.",
        moa: "Inhibits Na+/K+-ATPase to increase intracellular Na+, slowing the Na+/Ca2+ exchanger. Increased intracellular Ca2+ increases inotropy. Increases vagal tone.",
        use: "Heart failure symptom control, AFib rate control.",
        se: "Cholinergic effects, **xanthopsia (yellow visual halos)**, virtually any arrhythmia.",
        ci: "VFib, WPW, AV block.",
        pk: "Renally cleared.",
        pearl: "**Hypokalemia** strongly sensitizes the myocardium to digoxin toxicity. Treat severe toxicity with Digibind."
      },
      {
        name: "Magnesium Sulfate",
        aka: "Magnesium Sulfate (MgSO₄) · Magnesium (IV)",
        summary: "Divalent cation that stabilizes the cardiac membrane.",
        moa: "Blocks voltage-gated Ca2+ channels.",
        use: "**Torsades de pointes** (drug of choice), eclampsia seizure prevention.",
        se: "Loss of deep tendon reflexes, respiratory depression, cardiac arrest.",
        ci: "Heart block, renal failure (caution).",
        pk: "Renally eliminated.",
        pearl: "Always check the **patellar reflex** to monitor for toxicity. Loss of reflexes precedes respiratory depression."
      },
      {
        name: "Ranolazine & Ivabradine",
        aka: "Ranolazine (Ranexa) · Ivabradine (Corlanor)",
        summary: "Novel antianginal and heart failure agents distinct from traditional beta-blockers.",
        moa: "**Ranolazine:** blocks late Na+ current to decrease diastolic wall tension. **Ivabradine:** blocks the HCN channel (If 'funny' current) in the SA node.",
        use: "Ranolazine: refractory stable angina. Ivabradine: HFrEF with HR >70 bpm.",
        se: "Ranolazine: prolonged QTc. Ivabradine: visual brightness (phosphenes), bradycardia.",
        ci: "Ivabradine: Atrial fibrillation.",
        pk: "Hepatic CYP3A4 metabolism.",
        pearl: "**Ivabradine** is the only drug that lowers heart rate without affecting blood pressure or contractility. It requires sinus rhythm to work."
      },
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone (Primacor) · Nesiritide (Natrecor)",
        summary: "Positive inotropes for acute decompensated heart failure.",
        moa: "**Milrinone:** inhibits PDE3 to increase cAMP, increasing inotropy and causing vasodilation. **Nesiritide:** recombinant human BNP.",
        use: "Short-term management of severe acute decompensated heart failure.",
        se: "Hypotension, arrhythmias.",
        ci: "Milrinone: severe outflow tract obstruction.",
        pk: "IV continuous infusion.",
        pearl: "**Milrinone** is an 'inodilator' that bypasses beta-receptors, making it highly useful for patients already on maximum beta-blocker therapy."
      }
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins (HMG-CoA Reductase Inhibitors)",
        aka: "Atorvastatin (Lipitor) · Rosuvastatin (Crestor) · Simvastatin · Pravastatin · Lovastatin",
        summary: "First-line lipid-lowering agents targeting LDL.",
        moa: "Competitive inhibition of **HMG-CoA reductase**. Upregulates hepatic LDL receptors.",
        use: "ASCVD risk reduction, familial hypercholesterolemia.",
        se: "**Myopathy**, hepatotoxicity, teratogenic.",
        ci: "Pregnancy, active liver disease, concurrent gemfibrozil.",
        pk: "Atorvastatin, simvastatin, lovastatin are heavily CYP3A4 dependent.",
        pearl: "**Rosuvastatin and pravastatin** are not CYP3A4 substrates, making them much safer in transplant patients or patients on strong inhibitors."
      },
      {
        name: "Fibrates & Niacin",
        aka: "Gemfibrozil (Lopid) · Fenofibrate (Tricor) · Niacin (Niaspan)",
        summary: "Second-line lipid agents targeting triglycerides and HDL.",
        moa: "**Fibrates:** activate PPAR-alpha to increase LPL. **Niacin:** inhibits hepatic VLDL secretion.",
        use: "Fibrates: severe hypertriglyceridemia. Niacin: isolated low HDL.",
        se: "Fibrates: myopathy, cholesterol gallstones. Niacin: intense flushing, hyperuricemia.",
        ci: "Fibrates: severe hepatic/renal disease. Niacin: active gout, peptic ulcer disease.",
        pk: "Gemfibrozil strongly inhibits statin metabolism.",
        pearl: "Never combine **gemfibrozil** with a statin due to massive rhabdomyolysis risk. **Niacin flushing** is prostaglandin-mediated and prevented by aspirin."
      }
    ]
  }
],
blood: [
  {
    group: "Anticoagulants",
    drugs: [
      {
        name: "Heparin (UFH & LMWH)",
        aka: "Unfractionated Heparin · Enoxaparin (Lovenox) · Dalteparin · Fondaparinux",
        summary: "Parenteral anticoagulants that potentiate antithrombin III.",
        moa: "Bind **antithrombin III**, inhibiting thrombin (Factor IIa) and Factor Xa.",
        use: "Acute PE/DVT, ACS, pregnancy (does NOT cross the placenta).",
        se: "Bleeding, **Heparin-Induced Thrombocytopenia (HIT)**, osteoporosis with long-term UFH.",
        ci: "Active bleeding, history of HIT, severe thrombocytopenia.",
        pk: "UFH is monitored with aPTT. LMWH is monitored with anti-Xa. Reversal: **protamine sulfate**.",
        pearl: "**HIT Type II** requires immediate cessation of all heparin products and initiation of a direct thrombin inhibitor like argatroban."
      },
      {
        name: "Warfarin",
        aka: "Warfarin (Coumadin)",
        summary: "Vitamin K epoxide reductase inhibitor.",
        moa: "Inhibits **VKOR**, depleting active clotting factors II, VII, IX, X and proteins C and S.",
        use: "Chronic AFib, mechanical heart valves, VTE prophylaxis.",
        se: "Bleeding, **skin necrosis**, teratogenic (bone deformities).",
        ci: "Pregnancy, active bleeding, severe hepatic disease.",
        pk: "Monitored with INR. Reversal: **Vitamin K** (slow), **FFP or 4-factor PCC** (fast).",
        pearl: "Early administration causes a **transient hypercoagulable state** due to rapid Protein C depletion; always bridge with heparin for at least 5 days."
      },
      {
        name: "Direct Oral Anticoagulants (DOACs)",
        aka: "Apixaban (Eliquis) · Rivaroxaban (Xarelto) · Dabigatran (Pradaxa)",
        summary: "Target-specific oral anticoagulants that do not require antithrombin III.",
        moa: "**Apixaban/rivaroxaban:** direct Factor Xa inhibitors. **Dabigatran:** direct thrombin inhibitor.",
        use: "Nonvalvular AFib, VTE treatment and prophylaxis.",
        se: "Bleeding.",
        ci: "**Mechanical heart valves**, active bleeding, severe renal impairment.",
        pk: "No routine monitoring is required. Reversal: Idarucizumab (dabigatran), Andexanet alfa (Xa inhibitors).",
        pearl: "Absolutely contraindicated in patients with **mechanical heart valves**."
      }
    ]
  },

  {
    group: "Antiplatelets",
    drugs: [
      {
        name: "Aspirin (Antiplatelet)",
        aka: "Aspirin (ASA)",
        summary: "Irreversible COX-1 inhibitor.",
        moa: "Irreversibly acetylates **COX-1**, blocking thromboxane A2 synthesis.",
        use: "ACS, ASCVD secondary prevention.",
        se: "GI bleeding, ulceration, **Reye syndrome** in children.",
        ci: "Children with viral infections, NSAID-induced asthma.",
        pk: "Antiplatelet effect lasts **7 to 10 days**, which aligns with the platelet lifespan.",
        pearl: "Aspirin overdose uniquely causes an early **respiratory alkalosis** followed by a late **mixed metabolic acidosis**."
      },
      {
        name: "P2Y12 & GP IIb/IIIa Blockers",
        aka: "Clopidogrel (Plavix) · Ticagrelor (Brilinta) · Prasugrel | Abciximab · Eptifibatide · Tirofiban",
        summary: "ADP receptor and fibrinogen cross-linking inhibitors.",
        moa: "**P2Y12 inhibitors:** block ADP receptors. **GP IIb/IIIa inhibitors:** block fibrinogen cross-linking between platelets.",
        use: "Dual antiplatelet therapy post-PCI, ACS.",
        se: "Bleeding. Ticagrelor causes dyspnea. Abciximab causes thrombocytopenia.",
        ci: "Prior intracranial hemorrhage, active bleeding.",
        pk: "**Clopidogrel** is a prodrug requiring CYP2C19 activation.",
        pearl: "**Omeprazole** inhibits CYP2C19 and reduces clopidogrel activation; use pantoprazole instead."
      },
      {
        name: "PDE3/PDE5 Inhibitors (Antiplatelet)",
        aka: "Cilostazol (Pletal) · Dipyridamole",
        summary: "Agents that increase cAMP/cGMP to inhibit platelet aggregation.",
        moa: "**Cilostazol** inhibits PDE3. **Dipyridamole** inhibits PDE and blocks adenosine reuptake.",
        use: "Cilostazol: peripheral arterial disease (claudication). Dipyridamole: stress testing, stroke prevention.",
        se: "Headache, flushing. Cilostazol causes tachycardia.",
        ci: "Cilostazol: heart failure of any severity.",
        pk: "Dipyridamole effects are reversed by aminophylline.",
        pearl: "Dipyridamole stress testing unmasks CAD via a **coronary steal phenomenon**. Cilostazol is contraindicated in heart failure."
      },
      {
        name: "tPA & Thrombolytics",
        aka: "Alteplase (tPA) · Tenecteplase (TNKase) · Reteplase · Streptokinase",
        summary: "Agents that dissolve existing fibrin clots.",
        moa: "Convert **plasminogen to plasmin**, which cleaves fibrin.",
        use: "Acute ischemic stroke, massive PE, STEMI.",
        se: "Intracranial hemorrhage, severe bleeding.",
        ci: "Prior intracranial hemorrhage, recent surgery, severe uncontrolled hypertension.",
        pk: "Extremely short half-life. Reversal: **aminocaproic acid or tranexamic acid**.",
        pearl: "Any prior intracranial hemorrhage is an **absolute contraindication** to thrombolytic therapy."
      }
    ]
  },
  {
    group: "Gout Agents",
    drugs: [
      {
        name: "Allopurinol & Febuxostat",
        aka: "Allopurinol (Zyloprim) · Febuxostat (Uloric)",
        summary: "Xanthine oxidase inhibitors.",
        moa: "Inhibit **xanthine oxidase** to reduce uric acid synthesis.",
        use: "Chronic gout prophylaxis, tumor lysis syndrome prevention.",
        se: "Hypersensitivity (DRESS/Stevens-Johnson syndrome).",
        ci: "Concurrent use of azathioprine or 6-MP without extreme dose reduction.",
        pk: "Allopurinol is a prodrug.",
        pearl: "Allopurinol inhibits the metabolism of **azathioprine and 6-MP**; you must drastically reduce their doses if co-administered to prevent fatal myelosuppression."
      },
      {
        name: "Colchicine",
        aka: "Colchicine (Colcrys)",
        summary: "Microtubule inhibitor for acute gout.",
        moa: "Binds tubulin to inhibit microtubule polymerization and block **neutrophil chemotaxis**.",
        use: "Acute gout flares, gout prophylaxis, pericarditis.",
        se: "Diarrhea, nausea, myopathy.",
        ci: "Severe renal or hepatic impairment.",
        pk: "CYP3A4 substrate.",
        pearl: "Colchicine does NOT lower uric acid levels. **Diarrhea** is the most common dose-limiting side effect."
      },
      {
        name: "Probenecid",
        aka: "Probenecid",
        summary: "Uricosuric agent.",
        moa: "Inhibits **URAT1** in the proximal tubule to decrease uric acid reabsorption.",
        use: "Chronic gout prophylaxis.",
        se: "Uric acid nephrolithiasis.",
        ci: "History of uric acid kidney stones, sulfa allergy.",
        pk: "Competes with OAT transporters, artificially prolonging penicillin levels.",
        pearl: "**Aspirin** blocks its uricosuric effect. Patients require high fluid intake to prevent kidney stones."
      }
    ]
  }
],

neuro: [
  {
    group: "Anxiolytics & Sedatives",
    drugs: [
      {
        name: "Benzodiazepines",
        aka: "Lorazepam (Ativan) · Diazepam (Valium) · Alprazolam (Xanax) · Midazolam (Versed) · Clonazepam · Temazepam · Oxazepam",
        summary: "GABA-A potentiators with high abuse potential.",
        moa: "Bind the GABA-A receptor to increase the **FREQUENCY** of chloride channel opening.",
        use: "Status epilepticus (lorazepam), alcohol withdrawal, procedural sedation.",
        se: "Respiratory depression, tolerance, physical dependence, paradoxical excitement.",
        ci: "Myasthenia gravis, acute narrow-angle glaucoma, severe respiratory insufficiency.",
        pk: "**Lorazepam, Oxazepam, and Temazepam** bypass hepatic P450 metabolism and undergo direct glucuronidation.",
        pearl: "The reversal agent is **flumazenil**, but it can precipitate life-threatening seizures in benzo-dependent patients."
      },
      {
        name: "Non-Benzodiazepine Hypnotics & Ramelteon",
        aka: "Zolpidem (Ambien) · Zaleplon (Sonata) · Eszopiclone (Lunesta) | Ramelteon",
        summary: "Targeted sleep aids with specialized receptor activity.",
        moa: "**Z-drugs:** selectively modulate GABA-A alpha-1 subunits. **Ramelteon:** MT1/MT2 melatonin agonist.",
        use: "Insomnia.",
        se: "**Z-drugs:** complex sleep behaviors (sleep-driving), amnesia.",
        ci: "Complex sleep behaviors with prior use.",
        pk: "Zaleplon has an ultra-short half-life.",
        pearl: "**Ramelteon** is the only hypnotic with no abuse potential, making it the safest choice for elderly patients."
      },
      {
        name: "Propofol, Etomidate & Ketamine",
        aka: "Propofol (Diprivan) · Etomidate (Amidate) · Ketamine (Ketalar)",
        summary: "IV induction anesthetics with distinct hemodynamic profiles.",
        moa: "**Propofol/Etomidate:** potentiate GABA-A. **Ketamine:** blocks NMDA receptors.",
        use: "Anesthesia induction. **Etomidate:** hemodynamically unstable patients. **Ketamine:** asthmatics or trauma patients.",
        se: "**Propofol:** hypotension. **Etomidate:** adrenal suppression. **Ketamine:** emergence delirium.",
        ci: "Propofol: egg/soy allergy. Etomidate: septic shock (adrenal suppression).",
        pk: "Rapid redistribution into fat terminates their clinical effects, NOT metabolism.",
        pearl: "**Etomidate** preserves blood pressure but blocks 11-beta-hydroxylase, suppressing cortisol. **Ketamine** raises blood pressure and bronchodilates."
      },
      {
        name: "Inhaled Anesthetics",
        aka: "Halothane · Isoflurane · Sevoflurane · Desflurane · Nitrous Oxide",
        summary: "Volatile halogenated agents.",
        moa: "Potentiate GABA-A and glycine receptors; inhibit NMDA receptors.",
        use: "General anesthesia maintenance.",
        se: "**Malignant hyperthermia**, hepatotoxicity (halothane), expansion of trapped gas (nitrous oxide).",
        ci: "History of malignant hyperthermia.",
        pk: "MAC (minimum alveolar concentration) is inversely proportional to lipid solubility and potency.",
        pearl: "Malignant hyperthermia is triggered by volatile agents and succinylcholine due to a **ryanodine receptor mutation**. Treat with **dantrolene**."
      }
    ]
  },
  
  {
    group: "Analgesics",
    drugs: [
      {
        name: "Opioid Analgesics",
        aka: "Morphine · Fentanyl · Hydromorphone (Dilaudid) · Oxycodone · Methadone · Meperidine · Codeine",
        summary: "Mu, kappa, and delta receptor agonists.",
        moa: "Agonists at opioid receptors. They open K+ channels (hyperpolarization) and close presynaptic Ca2+ channels to decrease neurotransmitter release.",
        use: "Moderate to severe pain, cough suppression, acute pulmonary edema.",
        se: "**Respiratory depression, constipation, miosis.**",
        ci: "Severe respiratory instability, concurrent MAOI use (meperidine).",
        pk: "Morphine active metabolites accumulate in renal failure. Methadone has a variable, long half-life.",
        pearl: "**Tolerance does NOT develop to constipation or miosis.** Meperidine causes seizures via normeperidine accumulation in renal failure."
      },
      {
        name: "NSAIDs",
        aka: "Ibuprofen · Naproxen · Ketorolac · Diclofenac · Indomethacin · Celecoxib · Acetaminophen (Tylenol)",
        summary: "Cyclooxygenase inhibitors.",
        moa: "Reversibly inhibit **COX-1 and COX-2** to reduce prostaglandin synthesis. **Celecoxib** is COX-2 selective. **Acetaminophen** lacks peripheral anti-inflammatory effects.",
        use: "Pain, fever, acute gout, closure of PDA (indomethacin).",
        se: "GI ulceration, interstitial nephritis, renal ischemia. Acetaminophen: hepatotoxicity.",
        ci: "Active GI bleeding, severe renal impairment, CABG surgery (celecoxib).",
        pk: "The toxic metabolite of acetaminophen is NAPQI.",
        pearl: "Treat acetaminophen toxicity with **N-acetylcysteine** to replenish glutathione. **Celecoxib** spares the GI tract but increases cardiovascular risk."
      },
      {
        name: "Naloxone, Naltrexone & Buprenorphine",
        aka: "Naloxone (Narcan) · Naltrexone (Vivitrol) · Buprenorphine (Subutex, Suboxone)",
        summary: "Opioid receptor modulators.",
        moa: "**Naloxone/Naltrexone:** competitive opioid antagonists. **Buprenorphine:** high-affinity partial mu-agonist.",
        use: "Naloxone: acute overdose. Naltrexone: relapse prevention. Buprenorphine: opioid use disorder.",
        se: "Precipitated withdrawal.",
        ci: "Naltrexone/Buprenorphine: patients currently physically dependent on full opioid agonists.",
        pk: "Naloxone has a shorter half-life than most opioids, frequently requiring repeat dosing.",
        pearl: "**Buprenorphine's** extremely high affinity will displace full agonists and precipitate severe withdrawal if given to an actively using patient."
      }
    ]
  },
  {
    group: "Antidepressants",
    drugs: [
      {
        name: "SSRIs & SNRIs",
        aka: "Fluoxetine (Prozac) · Sertraline (Zoloft) · Citalopram · Escitalopram · Paroxetine | Venlafaxine (Effexor) · Duloxetine (Cymbalta)",
        summary: "Monoamine reuptake inhibitors.",
        moa: "Inhibit **SERT** (and **NET** for SNRIs) to increase synaptic serotonin and norepinephrine.",
        use: "First-line for depression, anxiety, PTSD, OCD.",
        se: "Sexual dysfunction, GI upset, SIADH, **serotonin syndrome**.",
        ci: "Concurrent MAOI use (allow 14 days washout).",
        pk: "Fluoxetine has a very long half-life. Paroxetine has the shortest half-life and worst withdrawal syndrome.",
        pearl: "Serotonin syndrome features **hyperreflexia and clonus**, distinguishing it from Neuroleptic Malignant Syndrome (lead-pipe rigidity)."
      },
      {
        name: "Tricyclic Antidepressants (TCAs)",
        aka: "Amitriptyline · Nortriptyline · Imipramine · Desipramine · Clomipramine · Doxepin",
        summary: "Non-selective reuptake inhibitors with dirty receptor profiles.",
        moa: "Block SERT, NET, muscarinic, histamine, alpha-1, and fast Na+ channels.",
        use: "Neuropathic pain, migraine prophylaxis, resistant depression.",
        se: "**3 Cs: Coma, Convulsions, Cardiotoxicity.** Anticholinergic effects, orthostatic hypotension.",
        ci: "Recent MI, concurrent MAOI use, prolonged QTc.",
        pk: "Highly protein-bound and lipophilic (not dialyzable).",
        pearl: "Cardiotoxicity presents as a **wide QRS complex**. Treat TCA overdose aggressively with **IV sodium bicarbonate**."
      },
      {
        name: "MAO Inhibitors (MAOIs)",
        aka: "Phenelzine · Tranylcypromine · Isocarboxazid · Selegiline",
        summary: "Monoamine oxidase inhibitors.",
        moa: "Irreversibly inhibit **MAO-A and MAO-B** to increase synaptic monoamines.",
        use: "Atypical depression, Parkinson disease (selegiline).",
        se: "**Hypertensive crisis**, serotonin syndrome.",
        ci: "Concurrent use of SSRIs, SNRIs, TCAs, or tyramine-rich foods.",
        pk: "Requires a strict 2-week washout period before starting other serotonergic drugs.",
        pearl: "Consuming **tyramine-rich foods** (aged cheese, wine) bypasses degraded gut MAO, causing a massive NE release and hypertensive crisis. Treat with phentolamine."
      },
      {
        name: "Atypical Antidepressants",
        aka: "Bupropion (Wellbutrin) · Mirtazapine (Remeron) · Trazodone",
        summary: "Mechanistically diverse agents.",
        moa: "**Bupropion:** inhibits DAT and NET. **Mirtazapine:** alpha-2 antagonist. **Trazodone:** 5-HT2 antagonist and alpha-1 blocker.",
        use: "Bupropion: depression, smoking cessation. Mirtazapine: depression with insomnia and weight loss. Trazodone: insomnia.",
        se: "Bupropion: seizures. Mirtazapine: weight gain, sedation. Trazodone: priapism.",
        ci: "Bupropion: eating disorders, seizure disorders.",
        pk: "Bupropion is a CYP2D6 inhibitor.",
        pearl: "**Bupropion** does NOT cause sexual dysfunction. It is absolutely contraindicated in patients with eating disorders due to seizure risk."
      }
    ]
  },
  {
    group: "Mood Stabilizers",
    drugs: [
      {
        name: "Lithium",
        aka: "Lithium Carbonate",
        summary: "Monovalent cation mood stabilizer.",
        moa: "Inhibits **inositol monophosphatase**.",
        use: "Bipolar disorder acute mania and maintenance.",
        se: "Tremor, nephrogenic diabetes insipidus, hypothyroidism, **Ebstein anomaly** (teratogen).",
        ci: "Severe renal disease, severe cardiovascular disease.",
        pk: "Renally excreted unchanged.",
        pearl: "Lithium acts like sodium in the kidneys. **Thiazides and NSAIDs** cause proximal tubule lithium reabsorption, precipitating fatal toxicity."
      }
    ]
  },
  {
    group: "Antiepileptics",
    drugs: [
      {
        name: "Valproate",
        aka: "Valproic Acid · Divalproex (Depakote)",
        summary: "Broadest-spectrum antiepileptic.",
        moa: "Increases GABA, blocks Na+ and T-type Ca2+ channels.",
        use: "Generalized and focal seizures, absence seizures, bipolar mania.",
        se: "Hepatotoxicity, **neural tube defects**, pancreatitis, weight gain.",
        ci: "Hepatic disease, urea cycle disorders, pregnancy.",
        pk: "Inhibits hepatic enzymes.",
        pearl: "Highly teratogenic. It inhibits lamotrigine metabolism, doubling lamotrigine levels and massively increasing the risk of **Stevens-Johnson syndrome**."
      },
      {
        name: "Phenytoin",
        aka: "Phenytoin (Dilantin) · Fosphenytoin",
        summary: "Na+ channel blocker with zero-order kinetics.",
        moa: "Blocks voltage-gated Na+ channels in the **inactivated state**.",
        use: "Focal and tonic-clonic seizures, status epilepticus.",
        se: "**Gingival hyperplasia**, hirsutism, nystagmus, osteomalacia, fetal hydantoin syndrome.",
        ci: "Sinus bradycardia, heart block.",
        pk: "Strong CYP450 inducer. Follows **zero-order (saturable) kinetics**.",
        pearl: "Zero-order kinetics mean small dose increases can cause disproportionate, massive spikes in blood levels."
      },
      {
        name: "Carbamazepine",
        aka: "Carbamazepine (Tegretol)",
        summary: "Na+ channel blocker.",
        moa: "Blocks voltage-gated Na+ channels.",
        use: "Focal seizures, **trigeminal neuralgia** (first-line).",
        se: "SIADH, aplastic anemia, Stevens-Johnson syndrome (HLA-B*1502).",
        ci: "Bone marrow depression, concurrent MAOI use.",
        pk: "Strong CYP inducer AND **autoinducer**.",
        pearl: "Screen patients of Asian descent for the **HLA-B*1502 allele** before prescribing to prevent severe SJS/TEN."
      },
      {
        name: "Lamotrigine",
        aka: "Lamotrigine (Lamictal)",
        summary: "Broad-spectrum AED.",
        moa: "Blocks voltage-gated Na+ channels and inhibits glutamate release.",
        use: "Epilepsy, bipolar depression.",
        se: "**Stevens-Johnson syndrome**, rash, diplopia.",
        ci: "Hypersensitivity to the drug.",
        pk: "Metabolism is strongly inhibited by valproate.",
        pearl: "SJS risk is highest with rapid dose titration. The titration schedule MUST be halved if the patient is concurrently taking **valproate**."
      },
      {
        name: "Ethosuximide",
        aka: "Ethosuximide (Zarontin)",
        summary: "Narrow-spectrum agent for absence seizures.",
        moa: "Blocks **T-type Ca2+ channels** in the thalamus.",
        use: "Childhood absence epilepsy.",
        se: "GI distress, fatigue, headache.",
        ci: "Hypersensitivity.",
        pk: "Metabolized by CYP3A4.",
        pearl: "The ONLY antiepileptic selective exclusively for absence seizures. EFGHI: **E**thosuximide, **F**atigue, **G**I, **H**eadache, **I**tching."
      },
      {
        name: "Topiramate",
        aka: "Topiramate (Topamax)",
        summary: "Broad-spectrum AED with carbonic anhydrase activity.",
        moa: "Blocks Na+ channels, enhances GABA, blocks AMPA, and inhibits carbonic anhydrase.",
        use: "Migraine prophylaxis, weight loss, epilepsy.",
        se: "Cognitive dulling ('Dopamax'), **kidney stones**, weight loss.",
        ci: "Recent alcohol use (with extended-release formulation).",
        pk: "Mild CYP3A4 inducer.",
        pearl: "Promotes **calcium phosphate kidney stones** via carbonic anhydrase inhibition and metabolic acidosis."
      },
      {
        name: "Levetiracetam",
        aka: "Levetiracetam (Keppra)",
        summary: "AED with a unique synaptic target.",
        moa: "Binds the **SV2A** protein to modulate synaptic vesicle exocytosis.",
        use: "Broad-spectrum epilepsy.",
        se: "**Psychiatric symptoms** (agitation, irritability, psychosis).",
        ci: "Hypersensitivity.",
        pk: "Renally cleared with essentially NO CYP interactions.",
        pearl: "Safest pharmacokinetic profile for adding to complex regimens, but highly associated with **'Keppra rage'** (aggression)."
      },
      {
        name: "Gabapentin, Tiagabine & Vigabatrin",
        aka: "Gabapentin (Neurontin) · Pregabalin (Lyrica) | Tiagabine · Vigabatrin",
        summary: "GABAergic and calcium channel modulators.",
        moa: "**Gabapentin:** binds alpha-2-delta subunit of Ca2+ channels. **Vigabatrin:** irreversibly inhibits GABA transaminase. **Tiagabine:** inhibits GABA reuptake.",
        use: "Gabapentin: neuropathic pain. Vigabatrin: infantile spasms.",
        se: "Gabapentin: sedation, peripheral edema. Vigabatrin: **permanent visual field loss**.",
        ci: "Hypersensitivity.",
        pk: "Gabapentin relies on saturable absorption.",
        pearl: "Gabapentin does NOT bind GABA receptors despite its name. **Vigabatrin** requires strict monitoring for irreversible blindness."
      }
    ]
  },
  {
    group: "Antipsychotics",
    drugs: [
      {
        name: "First Generation (FGAs)",
        aka: "Haloperidol (Haldol) · Fluphenazine · Chlorpromazine · Thioridazine",
        summary: "D2 receptor antagonists targeting positive symptoms.",
        moa: "Competitive antagonism at **D2 dopamine receptors** in the mesolimbic pathway.",
        use: "Schizophrenia, acute agitation, Tourette syndrome.",
        se: "**Extrapyramidal symptoms (EPS)**, Neuroleptic Malignant Syndrome (NMS), hyperprolactinemia, QT prolongation.",
        ci: "Parkinson disease, severe CNS depression.",
        pk: "High-potency agents (haloperidol) cause more EPS. Low-potency agents (chlorpromazine) cause more anticholinergic side effects.",
        pearl: "Treat acute dystonia with **benztropine**. Treat akathisia with **beta-blockers**. Treat NMS with **dantrolene**."
      },
      {
        name: "Second Generation (SGAs)",
        aka: "Aripiprazole (Abilify) · Clozapine (Clozaril) · Olanzapine (Zyprexa) · Quetiapine (Seroquel) · Risperidone (Risperdal) · Ziprasidone",
        summary: "Serotonin-dopamine antagonists.",
        moa: "**5-HT2A and D2 antagonists.** Aripiprazole is a D2 partial agonist.",
        use: "Schizophrenia, bipolar disorder, treatment-resistant depression.",
        se: "**Metabolic syndrome** (weight gain, dyslipidemia, hyperglycemia). Clozapine: agranulocytosis and myocarditis.",
        ci: "Dementia-related psychosis in the elderly (increased mortality).",
        pk: "Clozapine requires strict mandatory CBC monitoring via a REMS program.",
        pearl: "**Clozapine** is the ONLY antipsychotic proven to reduce suicidality in schizophrenia. Olanzapine and clozapine carry the absolute highest metabolic risk."
      }
    ]
  },
  {
    group: "Parkinson's Agents",
    drugs: [
      {
        name: "Levodopa / Carbidopa",
        aka: "Sinemet",
        summary: "Dopamine precursor therapy.",
        moa: "**Levodopa** crosses the BBB and converts to dopamine. **Carbidopa** inhibits peripheral DOPA decarboxylase.",
        use: "Parkinson disease.",
        se: "Dyskinesias, hallucinations, wearing-off phenomenon.",
        ci: "Narrow-angle glaucoma, concurrent non-selective MAOI use.",
        pk: "Short half-life leads to motor fluctuations.",
        pearl: "**Carbidopa** does NOT cross the BBB. By blocking peripheral conversion, it reduces systemic side effects like nausea and increases CNS levodopa availability."
      },
      {
        name: "Dopamine Agonists",
        aka: "Pramipexole (Mirapex) · Ropinirole (Requip) · Bromocriptine · Apomorphine",
        summary: "Direct receptor activators.",
        moa: "Direct agonists at **D2 and D3 receptors**.",
        use: "Parkinson disease, restless legs syndrome.",
        se: "**Impulse control disorders** (gambling, hypersexuality), sleep attacks.",
        ci: "History of psychotic disorders (caution).",
        pk: "Pramipexole is renally excreted; ropinirole is hepatically metabolized.",
        pearl: "Pramipexole and ropinirole are first-line for **restless legs syndrome**. Patients MUST be explicitly warned about impulsive behaviors."
      },
      {
        name: "Entacapone & Tolcapone (COMT Inhibitors)",
        aka: "Entacapone (Comtan) · Tolcapone",
        summary: "Peripheral levodopa extenders.",
        moa: "Inhibit **COMT** to prevent the peripheral degradation of levodopa.",
        use: "Adjunct to carbidopa/levodopa to reduce the wearing-off effect.",
        se: "Entacapone: harmless orange urine. Tolcapone: fulminant hepatotoxicity.",
        ci: "Tolcapone: liver disease.",
        pk: "Must be administered simultaneously with each dose of levodopa.",
        pearl: "These drugs have absolutely **NO anti-Parkinsonian effect** if given without levodopa."
      }
    ]
  }
],

micro: [
  {
    group: "Antibacterials",
    drugs: [
      {
        name: "Beta-Lactams",
        aka: "Penicillins · Cephalosporins · Carbapenems · Monobactams (Aztreonam)",
        summary: "Cell wall synthesis inhibitors.",
        moa: "Bind **Penicillin-Binding Proteins (PBPs)** to halt peptidoglycan cross-linking.",
        use: "Broad utility. Ampicillin: Listeria. Nafcillin: MSSA. Ceftriaxone: meningitis. Cefepime/Carbapenems: Pseudomonas. Aztreonam: Penicillin-allergic patients.",
        se: "Hypersensitivity, interstitial nephritis. Carbapenems (imipenem): seizures. Ceftriaxone: biliary sludge.",
        ci: "Severe IgE-mediated penicillin allergy (except Aztreonam).",
        pk: "Nafcillin and ceftriaxone have biliary excretion (no renal dose adjustment needed).",
        pearl: "**No cephalosporin covers Listeria or Enterococcus.** Imipenem lowers the seizure threshold significantly in renal failure."
      },

      {
        name: "Vancomycin",
        aka: "Vancomycin",
        summary: "Glycopeptide for gram-positives.",
        moa: "Binds **D-Ala-D-Ala** to inhibit peptidoglycan synthesis.",
        use: "MRSA, oral for C. difficile.",
        se: "**Red man syndrome**, nephrotoxicity, ototoxicity.",
        ci: "Hypersensitivity.",
        pk: "Monitored via AUC/MIC.",
        pearl: "**Red man syndrome** is a rate-related histamine release, NOT an IgE allergy; slow the infusion and administer antihistamines."
      },
      {
        name: "Protein Synthesis Inhibitors",
        aka: "Aminoglycosides · Tetracyclines · Macrolides · Clindamycin · Linezolid",
        summary: "Ribosomal inhibitors.",
        moa: "Bind **30S** (Aminoglycosides, Tetracyclines) or **50S** (Macrolides, Clindamycin, Linezolid) ribosomal subunits to block translation.",
        use: "Aminoglycosides: severe gram-negatives. Doxycycline: tick-borne illnesses. Macrolides: CAP, STIs. Clindamycin: anaerobes above the diaphragm. Linezolid: MRSA, VRE.",
        se: "Aminoglycosides: nephrotoxicity, ototoxicity. Tetracyclines: tooth discoloration. Macrolides: QTc prolongation. Clindamycin: C. difficile. Linezolid: serotonin syndrome.",
        ci: "Tetracyclines: pregnancy, children <8 years old.",
        pk: "Doxycycline is safe in renal failure (fecal elimination).",
        pearl: "**Aminoglycosides** are entirely ineffective against anaerobes because they require oxygen for cellular uptake. Linezolid has mild MAOI activity."
      },
      {
        name: "Fluoroquinolones & Misc. Antibacterials",
        aka: "Ciprofloxacin · Levofloxacin | Daptomycin | Metronidazole",
        summary: "DNA and membrane targets.",
        moa: "**Fluoroquinolones:** inhibit DNA gyrase/topoisomerase IV. **Daptomycin:** depolarizes gram-positive membranes. **Metronidazole:** produces free radicals in anaerobes.",
        use: "Fluoroquinolones: UTIs, GI infections. Daptomycin: MRSA right-sided endocarditis. Metronidazole: C. difficile, Giardia.",
        se: "Fluoroquinolones: **tendon rupture**, QTc prolongation. Daptomycin: myopathy. Metronidazole: **disulfiram-like reaction**.",
        ci: "Fluoroquinolones: pregnancy, myasthenia gravis.",
        pk: "Daptomycin is inactivated by surfactant.",
        pearl: "Never use **daptomycin** for pneumonia due to surfactant inactivation. Avoid alcohol entirely with **metronidazole** to prevent severe vomiting."
      },
      {
        name: "TMP-SMX",
        aka: "Trimethoprim-Sulfamethoxazole (Bactrim)",
        summary: "Sequential folate synthesis inhibitors.",
        moa: "**Sulfamethoxazole** inhibits dihydropteroate synthase. **Trimethoprim** inhibits dihydrofolate reductase.",
        use: "PCP prophylaxis and treatment, UTIs, CA-MRSA.",
        se: "Stevens-Johnson syndrome, bone marrow suppression, **hyperkalemia**.",
        ci: "Sulfa allergy, folate deficiency, term pregnancy.",
        pk: "Trimethoprim artificially elevates serum creatinine by competing for tubular secretion.",
        pearl: "**Trimethoprim** acts exactly like amiloride in the collecting duct, blocking ENaC and causing hyperkalemia."
      }
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin · Isoniazid (INH) · Pyrazinamide (PZA) · Ethambutol",
        summary: "Four-drug regimen for active TB.",
        moa: "**Rifampin:** inhibits RNA polymerase. **INH:** blocks mycolic acid. **PZA:** disrupts membrane potential. **Ethambutol:** blocks arabinosyl transferase.",
        use: "Active and latent TB.",
        se: "Rifampin: red/orange fluids. INH: hepatotoxicity, **peripheral neuropathy**. PZA: hyperuricemia. Ethambutol: **optic neuritis**.",
        ci: "Active severe liver disease.",
        pk: "Rifampin is a MASSIVE CYP450 inducer.",
        pearl: "Always prescribe **Vitamin B6 (pyridoxine)** with INH to prevent neuropathy. Rifampin's CYP induction destroys the efficacy of oral contraceptives."
      }
    ]
  },
  {
    group: "Antifungals & Antivirals",
    drugs: [
      {
        name: "Antifungals",
        aka: "Amphotericin B · Fluconazole · Voriconazole · Caspofungin · Micafungin",
        summary: "Ergosterol and cell wall disruptors.",
        moa: "**Amphotericin B:** forms pores via ergosterol. **Azoles:** inhibit CYP51 to block ergosterol synthesis. **Echinocandins:** block beta-glucan synthesis.",
        use: "Amphotericin B: severe systemic mycoses. Azoles: Candida, Aspergillus. Echinocandins: severe candidemia.",
        se: "Amphotericin B: **severe nephrotoxicity**, infusion reactions. Azoles: hepatotoxicity, CYP inhibition, QTc prolongation.",
        ci: "Azoles: concurrent use with strong CYP3A4 substrates.",
        pk: "Liposomal Amphotericin B dramatically reduces renal toxicity.",
        pearl: "**Voriconazole** causes reversible visual disturbances (photopsia) and carries a high risk of drug interactions."
      },
      {
        name: "Antivirals (Herpes/CMV & HIV)",
        aka: "Acyclovir · Ganciclovir · Foscarnet | NRTIs · NNRTIs · Protease Inhibitors (PIs) · Integrase Inhibitors (INSTIs)",
        summary: "DNA polymerase and reverse transcriptase inhibitors.",
        moa: "**Acyclovir/Ganciclovir:** chain terminators requiring viral kinase activation. **NRTIs/NNRTIs:** block reverse transcriptase. **PIs:** block HIV protease. **INSTIs:** block integrase.",
        use: "Acyclovir: HSV/VZV. Ganciclovir: CMV. HIV drugs: HAART.",
        se: "Acyclovir: crystalline nephropathy. Ganciclovir: myelosuppression. Abacavir: **HLA-B*5701 hypersensitivity**.",
        ci: "Abacavir: HLA-B*5701 positive patients.",
        pk: "Ritonavir is used at sub-therapeutic doses strictly to inhibit CYP3A4 and boost other protease inhibitors.",
        pearl: "**Acyclovir** is ONLY active in infected cells because it requires phosphorylation by viral thymidine kinase. Check **HLA-B*5701** before starting abacavir to prevent fatal hypersensitivity."
      }
    ]
  }
],
gi: [
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "PPIs (Proton Pump Inhibitors)",
        aka: "Omeprazole (Prilosec) · Pantoprazole (Protonix) · Lansoprazole · Esomeprazole",
        summary: "Irreversible inhibitors of the gastric H+/K+-ATPase proton pump.",
        moa: "Prodrugs that covalently bind the **H+/K+-ATPase pump** in parietal cells, permanently inactivating it.",
        use: "GERD, peptic ulcer disease, H. pylori eradication, Zollinger-Ellison syndrome.",
        se: "Hypomagnesemia, increased risk of **C. difficile infection**, osteoporosis/fractures with chronic use.",
        ci: "Concurrent use with certain HIV drugs (rilpivirine).",
        pk: "Requires an acidic environment for activation. Omeprazole is a CYP2C19 inhibitor.",
        pearl: "**Omeprazole** blocks CYP2C19, preventing the activation of clopidogrel. Use pantoprazole if dual therapy is required."
      },
      {
        name: "H2 Receptor Blockers",
        aka: "Famotidine (Pepcid) · Cimetidine · Nizatidine",
        summary: "Competitive H2 receptor antagonists that reduce gastric acid secretion.",
        moa: "Reversibly block **H2 receptors** on gastric parietal cells to decrease cAMP and proton pump activity.",
        use: "GERD, peptic ulcer disease.",
        se: "**Cimetidine:** potent CYP450 inhibitor, anti-androgenic effects (gynecomastia, impotence), CNS effects in the elderly.",
        ci: "Known hypersensitivity.",
        pk: "Renally eliminated.",
        pearl: "**Cimetidine** is a notoriously dirty drug due to its broad CYP450 inhibition and anti-androgenic side effects. Famotidine is the preferred agent."
      },
      {
        name: "Ondansetron & 5-HT3 Antagonists",
        aka: "Ondansetron (Zofran) · Granisetron · Palonosetron",
        summary: "Central and peripheral serotonin antagonists for severe nausea.",
        moa: "Block **5-HT3 receptors** on vagal afferents in the GI tract and the area postrema.",
        use: "Chemotherapy-induced and postoperative nausea and vomiting.",
        se: "**QTc prolongation**, severe constipation, headache.",
        ci: "Concurrent use of apomorphine (profound hypotension).",
        pk: "Hepatic metabolism.",
        pearl: "The risk of QTc prolongation is dose-dependent. Metoclopramide and prochlorperazine act via D2 antagonism, unlike ondansetron."
      },
      {
        name: "Misoprostol & GI Mucosal Agents",
        aka: "Misoprostol (Cytotec) · Sucralfate (Carafate) · Bismuth",
        summary: "Cytoprotective agents that coat the stomach or replace prostaglandins.",
        moa: "**Misoprostol:** PGE1 analog that increases gastric mucus/bicarbonate and decreases acid. **Sucralfate:** polymerizes in acid to coat ulcers.",
        use: "Misoprostol: NSAID-induced ulcer prevention, cervical ripening, medical abortion. Sucralfate: stress ulcer prophylaxis.",
        se: "Misoprostol: diarrhea, uterine contractions. Bismuth: black stools. Sucralfate: constipation, binds other drugs.",
        ci: "Misoprostol: pregnancy (unless used specifically for cervical ripening/abortion).",
        pk: "Sucralfate requires an acidic pH to work.",
        pearl: "**Misoprostol** is an absolute contraindication in pregnancy unless intended for labor induction or termination, as it will cause uterine rupture or abortion."
      },
      {
        name: "Antidiarrheals & Loperamide",
        aka: "Loperamide (Imodium) · Diphenoxylate-Atropine (Lomotil)",
        summary: "Peripheral opioid agonists that slow GI motility.",
        moa: "Bind peripheral **mu-opioid receptors** in the gut myenteric plexus to decrease peristalsis.",
        use: "Acute nonspecific diarrhea.",
        se: "Constipation, **toxic megacolon**.",
        ci: "Bloody diarrhea, high fever, or C. difficile infection.",
        pk: "Loperamide does not cross the BBB at therapeutic doses due to P-glycoprotein efflux.",
        pearl: "Never use loperamide for bloody or suspected infectious diarrhea (e.g., Shigella, C. difficile), as slowing motility can precipitate **toxic megacolon**."
      }
    ]
  }
],

endo: [
  {
    group: "Diabetes",
    drugs: [
      {
        name: "Insulin & Insulin Secretagogues",
        aka: "Insulin (Regular, Lispro, Glargine) | Sulfonylureas (Glipizide, Glyburide) · Meglitinides",
        summary: "Agents that replace or force the secretion of endogenous insulin.",
        moa: "**Insulin:** binds tyrosine kinase receptor. **Sulfonylureas:** close ATP-sensitive K+ channels on beta cells, depolarizing the membrane to trigger calcium influx and insulin release.",
        use: "Type 1 and Type 2 DM. IV Regular insulin for DKA and hyperkalemia.",
        se: "**Hypoglycemia, weight gain**, lipodystrophy (insulin). Sulfonylureas: disulfiram-like reaction.",
        ci: "Sulfonylureas: DKA, severe hepatic/renal dysfunction.",
        pk: "Glyburide has long-acting active metabolites that accumulate in renal failure.",
        pearl: "Sulfonylurea-induced hypoglycemia is glucose-independent and can be prolonged. Treat **hyperkalemia** with insulin to drive potassium intracellularly, but always co-administer dextrose."
      },
      {
        name: "Metformin",
        aka: "Metformin (Glucophage)",
        summary: "Biguanide that decreases hepatic gluconeogenesis.",
        moa: "Inhibits mitochondrial complex I to activate AMPK, decreasing **hepatic glucose production** and increasing peripheral insulin sensitivity.",
        use: "First-line for Type 2 DM, PCOS.",
        se: "GI upset, vitamin B12 deficiency, **lactic acidosis**. Weight neutral.",
        ci: "Severe renal impairment (eGFR < 30), acute heart failure, IV contrast studies.",
        pk: "Renally eliminated unchanged.",
        pearl: "Lactic acidosis risk is highest in patients with renal failure. Metformin is contraindicated if **eGFR < 30**."
      },
      {
        name: "GLP-1 Agonists & DPP-4 Inhibitors",
        aka: "Exenatide · Liraglutide · Semaglutide (Ozempic) | Sitagliptin (Januvia) · Linagliptin",
        summary: "Incretin pathway modifiers.",
        moa: "**GLP-1 Agonists:** activate GLP-1 receptors to increase glucose-dependent insulin release and delay gastric emptying. **DPP-4 Inhibitors:** prevent GLP-1 breakdown.",
        use: "Type 2 DM, weight loss (GLP-1).",
        se: "GLP-1: nausea, **acute pancreatitis**. DPP-4: nasopharyngitis.",
        ci: "GLP-1: personal or family history of medullary thyroid carcinoma or MEN2.",
        pk: "GLP-1 agonists are subcutaneous injections. DPP-4 inhibitors are oral.",
        pearl: "GLP-1 agonists are absolutely contraindicated in patients with a personal or family history of **medullary thyroid carcinoma** or **MEN2**."
      },
      {
        name: "SGLT2 Inhibitors",
        aka: "Canagliflozin · Dapagliflozin · Empagliflozin (Jardiance)",
        summary: "Proximal tubule inhibitors that cause therapeutic glycosuria.",
        moa: "Block the **sodium-glucose cotransporter 2 (SGLT2)** in the proximal convoluted tubule to prevent glucose reabsorption.",
        use: "Type 2 DM, HFrEF, CKD with proteinuria.",
        se: "**Genital mycotic infections**, UTIs, **euglycemic DKA**, osmotic diuresis/hypotension.",
        ci: "Severe renal impairment, dialysis.",
        pk: "Efficacy for glucose lowering declines with falling GFR.",
        pearl: "**Euglycemic DKA** is a life-threatening complication where DKA occurs despite near-normal blood glucose levels. Always hold SGLT2 inhibitors prior to surgery."
      },
      {
        name: "Thiazolidinediones (TZDs)",
        aka: "Pioglitazone (Actos) · Rosiglitazone",
        summary: "PPAR-gamma agonists that increase peripheral insulin sensitivity.",
        moa: "Bind the **PPAR-gamma nuclear receptor** to alter gene transcription, increasing GLUT4 expression and adiponectin.",
        use: "Type 2 DM.",
        se: "**Weight gain, fluid retention, heart failure exacerbation**, atypical fractures, hepatotoxicity.",
        ci: "New York Heart Association Class III/IV heart failure.",
        pk: "Slow onset of action (weeks) due to nuclear transcription mechanism.",
        pearl: "TZDs cause severe fluid retention and are absolutely **contraindicated in heart failure**."
      }
    ]
  },
  {
    group: "Bone / Mineral",
    drugs: [
      {
        name: "Cinacalcet & Sevelamer",
        aka: "Cinacalcet (Sensipar) · Sevelamer (Renvela)",
        summary: "Agents managing CKD mineral bone disease.",
        moa: "**Cinacalcet:** allosterically activates the calcium-sensing receptor on the parathyroid gland, decreasing PTH release. **Sevelamer:** non-absorbable polymer that binds dietary phosphate in the gut.",
        use: "Secondary hyperparathyroidism in CKD (cinacalcet), hyperphosphatemia (sevelamer).",
        se: "Cinacalcet: hypocalcemia. Sevelamer: GI upset, prevents absorption of fat-soluble vitamins.",
        ci: "Cinacalcet: hypocalcemia. Sevelamer: bowel obstruction.",
        pk: "Sevelamer must be taken with meals to bind dietary phosphate.",
        pearl: "**Cinacalcet** 'tricks' the parathyroid into sensing high calcium, dropping PTH. **Sevelamer** lowers phosphate without adding a calcium load, preventing vascular calcification."
      },
      {
        name: "Bisphosphonates & Osteoporosis Drugs",
        aka: "Alendronate (Fosamax) · Risedronate · Zoledronic acid | Denosumab | Teriparatide",
        summary: "Anti-resorptive and anabolic bone agents.",
        moa: "**Bisphosphonates:** bind hydroxyapatite and inhibit osteoclast farnesyl pyrophosphate synthase. **Denosumab:** monoclonal antibody against RANK-L. **Teriparatide:** recombinant PTH analog.",
        use: "Osteoporosis, Paget disease, hypercalcemia of malignancy.",
        se: "Bisphosphonates: **pill esophagitis**, osteonecrosis of the jaw, atypical femoral fractures. Teriparatide: osteosarcoma risk.",
        ci: "Bisphosphonates: inability to stand/sit upright for 30 min, severe renal impairment.",
        pk: "Oral bisphosphonates have <1% bioavailability and must be taken on an empty stomach.",
        pearl: "Patients taking oral bisphosphonates MUST remain upright for 30 minutes to prevent severe **esophagitis**."
      }
    ]
  },
  {
    group: "Hormones",
    drugs: [
      {
        name: "ADH / Desmopressin & Vaptans",
        aka: "Desmopressin (DDAVP) | Tolvaptan · Conivaptan",
        summary: "Modulators of free water retention in the collecting duct.",
        moa: "**Desmopressin:** selective V2 agonist increasing aquaporin-2 insertion. **Vaptans:** competitive V2 receptor antagonists causing aquaresis.",
        use: "Desmopressin: central DI, von Willebrand disease, hemophilia A. Vaptans: euvolemic/hypervolemic hyponatremia (SIADH).",
        se: "Desmopressin: hyponatremia. Vaptans: overly rapid sodium correction, hepatotoxicity.",
        ci: "Vaptans: hypovolemic hyponatremia, urgent need to raise serum sodium.",
        pk: "Desmopressin stimulates the release of vWF and Factor VIII from endothelial cells.",
        pearl: "Correcting sodium faster than 10-12 mEq/L per 24 hours with vaptans risks **osmotic demyelination syndrome**."
      },
      {
        name: "Levothyroxine & Antithyroid Drugs",
        aka: "Levothyroxine (Synthroid) | Methimazole · Propylthiouracil (PTU)",
        summary: "Thyroid hormone replacement and synthesis inhibitors.",
        moa: "**Levothyroxine:** synthetic T4. **Methimazole/PTU:** inhibit thyroid peroxidase (TPO). PTU also blocks peripheral conversion of T4 to T3.",
        use: "Levothyroxine: hypothyroidism. Methimazole/PTU: hyperthyroidism, thyroid storm.",
        se: "Levothyroxine: arrhythmias. Thioamides: **agranulocytosis**, rash. PTU: severe hepatotoxicity.",
        ci: "PTU: highly preferred over methimazole strictly in the first trimester of pregnancy.",
        pk: "Levothyroxine has a 7-day half-life.",
        pearl: "Warn patients on thioamides to report any fever or sore throat immediately due to the risk of **agranulocytosis**."
      },
      {
        name: "Corticosteroids",
        aka: "Prednisone · Dexamethasone · Hydrocortisone · Methylprednisolone",
        summary: "Potent anti-inflammatory and immunosuppressive agents.",
        moa: "Bind intracellular glucocorticoid receptors, translocate to the nucleus, and alter gene transcription (inhibit NF-kB).",
        use: "Autoimmune diseases, asthma/COPD exacerbations, adrenal insufficiency.",
        se: "**Hyperglycemia, osteoporosis, central obesity, muscle weakness, cataracts, avascular necrosis, adrenal suppression.**",
        ci: "Systemic fungal infections, live vaccines.",
        pk: "Dexamethasone does NOT cross-react with cortisol immunoassays.",
        pearl: "Never abruptly stop systemic corticosteroids after prolonged use due to profound HPA axis suppression, which can precipitate a fatal **adrenal crisis**."
      },
      {
        name: "Oral Contraceptives",
        aka: "Ethinyl Estradiol / Progestin combinations",
        summary: "Estrogen and progestin combinations to prevent ovulation.",
        moa: "Provide negative feedback to the pituitary to inhibit the LH surge, thicken cervical mucus, and thin the endometrium.",
        use: "Contraception, PCOS, endometriosis, dysmenorrhea.",
        se: "**Venous thromboembolism**, hypertension, breakthrough bleeding.",
        ci: "Smokers >35 years old, history of DVT/PE, migraine with aura, breast cancer.",
        pk: "CYP3A4 inducers (e.g., rifampin, carbamazepine) drastically reduce OCP efficacy.",
        pearl: "OCPs are absolutely contraindicated in **smokers over age 35** and patients with **migraine with aura** due to severe stroke and cardiovascular risks."
      }
    ]
  }
],

pulm: [
  {
    group: "Pulmonary",
    drugs: [
      {
        name: "SABAs & LABAs",
        aka: "Albuterol · Levalbuterol | Salmeterol · Formoterol",
        summary: "Beta-2 adrenergic agonists for bronchodilation.",
        moa: "Activate **beta-2 receptors** on airway smooth muscle to increase cAMP, leading to smooth muscle relaxation.",
        use: "Albuterol: acute asthma rescue. Salmeterol: asthma/COPD maintenance.",
        se: "**Tremor, tachycardia, hypokalemia.**",
        ci: "LABAs as monotherapy in asthma.",
        pk: "LABAs have lipophilic side chains that prolong their duration of action to 12-24 hours.",
        pearl: "LABAs MUST NEVER be used as monotherapy in asthma due to an increased risk of asthma-related death. They must always be combined with an **inhaled corticosteroid**."
      },
      {
        name: "Inhaled Corticosteroids (ICS)",
        aka: "Fluticasone · Budesonide · Beclomethasone",
        summary: "Topical airway anti-inflammatory agents.",
        moa: "Inhibit pro-inflammatory gene transcription to reduce eosinophil recruitment, airway edema, and hyperresponsiveness.",
        use: "First-line controller therapy for persistent asthma.",
        se: "**Oropharyngeal candidiasis (thrush)**, dysphonia.",
        ci: "Primary treatment of status asthmaticus.",
        pk: "High first-pass metabolism limits systemic side effects from swallowed drug.",
        pearl: "ICS drugs are controllers, not rescue inhalers. Patients MUST rinse their mouth and spit after use to prevent **oral thrush**."
      },
      {
        name: "Leukotriene Antagonists",
        aka: "Montelukast (Singulair) · Zafirlukast | Zileuton",
        summary: "Inhibitors of the leukotriene inflammatory pathway.",
        moa: "**Montelukast/Zafirlukast:** block CysLT1 receptors. **Zileuton:** inhibits 5-lipoxygenase.",
        use: "Aspirin-exacerbated respiratory disease (AERD), mild persistent asthma.",
        se: "**Montelukast:** neuropsychiatric effects. **Zileuton:** hepatotoxicity.",
        ci: "Zileuton: active liver disease.",
        pk: "Oral administration.",
        pearl: "Montelukast is uniquely highly effective for **AERD** (Samter's triad: asthma, aspirin sensitivity, nasal polyps) because aspirin shunts arachidonic acid exclusively down the 5-lipoxygenase pathway."
      }
    ]
  }
],

oncology: [
  {
    group: "Chemotherapy & Immunosuppressants",
    drugs: [
      {
        name: "Antimetabolites",
        aka: "Methotrexate (MTX) · 5-Fluorouracil (5-FU)",
        summary: "S-phase specific nucleotide and folate analogs.",
        moa: "**Methotrexate:** inhibits dihydrofolate reductase (DHFR). **5-FU:** inhibits thymidylate synthase.",
        use: "MTX: leukemia, RA, ectopic pregnancy. 5-FU: GI malignancies.",
        se: "MTX: myelosuppression, hepatotoxicity, **pulmonary fibrosis**, mucositis. 5-FU: hand-foot syndrome.",
        ci: "Pregnancy, severe renal/hepatic impairment.",
        pk: "MTX is renally eliminated.",
        pearl: "Methotrexate toxicity is reversed by **leucovorin** (folinic acid), which bypasses DHFR."
      },
      {
        name: "Alkylating Agents",
        aka: "Cyclophosphamide · Ifosfamide | Cisplatin · Carboplatin",
        summary: "Cell-cycle nonspecific DNA cross-linkers.",
        moa: "Form covalent adducts to DNA (usually at guanine N7), causing **cross-links** that halt replication.",
        use: "Cyclophosphamide: autoimmune disease, lymphomas. Cisplatin: solid tumors.",
        se: "Cyclophosphamide: **hemorrhagic cystitis**. Cisplatin: **nephrotoxicity, ototoxicity**.",
        ci: "Severe bone marrow suppression.",
        pk: "Cyclophosphamide is a prodrug requiring hepatic activation.",
        pearl: "Hemorrhagic cystitis from cyclophosphamide is caused by the toxic metabolite **acrolein**. It is prevented by co-administering **mesna** and aggressive hydration."
      },
      {
        name: "Microtubule-Targeting Agents",
        aka: "Paclitaxel · Docetaxel (Taxanes) | Vincristine · Vinblastine (Vinca Alkaloids)",
        summary: "M-phase specific spindle poisons.",
        moa: "**Taxanes:** stabilize microtubules, preventing depolymerization. **Vincristine:** prevents microtubule polymerization.",
        use: "Breast, lung, ovarian cancers, lymphomas, leukemias.",
        se: "Taxanes: severe peripheral neuropathy. Vincristine: **profound peripheral and autonomic neuropathy** (constipation, ileus).",
        ci: "Severe baseline neuropathy.",
        pk: "Hepatic metabolism.",
        pearl: "**Intrathecal administration of vincristine is uniformly fatal.** It MUST only be given IV."
      },
      {
        name: "Anthracyclines",
        aka: "Doxorubicin (Adriamycin) · Daunorubicin",
        summary: "Intercalators and topoisomerase II inhibitors.",
        moa: "Intercalate DNA, inhibit topoisomerase II, and generate **free oxygen radicals**.",
        use: "Breast cancer, lymphomas, sarcomas.",
        se: "**Dilated cardiomyopathy**, myelosuppression, red/orange urine.",
        ci: "Pre-existing severe cardiac dysfunction.",
        pk: "Dose-reduce in hepatic dysfunction.",
        pearl: "Doxorubicin causes a dose-dependent, irreversible dilated cardiomyopathy. The risk is mitigated by tracking lifetime cumulative doses and using the iron chelator **dexrazoxane**."
      },
      {
        name: "Azathioprine",
        aka: "Azathioprine (Imuran)",
        summary: "Purine analog immunosuppressant.",
        moa: "Prodrug converted to 6-mercaptopurine (6-MP), which inhibits **de novo purine synthesis**.",
        use: "Organ transplant rejection, autoimmune disease.",
        se: "Myelosuppression, hepatotoxicity, increased infection risk.",
        ci: "Concurrent use with allopurinol without extreme dose reduction.",
        pk: "Metabolized by TPMT and xanthine oxidase.",
        pearl: "**Allopurinol** blocks xanthine oxidase, leading to a massive, life-threatening accumulation of 6-MP. You MUST drastically reduce the azathioprine dose if they are combined."
      },
      {
        name: "Calcineurin Inhibitors",
        aka: "Cyclosporine · Tacrolimus (FK506)",
        summary: "T-cell activation inhibitors.",
        moa: "Cyclosporine binds cyclophilin; Tacrolimus binds FKBP-12. Both complexes inhibit **calcineurin**, preventing NFAT dephosphorylation and IL-2 transcription.",
        use: "Solid organ transplant.",
        se: "**Nephrotoxicity**, hypertension, neurotoxicity. Cyclosporine: **gingival hyperplasia**. Tacrolimus: diabetes.",
        ci: "Concurrent use of nephrotoxic drugs.",
        pk: "Narrow therapeutic index requiring strict trough monitoring.",
        pearl: "Calcineurin inhibitor nephrotoxicity is driven by intense **afferent arteriolar vasoconstriction**."
      }
    ]
  }
],

tox: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "N-Acetylcysteine (NAC)",
        summary: "Hepatotoxin and its glutathione-restoring antidote.",
        moa: "Toxic NAPQI metabolite destroys hepatocytes when glutathione is depleted. **NAC provides cysteine to restore glutathione** and detoxify NAPQI.",
        use: "Acetaminophen overdose.",
        se: "IV NAC can cause an anaphylactoid reaction (flushing, bronchospasm).",
        ci: "None in the setting of acute overdose.",
        pk: "Treatment is guided by plotting the serum level on the Rumack-Matthew nomogram at 4 hours post-ingestion.",
        pearl: "NAC is most effective if given within **8 hours** of ingestion, but it should still be given in late presentations to improve hepatic microcirculation."
      },
      {
        name: "Ethanol Metabolism & Alcohol Antidotes",
        aka: "Disulfiram (Antabuse) · Fomepizole · Thiamine",
        summary: "Toxic alcohol pathway modulators.",
        moa: "**Disulfiram:** inhibits aldehyde dehydrogenase. **Fomepizole:** inhibits alcohol dehydrogenase. **Thiamine:** transketolase cofactor.",
        use: "Disulfiram: alcohol abstinence. Fomepizole: methanol and ethylene glycol poisoning. Thiamine: Wernicke encephalopathy.",
        se: "Disulfiram reaction causes severe flushing, hypotension, and vomiting if alcohol is consumed.",
        ci: "Disulfiram: recent alcohol use.",
        pk: "Fomepizole prevents the formation of toxic metabolites (formic acid, oxalic acid).",
        pearl: "Always administer **thiamine before glucose** in an alcoholic or malnourished patient. Giving glucose first depletes the last remaining thiamine stores and will precipitate acute Wernicke encephalopathy."
      }
    ]
  }
]

}; // Closes the DRUGS object
