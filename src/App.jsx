import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Filter, ChevronDown, MapPin, BriefcaseBusiness, CheckCircle2, Languages } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const content = {
  cs: {
    label: "CZ",
    portfolio: "PORTFOLIO PROJEKTŮ",
    tagline: "Finance × Procesy × Technologie",
    intro: "Propojuji svět financí, byznysu a technologií s cílem přinášet efektivnější, transparentnější a digitálně podporovaná řešení. Využívám přitom potenciál AI a automatizace ke zjednodušování procesů, zvyšování kvality dat a podpoře lepšího rozhodování.",
    location: "Brno, Česká republika",
    focus: "Finanční transformace a procesní excelence",
    contact: "Kontakt doplnit do veřejné verze",
    strengths: [
      ["01", "Finance", "Zkušenosti s optimalizací procesů Purchase-to-Pay, Order-to-Cash, Record-to-Report a Budget-to-Forecast"],
      ["02", "Procesní design", "Design a optimalizace end-to-end procesů od analýzy současného stavu po implementaci cílového řešení"],
      ["03", "AI & Data", "Využití AI, automatizace a datové analytiky ke zvyšování kvality dat, efektivity procesů a podpoře rozhodování"]
    ],
    methodsTitle: "Metodiky a pracovní principy",
    methods: [
      ["APQC", "Strukturování a standardizace podnikových procesů podle uznávaného procesního rámce."],
      ["BPMN", "Vizualizace procesních toků, rozhodovacích bodů, rolí a odpovědností v Miro a Lucidchart."],
      ["Lean Six Sigma", "Identifikace příčin problémů, optimalizace stávajících procesů a návrh nových procesních řešení."],
      ["PRINCE2", "Řízení procesních změn, rolí, rizik, průběžného vyhodnocování a Lessons Learned."]
    ],
    selected: "Vybrané projekty",
    experience: "Portfolio zkušeností",
    search: "Hledat projekt nebo dovednost",
    all: "Všechny",
    detail: "Detail projektu",
    contribution: "Klíčové aktivity",
    result: "Výsledek",
    noResults: "Pro zvolené filtry nebyl nalezen žádný projekt.",
    footer: "Portfolio připravené jako příloha k CV · Před externím sdílením zkontrolujte citlivé firemní údaje a doplňte kontaktní odkazy.",
    projects: [
      {
        title: "P2P Automation & AI Invoice Processing Transformation",
        category: "Finanční transformace & AI",
        status: "Project Leadership",
        period: "2025–2027",
        role: "Transformation lead / Business owner",
        summary: "Modernizace a automatizace zpracování dodavatelských faktur od výměny OCR řešení přes datové validace až po roadmapu dalších AI a automatizačních iniciativ.",
        contribution: ["Analýza dat z reportingu a identifikace limitů původního OCR řešení", "Rozhodnutí o výměně OCR dodavatele a příprava business case", "Výběr technologie a projektové řízení implementace, včetně koordinace dodavatele a interních stakeholderů", "Definování akceptačních kritérií, UAT scénářů a promptingu podle specifik dodavatelů", "Návrh validací DIČ, IČO, bankovních účtů, dodavatelských dat a fraud-control scénářů", "Definování dalších fází P2P automatizace a cílových metrik"],
        impact: "Úspěšné nasazení nového AI OCR řešení bylo nezbytným prvním krokem pro širší P2P transformaci. Vytvořená roadmapa navazujících AI a automatizačních iniciativ umožňuje pokračovat ve zvyšování kvality dat a míry automatizovaného zpracování faktur.",
        skills: ["P2P", "AI/OCR", "Finance transformation", "Business analysis", "UAT", "Data validation", "Vendor management", "Project management", "Roadmapping"], featured: true
      },
      {
        title: "Cash Flow & Order-to-Cash Transformation",
        category: "Finanční transformace",
        status: "Process Leadership",
        period: "2023",
        role: "O2C process lead / Business analyst",
        summary: "Redesign O2C procesu vedoucí ke zlepšení cash flow, zrychlení inkasa pohledávek a zkrácení období externího financování.",
        contribution: ["End-to-end analýza O2C procesu a příčin pohledávek po splatnosti", "Zákaznická analýza – získávání zpětné vazby od zákazníků a identifikace příležitostí ke zlepšení spolupráce.", "Redesign a optimalizace interních procesů", "Návrh segmentované collections matice podle zákazníka a platebního chování", "Automatizace upomínek pomocí Power Automate", "Power BI reporting platební disciplíny, likvidity a cash-flow výhledu"],
        impact: "Změna procesu vystavování faktur a zasílání potřebné dokumentace přispěla ke zlepšení platební disciplíny i obchodních vztahů. Díky silnějšímu cash flow mohla společnost změnit přístup k externímu financování a snížit úrokové náklady.",
        skills: ["O2C", "Accounts Receivable", "Cash flow", "Collections", "Power Automate", "Power BI", "Process improvement", "Customer experience"], featured: true
      },
      {
        title: "Global Balance Sheet Reconciliation Platform",
        category: "Finanční systémy",
        status: "Business Cooperation",
        period: "2021-2022",
        role: "Controlling business analyst",
        summary: "Vývoj a implementace skupinové platformy pro řízení čtvrtletních rekonciliací napříč osmi zeměmi a několika ERP systémy.",
        contribution: ["Spolupráce na definování business požadavků za oblast Controllingu a jejich sladění s Data týmem a externími vývojáři", "Koordinace testování a User Acceptance Testing", "Komunikace s Reviewery a Approvery v jednotlivých entitách", "Příprava manuálů a uživatelských školení", "Správa uživatelských přístupů a řešení provozních problémů platformy", "Vyhodnocování a reporting čtvrtletních rekonciliací"],
        impact: "Centrální platforma sjednotila proces rekonciliací ve skupině, kde jednotlivé entity používaly rozdílné ERP systémy (SAP, Microsoft Dynamics 365 Business Central, lokální ERP systémy RU, KZ a NL). HQ a lokální finanční týmy získaly jednotné workflow a transparentní přehled o stavu, vlastnictví a schvalování rekonciliací.",
        skills: ["R2R", "Reconciliations", "Requirements", "Workflow design", "UAT", "Change management", "Training", "International rollout"], featured: true
      },
      {
        title: "Enterprise FP&A Platform for Budgeting & Forecasting",
        category: "Finanční systémy",
        status: "Business Analysis",
        period: "2024",
        role: "Business analyst",
        summary: "Vývoj finanční platformy pro budgeting, forecasting, cost allocation a manažerský reporting.",
        contribution: ["Business návrh řešení a procesů budgetingu a forecastingu", "Definování metodiky interních a externích MD rates", "Návrh alokačního modelu vnitroskupinových služeb", "Definování reportingových požadavků pro skupinu", "Testování, implementace a podpora uživatelů"],
        impact: "Jednotná platforma pro budget, forecast a reporting včetně ACT vs BG vs FC porovnání, plánování výnosů z interních služeb a skupinového manažerského reportingu.",
        skills: ["FP&A", "Budgeting", "Forecasting", "Management reporting", "Cost allocation", "Financial systems"], featured: true
      },
      {
        title: "Finance AI Operating Model",
        category: "AI & Automatizace",
        status: "Koncept",
        period: "2026",
        role: "Operating model designer",
        summary: "Návrh rámce pro systematickou identifikaci, posuzování, prioritizaci a řízení AI iniciativ ve financích. Model propojuje analýzu slabých míst ve finančních procesech s výběrem vhodných AI business cases, posouzením jejich hodnoty, rizika a realizovatelnosti a následným zařazením do roadmapy.",
        contribution: ["Identifikace slabých míst ve zmapovaných finančních procesech a vyhodnocení nejvhodnějšího způsobu optimalizace: procesní změna, IT development nebo AI iniciativa", "Prioritizační rámec vhodných business cases pro AI iniciativy podle hodnoty, rizika a realizovatelnosti", "Roadmapa iniciativ a návrh vlastnictví"],
        impact: "Koncept vytváří společný rámec pro identifikaci, výběr a řízenou realizaci AI use cases namísto izolovaných experimentů.",
        skills: ["AI strategy", "Operating model", "Governance", "Prioritization", "Adoption", "Community building"], featured: false
      },
      {
        title: "Fixed Assets Process Transformation",
        category: "Compliance & Procesy",
        status: "Process Leadership",
        period: "2026",
        role: "Process transformation lead / Business analyst",
        summary: "Komplexní transformace procesu správy dlouhodobého majetku zaměřená na jasné rozdělení odpovědností, standardizaci vstupních informací, optimalizaci CAPEX/OPEX klasifikace, revizi kapitalizačních limitů a zefektivnění evidence a inventarizace majetku. Součástí návrhu je také automatizace kontrol a propojení účetní a operativní evidence.",
        contribution: ["Mapování AS-IS procesu a identifikace hlavních problémů a rizik", "Návrh nové RACI matice a rozdělení odpovědností", "Analýza dopadu navrhovaných kapitalizačních limitů na P&L a potenciálních úspor administrativní práce", "Definování standardizovaných vstupních informací a dokumentace pro schvalování faktur", "Návrh pravidel pro klasifikaci CAPEX/OPEX a posuzování majetku", "Optimalizace evidence majetku a propojení účetní a operativní evidence", "Návrh digitalizace formulářů, automatizace kontrol a zefektivnění inventarizace", "Příprava implementační roadmapy a procesní dokumentace"],
        impact: "Výsledkem je návrh cílového modelu správy dlouhodobého majetku, který řeší hlavní nedostatky současného procesu. Připravené analýzy, návrh kapitalizačních limitů, standardizace vstupních informací a implementační roadmapa vytvářejí základV pro snížení administrativní zátěže, přesnější evidenci a efektivnější inventarizaci majetku",
        skills: ["Fixed Assets", "Process transformation", "CAPEX/OPEX", "RACI", "Capitalization policy", "Asset management", "Automation", "Inventory process"], featured: false
      }
    ]
  },
  en: {
    label: "EN",
    portfolio: "PROJECT PORTFOLIO",
    tagline: "Finance × Process × Technology",
    intro: "I connect finance, business, and technology to deliver more efficient, transparent, and digitally enabled solutions. I use the potential of AI and automation to simplify processes, improve data quality, and support better decision-making.",
    location: "Brno, Czech Republic",
    focus: "Finance transformation and process excellence",
    contact: "Add contact details to the public version",
    strengths: [
      ["01", "Finance", "Experience in optimizing Purchase-to-Pay, Order-to-Cash, Record-to-Report, and Budget-to-Forecast processes"],
      ["02", "Process Design", "Design and optimization of end-to-end processes, from current-state analysis to target-solution implementation"],
      ["03", "AI & Data", "Using AI, automation, and data analytics to improve data quality, process efficiency, and decision-making"]
    ],
    methodsTitle: "Methods and working principles",
    methods: [
      ["APQC", "Structuring and standardizing business processes using a recognized process framework."],
      ["BPMN", "Visualizing process flows, decision points, roles, and responsibilities in Miro and Lucidchart."],
      ["Lean Six Sigma", "Identification of root causes, optimization of existing processes, and design of new process solutions."],
      ["PRINCE2", "Managing process changes, roles, risks, ongoing evaluation, and lessons learned."]
    ],
    selected: "Selected projects",
    experience: "Experience portfolio",
    search: "Search by project or skill",
    all: "All",
    detail: "Project details",
    contribution: "Key contributions",
    result: "Outcome",
    noResults: "No projects match the selected filters.",
    footer: "Portfolio prepared as a CV attachment · Review sensitive company information and add contact links before external sharing.",
    projects: [
      {
        title: "P2P Automation & AI Invoice Processing Transformation",
        category: "Finance Transformation & AI",
        status: "Project Leadeship",
        period: "2025–2027",
        role: "Transformation lead / Business owner",
        summary: "Modernization and automation of supplier invoice processing, from replacing the OCR solution and introducing data validations to defining a roadmap of further AI and automation initiatives.",
        contribution: ["Analysis of reporting data and identification of limitations in the original OCR solution", "Decision to replace the OCR provider and preparation of the business case", "Technology assesment and project management of the implementation, including vendor and internal stakeholder coordination", "Definition of acceptance criteria, UAT scenarios, and supplier-specific prompting", "Design of validations for VAT IDs, company registration numbers, bank accounts, supplier data, and fraud-control scenarios", "Definition of further P2P automation phases and target metrics"],
        impact: "The successful implementation of the new AI OCR solution was an essential first step towards broader P2P transformation. The roadmap of follow-up AI and automation initiatives enables continued improvement in data quality and the level of automated invoice processing.",
        skills: ["P2P", "AI/OCR", "Finance transformation", "Business analysis", "UAT", "Data validation", "Vendor management", "Project management", "Roadmapping"], featured: true
      },
      {
        title: "Cash Flow & Order-to-Cash Transformation",
        category: "Finance Transformation",
        status: "Process Leadership",
        period: "2023",
        role: "O2C process lead / Business analyst",
        summary: "Redesign of the O2C process to improve cash flow, accelerate receivables collection, and shorten the period of external financing.",
        contribution: ["End-to-end analysis of the O2C process and root causes of overdue receivables", "Customer Analysis – gathering customer feedback and identifying opportunities to improve customer collaboration", "Redesign and optimization of internal processes", "Design of a segmented collections matrix based on customer and payment behavior", "Automation of reminders using Power Automate", "Power BI reporting for payment discipline, liquidity, and cash-flow outlook"],
        impact: "Changes to the invoicing process and the delivery of supporting documentation helped improve payment discipline and business relationships. Stronger cash flow enabled the company to adjust its approach to external financing and reduce interest costs.",
        skills: ["O2C", "Accounts Receivable", "Cash flow", "Collections", "Power Automate", "Power BI", "Process improvement", "Customer experience"], featured: true
      },
      {
        title: "Global Balance Sheet Reconciliation Platform",
        category: "Financial Systems",
        status: "Business Cooperation",
        period: "2021-2022",
        role: "Controlling business analyst",
        summary: "Development and implementation of a group-wide platform for managing quarterly balance sheet reconciliations across eight countries and multiple ERP systems.",
        contribution: ["Collaboration on defining business requirements for Controlling and aligning them with the Data team and external developers", "Coordination of testing and User Acceptance Testing", "Communication with reviewers and approvers across entities", "Preparation of user manuals and training", "User access management and resolution of platform-related operational issues", "Evaluation and reporting of quarterly reconciliations"],
        impact: "The central platform standardized the reconciliation process across a group whose entities used different ERP systems (SAP, Microsoft Dynamics 365 Business Central, local ERP systems in RU, KZ and NL). HQ and local finance teams gained a unified workflow and transparent visibility into reconciliation status, ownership, and approvals.",
        skills: ["R2R", "Reconciliations", "Requirements", "Workflow design", "UAT", "Change management", "Training", "International rollout"], featured: true
      },
      {
        title: "Enterprise FP&A Platform for Budgeting & Forecasting",
        category: "Financial Systems",
        status: "Business Analysis",
        period: "2024",
        role: "Business analyst",
        summary: "Development of a finance platform for budgeting, forecasting, cost allocation, and management reporting.",
        contribution: ["Business design of the solution and budgeting and forecasting processes", "Definition of methodology for internal and external MD rates", "Design of an allocation model for intercompany services", "Definition of group reporting requirements", "Testing, implementation, and user support"],
        impact: "A unified platform for budgeting, forecasting, and reporting, including ACT vs BG vs FC comparisons, planning of revenue from internal services, and group management reporting.",
        skills: ["FP&A", "Budgeting", "Forecasting", "Management reporting", "Cost allocation", "Financial systems"], featured: true
      },
      {
        title: "Finance AI Operating Model",
        category: "AI & Automation",
        status: "Concept",
        period: "2026",
        role: "Operating model designer",
        summary: "Design of a framework for the systematic identification, assessment, prioritization, and governance of AI initiatives in Finance. The model connects analysis of weaknesses in finance processes with the selection of suitable AI business cases, assessment of value, risk, and feasibility, and placement on the roadmap.",
        contribution: ["Identification of weaknesses in mapped finance processes and assessment of the most suitable optimization approach: process change, IT development, or AI initiative", "Prioritization framework for suitable AI business cases based on value, risk, and feasibility", "Initiative roadmap and ownership design"],
        impact: "The concept creates a common framework for identifying, selecting, and managing AI use cases instead of running isolated experiments.",
        skills: ["AI strategy", "Operating model", "Governance", "Prioritization", "Adoption", "Community building"], featured: false
      },
      {
        title: "Fixed Assets Process Transformation",
        category: "Compliance & Process",
        status: "Process Leadership",
        period: "2026",
        role: "Process transformation lead / Business analyst",
        summary: "Comprehensive transformation of the fixed asset management process, focusing on clear accountability, standardized input information, CAPEX/OPEX classification, capitalization threshold review and more efficient asset records and inventory management. The proposed changes also include automated controls and integration of financial and operational asset records.",
        contribution: ["AS-IS process mapping and identification of ksey issues and risk", "Design of a new RACI matrix and accountability framework", "Analysis of proposed capitalization threshold changes, P&L impact and potential administrative workload savings", "Definition of standardized input information and supporting documentation for invoice approval", "Design of CAPEX/OPEX classification rules and asset assessment criteria", "Optimization of asset records and integration of financial and operational data", "Proposal for digital forms, automated controls and more efficient inventory processes", "Preparation of the implementation roadmap and process documentation"],
        impact: "The project delivered a proposed target operating model for fixed asset management, addressing the key weaknesses of the existing process. The analyses, proposed capitalization thresholds, standardized input requirements and implementation roadmap provide a foundation for reducing administrative workload, improving asset records and increasing inventory efficiency",
        skills: ["Fixed Assets", "Process transformation", "CAPEX/OPEX", "RACI", "Capitalization policy", "Asset management", "Automation", "Inventory process"], featured: false
      }
    ]
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState("cs");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);
  const t = content[lang];
  const cats = useMemo(() => [t.all, ...Array.from(new Set(t.projects.map(p => p.category)))], [t]);
  const activeCategory = category || t.all;
  const filtered = useMemo(
    () => t.projects.filter(
      p => (activeCategory === t.all || p.category === activeCategory) &&
        `${p.title} ${p.summary} ${p.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase())
    ),
    [t, activeCategory, query]
  );
  const switchLang = next => { setLang(next); setCategory(""); setOpen(null); };

  return <div className="min-h-screen bg-[#f5f1e8] text-slate-900">
    <header className="relative overflow-hidden bg-[#132a2e] text-white">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 15% 20%, #e8b86d 0, transparent 27%), radial-gradient(circle at 82% 12%, #467a78 0, transparent 33%)"}} />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-semibold tracking-[0.22em] text-amber-200">{t.portfolio}</div>
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/75">{t.tagline}</div>
            <div className="flex rounded-full border border-white/20 bg-white/5 p-1" aria-label="Language selector">
              {(["cs","en"]).map(code => <button key={code} onClick={()=>switchLang(code)} className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${lang===code?"bg-amber-200 text-[#132a2e]":"text-white/70 hover:text-white"}`}>{content[code].label}</button>)}
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-[1.35fr_.65fr] md:items-end">
          <div><p className="mb-4 text-sm uppercase tracking-[0.2em] text-teal-200">Finance Process Manager</p><h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">Martina<br/><span className="text-amber-200">Belovičová</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{t.intro}</p></div>
          <div className="space-y-3 text-sm text-white/70"><div className="flex items-center gap-3"><MapPin size={17}/>{t.location}</div><div className="flex items-center gap-3"><BriefcaseBusiness size={17}/>{t.focus}</div></div>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <section className="mb-16 grid gap-5 md:grid-cols-3">{t.strengths.map(x => <Card key={x[0]} className="border-0 bg-white/70 shadow-sm"><CardContent className="p-6"><div className="text-sm font-bold text-teal-700">{x[0]}</div><h2 className="mt-8 text-xl font-semibold">{x[1]}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{x[2]}</p></CardContent></Card>)}</section>

      <section className="mb-16 rounded-3xl bg-white/70 p-8 shadow-sm md:p-10">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-700"><Languages size={16}/>{t.methodsTitle}</p>
        <div className="mt-6 flex flex-nowrap gap-4">{t.methods.map(m => <div key={m[0]} className="flex min-w-0 flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-slate-900">{m[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{m[1]}</p></div>)}</div>
      </section>

      <section>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-700"><Sparkles size={16}/>{t.selected}</div><h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.experience}</h2></div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <label className="relative"><Search className="absolute left-3 top-3 text-slate-400" size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search} className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-teal-700 focus:ring-2 md:w-64"/></label>
            <label className="relative"><Filter className="absolute left-3 top-3 text-slate-400" size={17}/><select value={activeCategory} onChange={e=>setCategory(e.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-sm outline-none md:w-56">{cats.map(c=><option key={c}>{c}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-slate-400" size={17}/></label>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2"><AnimatePresence>{filtered.map((p,i)=><motion.article layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.98}} transition={{delay:i*.03}} key={`${lang}-${p.title}`} className={`rounded-2xl border p-6 shadow-sm ${p.featured?"border-teal-900/10 bg-[#17383a] text-white":"border-slate-200 bg-white"}`}>
          <div className="flex items-start justify-between gap-4"><div><div className={`text-xs font-bold uppercase tracking-[0.16em] ${p.featured?"text-amber-200":"text-teal-700"}`}>{p.category}</div><h3 className="mt-3 text-2xl font-semibold leading-tight">{p.title}</h3></div><span className={`shrink-0 rounded-full px-3 py-1 text-xs ${p.featured?"bg-white/10 text-white/75":"bg-teal-50 text-teal-800"}`}>{p.status}</span></div>
          <p className={`mt-4 text-sm leading-6 ${p.featured?"text-white/70":"text-slate-600"}`}>{p.summary}</p>
          <div className={`mt-5 flex items-center justify-between border-t pt-4 text-xs ${p.featured?"border-white/10 text-white/55":"border-slate-100 text-slate-500"}`}><span>{p.role}</span><span>{p.period}</span></div>
          <button onClick={()=>setOpen(open===p.title?null:p.title)} className={`mt-5 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold ${p.featured?"bg-white/10 hover:bg-white/15":"bg-slate-50 hover:bg-slate-100"}`}>{t.detail}<ChevronDown size={17} className={`transition ${open===p.title?"rotate-180":""}`}/></button>
          <AnimatePresence>{open===p.title&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><div className="pt-5"><p className={`text-xs font-bold uppercase tracking-wider ${p.featured?"text-amber-200":"text-teal-700"}`}>{t.contribution}</p><ul className="mt-3 space-y-2">{p.contribution.map(c=><li key={c} className={`flex gap-2 text-sm ${p.featured?"text-white/75":"text-slate-600"}`}><CheckCircle2 size={16} className="mt-0.5 shrink-0"/>{c}</li>)}</ul><p className={`mt-5 rounded-xl p-4 text-sm leading-6 ${p.featured?"bg-black/10 text-white/75":"bg-amber-50 text-slate-700"}`}><b>{t.result}:</b> {p.impact}</p></div></motion.div>}</AnimatePresence>
          <div className="mt-5 flex flex-wrap gap-2">{p.skills.map(s=><span key={s} className={`rounded-full px-3 py-1 text-xs ${p.featured?"bg-white/10 text-white/65":"bg-slate-100 text-slate-600"}`}>{s}</span>)}</div>
        </motion.article>)}</AnimatePresence></div>
        {!filtered.length && <div className="rounded-2xl bg-white p-12 text-center text-slate-500">{t.noResults}</div>}
      </section>
      <footer className="py-10 text-center text-xs text-slate-500">{t.footer}</footer>
    </main>
  </div>;
}
