'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileCheck2,
  HelpCircle,
  Info,
  Menu,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react';

import {
  BLUEPRINT_CHECKLIST,
  CONSULTATIONS_STORE,
  DICTIONARY,
  FAQS_STORE,
  Language,
  PITFALLS,
  PREMIUM_PACKAGES,
  SERVICES_STORE,
  SINGLE_SERVICES,
  TESTIMONIALS,
} from '../data';

const VantamLogo = ({ className = 'w-8 h-8', light = false }: { className?: string; light?: boolean }) => {
  const primaryColor = light ? '#ffffff' : '#13252f';

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M15 25 L45 83 C47 87, 53 87, 55 83 L85 25"
        stroke={primaryColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 18 L50 42 L62 18"
        stroke="#0f766e"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function VantamsHub() {
  const [lang, setLang] = useState<Language>('uk');
  const [selectedPackage, setSelectedPackage] = useState('pkg_setup');
  const [activeServiceCategory, setActiveServiceCategory] = useState('admin');
  const [calculatorToggles, setCalculatorToggles] = useState<Record<string, boolean>>({
    scam: true,
    fine: false,
    insurance: true,
    hostel: false,
  });
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    c1: true,
    c2: false,
    c3: false,
  });
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({ f1: true });
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInquiryType, setFormInquiryType] = useState('packages');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formWebsite, setFormWebsite] = useState('');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const dict = useMemo(() => DICTIONARY[lang], [lang]);
  const sList = useMemo(() => SERVICES_STORE[lang], [lang]);

  const ui = useMemo(() => ({
    uk: {
      notice: 'Практична підтримка студентів та експатів у Нідерландах',
      tools: 'Інструменти',
      more: 'Ще',
      menu: 'Меню',
      heroGuide: 'Підтримка крок за кроком',
      heroGuideIntro: 'Зрозумілий маршрут через ключові адміністративні та побутові кроки.',
      from: 'від',
      standards: 'Як ми працюємо',
      structure: 'Напрями підтримки',
      transparentFees: 'Прозорі формати',
      serviceCategories: 'Категорії послуг',
      admin: 'Документи та щоденна адміністрація',
      adminSub: 'Реєстрація, DigiD, банк, страхування, листи та університет',
      housing: 'Житлові питання',
      housingSub: 'Договір, перевірка пропозиції, депозит і комунікація',
      health: 'Медицина та відшкодування',
      healthSub: 'GP / huisarts та страхові запити',
      servicesCount: 'послуги',
      result: 'Результат',
      details: 'Деталі пакета',
      selected: 'Обрано',
      choose: 'Переглянути деталі',
      estimate: 'Орієнтовна сума вибраних ризиків',
      maximum: 'Максимум у цьому сценарії: €4,575',
      difference: 'Різниця порівняно з Settle',
      riskLowDesc: 'Вибрані сценарії мають відносно невелику орієнтовну вартість, але кожен крок усе одно варто перевірити.',
      riskMediumDesc: 'Кілька вибраних сценаріїв можуть помітно вплинути на бюджет. Перевірте строки, документи та умови заздалегідь.',
      riskHighDesc: 'Сукупна орієнтовна вартість вибраних сценаріїв висока. Варто розібрати кожен ризик окремо та скласти план дій.',
      planner: 'Практичний план',
      progress: 'виконано',
      customerStory: 'Досвід клієнта',
      contactAside: 'Опишіть ситуацію своїми словами',
      contactAsideText: 'Оберіть формат запиту або почніть з консультації. Відповідь надійде на вказану електронну адресу.',
      emailLabel: 'Електронна пошта',
      packageCompare: 'Порівняйте всі три варіанти',
    },
    ru: {
      notice: 'Практическая поддержка студентов и экспатов в Нидерландах',
      tools: 'Инструменты',
      more: 'Ещё',
      menu: 'Меню',
      heroGuide: 'Поддержка шаг за шагом',
      heroGuideIntro: 'Понятный маршрут через ключевые административные и бытовые шаги.',
      from: 'от',
      standards: 'Как мы работаем',
      structure: 'Направления поддержки',
      transparentFees: 'Прозрачные форматы',
      serviceCategories: 'Категории услуг',
      admin: 'Документы и повседневная администрация',
      adminSub: 'Регистрация, DigiD, банк, страховка, письма и университет',
      housing: 'Жилищные вопросы',
      housingSub: 'Договор, проверка предложения, депозит и коммуникация',
      health: 'Медицина и возмещения',
      healthSub: 'GP / huisarts и страховые запросы',
      servicesCount: 'услуги',
      result: 'Результат',
      details: 'Детали пакета',
      selected: 'Выбрано',
      choose: 'Посмотреть детали',
      estimate: 'Ориентировочная сумма выбранных рисков',
      maximum: 'Максимум в этом сценарии: €4,575',
      difference: 'Разница по сравнению с Settle',
      riskLowDesc: 'Выбранные сценарии имеют относительно небольшую ориентировочную стоимость, но каждый шаг всё равно стоит проверить.',
      riskMediumDesc: 'Несколько выбранных сценариев могут заметно повлиять на бюджет. Проверьте сроки, документы и условия заранее.',
      riskHighDesc: 'Совокупная ориентировочная стоимость выбранных сценариев высока. Стоит разобрать каждый риск отдельно и составить план действий.',
      planner: 'Практический план',
      progress: 'выполнено',
      customerStory: 'Опыт клиента',
      contactAside: 'Опишите ситуацию своими словами',
      contactAsideText: 'Выберите формат запроса или начните с консультации. Ответ придёт на указанный электронный адрес.',
      emailLabel: 'Электронная почта',
      packageCompare: 'Сравните все три варианта',
    },
    en: {
      notice: 'Practical support for students and expats in the Netherlands',
      tools: 'Tools',
      more: 'More',
      menu: 'Menu',
      heroGuide: 'Support, step by step',
      heroGuideIntro: 'A clear route through the key administrative and everyday setup steps.',
      from: 'from',
      standards: 'How we work',
      structure: 'Support areas',
      transparentFees: 'Transparent formats',
      serviceCategories: 'Service categories',
      admin: 'Documents and daily administration',
      adminSub: 'Registration, DigiD, banking, insurance, letters and university',
      housing: 'Housing questions',
      housingSub: 'Contract, listing check, deposit and communication',
      health: 'Healthcare and claims',
      healthSub: 'GP / huisarts and insurance requests',
      servicesCount: 'services',
      result: 'Outcome',
      details: 'Package details',
      selected: 'Selected',
      choose: 'View details',
      estimate: 'Estimated total of selected risks',
      maximum: 'Maximum in this scenario: €4,575',
      difference: 'Difference compared with Settle',
      riskLowDesc: 'The selected scenarios have a relatively low illustrative cost, but each step is still worth checking.',
      riskMediumDesc: 'Several selected scenarios could have a noticeable budget impact. Check timelines, documents, and conditions in advance.',
      riskHighDesc: 'The combined illustrative cost of the selected scenarios is high. Review each risk separately and prepare a clear action plan.',
      planner: 'Practical plan',
      progress: 'complete',
      customerStory: 'Customer experience',
      contactAside: 'Describe the situation in your own words',
      contactAsideText: 'Choose a request type or start with a consultation. The reply will go to the email address you provide.',
      emailLabel: 'Email',
      packageCompare: 'Compare all three options',
    },
  }[lang]), [lang]);

  const serviceCategories = useMemo(() => [
    {
      id: 'admin',
      label: ui.admin,
      description: ui.adminSub,
      ids: [
        'single_registration_bsn',
        'single_digid_activation',
        'single_bank_setup',
        'single_insurance_setup',
        'single_official_letter',
        'single_university_admin',
      ],
    },
    {
      id: 'housing',
      label: ui.housing,
      description: ui.housingSub,
      ids: [
        'single_rental_contract',
        'single_housing_scam_check',
        'single_deposit_return',
        'single_landlord_communication',
      ],
    },
    {
      id: 'health',
      label: ui.health,
      description: ui.healthSub,
      ids: ['single_insurance_claim', 'single_healthcare_registration'],
    },
  ], [ui]);

  const activeCategory = serviceCategories.find((category) => category.id === activeServiceCategory) || serviceCategories[0];
  const activeServices = SINGLE_SERVICES.filter((service) => activeCategory.ids.includes(service.id));

  const calculatorTotal = useMemo(() => PITFALLS.reduce((sum, item) => (
    calculatorToggles[item.id] ? sum + item.cost : sum
  ), 0), [calculatorToggles]);

  const progressPercent = useMemo(() => {
    const completed = BLUEPRINT_CHECKLIST.filter((item) => completedTasks[item.id]).length;
    return Math.round((completed / BLUEPRINT_CHECKLIST.length) * 100);
  }, [completedTasks]);

  const currentSelectedPkgObj = useMemo(() => (
    PREMIUM_PACKAGES.find((item) => item.id === selectedPackage) || PREMIUM_PACKAGES[1]
  ), [selectedPackage]);

  const riskStatus = useMemo(() => {
    if (calculatorTotal <= 1000) {
      return { label: dict.calcRiskLow, desc: ui.riskLowDesc, color: 'text-emerald-800 bg-emerald-50 border-emerald-200' };
    }
    if (calculatorTotal <= 2500) {
      return { label: dict.calcRiskMedium, desc: ui.riskMediumDesc, color: 'text-amber-900 bg-amber-50 border-amber-200' };
    }
    return { label: dict.calcRiskHigh, desc: ui.riskHighDesc, color: 'text-rose-800 bg-rose-50 border-rose-200' };
  }, [calculatorTotal, dict, ui]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const handleSelectSingleService = (serviceId: string) => {
    setFormInquiryType('single');
    const serviceObj = SINGLE_SERVICES.find((service) => service.id === serviceId);
    if (serviceObj) {
      setFormMessage(lang === 'uk'
        ? `Мене цікавить окрема послуга: ${serviceObj.name.uk}`
        : lang === 'ru'
          ? `Меня интересует разовая услуга: ${serviceObj.name.ru}`
          : `I am interested in the standalone service: ${serviceObj.name.en}`);
    }
    scrollToContact();
  };

  const handleSelectConsultation = (consultationId: string) => {
    setFormInquiryType('consultation');
    const consultationObj = CONSULTATIONS_STORE.find((consultation) => consultation.id === consultationId);
    if (consultationObj) {
      setFormMessage(lang === 'uk'
        ? `Мене цікавить консультація: ${consultationObj.name.uk}`
        : lang === 'ru'
          ? `Меня интересует консультация: ${consultationObj.name.ru}`
          : `I am interested in the consultation: ${consultationObj.name.en}`);
    }
    scrollToContact();
  };

  const handleSelectPackage = (packageId: string) => {
    const packageObj = PREMIUM_PACKAGES.find((item) => item.id === packageId);
    setSelectedPackage(packageId);
    setFormInquiryType('packages');
    if (packageObj) {
      setFormMessage(lang === 'uk'
        ? `Мене цікавить пакет: ${packageObj.name.uk} ${packageObj.price}`
        : lang === 'ru'
          ? `Меня интересует пакет: ${packageObj.name.ru} ${packageObj.price}`
          : `I am interested in the package: ${packageObj.name.en} ${packageObj.price}`);
    }
    scrollToContact();
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim() || !formConsent) return;
    setFormState('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          inquiryType: formInquiryType,
          message: formMessage,
          consent: formConsent,
          language: lang,
          website: formWebsite,
          sourceUrl: window.location.href,
        }),
      });

      if (!response.ok) throw new Error('Contact request failed');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const handleResetForm = () => {
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setFormConsent(false);
    setFormWebsite('');
    setFormState('idle');
  };

  const closeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest('details')?.removeAttribute('open');
  };

  const formErrorMessage = lang === 'uk'
    ? 'Не вдалося надіслати запит. Спробуйте ще раз або напишіть на vantam.nl@proton.me.'
    : lang === 'ru'
      ? 'Не удалось отправить запрос. Попробуйте ещё раз или напишите на vantam.nl@proton.me.'
      : 'The request could not be sent. Please try again or email vantam.nl@proton.me.';

  const plannerGroups = [
    { category: 'prep' as const, title: dict.checklistPrepTab, description: dict.checklistPrepDesc },
    { category: 'arrival' as const, title: dict.checklistArrivalTab, description: dict.checklistArrivalDesc },
    { category: 'settle' as const, title: dict.checklistSettleTab, description: dict.checklistSettleDesc },
  ];

  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)] selection:bg-[var(--brand)] selection:text-white">
      <div className="site-notice">
        <div className="site-container flex items-center justify-between gap-4 py-2.5">
          <span>{ui.notice}</span>
          <a href="mailto:vantam.nl@proton.me" className="hidden sm:inline font-semibold">vantam.nl@proton.me</a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container min-h-18 flex items-center justify-between gap-4">
          <a href="#" className="brand-lockup" aria-label="VANTAM">
            <VantamLogo className="w-9 h-9" />
            <span>
              <strong>VANTAM</strong>
              <small>{dict.navSub}</small>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-1 ml-auto" aria-label={ui.menu}>
            <a href="#why" className="nav-link">{dict.navWhy}</a>
            <a href="#services" className="nav-link">{dict.navServices}</a>
            <a href="#packages" className="nav-link">{dict.navPackages}</a>
            <a href="#contact" className="nav-link">{dict.navContact}</a>

            <details className="nav-details relative">
              <summary className="nav-link flex items-center gap-1.5 cursor-pointer">
                <Wrench className="w-4 h-4" />
                {ui.tools}
                <ChevronDown className="nav-chevron w-3.5 h-3.5" />
              </summary>
              <div className="nav-menu">
                <a href="#calculator" onClick={closeNavigation}>{dict.navCalculator}</a>
                <a href="#checklist" onClick={closeNavigation}>{dict.navChecklist}</a>
              </div>
            </details>

            <details className="nav-details relative">
              <summary className="nav-link flex items-center gap-1.5 cursor-pointer">
                {ui.more}
                <ChevronDown className="nav-chevron w-3.5 h-3.5" />
              </summary>
              <div className="nav-menu">
                <a href="#consultations" onClick={closeNavigation}>{dict.consultTitle}</a>
                <a href="#single-services" onClick={closeNavigation}>{dict.navSingleServices}</a>
                <a href="#testimonials" onClick={closeNavigation}>{dict.navTestimonials}</a>
                <a href="#faq" onClick={closeNavigation}>{dict.navFaq}</a>
              </div>
            </details>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div className="language-switcher" aria-label={dict.langLabel}>
              {(['uk', 'ru', 'en'] as Language[]).map((code) => (
                <button
                  id={`lang-btn-${code}`}
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                >
                  {code === 'uk' ? 'UA' : code.toUpperCase()}
                </button>
              ))}
            </div>

            <details className="nav-details relative xl:hidden">
              <summary className="mobile-menu-trigger" aria-label={ui.menu}>
                <Menu className="w-5 h-5" />
              </summary>
              <nav className="nav-menu mobile-menu" aria-label={ui.menu}>
                <a href="#why" onClick={closeNavigation}>{dict.navWhy}</a>
                <a href="#services" onClick={closeNavigation}>{dict.navServices}</a>
                <a href="#consultations" onClick={closeNavigation}>{dict.consultTitle}</a>
                <a href="#single-services" onClick={closeNavigation}>{dict.navSingleServices}</a>
                <a href="#packages" onClick={closeNavigation}>{dict.navPackages}</a>
                <a href="#calculator" onClick={closeNavigation}>{dict.navCalculator}</a>
                <a href="#checklist" onClick={closeNavigation}>{dict.navChecklist}</a>
                <a href="#testimonials" onClick={closeNavigation}>{dict.navTestimonials}</a>
                <a href="#faq" onClick={closeNavigation}>{dict.navFaq}</a>
                <a href="#contact" onClick={closeNavigation}>{dict.navContact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <span className="section-label">{dict.heroBadge}</span>
              <h1>{dict.heroHeadline}</h1>
              <p>{dict.heroSub}</p>
              <div className="hero-actions">
                <a href="#consultations" className="btn-primary">
                  {dict.selectorConsultTitle}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#packages" className="btn-secondary">{dict.heroCtaPrimary}</a>
              </div>
            </div>

            <div className="hero-guide" aria-label={ui.heroGuide}>
              <div className="hero-guide-header">
                <div>
                  <span>{ui.heroGuide}</span>
                  <p>{ui.heroGuideIntro}</p>
                </div>
                <FileCheck2 className="w-6 h-6" />
              </div>
              <ol>
                {sList.map((column, index) => (
                  <li key={column.pillar}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{column.pillar}</strong>
                      <p>{column.items[0]?.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="hero-guide-footer">UA / RU / EN</div>
            </div>
          </div>
        </section>

        <section className="start-section" aria-labelledby="start-title">
          <div className="site-container">
            <div className="section-heading compact-heading">
              <span className="section-label">{dict.selectorTitle}</span>
              <h2 id="start-title">{dict.selectorSub}</h2>
            </div>
            <div className="start-options">
              {[
                { title: dict.selectorConsultTitle, desc: dict.selectorConsultDesc, price: CONSULTATIONS_STORE[0].price, href: '#consultations' },
                { title: dict.selectorPackageTitle, desc: dict.selectorPackageDesc, price: PREMIUM_PACKAGES[0].price, href: '#packages' },
                { title: dict.selectorSingleTitle, desc: dict.selectorSingleDesc, price: '€79', href: '#single-services' },
              ].map((option, index) => (
                <a key={option.href} href={option.href} className="start-option">
                  <span className="start-number">0{index + 1}</span>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.desc}</p>
                  </div>
                  <div className="start-price">
                    <small>{ui.from}</small>
                    <strong>{option.price}</strong>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section-block editorial-section">
          <div className="site-container editorial-grid">
            <div className="section-heading">
              <span className="section-label">{ui.standards}</span>
              <h2>{dict.whyTitle}</h2>
              <p>{dict.whySub}</p>
            </div>
            <div className="principles-list">
              <article>
                <ShieldCheck className="w-6 h-6" />
                <div>
                  <h3>{dict.roleTitle}</h3>
                  <p>{dict.roleDesc}</p>
                </div>
              </article>
              <article>
                <Info className="w-6 h-6" />
                <div>
                  <h3>{dict.antiRoleTitle}</h3>
                  <p>{dict.antiRoleDesc}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section-block service-overview">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">{ui.structure}</span>
                <h2>{dict.servicesTitle}</h2>
              </div>
              <p>{dict.servicesSub}</p>
            </div>
            <div className="pillar-grid">
              {sList.map((column, index) => (
                <article key={column.pillar} className="pillar-column">
                  <span className="pillar-index">0{index + 1}</span>
                  <h3>{column.pillar}</h3>
                  <p className="pillar-subtitle">{column.sub}</p>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item.name}>
                        <Check className="w-4 h-4" />
                        <div>
                          <strong>{item.name}</strong>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="consultations" className="section-block editorial-section">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">{dict.consultBadge}</span>
                <h2>{dict.consultTitle}</h2>
              </div>
              <p>{dict.consultSub}</p>
            </div>
            <div className="consultation-list">
              {CONSULTATIONS_STORE.map((consultation) => (
                <article key={consultation.id} className="consultation-row">
                  <div className="consultation-title">
                    <h3>{consultation.name[lang]}</h3>
                    <span><Clock className="w-4 h-4" />{consultation.duration[lang]}</span>
                  </div>
                  <div className="consultation-copy">
                    <p>{consultation.desc[lang]}</p>
                    <p className="consultation-result"><strong>{dict.consultResultLabel}</strong> {consultation.result[lang]}</p>
                    <p className="consultation-note"><strong>{dict.consultNoteLabel}</strong> {consultation.note[lang]}</p>
                  </div>
                  <div className="consultation-action">
                    <strong>{consultation.price}</strong>
                    <button onClick={() => handleSelectConsultation(consultation.id)} className="btn-service">
                      {consultation.cta[lang]}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="single-services" className="section-block single-services-section">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">{ui.serviceCategories}</span>
                <h2>{dict.singleTitle}</h2>
              </div>
              <p>{dict.singleSub}</p>
            </div>

            <div className="service-category-tabs" role="tablist" aria-label={ui.serviceCategories}>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={activeServiceCategory === category.id}
                  onClick={() => setActiveServiceCategory(category.id)}
                >
                  <strong>{category.label}</strong>
                  <span>{category.ids.length} {ui.servicesCount}</span>
                </button>
              ))}
            </div>

            <div className="service-category-intro">
              <div>
                <h3>{activeCategory.label}</h3>
                <p>{activeCategory.description}</p>
              </div>
              <span>{activeServices.length} {ui.servicesCount}</span>
            </div>

            <div className="single-service-list" role="tabpanel">
              {activeServices.map((service) => (
                <article key={service.id} className="single-service-row">
                  <div className="single-service-name">
                    <h4>{service.name[lang]}</h4>
                    <span>{service.mode[lang]}</span>
                  </div>
                  <div className="single-service-copy">
                    <p>{service.desc[lang]}</p>
                    <p className="service-limit"><Check className="w-4 h-4" />{service.limit[lang]}</p>
                    {service.notIncluded && <p className="service-exclusion">{service.notIncluded[lang]}</p>}
                  </div>
                  <div className="single-service-action">
                    <strong>{service.price}</strong>
                    <button onClick={() => handleSelectSingleService(service.id)} className="btn-service">
                      {dict.singleCta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="warning-note">
              <Info className="w-5 h-5" />
              <div>
                <strong>{dict.housingDisclaimerTitle}</strong>
                <p>{dict.housingDisclaimerText}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="calculator" className="section-block tool-section">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">{dict.navCalculator}</span>
                <h2>{dict.calculatorTitle}</h2>
              </div>
              <p>{dict.calculatorSub}</p>
            </div>

            <div className="calculator-layout">
              <div>
                <p className="tool-instruction">{dict.calculatorInfo}</p>
                <div className="risk-list">
                  {PITFALLS.map((item) => {
                    const isChecked = !!calculatorToggles[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCalculatorToggles((previous) => ({ ...previous, [item.id]: !previous[item.id] }))}
                        aria-pressed={isChecked}
                        className={isChecked ? 'is-selected' : ''}
                      >
                        <span className="check-control">{isChecked && <Check className="w-3.5 h-3.5" />}</span>
                        <span className="risk-copy">
                          <strong>{item.label[lang]}</strong>
                          <small>{item.explanation[lang]}</small>
                        </span>
                        <b>+€{item.cost}</b>
                      </button>
                    );
                  })}
                </div>
              </div>

              <aside className="calculator-result">
                <span>{ui.estimate}</span>
                <strong>€{calculatorTotal}</strong>
                <small>{ui.maximum}</small>
                <div className={`risk-status ${riskStatus.color}`}>
                  <b>{riskStatus.label}</b>
                  <p>{riskStatus.desc}</p>
                </div>
                <div className="calculator-comparison">
                  <div>
                    <span>{dict.calcPackageLabel}</span>
                    <strong>€749</strong>
                  </div>
                  <p>{dict.calcPackageDesc}</p>
                  {calculatorTotal > 749 && <b>{ui.difference}: €{calculatorTotal - 749}</b>}
                </div>
                <p className="calculator-note"><AlertCircle className="w-4 h-4" />{dict.calcFooterNotice}</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="packages" className="section-block packages-section">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-label">{ui.transparentFees}</span>
                <h2>{dict.pkgGridTitle}</h2>
              </div>
              <p>{dict.pkgGridSub}</p>
            </div>

            <p className="package-comparison-label">{ui.packageCompare}</p>
            <div className="package-grid">
              {PREMIUM_PACKAGES.map((item) => {
                const isSelected = item.id === selectedPackage;
                return (
                  <article key={item.id} className={`package-card ${isSelected ? 'is-selected' : ''}`}>
                    <div className="package-card-header">
                      <div>
                        <span>{item.subtitle[lang]}</span>
                        <h3>{item.name[lang]}</h3>
                      </div>
                      <strong>{item.price}</strong>
                    </div>
                    <p>{item.tagline[lang]}</p>
                    <div className="package-workload"><Clock className="w-4 h-4" />{item.workload[lang]}</div>
                    <ul>
                      {item.scope[lang].slice(0, 4).map((scope) => (
                        <li key={scope}><Check className="w-4 h-4" />{scope}</li>
                      ))}
                    </ul>
                    <button onClick={() => setSelectedPackage(item.id)} aria-pressed={isSelected} className="package-select">
                      {isSelected ? ui.selected : ui.choose}
                      {!isSelected && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="package-detail" aria-live="polite">
              <div className="package-summary">
                <span className="section-label">{ui.details}</span>
                <h3>{currentSelectedPkgObj.name[lang]}</h3>
                <strong className="package-detail-price">{currentSelectedPkgObj.price}</strong>
                <p>{currentSelectedPkgObj.idealFor[lang]}</p>
                <blockquote>{currentSelectedPkgObj.tagline[lang]}</blockquote>
                <button onClick={() => handleSelectPackage(currentSelectedPkgObj.id)} className="btn-primary">
                  {currentSelectedPkgObj.cta[lang]}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button id="pdf-download-btn" onClick={() => setShowExportModal(true)} className="btn-secondary">
                  <Download className="w-4 h-4" />
                  {dict.pdfBtn}
                </button>
              </div>
              <div className="package-lists">
                <div>
                  <h4><ShieldCheck className="w-5 h-5" />{dict.pkgScopeTitle}</h4>
                  <ul>
                    {currentSelectedPkgObj.scope[lang].map((item) => (
                      <li key={item}><Check className="w-4 h-4" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="limits-list">
                  <h4><AlertCircle className="w-5 h-5" />{dict.pkgLimitsTitle}</h4>
                  <ul>
                    {currentSelectedPkgObj.limits[lang].map((item) => (
                      <li key={item}><AlertCircle className="w-4 h-4" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="checklist" className="section-block planner-section">
          <div className="site-container">
            <div className="planner-header">
              <div className="section-heading">
                <span className="section-label">{ui.planner}</span>
                <h2>{dict.checklistTitle}</h2>
                <p>{dict.checklistSub}</p>
              </div>
              <div className="planner-progress" aria-label={`${progressPercent}% ${ui.progress}`}>
                <strong>{progressPercent}%</strong>
                <span>{ui.progress}</span>
              </div>
            </div>

            <div className="planner-grid">
              {plannerGroups.map((group) => (
                <div key={group.category} className="planner-column">
                  <div className="planner-column-heading">
                    <h3>{group.title}</h3>
                    <span>{group.description}</span>
                  </div>
                  {BLUEPRINT_CHECKLIST.filter((item) => item.category === group.category).map((task) => {
                    const isDone = !!completedTasks[task.id];
                    return (
                      <button
                        key={task.id}
                        onClick={() => setCompletedTasks((previous) => ({ ...previous, [task.id]: !previous[task.id] }))}
                        aria-pressed={isDone}
                        className={isDone ? 'is-complete' : ''}
                      >
                        <span className="check-control">{isDone && <Check className="w-3.5 h-3.5" />}</span>
                        <span>{task.title[lang]}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-block proof-section">
          <div className="site-container proof-grid">
            <div className="section-heading">
              <span className="section-label">{ui.customerStory}</span>
              <h2>{dict.testimonialsTitle}</h2>
              <p>{dict.testimonialsSub}</p>
            </div>
            <div className="testimonial-stage">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={activeTestimonialIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <blockquote>“{TESTIMONIALS[activeTestimonialIdx].story[lang]}”</blockquote>
                  <figcaption>
                    <strong>{TESTIMONIALS[activeTestimonialIdx].name[lang]}</strong>
                    <span>{TESTIMONIALS[activeTestimonialIdx].role[lang]} · {TESTIMONIALS[activeTestimonialIdx].city[lang]}</span>
                    <span>{TESTIMONIALS[activeTestimonialIdx].university[lang]}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="testimonial-controls">
                <span>{activeTestimonialIdx + 1} / {TESTIMONIALS.length}</span>
                <div>
                  <button
                    onClick={() => setActiveTestimonialIdx((previous) => previous === 0 ? TESTIMONIALS.length - 1 : previous - 1)}
                    aria-label={lang === 'uk' ? 'Попередній відгук' : lang === 'ru' ? 'Предыдущий отзыв' : 'Previous testimonial'}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonialIdx((previous) => previous === TESTIMONIALS.length - 1 ? 0 : previous + 1)}
                    aria-label={lang === 'uk' ? 'Наступний відгук' : lang === 'ru' ? 'Следующий отзыв' : 'Next testimonial'}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-block faq-section">
          <div className="site-container faq-grid">
            <div className="section-heading">
              <span className="section-label">FAQ</span>
              <h2>{dict.faqTitle}</h2>
              <p>{dict.faqSub}</p>
            </div>
            <div className="faq-list">
              {FAQS_STORE.map((faq) => {
                const isOpen = !!faqOpen[faq.id];
                return (
                  <div key={faq.id} className="faq-item">
                    <button
                      onClick={() => setFaqOpen((previous) => ({ ...previous, [faq.id]: !previous[faq.id] }))}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q[lang]}</span>
                      <HelpCircle className={`w-5 h-5 ${isOpen ? 'rotate-45' : ''}`} />
                    </button>
                    {isOpen && <p>{faq.a[lang]}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block contact-section">
          <div className="site-container contact-grid">
            <div className="contact-copy">
              <span className="section-label">{dict.navContact}</span>
              <h2>{dict.contactTitle}</h2>
              <p>{dict.contactSub}</p>
              <div className="contact-note">
                <strong>{ui.contactAside}</strong>
                <p>{ui.contactAsideText}</p>
              </div>
              <a href="mailto:vantam.nl@proton.me">{ui.emailLabel}: vantam.nl@proton.me</a>
            </div>

            <div className="contact-form-shell">
              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="form-success">
                  <span><Check className="w-6 h-6" /></span>
                  <h3>{dict.contactSuccessTitle}</h3>
                  <p>{dict.contactSuccessDesc}</p>
                  <button onClick={handleResetForm} className="btn-primary">{dict.contactFailBtn}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formWebsite}
                      onChange={(event) => setFormWebsite(event.target.value)}
                    />
                  </div>

                  {formState === 'error' && <div role="alert" className="form-error">{formErrorMessage}</div>}

                  <div className="form-grid">
                    <label>
                      <span>{dict.contactNameLabel} *</span>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formName}
                        onChange={(event) => {
                          setFormName(event.target.value);
                          if (formState === 'error') setFormState('idle');
                        }}
                        disabled={formState === 'sending'}
                        maxLength={120}
                        placeholder="Maria"
                      />
                    </label>
                    <label>
                      <span>{dict.contactEmailLabel} *</span>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formEmail}
                        onChange={(event) => {
                          setFormEmail(event.target.value);
                          if (formState === 'error') setFormState('idle');
                        }}
                        disabled={formState === 'sending'}
                        maxLength={254}
                        placeholder="maria@example.com"
                      />
                    </label>
                  </div>

                  <label>
                    <span>{dict.contactTypeLabel}</span>
                    <select
                      id="contact-type"
                      value={formInquiryType}
                      onChange={(event) => setFormInquiryType(event.target.value)}
                      disabled={formState === 'sending'}
                    >
                      <option value="packages">{dict.contactTypeOpt1}</option>
                      <option value="single">{dict.contactTypeOpt2}</option>
                      <option value="consultation">{dict.consultTitle}</option>
                      <option value="b2b">{dict.contactTypeOpt3}</option>
                      <option value="general">{dict.contactTypeOpt4}</option>
                    </select>
                  </label>

                  <label>
                    <span>{dict.contactMessageLabel} *</span>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formMessage}
                      onChange={(event) => {
                        setFormMessage(event.target.value);
                        if (formState === 'error') setFormState('idle');
                      }}
                      disabled={formState === 'sending'}
                      maxLength={5000}
                      placeholder="..."
                    />
                  </label>

                  <label className="consent-row">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      required
                      checked={formConsent}
                      onChange={(event) => setFormConsent(event.target.checked)}
                      disabled={formState === 'sending'}
                    />
                    <span>{dict.contactConsent}</span>
                  </label>

                  <button
                    type="submit"
                    disabled={formState === 'sending' || !formConsent}
                    aria-live="polite"
                    className="btn-primary contact-submit"
                  >
                    {formState === 'sending' ? dict.contactSending : dict.contactSubmitBtn}
                    {formState !== 'sending' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          <footer className="site-footer">
            <div className="site-container footer-grid">
              <div className="flex items-center gap-3">
                <VantamLogo className="w-9 h-9" light />
                <strong>VANTAM</strong>
              </div>
              <p>{dict.footerSub}</p>
              <a href="mailto:vantam.nl@proton.me">vantam.nl@proton.me</a>
            </div>
          </footer>
        </section>
      </main>

      {showExportModal && (
        <div id="print-modal-overlay" className="print-overlay" role="dialog" aria-modal="true" aria-labelledby="print-modal-title">
          <div className="print-modal">
            <div className="print-modal-header">
              <div>
                <h3 id="print-modal-title">{dict.modalTitle}</h3>
                <p>{dict.modalDesc}</p>
              </div>
              <button id="close-print-modal-btn" onClick={() => setShowExportModal(false)} aria-label={dict.modalCloseBtn}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div id="vantam-printable-prospectus" className="print-sheet">
              <div className="print-brand-row">
                <div className="flex items-center gap-3">
                  <VantamLogo className="w-12 h-12" />
                  <div>
                    <strong>VANTAM</strong>
                    <p>{dict.modalAdvisorDesc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span>{dict.modalOfferNo}</span>
                  <strong>{currentSelectedPkgObj.id.toUpperCase()}-2026</strong>
                </div>
              </div>

              <div className="print-package-summary">
                <div>
                  <span>{dict.modalTargetPlan}</span>
                  <h4>{currentSelectedPkgObj.name[lang]}</h4>
                  <p>{currentSelectedPkgObj.idealFor[lang]}</p>
                </div>
                <strong>{currentSelectedPkgObj.price}</strong>
              </div>

              <div className="print-list">
                <h5>{dict.pkgScopeTitle}</h5>
                <ul>{currentSelectedPkgObj.scope[lang].map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="print-list">
                <h5>{dict.pkgLimitsTitle}</h5>
                <ul>{currentSelectedPkgObj.limits[lang].map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <p className="print-disclaimer">{dict.footerSub}</p>
              <div className="print-footer">VANTAM · THE HAGUE · vantam.nl@proton.me</div>
            </div>

            <div className="print-actions">
              <button onClick={() => window.print()} className="btn-primary">
                <Download className="w-4 h-4" />
                {dict.modalPrintBtn}
              </button>
              <button onClick={() => setShowExportModal(false)} className="btn-secondary">{dict.modalCloseBtn}</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #vantam-printable-prospectus, #vantam-printable-prospectus * { visibility: visible; }
          #vantam-printable-prospectus {
            position: absolute;
            inset: 0;
            width: 100%;
            border: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
