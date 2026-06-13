'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileText,
  GraduationCap,
  HeartPulse,
  House,
  Info,
  Menu,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sun,
  WalletCards,
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

const HERO_IMAGE = 'https://images.unsplash.com/photo-1780064214195-01dc4e54949c?auto=format&fit=crop&w=1600&q=84';

const VantamLogo = ({className = 'w-8 h-8', light = false}: {className?: string; light?: boolean}) => {
  const primaryColor = light ? '#f4f8f7' : 'currentColor';

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 25 L45 83 C47 87, 53 87, 55 83 L85 25" stroke={primaryColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 18 L50 42 L62 18" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function VantamsHub() {
  const prefersReducedMotion = useReducedMotion();
  const mobileNavigationRef = useRef<HTMLDetailsElement>(null);
  const pdfTriggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Language>('uk');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedPackage, setSelectedPackage] = useState('pkg_setup');
  const [activeServiceCategory, setActiveServiceCategory] = useState('admin');
  const [calculatorToggles, setCalculatorToggles] = useState<Record<string, boolean>>({
    scam: true,
    fine: false,
    insurance: true,
    hostel: false,
  });
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({c1: true, c2: false, c3: false});
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({f1: true});
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInquiryType, setFormInquiryType] = useState('packages');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formWebsite, setFormWebsite] = useState('');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const navigation = mobileNavigationRef.current;
    const handlePointerDown = (event: PointerEvent) => {
      if (navigation?.open && !navigation.contains(event.target as Node)) navigation.removeAttribute('open');
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && navigation?.open) {
        navigation.removeAttribute('open');
        navigation.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!showExportModal) return;
    const trigger = pdfTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalCloseRef.current?.focus();

    const handleModalKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowExportModal(false);
        return;
      }
      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleModalKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleModalKeys);
      trigger?.focus();
    };
  }, [showExportModal]);

  useEffect(() => {
    if (formState === 'success') successRef.current?.focus();
  }, [formState]);

  const dict = useMemo(() => DICTIONARY[lang], [lang]);
  const sList = useMemo(() => SERVICES_STORE[lang], [lang]);

  const ui = useMemo(() => ({
    uk: {
      notice: 'Практична підтримка студентів, експатів і родин у Нідерландах',
      menu: 'Меню',
      darkTheme: 'Увімкнути темну тему',
      lightTheme: 'Увімкнути світлу тему',
      heroTitle: 'Перші кроки в Нідерландах без зайвого шуму',
      heroText: 'Документи, реєстрація, банк, медицина, житло та університетська адміністрація. Ви бачите зрозумілий план і знаєте, що робити далі.',
      heroImageAlt: 'Житлова вулиця з цегляними будинками в Амстердамі',
      photoCredit: 'Фото: Haberdoedas, Unsplash',
      localNote: 'Три мови. Чіткі межі. Один локальний контакт.',
      entryTitle: 'Оберіть формат, який відповідає вашій ситуації',
      entryConsult: 'Почати з консультації',
      entryPackage: 'Потрібен супровід',
      entrySingle: 'Потрібен один крок',
      from: 'від',
      trustTitle: 'Підтримка без інституційної дистанції',
      trustText: 'VANTAM пояснює процеси простою мовою, допомагає підготуватися і тримає наступний крок у фокусі.',
      boundary: 'Ми не замінюємо ліцензованих фахівців і не обіцяємо результатів, які залежать від банків, державних органів, страховиків або орендодавців.',
      consultLead: 'Найпростіший спосіб почати',
      servicesLead: 'Окремі послуги',
      categoryCount: 'послуг',
      packageLead: 'Три рівні підтримки',
      packageCompare: 'Порівняйте варіанти поруч',
      packageDetails: 'Склад обраного пакета',
      selected: 'Обрано',
      choose: 'Переглянути',
      toolsLead: 'Корисні інструменти до розмови',
      toolsText: 'Оцініть типові витрати та відмітьте, що вже готово. Інструменти допомагають спланувати розмову, а не замінюють консультацію.',
      estimate: 'Сума вибраних сценаріїв',
      maximum: 'Максимум у калькуляторі: €4,575',
      difference: 'Різниця із Settle',
      progress: 'готово',
      testimonialLead: 'Приклади',
      contactLead: 'Розкажіть, що відбувається',
      contactAside: 'Можна почати без готового рішення',
      contactAsideText: 'Оберіть тип запиту або просто опишіть ситуацію. Контекст обраної послуги чи пакета вже буде у формі.',
      emailLabel: 'Електронна пошта',
      scopeLabel: 'Включено',
      limitsLabel: 'Межі',
      result: 'Результат',
      details: 'Деталі',
    },
    ru: {
      notice: 'Практическая поддержка студентов, экспатов и семей в Нидерландах',
      menu: 'Меню',
      darkTheme: 'Включить темную тему',
      lightTheme: 'Включить светлую тему',
      heroTitle: 'Первые шаги в Нидерландах без лишнего шума',
      heroText: 'Документы, регистрация, банк, медицина, жилье и университетская администрация. Вы видите понятный план и знаете, что делать дальше.',
      heroImageAlt: 'Жилая улица с кирпичными домами в Амстердаме',
      photoCredit: 'Фото: Haberdoedas, Unsplash',
      localNote: 'Три языка. Четкие границы. Один локальный контакт.',
      entryTitle: 'Выберите формат, который подходит вашей ситуации',
      entryConsult: 'Начать с консультации',
      entryPackage: 'Нужно сопровождение',
      entrySingle: 'Нужен один шаг',
      from: 'от',
      trustTitle: 'Поддержка без институциональной дистанции',
      trustText: 'VANTAM объясняет процессы простым языком, помогает подготовиться и держит следующий шаг в фокусе.',
      boundary: 'Мы не заменяем лицензированных специалистов и не обещаем результатов, которые зависят от банков, государственных органов, страховщиков или арендодателей.',
      consultLead: 'Самый простой способ начать',
      servicesLead: 'Отдельные услуги',
      categoryCount: 'услуг',
      packageLead: 'Три уровня поддержки',
      packageCompare: 'Сравните варианты рядом',
      packageDetails: 'Состав выбранного пакета',
      selected: 'Выбрано',
      choose: 'Посмотреть',
      toolsLead: 'Полезные инструменты до разговора',
      toolsText: 'Оцените типичные расходы и отметьте, что уже готово. Инструменты помогают спланировать разговор, а не заменяют консультацию.',
      estimate: 'Сумма выбранных сценариев',
      maximum: 'Максимум в калькуляторе: €4,575',
      difference: 'Разница с Settle',
      progress: 'готово',
      testimonialLead: 'Примеры',
      contactLead: 'Расскажите, что происходит',
      contactAside: 'Можно начать без готового решения',
      contactAsideText: 'Выберите тип запроса или просто опишите ситуацию. Контекст выбранной услуги или пакета уже будет в форме.',
      emailLabel: 'Электронная почта',
      scopeLabel: 'Включено',
      limitsLabel: 'Границы',
      result: 'Результат',
      details: 'Детали',
    },
    en: {
      notice: 'Practical support for students, expats and families in the Netherlands',
      menu: 'Menu',
      darkTheme: 'Use dark theme',
      lightTheme: 'Use light theme',
      heroTitle: 'First steps in the Netherlands, without the noise',
      heroText: 'Documents, registration, banking, healthcare, housing and university admin. You get a clear plan and know what to do next.',
      heroImageAlt: 'Residential brick street in Amsterdam',
      photoCredit: 'Photo: Haberdoedas, Unsplash',
      localNote: 'Three languages. Clear boundaries. One local contact.',
      entryTitle: 'Choose the format that fits your situation',
      entryConsult: 'Start with a consultation',
      entryPackage: 'I need ongoing support',
      entrySingle: 'I need one concrete step',
      from: 'from',
      trustTitle: 'Support without institutional distance',
      trustText: 'VANTAM explains processes in plain language, helps you prepare and keeps the next step in focus.',
      boundary: 'We do not replace licensed professionals or promise outcomes that depend on banks, public bodies, insurers or landlords.',
      consultLead: 'The simplest place to start',
      servicesLead: 'Focused services',
      categoryCount: 'services',
      packageLead: 'Three levels of support',
      packageCompare: 'Compare the options side by side',
      packageDetails: 'Contents of the selected package',
      selected: 'Selected',
      choose: 'View details',
      toolsLead: 'Useful tools before we talk',
      toolsText: 'Review common costs and mark what is already prepared. The tools help you plan the conversation; they do not replace a consultation.',
      estimate: 'Selected scenario total',
      maximum: 'Maximum in the calculator: €4,575',
      difference: 'Difference from Settle',
      progress: 'ready',
      testimonialLead: 'Representative examples',
      contactLead: 'Tell us what is happening',
      contactAside: 'You can start without knowing the answer',
      contactAsideText: 'Choose a request type or describe the situation. Any selected service or package context is already included.',
      emailLabel: 'Email',
      scopeLabel: 'Included',
      limitsLabel: 'Boundaries',
      result: 'Outcome',
      details: 'Details',
    },
  }[lang]), [lang]);

  const serviceCategories = useMemo(() => [
    {
      id: 'admin', label: lang === 'uk' ? 'Документи та адміністрація' : lang === 'ru' ? 'Документы и администрация' : 'Documents and administration',
      description: lang === 'uk' ? 'Реєстрація, DigiD, банк, страхування, листи та університет' : lang === 'ru' ? 'Регистрация, DigiD, банк, страховка, письма и университет' : 'Registration, DigiD, banking, insurance, letters and university',
      icon: FileText,
      ids: ['single_registration_bsn', 'single_digid_activation', 'single_bank_setup', 'single_insurance_setup', 'single_official_letter', 'single_university_admin'],
    },
    {
      id: 'housing', label: lang === 'uk' ? 'Житлові питання' : lang === 'ru' ? 'Жилищные вопросы' : 'Housing questions',
      description: lang === 'uk' ? 'Договір, перевірка пропозиції, депозит і комунікація' : lang === 'ru' ? 'Договор, проверка предложения, депозит и коммуникация' : 'Contract, listing check, deposit and communication',
      icon: House,
      ids: ['single_rental_contract', 'single_housing_scam_check', 'single_deposit_return', 'single_landlord_communication'],
    },
    {
      id: 'health', label: lang === 'uk' ? 'Медицина та відшкодування' : lang === 'ru' ? 'Медицина и возмещения' : 'Healthcare and claims',
      description: lang === 'uk' ? 'GP / huisarts та страхові запити' : lang === 'ru' ? 'GP / huisarts и страховые запросы' : 'GP / huisarts and insurance requests',
      icon: HeartPulse,
      ids: ['single_insurance_claim', 'single_healthcare_registration'],
    },
  ], [lang]);

  const activeCategory = serviceCategories.find((category) => category.id === activeServiceCategory) || serviceCategories[0];
  const activeServices = SINGLE_SERVICES.filter((service) => activeCategory.ids.includes(service.id));
  const calculatorTotal = useMemo(() => PITFALLS.reduce((sum, item) => calculatorToggles[item.id] ? sum + item.cost : sum, 0), [calculatorToggles]);
  const progressPercent = useMemo(() => Math.round((BLUEPRINT_CHECKLIST.filter((item) => completedTasks[item.id]).length / BLUEPRINT_CHECKLIST.length) * 100), [completedTasks]);
  const currentSelectedPkgObj = useMemo(() => PREMIUM_PACKAGES.find((item) => item.id === selectedPackage) || PREMIUM_PACKAGES[1], [selectedPackage]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth'});

  const handleSelectSingleService = (serviceId: string) => {
    setFormInquiryType('single');
    const service = SINGLE_SERVICES.find((item) => item.id === serviceId);
    if (service) setFormMessage(lang === 'uk' ? `Мені потрібна окрема послуга: ${service.name.uk}.` : lang === 'ru' ? `Мне нужна отдельная услуга: ${service.name.ru}.` : `I need a single service: ${service.name.en}.`);
    scrollToContact();
  };

  const handleSelectConsultation = (consultationId: string) => {
    setFormInquiryType('consultation');
    const consultation = CONSULTATIONS_STORE.find((item) => item.id === consultationId);
    if (consultation) setFormMessage(lang === 'uk' ? `Мені потрібна консультація: ${consultation.name.uk}.` : lang === 'ru' ? `Мне нужна консультация: ${consultation.name.ru}.` : `I need a consultation: ${consultation.name.en}.`);
    scrollToContact();
  };

  const handleSelectPackage = (packageId: string) => {
    const item = PREMIUM_PACKAGES.find((pkg) => pkg.id === packageId);
    setSelectedPackage(packageId);
    setFormInquiryType('packages');
    if (item) setFormMessage(lang === 'uk' ? `Мені потрібен пакет: ${item.name.uk} (${item.price}).` : lang === 'ru' ? `Мне нужен пакет: ${item.name.ru} (${item.price}).` : `I need the package: ${item.name.en} (${item.price}).`);
    scrollToContact();
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim() || !formConsent) return;
    setFormState('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: formName, email: formEmail, inquiryType: formInquiryType, message: formMessage, consent: formConsent, language: lang, website: formWebsite, sourceUrl: window.location.href}),
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

  const closeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest('details')?.removeAttribute('open');
  const formErrorMessage = lang === 'uk' ? 'Не вдалося надіслати запит. Спробуйте ще раз або напишіть на vantam.nl@proton.me.' : lang === 'ru' ? 'Не удалось отправить запрос. Попробуйте ещё раз или напишите на vantam.nl@proton.me.' : 'The enquiry could not be sent. Please try again or email vantam.nl@proton.me.';
  const plannerGroups = [
    {category: 'prep' as const, title: dict.checklistPrepTab, description: dict.checklistPrepDesc},
    {category: 'arrival' as const, title: dict.checklistArrivalTab, description: dict.checklistArrivalDesc},
    {category: 'settle' as const, title: dict.checklistSettleTab, description: dict.checklistSettleDesc},
  ];

  return (
    <div className="vantam-site" data-theme={theme}>
      <div className="service-strip">
        <div className="site-container">
          <span>{ui.notice}</span>
          <a href="mailto:vantam.nl@proton.me">vantam.nl@proton.me</a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="brand-lockup" aria-label="VANTAM">
            <VantamLogo className="brand-mark" />
            <span><strong>VANTAM</strong><small>{dict.navSub}</small></span>
          </a>

          <nav className="desktop-nav" aria-label={ui.menu}>
            <a href="#consultations">{dict.consultTitle}</a>
            <a href="#single-services">{dict.navSingleServices}</a>
            <a href="#packages">{dict.navPackages}</a>
            <a href="#tools">{dict.navCalculator}</a>
            <a href="#contact" className="nav-cta">{dict.navContact}</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? ui.darkTheme : ui.lightTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="language-switcher" aria-label={dict.langLabel}>
              {(['uk', 'ru', 'en'] as Language[]).map((code) => (
                <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code}>{code === 'uk' ? 'UA' : code.toUpperCase()}</button>
              ))}
            </div>
            <details ref={mobileNavigationRef} className="mobile-navigation">
              <summary aria-label={ui.menu}><Menu /></summary>
              <nav>
                <a href="#consultations" onClick={closeNavigation}>{dict.consultTitle}</a>
                <a href="#single-services" onClick={closeNavigation}>{dict.navSingleServices}</a>
                <a href="#packages" onClick={closeNavigation}>{dict.navPackages}</a>
                <a href="#tools" onClick={closeNavigation}>{dict.navCalculator}</a>
                <a href="#faq" onClick={closeNavigation}>{dict.navFaq}</a>
                <a href="#contact" onClick={closeNavigation}>{dict.navContact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="site-container hero-layout">
            <div className="hero-copy reveal-block">
              <p className="hero-kicker">VANTAM Netherlands</p>
              <h1>{ui.heroTitle}</h1>
              <p className="hero-lede">{ui.heroText}</p>
              <div className="hero-actions">
                <a href="#consultations" className="button button-primary">{dict.selectorConsultTitle}<ArrowRight /></a>
                <a href="#single-services" className="text-link">{dict.navServices}<ArrowUpRight /></a>
              </div>
              <p className="hero-note"><ShieldCheck />{ui.localNote}</p>
            </div>
            <figure className="hero-media reveal-media">
              <Image src={HERO_IMAGE} alt={ui.heroImageAlt} fill priority sizes="(max-width: 767px) 100vw, 48vw" />
              <figcaption>
                <span>Amsterdam Oost</span>
                <a href="https://unsplash.com/photos/_vAGc7k6REg" target="_blank" rel="noreferrer">{ui.photoCredit}</a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="entry-section" aria-labelledby="entry-title">
          <div className="site-container">
            <h2 id="entry-title">{ui.entryTitle}</h2>
            <div className="entry-routes">
              <a href="#consultations"><span>{ui.entryConsult}</span><strong>{ui.from} {CONSULTATIONS_STORE[0].price}</strong><ArrowRight /></a>
              <a href="#packages"><span>{ui.entryPackage}</span><strong>{ui.from} {PREMIUM_PACKAGES[0].price}</strong><ArrowRight /></a>
              <a href="#single-services"><span>{ui.entrySingle}</span><strong>{ui.from} €79</strong><ArrowRight /></a>
            </div>
          </div>
        </section>

        <section id="why" className="trust-section section-anchor">
          <div className="site-container trust-layout">
            <div>
              <h2>{ui.trustTitle}</h2>
              <p className="large-copy">{ui.trustText}</p>
            </div>
            <div className="trust-points">
              <article><GraduationCap /><div><h3>{dict.roleTitle}</h3><p>{dict.roleDesc}</p></div></article>
              <article><Info /><div><h3>{dict.antiRoleTitle}</h3><p>{ui.boundary}</p></div></article>
            </div>
          </div>
        </section>

        <section id="consultations" className="consultations-section section-anchor">
          <div className="site-container">
            <div className="section-intro"><p>{ui.consultLead}</p><h2>{dict.consultTitle}</h2><span>{dict.consultSub}</span></div>
            <div className="consultation-composition">
              {CONSULTATIONS_STORE.map((consultation, index) => (
                <article key={consultation.id} className={index === 0 ? 'consultation consultation-featured' : 'consultation'}>
                  <div className="consultation-top"><span><Clock />{consultation.duration[lang]}</span><strong>{consultation.price}</strong></div>
                  <h3>{consultation.name[lang]}</h3>
                  <p>{consultation.desc[lang]}</p>
                  <dl><div><dt>{ui.result}</dt><dd>{consultation.result[lang]}</dd></div><div><dt>{ui.details}</dt><dd>{consultation.note[lang]}</dd></div></dl>
                  <button onClick={() => handleSelectConsultation(consultation.id)} className="button button-secondary">{consultation.cta[lang]}<ArrowRight /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="service-map-section section-anchor">
          <div className="site-container">
            <div className="section-intro section-intro-wide"><p>{dict.servicesTitle}</p><h2>{dict.servicesSub}</h2></div>
            <div className="pillar-band">
              {sList.map((column) => <div key={column.pillar}><strong>{column.pillar}</strong><span>{column.sub}</span></div>)}
            </div>
          </div>
        </section>

        <section id="single-services" className="single-services-section section-anchor">
          <div className="site-container services-layout">
            <aside>
              <p>{ui.servicesLead}</p>
              <h2>{dict.singleTitle}</h2>
              <span>{dict.singleSub}</span>
              <div className="service-category-tabs" role="tablist" aria-label={ui.servicesLead}>
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button key={category.id} role="tab" aria-selected={activeServiceCategory === category.id} onClick={() => setActiveServiceCategory(category.id)}>
                      <Icon /><span><strong>{category.label}</strong><small>{category.ids.length} {ui.categoryCount}</small></span><ChevronRight />
                    </button>
                  );
                })}
              </div>
            </aside>
            <div className="service-list-panel" role="tabpanel">
              <div className="service-panel-heading"><div><h3>{activeCategory.label}</h3><p>{activeCategory.description}</p></div><span>{activeServices.length}</span></div>
              <div className="service-rows">
                {activeServices.map((service) => (
                  <article key={service.id}>
                    <div className="service-name"><h4>{service.name[lang]}</h4><span>{service.mode[lang]}</span></div>
                    <div className="service-description"><p>{service.desc[lang]}</p><small><Check />{service.limit[lang]}</small>{service.notIncluded && <small className="service-exclusion">{service.notIncluded[lang]}</small>}</div>
                    <div className="service-action"><strong>{service.price}</strong><button onClick={() => handleSelectSingleService(service.id)} aria-label={`${dict.singleCta}: ${service.name[lang]}`}><ArrowUpRight /></button></div>
                  </article>
                ))}
              </div>
              <div className="boundary-note"><Info /><p><strong>{dict.housingDisclaimerTitle}</strong>{dict.housingDisclaimerText}</p></div>
            </div>
          </div>
        </section>

        <section id="packages" className="packages-section section-anchor">
          <div className="site-container">
            <div className="section-intro"><p>{ui.packageLead}</p><h2>{dict.pkgGridTitle}</h2><span>{ui.packageCompare}</span></div>
            <div className="package-comparison">
              {PREMIUM_PACKAGES.map((item) => {
                const isSelected = item.id === selectedPackage;
                return (
                  <article key={item.id} className={isSelected ? 'package-option is-selected' : 'package-option'}>
                    <div className="package-heading"><span>{item.subtitle[lang]}</span><strong>{item.price}</strong></div>
                    <h3>{item.name[lang]}</h3>
                    <p>{item.tagline[lang]}</p>
                    <small><Clock />{item.workload[lang]}</small>
                    <ul>{item.scope[lang].slice(0, 4).map((scope) => <li key={scope}><Check />{scope}</li>)}</ul>
                    <button onClick={() => setSelectedPackage(item.id)} aria-pressed={isSelected}>{isSelected ? ui.selected : ui.choose}<ArrowRight /></button>
                  </article>
                );
              })}
            </div>
            <div className="package-detail" aria-live="polite">
              <div className="package-summary">
                <p>{ui.packageDetails}</p>
                <h3>{currentSelectedPkgObj.name[lang]}</h3>
                <strong>{currentSelectedPkgObj.price}</strong>
                <span>{currentSelectedPkgObj.idealFor[lang]}</span>
                <div className="package-actions"><button onClick={() => handleSelectPackage(currentSelectedPkgObj.id)} className="button button-primary">{currentSelectedPkgObj.cta[lang]}<ArrowRight /></button><button ref={pdfTriggerRef} id="pdf-download-btn" onClick={() => setShowExportModal(true)} className="button button-quiet"><Download />{dict.pdfBtn}</button></div>
              </div>
              <div className="package-list"><h4><ShieldCheck />{ui.scopeLabel}</h4><ul>{currentSelectedPkgObj.scope[lang].map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
              <div className="package-list package-limits"><h4><AlertCircle />{ui.limitsLabel}</h4><ul>{currentSelectedPkgObj.limits[lang].map((item) => <li key={item}><AlertCircle />{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="tools" className="tools-section section-anchor">
          <div className="site-container">
            <div className="section-intro section-intro-wide"><p>{ui.toolsLead}</p><h2>{ui.toolsText}</h2></div>
            <div id="calculator" className="calculator-shell section-anchor">
              <div className="calculator-copy"><h3>{dict.calculatorTitle}</h3><p>{dict.calculatorInfo}</p><div className="risk-list">{PITFALLS.map((item) => { const checked = !!calculatorToggles[item.id]; return <button key={item.id} onClick={() => setCalculatorToggles((previous) => ({...previous, [item.id]: !previous[item.id]}))} aria-pressed={checked} className={checked ? 'is-selected' : ''}><span className="check-box">{checked && <Check />}</span><span><strong>{item.label[lang]}</strong><small>{item.explanation[lang]}</small></span><b>+€{item.cost}</b></button>; })}</div></div>
              <aside className="calculator-result"><span>{ui.estimate}</span><strong>€{calculatorTotal}</strong><small>{ui.maximum}</small><div><span>{dict.calcPackageLabel}</span><b>€749</b>{calculatorTotal > 749 && <p>{ui.difference}: €{calculatorTotal - 749}</p>}</div><p><AlertCircle />{dict.calcFooterNotice}</p></aside>
            </div>

            <div id="checklist" className="planner-shell section-anchor">
              <div className="planner-heading"><div><h3>{dict.checklistTitle}</h3><p>{dict.checklistSub}</p></div><div className="planner-progress"><strong>{progressPercent}%</strong><span>{ui.progress}</span></div></div>
              <div className="planner-columns">{plannerGroups.map((group) => <section key={group.category}><header><h4>{group.title}</h4><span>{group.description}</span></header>{BLUEPRINT_CHECKLIST.filter((item) => item.category === group.category).map((task) => { const done = !!completedTasks[task.id]; return <button key={task.id} onClick={() => setCompletedTasks((previous) => ({...previous, [task.id]: !previous[task.id]}))} aria-pressed={done} className={done ? 'is-complete' : ''}><span className="check-box">{done && <Check />}</span><span>{task.title[lang]}</span></button>; })}</section>)}</div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="proof-section section-anchor">
          <div className="site-container proof-layout">
            <div className="proof-heading"><p>{ui.testimonialLead}</p><h2>{dict.testimonialsTitle}</h2><span>{dict.testimonialsSub}</span></div>
            <div className="testimonial-stage">
              <AnimatePresence initial={false}>
                <motion.figure key={activeTestimonialIdx} initial={{opacity: 0, transform: prefersReducedMotion ? 'none' : 'translateY(4px)'}} animate={{opacity: 1, transform: 'none'}} exit={{opacity: 0}} transition={{duration: prefersReducedMotion ? 0 : 0.18}}>
                  <p>{TESTIMONIALS[activeTestimonialIdx].story[lang]}</p>
                  <figcaption><strong>{TESTIMONIALS[activeTestimonialIdx].name[lang]}</strong><span>{TESTIMONIALS[activeTestimonialIdx].role[lang]}</span><span>{TESTIMONIALS[activeTestimonialIdx].city[lang]} / {TESTIMONIALS[activeTestimonialIdx].university[lang]}</span></figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="testimonial-controls"><span>{activeTestimonialIdx + 1} / {TESTIMONIALS.length}</span><div><button onClick={() => setActiveTestimonialIdx((previous) => previous === 0 ? TESTIMONIALS.length - 1 : previous - 1)} aria-label={lang === 'uk' ? 'Попередня ситуація' : lang === 'ru' ? 'Предыдущая ситуация' : 'Previous situation'}><ChevronLeft /></button><button onClick={() => setActiveTestimonialIdx((previous) => previous === TESTIMONIALS.length - 1 ? 0 : previous + 1)} aria-label={lang === 'uk' ? 'Наступна ситуація' : lang === 'ru' ? 'Следующая ситуация' : 'Next situation'}><ChevronRight /></button></div></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-anchor">
          <div className="site-container faq-layout">
            <div><h2>{dict.faqTitle}</h2><p>{dict.faqSub}</p></div>
            <div className="faq-list">{FAQS_STORE.map((faq) => { const open = !!faqOpen[faq.id]; const answerId = `faq-answer-${faq.id}`; return <div key={faq.id} className="faq-item"><button onClick={() => setFaqOpen((previous) => ({...previous, [faq.id]: !previous[faq.id]}))} aria-expanded={open} aria-controls={answerId}><span>{faq.q[lang]}</span><ChevronDown className={open ? 'is-open' : ''} /></button><div id={answerId} aria-hidden={!open} className={open ? 'faq-answer is-open' : 'faq-answer'}><p>{faq.a[lang]}</p></div></div>; })}</div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="site-container contact-layout">
            <div className="contact-copy"><p>{ui.contactLead}</p><h2>{dict.contactTitle}</h2><span>{dict.contactSub}</span><div className="contact-note"><MessageIcon /><div><strong>{ui.contactAside}</strong><p>{ui.contactAsideText}</p></div></div><a href="mailto:vantam.nl@proton.me">{ui.emailLabel}: vantam.nl@proton.me</a></div>
            <div className="contact-form-shell">
              {formState === 'success' ? <motion.div ref={successRef} tabIndex={-1} role="status" initial={{opacity: 0}} animate={{opacity: 1}} className="form-success"><span><Check /></span><h3>{dict.contactSuccessTitle}</h3><p>{dict.contactSuccessDesc}</p><button onClick={handleResetForm} className="button button-primary">{dict.contactFailBtn}</button></motion.div> :
                <form onSubmit={handleFormSubmit}>
                  <div className="sr-only" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formWebsite} onChange={(event) => setFormWebsite(event.target.value)} /></div>
                  {formState === 'error' && <div role="alert" className="form-error">{formErrorMessage}</div>}
                  <div className="form-grid"><label htmlFor="contact-name"><span>{dict.contactNameLabel} *</span><input id="contact-name" name="name" type="text" required value={formName} onChange={(event) => {setFormName(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={120} autoComplete="name" placeholder="Maria" /></label><label htmlFor="contact-email"><span>{dict.contactEmailLabel} *</span><input id="contact-email" name="email" type="email" required value={formEmail} onChange={(event) => {setFormEmail(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={254} autoComplete="email" placeholder="maria@example.com" /></label></div>
                  <label htmlFor="contact-type"><span>{dict.contactTypeLabel}</span><select id="contact-type" name="inquiryType" value={formInquiryType} onChange={(event) => setFormInquiryType(event.target.value)} disabled={formState === 'sending'}><option value="packages">{dict.contactTypeOpt1}</option><option value="single">{dict.contactTypeOpt2}</option><option value="consultation">{dict.consultTitle}</option><option value="b2b">{dict.contactTypeOpt3}</option><option value="general">{dict.contactTypeOpt4}</option></select></label>
                  <label htmlFor="contact-message"><span>{dict.contactMessageLabel} *</span><textarea id="contact-message" name="message" rows={5} required value={formMessage} onChange={(event) => {setFormMessage(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={5000} placeholder={lang === 'uk' ? 'Наприклад: потрібна допомога з BSN і банком.' : lang === 'ru' ? 'Например: нужна помощь с BSN и банком.' : 'For example: I need help with BSN and banking.'} /></label>
                  <label className="consent-row" htmlFor="privacy-consent"><input type="checkbox" id="privacy-consent" name="consent" required checked={formConsent} onChange={(event) => setFormConsent(event.target.checked)} disabled={formState === 'sending'} /><span>{dict.contactConsent}</span></label>
                  <button type="submit" disabled={formState === 'sending' || !formConsent} className="button button-primary contact-submit"><span aria-live="polite">{formState === 'sending' ? dict.contactSending : dict.contactSubmitBtn}</span>{formState !== 'sending' && <ArrowRight />}</button>
                </form>}
            </div>
          </div>
          <footer className="site-footer"><div className="site-container footer-layout"><a href="#top" className="footer-brand"><VantamLogo className="brand-mark" light /><strong>VANTAM</strong></a><p>{dict.footerSub}</p><div><a href="#consultations">{dict.consultTitle}</a><a href="#single-services">{dict.navSingleServices}</a><a href="#packages">{dict.navPackages}</a><a href="#testimonials">{dict.navTestimonials}</a><a href="mailto:vantam.nl@proton.me">vantam.nl@proton.me</a></div></div></footer>
        </section>
      </main>

      {showExportModal && <div id="print-modal-overlay" className="print-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowExportModal(false); }}><div ref={modalRef} className="print-modal" role="dialog" aria-modal="true" aria-labelledby="print-modal-title"><div className="print-modal-header"><div><h3 id="print-modal-title">{dict.modalTitle}</h3><p>{dict.modalDesc}</p></div><button ref={modalCloseRef} id="close-print-modal-btn" onClick={() => setShowExportModal(false)} aria-label={dict.modalCloseBtn}><X /></button></div><div id="vantam-printable-prospectus" className="print-sheet"><div className="print-brand-row"><div className="print-brand"><VantamLogo className="brand-mark" /><div><strong>VANTAM</strong><p>{dict.modalAdvisorDesc}</p></div></div><div><span>{dict.modalOfferNo}</span><strong>{currentSelectedPkgObj.id.toUpperCase()}-2026</strong></div></div><div className="print-package-summary"><div><span>{dict.modalTargetPlan}</span><h4>{currentSelectedPkgObj.name[lang]}</h4><p>{currentSelectedPkgObj.idealFor[lang]}</p></div><strong>{currentSelectedPkgObj.price}</strong></div><div className="print-list"><h5>{dict.pkgScopeTitle}</h5><ul>{currentSelectedPkgObj.scope[lang].map((item) => <li key={item}>{item}</li>)}</ul></div><div className="print-list"><h5>{dict.pkgLimitsTitle}</h5><ul>{currentSelectedPkgObj.limits[lang].map((item) => <li key={item}>{item}</li>)}</ul></div><p className="print-disclaimer">{dict.footerSub}</p><div className="print-footer">VANTAM / THE HAGUE / vantam.nl@proton.me</div></div><div className="print-actions"><button onClick={() => window.print()} className="button button-primary"><Download />{dict.modalPrintBtn}</button><button onClick={() => setShowExportModal(false)} className="button button-quiet">{dict.modalCloseBtn}</button></div></div></div>}

      <style jsx global>{`@media print { body * { visibility: hidden; } #vantam-printable-prospectus, #vantam-printable-prospectus * { visibility: visible; } #vantam-printable-prospectus { position: absolute; inset: 0; width: 100%; border: 0 !important; box-shadow: none !important; } }`}</style>
    </div>
  );
}

function MessageIcon() {
  return <MessageCircle aria-hidden="true" />;
}
