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
        pearl: "**Bethanechol** safely treats urinary retention because its quaternary structure prevents CNS entry. **Pilocarpine** treats glaucoma by contracting the ciliary muscle to open the trabecular meshwork."
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
        aka: "Epinephrine · Norepinephrine",
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
        aka: "Dopamine · Dobutamine",
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
        aka: "Phenylephrine · Isoproterenol",
        summary: "Selective alpha or beta agonists with opposing hemodynamic effects.",
        moa: "**Phenylephrine:** selective alpha-1 agonist. **Isoproterenol:** beta-1 and beta-2 agonist.",
        use: "**Phenylephrine:** nasal decongestant, neurogenic shock, mydriatic. **Isoproterenol:** electrophysiology evaluation, refractory bradycardia.",
        se: "**Phenylephrine:** reflex bradycardia, severe hypertension. **Isoproterenol:** tachycardia, flushing, hypotension.",
        ci: "Phenylephrine: severe hypertension. Isoproterenol: angina, tachyarrhythmias.",
        pk: "Rapid onset and offset.",
        pearl: "**Phenylephrine** increases MAP and causes a predictable reflex bradycardia. **Isoproterenol** increases heart rate and decreases MAP, widening the pulse pressure."
      },
      {
        name: "Beta Blockers",
        aka: "Propranolol · Metoprolol · Atenolol · Carvedilol · Labetalol · Bisoprolol · Esmolol · Nadolol · Timolol",
        summary: "Competitive antagonists of **beta-adrenergic receptors**.",
        moa: "Block beta-1 and/or beta-2 receptors to decrease cAMP, lowering heart rate, contractility, and renin release.",
        use: "Hypertension, stable angina, **HFrEF**, post-MI, SVT, hyperthyroidism symptom control.",
        se: "**Bradycardia, AV block, bronchospasm**, masked hypoglycemia symptoms.",
        ci: "Decompensated HF, cardiogenic shock, heart block, severe asthma (non-selective).",
        pk: "**Propranolol** crosses the BBB. **Esmolol** is ultra-short acting. **Carvedilol/labetalol** block alpha-1 and beta receptors.",
        pearl: "**Carvedilol, metoprolol succinate, and bisoprolol** reduce mortality in heart failure. Never use non-selective beta-blockers in cocaine toxicity due to unopposed alpha vasoconstriction."
      },
      {
        name: "Alpha Blockers",
        aka: "Prazosin · Terazosin · Doxazosin · Tamsulosin · Phentolamine · Phenoxybenzamine",
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
        aka: "Succinylcholine · Rocuronium · Vecuronium · Pancuronium · Atracurium · Cisatracurium · Mivacurium",
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
        aka: "Amphetamine · Dextroamphetamine · Methamphetamine · Methylphenidate · Lisdexamfetamine",
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
        name: "ARBs",
        aka: "Losartan · Valsartan · Irbesartan · Candesartan · Olmesartan · Telmisartan · Azilsartan",
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
        aka: "Aliskiren",
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
        aka: "Hydralazine · Minoxidil · Diazoxide",
        summary: "Direct arteriolar vasodilators that profoundly reduce afterload.",
        moa: "**Hydralazine:** increases cGMP to relax smooth muscle. **Minoxidil:** opens K+ ATP channels to hyperpolarize the membrane.",
        use: "Hydralazine: severe hypertension, pregnancy hypertension, HFrEF in African Americans. Minoxidil: refractory hypertension, androgenic alopecia.",
        se: "**Reflex tachycardia, severe fluid retention.** Hydralazine: drug-induced lupus. Minoxidil: hypertrichosis.",
        ci: "Severe tachycardia, dissecting aortic aneurysm.",
        pk: "Hydralazine is acetylated in the liver.",
        pearl: "Always co-administer with a beta-blocker to prevent reflex tachycardia. **Hydralazine** causes drug-induced lupus characterized by **anti-histone antibodies**."
      },
      {
        name: "Nitrates",
        aka: "Nitroglycerin · Isosorbide Dinitrate · Isosorbide Mononitrate · Sodium Nitroprusside",
        summary: "Nitric oxide donors that relax vascular smooth muscle to reduce cardiac preload and afterload.",
        moa: "Release **nitric oxide (NO)** to activate guanylyl cyclase and increase cGMP, causing vascular smooth muscle relaxation. Venodilation dominates at low doses.",
        use: "Acute angina attack, stable angina prophylaxis, ACS, acute decompensated HF, hypertensive emergency.",
        se: "**Headache**, **orthostatic hypotension**, **reflex tachycardia**, **tachyphylaxis/tolerance**. Nitroprusside: cyanide toxicity.",
        ci: "Concurrent PDE5 inhibitors (sildenafil), right ventricular infarction, severe hypotension.",
        pk: "Sublingual NTG bypasses massive hepatic first-pass metabolism. Tolerance develops rapidly with continuous use.",
        pearl: "**Nitrate tolerance** requires a daily nitrate-free interval (usually 8 to 12 hours) to maintain efficacy. Absolutely contraindicated with PDE5 inhibitors due to severe hypotension."
      }
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide · Bumetanide · Torsemide · Ethacrynic Acid",
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
        aka: "Hydrochlorothiazide · Chlorthalidone · Metolazone · Indapamide",
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
        aka: "Spironolactone · Eplerenone · Amiloride · Triamterene",
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
        aka: "Acetazolamide · Dorzolamide · Brinzolamide · Methazolamide",
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
        aka: "Mannitol",
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
        name: "Calcium Channel Blockers",
        aka: "Amlodipine · Nifedipine · Felodipine · Nicardipine · Verapamil · Diltiazem",
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
        aka: "Adenosine",
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
        aka: "Flecainide · Propafenone",
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
        aka: "Amiodarone · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "K+ channel blockers that prolong repolarization.",
        moa: "Block K+ channels to increase action potential duration. Amiodarone blocks Na+, Ca2+, and beta receptors as well.",
        use: "Amiodarone: VF/pulseless VT, AFib rhythm control.",
        se: "**Amiodarone:** Pulmonary fibrosis, hyper/hypothyroidism, hepatotoxicity, corneal deposits, blue-gray skin. **Sotalol:** Torsades de pointes.",
        ci: "Amiodarone: severe sinus node dysfunction, iodine allergy.",
        pk: "Amiodarone has a half-life of 40 to 55 days and is highly lipophilic.",
        pearl: "Every patient starting amiodarone needs baseline and annual **TFTs, LFTs, and PFTs**."
      },
      {
        name: "Digoxin",
        aka: "Digoxin · Digitalis",
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
        aka: "Magnesium Sulfate · Magnesium",
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
        aka: "Ranolazine · Ivabradine",
        summary: "Novel antianginal and heart failure agents distinct from traditional beta-blockers.",
        moa: "**Ranolazine:** blocks late Na+ current to decrease diastolic wall tension. **Ivabradine:** blocks the HCN channel (If funny current) in the SA node.",
        use: "Ranolazine: refractory stable angina. Ivabradine: HFrEF with HR >70 bpm.",
        se: "Ranolazine: prolonged QTc. Ivabradine: visual brightness (phosphenes), bradycardia.",
        ci: "Ivabradine: Atrial fibrillation.",
        pk: "Hepatic CYP3A4 metabolism.",
        pearl: "**Ivabradine** is the only drug that lowers heart rate without affecting blood pressure or contractility. It requires sinus rhythm to work."
      },
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone · Nesiritide",
        summary: "Positive inotropes for acute decompensated heart failure.",
        moa: "**Milrinone:** inhibits PDE3 to increase cAMP, increasing inotropy and causing vasodilation. **Nesiritide:** recombinant human BNP.",
        use: "Short-term management of severe acute decompensated heart failure.",
        se: "Hypotension, arrhythmias.",
        ci: "Milrinone: severe outflow tract obstruction.",
        pk: "IV continuous infusion.",
        pearl: "**Milrinone** is an inodilator that bypasses beta-receptors, making it highly useful for patients already on maximum beta-blocker therapy."
      }
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins",
        aka: "Atorvastatin · Rosuvastatin · Simvastatin · Pravastatin · Lovastatin · Fluvastatin · Pitavastatin",
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
        aka: "Gemfibrozil · Fenofibrate · Bezafibrate · Niacin",
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
        aka: "Unfractionated Heparin · Enoxaparin · Dalteparin · Tinzaparin · Fondaparinux",
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
        aka: "Warfarin",
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
        aka: "Apixaban · Rivaroxaban · Edoxaban · Betrixaban · Dabigatran",
        summary: "Target-specific oral anticoagulants that do not require antithrombin III.",
        moa: "**Apixaban/rivaroxaban/edoxaban:** direct Factor Xa inhibitors. **Dabigatran:** direct thrombin inhibitor.",
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
        aka: "Aspirin · Acetylsalicylic Acid",
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
        aka: "Clopidogrel · Ticagrelor · Prasugrel · Abciximab · Eptifibatide · Tirofiban",
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
        aka: "Cilostazol · Dipyridamole",
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
        aka: "Alteplase · Tenecteplase · Reteplase · Streptokinase · Urokinase",
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
        aka: "Allopurinol · Febuxostat",
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
        aka: "Colchicine",
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
        aka: "Probenecid · Sulfinpyrazone",
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
        aka: "Diazepam · Lorazepam · Alprazolam · Clonazepam · Midazolam · Triazolam · Oxazepam · Temazepam · Chlordiazepoxide",
        summary: "GABA-A potentiators with high abuse potential.",
        moa: "Bind the GABA-A receptor to increase the **FREQUENCY** of chloride channel opening.",
        use: "Status epilepticus (lorazepam), alcohol withdrawal, procedural sedation.",
        se: "Respiratory depression, tolerance, physical dependence, paradoxical excitement.",
        ci: "Myasthenia gravis, acute narrow-angle glaucoma, severe respiratory insufficiency.",
        pk: "**Lorazepam, Oxazepam, and Temazepam** bypass hepatic P450 metabolism and undergo direct glucuronidation.",
        pearl: "The reversal agent is **flumazenil**, but it can precipitate life-threatening seizures in benzo-dependent patients."
      },
      {
        name: "Non-Benzodiazepine Hypnotics (Z-drugs) & Ramelteon",
        aka: "Zolpidem · Zaleplon · Eszopiclone · Ramelteon · Suvorexant",
        summary: "Targeted sleep aids with specialized receptor activity.",
        moa: "**Z-drugs:** selectively modulate GABA-A alpha-1 subunits. **Ramelteon:** MT1/MT2 melatonin agonist. **Suvorexant:** orexin antagonist.",
        use: "Insomnia.",
        se: "**Z-drugs:** complex sleep behaviors (sleep-driving), amnesia.",
        ci: "Complex sleep behaviors with prior use. Suvorexant: narcolepsy.",
        pk: "Zaleplon has an ultra-short half-life.",
        pearl: "**Ramelteon** is the only hypnotic with no abuse potential, making it the safest choice for elderly patients."
      },
      {
        name: "Propofol, Etomidate & Ketamine",
        aka: "Propofol · Etomidate · Ketamine",
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
        aka: "Sevoflurane · Desflurane · Isoflurane · Halothane · Nitrous Oxide",
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
        aka: "Morphine · Oxycodone · Hydrocodone · Fentanyl · Hydromorphone · Codeine · Tramadol · Methadone · Meperidine",
        summary: "Mu, kappa, and delta receptor agonists.",
        moa: "Agonists at opioid receptors. They open K+ channels (hyperpolarization) and close presynaptic Ca2+ channels to decrease neurotransmitter release.",
        use: "Moderate to severe pain, cough suppression, acute pulmonary edema.",
        se: "**Respiratory depression, constipation, miosis.**",
        ci: "Severe respiratory instability, concurrent MAOI use (meperidine).",
        pk: "Morphine active metabolites accumulate in renal failure. Methadone has a variable, long half-life.",
        pearl: "**Tolerance does NOT develop to constipation or miosis.** Meperidine causes seizures via normeperidine accumulation in renal failure."
      },
      {
        name: "NSAIDs (Non-Opioid Analgesics)",
        aka: "Ibuprofen · Naproxen · Indomethacin · Ketorolac · Diclofenac · Meloxicam · Celecoxib · Acetaminophen",
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
        aka: "Naloxone · Naltrexone · Buprenorphine",
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
        aka: "Fluoxetine · Sertraline · Escitalopram · Paroxetine · Citalopram · Venlafaxine · Duloxetine · Desvenlafaxine",
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
        aka: "Amitriptyline · Nortriptyline · Imipramine · Desipramine · Clomipramine · Doxepin · Amoxapine",
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
        aka: "Phenelzine · Tranylcypromine · Isocarboxazid · Selegiline · Moclobemide",
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
        aka: "Bupropion · Mirtazapine · Trazodone · Vilazodone · Vortioxetine",
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
        aka: "Lithium Carbonate · Lithium Citrate",
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
        aka: "Valproic Acid · Valproate Sodium · Divalproex",
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
        aka: "Phenytoin · Fosphenytoin",
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
        aka: "Carbamazepine · Oxcarbazepine · Eslicarbazepine",
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
        aka: "Lamotrigine",
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
        aka: "Ethosuximide",
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
        aka: "Topiramate · Phentermine/Topiramate",
        summary: "Broad-spectrum AED with carbonic anhydrase activity.",
        moa: "Blocks Na+ channels, enhances GABA, blocks AMPA, and inhibits carbonic anhydrase.",
        use: "Migraine prophylaxis, weight loss, epilepsy.",
        se: "Cognitive dulling, **kidney stones**, weight loss.",
        ci: "Recent alcohol use (with extended-release formulation).",
        pk: "Mild CYP3A4 inducer.",
        pearl: "Promotes **calcium phosphate kidney stones** via carbonic anhydrase inhibition and metabolic acidosis."
      },
      {
        name: "Levetiracetam",
        aka: "Levetiracetam · Brivaracetam",
        summary: "AED with a unique synaptic target.",
        moa: "Binds the **SV2A** protein to modulate synaptic vesicle exocytosis.",
        use: "Broad-spectrum epilepsy.",
        se: "**Psychiatric symptoms** (agitation, irritability, psychosis).",
        ci: "Hypersensitivity.",
        pk: "Renally cleared with essentially NO CYP interactions.",
        pearl: "Safest pharmacokinetic profile for adding to complex regimens, but highly associated with **Keppra rage** (aggression)."
      },
      {
        name: "Gabapentin, Tiagabine & Vigabatrin",
        aka: "Gabapentin · Pregabalin · Tiagabine · Vigabatrin",
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
        name: "Antipsychotics (First Generation / FGAs)",
        aka: "Haloperidol · Chlorpromazine · Fluphenazine · Perphenazine · Thiothixene · Thioridazine · Trifluoperazine",
        summary: "D2 receptor antagonists targeting positive symptoms.",
        moa: "Competitive antagonism at **D2 dopamine receptors** in the mesolimbic pathway.",
        use: "Schizophrenia, acute agitation, Tourette syndrome.",
        se: "**Extrapyramidal symptoms (EPS)**, Neuroleptic Malignant Syndrome (NMS), hyperprolactinemia, QT prolongation.",
        ci: "Parkinson disease, severe CNS depression.",
        pk: "High-potency agents (haloperidol) cause more EPS. Low-potency agents (chlorpromazine) cause more anticholinergic side effects.",
        pearl: "Treat acute dystonia with **benztropine**. Treat akathisia with **beta-blockers**. Treat NMS with **dantrolene**."
      },
      {
        name: "Antipsychotics (Second Generation / SGAs)",
        aka: "Clozapine · Olanzapine · Risperidone · Quetiapine · Aripiprazole · Ziprasidone · Paliperidone · Lurasidone",
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
        aka: "Carbidopa/Levodopa · Levodopa",
        summary: "Dopamine precursor therapy.",
        moa: "**Levodopa** crosses the BBB and converts to dopamine. **Carbidopa** inhibits peripheral DOPA decarboxylase.",
        use: "Parkinson disease.",
        se: "Dyskinesias, hallucinations, wearing-off phenomenon.",
        ci: "Narrow-angle glaucoma, concurrent non-selective MAOI use.",
        pk: "Short half-life leads to motor fluctuations.",
        pearl: "**Carbidopa** does NOT cross the BBB. By blocking peripheral conversion, it reduces systemic side effects like nausea and increases CNS levodopa availability."
      },
      {
        name: "Dopamine Agonists (Parkinson's)",
        aka: "Pramipexole · Ropinirole · Rotigotine · Bromocriptine · Cabergoline",
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
        aka: "Entacapone · Tolcapone",
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
    group: "Beta-Lactams",
    drugs: [
      {
        name: "Natural Penicillins",
        aka: "Penicillin G · Penicillin V · Benzathine Penicillin G · Procaine Penicillin G",
        summary: "Narrow-spectrum beta-lactams that disrupt gram-positive cell wall synthesis by inhibiting PBPs. First-line for Group A Strep pharyngitis, syphilis, rheumatic fever prophylaxis, and susceptible gram-positive infections.",
        moa: "Bind and inhibit **penicillin-binding proteins (PBPs)** to prevent transpeptidation/cross-linking of peptidoglycan, causing cell wall defect and osmotic lysis (bactericidal against actively dividing organisms).",
        use: "Streptococcal pharyngitis (penicillin V oral); rheumatic fever prophylaxis (benzathine G IM monthly); syphilis (primary/secondary/latent: benzathine G IM single dose); neurosyphilis (penicillin G IV); meningococcal meningitis; clostridial infections; actinomycosis.",
        se: "**Hypersensitivity** (most important; 1-10% allergy; IgE-mediated anaphylaxis rare; cross-reactivity with cephalosporins is 1-2%); GI upset; **Jarisch-Herxheimer reaction** (fever/chills/hypotension after starting syphilis/Lyme treatment - spirochete pyrogen release, not an allergic reaction).",
        ci: "Penicillin anaphylaxis history. Note: Jarisch-Herxheimer is not an allergy and is not a contraindication to continuing treatment.",
        pk: "Penicillin G: IV or IM, renally excreted; time-dependent killing. Penicillin V: acid-stable oral formulation. Benzathine G: IM depot, slow release (detectable levels 2-4 weeks).",
        pearl: "**Jarisch-Herxheimer reaction** is not a penicillin allergy; treat with antipyretics, not epinephrine. **Neurosyphilis always requires IV penicillin G** because benzathine IM fails to reach therapeutic CSF concentrations."
      },
      {
        name: "Anti-Staphylococcal Penicillins",
        aka: "Nafcillin · Oxacillin · Dicloxacillin · Cloxacillin",
        summary: "Beta-lactamase-resistant penicillins specifically designed for methicillin-susceptible Staphylococcus aureus (MSSA). Preferred over vancomycin for MSSA bacteremia and endocarditis.",
        moa: "Bind **PBPs** to inhibit peptidoglycan cross-linking; bulky side chain sterically hinders staphylococcal beta-lactamase active site, conferring resistance to enzymatic hydrolysis.",
        use: "MSSA bacteremia and endocarditis (drug of choice); MSSA osteomyelitis, septic arthritis, skin/soft tissue infections; surgical prophylaxis.",
        se: "Hypersensitivity; **nafcillin causes hepatotoxicity** (hepatic elimination leads to hepatic adverse effects); phlebitis at IV site; interstitial nephritis.",
        ci: "Penicillin allergy; MRSA infection (altered PBP2a confers resistance); severe hepatic disease (nafcillin).",
        pk: "Nafcillin/oxacillin: IV only. **Nafcillin has hepatic elimination** (biliary) so no renal dose adjustment is required. Dicloxacillin: oral, take on empty stomach.",
        pearl: "**Always de-escalate from vancomycin to nafcillin/oxacillin when MSSA is confirmed** for significantly better outcomes. **Nafcillin is hepatically eliminated** making it safe in renal failure without dose adjustment."
      },
      {
        name: "Aminopenicillins",
        aka: "Ampicillin · Amoxicillin · Ampicillin-Sulbactam · Amoxicillin-Clavulanate",
        summary: "Extended-spectrum penicillins covering gram-positives plus selected gram-negatives (H. influenzae, E. coli, Listeria). Beta-lactamase inhibitor combinations add coverage against beta-lactamase producers.",
        moa: "Bind **PBPs** to inhibit peptidoglycan cross-linking; amino group extends gram-negative outer membrane penetration. **Beta-lactamase inhibitors** (clavulanate, sulbactam) are irreversible suicide inhibitors of beta-lactamase enzymes.",
        use: "Ampicillin: **Listeria monocytogenes**, enterococcal UTI/endocarditis, GBS intrapartum prophylaxis, empiric bacterial meningitis (>50 yr/immunocompromised). Amoxicillin: H. pylori triple therapy, otitis media, early Lyme disease. Augmentin: animal/human bites, sinusitis. Unasyn: intra-abdominal/pelvic infections.",
        se: "Hypersensitivity; **ampicillin rash** (maculopapular non-IgE-mediated rash in ~80-100% of patients with active EBV mononucleosis or CLL - does NOT indicate penicillin allergy); GI diarrhea (clavulanate); C. difficile colitis.",
        ci: "Penicillin anaphylaxis; known active EBV mononucleosis (ampicillin/amoxicillin predictably causes rash).",
        pk: "Ampicillin: IV/IM only (poor oral absorption); renally excreted. Amoxicillin: excellent oral bioavailability. Augmentin: oral; clavulanate absorption is good but causes diarrhea. Unasyn: IV/IM. All renally eliminated.",
        pearl: "**Listeria is the critical ampicillin indication** as all cephalosporins lack Listeria coverage. In empiric meningitis for patients >50 yr or pregnant, **always add ampicillin**. The ampicillin rash in EBV is a drug-virus interaction, not a true allergy."
      },
      {
        name: "Extended-Spectrum Penicillins",
        aka: "Piperacillin-Tazobactam · Ticarcillin-Clavulanate",
        summary: "Anti-pseudomonal penicillins with the broadest gram-positive, gram-negative (including Pseudomonas), and anaerobic coverage of all penicillins.",
        moa: "Piperacillin: extended-spectrum PBP binding including **anti-pseudomonal activity**. **Tazobactam**: irreversible beta-lactamase inhibitor that expands coverage against Klebsiella, E. coli, and many anaerobes.",
        use: "Hospital-acquired infections (pneumonia, UTI, bacteremia); polymicrobial abdominal infections; **febrile neutropenia** (covers Pseudomonas); complicated skin/soft tissue infections; diabetic foot infections.",
        se: "Hypersensitivity; **hypokalemia** (piperacillin is a non-reabsorbable anion leading to tubular K+ loss); thrombocytopenia; elevated LFTs; neurotoxicity at high doses in renal failure.",
        ci: "Penicillin anaphylaxis; ESBL-producing organisms at high burden (inoculum effect may render pip-tazo unreliable for bacteremia); severe renal failure without dose adjustment.",
        pk: "IV infusion only; renally excreted. Time-dependent killing means extended infusion (4-hr) optimizes pharmacodynamic targets against Pseudomonas.",
        pearl: "**For ESBL-producing organisms**, use a carbapenem for bacteremia due to the inoculum effect, though pip-tazo remains appropriate for uncomplicated ESBL UTIs. Monitor and replete potassium due to clinically significant **hypokalemia**."
      },
      {
        name: "Cephalosporins",
        aka: "Cefazolin · Cephalexin · Cefuroxime · Cefoxitin · Cefaclor · Ceftriaxone · Cefotaxime · Ceftazidime · Cefixime · Cefepime · Ceftaroline",
        summary: "Beta-lactam antibiotics with progressively broader gram-negative coverage across generations; only 5th-generation ceftaroline covers MRSA. Ceftriaxone is the most versatile agent.",
        moa: "Bind **penicillin-binding proteins (PBPs)** to inhibit peptidoglycan transpeptidation. The beta-lactam ring is more resistant to many beta-lactamases than penicillins but susceptible to ESBLs and carbapenemases.",
        use: "1G (cefazolin): surgical prophylaxis, MSSA skin infections; 2G (cefoxitin): polymicrobial/GYN/abdominal infections; 3G (ceftriaxone): bacterial meningitis, gonorrhea, CAP, Lyme disease; 3G (ceftazidime): Pseudomonas; 4G (cefepime): febrile neutropenia, nosocomial infections; 5G (ceftaroline): MRSA skin infections, CAP.",
        se: "Hypersensitivity (1-2% cross-reactivity with penicillins based on R1 side chain similarity); **ceftriaxone**: biliary sludge/pseudolithiasis (calcium-ceftriaxone precipitate in neonates); C. difficile.",
        ci: "Severe cephalosporin allergy; **ceftriaxone contraindicated in neonates receiving IV calcium** (fatal cardiopulmonary precipitation); ESBL organisms; Listeria infections (all generations have innate resistance).",
        pk: "Most renally eliminated. Ceftriaxone: once-daily dosing with ~50% biliary excretion. Cefazolin: preferred surgical prophylaxis. Cefepime penetrates CSF.",
        pearl: "**Generational gram-negative coverage increases but gram-positive decreases:** 1G best gram-positive, while 5G covers MRSA. **No cephalosporin covers Listeria or Enterococcus**. Modern evidence shows penicillin-cephalosporin cross-reactivity is 1-2%, driven by R1 side chain similarity."
      },
      {
        name: "Carbapenems & Monobactams",
        aka: "Imipenem-Cilastatin · Meropenem · Ertapenem · Doripenem · Aztreonam",
        summary: "Carbapenems are the broadest beta-lactams, covering most gram-positives, gram-negatives (ESBL), and anaerobes. Aztreonam is a narrow gram-negative-only agent safe in penicillin-allergic patients.",
        moa: "**Carbapenems:** bind all PBPs with broad-spectrum activity; stable to most beta-lactamases except carbapenemases. **Aztreonam:** binds specifically **PBP3** of gram-negative bacteria only; no activity against gram-positives or anaerobes.",
        use: "Carbapenems: ESBL-producing organisms, MDR gram-negatives, polymicrobial abdominal infections. Ertapenem: community-acquired ESBL infections (NO Pseudomonas coverage). Meropenem: CNS infections (lower seizure risk). Aztreonam: gram-negative infections in **penicillin-allergic patients**, Pseudomonas in cystic fibrosis.",
        se: "Carbapenems: **seizures** (imipenem lowers seizure threshold, especially in renal failure); GI upset; C. difficile; cross-reactivity with penicillin allergy (~1%). Aztreonam: minimal cross-reactivity with other beta-lactams but **cross-reacts with ceftazidime** (identical R1 side chain).",
        ci: "Ertapenem: do NOT use for Pseudomonas, Acinetobacter, or enterococcal infections. Imipenem in seizure-prone patients. Aztreonam with ceftazidime allergy.",
        pk: "All IV; time-dependent killing. Imipenem is co-formulated with cilastatin (inhibits renal dehydropeptidase I which hydrolyzes imipenem). All renally eliminated.",
        pearl: "**Ertapenem = carbapenem without Pseudomonas/Acinetobacter coverage**. **Aztreonam is safe in penicillin allergy** EXCEPT with ceftazidime. Imipenem seizure risk is real in renal failure, making meropenem preferred for CNS infections or CKD."
      },
    ]
  },
  {
    group: "Other Antibacterials",
    drugs: [
      {
        name: "Vancomycin",
        aka: "Vancomycin",
        summary: "Glycopeptide antibiotic that inhibits cell wall synthesis by binding D-Ala-D-Ala peptidoglycan precursors. Drug of choice for MRSA and C. difficile (oral formulation); active only against gram-positives.",
        moa: "Bind **D-Ala-D-Ala terminus** of peptidoglycan precursors to prevent transglycosylation and transpeptidation (bactericidal against most gram-positives). Too large to penetrate gram-negative outer membrane.",
        use: "MRSA infections (IV); **C. difficile colitis** (oral - not absorbed from GI tract, acts locally); gram-positive infections in penicillin-allergic patients; enterococcal endocarditis.",
        se: "**Red man syndrome** (rapid infusion causes direct mast cell degranulation with flushing/pruritus - NOT IgE-mediated; prevent with slow infusion); **nephrotoxicity**; **ototoxicity**.",
        ci: "VRE infections (vancomycin-resistant enterococcus); true vancomycin hypersensitivity. Oral vancomycin will not treat systemic infections.",
        pk: "IV for systemic infections; oral for C. difficile (not absorbed systemically). Monitor with **AUC/MIC**. Renally eliminated (dose-adjust for renal function).",
        pearl: "**Red man syndrome is rate-related, non-IgE**; slow the infusion and continue vancomycin. **Oral vancomycin for C. difficile is local therapy** and never enters the bloodstream. IV vancomycin does NOT treat C. difficile."
      },
      {
        name: "Aminoglycosides",
        aka: "Gentamicin · Tobramycin · Amikacin · Streptomycin · Neomycin",
        summary: "Concentration-dependent bactericidal antibiotics that irreversibly inhibit the 30S ribosomal subunit. Used for serious gram-negative infections and endocarditis synergy. Narrow therapeutic index.",
        moa: "Enter bacteria via oxygen-dependent active transport, bind **30S ribosomal subunit**, cause mRNA misreading, and disrupt membrane. Require aerobic metabolism for uptake.",
        use: "Serious gram-negative infections; **endocarditis synergy** (gentamicin + penicillin/vancomycin); TB (streptomycin); hepatic encephalopathy (oral neomycin).",
        se: "**Nephrotoxicity** (proximal tubular accumulation causes ATN); **ototoxicity** (irreversible cochlear and cumulative vestibular damage); **neuromuscular blockade**.",
        ci: "Pregnancy (fetal ototoxicity); myasthenia gravis (NMJ blockade worsens weakness); anaerobic infections (inactive); concurrent ototoxic drugs without monitoring.",
        pk: "IV/IM; concentration-dependent killing and prolonged post-antibiotic effect make **once-daily extended-interval dosing** preferred. Renally eliminated (strict dose adjustment in CKD).",
        pearl: "**Aminoglycosides are inactive in anaerobic environments**. **Once-daily dosing reduces nephrotoxicity** by allowing tubular accumulation to clear between doses. Loop diuretics plus aminoglycosides is a classic synergistic ototoxicity combination to avoid."
      },
      {
        name: "Tetracyclines",
        aka: "Doxycycline · Tetracycline · Minocycline · Tigecycline",
        summary: "Bacteriostatic antibiotics blocking 30S ribosomal protein synthesis. Broad coverage including intracellular organisms; doxycycline is highly versatile for atypical, tick-borne, and STI pathogens.",
        moa: "Bind **30S ribosomal subunit** to block **aminoacyl-tRNA binding to the A site**, preventing peptide chain elongation. Concentrated intracellularly via active transport.",
        use: "Doxycycline: **Rickettsia** (drug of choice), **Lyme disease**, **Chlamydia**, atypical pneumonia, community-acquired MRSA. Tetracycline: H. pylori, acne. Minocycline: acne vulgaris. Tigecycline: MDR organisms.",
        se: "**Photosensitivity**; **GI upset**; **dental discoloration and enamel hypoplasia** (binds calcium in developing teeth - avoid in children <8 yr and pregnancy); anti-anabolic effect raises BUN (tetracycline).",
        ci: "Children <8 years (**exception: doxycycline is used for RMSF even in children**); pregnancy; chelation by divalent cations (separate from dairy, antacids, iron by at least 2 hr).",
        pk: "Doxycycline: excellent oral bioavailability, **fecal/biliary elimination** (safe in renal failure). Tetracycline: renal elimination (avoid in CKD).",
        pearl: "**Doxycycline for RMSF is always appropriate, even in children <8 yr** because mortality outweighs dental staining risk. Doxycycline is uniquely **safe in renal failure** (fecal elimination). Dairy and antacids chelate tetracyclines."
      },
      {
        name: "Macrolides",
        aka: "Azithromycin · Clarithromycin · Erythromycin",
        summary: "Bacteriostatic antibiotics blocking 50S ribosomal protein synthesis. Broad coverage of gram-positives plus atypical organisms; used for CAP, STIs, and H. pylori therapy.",
        moa: "Bind **50S ribosomal subunit** (23S rRNA) to block **translocation** of peptidyl-tRNA, inhibiting peptide chain elongation.",
        use: "Community-acquired pneumonia; atypical pneumonia (Legionella, Mycoplasma); Chlamydia; MAC prophylaxis and treatment; pertussis; H. pylori eradication (clarithromycin); GI motility (erythromycin).",
        se: "**QTc prolongation** (azithromycin highest risk); **GI upset** (erythromycin worst due to motilin receptor stimulation); hepatotoxicity; **drug interactions** (clarithromycin is a strong CYP3A4 inhibitor).",
        ci: "QTc prolongation; concurrent QTc-prolonging medications; clarithromycin with concurrent colchicine or ergotamine in renal/hepatic failure.",
        pk: "Azithromycin: highly concentrated intracellularly with a long half-life (5-day course gives 10-day tissue levels), minimal CYP metabolism. Clarithromycin and Erythromycin are strong CYP3A4 inhibitors.",
        pearl: "**Azithromycin concentrates massively in tissues**, explaining why a short course works for long periods. **Clarithromycin is a strong CYP3A4 inhibitor** (unlike azithromycin) and is dangerous with statins and colchicine."
      },
      {
        name: "Clindamycin",
        aka: "Clindamycin",
        summary: "Bacteriostatic lincosamide antibiotic blocking 50S ribosomal translocation. Excellent against gram-positive organisms and anaerobes; used for skin infections and toxin-producing Staph/Strep.",
        moa: "Bind **50S ribosomal subunit** to inhibit **peptidyl transferase** and block translocation. Penetrates well into bone and abscess cavities.",
        use: "Skin/soft tissue infections; anaerobic infections above the diaphragm; Group A Strep toxic shock syndrome (+ penicillin to suppress toxin production); bone/joint infections.",
        se: "**C. difficile colitis** (highest risk among common antibiotics); GI upset; rash; hepatotoxicity.",
        ci: "History of clindamycin-associated C. difficile colitis; concurrent use with erythromycin or chloramphenicol (compete at 50S binding site).",
        pk: "Excellent oral bioavailability; excellent tissue penetration including bone and abscesses. Check for **inducible clindamycin resistance** (D-zone test) in erythromycin-resistant MRSA.",
        pearl: "**Clindamycin for toxin-mediated streptococcal/staphylococcal disease** halts toxin protein synthesis even after cell death. For Strep toxic shock, always use **penicillin + clindamycin**. Use the **D-zone test** for inducible clindamycin resistance."
      },
      {
        name: "Misc. Antibacterials",
        aka: "Linezolid · Daptomycin · Chloramphenicol · Polymyxin B · Colistin · Nitrofurantoin · Fosfomycin",
        summary: "Mechanistically diverse antibiotics serving specialized roles for resistant gram-positives, MDR gram-negatives, and urinary tract infections.",
        moa: "**Linezolid:** binds 23S rRNA of 50S subunit blocking initiation complex formation. **Daptomycin:** inserts into gram-positive cell membrane causing depolarization and disruption. **Chloramphenicol:** binds 50S subunit inhibiting peptidyl transferase. **Polymyxins:** bind LPS of gram-negative outer membrane causing detergent-like disruption. **Nitrofurantoin:** reduced to reactive intermediates damaging DNA/proteins. **Fosfomycin:** inhibits MurA blocking early peptidoglycan synthesis.",
        use: "Linezolid: VRE, MRSA. Daptomycin: VRE bacteremia, MRSA endocarditis (NOT pneumonia). Chloramphenicol: bacterial meningitis in severe penicillin allergy. Polymyxin B/Colistin: last-resort MDR gram-negatives. Nitrofurantoin: uncomplicated lower UTI. Fosfomycin: uncomplicated UTI.",
        se: "Linezolid: **thrombocytopenia**, **serotonin syndrome**. Daptomycin: **myopathy/rhabdomyolysis**, **eosinophilic pneumonia**. Chloramphenicol: **aplastic anemia**, **gray baby syndrome**. Polymyxins: **nephrotoxicity**, neurotoxicity. Nitrofurantoin: pulmonary reactions.",
        ci: "Linezolid: serotonergic drugs. Daptomycin: **pneumonia** (inactivated by surfactant). Chloramphenicol: neonates. Nitrofurantoin: **CrCl <30 mL/min**, term pregnancy.",
        pk: "Linezolid: 100% oral bioavailability. Daptomycin: IV only, renally eliminated. Chloramphenicol: CYP450 inhibitor. Nitrofurantoin: concentrates only in urine.",
        pearl: "**Daptomycin is inactivated by lung surfactant** - never use for pneumonia. **Linezolid has 100% oral bioavailability** allowing IV to PO step-down. **Chloramphenicol aplastic anemia** is idiosyncratic, irreversible, and potentially fatal."
      },
      {
        name: "Fluoroquinolones",
        aka: "Ciprofloxacin · Levofloxacin · Moxifloxacin · Norfloxacin · Delafloxacin",
        summary: "Inhibit bacterial DNA gyrase and topoisomerase IV to prevent DNA replication. Broad-spectrum agents used for UTIs, pneumonia, GI infections, and atypicals.",
        moa: "Inhibit **DNA gyrase (topoisomerase II)** and **topoisomerase IV** to prevent DNA supercoiling/unwinding, blocking DNA replication and transcription.",
        use: "Ciprofloxacin: gram-negative infections, Pseudomonas, anthrax, traveler's diarrhea. Levofloxacin: CAP (respiratory fluoroquinolone), UTI, prostatitis. Moxifloxacin: CAP, atypical infections (NO urinary penetration).",
        se: "**QTc prolongation**; **tendinopathy/tendon rupture** (especially Achilles, risk increases with age/steroids); **CNS effects**; **peripheral neuropathy**; photosensitivity; dysglycemia.",
        ci: "Myasthenia gravis (neuromuscular blocking); children/adolescents <18 yr and pregnancy (cartilage toxicity); concurrent QTc-prolonging drugs.",
        pk: "Excellent oral bioavailability. Concentration-dependent killing. Moxifloxacin has hepatic/fecal elimination with no renal dose adjustment but is ineffective for UTIs. Chelated by divalent cations.",
        pearl: "**Ciprofloxacin for Pseudomonas** is a key oral option. **Fluoroquinolone tendinopathy** risk is highest with concurrent corticosteroids and age >60. Moxifloxacin has NO reliable urinary penetration - do not use for UTI."
      },
      {
        name: "Metronidazole",
        aka: "Metronidazole · Tinidazole",
        summary: "Prodrug nitroimidazole selectively reduced in anaerobic organisms to a toxic radical that damages DNA. First-line for C. difficile, bacterial vaginosis, Trichomonas, and Giardia.",
        moa: "Reduced by **ferredoxin** in anaerobic organisms to generate a **cytotoxic nitro radical anion** that causes DNA strand breaks (selective toxicity to anaerobes).",
        use: "**C. difficile** (mild-moderate); **bacterial vaginosis**; **Trichomonas vaginalis**; **Giardia**; Entamoeba histolytica; anaerobic intra-abdominal and CNS infections; H. pylori eradication.",
        se: "**Metallic taste**; **disulfiram-like reaction** with alcohol; GI upset; peripheral neuropathy; CNS toxicity at high doses; dark urine.",
        ci: "First trimester pregnancy (theoretical teratogenicity); concurrent alcohol use or disulfiram (severe disulfiram-like reaction).",
        pk: "Excellent oral bioavailability. Penetrates excellently into tissues including brain and abscesses. Inhibits CYP2C9 (increases warfarin levels).",
        pearl: "**Metronidazole is selectively toxic to anaerobes** because the nitro group is only reduced in very low oxidation-reduction potential environments. **The disulfiram-like reaction with alcohol** is severe; counsel patients to avoid alcohol for 48 hours after the last dose."
      },
      {
        name: "TMP-SMX (Trimethoprim-Sulfamethoxazole)",
        aka: "Trimethoprim-Sulfamethoxazole · Co-trimoxazole",
        summary: "Sequential inhibitors of folate synthesis that act synergistically against many gram-positive and gram-negative bacteria, Pneumocystis, and Toxoplasma.",
        moa: "**Sulfamethoxazole:** inhibits **dihydropteroate synthase**. **Trimethoprim:** inhibits **dihydrofolate reductase (DHFR)**. Together they sequentially inhibit purine and thymidine synthesis.",
        use: "PCP (Pneumocystis jirovecii) pneumonia treatment and prophylaxis; community-acquired MRSA skin infections; UTI; Nocardia; Toxoplasma prophylaxis.",
        se: "**Hypersensitivity** (rash, SJS/TEN); **bone marrow suppression**; **hyperkalemia** (trimethoprim blocks ENaC like amiloride); **nephrotoxicity** (trimethoprim competes with creatinine tubular secretion, artificially raising serum creatinine); crystalluria.",
        ci: "Sulfa allergy (SJS/TEN history); severe renal failure; late pregnancy/neonates (kernicterus); megaloblastic anemia/folate deficiency.",
        pk: "Excellent oral bioavailability. Well-matched half-lives for 1:5 ratio dosing. Renally eliminated (dose-reduce in CKD).",
        pearl: "**TMP mimics amiloride** by blocking epithelial Na+ channels, causing hyperkalemia (especially in HIV patients on ACEi/ARBs). **The creatinine rise from TMP is a lab artifact** as it competes for tubular secretion without actual kidney damage."
      }
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin · Isoniazid · Pyrazinamide · Ethambutol · Rifabutin · Rifapentine · Streptomycin · Bedaquiline",
        summary: "Four-drug RIPE regimen is standard initial TB treatment. Each drug has distinct mechanisms and unique toxicity profiles.",
        moa: "**Rifampin:** inhibit RNA polymerase. **Isoniazid (INH):** inhibit InhA (blocks mycolic acid synthesis). **Pyrazinamide:** disrupts membrane potential in acidic phagolysosomes. **Ethambutol:** inhibit arabinosyl transferase (blocks arabinogalactan synthesis).",
        use: "Active TB; Latent TB infection (LTBI); Rifampin: meningococcal prophylaxis. Rifabutin: MAC prophylaxis in HIV (fewer CYP interactions than rifampin).",
        se: "**Rifampin:** orange discoloration of body fluids, hepatotoxicity, **potent CYP450 inducer**. **INH:** **peripheral neuropathy** (requires B6 supplementation), hepatotoxicity, drug-induced lupus. **Pyrazinamide:** hyperuricemia, severe hepatotoxicity. **Ethambutol:** **optic neuritis**.",
        ci: "Rifampin: concurrent protease inhibitors; INH: active hepatic disease; Pyrazinamide: severe gout/hepatic disease; Ethambutol: pre-existing optic neuritis, inability to monitor vision (young children).",
        pk: "Rifampin induces its own metabolism. INH half-life varies by acetylator status (slow acetylators have increased toxicity risk).",
        pearl: "**RIPE mnemonic for toxicities:** Rifampin = Red/orange secretions + CYP inducer; Isoniazid = Idiosyncratic hepatitis + neuropathy (B6); Pyrazinamide = Puffy joints + hepatitis; Ethambutol = Eye (optic neuritis). Always give **pyridoxine (B6) with INH**."
      },
      {
        name: "Leprosy Drugs",
        aka: "Dapsone · Rifampin · Clofazimine",
        summary: "Multi-drug therapy (MDT) is standard for leprosy. Dapsone is the backbone; rifampin adds bactericidal activity; clofazimine treats multibacillary disease.",
        moa: "**Dapsone:** inhibit dihydropteroate synthase. **Rifampin:** inhibit RNA polymerase. **Clofazimine:** binds mycobacterial DNA generating reactive oxygen species; also anti-inflammatory.",
        use: "Leprosy (Hansen disease); Dapsone: PCP prophylaxis, dermatitis herpetiformis.",
        se: "Dapsone: **hemolytic anemia** (severe in **G6PD deficiency**), methemoglobinemia, Dapsone hypersensitivity syndrome. Clofazimine: **reddish-brown skin and eye discoloration**.",
        ci: "Dapsone: G6PD deficiency (always screen before use); severe sulfa hypersensitivity.",
        pk: "Dapsone has hepatic acetylation. Clofazimine is highly lipophilic with an extremely long half-life (~70 days), explaining prolonged discoloration after stopping.",
        pearl: "**Dapsone hemolysis in G6PD deficiency** is severe; always screen for G6PD before use. **Clofazimine discoloration** can last months to years after stopping and is a major adherence issue."
      }
    ]
  },
  {
    group: "Antifungals",
    drugs: [
      {
        name: "Amphotericin B",
        aka: "Amphotericin B Deoxycholate · Liposomal Amphotericin B · Amphotericin B Lipid Complex",
        summary: "Polyene antifungal with the broadest fungicidal activity. First-line for severe systemic fungal infections; liposomal formulations dramatically reduce nephrotoxicity.",
        moa: "Bind **ergosterol** in fungal cell membrane to form transmembrane pores, causing leakage of ions and cell death.",
        use: "Invasive aspergillosis; cryptococcal meningitis (induction); severe candidiasis; mucormycosis; histoplasmosis; coccidioidomycosis.",
        se: "**Nephrotoxicity** (liposomal formulation greatly reduces this); **infusion-related reactions** ('shake and bake'); **hypokalemia and hypomagnesemia**.",
        ci: "Renal failure without liposomal formulation.",
        pk: "IV only. Liposomal formulations reduce peak plasma levels and direct tubular exposure, markedly lowering nephrotoxicity.",
        pearl: "**Liposomal amphotericin B reduces nephrotoxicity ~3-fold** compared to conventional. The **'shake and bake' infusion reaction** is histamine-mediated, not an IgE allergy; pretreat and slow the infusion."
      },
      {
        name: "Azole Antifungals",
        aka: "Fluconazole · Itraconazole · Voriconazole · Posaconazole · Isavuconazole · Ketoconazole",
        summary: "Inhibit ergosterol synthesis by blocking CYP51. Voriconazole is gold standard for invasive aspergillosis. Extensive CYP drug interactions.",
        moa: "Inhibit **CYP51 (lanosterol demethylase)** in fungal cells to block ergosterol synthesis, impairing membrane function.",
        use: "Fluconazole: Candida infections, cryptococcal meningitis maintenance. Voriconazole: **invasive aspergillosis**. Itraconazole: histoplasmosis, blastomycosis.",
        se: "**Hepatotoxicity**; **QTc prolongation**; **CYP450 inhibition** (major drug interactions). Voriconazole: **visual disturbances** (photopsia), periostitis, **skin squamous cell carcinoma**. Itraconazole: negative inotropy. Ketoconazole: adrenal insufficiency.",
        ci: "Concurrent QTc-prolonging drugs; concurrent drugs with narrow TI metabolized by CYP3A4. Itraconazole: HFrEF.",
        pk: "Fluconazole has excellent CSF penetration. Voriconazole has non-linear PK. All are significant CYP3A4 inhibitors.",
        pearl: "**Voriconazole visual side effects** occur in ~30% of patients and are reversible. **Voriconazole-associated SCC** with prolonged use requires sun protection. Fluconazole has the **best CSF penetration** of all azoles."
      },
      {
        name: "Echinocandins & Flucytosine",
        aka: "Caspofungin · Micafungin · Anidulafungin · Flucytosine",
        summary: "Echinocandins block fungal cell wall beta-glucan synthesis; flucytosine inhibits fungal nucleic acid synthesis. Flucytosine is used only in combination.",
        moa: "**Echinocandins:** non-competitive inhibition of **beta-(1,3)-D-glucan synthase**. **Flucytosine:** deaminated to **5-fluorouracil (5-FU)**, incorporated into RNA, and inhibits thymidylate synthase.",
        use: "Echinocandins: candidemia/invasive candidiasis (first-line), empiric antifungal therapy in febrile neutropenia. Flucytosine: cryptococcal meningitis induction (always combined with amphotericin B).",
        se: "Echinocandins: well tolerated, mild LFT elevation. Flucytosine: **bone marrow suppression** (dose-dependent), hepatotoxicity.",
        ci: "Flucytosine: **never as monotherapy** (rapid resistance develops), severe renal failure without dose adjustment.",
        pk: "Echinocandins: IV only, minimal drug interactions (not CYP-based). Flucytosine: oral, renally eliminated (strict dose adjustment in CKD).",
        pearl: "**Echinocandins have the fewest drug interactions** of all systemic antifungals. **Flucytosine must never be used alone** due to rapid resistance."
      },
      {
        name: "Dermatophyte Drugs",
        aka: "Terbinafine · Griseofulvin · Nystatin · Ciclopirox",
        summary: "Target superficial fungal infections of skin, hair, and nails. Terbinafine is first-line for onychomycosis; griseofulvin is used for tinea capitis in children.",
        moa: "**Terbinafine:** inhibit squalene epoxidase. **Griseofulvin:** bind microtubule-associated proteins to inhibit fungal mitosis. **Nystatin:** bind ergosterol to form pores (topical only).",
        use: "Terbinafine: onychomycosis, tinea pedis/corporis/cruris. Griseofulvin: tinea capitis (scalp). Nystatin: oral/vaginal/cutaneous candidiasis.",
        se: "Terbinafine: hepatotoxicity, taste disturbance, CYP2D6 inhibitor. Griseofulvin: photosensitivity, CYP inducer, teratogenicity.",
        ci: "Terbinafine: severe hepatic disease. Griseofulvin: pregnancy, porphyria.",
        pk: "Terbinafine: highly lipophilic, deposits in nail matrix for months. Griseofulvin: deposits in keratin, absorption enhanced by fatty meal.",
        pearl: "**Terbinafine accumulates in nail keratin** allowing short treatment courses to be effective. Griseofulvin is the **only effective oral drug for tinea capitis** as it deposits in newly forming keratin."
      }
    ]
  },
  {
    group: "Antivirals",
    drugs: [
      {
        name: "NRTIs & NNRTIs",
        aka: "Zidovudine · Tenofovir · Emtricitabine · Lamivudine · Abacavir · Stavudine · Efavirenz · Nevirapine · Rilpivirine · Doravirine",
        summary: "NRTIs are prodrugs incorporated as chain terminators into HIV DNA; NNRTIs are allosteric reverse transcriptase inhibitors.",
        moa: "**NRTIs:** phosphorylated intracellularly to triphosphate, competitively incorporated by reverse transcriptase, acting as chain terminators. **NNRTIs:** bind allosteric site on reverse transcriptase to inhibit polymerase activity.",
        use: "HIV combination antiretroviral therapy. Tenofovir/emtricitabine: PrEP. Zidovudine: maternal-to-child transmission prophylaxis. Lamivudine/tenofovir: HBV coinfection.",
        se: "NRTIs: **lactic acidosis and hepatic steatosis**. Zidovudine: bone marrow suppression. Tenofovir (TDF): nephrotoxicity and Fanconi syndrome. Abacavir: **hypersensitivity reaction** (HLA-B*5701). NNRTIs: rash. Efavirenz: CNS effects (vivid dreams, psychosis).",
        ci: "Abacavir: HLA-B*5701 positive (absolute CI). Efavirenz: 1st trimester pregnancy.",
        pk: "NRTIs require intracellular phosphorylation. TAF has lower plasma levels than TDF, reducing renal and bone toxicity. Efavirenz is a strong CYP inducer.",
        pearl: "**Screen HLA-B*5701 before every abacavir prescription** to prevent fatal hypersensitivity. **TAF is preferred over TDF** in renal disease or osteoporosis."
      },
      {
        name: "Protease & Integrase Inhibitors",
        aka: "Ritonavir · Atazanavir · Darunavir · Lopinavir · Raltegravir · Elvitegravir · Dolutegravir · Bictegravir · Cabotegravir",
        summary: "PIs block HIV protease to prevent viral maturation; INSTIs block integration of viral DNA into the host genome. INSTIs are preferred first-line ART.",
        moa: "**PIs:** bind HIV aspartyl protease preventing cleavage of gag-pol polyprotein. **INSTIs:** block HIV integrase preventing insertion of HIV cDNA into host chromosome.",
        use: "HIV treatment. Ritonavir is used as a pharmacokinetic booster. INSTIs are first-line ART. Cabotegravir is a long-acting injectable.",
        se: "PIs: **metabolic syndrome** (lipodystrophy, dyslipidemia, hyperglycemia), **hyperbilirubinemia** (atazanavir), kidney stones, extensive CYP3A4 inhibition (ritonavir). INSTIs: weight gain, insomnia.",
        ci: "PIs (with ritonavir): concurrent drugs with narrow TI metabolized by CYP3A4. Atazanavir: PPIs.",
        pk: "Ritonavir is used at sub-therapeutic doses to potently inhibit CYP3A4 and extend the half-life of co-administered PIs.",
        pearl: "**Ritonavir boosting** allows once-daily PI dosing by inhibiting CYP3A4. INSTIs have a **high genetic barrier to resistance**, making them universally first-line."
      },
      {
        name: "HIV Entry Inhibitors",
        aka: "Maraviroc · Enfuvirtide · Ibalizumab · Fostemsavir",
        summary: "Block HIV entry into CD4+ T cells. Used for treatment-experienced patients with multidrug-resistant HIV.",
        moa: "**Maraviroc:** antagonist of CCR5 co-receptor. **Enfuvirtide:** binds gp41 preventing fusion. **Ibalizumab:** binds CD4 receptor preventing post-attachment interaction.",
        use: "Salvage regimens for multidrug-resistant HIV. Maraviroc requires a co-receptor tropism assay before use.",
        se: "Maraviroc: hepatotoxicity. Enfuvirtide: **injection site reactions** (very common).",
        ci: "Maraviroc: CXCR4-tropic or dual/mixed-tropic HIV infection.",
        pk: "Maraviroc is a CYP3A4 substrate. Enfuvirtide requires SC injection twice daily.",
        pearl: "**Maraviroc requires a tropism test before prescribing** because it only blocks CCR5-tropic HIV."
      },
      {
        name: "Herpes & CMV Antivirals",
        aka: "Acyclovir · Valacyclovir · Famciclovir · Penciclovir · Ganciclovir · Valganciclovir · Foscarnet · Cidofovir",
        summary: "Nucleoside and pyrophosphate analogs targeting herpesvirus DNA polymerases. Acyclovir is first-line for HSV/VZV; ganciclovir for CMV.",
        moa: "**Acyclovir:** activated by **viral thymidine kinase (TK)**, inhibiting viral DNA polymerase. **Ganciclovir:** phosphorylated by CMV UL97 kinase. **Foscarnet:** directly inhibits viral DNA polymerase pyrophosphate binding site (bypasses viral TK).",
        use: "Acyclovir/valacyclovir: HSV, VZV, HSV encephalitis. Ganciclovir/valganciclovir: CMV retinitis/colitis. Foscarnet: acyclovir-resistant HSV, ganciclovir-resistant CMV.",
        se: "Acyclovir: **nephrotoxicity** (crystallizes in renal tubules). Ganciclovir: **bone marrow suppression**. Foscarnet: **severe nephrotoxicity**, electrolyte disturbances (hypocalcemia). Cidofovir: severe nephrotoxicity.",
        ci: "Ganciclovir: severe neutropenia/thrombocytopenia. Cidofovir: probenecid allergy.",
        pk: "Acyclovir has poor oral bioavailability (valacyclovir is the preferred oral prodrug). Foscarnet requires vigorous hydration. Cidofovir requires probenecid to reduce nephrotoxicity.",
        pearl: "**Acyclovir selective toxicity** relies on viral TK; **Foscarnet treats TK-deficient acyclovir-resistant HSV** by directly inhibiting the DNA polymerase without needing kinase activation."
      },
      {
        name: "Influenza Antivirals",
        aka: "Oseltamivir · Zanamivir · Baloxavir · Amantadine · Rimantadine",
        summary: "Neuraminidase inhibitors and endonuclease inhibitors for influenza A and B.",
        moa: "**Oseltamivir/zanamivir:** inhibit influenza neuraminidase, preventing virion release. **Baloxavir:** inhibit cap-dependent endonuclease. **Amantadine:** block M2 ion channel (obsolete for flu due to resistance).",
        use: "Treatment of influenza A and B (within 48 hr of symptoms).",
        se: "Oseltamivir: GI upset, rare neuropsychiatric events. Zanamivir: bronchospasm. Amantadine: CNS effects.",
        ci: "Zanamivir: severe asthma or COPD.",
        pk: "Oseltamivir is an oral prodrug, renally eliminated. Baloxavir is a single-dose treatment.",
        pearl: "**Neuraminidase inhibitors must be started within 48 hours** for maximum benefit. Amantadine is no longer used for influenza due to >99% resistance."
      },
      {
        name: "Ribavirin & Interferons",
        aka: "Ribavirin · Peginterferon alfa-2a · Peginterferon alfa-2b · Interferon beta-1a · Interferon beta-1b · Interferon gamma",
        summary: "Broad-spectrum antivirals and immunomodulators used for HCV, HBV, MS, and severe RSV.",
        moa: "**Ribavirin:** inhibits IMP dehydrogenase, depleting GTP. **Interferons:** activate JAK-STAT signaling to induce an antiviral state.",
        use: "Ribavirin: HCV, severe RSV pneumonia. Peginterferon alfa: HCV, HBV. IFN-beta: multiple sclerosis. IFN-gamma: chronic granulomatous disease.",
        se: "Ribavirin: **hemolytic anemia**, teratogenicity. Interferons: **flu-like syndrome**, **neuropsychiatric effects** (depression, suicidality), bone marrow suppression.",
        ci: "Ribavirin: pregnancy (two forms of contraception required). Interferons: severe depression, decompensated cirrhosis.",
        pk: "Ribavirin accumulates in erythrocytes causing prolonged hemolysis. Pegylation of interferons extends half-life for weekly dosing.",
        pearl: "**Ribavirin hemolytic anemia** is predictable; monitor hemoglobin. **Pegylation** reduces renal clearance, allowing once-weekly dosing instead of thrice-weekly."
      },
      {
        name: "Antimalarials",
        aka: "Chloroquine · Hydroxychloroquine · Mefloquine · Primaquine · Artemether-Lumefantrine · Artesunate · Quinine · Atovaquone-Proguanil · Doxycycline",
        summary: "Target different stages of the Plasmodium life cycle. ACTs are first-line for uncomplicated malaria; primaquine eradicates hypnozoites.",
        moa: "**Chloroquine:** inhibit heme polymerization. **Artemisinins:** generate free radicals. **Primaquine:** oxidative radical intermediates kill hepatic hypnozoites. **Quinine:** heme toxicity.",
        use: "Uncomplicated malaria: artemether-lumefantrine or atovaquone-proguanil. Severe malaria: IV artesunate. Radical cure (vivax/ovale): primaquine. Prophylaxis: atovaquone-proguanil, doxycycline, mefloquine.",
        se: "Chloroquine: **retinopathy**. Primaquine: **hemolytic anemia in G6PD deficiency**. Quinine: **cinchonism** (tinnitus, vertigo). Mefloquine: **neuropsychiatric** (psychosis - black box).",
        ci: "Primaquine: **G6PD deficiency** (always screen). Mefloquine: psychiatric disorders.",
        pk: "Chloroquine has an extremely long half-life (~50 days). Artemisinins have a very short half-life and must be combined with a partner drug.",
        pearl: "**Primaquine requires G6PD screening before use** and is the only drug that eliminates liver hypnozoites to prevent relapsing P. vivax/ovale malaria."
      },
      {
        name: "Anti-helminthics",
        aka: "Albendazole · Mebendazole · Ivermectin · Praziquantel · Pyrantel Pamoate · Diethylcarbamazine · Niclosamide",
        summary: "Target helminth microtubule synthesis, neuromuscular function, or tegument integrity.",
        moa: "**Albendazole:** inhibit tubulin polymerization. **Ivermectin:** bind glutamate-gated Cl- channels causing paralysis. **Praziquantel:** increase Ca2+ permeability of parasite tegument. **DEC:** activates host immune system.",
        use: "Albendazole: intestinal nematodes, neurocysticercosis. Ivermectin: strongyloidiasis, onchocerciasis, scabies. Praziquantel: **all trematodes and cestodes** (schistosomiasis, tapeworms). DEC: lymphatic filariasis.",
        se: "Albendazole: hepatotoxicity. Ivermectin: **Mazzotti reaction** (Jarisch-Herxheimer-like), encephalopathy in Loa loa. Praziquantel: **seizures** in neurocysticercosis (co-prescribe corticosteroids).",
        ci: "Albendazole: first trimester pregnancy. Praziquantel: **ocular cysticercosis** (treat surgically first to prevent inflammatory optic damage).",
        pk: "Albendazole absorption enhanced by fatty meal. Praziquantel has rapid absorption and extensive first-pass metabolism.",
        pearl: "**Praziquantel covers all flatworms (trematodes and cestodes)**. For neurocysticercosis, praziquantel kills cysts which provokes inflammation, so always co-prescribe dexamethasone."
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
        aka: "Omeprazole · Lansoprazole · Pantoprazole · Esomeprazole · Rabeprazole · Dexlansoprazole",
        summary: "Irreversibly inhibit the gastric H+/K+-ATPase proton pump to produce profound acid suppression. First-line for GERD and peptic ulcer disease.",
        moa: "Prodrugs activated in acidic canaliculus; covalently bind **H+/K+-ATPase (proton pump)** causing irreversible inhibition.",
        use: "GERD; peptic ulcer disease; H. pylori eradication; NSAID-induced gastropathy prevention; Zollinger-Ellison syndrome.",
        se: "**Hypomagnesemia**; **C. difficile** risk; **pneumonia** risk; **osteoporosis/fractures** with chronic use; drug interactions (omeprazole inhibits CYP2C19 decreasing clopidogrel activation).",
        ci: "Concurrent rilpivirine.",
        pk: "Take 30-60 min before meals. Irreversible pump binding extends duration of acid suppression to ~24-48 hours.",
        pearl: "**Omeprazole blocks CYP2C19**, reducing clopidogrel activation; **use pantoprazole** as the safer PPI with clopidogrel."
      },
      {
        name: "H2 Receptor Blockers",
        aka: "Famotidine · Ranitidine · Cimetidine · Nizatidine",
        summary: "Competitive H2 receptor antagonists that reduce histamine-stimulated gastric acid secretion.",
        moa: "Competitive antagonism at **H2 receptors** on gastric parietal cells to decrease cAMP and proton pump activity.",
        use: "GERD; peptic ulcer disease; stress ulcer prophylaxis.",
        se: "Cimetidine is a **potent CYP450 inhibitor** and has **anti-androgenic** effects (gynecomastia, impotence).",
        ci: "Cimetidine: concurrent drugs with narrow TI metabolized by CYP450.",
        pk: "Renally eliminated.",
        pearl: "**Famotidine is the preferred H2 blocker** because it lacks cimetidine's CYP inhibition and anti-androgen effects."
      },
      {
        name: "Ondansetron (5-HT3 Antagonists)",
        aka: "Ondansetron · Granisetron · Dolasetron · Palonosetron · Metoclopramide · Prochlorperazine · Dronabinol",
        summary: "Block serotonin-mediated vomiting signals. First-line for chemotherapy-induced and postoperative nausea.",
        moa: "**5-HT3 antagonists:** block **5-HT3 receptors** on vagal afferents and area postrema. **Metoclopramide:** D2 antagonist and 5-HT4 agonist (prokinetic).",
        use: "CINV; PONV. Metoclopramide: gastroparesis, GERD.",
        se: "Ondansetron: **QTc prolongation**, **constipation**. Metoclopramide: **tardive dyskinesia** (chronic use > 3 months carries risk), EPS.",
        ci: "Ondansetron: QTc >450 ms. Metoclopramide: bowel obstruction, Parkinson disease.",
        pk: "Hepatic metabolism.",
        pearl: "**Metoclopramide tardive dyskinesia** can be permanent; restrict use to <3 months. Ondansetron's QTc risk is dose-dependent."
      },
      {
        name: "Misoprostol & GI Mucosal Agents",
        aka: "Misoprostol · Sucralfate · Bismuth Subsalicylate · Aluminum Hydroxide · Magnesium Hydroxide",
        summary: "Cytoprotective and acid-neutralizing agents.",
        moa: "**Misoprostol:** PGE1 analog activating prostaglandin E receptors to increase mucus/bicarbonate. **Sucralfate:** polymerizes in acidic pH forming a physical barrier coating. **Antacids:** direct acid neutralization.",
        use: "Misoprostol: NSAID-induced gastropathy prevention, cervical ripening, labor induction, medication abortion. Sucralfate: stress ulcer prophylaxis. Antacids: heartburn.",
        se: "Misoprostol: **diarrhea**, uterine hyperstimulation. Sucralfate: constipation. Bismuth: **black stools and tongue**. Antacids: Aluminum causes constipation; Magnesium causes diarrhea.",
        ci: "Misoprostol: **pregnancy when uterine stimulation is not intended** (causes uterine rupture). Sucralfate: renal failure (aluminum accumulation).",
        pk: "Sucralfate requires acid for activation; do not co-administer with PPIs/antacids.",
        pearl: "**Misoprostol is contraindicated in pregnant patients** not intended to deliver. **Sucralfate requires acid** to polymerize, so avoid simultaneous PPI use."
      },
      {
        name: "Antidiarrheals & Loperamide",
        aka: "Loperamide · Diphenoxylate-Atropine · Bismuth Subsalicylate · Cholestyramine",
        summary: "Peripheral opioid receptor agonists slow GI motility; cholestyramine binds bile acids.",
        moa: "**Loperamide:** binds peripheral mu-opioid receptors in gut myenteric plexus to decrease peristalsis; does not cross BBB at therapeutic doses. **Cholestyramine:** binds bile acids.",
        use: "Loperamide: acute nonspecific diarrhea. Cholestyramine: bile acid diarrhea, hypercholesterolemia.",
        se: "Loperamide: **toxic megacolon** if used in infectious colitis. Cholestyramine: drug binding (separate by 4-6 hr).",
        ci: "Loperamide: **bloody diarrhea or suspected infectious diarrhea** (C. difficile, Shigella, STEC).",
        pk: "Loperamide is a P-glycoprotein substrate that keeps it out of the CNS at therapeutic doses.",
        pearl: "**Never use loperamide in suspected infectious diarrhea** (like E. coli O157:H7) as motility inhibition traps toxins and massively increases HUS/toxic megacolon risk."
      },
      {
        name: "Osmotic Laxatives",
        aka: "Polyethylene Glycol · Lactulose · Magnesium Hydroxide · Sodium Phosphate · Glycerin",
        summary: "Retain water in the intestinal lumen by osmotic pressure. Lactulose also lowers ammonia in hepatic encephalopathy.",
        moa: "**PEG:** non-absorbable polymer osmotically retains water. **Lactulose:** synthetic disaccharide fermented by colonic bacteria to organic acids, decreasing pH and preventing colonic ammonia absorption.",
        use: "PEG: chronic constipation. Lactulose: **hepatic encephalopathy**. Magnesium hydroxide: acute constipation.",
        se: "Lactulose: **bloating, flatulence, diarrhea**. Magnesium hydroxide: **hypermagnesemia** in renal failure. Sodium phosphate: phosphate nephropathy.",
        ci: "Magnesium hydroxide: renal failure. Sodium phosphate: CKD.",
        pk: "PEG is not absorbed or metabolized.",
        pearl: "**Lactulose treats hepatic encephalopathy** by acidifying the gut, converting absorbable NH3 to non-absorbable NH4+, which is then excreted."
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
        aka: "Lispro · Aspart · Glulisine · Regular Insulin · NPH Insulin · Glargine · Detemir · Degludec · Glipizide · Glyburide · Glimepiride · Repaglinide · Nateglinide",
        summary: "Insulin provides direct replacement; sulfonylureas and meglitinides stimulate endogenous insulin secretion.",
        moa: "**Insulin:** binds insulin receptor (tyrosine kinase) increasing GLUT4 translocation. **Sulfonylureas/Meglitinides:** close **ATP-sensitive K+ channels** on beta cells causing depolarization, calcium influx, and insulin release.",
        use: "Insulin: Type 1 DM, Type 2 DM, DKA (regular insulin IV), hyperkalemia. Sulfonylureas: Type 2 DM.",
        se: "**Hypoglycemia** (highest oral risk with sulfonylureas), weight gain, lipodystrophy. Glyburide has the highest hypoglycemia risk due to active renally cleared metabolites.",
        ci: "Sulfonylureas: Type 1 DM, renal failure (glyburide).",
        pk: "Rapid-acting (lispro/aspart/glulisine) for meals; Glargine/detemir/degludec for basal coverage.",
        pearl: "**Sulfonylurea hypoglycemia is glucose-independent**. For hyperkalemia, insulin drives potassium into cells via Na+/K+-ATPase upregulation; always give dextrose simultaneously to prevent hypoglycemia."
      },
      {
        name: "Metformin",
        aka: "Metformin",
        summary: "Biguanide that reduces hepatic glucose production. First-line oral agent for Type 2 DM; does not cause hypoglycemia as monotherapy.",
        moa: "Activates **AMPK** via inhibition of mitochondrial complex I, leading to decreased **hepatic gluconeogenesis** and increased peripheral insulin sensitivity.",
        use: "Type 2 DM (first-line); PCOS.",
        se: "**GI intolerance**; **vitamin B12 deficiency**; **lactic acidosis** (rare but serious, increased risk in renal failure or hypoxia).",
        ci: "**eGFR <30 mL/min/1.73m2** (lactic acidosis risk); acute illness with tissue hypoperfusion.",
        pk: "Renally eliminated unchanged.",
        pearl: "**Metformin lactic acidosis** risk is elevated in renal failure; hold metformin when GFR acutely drops (contrast, surgery, sepsis)."
      },
      {
        name: "GLP-1 Agonists & DPP-4 Inhibitors",
        aka: "Semaglutide · Liraglutide · Dulaglutide · Exenatide · Tirzepatide · Sitagliptin · Saxagliptin · Linagliptin · Alogliptin",
        summary: "GLP-1 agonists are potent injectables with cardiovascular and weight-loss benefits; DPP-4 inhibitors are mild oral agents.",
        moa: "**GLP-1 agonists:** activate GLP-1 receptors increasing glucose-dependent insulin secretion, decreasing gastric emptying, and increasing satiety. **DPP-4 inhibitors:** inhibit dipeptidyl peptidase-4 to decrease endogenous GLP-1 degradation.",
        use: "Type 2 DM; **Obesity** (semaglutide/tirzepatide); Cardiovascular risk reduction (GLP-1 agonists).",
        se: "GLP-1 agonists: **GI effects**, **acute pancreatitis**, possible **thyroid C-cell tumors**. DPP-4 inhibitors: nasopharyngitis, rare pancreatitis.",
        ci: "GLP-1 agonists: personal/family history of **medullary thyroid carcinoma** or MEN2.",
        pk: "GLP-1 agonists are SC injections. Linagliptin is the only DPP-4 inhibitor requiring no renal dose adjustment.",
        pearl: "**Semaglutide produces massive weight loss** and GLP-1 agonists reduce cardiovascular events. They are strictly contraindicated in patients with a history of medullary thyroid cancer."
      },
      {
        name: "SGLT2 Inhibitors",
        aka: "Empagliflozin · Dapagliflozin · Canagliflozin · Ertugliflozin",
        summary: "Block renal glucose reabsorption to cause glycosuria. Proven cardioprotective and nephroprotective; first-line for T2DM with HFrEF or CKD.",
        moa: "Inhibit **SGLT2** in the proximal tubule to decrease renal glucose reabsorption, leading to insulin-independent glucose lowering and osmotic diuresis.",
        use: "Type 2 DM; **HFrEF** (reduces CV mortality/hospitalizations); **CKD** with proteinuria.",
        se: "**Genital mycotic infections**, UTIs, **Euglycemic DKA** (ketone production despite near-normal glucose), volume depletion.",
        ci: "Type 1 DM (high euglycemic DKA risk); severe renal impairment (eGFR <20-30 limits glucose-lowering efficacy).",
        pk: "Oral once daily.",
        pearl: "**Euglycemic DKA** is a critical, underappreciated complication; always hold SGLT2 inhibitors 3-4 days before elective surgery."
      },
      {
        name: "Thiazolidinediones (TZDs)",
        aka: "Pioglitazone · Rosiglitazone · Troglitazone",
        summary: "PPAR-gamma agonists that improve insulin sensitivity in peripheral tissues, but cause significant weight gain and fluid retention.",
        moa: "Bind and activate **PPAR-gamma** in adipose tissue to increase transcription of GLUT4 and adiponectin, improving insulin sensitivity.",
        use: "Type 2 DM.",
        se: "**Weight gain**, **fluid retention/edema** (worsens heart failure), hepatotoxicity, **bladder cancer** risk (pioglitazone), bone fractures in women.",
        ci: "**Heart failure** (any class - fluid retention precipitates acute decompensation).",
        pk: "Oral. Slow onset of action requiring 4-12 weeks for maximal benefit due to nuclear receptor mechanism.",
        pearl: "**TZDs are absolutely contraindicated in heart failure** due to severe fluid retention."
      }
    ]
  },
  {
    group: "Bone / Mineral",
    drugs: [
      {
        name: "Calcitonin",
        aka: "Calcitonin-Salmon",
        summary: "Polypeptide hormone that inhibits osteoclast activity to rapidly lower serum calcium.",
        moa: "Binds **calcitonin receptors** on osteoclasts to decrease bone resorption.",
        use: "Acute hypercalcemia; Paget disease; osteoporosis (nasal spray).",
        se: "Nausea, flushing, tachyphylaxis (resistance develops within days).",
        ci: "Hypocalcemia.",
        pk: "Rapid onset within 2-4 hr (faster than bisphosphonates).",
        pearl: "**Calcitonin works faster than bisphosphonates** for acute hypercalcemia, making it an excellent bridge therapy, but tachyphylaxis limits chronic use."
      },
      {
        name: "Cinacalcet & Sevelamer",
        aka: "Cinacalcet · Sevelamer · Calcium Carbonate · Calcium Acetate · Lanthanum Carbonate",
        summary: "Manage mineral metabolism in CKD. Cinacalcet reduces PTH; sevelamer binds dietary phosphate.",
        moa: "**Cinacalcet:** positive allosteric modulator of the **calcium-sensing receptor (CaSR)** on parathyroid cells, decreasing PTH secretion. **Sevelamer:** non-absorbed polymer that binds **dietary phosphate** in the GI tract.",
        use: "Cinacalcet: secondary hyperparathyroidism in dialysis. Sevelamer: hyperphosphatemia in CKD/dialysis.",
        se: "Cinacalcet: **hypocalcemia**. Sevelamer: GI upset, decreased absorption of fat-soluble vitamins.",
        ci: "Cinacalcet: hypocalcemia. Sevelamer: bowel obstruction.",
        pk: "Sevelamer must be taken with meals.",
        pearl: "**Cinacalcet tricks the parathyroid into sensing high calcium**. **Sevelamer is calcium-free**, making it preferred in dialysis patients with vascular calcification."
      },
      {
        name: "Bisphosphonates & Osteoporosis Drugs",
        aka: "Alendronate · Risedronate · Ibandronate · Zoledronic Acid · Denosumab · Teriparatide · Romosozumab",
        summary: "Anti-resorptive and anabolic agents for osteoporosis.",
        moa: "**Bisphosphonates:** inhibit **farnesyl pyrophosphate synthase** decreasing osteoclast survival. **Denosumab:** monoclonal antibody against **RANK-L**. **Teriparatide:** recombinant PTH analog with anabolic effect. **Romosozumab:** anti-sclerostin antibody.",
        use: "Osteoporosis; hypercalcemia of malignancy (IV zoledronic acid).",
        se: "Bisphosphonates: **esophageal irritation/ulceration**, **osteonecrosis of the jaw (ONJ)**, **atypical femoral fractures**. Teriparatide: **osteosarcoma** risk.",
        ci: "Oral bisphosphonates: esophageal disorders, inability to sit upright. Teriparatide: prior radiation to skeleton, Paget disease.",
        pk: "Oral bisphosphonates have <1% bioavailability and must be taken on an empty stomach with a full glass of water.",
        pearl: "Patients taking oral bisphosphonates **must remain upright for 30 minutes** to prevent severe esophagitis. Bisphosphonates stay in the bone matrix for years, allowing for a drug holiday."
      }
    ]
  },
  {
    group: "Hormones",
    drugs: [
      {
        name: "ADH / Vaptans",
        aka: "Desmopressin · Vasopressin · Tolvaptan · Conivaptan",
        summary: "ADH analogs increase water reabsorption; vaptans block V2 receptors to promote aquaresis.",
        moa: "**Desmopressin:** selective V2 receptor agonist increasing AQP2 insertion in collecting duct. **Vaptans:** competitive V2 receptor antagonists increasing free water excretion.",
        use: "Desmopressin: **central diabetes insipidus**, von Willebrand disease, hemophilia A. Tolvaptan: **euvolemic/hypervolemic hyponatremia** (SIADH).",
        se: "Desmopressin: **hyponatremia/water intoxication**. Tolvaptan: **overly rapid Na+ correction** causing osmotic demyelination syndrome.",
        ci: "Tolvaptan: hypovolemic hyponatremia.",
        pk: "Vaptans require hospital initiation to monitor sodium correction rate.",
        pearl: "**Vaptans correct SIADH by removing free water without sodium loss**, but correcting sodium faster than 10-12 mEq/L per 24 hours risks fatal **osmotic demyelination syndrome**."
      },
      {
        name: "Growth Hormone Axis Drugs",
        aka: "Somatropin · Octreotide · Lanreotide · Pasireotide · Pegvisomant · Mecasermin",
        summary: "Modulate the GH-IGF-1 axis. Octreotide is widely used for acromegaly and variceal bleeding.",
        moa: "**Octreotide:** somatostatin analog activating SSTR2/5 to decrease GH, TSH, glucagon, insulin, and splanchnic blood flow. **Pegvisomant:** GH receptor antagonist.",
        use: "Somatropin: GH deficiency. Octreotide: **acromegaly**, **carcinoid syndrome**, **variceal bleeding**.",
        se: "Somatropin: insulin resistance. Octreotide: **cholelithiasis**, bradycardia, steatorrhea.",
        ci: "Somatropin: active malignancy, closed epiphyses.",
        pk: "Octreotide is available as a long-acting depot IM injection.",
        pearl: "**Octreotide for variceal bleeding** works by causing splanchnic vasoconstriction. It causes **cholelithiasis** by inhibiting CCK-mediated gallbladder emptying."
      },
      {
        name: "Pramlintide",
        aka: "Pramlintide",
        summary: "Synthetic amylin analog that slows gastric emptying and suppresses glucagon.",
        moa: "Activates amylin receptors to decrease gastric emptying rate and glucagon secretion.",
        use: "Type 1 and Type 2 DM as an adjunct to mealtime insulin.",
        se: "**Nausea**, **severe hypoglycemia** when combined with insulin without dose adjustment.",
        ci: "Hypoglycemia unawareness, gastroparesis.",
        pk: "SC injection given separately from insulin.",
        pearl: "**Pramlintide requires a 50% reduction in mealtime insulin dose** at initiation to prevent severe hypoglycemia."
      },
      {
        name: "Levothyroxine (T4)",
        aka: "Levothyroxine · Liothyronine · Desiccated Thyroid",
        summary: "Synthetic thyroxine (T4) is first-line replacement therapy for hypothyroidism.",
        moa: "Synthetic **T4** is peripherally deiodinated to active **T3**, which binds nuclear thyroid hormone receptors to regulate gene transcription.",
        use: "Hypothyroidism; myxedema coma.",
        se: "Symptoms of **hyperthyroidism** if over-replaced (tachycardia, heat intolerance); **bone loss**; **cardiac arrhythmias**.",
        ci: "Uncorrected adrenal insufficiency.",
        pk: "Long half-life (~7 days); taken consistently on an empty stomach. Subject to many absorption interactions (calcium, iron).",
        pearl: "**Never start full-dose levothyroxine in elderly patients with CAD** as it increases myocardial oxygen demand. In combined adrenal/thyroid insufficiency, **always give cortisol first** to prevent adrenal crisis."
      },
      {
        name: "Methimazole / PTU (Antithyroid Drugs)",
        aka: "Methimazole · Propylthiouracil · Carbimazole",
        summary: "Thioamides that block thyroid hormone synthesis. PTU is preferred in thyroid storm and first trimester pregnancy.",
        moa: "Inhibit **thyroid peroxidase (TPO)** to decrease iodine organification. **PTU additionally inhibits peripheral 5'-deiodinase** to block T4 to T3 conversion.",
        use: "Hyperthyroidism; **thyroid storm** (PTU); **first trimester pregnancy** (PTU).",
        se: "**Agranulocytosis** (idiosyncratic); rash; **PTU causes severe hepatotoxicity** and ANCA-positive vasculitis.",
        ci: "PTU: chronic long-term use (hepatotoxicity). Methimazole: first trimester pregnancy (teratogenic embryopathy).",
        pk: "Methimazole is once daily; PTU is dosed multiple times a day.",
        pearl: "**Agranulocytosis** presents as sudden fever or sore throat and requires immediate cessation. **PTU is used in the first trimester**, then switched to methimazole to balance teratogenic and hepatotoxic risks."
      },
      {
        name: "Corticosteroids",
        aka: "Prednisone · Methylprednisolone · Dexamethasone · Hydrocortisone · Budesonide · Triamcinolone · Fludrocortisone",
        summary: "Potent anti-inflammatory and immunosuppressive agents. Chronic use carries significant multi-system toxicity.",
        moa: "Activate **glucocorticoid receptors** which translocate to the nucleus, inhibiting NF-kB and decreasing pro-inflammatory gene transcription.",
        use: "Asthma/COPD exacerbations, autoimmune diseases, adrenal insufficiency (hydrocortisone).",
        se: "**Hyperglycemia**, **dyslipidemia**, **weight gain/central obesity**, **osteoporosis**, **proximal muscle weakness**, **HPA axis suppression**, cataracts, glaucoma.",
        ci: "Systemic fungal infections; live vaccines.",
        pk: "Dexamethasone does not cross-react with cortisol immunoassays.",
        pearl: "**Never abruptly stop corticosteroids** after prolonged use due to profound HPA axis suppression which can precipitate a fatal adrenal crisis."
      },
      {
        name: "Oral Contraceptives & Hormonal Contraception",
        aka: "Ethinyl Estradiol · Levonorgestrel · Norethindrone · Ulipristal · Drospirenone",
        summary: "Hormonal contraceptives prevent ovulation and alter cervical mucus/endometrium.",
        moa: "Provide **negative feedback** to hypothalamus/pituitary to decrease the LH surge and prevent ovulation.",
        use: "Contraception, endometriosis, dysmenorrhea, PCOS, acne.",
        se: "**Venous thromboembolism** (DVT/PE risk from estrogen), **hypertension**, decreased libido, breakthrough bleeding.",
        ci: "**Smokers >=35 yr**, history of DVT/PE, **migraine with aura** (increased stroke risk).",
        pk: "CYP3A4 inducers (rifampin, carbamazepine) drastically reduce efficacy.",
        pearl: "**Migraine with aura** is an absolute contraindication for estrogen-containing OCPs due to a severely increased risk of stroke. **Rifampin destroys OCP efficacy**."
      },
      {
        name: "Androgens, Anti-Androgens & 5α-Reductase Inhibitors",
        aka: "Testosterone · Spironolactone · Bicalutamide · Flutamide · Enzalutamide · Cyproterone · Finasteride · Dutasteride",
        summary: "Modulate androgen signaling for BPH, prostate cancer, and alopecia.",
        moa: "**Anti-androgens** (bicalutamide): competitive AR antagonists. **5a-Reductase inhibitors** (finasteride): block conversion of testosterone to the more potent DHT.",
        use: "BPH and alopecia (finasteride); metastatic prostate cancer (bicalutamide).",
        se: "Testosterone: **erythrocytosis**, testicular atrophy. Finasteride: **sexual dysfunction**, gynecomastia, **decreases PSA by 50%**.",
        ci: "Finasteride: pregnancy (Category X - women of childbearing age should not handle crushed pills).",
        pk: "Dutasteride has an extremely long half-life (~5 weeks).",
        pearl: "**Finasteride reduces serum PSA levels by ~50%**; you must double the measured PSA to accurately screen for prostate cancer."
      },
      {
        name: "GnRH Agonists & Antagonists",
        aka: "Leuprolide · Goserelin · Triptorelin · Histrelin · Degarelix · Relugolix · Cetrorelix · Ganirelix",
        summary: "GnRH agonists paradoxically suppress gonadotropins after an initial flare; antagonists produce immediate suppression.",
        moa: "**GnRH agonists:** continuous administration initially stimulates LH/FSH ('flare') followed by receptor downregulation and chemical castration. **GnRH antagonists:** competitive antagonism for immediate suppression.",
        use: "Prostate cancer, endometriosis, uterine fibroids, central precocious puberty.",
        se: "**Hot flashes**, **osteoporosis**, sexual dysfunction. GnRH agonists: **tumor flare** (initial testosterone spike).",
        ci: "GnRH agonist without anti-androgen co-prescription in patients with **spinal cord metastases**.",
        pk: "Available as long-acting depot injections.",
        pearl: "**GnRH agonist tumor flare** can cause catastrophic spinal cord compression in metastatic prostate cancer; always start an anti-androgen (bicalutamide) concurrently."
      },
      {
        name: "Oxytocin & Tocolytics",
        aka: "Oxytocin · Terbutaline · Ritodrine · Indomethacin · Nifedipine · Magnesium Sulfate",
        summary: "Uterotonics stimulate contractions; tocolytics suppress preterm contractions.",
        moa: "**Oxytocin:** activates Gq-coupled receptors increasing intracellular calcium. **Indomethacin:** COX inhibitor decreasing prostaglandins. **Nifedipine:** CCB.",
        use: "Oxytocin: labor induction, postpartum hemorrhage. Tocolytics: delay preterm labor to allow steroid administration.",
        se: "Oxytocin: **antidiuretic effect** (hyponatremia with excessive fluids), uterine hyperstimulation. Indomethacin: **premature closure of ductus arteriosus**.",
        ci: "Oxytocin: unfavorable fetal position. Indomethacin: >32 weeks gestation.",
        pk: "Oxytocin has a very short half-life requiring continuous IV infusion.",
        pearl: "**Oxytocin is structurally related to ADH** and can cause severe water intoxication/hyponatremia at high doses."
      },
      {
        name: "Fludrocortisone",
        aka: "Fludrocortisone · Aldosterone · Eplerenone · Spironolactone",
        summary: "Primary synthetic mineralocorticoid used for adrenal insufficiency and orthostatic hypotension.",
        moa: "Binds the **mineralocorticoid receptor** in the distal nephron to increase transcription of ENaC and Na+/K+-ATPase, retaining sodium and excreting potassium.",
        use: "**Primary adrenal insufficiency (Addison disease)**, orthostatic hypotension.",
        se: "**Hypertension**, **hypokalemia**, **edema**.",
        ci: "Uncontrolled hypertension, CHF.",
        pk: "High potency mineralocorticoid activity.",
        pearl: "In Addison disease, **both glucocorticoid (hydrocortisone) and mineralocorticoid (fludrocortisone) replacement are required** to prevent life-threatening hypotension and hyperkalemia."
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
        aka: "Albuterol · Levalbuterol · Terbutaline · Salmeterol · Formoterol · Indacaterol · Vilanterol",
        summary: "Beta-2 agonists that bronchodilate by relaxing airway smooth muscle. SABAs are rescue inhalers; LABAs are controllers always used with inhaled corticosteroids in asthma.",
        moa: "Agonists at **beta-2-adrenergic receptors** on airway smooth muscle to increase cAMP, leading to smooth muscle relaxation and bronchodilation.",
        use: "Albuterol: acute asthma exacerbations (rescue). Salmeterol: asthma/COPD maintenance.",
        se: "**Tremor**, **tachycardia**, **hypokalemia**, hyperglycemia. **LABAs alone in asthma increase asthma-related deaths** (FDA black box).",
        ci: "**LABAs as asthma monotherapy** without ICS.",
        pk: "LABAs have lipophilic side chains prolonging duration to 12-24 hours.",
        pearl: "**LABAs must never be used as monotherapy in asthma** due to increased mortality; they must be combined with an ICS. Albuterol is also used IV to drive potassium into cells for hyperkalemia."
      },
      {
        name: "Inhaled Corticosteroids (ICS)",
        aka: "Fluticasone · Budesonide · Beclomethasone · Ciclesonide · Mometasone",
        summary: "Topical corticosteroids delivered directly to the airway to reduce eosinophilic inflammation. First-line controller therapy for persistent asthma.",
        moa: "Activate **glucocorticoid receptors** to decrease pro-inflammatory gene transcription, reducing airway edema and hyperresponsiveness.",
        use: "Persistent asthma (controller); COPD; allergic rhinitis.",
        se: "**Oropharyngeal candidiasis (thrush)**, **dysphonia/hoarseness**.",
        ci: "Status asthmaticus (not a rescue medication).",
        pk: "High first-pass hepatic metabolism limits systemic bioavailability of swallowed fraction.",
        pearl: "**ICS do not cause immediate bronchodilation**. Patients must rigorously rinse their mouth and spit after use to prevent **oral thrush**."
      },
      {
        name: "Leukotriene Antagonists (LTRAs)",
        aka: "Montelukast · Zafirlukast · Zileuton",
        summary: "Block leukotriene synthesis or receptors to reduce bronchoconstriction and eosinophilic inflammation.",
        moa: "**Montelukast:** competitive antagonism at **CysLT1 receptors**. **Zileuton:** inhibit **5-lipoxygenase (5-LO)** decreasing leukotriene synthesis.",
        use: "Mild persistent asthma; **aspirin-exacerbated respiratory disease (AERD)**.",
        se: "Montelukast: **neuropsychiatric effects** (FDA black box for suicidality/nightmares). Zileuton: **hepatotoxicity**.",
        ci: "Zileuton: hepatic disease.",
        pk: "Oral administration.",
        pearl: "Montelukast is highly effective for **AERD (Samter's triad)** because aspirin shunts arachidonic acid exclusively down the 5-lipoxygenase pathway."
      },
      {
        name: "Omalizumab & Biologic Asthma Therapies",
        aka: "Omalizumab · Mepolizumab · Reslizumab · Benralizumab · Dupilumab · Tezepelumab",
        summary: "Monoclonal antibodies targeting specific inflammatory mediators in severe asthma.",
        moa: "**Omalizumab:** binds **free IgE**. **Mepolizumab/Benralizumab:** target **IL-5** or its receptor. **Dupilumab:** blocks **IL-4R-alpha**.",
        use: "Severe persistent allergic asthma (Omalizumab); severe eosinophilic asthma (anti-IL-5).",
        se: "Injection site reactions; anaphylaxis (omalizumab).",
        ci: "Active helminthic infection (anti-IL-5 agents).",
        pk: "Subcutaneous injections every 2-8 weeks.",
        pearl: "Biomarkers guide therapy: high IgE points to **omalizumab**, while high eosinophils point to **IL-5 targeted therapies**."
      },
      {
        name: "Cromolyn Sodium",
        aka: "Cromolyn Sodium · Nedocromil",
        summary: "Mast cell stabilizer that prevents degranulation. Very safe but rarely used due to frequent dosing.",
        moa: "Blocks chloride channels on mast cells, preventing calcium influx and inhibiting mast cell degranulation.",
        use: "Exercise-induced bronchospasm; mild asthma prophylaxis.",
        se: "Throat irritation, cough; extremely safe overall.",
        ci: "Acute asthma attack (not a bronchodilator).",
        pk: "Negligible systemic absorption; requires dosing 3-4 times daily.",
        pearl: "**Cromolyn is purely prophylactic** and has absolutely no role in acute bronchospasm."
      },
      {
        name: "Antihistamines",
        aka: "Diphenhydramine · Chlorpheniramine · Hydroxyzine · Promethazine · Meclizine · Loratadine · Cetirizine · Fexofenadine · Levocetirizine · Desloratadine",
        summary: "Competitive H1 receptor antagonists. 1st-generation cross the BBB causing sedation; 2nd-generation are non-sedating.",
        moa: "Competitive antagonism at **H1 receptors**. 1st-generation also block muscarinic, alpha-1, and serotonin receptors.",
        use: "Allergic rhinitis, urticaria, motion sickness. Diphenhydramine: acute dystonia reversal.",
        se: "1st Gen: **sedation**, **anticholinergic effects**. Promethazine: **severe tissue necrosis** with IV/SC use.",
        ci: "1st Gen: narrow-angle glaucoma, BPH, elderly (Beers criteria). Promethazine: children <2 yr (respiratory depression).",
        pk: "2nd-gen agents are hydrophilic or P-gp substrates preventing CNS penetration.",
        pearl: "**First-generation antihistamines are highly dangerous in the elderly** due to potent anticholinergic side effects causing delirium and urinary retention."
      },
      {
        name: "Prostaglandins, Bosentan & PDE5 Inhibitors (PAH Drugs)",
        aka: "Epoprostenol · Treprostinil · Iloprost · Bosentan · Ambrisentan · Macitentan · Sildenafil · Tadalafil · Riociguat",
        summary: "Pulmonary arterial hypertension specific therapies that vasodilate and remodel the pulmonary vasculature.",
        moa: "**Epoprostenol:** activates IP receptor increasing cAMP. **Bosentan:** competitive antagonism at endothelin receptors. **Sildenafil:** inhibit **PDE5** increasing cGMP. **Riociguat:** directly stimulates soluble guanylate cyclase.",
        use: "Pulmonary arterial hypertension (WHO Group 1).",
        se: "Epoprostenol: **life-threatening rebound PAH if stopped**. Bosentan: **hepatotoxicity**, **teratogenic**. Sildenafil: hypotension, priapism.",
        ci: "Bosentan: pregnancy (Category X). Sildenafil/Riociguat: concurrent nitrates.",
        pk: "Epoprostenol requires continuous IV infusion (t1/2 ~3 min).",
        pearl: "**Epoprostenol infusions must never be interrupted** or fatal right heart failure can ensue. **Bosentan is highly teratogenic** requiring monthly pregnancy testing."
      },
      {
        name: "Sumatriptan (Triptans)",
        aka: "Sumatriptan · Rizatriptan · Almotriptan · Eletriptan · Frovatriptan · Naratriptan · Zolmitriptan",
        summary: "Selective serotonin agonists that abort migraines via cranial vasoconstriction.",
        moa: "Selective agonists at **5-HT1B/1D receptors** causing cranial vasoconstriction and inhibiting trigeminal nociceptive signaling.",
        use: "Acute moderate-to-severe migraine; cluster headache.",
        se: "**Chest tightness/pressure**, flushing, paresthesias.",
        ci: "**Coronary artery disease**, prior MI, Prinzmetal angina, uncontrolled hypertension.",
        pk: "Available via multiple routes including fast-acting subcutaneous injection.",
        pearl: "**Triptans are absolutely contraindicated in coronary artery disease** due to their risk of inducing severe coronary vasospasm."
      }
    ]
  }
],

onco: [
  {
    group: "Chemotherapy & Targeted Agents",
    drugs: [
      {
        name: "Antimetabolites",
        aka: "Methotrexate · 5-Fluorouracil · Pemetrexed · Capecitabine",
        summary: "S-phase specific nucleotide and folate analogs.",
        moa: "**Methotrexate:** inhibits **dihydrofolate reductase (DHFR)**. **5-FU:** inhibits **thymidylate synthase**.",
        use: "MTX: leukemia, rheumatoid arthritis, ectopic pregnancy. 5-FU: GI malignancies.",
        se: "MTX: **myelosuppression**, hepatotoxicity, **pulmonary fibrosis**, mucositis. 5-FU: **hand-foot syndrome**.",
        ci: "MTX: pregnancy. 5-FU: DPD deficiency.",
        pk: "MTX is renally eliminated. Capecitabine is an oral 5-FU prodrug.",
        pearl: "Methotrexate toxicity is reversed by **leucovorin** (folinic acid). DPD enzyme deficiency vastly exacerbates 5-FU toxicity."
      },
      {
        name: "Cytarabine, Cladribine & Gemcitabine",
        aka: "Cytarabine · Cladribine · Gemcitabine · Fludarabine",
        summary: "Nucleoside analogs that competitively inhibit DNA polymerase, causing chain termination.",
        moa: "Phosphorylated intracellularly to act as competitive inhibitors of **DNA polymerase**. Cytarabine is S-phase specific.",
        use: "Cytarabine: AML induction. Cladribine: **hairy cell leukemia**. Gemcitabine: pancreatic cancer.",
        se: "Cytarabine: **irreversible cerebellar toxicity** at high doses. Cladribine: prolonged immunosuppression.",
        ci: "Severe bone marrow failure.",
        pk: "Cytarabine has a very short half-life requiring continuous infusion.",
        pearl: "Perform daily cerebellar checks on patients receiving high-dose cytarabine. Cladribine is highly curative for hairy cell leukemia."
      },
      {
        name: "Hydroxyurea",
        aka: "Hydroxyurea",
        summary: "Ribonucleotide reductase inhibitor used for CML and sickle cell disease.",
        moa: "Inhibits **ribonucleotide reductase** to deplete dNTPs. Increases fetal hemoglobin (HbF) synthesis via epigenetic mechanisms.",
        use: "Sickle cell disease; CML; polycythemia vera.",
        se: "**Myelosuppression**, **macrocytosis**, painful leg ulcers.",
        ci: "Severe myelosuppression, pregnancy.",
        pk: "Excellent oral bioavailability.",
        pearl: "In sickle cell disease, hydroxyurea increases HbF, which dilutes HbS and prevents polymerization. **Macrocytosis (elevated MCV)** is a reliable marker of patient adherence."
      },
      {
        name: "Alkylating Agents",
        aka: "Cyclophosphamide · Ifosfamide · Chlorambucil · Melphalan · Busulfan · Carmustine · Dacarbazine · Temozolomide · Bendamustine · Cisplatin · Carboplatin · Oxaliplatin",
        summary: "Cell-cycle non-specific DNA cross-linkers.",
        moa: "Form covalent adducts to DNA (usually guanine N7), causing **cross-links** that halt replication.",
        use: "Cyclophosphamide: autoimmune disease, lymphomas. Cisplatin: solid tumors.",
        se: "Cyclophosphamide/Ifosfamide: **hemorrhagic cystitis**. Cisplatin: **nephrotoxicity, ototoxicity**. Oxaliplatin: peripheral neuropathy.",
        ci: "Pregnancy.",
        pk: "Cyclophosphamide is a prodrug requiring hepatic activation.",
        pearl: "Hemorrhagic cystitis from cyclophosphamide is caused by the toxic metabolite **acrolein** and is prevented by co-administering **mesna**."
      },
      {
        name: "Microtubule-Targeting Agents",
        aka: "Paclitaxel · Docetaxel · Nab-paclitaxel · Vincristine · Vinblastine · Vinorelbine · Eribulin",
        summary: "M-phase specific spindle poisons.",
        moa: "**Taxanes:** stabilize microtubules, preventing depolymerization. **Vinca alkaloids:** prevent microtubule polymerization.",
        use: "Breast, lung, ovarian cancers, lymphomas, leukemias.",
        se: "Taxanes: severe peripheral neuropathy, hypersensitivity. Vincristine: **profound peripheral and autonomic neuropathy** (constipation, ileus), vesicant.",
        ci: "**Intrathecal vincristine is fatal**.",
        pk: "Hepatic metabolism.",
        pearl: "**Intrathecal administration of vincristine is uniformly fatal**; it must only be given IV."
      },
      {
        name: "Topoisomerase Inhibitors",
        aka: "Irinotecan · Topotecan · Etoposide · Teniposide",
        summary: "Inhibit topoisomerase enzymes causing DNA strand breaks.",
        moa: "**Irinotecan:** inhibits Topoisomerase I causing single-strand breaks. **Etoposide:** inhibits Topoisomerase II causing double-strand breaks.",
        use: "Irinotecan: colorectal cancer. Etoposide: small cell lung cancer, testicular cancer.",
        se: "Irinotecan: **severe early and late diarrhea**. Etoposide: secondary leukemias.",
        ci: "UGT1A1*28 homozygous patients (irinotecan).",
        pk: "Irinotecan toxicity is severely increased in patients with the UGT1A1*28 polymorphism.",
        pearl: "Irinotecan causes biphasic diarrhea: treat the early cholinergic diarrhea with **atropine** and the late secretory diarrhea with **high-dose loperamide**."
      },
      {
        name: "Anthracyclines",
        aka: "Doxorubicin · Daunorubicin · Epirubicin · Idarubicin · Liposomal Doxorubicin",
        summary: "Intercalators and topoisomerase II inhibitors that generate free radicals.",
        moa: "Intercalate DNA, inhibit topoisomerase II, and generate **free oxygen radicals**.",
        use: "Breast cancer, lymphomas, sarcomas, AML.",
        se: "**Dilated cardiomyopathy**, myelosuppression, red/orange urine.",
        ci: "Pre-existing severe cardiac dysfunction.",
        pk: "Dose-reduce in hepatic dysfunction.",
        pearl: "Doxorubicin causes dose-dependent, irreversible dilated cardiomyopathy. The risk is mitigated by using the iron chelator **dexrazoxane**."
      },
      {
        name: "Bleomycin",
        aka: "Bleomycin",
        summary: "Glycopeptide antibiotic that generates free radicals causing DNA strand breaks.",
        moa: "Chelates iron and oxygen to generate reactive oxygen species causing DNA breaks.",
        use: "Testicular cancer, Hodgkin lymphoma.",
        se: "**Pulmonary fibrosis**, flagellate skin hyperpigmentation. Notably lacks severe myelosuppression.",
        ci: "**Supplemental O2 at high FiO2**.",
        pk: "Renally eliminated.",
        pearl: "High inspired oxygen concentrations (high FiO2) during surgery can trigger severe, fatal respiratory failure in patients with prior bleomycin exposure."
      },
      {
        name: "Targeted Therapy & Monoclonal Antibodies",
        aka: "Trastuzumab · Pertuzumab · Rituximab · Bevacizumab · Cetuximab · Ipilimumab · Nivolumab · Pembrolizumab · Bortezomib",
        summary: "Targeted antibodies and small molecules that block specific tumor-driving receptors or immune checkpoints.",
        moa: "**Trastuzumab:** anti-HER2. **Rituximab:** anti-CD20. **Bevacizumab:** anti-VEGF. **Cetuximab:** anti-EGFR. **Nivolumab/Pembrolizumab:** anti-PD-1.",
        use: "Specific biomarker-driven malignancies.",
        se: "Trastuzumab: **reversible cardiomyopathy**. Rituximab: **HBV reactivation**. Bevacizumab: impaired wound healing. Cetuximab: acneiform rash.",
        ci: "Cetuximab: KRAS-mutant tumors.",
        pk: "Intravenous administration.",
        pearl: "**Cetuximab is entirely ineffective if the tumor has a downstream KRAS mutation**. Trastuzumab cardiotoxicity is reversible, unlike doxorubicin."
      },
      {
        name: "Tyrosine Kinase Inhibitors (TKIs)",
        aka: "Imatinib · Dasatinib · Nilotinib · Ponatinib · Erlotinib · Gefitinib · Osimertinib · Crizotinib · Alectinib · Sunitinib · Sorafenib · Vemurafenib · Dabrafenib · Ibrutinib",
        summary: "Small molecule inhibitors of oncogenic tyrosine kinases.",
        moa: "Competitively block **ATP binding** at the kinase domain (e.g., Imatinib blocks BCR-ABL).",
        use: "Imatinib: CML. Erlotinib: EGFR-mutant NSCLC. Vemurafenib: BRAF V600E melanoma.",
        se: "Imatinib: fluid retention, hepatotoxicity. EGFR TKIs: acneiform rash. BRAF inhibitors: secondary squamous cell carcinomas.",
        ci: "BRAF inhibitors: BRAF wild-type tumors.",
        pk: "Oral administration; major CYP interactions.",
        pearl: "Imatinib specifically targets the t(9;22) BCR-ABL fusion protein. The **T315I gatekeeper mutation** causes resistance to most BCR-ABL TKIs."
      },
      {
        name: "Azathioprine",
        aka: "Azathioprine",
        summary: "Purine analog immunosuppressant.",
        moa: "Prodrug converted to 6-mercaptopurine (6-MP), which inhibits de novo purine synthesis.",
        use: "Organ transplant rejection, autoimmune disease.",
        se: "Myelosuppression, hepatotoxicity, increased infection risk.",
        ci: "Concurrent use with allopurinol without extreme dose reduction.",
        pk: "Metabolized by TPMT and xanthine oxidase.",
        pearl: "**Allopurinol blocks xanthine oxidase**, leading to a massive accumulation of 6-MP. You must drastically reduce the azathioprine dose if they are combined."
      },
      {
        name: "Hydroxychloroquine",
        aka: "Hydroxychloroquine · Chloroquine",
        summary: "Aminoquinoline antimalarial and immunomodulatory drug used for SLE.",
        moa: "Accumulates in acidic lysosomes, altering antigen processing and reducing TLR signaling.",
        use: "SLE, rheumatoid arthritis, malaria.",
        se: "**Irreversible retinopathy**, QTc prolongation.",
        ci: "G6PD deficiency.",
        pk: "Extremely long half-life (~50 days).",
        pearl: "Patients must have an **annual ophthalmology exam** after 5 years of use to monitor for irreversible bull's-eye maculopathy."
      },
      {
        name: "Mycophenolate Mofetil",
        aka: "Mycophenolate Mofetil · Mycophenolic Acid",
        summary: "Lymphocyte-selective immunosuppressant.",
        moa: "Reversibly inhibits **IMPDH**, starving lymphocytes of de novo guanosine synthesis.",
        use: "Lupus nephritis, transplant rejection.",
        se: "Severe GI toxicity, myelosuppression, **highly teratogenic**.",
        ci: "Pregnancy.",
        pk: "Prodrug converted to mycophenolic acid.",
        pearl: "Lymphocytes lack a purine salvage pathway, making them uniquely susceptible to IMPDH inhibition."
      },
      {
        name: "Cyclosporine & Tacrolimus",
        aka: "Cyclosporine · Tacrolimus",
        summary: "T-cell activation inhibitors used for solid organ transplant.",
        moa: "Cyclosporine binds cyclophilin; Tacrolimus binds FKBP-12. Both complexes inhibit **calcineurin**, preventing IL-2 transcription.",
        use: "Solid organ transplant.",
        se: "**Nephrotoxicity**, neurotoxicity. Cyclosporine: **gingival hyperplasia**, **hirsutism**. Tacrolimus: **diabetes mellitus**.",
        ci: "Concurrent use of nephrotoxic drugs.",
        pk: "Narrow therapeutic index requiring strict trough monitoring.",
        pearl: "Calcineurin inhibitor nephrotoxicity is driven by intense **afferent arteriolar vasoconstriction**."
      },
      {
        name: "mTOR Inhibitors",
        aka: "Sirolimus · Everolimus · Temsirolimus",
        summary: "Inhibit mTOR complex 1 to block T-cell proliferation.",
        moa: "Bind FKBP-12 to inhibit **mTORC1**, halting the cell cycle in the G1 phase.",
        use: "Kidney transplant, renal cell carcinoma.",
        se: "**Severe impaired wound healing**, hyperlipidemia, **non-infectious pneumonitis**.",
        ci: "Early post-transplant period with recent surgical wounds.",
        pk: "CYP3A4 substrates with narrow therapeutic indices.",
        pearl: "Due to severe impairment of fibroblast proliferation, mTOR inhibitors are generally avoided in the immediate post-operative period."
      }
    ]
  }
],

toxicology: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Drug Antidotes",
        aka: "Flumazenil · Naloxone · N-Acetylcysteine · Atropine · Pralidoxime · Physostigmine · Protamine · Vitamin K · FFP · PCC · Digoxin-specific Fab · Methylene Blue · Hydroxocobalamin · Fomepizole · Glucagon · Deferoxamine",
        summary: "Specific antidotes that reverse toxicity by competitive antagonism, enzyme reactivation, or toxin sequestration.",
        moa: "Target specific receptor antagonism, enzyme reactivation, or toxin chelation.",
        use: "Acetaminophen: NAC. Benzodiazepines: Flumazenil. Opioids: Naloxone. Organophosphates: Atropine, then Pralidoxime. TCAs/anticholinergics: Physostigmine. Heparin: Protamine. Beta-blockers: Glucagon.",
        se: "Flumazenil can precipitate seizures in dependent patients.",
        ci: "Flumazenil: BZD-dependent patients.",
        pk: "Naloxone and Flumazenil have shorter half-lives than the toxins they reverse, requiring observation.",
        pearl: "Treat organophosphate poisoning with **atropine first** to clear muscarinic symptoms, followed rapidly by **pralidoxime** to regenerate acetylcholinesterase before the enzyme permanently 'ages'."
      },
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "N-Acetylcysteine · Acetaminophen",
        summary: "Hepatotoxin and its glutathione-restoring antidote.",
        moa: "Toxic NAPQI metabolite destroys hepatocytes when glutathione is depleted. **NAC provides cysteine** to restore glutathione and detoxify NAPQI.",
        use: "Acetaminophen overdose.",
        se: "IV NAC can cause an anaphylactoid reaction (flushing, bronchospasm).",
        ci: "None in the setting of acute overdose.",
        pk: "Treatment is guided by plotting the serum level on the Rumack-Matthew nomogram.",
        pearl: "NAC is most effective if given within **8 hours** of ingestion, but should still be given in late presentations to improve hepatic microcirculation."
      },
      {
        name: "Ethanol Metabolism & Alcohol Antidotes",
        aka: "Disulfiram · Naltrexone · Acamprosate · Fomepizole · Thiamine",
        summary: "Toxic alcohol pathway modulators.",
        moa: "**Disulfiram:** inhibits aldehyde dehydrogenase. **Fomepizole:** inhibits alcohol dehydrogenase. **Thiamine:** transketolase cofactor.",
        use: "Disulfiram: alcohol abstinence. Fomepizole: methanol and ethylene glycol poisoning. Thiamine: Wernicke encephalopathy.",
        se: "Disulfiram causes severe flushing, hypotension, and vomiting if alcohol is consumed.",
        ci: "Disulfiram: recent alcohol use.",
        pk: "Fomepizole prevents the formation of toxic metabolites (formic acid, oxalic acid).",
        pearl: "Always administer **thiamine before glucose** in an alcoholic patient to prevent precipitating acute Wernicke encephalopathy."
      }
    ]
  }
]

}; // Closes the DRUGS object
