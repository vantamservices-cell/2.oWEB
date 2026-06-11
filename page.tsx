'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  Download, 
  Info,
  AlertCircle
} from 'lucide-react';

import { 
  Language, 
  DICTIONARY, 
  SERVICES_STORE, 
  PREMIUM_PACKAGES, 
  PITFALLS, 
  BLUEPRINT_CHECKLIST, 
  FAQS_STORE, 
  SINGLE_SERVICES, 
  CONSULTATIONS_STORE,
  TESTIMONIALS 
} from '../lib/data';

// ============================================================================
// SLEEK VECTOR MONOGRAM BRAND LOGO (PURE INLINE COMPONENT)
// ============================================================================
const VantamLogo = ({ className = "w-8 h-8", light = false }: { className?: string; light?: boolean }) => {
  const primaryColor = light ? "#ffffff" : "#0f172a";
  const accentColor = "#10b981"; // Emerald anchor
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transition-all duration-300 transform hover:scale-110`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15 25 L45 83 C47 87, 53 87, 55 83 L85 25" 
        stroke={primaryColor} 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M38 18 L50 42 L62 18" 
        stroke={accentColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default function VantamsHub() {
  const [lang, setLang] = useState<Language>('uk');
  const [selectedPackage, setSelectedPackage] = useState<string>('pkg_setup');
  
  const [calculatorToggles, setCalculatorToggles] = useState<Record<string, boolean>>({
    scam: true,
    fine: false,
    insurance: true,
    hostel: false
  });
  
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    c1: true,
    c2: false,
    c3: false
  });
  
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({
    f1: true
  });
  
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  // Carousel slider state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);

  // Inquiry contact form parameters
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInquiryType, setFormInquiryType] = useState('packages');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  // Modular configuration data binders
  const dict = useMemo(() => DICTIONARY[lang], [lang]);
  const sList = useMemo(() => SERVICES_STORE[lang], [lang]);

  // Cost calculation score board
  const calculatorTotal = useMemo(() => {
    return PITFALLS.reduce((sum, item) => {
      if (calculatorToggles[item.id]) {
        return sum + item.cost;
      }
      return sum;
    }, 0);
  }, [calculatorToggles]);

  const toggleCalculatorItem = (id: string) => {
    setCalculatorToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Checklist computation rules
  const checklistCategory = (cat: 'prep' | 'arrival' | 'settle') => {
    return BLUEPRINT_CHECKLIST.filter(item => item.category === cat);
  };

  const toggleChecklist = (id: string) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const progressPercent = useMemo(() => {
    const total = BLUEPRINT_CHECKLIST.length;
    const completed = Object.values(completedTasks).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  }, [completedTasks]);

  const currentSelectedPkgObj = useMemo(() => {
    return PREMIUM_PACKAGES.find(p => p.id === selectedPackage) || PREMIUM_PACKAGES[1];
  }, [selectedPackage]);

  // Risk exposure meter warning matrix
  const riskStatus = useMemo(() => {
    if (calculatorTotal <= 1000) {
      return { 
        label: dict.calcRiskLow, 
        desc: dict.calcRiskLowDesc, 
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200' 
      };
    } else if (calculatorTotal <= 2500) {
      return { 
        label: dict.calcRiskMedium, 
        desc: dict.calcRiskMediumDesc, 
        color: 'text-amber-700 bg-amber-50 border-amber-200' 
      };
    } else {
      return { 
        label: dict.calcRiskHigh, 
        desc: dict.calcRiskHighDesc, 
        color: 'text-rose-600 bg-rose-50 border-rose-250' 
      };
    }
  }, [calculatorTotal, dict]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Click on single service triggers auto-select in form
  const handleSelectSingleService = (serviceId: string) => {
    setFormInquiryType('single');
    const serviceObj = SINGLE_SERVICES.find(s => s.id === serviceId);
    if (serviceObj) {
      setFormMessage(lang === 'uk' 
        ? `Мене цікавить окрема послуга: ${serviceObj.name.uk}` 
        : lang === 'ru' 
        ? `Меня интересует разовая услуга: ${serviceObj.name.ru}` 
        : `I am interested in the standalone service: ${serviceObj.name.en}`
      );
    }
    scrollToContact();
  };

  const handleSelectConsultation = (consultationId: string) => {
    setFormInquiryType('consultation');
    const consultationObj = CONSULTATIONS_STORE.find(c => c.id === consultationId);
    if (consultationObj) {
      setFormMessage(lang === 'uk'
        ? `Мене цікавить консультація: ${consultationObj.name.uk}`
        : lang === 'ru'
        ? `Меня интересует консультация: ${consultationObj.name.ru}`
        : `I am interested in the consultation: ${consultationObj.name.en}`
      );
    }
    scrollToContact();
  };

  const handleSelectPackage = (packageId: string) => {
    const packageObj = PREMIUM_PACKAGES.find(p => p.id === packageId);
    setSelectedPackage(packageId);
    setFormInquiryType('packages');
    if (packageObj) {
      setFormMessage(lang === 'uk'
        ? `Мене цікавить пакет: ${packageObj.name.uk} ${packageObj.price}`
        : lang === 'ru'
        ? `Меня интересует пакет: ${packageObj.name.ru} ${packageObj.price}`
        : `I am interested in the package: ${packageObj.name.en} ${packageObj.price}`
      );
    }
    scrollToContact();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim() || !formConsent) {
      return;
    }
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  const handleResetForm = () => {
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setFormConsent(false);
    setFormState('idle');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white pb-24">
      
      {/* GLOBAL BANNER */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono tracking-wider py-2 px-4 flex flex-wrap justify-between items-center border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{dict.statusBanner}</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-slate-400">
          <span>{dict.statusScope}</span>
          <span>vantam.nl@proton.me</span>
        </div>
      </div>

      {/* HEADER CONTROLS */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo element with customized SVG vector mark */}
          <div className="flex items-center gap-2.5">
            <VantamLogo className="w-8.5 h-8.5" />
            <div>
              <div className="text-base font-black tracking-tighter text-slate-950 leading-none">VANTAM</div>
              <div className="text-[9px] text-slate-400 tracking-widest uppercase font-mono mt-0.5">{dict.navSub}</div>
            </div>
          </div>

          {/* Fully localized navigation labels */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold text-slate-500 uppercase font-mono tracking-tight">
            <a href="#why" className="hover:text-slate-900 transition-colors">{dict.navWhy}</a>
            <a href="#services" className="hover:text-slate-900 transition-colors">{dict.navServices}</a>
            <a href="#single-services" className="hover:text-slate-900 transition-colors">{dict.navSingleServices}</a>
            <a href="#packages" className="hover:text-slate-900 transition-colors">{dict.navPackages}</a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors">{dict.navCalculator}</a>
            <a href="#checklist" className="hover:text-slate-900 transition-colors">{dict.navChecklist}</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">{dict.navTestimonials}</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">{dict.navFaq}</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">{dict.navContact}</a>
          </nav>

          {/* Lang Selector */}
          <div className="bg-slate-100 p-1 rounded-lg border border-slate-200 flex items-center gap-0.5 shadow-xs">
            {[
              { code: 'uk', label: 'UA' },
              { code: 'ru', label: 'RU' },
              { code: 'en', label: 'EN' }
            ].map(l => (
              <button
                id={`lang-btn-${l.code}`}
                key={l.code}
                onClick={() => setLang(l.code as Language)}
                className={`text-[11px] font-extrabold tracking-wider px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                  lang === l.code 
                    ? 'bg-slate-950 text-white shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

        </div>
      </header>

      {/* CORE WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 space-y-24">
        
        {/* HERO BRAND UNIT */}
        <section className="relative overflow-hidden bg-slate-100 border border-slate-200 rounded-3xl p-6 md:p-12 shadow-xs space-y-6">
          <div className="absolute right-0 top-0 w-96 h-96 bg-radial from-slate-200/55 to-transparent pointer-events-none rounded-full"></div>
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase font-mono">{dict.heroBadge}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              {dict.heroHeadline}
            </h1>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
              {dict.heroSub}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a 
                href="#packages" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{dict.heroCtaPrimary}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#calculator" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-300 transition-all cursor-pointer"
              >
                <span>{dict.heroCtaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Micro-metrics bar */}
          <div className="border-t border-slate-200/60 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {[
              { count: dict.metric1Count, text: dict.metric1Text },
              { count: dict.metric2Count, text: dict.metric2Text },
              { count: dict.metric3Count, text: dict.metric3Text },
              { count: dict.metric4Count, text: dict.metric4Text }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-lg md:text-xl font-black text-slate-950 font-mono tracking-tight">{metric.count}</div>
                <div className="text-[10px] text-slate-500 font-medium">{metric.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SECTION / ETHICAL BOUNDARIES */}
        <section id="why" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-3 lg:col-span-1 border-l-4 border-slate-950 pl-4 py-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              {lang === 'uk' ? 'СТАНДАРТИ VANTAM' : lang === 'ru' ? 'СТАНДАРТЫ VANTAM' : 'VANTAM STANDARDS'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.whyTitle}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">{dict.whySub}</p>
          </div>

          {/* Trusted role card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase text-slate-950 tracking-wider font-mono">{dict.roleTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{dict.roleDesc}</p>
          </div>

          {/* Legal boundary card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase text-slate-950 tracking-wider font-mono">{dict.antiRoleTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{dict.antiRoleDesc}</p>
          </div>
        </section>

        {/* INTEGRATED SERVICE MATRIX */}
        <section id="services" className="space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              {lang === 'uk' ? 'ОСНОВНА СТРУКТУРА' : lang === 'ru' ? 'ОСНОВНАЯ СТРУКТУРА' : 'CORE STRUCTURE'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.servicesTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.servicesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-900">
            {sList.map((col, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category marker */}
                  <div className="border-b border-slate-100 pb-3 h-14">
                    <h3 className="text-xs font-black uppercase font-mono tracking-wider text-slate-950">{col.pillar}</h3>
                    <p className="text-[11px] text-slate-500 font-mono tracking-tight">{col.sub}</p>
                  </div>
                  
                  {/* Item loops */}
                  <div className="space-y-4 mt-6">
                    {col.items.map((item, iIdx) => (
                      <div key={iIdx} className="space-y-1">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-mono text-center">
                  {lang === 'uk' ? 'ПРАКТИЧНА СІТКА VANTAM' : lang === 'ru' ? 'ПРАКТИЧЕСКАЯ СЕТКА VANTAM' : 'VANTAM SUPPORT GRID'}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONSULTATIONS GRID */}
        <section id="consultations" className="space-y-8 pt-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">{dict.consultBadge}</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.consultTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.consultSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONSULTATIONS_STORE.map((consultation) => (
              <motion.div
                key={consultation.id}
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 gap-3">
                    <span className="text-[11px] font-extrabold uppercase bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-mono tracking-wider">{dict.consultBadge}</span>
                    <span className="text-sm font-black text-rose-600 font-mono tracking-tight">{consultation.price}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-black text-slate-950 uppercase font-mono tracking-wider leading-snug">{consultation.name[lang]}</h3>
                    <div className="text-xs font-bold text-slate-500 uppercase font-mono tracking-tight">{consultation.duration[lang]}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{consultation.desc[lang]}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <span className="font-black text-slate-900">{dict.consultResultLabel}</span> {consultation.result[lang]}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-black text-slate-800">{dict.consultNoteLabel}</span> {consultation.note[lang]}
                    </p>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    onClick={() => handleSelectConsultation(consultation.id)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    {consultation.cta[lang]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SINGLE SERVICES GRID */}
        <section id="single-services" className="space-y-8 pt-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">{dict.navSingleServices}</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.singleTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.singleSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SINGLE_SERVICES.map((serv) => (
              <motion.div 
                key={serv.id}
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 gap-3">
                    <span className="text-[11px] font-extrabold uppercase bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-mono tracking-wider">{dict.singleBadge}</span>
                    <span className="text-sm font-black text-rose-600 font-mono tracking-tight">{serv.price}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-black text-slate-950 uppercase font-mono tracking-wider leading-snug">{serv.name[lang]}</h3>
                    <div className="text-xs font-bold text-slate-500 uppercase font-mono tracking-tight">{serv.mode[lang]}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{serv.desc[lang]}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{serv.limit[lang]}</span>
                    </p>
                    {serv.notIncluded && (
                      <p className="text-xs text-slate-500 leading-relaxed">{serv.notIncluded[lang]}</p>
                    )}
                  </div>
                </div>

                <div className="pt-5">
                  <button 
                    onClick={() => handleSelectSingleService(serv.id)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    {dict.singleCta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Important Housing Disclaimer */}
          <div className="max-w-3xl mx-auto bg-amber-50/50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
            <Info className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 font-mono">{dict.housingDisclaimerTitle}</h4>
              <p className="text-xs text-slate-700 leading-relaxed">{dict.housingDisclaimerText}</p>
            </div>
          </div>
        </section>

        {/* COST OF MISTAKE CALCULATOR */}
        <section id="calculator" className="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-rose-500 font-bold">
              {lang === 'uk' ? 'РЕАЛЬНА ВАРТІСТЬ ПОМИЛОК' : lang === 'ru' ? 'РЕАЛЬНАЯ СТОИМОСТЬ ОШИБОК' : 'REAL FINANCIAL EXPOSURE SCORE'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.calculatorTitle}</h2>
            <p className="text-xs text-slate-600 max-w-2xl">{dict.calculatorSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Risk toggles list */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold text-slate-600 uppercase font-mono tracking-wider">{dict.calculatorInfo}</p>
              
              <div className="space-y-2">
                {PITFALLS.map((item) => {
                  const isChecked = !!calculatorToggles[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCalculatorItem(item.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked 
                          ? 'bg-white border-rose-300 shadow-xs ring-1 ring-rose-200' 
                          : 'bg-transparent border-slate-200/70 opacity-90 hover:opacity-100'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                        isChecked ? 'bg-rose-500 border-rose-500 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-bold text-slate-900 leading-tight">{item.label[lang]}</span>
                          <span className="text-xs font-black text-rose-600 font-mono">+€{item.cost}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.explanation[lang]}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summation panel & active warning gauge */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-6">
                
                <div className="space-y-2 border-b border-slate-800 pb-5">
                  <div className="text-xs font-mono tracking-widest text-slate-300 uppercase">{dict.calcSidebarTitle}</div>
                  <div className="text-3xl md:text-4xl font-black text-rose-400 font-mono">€{calculatorTotal}</div>
                  
                  {/* Dynamic Risk Gauge bar visual */}
                  <div className="space-y-1 pt-1.5">
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
                      <div 
                        className="absolute top-0 left-0 h-full bg-rose-500 transition-all duration-300"
                        style={{ width: `${Math.min((calculatorTotal / 4575) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono text-right">
                      {lang === 'uk' ? 'МАКС. ПОТЕНЦІЙНІ ВТРАТИ' : lang === 'ru' ? 'МАКС. ПОТЕНЦИАЛЬНЫЕ ПОТЕРИ' : 'MAX POTENTIAL EXPOSURE'}: €4,575
                    </div>
                  </div>
                </div>

                {/* Sub-card presenting dynamic risk review message */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-300">{dict.calcRiskTextLabel}</div>
                  <div className={`border rounded-xl p-3.5 space-y-1 transition-all ${riskStatus.color}`}>
                    <div className="text-xs font-black uppercase font-mono tracking-wide">{riskStatus.label}</div>
                    <p className="text-xs leading-relaxed opacity-95">{riskStatus.desc}</p>
                  </div>
                </div>

                {/* Compare side-by-side with VANTAM setup */}
                <div className="space-y-3">
                  <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase">{dict.calcAlternative}</div>
                  
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between items-center border-b border-slate-700/60 pb-2">
                      <span className="text-xs font-bold text-slate-200">{dict.calcPackageLabel}</span>
                      <span className="text-xs font-black text-emerald-400 font-mono">€749</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {dict.calcPackageDesc}
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    {calculatorTotal > 749 ? (
                      <div className="text-xs text-emerald-400 font-medium font-mono">
                        {dict.calcSavingTag}: €{calculatorTotal - 749} + {lang === 'uk' ? 'абсолютний спокій сім\'ї' : lang === 'ru' ? 'абсолютное спокойствие семьи' : 'total mental peace of mind'}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-300 font-mono">
                        {dict.calcNoRiskSelected}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Regulatory Notice block to prevent housing agency confusion */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dict.calcFooterNotice}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* PACKAGES SELECTION GRID */}
        <section id="packages" className="space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              {lang === 'uk' ? 'ПРОЗОРІ ЦІНИ' : lang === 'ru' ? 'ПРОЗРАЧНЫЕ ЦЕНЫ' : 'TRANSPARENT FEES'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.pkgGridTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.pkgGridSub}</p>
          </div>

          <div className="flex justify-center gap-1.5 p-1 bg-slate-200/50 rounded-xl border border-slate-350 max-w-md mx-auto">
            {PREMIUM_PACKAGES.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPackage(p.id)}
                className={`flex-1 text-[11px] font-bold py-2 rounded-lg transition-all cursor-pointer ${
                  selectedPackage === p.id 
                    ? 'bg-slate-950 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {p.name[lang]}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900 text-[10px] font-mono font-bold tracking-widest text-slate-100 flex items-center justify-center transform rotate-45 translate-x-12 -translate-y-12 select-none">
              VANTAM
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest leading-none">{currentSelectedPkgObj.subtitle[lang]}</span>
                <h3 className="text-2xl font-black text-slate-950 leading-tight">{currentSelectedPkgObj.name[lang]}</h3>
                <div className="text-4xl font-black font-mono text-slate-950 tracking-tight">{currentSelectedPkgObj.price}</div>
                <p className="text-xs text-slate-600 font-mono tracking-tight flex items-center gap-1.5 border-t border-slate-100 pt-2.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentSelectedPkgObj.workload[lang]}</span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">{dict.pkgIdealTitle}</div>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-150 border-l-2 border-l-slate-900">
                  {currentSelectedPkgObj.idealFor[lang]}
                </p>
              </div>

              <div className="space-y-1 pt-1.5">
                <p className="text-sm text-slate-800 leading-relaxed font-semibold italic">
                  «{currentSelectedPkgObj.tagline[lang]}»
                </p>
              </div>

              <button
                onClick={() => handleSelectPackage(currentSelectedPkgObj.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                <span>{currentSelectedPkgObj.cta[lang]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Proposal Print triggers */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{dict.pdfExportTitle}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{dict.pdfExportDesc}</p>
                
                <button
                  id="pdf-download-btn"
                  onClick={() => setShowExportModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-200 transition-all cursor-pointer shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{dict.pdfBtn}</span>
                </button>
              </div>
            </div>

            {/* Inclusions and limitations */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 lg:pt-0">
              <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-5 space-y-4">
                <h4 className="text-xs font-black uppercase font-mono tracking-wider text-emerald-800 flex items-center gap-1.5 border-b border-emerald-100 pb-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {dict.pkgScopeTitle}
                </h4>
                <ul className="space-y-3">
                  {currentSelectedPkgObj.scope[lang].map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                      <span className="inline-block mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-5 space-y-4">
                <h4 className="text-xs font-black uppercase font-mono tracking-wider text-amber-800 flex items-center gap-1.5 border-b border-amber-100 pb-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  {dict.pkgLimitsTitle}
                </h4>
                <ul className="space-y-3">
                  {currentSelectedPkgObj.limits[lang].map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                      <span className="inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE BLUEPRINT CHECKLIST */}
        <section id="checklist" className="space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 space-y-6">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 font-bold">
                  {lang === 'uk' ? 'ВАШ ПЛАН АДАПТАЦІЇ' : lang === 'ru' ? 'ВАШ ПЛАН АДАПТАЦИИ' : 'YOUR SETUP PLAN'}
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">{dict.checklistTitle}</h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">{dict.checklistSub}</p>
              </div>
              
              <div className="shrink-0 flex items-center gap-4 bg-slate-800 border border-slate-700 p-4 rounded-2xl w-full md:w-auto justify-between shadow-md">
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-slate-400 uppercase font-mono tracking-tight">{dict.checklistProgressLabel}</div>
                  <div className="text-3xl font-black text-sky-400 font-mono tracking-tighter">{progressPercent}%</div>
                </div>
                <div className="w-3.5 h-16 bg-slate-755 rounded-full overflow-hidden relative border border-slate-700">
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-sky-400 transition-all duration-500"
                    style={{ height: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              
              {/* Pillar 1 */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>{dict.checklistPrepTab}</span>
                  <span className="text-[10px] text-slate-400">{dict.checklistPrepDesc}</span>
                </h3>
                <div className="space-y-2">
                  {checklistCategory('prep').map((task) => {
                    const isDone = !!completedTasks[task.id];
                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleChecklist(task.id)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                          isDone 
                            ? 'bg-slate-800 border-slate-700/80 text-slate-400 line-through opacity-80' 
                            : 'bg-slate-800/40 border-slate-800/60 text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`mt-0.5 w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isDone ? 'bg-sky-400 border-sky-400 text-slate-900' : 'border-slate-600 bg-transparent'
                        }`}>
                          {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="leading-snug">{task.title[lang]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>{dict.checklistArrivalTab}</span>
                  <span className="text-[10px] text-slate-400">{dict.checklistArrivalDesc}</span>
                </h3>
                <div className="space-y-2">
                  {checklistCategory('arrival').map((task) => {
                    const isDone = !!completedTasks[task.id];
                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleChecklist(task.id)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                          isDone 
                            ? 'bg-slate-800 border-slate-700/80 text-slate-400 line-through opacity-80' 
                            : 'bg-slate-800/40 border-slate-800/60 text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`mt-0.5 w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isDone ? 'bg-sky-400 border-sky-400 text-slate-900' : 'border-slate-600 bg-transparent'
                        }`}>
                          {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="leading-snug">{task.title[lang]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>{dict.checklistSettleTab}</span>
                  <span className="text-[10px] text-slate-400">{dict.checklistSettleDesc}</span>
                </h3>
                <div className="space-y-2">
                  {checklistCategory('settle').map((task) => {
                    const isDone = !!completedTasks[task.id];
                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleChecklist(task.id)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                          isDone 
                            ? 'bg-slate-800 border-slate-700/80 text-slate-400 line-through opacity-80' 
                            : 'bg-slate-800/40 border-slate-800/60 text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <div className={`mt-0.5 w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isDone ? 'bg-sky-400 border-sky-400 text-slate-900' : 'border-slate-600 bg-transparent'
                        }`}>
                          {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="leading-snug">{task.title[lang]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SUCCESS STORIES CAROUSEL */}
        <section id="testimonials" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">{dict.navTestimonials}</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.testimonialsTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.testimonialsSub}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 bg-radial from-slate-100 to-transparent pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-900 shrink-0 shadow-sm relative bg-slate-100">
                    <img 
                      src={TESTIMONIALS[activeTestimonialIdx].avatar} 
                      alt={TESTIMONIALS[activeTestimonialIdx].name[lang]} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="space-y-0.5 text-center md:text-left">
                    <div className="text-xs font-black text-slate-950 uppercase font-mono tracking-wider">{TESTIMONIALS[activeTestimonialIdx].name[lang]}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase font-mono tracking-tight flex items-center justify-center md:justify-start gap-1.5">
                      <span>{TESTIMONIALS[activeTestimonialIdx].role[lang]}</span>
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 tracking-normal uppercase">{TESTIMONIALS[activeTestimonialIdx].city[lang]}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 font-mono italic">{TESTIMONIALS[activeTestimonialIdx].university[lang]}</div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic relative pl-4 border-l-2 border-slate-900 font-medium">
                  “{TESTIMONIALS[activeTestimonialIdx].story[lang]}”
                </p>

                <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-lg py-1.5 px-3 max-w-max text-emerald-800 text-xs font-mono tracking-tight font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-0.5 shrink-0" />
                  <span>{dict.testimonialsVerified}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-4 gap-4">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((t, idx) => (
                  <button 
                    key={t.id}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      activeTestimonialIdx === idx ? 'bg-slate-950 w-5' : 'bg-slate-300'
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonialIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTestimonialIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ACCORDION FAQ */}
        <section id="faq" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              {lang === 'uk' ? 'Є ПИТАННЯ?' : lang === 'ru' ? 'ЕСТЬ ВОПРОСЫ?' : 'HAVE QUESTIONS?'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">{dict.faqTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{dict.faqSub}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS_STORE.map((faq) => {
              const isOpen = !!faqOpen[faq.id];
              return (
                <div key={faq.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs">
                  <button
                    onClick={() => setFaqOpen(prev => ({ ...prev, [faq.id]: !prev[faq.id] }))}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/50 cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900 leading-snug">{faq.q[lang]}</span>
                    <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} />
                  </button>
                  
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/30 px-5 py-4">
                      <p className="text-xs text-slate-600 leading-relaxed">{faq.a[lang]}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* "GET IN TOUCH" CONTACT FORM */}
        <section id="contact" className="space-y-8 pt-6">
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl space-y-6">
            
            <div className="space-y-2 text-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 font-bold">{dict.navContact}</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">{dict.contactTitle}</h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">{dict.contactSub}</p>
            </div>

            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-950/40 border border-emerald-500/30 p-6 rounded-2xl space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-black uppercase text-emerald-400 tracking-wider font-mono">{dict.contactSuccessTitle}</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">{dict.contactSuccessDesc}</p>
                </div>
                
                <div className="pt-3">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    {dict.contactFailBtn}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-3 text-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">{dict.contactNameLabel} <span className="text-rose-400">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      disabled={formState === 'sending'}
                      placeholder="Maria"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-sky-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">{dict.contactEmailLabel} <span className="text-rose-400">*</span></label>
                    <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      disabled={formState === 'sending'}
                      placeholder="maria@example.com"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-sky-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">{dict.contactTypeLabel}</label>
                  <select
                    value={formInquiryType}
                    onChange={(e) => setFormInquiryType(e.target.value)}
                    disabled={formState === 'sending'}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-sky-500 transition-colors"
                  >
                    <option value="packages">{dict.contactTypeOpt1}</option>
                    <option value="single">{dict.contactTypeOpt2}</option>
                    <option value="consultation">{dict.consultTitle}</option>
                    <option value="b2b">{dict.contactTypeOpt3}</option>
                    <option value="general">{dict.contactTypeOpt4}</option>
                  </select>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">{dict.contactMessageLabel} <span className="text-rose-400">*</span></label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    disabled={formState === 'sending'}
                    placeholder="..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-hidden focus:border-sky-500 transition-colors placeholder:text-slate-500 resize-none"
                  ></textarea>
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input 
                    type="checkbox" 
                    id="privacy-consent"
                    required
                    checked={formConsent}
                    onChange={(e) => setFormConsent(e.target.checked)}
                    disabled={formState === 'sending'}
                    className="mt-0.5 w-4 h-4 accent-sky-400 cursor-pointer"
                  />
                  <label htmlFor="privacy-consent" className="text-xs text-slate-300 leading-relaxed select-none cursor-pointer">
                    {dict.contactConsent}
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={formState === 'sending' || !formConsent}
                    className="w-full py-3.5 bg-sky-400 hover:bg-sky-500 disabled:opacity-50 disabled:bg-slate-700 text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{formState === 'sending' ? dict.contactSending : dict.contactSubmitBtn}</span>
                    {formState !== 'sending' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

              </form>
            )}

          </div>
        </section>

      </main>

      {/* DETAILED PRINT LAYOUT DISPLAY & SAVE PROSPECTUS POPUP */}
      {showExportModal && (
        <div id="print-modal-overlay" className="fixed inset-0 bg-slate-950/70 z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 md:p-8 space-y-6">
            
            {/* Modal header options */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-sm font-black uppercase text-slate-500 font-mono tracking-wider">{dict.modalTitle}</h3>
                <span className="text-xs text-slate-600">{dict.modalDesc}</span>
              </div>
              <button 
                id="close-print-modal-btn"
                onClick={() => setShowExportModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Print Area layout */}
            <div id="vantam-printable-prospectus" className="border border-slate-300 rounded-2xl p-8 bg-white text-slate-900 space-y-8 font-sans printable-section">
              
              {/* Proposal header */}
              <div className="flex justify-between items-start border-b-2 border-slate-950 pb-6">
                <div className="flex items-center gap-3">
                  <VantamLogo className="w-12 h-12" />
                  <div>
                    <div className="text-2xl font-black tracking-tight text-slate-950 leading-none">
                      {lang === 'uk' ? 'ПРОПОЗИЦІЯ ПІДТРИМКИ VANTAM' : lang === 'ru' ? 'ПРЕДЛОЖЕНИЕ ПОДДЕРЖКИ VANTAM' : 'VANTAM SUPPORT SCHEME'}
                    </div>
                    <div className="text-xs text-slate-600 font-mono mt-1">{dict.modalAdvisorDesc}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-950">{dict.modalOfferNo}: {currentSelectedPkgObj.id.toUpperCase()}-2026</div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">{dict.modalValidity}: {lang === 'en' ? 'August / September 2026' : lang === 'ru' ? 'Август / Сентябрь 2026' : 'Серпень / Вересень 2026'}</div>
                </div>
              </div>

              {/* Grid Client Profiles */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-mono text-slate-500 tracking-wider font-bold">{dict.modalClientProfile}</div>
                  <div className="text-xs font-bold text-slate-950">{lang === 'uk' ? 'Впевнений міжнародний експат або студент' : lang === 'ru' ? 'Владелец профиля студента / экспата' : 'Registered Dutch student/parent/expat relocator'}</div>
                  <div className="text-xs text-slate-600 italic">{dict.footerSub.split('.')[0]}.</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-[10px] uppercase font-mono text-slate-500 tracking-wider font-bold">{dict.modalTargetPlan}</div>
                  <div className="text-xs font-black text-slate-950 uppercase">{currentSelectedPkgObj.name[lang]}</div>
                  <div className="text-sm font-black text-emerald-600 font-mono">{currentSelectedPkgObj.price}</div>
                </div>
              </div>

              {/* Inclusions scope list */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 font-mono border-b border-slate-200 pb-1">{dict.pkgScopeTitle}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentSelectedPkgObj.scope[lang].map((item, idx) => (
                    <div key={idx} className="text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span className="inline-block mt-1 w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations limits list */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 font-mono border-b border-slate-200 pb-1">{dict.pkgLimitsTitle}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentSelectedPkgObj.limits[lang].map((item, idx) => (
                    <div key={idx} className="text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span className="inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal regulatory standards warning disclaimers */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 leading-relaxed">
                <strong>{lang === 'uk' ? 'Регламент відповідності та дисклеймер:' : lang === 'ru' ? 'Регламент соответствия и дисклеймер:' : 'Compliance limitations & state policies statement:'}</strong> {dict.footerSub}
              </div>

              <div className="border-t border-slate-300 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <div>{lang === 'uk' ? 'ГААГА • ПРАКТИЧНА ПІДТРИМКА В НІДЕРЛАНДАХ' : lang === 'ru' ? 'ГААГА • ПРАКТИЧЕСКАЯ ПОДДЕРЖКА В НИДЕРЛАНДАХ' : 'THE HAGUE • NETHERLANDS SUPPORT'}</div>
                <div>vantam.nl@proton.me</div>
              </div>

            </div>

            {/* Print action controllers */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{dict.modalPrintBtn}</span>
              </button>
              <button
                onClick={() => setShowExportModal(false)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 transition-all cursor-pointer"
              >
                {dict.modalCloseBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 text-center text-slate-500 space-y-4">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <VantamLogo className="w-8 h-8" />
            <p className="text-sm font-black text-slate-950 font-mono tracking-tight">VANTAM</p>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {dict.footerSub}
          </p>
          <div className="text-xs text-slate-500 pt-4 border-t border-slate-100 max-w-xs mx-auto">
            {dict.footerContact} <span className="font-semibold text-slate-700 font-mono">vantam.nl@proton.me</span>
          </div>
        </div>
      </footer>

      {/* Embedded CSS style for printed layout specifically for VANTAM's prospectus */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #vantam-printable-prospectus, #vantam-printable-prospectus * {
            visibility: visible;
          }
          #vantam-printable-prospectus {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>

    </div>
  );
}
