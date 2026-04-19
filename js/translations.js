/* ============================================================
   SHIFA – Translations
   Supported languages: en, de, uz, ru
   ============================================================ */

const TRANSLATIONS = {
  en: {
    /* ── Nav ── */
    "nav.product":  "Product",
    "nav.features": "Features",
    "nav.pricing":  "Pricing",
    "nav.contact":  "Contact",
    "nav.cta":      "Get Early Access",

    /* ── Countdown ── */
    "countdown.days":  "Days",
    "countdown.hours": "Hours",
    "countdown.mins":  "Minutes",
    "countdown.secs":  "Seconds",

    /* ── Hero ── */
    "hero.heading.main": "Take your health<br>into your own hands",
    "hero.heading":  "Try our <em>Demo</em> before it's too late!",
    "hero.subtitle": "Shifa is reshaping care by aligning the needs of patients and clinicians in one trusted, modern space.",
    "hero.cta":      "Get Early Access",
    "hero.features": "See Features",

    /* ── About ── */
    "about.label":    "About Shifa",
    "about.heading":  "Evolving the healthcare ecosystem",
    "about.body":     "Shifa is reshaping care by aligning the needs of patients and clinicians in one trusted, modern space. By removing friction from access, documentation, and communication—and elevating context with responsible AI—we help the system work the way it should: faster decisions, clearer care journeys, and a healthier, more resilient healthcare industry.",
    "about.readmore": "Read More",

    /* ── Connect ── */
    "connect.label":   "For Patients &amp; Doctors",
    "connect.heading": "Built to connect doctors and patients seamlessly.",
    "connect.body":    "Making care faster, clearer, and more secure. Book visits or video calls without the wait, keep your health records safe and accessible, and give clinicians the context they need to treat you with confidence. With Shifa AI supporting every step, care becomes simpler for patients and smarter for doctors.",

    /* ── Shifa AI ── */
    "ai.label":    "Shifa AI",
    "ai.heading":  "Shifa AI \u2013 for smart care",
    "ai.body":     "Shifa AI is your real-time healthcare co\u2011pilot. For patients, it streamlines bookings, surfaces the right information, and keeps documents organized so decisions are clearer. For doctors, it brings context forward\u2014summarizing history, capturing notes during consults, and generating reports\u2014so care is faster, safer, and more informed.",
    "ai.patients": "Patients",
    "ai.doctors":  "Doctors",

    /* ── Devices ── */
    "devices.label":   "Every Device",
    "devices.heading": "One platform.<br>Phone, tablet, and web.",
    "devices.body":    "Whether you\u2019re a patient checking upcoming appointments on your phone or a doctor managing a full day\u2019s schedule on a tablet, Shifa works beautifully across every screen \u2014 with the same intuitive experience, same real-time data, and same care at the centre.",

    /* ── Infrastructure ── */
    "infra.label":        "Infrastructure",
    "infra.heading":      "Built on Strong Foundations",
    "infra.body":         "Shifa\u2019s modern, secure infrastructure protects health data end\u2011to\u2011end with encryption, strict access controls, and continuous monitoring. We follow GDPR principles to keep patients and doctors in control. Safe for patients, dependable for clinicians, and industry\u2011ready.",
    "infra.card1.heading": "End-to-End Encryption",
    "infra.card1.body":    "All health data encrypted in transit and at rest \u2014 your information stays private at every step.",
    "infra.card2.heading": "GDPR Compliant",
    "infra.card2.body":    "We follow GDPR principles \u2014 transparent, lawful, and always with your consent. Patients and doctors stay in full control.",
    "infra.card3.heading": "Continuous Monitoring",
    "infra.card3.body":    "Automated alerting and continuous infrastructure monitoring means anomalies are caught before they affect care.",

    /* ── Features Page ── */
    "features.label":       "Features",
    "features.heading":     "Everything you need,<br><em>nothing you don\u2019t.</em>",
    "features.tab.patients": "For Patients",
    "features.tab.doctors":  "For Doctors",

    /* ── Patients Panel ── */
    "patients.intro.heading": "Your health, simplified.<br>Book, meet, and carry your data effortlessly.",
    "patients.intro.body":    "No need for waiting, your health comes first. Streamline your doctors, records and bookings with a smart touch.",

    "patients.booking.label":   "Remote Booking",
    "patients.booking.heading": "Book from anywhere,<br>onsite or video.",
    "patients.booking.b1":      "Find doctors or clinics near you and book instantly",
    "patients.booking.b2":      "Easily indicate visit-types and your reason for visits",
    "patients.booking.b3":      "Receive automated confirmations and calendar integration",

    "patients.video.label":   "Video Consultations",
    "patients.video.heading": "Care at home<br>without the commute.",
    "patients.video.b1":      "Secure browser-based video",
    "patients.video.b2":      "Identity checks and bandwidth optimization",
    "patients.video.b3":      "Private waiting rooms",

    "patients.records.label":   "Digital Health Records",
    "patients.records.heading": "Your digital history,<br>organized and shareable.",
    "patients.records.b1":      "Upload or download documents with ease",
    "patients.records.b2":      "All your past and current documents stored together",
    "patients.records.b3":      "Easily share and receive documents to/from your personal database",

    "patients.chat.label":   "Chat / Messenger",
    "patients.chat.heading": "Your AI health assistant<br>at your hands.",
    "patients.chat.b1":      "Instantly consult about your health records, appointments and doctor notes",
    "patients.chat.b2":      "Assisted booking based on your requests",
    "patients.chat.b3":      "Symptom checking with suggested doctors or caretaking",

    "patients.reminders.label":   "Smart Reminders",
    "patients.reminders.heading": "Never miss medications<br>or appointments.",
    "patients.reminders.b1":      "Reminders about appointments or follow-ups",
    "patients.reminders.b2":      "Get reminded about picking up your medications or when to take them",

    "patients.aireports.label":   "AI-driven Reports",
    "patients.aireports.heading": "Get guidance while keeping<br>doctors in control.",
    "patients.aireports.b1":      "Support in reading and summarizing complex health reports",
    "patients.aireports.b2":      "Assistance in diagnosing certain symptoms",
    "patients.aireports.b3":      "Red flag reports for emergency care",

    /* ── Doctors Panel ── */
    "doctors.intro.heading": "Care without the chaos.<br>One elegant system that thinks with you.",
    "doctors.intro.body":    "We deliver features that holistically cover your clinic\u2019s needs, so you gain more time for your patients without compromise.",

    "doctors.patients.label":   "Patient Management",
    "doctors.patients.heading": "A clear view of all<br>your patients.",
    "doctors.patients.b1":      "Patient files, notes and prescriptions all in one place",
    "doctors.patients.b2":      "Appointment timelines for each patient",
    "doctors.patients.b3":      "Easily book appointments for any patient during appointments",

    "doctors.analytics.label":   "Analytics",
    "doctors.analytics.heading": "Understand utilization<br>and your performance.",
    "doctors.analytics.b1":      "Daily and weekly KPIs for your clinic",
    "doctors.analytics.b2":      "Insights into no-shows for appointments",
    "doctors.analytics.b3":      "Export your analytics to CSVs",

    "doctors.prescription.label":   "Prescription Drafting",
    "doctors.prescription.heading": "Drafts you can quickly<br>review and sign.",
    "doctors.prescription.b1":      "Prescription drafts that you can quickly review and sign",
    "doctors.prescription.b2":      "Generate prescriptions straight from your smart notes",
    "doctors.prescription.b3":      "Easily provide e-prescriptions for export",

    "doctors.video.label":   "Video Consultations",
    "doctors.video.heading": "See patients face-to-face,<br>from anywhere.",
    "doctors.video.b1":      "High-quality encrypted video sessions",
    "doctors.video.b2":      "Private waiting rooms for patients",
    "doctors.video.b3":      "Conduct consultations from any device",

    "doctors.ehr.label":   "Electronic Health Records",
    "doctors.ehr.heading": "Keep patient records<br>digitized and shared securely.",
    "doctors.ehr.b1":      "Upload medical documents to all your patients",
    "doctors.ehr.b2":      "Encrypted document storage",
    "doctors.ehr.b3":      "Role-based access and secure sharing",

    "doctors.calendar.label":   "Calendar Management",
    "doctors.calendar.heading": "A clear schedule that supports<br>onsite and remote appointments.",
    "doctors.calendar.b1":      "Reserve slots for in-clinic appointment scheduling",
    "doctors.calendar.b2":      "Set your schedule to allow for bookings on your time",
    "doctors.calendar.b3":      "Easily change bookings in the calendar",

    /* ── Pricing ── */
    "pricing.label":   "Pricing",
    "pricing.heading": "Pricing for Doctors",
    "pricing.body":    "Clinic-ready features with a platform that scales alongside your growth.",

    "pricing.basic.name":     "Basic",
    "pricing.basic.currency": "$",
    "pricing.basic.amount":   "39",
    "pricing.basic.period": "per doctor/month",
    "pricing.basic.f1":     "Calendar Management",
    "pricing.basic.f2":     "Electronic Health Records",
    "pricing.basic.f3":     "Chat",
    "pricing.basic.f4":     "Patient Management",
    "pricing.basic.f5":     "Analytics",
    "pricing.basic.cta":    "Get Started",

    "pricing.pro.name":     "Pro",
    "pricing.pro.badge":    "Popular",
    "pricing.pro.currency": "$",
    "pricing.pro.amount":   "99",
    "pricing.pro.period": "per doctor/month",
    "pricing.pro.f1":     "Calendar Management",
    "pricing.pro.f2":     "Electronic Health Records",
    "pricing.pro.f3":     "Chat",
    "pricing.pro.f4":     "Patient Management",
    "pricing.pro.f5":     "Analytics",
    "pricing.pro.f6":     "Video Consultation",
    "pricing.pro.f7":     "AI Powered Note-taking",
    "pricing.pro.f8":     "AI Document Classification",
    "pricing.pro.f9":     "Shifa AI Triage Bot",
    "pricing.pro.cta":    "Get Started",

    "pricing.premium.name":     "Premium",
    "pricing.premium.currency": "$",
    "pricing.premium.amount":   "159",
    "pricing.premium.period": "per doctor/month",
    "pricing.premium.f1":     "Calendar Management",
    "pricing.premium.f2":     "Electronic Health Records",
    "pricing.premium.f3":     "Chat",
    "pricing.premium.f4":     "Patient Management",
    "pricing.premium.f5":     "Advanced Analytics",
    "pricing.premium.f6":     "Video Consultation",
    "pricing.premium.f7":     "AI Powered Note-taking",
    "pricing.premium.f8":     "AI Document Classification",
    "pricing.premium.f9":     "Advanced Shifa AI Triage Bot",
    "pricing.premium.f10":    "Differential Diagnosis Assistant",
    "pricing.premium.f11":    "Prescription Drafting",
    "pricing.premium.cta":    "Get Started",

    /* ── Contact ── */
    "contact.label":   "Get in Touch",
    "contact.heading": "Contact Us",
    "contact.body":    "Clinic-ready features with a platform that scales alongside your growth.",

    "contact.help.heading": "Help and Support",
    "contact.help.body":    "Ask product questions, report problems, or leave feedback. Unsure on how to get started with Shifa?",
    "contact.help.cta":     "Contact Us",

    "contact.demo.heading": "Book a Demo",
    "contact.demo.body":    "Try out Shifa or test certain features to find the fit for your doctors or clinic.",
    "contact.demo.cta":     "Contact Us",

    "contact.careers.heading": "Careers at Shifa",
    "contact.careers.body":    "Join SHIFA and help shape the future of connected care. We value craft, clarity, and thoughtful innovation. If you care about design quality, privacy, and real\u2011world impact, you\u2019ll fit right in.",
    "contact.careers.cta":     "Apply Now",

    "contact.offices.heading": "Our Offices",

    "contact.form.heading":            "Let\u2019s Chat!",
    "contact.form.name":               "Name",
    "contact.form.name.placeholder":   "Your full name",
    "contact.form.email":              "Email",
    "contact.form.email.placeholder":  "your@email.com",
    "contact.form.message":            "Message",
    "contact.form.message.placeholder":"How can we help?",
    "contact.form.submit":             "Send Message",
    "contact.form.sent":               "Sent \u2713",

    /* ── Footer ── */
    /* ── Careers section ── */
    "careers.heading": "Join us. Shape the future of care.",
    "job1.tag":   "Engineering",
    "job1.title": "Full Stack Software Engineer",
    "job1.meta":  "Berlin, Germany \u00b7 Remote-friendly \u00b7 Full-time",
    "job1.apply": "Apply for this role",
    "job1.desc":  "Build and maintain Shifa\u2019s core platform \u2014 from patient-facing React interfaces to backend APIs and cloud infrastructure. You\u2019ll work across the full stack, ship features that reach thousands of patients and clinicians, and help define the engineering culture at an early stage.",

    "footer.brand.body":    "Digitalizing healthcare. Our mission is to make healthcare simple, human, and accessible\u2014connecting doctors and patients through secure video consultations, intuitive scheduling, and intelligent AI\u2011powered notes. From Berlin, we\u2019re unifying digital health records, remote booking, and verified reviews into one seamless platform.",
    "footer.nav.heading":   "Navigation",
    "footer.legal.heading": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms":   "Terms of Service",
    "footer.legal.gdpr":    "GDPR",
    "footer.copyright":     "\u00a9 2025 SHIFA. All rights reserved.",
    "footer.made":          "Made in Berlin \ud83c\udde9\ud83c\uddea",

    /* ── Privacy Policy ── */
    "privacy.title":     "Privacy Policy",
    "privacy.effective": "Effective Date: April 10, 2026",
    "privacy.lead":      "At shifa.uz, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that data.",

    "privacy.s1.heading": "1. Information We Collect",
    "privacy.s1.intro":   "We may collect the following types of information:",
    "privacy.s1.items":   "<li>Personal information you provide directly, such as your name, phone number, and email address.</li><li>Health-related information you choose to submit \u2014 for example, through appointment bookings, medical inquiries, or your profile.</li><li>Technical information collected automatically, including IP address, browser type, device details, pages visited, and usage patterns.</li><li>Data gathered through cookies and similar technologies (see Section 6).</li>",

    "privacy.s2.heading": "2. How We Use Your Information",
    "privacy.s2.intro":   "We use your information to:",
    "privacy.s2.items":   "<li>Provide, maintain, and improve our website and services.</li><li>Manage appointments, communications, and support requests.</li><li>Personalise your experience on our platform.</li><li>Maintain security, detect fraud, and prevent misuse.</li><li>Comply with applicable legal obligations.</li>",

    "privacy.s3.heading": "3. Legal Basis for Processing",
    "privacy.s3.intro":   "Where applicable, we process personal data based on:",
    "privacy.s3.items":   "<li>Your explicit consent.</li><li>Performance of a contract or a service you have requested.</li><li>Compliance with legal obligations.</li><li>Our legitimate interests, such as improving service quality and maintaining security.</li>",

    "privacy.s4.heading": "4. Sharing of Information",
    "privacy.s4.intro":   "We do not sell your personal data. We may share your information with:",
    "privacy.s4.items":   "<li>Service providers who help us operate the website and deliver our services.</li><li>Healthcare professionals or partner organisations when necessary to fulfil a requested service.</li><li>Authorities or legal bodies when required by applicable law.</li>",
    "privacy.s4.outro":   "All third parties are required to protect your data and use it solely for authorised purposes.",

    "privacy.s5.heading": "5. Data Security",
    "privacy.s5.body":    "We apply reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, misuse, or disclosure. Please note that no online platform can guarantee absolute security.",

    "privacy.s6.heading": "6. Cookies",
    "privacy.s6.intro":   "We use cookies and similar technologies on shifa.uz to:",
    "privacy.s6.items":   "<li>Keep the website functioning properly.</li><li>Remember your preferences.</li><li>Analyse traffic and improve performance.</li><li>Support security and fraud prevention.</li>",
    "privacy.s6.outro":   "You can control or disable cookies through your browser settings. Please note that disabling cookies may affect some website functionality. You can also update your cookie preferences at any time using the banner at the bottom of this page.",

    "privacy.s7.heading": "7. Data Retention",
    "privacy.s7.body":    "We retain personal data only for as long as necessary to fulfil the purposes described in this Privacy Policy, unless a longer period is required by law.",

    "privacy.s8.heading": "8. Your Rights",
    "privacy.s8.intro":   "Depending on applicable law, you may have the right to:",
    "privacy.s8.items":   "<li>Access your personal data.</li><li>Correct inaccurate or incomplete data.</li><li>Request deletion of your data.</li><li>Restrict or object to processing.</li><li>Withdraw consent at any time, where processing is based on consent.</li><li>Request data portability.</li>",
    "privacy.s8.outro":   "To exercise any of these rights, please contact us using the details in Section 12.",

    "privacy.s9.heading": "9. Children\u2019s Privacy",
    "privacy.s9.body":    "Our services are not intended for children unless specifically stated. If you believe a child has provided personal data without appropriate consent, please contact us so we can take prompt action.",

    "privacy.s10.heading": "10. Third-Party Links",
    "privacy.s10.body":    "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies separately.",

    "privacy.s11.heading": "11. Changes to This Policy",
    "privacy.s11.body":    "We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date. We encourage you to review this page periodically.",

    "privacy.s12.heading": "12. Contact Us",
    "privacy.s12.intro":   "If you have questions or requests regarding this Privacy Policy, please reach out:",
    "privacy.s12.items":   "<li>Website: <a href=\"https://shifa.uz\">shifa.uz</a></li><li>Email: <a href=\"mailto:info@shifa.uz\">info@shifa.uz</a></li>",
  },

  de: {
    /* ── Nav ── */
    "nav.product":  "Produkt",
    "nav.features": "Funktionen",
    "nav.pricing":  "Preise",
    "nav.contact":  "Kontakt",
    "nav.cta":      "Fr\u00fchzugang erhalten",

    /* ── Countdown ── */
    "countdown.days":  "Tage",
    "countdown.hours": "Stunden",
    "countdown.mins":  "Minuten",
    "countdown.secs":  "Sekunden",

    /* ── Hero ── */
    "hero.heading.main": "Nehmen Sie Ihre Gesundheit<br>in Ihre eigenen H\u00e4nde",
    "hero.heading":  "Testen Sie unsere <em>Demo</em> bevor es zu sp\u00e4t ist!",
    "hero.subtitle": "Shifa gestaltet die Gesundheitsversorgung neu, indem es die Bed\u00fcrfnisse von Patienten und Klinikern in einem vertrauensw\u00fcrdigen, modernen Raum vereint.",
    "hero.cta":      "Fr\u00fchzugang erhalten",
    "hero.features": "Funktionen ansehen",

    /* ── About ── */
    "about.label":    "\u00dcber Shifa",
    "about.heading":  "Das Gesundheits\u00f6kosystem weiterentwickeln",
    "about.body":     "Shifa gestaltet die Pflege neu, indem es die Bed\u00fcrfnisse von Patienten und Klinikern in einem vertrauensw\u00fcrdigen, modernen Raum vereint. Durch den Abbau von H\u00fcrden bei Zugang, Dokumentation und Kommunikation \u2013 und durch den verantwortungsvollen Einsatz von KI \u2013 helfen wir dem System, so zu funktionieren, wie es sollte: schnellere Entscheidungen, klarere Behandlungswege und eine gesund ere, widerstandsf\u00e4higere Gesundheitsbranche.",
    "about.readmore": "Mehr lesen",

    /* ── Connect ── */
    "connect.label":   "F\u00fcr Patienten &amp; \u00c4rzte",
    "connect.heading": "Entwickelt, um \u00c4rzte und Patienten nahtlos zu verbinden.",
    "connect.body":    "Die Pflege wird schneller, klarer und sicherer. Buchen Sie Besuche oder Videoanrufe ohne Wartezeit, halten Sie Ihre Gesundheitsakten sicher und zug\u00e4nglich, und geben Sie Klinikern den Kontext, den sie brauchen, um Sie mit Vertrauen zu behandeln. Mit Shifa KI an jedem Schritt wird die Pflege f\u00fcr Patienten einfacher und f\u00fcr \u00c4rzte intelligenter.",

    /* ── Shifa AI ── */
    "ai.label":    "Shifa KI",
    "ai.heading":  "Shifa KI \u2013 f\u00fcr intelligente Pflege",
    "ai.body":     "Shifa KI ist Ihr Echtzeit-Gesundheits-Copilot. F\u00fcr Patienten optimiert es Buchungen, liefert die richtigen Informationen und h\u00e4lt Dokumente organisiert, damit Entscheidungen klarer werden. F\u00fcr \u00c4rzte bringt es Kontext nach vorne \u2013 zusammenfassende Verlaufsdaten, Notizen w\u00e4hrend Konsultationen und Berichtserstellung \u2013 sodass die Pflege schneller, sicherer und fundierter wird.",
    "ai.patients": "Patienten",
    "ai.doctors":  "\u00c4rzte",

    /* ── Devices ── */
    "devices.label":   "Jedes Ger\u00e4t",
    "devices.heading": "Eine Plattform.<br>Telefon, Tablet und Web.",
    "devices.body":    "Ob Sie ein Patient sind, der auf dem Smartphone nach anstehenden Terminen schaut, oder ein Arzt, der auf einem Tablet einen vollen Tagesplan verwaltet \u2013 Shifa funktioniert auf jedem Bildschirm wundersch\u00f6n \u2013 mit derselben intuitiven Erfahrung, denselben Echtzeitdaten und derselben Pflege im Mittelpunkt.",

    /* ── Infrastructure ── */
    "infra.label":        "Infrastruktur",
    "infra.heading":      "Auf starken Fundamenten gebaut",
    "infra.body":         "Shifas moderne, sichere Infrastruktur sch\u00fctzt Gesundheitsdaten von Anfang bis Ende mit Verschl\u00fcsselung, strengen Zugriffskontrollen und kontinuierlicher \u00dcberwachung. Wir folgen DSGVO-Grunds\u00e4tzen, um Patienten und \u00c4rzten die Kontrolle zu geben. Sicher f\u00fcr Patienten, zuverl\u00e4ssig f\u00fcr Kliniker und branchenbereit.",
    "infra.card1.heading": "Ende-zu-Ende-Verschl\u00fcsselung",
    "infra.card1.body":    "Alle Gesundheitsdaten sind w\u00e4hrend der \u00dcbertragung und im Ruhezustand verschl\u00fcsselt \u2013 Ihre Informationen bleiben bei jedem Schritt privat.",
    "infra.card2.heading": "DSGVO-konform",
    "infra.card2.body":    "Wir befolgen DSGVO-Grunds\u00e4tze \u2013 transparent, rechtm\u00e4\u00dfig und immer mit Ihrer Zustimmung. Patienten und \u00c4rzte behalten die volle Kontrolle.",
    "infra.card3.heading": "Kontinuierliche \u00dcberwachung",
    "infra.card3.body":    "Automatisierte Alarmierung und kontinuierliche Infrastruktur\u00fcberwachung bedeuten, dass Anomalien erkannt werden, bevor sie die Pflege beeintr\u00e4chtigen.",

    /* ── Features Page ── */
    "features.label":        "Funktionen",
    "features.heading":      "Alles, was Sie brauchen,<br><em>nichts, was Sie nicht brauchen.</em>",
    "features.tab.patients": "F\u00fcr Patienten",
    "features.tab.doctors":  "F\u00fcr \u00c4rzte",

    /* ── Patients Panel ── */
    "patients.intro.heading": "Ihre Gesundheit, vereinfacht.<br>Buchen, treffen und Daten m\u00fchelos verwalten.",
    "patients.intro.body":    "Kein Warten mehr \u2013 Ihre Gesundheit steht an erster Stelle. Optimieren Sie Ihre \u00c4rzte, Aufzeichnungen und Buchungen mit einem intelligenten Touch.",

    "patients.booking.label":   "Fernbuchung",
    "patients.booking.heading": "Von \u00fcberall buchen,<br>vor Ort oder per Video.",
    "patients.booking.b1":      "Finden Sie \u00c4rzte oder Kliniken in Ihrer N\u00e4he und buchen Sie sofort",
    "patients.booking.b2":      "Geben Sie einfach den Besuchstyp und den Grund f\u00fcr Ihren Besuch an",
    "patients.booking.b3":      "Erhalten Sie automatische Best\u00e4tigungen und Kalenderintegration",

    "patients.video.label":   "Videosprechstunden",
    "patients.video.heading": "Pflege zu Hause<br>ohne den Weg.",
    "patients.video.b1":      "Sicheres browserbasiertes Video",
    "patients.video.b2":      "Identit\u00e4tspr\u00fcfungen und Bandbreitenoptimierung",
    "patients.video.b3":      "Private Wartezimmer",

    "patients.records.label":   "Digitale Gesundheitsakten",
    "patients.records.heading": "Ihre digitale Geschichte,<br>organisiert und teilbar.",
    "patients.records.b1":      "Dokumente einfach hoch- oder herunterladen",
    "patients.records.b2":      "Alle Ihre vergangenen und aktuellen Dokumente zusammen gespeichert",
    "patients.records.b3":      "Dokumente einfach mit Ihrer pers\u00f6nlichen Datenbank teilen und empfangen",

    "patients.chat.label":   "Chat / Messenger",
    "patients.chat.heading": "Ihr KI-Gesundheitsassistent<br>in Ihren H\u00e4nden.",
    "patients.chat.b1":      "Sofortige Beratung zu Ihren Gesundheitsakten, Terminen und Arztnotizen",
    "patients.chat.b2":      "Unterst\u00fctzte Buchung auf Basis Ihrer Anfragen",
    "patients.chat.b3":      "Symptompr\u00fcfung mit vorgeschlagenen \u00c4rzten oder Pflegeempfehlungen",

    "patients.reminders.label":   "Intelligente Erinnerungen",
    "patients.reminders.heading": "Verpassen Sie nie Medikamente<br>oder Termine.",
    "patients.reminders.b1":      "Erinnerungen an Termine oder Nachsorgetermine",
    "patients.reminders.b2":      "Werden Sie daran erinnert, Ihre Medikamente abzuholen oder wann Sie sie nehmen sollen",

    "patients.aireports.label":   "KI-gesteuerte Berichte",
    "patients.aireports.heading": "Leitlinien erhalten und dabei<br>\u00c4rzte in der Kontrolle lassen.",
    "patients.aireports.b1":      "Unterst\u00fctzung beim Lesen und Zusammenfassen komplexer Gesundheitsberichte",
    "patients.aireports.b2":      "Hilfe bei der Diagnose bestimmter Symptome",
    "patients.aireports.b3":      "Rote-Flagge-Berichte f\u00fcr Notfallversorgung",

    /* ── Doctors Panel ── */
    "doctors.intro.heading": "Pflege ohne Chaos.<br>Ein elegantes System, das mit Ihnen denkt.",
    "doctors.intro.body":    "Wir liefern Funktionen, die die Bed\u00fcrfnisse Ihrer Klinik ganzheitlich abdecken, damit Sie mehr Zeit f\u00fcr Ihre Patienten gewinnen \u2013 ohne Kompromisse.",

    "doctors.patients.label":   "Patientenverwaltung",
    "doctors.patients.heading": "Ein klarer \u00dcberblick<br>\u00fcber alle Ihre Patienten.",
    "doctors.patients.b1":      "Patientenakten, Notizen und Rezepte an einem Ort",
    "doctors.patients.b2":      "Terminzeitpl\u00e4ne f\u00fcr jeden Patienten",
    "doctors.patients.b3":      "Einfach Termine f\u00fcr jeden Patienten w\u00e4hrend der Konsultation buchen",

    "doctors.analytics.label":   "Analytik",
    "doctors.analytics.heading": "Auslastung und Leistung<br>verstehen.",
    "doctors.analytics.b1":      "T\u00e4gliche und w\u00f6chentliche KPIs f\u00fcr Ihre Klinik",
    "doctors.analytics.b2":      "Einblicke in Terminausf\u00e4lle",
    "doctors.analytics.b3":      "Exportieren Sie Ihre Analysen als CSV",

    "doctors.prescription.label":   "Rezepterstellung",
    "doctors.prescription.heading": "Entwürfe, die Sie schnell<br>prüfen und unterzeichnen können.",
    "doctors.prescription.b1":      "Rezeptentwürfe, die Sie schnell prüfen und unterzeichnen können",
    "doctors.prescription.b2":      "Generieren Sie Rezepte direkt aus Ihren intelligenten Notizen",
    "doctors.prescription.b3":      "Stellen Sie einfach E-Rezepte zum Export bereit",

    "doctors.video.label":   "Videosprechstunden",
    "doctors.video.heading": "Patienten von Angesicht zu Angesicht<br>sehen, von \u00fcberall.",
    "doctors.video.b1":      "Hochwertige verschl\u00fcsselte Videositzungen",
    "doctors.video.b2":      "Private Wartezimmer f\u00fcr Patienten",
    "doctors.video.b3":      "Konsultationen von jedem Ger\u00e4t aus durchf\u00fchren",

    "doctors.ehr.label":   "Elektronische Gesundheitsakten",
    "doctors.ehr.heading": "Patientenakten digitalisiert<br>und sicher geteilt aufbewahren.",
    "doctors.ehr.b1":      "Medizinische Dokumente f\u00fcr alle Ihre Patienten hochladen",
    "doctors.ehr.b2":      "Verschl\u00fcsselter Dokumentenspeicher",
    "doctors.ehr.b3":      "Rollenbasierter Zugang und sichere Weitergabe",

    "doctors.calendar.label":   "Kalenderverwaltung",
    "doctors.calendar.heading": "Ein klarer Zeitplan, der Vor-Ort-<br>und Ferntermine unterst\u00fctzt.",
    "doctors.calendar.b1":      "Zeitfenster f\u00fcr die Terminplanung in der Klinik reservieren",
    "doctors.calendar.b2":      "Legen Sie Ihren Zeitplan fest, um Buchungen zu Ihrer Zeit zu erm\u00f6glichen",
    "doctors.calendar.b3":      "Buchungen einfach im Kalender \u00e4ndern",

    /* ── Pricing ── */
    "pricing.label":   "Preise",
    "pricing.heading": "Preise f\u00fcr \u00c4rzte",
    "pricing.body":    "Klinikfertige Funktionen mit einer Plattform, die mit Ihrem Wachstum skaliert.",

    "pricing.basic.name":     "Basic",
    "pricing.basic.currency": "\u20ac",
    "pricing.basic.amount":   "36",
    "pricing.basic.period": "pro Arzt/Monat",
    "pricing.basic.f1":     "Kalenderverwaltung",
    "pricing.basic.f2":     "Elektronische Gesundheitsakten",
    "pricing.basic.f3":     "Chat",
    "pricing.basic.f4":     "Patientenverwaltung",
    "pricing.basic.f5":     "Analytik",
    "pricing.basic.cta":    "Jetzt starten",

    "pricing.pro.name":     "Pro",
    "pricing.pro.badge":    "Beliebt",
    "pricing.pro.currency": "\u20ac",
    "pricing.pro.amount":   "91",
    "pricing.pro.period": "pro Arzt/Monat",
    "pricing.pro.f1":     "Kalenderverwaltung",
    "pricing.pro.f2":     "Elektronische Gesundheitsakten",
    "pricing.pro.f3":     "Chat",
    "pricing.pro.f4":     "Patientenverwaltung",
    "pricing.pro.f5":     "Analytik",
    "pricing.pro.f6":     "Videosprechstunde",
    "pricing.pro.f7":     "KI-gest\u00fctzte Notizen",
    "pricing.pro.f8":     "KI-Dokumentenklassifizierung",
    "pricing.pro.f9":     "Shifa KI-Triage-Bot",
    "pricing.pro.cta":    "Jetzt starten",

    "pricing.premium.name":     "Premium",
    "pricing.premium.currency": "\u20ac",
    "pricing.premium.amount":   "146",
    "pricing.premium.period": "pro Arzt/Monat",
    "pricing.premium.f1":     "Kalenderverwaltung",
    "pricing.premium.f2":     "Elektronische Gesundheitsakten",
    "pricing.premium.f3":     "Chat",
    "pricing.premium.f4":     "Patientenverwaltung",
    "pricing.premium.f5":     "Erweiterte Analytik",
    "pricing.premium.f6":     "Videosprechstunde",
    "pricing.premium.f7":     "KI-gest\u00fctzte Notizen",
    "pricing.premium.f8":     "KI-Dokumentenklassifizierung",
    "pricing.premium.f9":     "Erweiterter Shifa KI-Triage-Bot",
    "pricing.premium.f10":    "Differenzialdiagnose-Assistent",
    "pricing.premium.f11":    "Rezepterstellung",
    "pricing.premium.cta":    "Jetzt starten",

    /* ── Contact ── */
    "contact.label":   "Kontakt aufnehmen",
    "contact.heading": "Kontaktieren Sie uns",
    "contact.body":    "Klinikfertige Funktionen mit einer Plattform, die mit Ihrem Wachstum skaliert.",

    "contact.help.heading": "Hilfe und Support",
    "contact.help.body":    "Stellen Sie Produktfragen, melden Sie Probleme oder hinterlassen Sie Feedback. Unsicher, wie Sie mit Shifa beginnen sollen?",
    "contact.help.cta":     "Kontaktieren Sie uns",

    "contact.demo.heading": "Demo buchen",
    "contact.demo.body":    "Testen Sie Shifa oder bestimmte Funktionen, um die richtige L\u00f6sung f\u00fcr Ihre \u00c4rzte oder Klinik zu finden.",
    "contact.demo.cta":     "Kontaktieren Sie uns",

    "contact.careers.heading": "Karriere bei Shifa",
    "contact.careers.body":    "Treten Sie SHIFA bei und helfen Sie mit, die Zukunft der vernetzten Gesundheitsversorgung zu gestalten. Wir sch\u00e4tzen Handwerk, Klarheit und durchdachte Innovation. Wenn Ihnen Designqualit\u00e4t, Datenschutz und reale Auswirkungen wichtig sind, werden Sie perfekt passen.",
    "contact.careers.cta":     "Jetzt bewerben",

    "contact.offices.heading": "Unsere B\u00fcros",

    "contact.form.heading":             "Lassen Sie uns reden!",
    "contact.form.name":                "Name",
    "contact.form.name.placeholder":    "Ihr vollst\u00e4ndiger Name",
    "contact.form.email":               "E-Mail",
    "contact.form.email.placeholder":   "ihre@email.com",
    "contact.form.message":             "Nachricht",
    "contact.form.message.placeholder": "Wie k\u00f6nnen wir helfen?",
    "contact.form.submit":              "Nachricht senden",
    "contact.form.sent":                "Gesendet \u2713",

    /* ── Footer ── */
    /* ── Careers section ── */
    "careers.heading": "Komm zu uns. Gestalte die Zukunft der Gesundheitsversorgung.",
    "job1.tag":   "Engineering",
    "job1.title": "Full Stack Softwareingenieur",
    "job1.meta":  "Berlin, Deutschland \u00b7 Remote-freundlich \u00b7 Vollzeit",
    "job1.apply": "Jetzt bewerben",
    "job1.desc":  "Entwickle und pflege Shifas Kernplattform \u2014 von patientenorientierten React-Interfaces bis hin zu Backend-APIs und Cloud-Infrastruktur. Du arbeitest \u00fcber den gesamten Stack hinweg, lieferst Features f\u00fcr Tausende von Patienten und Klinikern und hilfst dabei, die Ingenieurkultur in einem fr\u00fchen Stadium zu pr\u00e4gen.",

    "footer.brand.body":    "Digitalisierung des Gesundheitswesens. Unsere Mission ist es, das Gesundheitswesen einfach, menschlich und zug\u00e4nglich zu machen \u2013 durch die Verbindung von \u00c4rzten und Patienten \u00fcber sichere Videokonsultationen, intuitive Terminplanung und intelligente KI-Notizen. Von Berlin aus vereinen wir digitale Gesundheitsakten, Fernbuchung und verifizierte Bewertungen in einer nahtlosen Plattform.",
    "footer.nav.heading":   "Navigation",
    "footer.legal.heading": "Rechtliches",
    "footer.legal.privacy": "Datenschutzrichtlinie",
    "footer.legal.terms":   "Nutzungsbedingungen",
    "footer.legal.gdpr":    "DSGVO",
    "footer.copyright":     "\u00a9 2025 SHIFA. Alle Rechte vorbehalten.",
    "footer.made":          "Made in Berlin \ud83c\udde9\ud83c\uddea",

    /* ── Privacy Policy ── */
    "privacy.title":     "Datenschutzrichtlinie",
    "privacy.effective": "G\u00fcltig ab: 10. April 2026",
    "privacy.lead":      "Bei shifa.uz sch\u00e4tzen wir Ihre Privatsph\u00e4re und verpflichten uns, Ihre personenbezogenen Daten zu sch\u00fctzen. Diese Datenschutzrichtlinie erkl\u00e4rt, welche Informationen wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf diese Daten haben.",

    "privacy.s1.heading": "1. Informationen, die wir erheben",
    "privacy.s1.intro":   "Wir k\u00f6nnen folgende Arten von Informationen erheben:",
    "privacy.s1.items":   "<li>Pers\u00f6nliche Angaben, die Sie direkt bereitstellen, wie Name, Telefonnummer und E-Mail-Adresse.</li><li>Gesundheitsbezogene Informationen, die Sie freiwillig \u00fcbermitteln \u2014 z.\u202fB. \u00fcber Terminbuchungen, medizinische Anfragen oder Ihr Profil.</li><li>Technische Daten, die automatisch erfasst werden, einschlie\u00dflich IP-Adresse, Browsertyp, Ger\u00e4tedetails, besuchte Seiten und Nutzungsmuster.</li><li>Daten, die \u00fcber Cookies und \u00e4hnliche Technologien erhoben werden (siehe Abschnitt 6).</li>",

    "privacy.s2.heading": "2. Wie wir Ihre Informationen verwenden",
    "privacy.s2.intro":   "Wir verwenden Ihre Daten, um:",
    "privacy.s2.items":   "<li>Unsere Website und Dienste bereitzustellen, zu pflegen und zu verbessern.</li><li>Termine, Kommunikation und Support-Anfragen zu verwalten.</li><li>Ihre Erfahrung auf unserer Plattform zu personalisieren.</li><li>Sicherheit zu gew\u00e4hrleisten, Betrug zu erkennen und Missbrauch zu verhindern.</li><li>Geltenden rechtlichen Verpflichtungen nachzukommen.</li>",

    "privacy.s3.heading": "3. Rechtsgrundlage der Verarbeitung",
    "privacy.s3.intro":   "Soweit anwendbar, verarbeiten wir personenbezogene Daten auf Basis von:",
    "privacy.s3.items":   "<li>Ihrer ausdr\u00fccklichen Einwilligung.</li><li>Der Erf\u00fcllung eines Vertrages oder einer von Ihnen angeforderten Leistung.</li><li>Der Erf\u00fcllung gesetzlicher Verpflichtungen.</li><li>Unseren berechtigten Interessen, wie der Verbesserung der Servicequalit\u00e4t und der Aufrechterhaltung der Sicherheit.</li>",

    "privacy.s4.heading": "4. Weitergabe von Informationen",
    "privacy.s4.intro":   "Wir verkaufen Ihre personenbezogenen Daten nicht. Wir k\u00f6nnen Ihre Informationen teilen mit:",
    "privacy.s4.items":   "<li>Dienstleistern, die uns beim Betrieb der Website und der Erbringung unserer Leistungen unterst\u00fctzen.</li><li>Medizinischem Fachpersonal oder Partnerorganisationen, wenn dies zur Erf\u00fcllung einer angeforderten Leistung erforderlich ist.</li><li>Beh\u00f6rden oder Rechtsstellen, wenn dies nach geltendem Recht erforderlich ist.</li>",
    "privacy.s4.outro":   "Alle Dritten sind verpflichtet, Ihre Daten zu sch\u00fctzen und ausschlie\u00dflich f\u00fcr autorisierte Zwecke zu verwenden.",

    "privacy.s5.heading": "5. Datensicherheit",
    "privacy.s5.body":    "Wir treffen angemessene technische und organisatorische Ma\u00dfnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Offenlegung zu sch\u00fctzen. Bitte beachten Sie, dass keine Online-Plattform absolute Sicherheit garantieren kann.",

    "privacy.s6.heading": "6. Cookies",
    "privacy.s6.intro":   "Wir verwenden Cookies und \u00e4hnliche Technologien auf shifa.uz, um:",
    "privacy.s6.items":   "<li>Die Website ordnungsgem\u00e4\u00df zu betreiben.</li><li>Ihre Einstellungen zu speichern.</li><li>Den Datenverkehr zu analysieren und die Leistung zu verbessern.</li><li>Sicherheit und Betrugspr\u00e4vention zu unterst\u00fctzen.</li>",
    "privacy.s6.outro":   "Sie k\u00f6nnen Cookies \u00fcber Ihre Browsereinstellungen steuern oder deaktivieren. Bitte beachten Sie, dass das Deaktivieren von Cookies einige Website-Funktionen beeintr\u00e4chtigen kann. Sie k\u00f6nnen Ihre Cookie-Einstellungen auch jederzeit \u00fcber das Banner am unteren Rand dieser Seite aktualisieren.",

    "privacy.s7.heading": "7. Datenspeicherung",
    "privacy.s7.body":    "Wir speichern personenbezogene Daten nur so lange, wie es zur Erf\u00fcllung der in dieser Datenschutzrichtlinie beschriebenen Zwecke erforderlich ist, es sei denn, ein l\u00e4ngerer Zeitraum ist gesetzlich vorgeschrieben.",

    "privacy.s8.heading": "8. Ihre Rechte",
    "privacy.s8.intro":   "Je nach geltendem Recht haben Sie m\u00f6glicherweise das Recht, Folgendes zu tun:",
    "privacy.s8.items":   "<li>Auf Ihre personenbezogenen Daten zuzugreifen.</li><li>Unrichtige oder unvollst\u00e4ndige Daten zu korrigieren.</li><li>L\u00f6schung Ihrer Daten zu beantragen.</li><li>Die Verarbeitung einzuschr\u00e4nken oder ihr zu widersprechen.</li><li>Die Einwilligung jederzeit zu widerrufen, wenn die Verarbeitung auf Einwilligung beruht.</li><li>Daten\u00fcbertragbarkeit zu beantragen.</li>",
    "privacy.s8.outro":   "Um eines dieser Rechte auszu\u00fcben, kontaktieren Sie uns bitte \u00fcber die Angaben in Abschnitt 12.",

    "privacy.s9.heading": "9. Datenschutz f\u00fcr Kinder",
    "privacy.s9.body":    "Unsere Dienste richten sich nicht an Kinder, sofern nicht ausdr\u00fccklich angegeben. Wenn Sie glauben, dass ein Kind personenbezogene Daten ohne angemessene Einwilligung bereitgestellt hat, kontaktieren Sie uns bitte, damit wir umgehend handeln k\u00f6nnen.",

    "privacy.s10.heading": "10. Links zu Drittanbietern",
    "privacy.s10.body":    "Unsere Website kann Links zu Websites von Drittanbietern enthalten. Wir sind nicht f\u00fcr deren Datenschutzpraktiken verantwortlich und empfehlen Ihnen, deren Datenschutzrichtlinien gesondert zu pr\u00fcfen.",

    "privacy.s11.heading": "11. \u00c4nderungen dieser Richtlinie",
    "privacy.s11.body":    "Wir k\u00f6nnen diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Aktualisierungen werden auf dieser Seite mit einem \u00fcberarbeiteten Wirksamkeitsdatum ver\u00f6ffentlicht. Wir empfehlen Ihnen, diese Seite regelm\u00e4\u00dfig zu \u00fcberpr\u00fcfen.",

    "privacy.s12.heading": "12. Kontakt",
    "privacy.s12.intro":   "Bei Fragen oder Anfragen zu dieser Datenschutzrichtlinie wenden Sie sich bitte an uns:",
    "privacy.s12.items":   "<li>Website: <a href=\"https://shifa.uz\">shifa.uz</a></li><li>E-Mail: <a href=\"mailto:info@shifa.uz\">info@shifa.uz</a></li>",
  },

  uz: {
    /* ── Nav ── */
    "nav.product":  "Mahsulot",
    "nav.features": "Xususiyatlar",
    "nav.pricing":  "Narxlar",
    "nav.contact":  "Aloqa",
    "nav.cta":      "Erta kirish olish",

    /* ── Countdown ── */
    "countdown.days":  "Kun",
    "countdown.hours": "Soat",
    "countdown.mins":  "Daqiqa",
    "countdown.secs":  "Soniya",

    /* ── Hero ── */
    "hero.heading.main": "Sog\u02bbling\u02bcingizni o\u02bbz<br>qo\u02bblingizga oling",
    "hero.heading":  "Kech bo\u02bbmasidan <em>Demo</em>ni sinab ko\u02bbling!",
    "hero.subtitle": "Shifa bemorlar va klinitsistlarning ehtiyojlarini bir ishonchli, zamonaviy maydonda uy\u0121unlashtirish orqali tibbiy yordamni qayta shakllantirmoqda.",
    "hero.cta":      "Erta kirish olish",
    "hero.features": "Xususiyatlarni ko\u02bbrish",

    /* ── About ── */
    "about.label":    "Shifa haqida",
    "about.heading":  "Sog\u02bbliqni saqlash ekotizimini rivojlantirish",
    "about.body":     "Shifa bemorlar va klinitsistlarning ehtiyojlarini bir ishonchli, zamonaviy maydonda uy\u0121unlashtirish orqali tibbiy yordamni qayta shakllantirmoqda. Kirish, hujjatlashtirish va muloqotdagi to\u02bbsiqlarni yo\u02bbq qilish va mas\u02bbuliyatli sun\u02bbiy intellekt yordamida kontekstni oshirish orqali biz tizimga to\u02bb\u0121ri ishlashga yordam beramiz: tezroq qarorlar, aniqroq davolash yo\u02bbllarи va sog\u02bblomroq, bardoshli sog\u02bbliqni saqlash sanoati.",
    "about.readmore": "Batafsil o\u02bbrish",

    /* ── Connect ── */
    "connect.label":   "Bemorlar &amp; shifokorlar uchun",
    "connect.heading": "Shifokorlar va bemorlarni muammosiz bog\u02bblash uchun yaratilgan.",
    "connect.body":    "Tibbiy yordam tezroq, aniqroq va xavfsizroq bo\u02bblmoqda. Kutmasdan tashriflar yoki video qo\u02bb\u0121iroqlarni bronlang, sog\u02bbliq yozuvlaringizni xavfsiz va foydalanish mumkin bo\u02bblgan holda saqlang va klinitsistlarga sizni ishonch bilan davolash uchun kerakli kontekstni bering. Shifa AI har bir qadamni qo\u02bbllab-quvvatlashi bilan tibbiy yordam bemorlar uchun soddaroq va shifokorlar uchun aqlliroq bo\u02bbladi.",

    /* ── Shifa AI ── */
    "ai.label":    "Shifa AI",
    "ai.heading":  "Shifa AI \u2013 aqlli tibbiy yordam uchun",
    "ai.body":     "Shifa AI \u2013 bu sizning real vaqtdagi sog\u02bbliqni saqlash ko-pilotingiz. Bemorlar uchun u bronlashni soddalashtiradi, to\u02bb\u0121ri ma\u02bblumotlarni taqdim etadi va qarorlar aniqroq bo\u02bblishi uchun hujjatlarni tartibga soladi. Shifokorlar uchun u kontekstni oldinga olib chiqadi \u2013 tarixni umumlashtiradi, konsultatsiyalar paytida eslatmalar oladi va hisobotlar yaratadi \u2013 shunda tibbiy yordam tezroq, xavfsizroq va yanada ma\u02bblumotliroq bo\u02bbladi.",
    "ai.patients": "Bemorlar",
    "ai.doctors":  "Shifokorlar",

    /* ── Devices ── */
    "devices.label":   "Har bir qurilma",
    "devices.heading": "Bir platforma.<br>Telefon, planshet va veb.",
    "devices.body":    "Siz telefonda kelayotgan uchrashuvlarni tekshirayotgan bemor bo\u02bblasizmi yoki planshetda to\u02bbliq kunlik jadval boshqarayotgan shifokor bo\u02bblasizmi \u2013 Shifa har bir ekranda ajoyib ishlaydi \u2013 bir xil intuitiv tajriba, bir xil real vaqtdagi ma\u02bblumotlar va markazida bir xil tibbiy yordam bilan.",

    /* ── Infrastructure ── */
    "infra.label":        "Infratuzilma",
    "infra.heading":      "Kuchli poydevor ustiga qurilgan",
    "infra.body":         "Shifaning zamonaviy, xavfsiz infratuzilmasi shifrlash, qat\u02bbiy kirish nazorati va uzluksiz monitoring yordamida sog\u02bbliq ma\u02bblumotlarini boshidan oxirigacha himoya qiladi. Biz bemorlar va shifokorlarni nazoratda saqlash uchun GDPR tamoyillariga amal qilamiz. Bemorlar uchun xavfsiz, klinitsistlar uchun ishonchli va sanoat uchun tayyor.",
    "infra.card1.heading": "Uchdan uchgacha shifrlash",
    "infra.card1.body":    "Barcha sog\u02bbliq ma\u02bblumotlari uzatishda va saqlanishda shifrlanadi \u2013 sizning ma\u02bblumotlaringiz har bir qadamda maxfiy qoladi.",
    "infra.card2.heading": "GDPR muvofiq",
    "infra.card2.body":    "Biz GDPR tamoyillariga amal qilamiz \u2013 shaffof, qonuniy va har doim sizning roziligingiz bilan. Bemorlar va shifokorlar to\u02bbliq nazoratda qoladi.",
    "infra.card3.heading": "Uzluksiz monitoring",
    "infra.card3.body":    "Avtomatlashtirilgan ogohlantirishlar va uzluksiz infratuzilma monitoringi anomaliyalar tibbiy yordamga ta\u02bbsir qilmasdan oldin aniqlanishini ta\u02bbminlaydi.",

    /* ── Features Page ── */
    "features.label":        "Xususiyatlar",
    "features.heading":      "Kerakli hamma narsa,<br><em>keraksiz hech narsa.</em>",
    "features.tab.patients": "Bemorlar uchun",
    "features.tab.doctors":  "Shifokorlar uchun",

    /* ── Patients Panel ── */
    "patients.intro.heading": "Sog\u02bbling\u02bciz, soddalashtirilgan.<br>Bronlang, uchrashing va ma\u02bblumotlaringizni oson boshqaring.",
    "patients.intro.body":    "Kutishning hojati yo\u02bbq, sog\u02bbling\u02bciz birinchi o\u02bbrinда. Shifokorlaringiz, yozuvlar va bronlashlarni aqlli tarzda tartibga soling.",

    "patients.booking.label":   "Masofaviy bronlash",
    "patients.booking.heading": "Istalgan joydan bronlang,<br>joyida yoki video orqali.",
    "patients.booking.b1":      "Yaqinidagi shifokor yoki klinikalarni toping va darhol bronlang",
    "patients.booking.b2":      "Tashrif turini va tashrif sababini osongina ko\u02bbrsat ing",
    "patients.booking.b3":      "Avtomatik tasdiqlashlar va kalendar integratsiyasini oling",

    "patients.video.label":   "Video konsultatsiyalar",
    "patients.video.heading": "Uyda tibbiy yordam,<br>yo\u02bblsiz.",
    "patients.video.b1":      "Xavfsiz brauzer asosidagi video",
    "patients.video.b2":      "Shaxsni tekshirish va kanal tezligini optimallashtirish",
    "patients.video.b3":      "Shaxsiy kutish xonalari",

    "patients.records.label":   "Raqamli sog\u02bbliq yozuvlari",
    "patients.records.heading": "Sizning raqamli tarixingiz,<br>tartibli va ulashish mumkin.",
    "patients.records.b1":      "Hujjatlarni osongina yuklash yoki yuklab olish",
    "patients.records.b2":      "Barcha o\u02bbgan va joriy hujjatlaringiz birga saqlanadi",
    "patients.records.b3":      "Shaxsiy ma\u02bblumotlar bazangizga hujjatlarni osongina ulashing va qabul qiling",

    "patients.chat.label":   "Chat / Messenger",
    "patients.chat.heading": "Sizning AI sog\u02bbliq yordamchingiz<br>qo\u02bblingizda.",
    "patients.chat.b1":      "Sog\u02bbliq yozuvlaringiz, uchrashuvlar va shifokor eslatmalari haqida darhol maslahat oling",
    "patients.chat.b2":      "So\u02bbrovlaringizga asoslanib yordamlashgan bronlash",
    "patients.chat.b3":      "Tavsiya etilgan shifokorlar yoki parvarish bilan alomatlarni tekshirish",

    "patients.reminders.label":   "Aqlli eslatmalar",
    "patients.reminders.heading": "Dori-darmon yoki uchrashuvlarni<br>hech qachon o\u02bbtkazib yubormang.",
    "patients.reminders.b1":      "Uchrashuvlar yoki kuzatuv muolajalar haqida eslatmalar",
    "patients.reminders.b2":      "Dorilaringizni olish yoki ularni qachon qabul qilish haqida eslatma oling",

    "patients.aireports.label":   "AI asosidagi hisobotlar",
    "patients.aireports.heading": "Yo\u02bbnalish oling va shifokorlarni<br>nazoratda saqlang.",
    "patients.aireports.b1":      "Murakkab sog\u02bbliq hisobotlarini o\u02bbrish va umumlashtirishda yordam",
    "patients.aireports.b2":      "Ba\u02bbzi alomatlarni tashxislashda yordam",
    "patients.aireports.b3":      "Favqulodda yordam uchun qizil bayroq hisobotlari",

    /* ── Doctors Panel ── */
    "doctors.intro.heading": "Tartibsizliksiz tibbiy yordam.<br>Siz bilan birga o\u02bbylaydigan bir elegant tizim.",
    "doctors.intro.body":    "Biz klinikangizning ehtiyojlarini to\u02bbliq qoplaydigan xususiyatlar taqdim etamiz, shunda siz bemorlaringiz uchun ko\u02bbroq vaqt topasiz \u2013 murosasiz.",

    "doctors.patients.label":   "Bemor boshqaruvi",
    "doctors.patients.heading": "Barcha bemorlaringizning<br>aniq ko\u02bbrinis hi.",
    "doctors.patients.b1":      "Bemor fayllari, eslatmalar va retseptlar bir joyda",
    "doctors.patients.b2":      "Har bir bemor uchun uchrashuvlar jadvali",
    "doctors.patients.b3":      "Uchrashuvlar davomida istalgan bemor uchun osonlikcha uchrashuvlarni bronlang",

    "doctors.analytics.label":   "Tahlil",
    "doctors.analytics.heading": "Foydalanish va ishlashingizni<br>tushuning.",
    "doctors.analytics.b1":      "Klinikangiz uchun kunlik va haftalik KPIlar",
    "doctors.analytics.b2":      "Uchrashuvlardagi kelmasliklar haqida ma\u02bblumotlar",
    "doctors.analytics.b3":      "Tahlillaringizni CSV formatida eksport qiling",

    "doctors.prescription.label":   "Retsept tuzish",
    "doctors.prescription.heading": "Tezda ko\u02bbrish va imzolash<br>mumkin bo\u02bblgan qoralamalar.",
    "doctors.prescription.b1":      "Tezda ko\u02bbrish va imzolash mumkin bo\u02bblgan retsept qoralamalar",
    "doctors.prescription.b2":      "Aqlli eslatmalaringizdan to\u02bb\u0121ridan-to\u02bb\u0121ri retseptlar yarating",
    "doctors.prescription.b3":      "Eksport uchun elektron retseptlarni osongina taqdim eting",

    "doctors.video.label":   "Video konsultatsiyalar",
    "doctors.video.heading": "Bemorlarni yuzma-yuz ko\u02bbrish,<br>istalgan joydan.",
    "doctors.video.b1":      "Yuqori sifatli shifrlangan video sessiyalar",
    "doctors.video.b2":      "Bemorlar uchun shaxsiy kutish xonalari",
    "doctors.video.b3":      "Istalgan qurilmadan konsultatsiyalar o\u02bbtkazing",

    "doctors.ehr.label":   "Elektron sog\u02bbliq yozuvlari",
    "doctors.ehr.heading": "Bemor yozuvlarini raqamlashtiring<br>va xavfsiz ulashing.",
    "doctors.ehr.b1":      "Barcha bemorlaringizga tibbiy hujjatlar yuklang",
    "doctors.ehr.b2":      "Shifrlangan hujjat saqlash",
    "doctors.ehr.b3":      "Rol asosidagi kirish va xavfsiz ulashish",

    "doctors.calendar.label":   "Kalendar boshqaruvi",
    "doctors.calendar.heading": "Joyida va masofaviy uchrashuvlarni<br>qo\u02bbllaydigan aniq jadval.",
    "doctors.calendar.b1":      "Klinikada uchrashuvlarni rejalashtirish uchun slotlarni zaxiralang",
    "doctors.calendar.b2":      "O\u02bbz vaqtingizda bronlashlarga ruxsat berish uchun jadvalingizni belgilang",
    "doctors.calendar.b3":      "Kalendarida bronlashlarni osongina o\u02bbzgartiring",

    /* ── Pricing ── */
    "pricing.label":   "Narxlar",
    "pricing.heading": "Shifokorlar uchun narxlar",
    "pricing.body":    "Klinikaga tayyor xususiyatlar va o\u02bbsishingiz bilan birga kengayadigan platforma.",

    "pricing.basic.name":     "Basic",
    "pricing.basic.currency": "",
    "pricing.basic.amount":   "499\u00a0000 so\u02bbm",
    "pricing.basic.period": "shifokor/oyiga",
    "pricing.basic.f1":     "Kalendar boshqaruvi",
    "pricing.basic.f2":     "Elektron sog\u02bbliq yozuvlari",
    "pricing.basic.f3":     "Chat",
    "pricing.basic.f4":     "Bemor boshqaruvi",
    "pricing.basic.f5":     "Tahlil",
    "pricing.basic.cta":    "Boshlash",

    "pricing.pro.name":     "Pro",
    "pricing.pro.badge":    "Mashhur",
    "pricing.pro.currency": "",
    "pricing.pro.amount":   "1\u00a0260\u00a0000 so\u02bbm",
    "pricing.pro.period": "shifokor/oyiga",
    "pricing.pro.f1":     "Kalendar boshqaruvi",
    "pricing.pro.f2":     "Elektron sog\u02bbliq yozuvlari",
    "pricing.pro.f3":     "Chat",
    "pricing.pro.f4":     "Bemor boshqaruvi",
    "pricing.pro.f5":     "Tahlil",
    "pricing.pro.f6":     "Video konsultatsiya",
    "pricing.pro.f7":     "AI asosidagi eslatma olish",
    "pricing.pro.f8":     "AI hujjatlarni tasniflash",
    "pricing.pro.f9":     "Shifa AI Triage Bot",
    "pricing.pro.cta":    "Boshlash",

    "pricing.premium.name":     "Premium",
    "pricing.premium.currency": "",
    "pricing.premium.amount":   "2\u00a0020\u00a0000 so\u02bbm",
    "pricing.premium.period": "shifokor/oyiga",
    "pricing.premium.f1":     "Kalendar boshqaruvi",
    "pricing.premium.f2":     "Elektron sog\u02bbliq yozuvlari",
    "pricing.premium.f3":     "Chat",
    "pricing.premium.f4":     "Bemor boshqaruvi",
    "pricing.premium.f5":     "Kengaytirilgan tahlil",
    "pricing.premium.f6":     "Video konsultatsiya",
    "pricing.premium.f7":     "AI asosidagi eslatma olish",
    "pricing.premium.f8":     "AI hujjatlarni tasniflash",
    "pricing.premium.f9":     "Kengaytirilgan Shifa AI Triage Bot",
    "pricing.premium.f10":    "Differensial diagnostika yordamchisi",
    "pricing.premium.f11":    "Retsept tuzish",
    "pricing.premium.cta":    "Boshlash",

    /* ── Contact ── */
    "contact.label":   "Bog\u02bblanish",
    "contact.heading": "Biz bilan bog\u02bblaning",
    "contact.body":    "Klinikaga tayyor xususiyatlar va o\u02bbsishingiz bilan birga kengayadigan platforma.",

    "contact.help.heading": "Yordam va qo\u02bbllab-quvvatlash",
    "contact.help.body":    "Mahsulot savollari bering, muammolarni xabar qiling yoki fikr-mulohaza qoldiring. Shifa bilan qanday boshlashni bilmaysizmi?",
    "contact.help.cta":     "Biz bilan bog\u02bblaning",

    "contact.demo.heading": "Demoni bronlash",
    "contact.demo.body":    "Shifokorlaringiz yoki klinikangiz uchun mos keladigan narsa topish uchun Shifani sinab ko\u02bbrung yoki ma\u02bblum xususiyatlarni tekshiring.",
    "contact.demo.cta":     "Biz bilan bog\u02bblaning",

    "contact.careers.heading": "Shifada martaba",
    "contact.careers.body":    "SHIFAga qo\u02bbshiling va bog\u02bbliq tibbiy yordamning kelajagini shakllantirishga yordam bering. Biz mahorat, aniqlik va o\u02bbylangan innovatsiyani qadirlaymiz. Agar siz dizayn sifati, maxfiylik va real dunyo ta\u02bbsiri haqida qayg\u02bbursangiz, siz mukammal mos bo\u02bblasiz.",
    "contact.careers.cta":     "Hozir ariza bering",

    "contact.offices.heading": "Bizning ofislar",

    "contact.form.heading":             "Suhbatlashamiz!",
    "contact.form.name":                "Ism",
    "contact.form.name.placeholder":    "To\u02bbliq ismingiz",
    "contact.form.email":               "Elektron pochta",
    "contact.form.email.placeholder":   "sizning@email.com",
    "contact.form.message":             "Xabar",
    "contact.form.message.placeholder": "Qanday yordam bera olamiz?",
    "contact.form.submit":              "Xabar yuborish",
    "contact.form.sent":                "Yuborildi \u2713",

    /* ── Footer ── */
    /* ── Careers section ── */
    "careers.heading": "Bizga qo\u02bbshing. Tibbiy yordamning kelajagini shakllantiring.",
    "job1.tag":   "Muhandislik",
    "job1.title": "To\u02bbliq stek dasturiy ta\u02bbminot muhandisi",
    "job1.meta":  "Berlin, Germaniya \u00b7 Masofaviy \u00b7 To\u02bbliq stavka",
    "job1.apply": "Bu lavozimga murojaat qiling",
    "job1.desc":  "Shifa\u2019ning asosiy platformasini quring va saqlang \u2014 bemorga yo\u02bbnaltirilgan React interfeyslaridan backend API va bulut infratuzilmasiga qadar. Siz to\u02bbliq stek bo\u02bbylab ishlaysiz, minglab bemor va klinitsistlarga yetib boradigan xususiyatlarni yetkazib berasiz va erta bosqichda muhandislik madaniyatini shakllantirishga yordam berasiz.",

    "footer.brand.body":    "Sog\u02bbliqni saqlashni raqamlashtirish. Bizning vazifamiz \u2013 sog\u02bbliqni saqlashni oddiy, insoniy va hammabop qilish \u2013 shifokorlar va bemorlarni xavfsiz video konsultatsiyalar, intuitiv rejalashtirish va aqlli AI-eslatmalar orqali bog\u02bblash. Berlindan biz raqamli sog\u02bbliq yozuvlari, masofaviy bronlash va tasdiqlangan sharhlarni bir uzluksiz platformada birlashtirmoqdamiz.",
    "footer.nav.heading":   "Navigatsiya",
    "footer.legal.heading": "Huquqiy",
    "footer.legal.privacy": "Maxfiylik siyosati",
    "footer.legal.terms":   "Xizmat shartlari",
    "footer.legal.gdpr":    "GDPR",
    "footer.copyright":     "\u00a9 2025 SHIFA. Barcha huquqlar himoyalangan.",
    "footer.made":          "Berlinda yaratilgan \ud83c\udde9\ud83c\uddea",

    /* ── Maxfiylik siyosati ── */
    "privacy.title":     "Maxfiylik siyosati",
    "privacy.effective": "Kuchga kirish sanasi: 10 aprel 2026",
    "privacy.lead":      "shifa.uz saytida biz sizning maxfiyligingizni qadrlaymiz va shaxsiy ma\u02bblumotlaringizni himoya qilishga intilamiz. Ushbu maxfiylik siyosati qanday ma\u02bblumotlar to\u02bbplashimiz, ulardan qanday foydalanishimiz va ushbu ma\u02bblumotlarga nisbatan huquqlaringiz haqida tushuntiradi.",

    "privacy.s1.heading": "1. Biz to\u02bbplaydigan ma\u02bblumotlar",
    "privacy.s1.intro":   "Biz quyidagi turdagi ma\u02bblumotlarni to\u02bbplashimiz mumkin:",
    "privacy.s1.items":   "<li>Siz bevosita taqdim etgan shaxsiy ma\u02bblumotlar, masalan, ism, telefon raqami va elektron pochta manzili.</li><li>Siz ixtiyoriy ravishda taqdim etgan sog\u02bbliqqa oid ma\u02bblumotlar \u2014 masalan, uchrashuv bronlash, tibbiy so\u02bbrovlar yoki profilingiz orqali.</li><li>Avtomatik ravishda to\u02bbplanadigan texnik ma\u02bblumotlar: IP-manzil, brauzer turi, qurilma tafsilotlari, tashrif buyurilgan sahifalar va foydalanish naqshlari.</li><li>Cookies va o\u02bbxshash texnologiyalar orqali to\u02bbplangan ma\u02bblumotlar (6-bo\u02bblimga qarang).</li>",

    "privacy.s2.heading": "2. Ma\u02bblumotlaringizdan qanday foydalanamiz",
    "privacy.s2.intro":   "Biz ma\u02bblumotlaringizdan quyidagi maqsadlarda foydalanamiz:",
    "privacy.s2.items":   "<li>Veb-saytimiz va xizmatlarimizni ta\u02bbminlash, qo\u02bbllab-quvvatlash va takomillashtirish.</li><li>Uchrashuvlar, muloqot va qo\u02bbllab-quvvatlash so\u02bbrovlarini boshqarish.</li><li>Platformamizdagi tajribangizni shaxsiylashtirish.</li><li>Xavfsizlikni ta\u02bbminlash, firibgarlikni aniqlash va suiiste\u02bbmolni oldini olish.</li><li>Amaldagi huquqiy majburiyatlarga rioya qilish.</li>",

    "privacy.s3.heading": "3. Qayta ishlashning huquqiy asosi",
    "privacy.s3.intro":   "Qo\u02bbllaniladigan hollarda, biz shaxsiy ma\u02bblumotlarni quyidagi asosda qayta ishlaymiz:",
    "privacy.s3.items":   "<li>Sizning aniq roziligingiz.</li><li>Siz so\u02bbragan shartnoma yoki xizmatni bajarish.</li><li>Huquqiy majburiyatlarga rioya qilish.</li><li>Bizning qonuniy manfaatlarimiz, masalan, xizmat sifatini yaxshilash va xavfsizlikni ta\u02bbminlash.</li>",

    "privacy.s4.heading": "4. Ma\u02bblumotlarni ulashish",
    "privacy.s4.intro":   "Biz sizning shaxsiy ma\u02bblumotlaringizni sotmaymiz. Ma\u02bblumotlaringizni quyidagilar bilan ulashishimiz mumkin:",
    "privacy.s4.items":   "<li>Veb-saytni boshqarish va xizmatlarni ko\u02bbrish\u02bcatishda bizga yordam beradigan xizmat ko\u02bbrsat uvchilar.</li><li>So\u02bbralgan xizmatni bajarish uchun zarur bo\u02bblganida tibbiyot mutaxassislari yoki hamkor tashkilotlar.</li><li>Amaldagi qonun talabi bilan zarur bo\u02bblganida vakolatli organlar yoki huquqiy tashkilotlar.</li>",
    "privacy.s4.outro":   "Barcha uchinchi tomonlar sizning ma\u02bblumotlaringizni himoya qilish va faqat ruxsat etilgan maqsadlarda foydalanishga majburdirlar.",

    "privacy.s5.heading": "5. Ma\u02bblumotlar xavfsizligi",
    "privacy.s5.body":    "Biz sizning shaxsiy ma\u02bblumotlaringizni ruxsatsiz kirish, yo\u02bbqotish, suiiste\u02bbmol yoki oshkor etishdan himoya qilish uchun oqilona texnik va tashkiliy choralar ko\u02bbramiz. Shuni yodda tuting: hech qanday onlayn platforma mutlaq xavfsizlikni kafolatlay olmaydi.",

    "privacy.s6.heading": "6. Cookies",
    "privacy.s6.intro":   "Biz shifa.uz saytida cookies va o\u02bbxshash texnologiyalardan quyidagi maqsadlarda foydalanamiz:",
    "privacy.s6.items":   "<li>Veb-saytning to\u02bb\u0121ri ishlashini ta\u02bbminlash.</li><li>Sozlamalaringizni eslab qolish.</li><li>Trafik tahlili va samaradorlikni oshirish.</li><li>Xavfsizlik va firibgarlikning oldini olishni qo\u02bbllab-quvvatlash.</li>",
    "privacy.s6.outro":   "Cookies ni brauzer sozlamalari orqali boshqarish yoki o\u02bbchirish mumkin. Shuni yodda tuting: cookies ni o\u02bbchirish ba\u02bbzi sayt funksiyalariga ta\u02bbsir qilishi mumkin. Shuningdek, ushbu sahifaning pastidagi banner yordamida cookie sozlamalaringizni istalgan vaqtda yangilashingiz mumkin.",

    "privacy.s7.heading": "7. Ma\u02bblumotlarni saqlash muddati",
    "privacy.s7.body":    "Biz shaxsiy ma\u02bblumotlarni faqat ushbu maxfiylik siyosatida tavsiflangan maqsadlarni bajarish uchun zarur bo\u02bblgan muddatgacha saqlaymiz, agar qonun bilan uzunroq muddat talab etilmasa.",

    "privacy.s8.heading": "8. Sizning huquqlaringiz",
    "privacy.s8.intro":   "Amaldagi qonunga ko\u02bbra, sizda quyidagi huquqlar bo\u02bblishi mumkin:",
    "privacy.s8.items":   "<li>Shaxsiy ma\u02bblumotlaringizga kirish.</li><li>Noto\u02bb\u0121ri yoki to\u02bbliqsiz ma\u02bblumotlarni tuzatish.</li><li>Ma\u02bblumotlaringizni o\u02bbchirishni talab qilish.</li><li>Qayta ishlashni cheklash yoki unga e\u02bbtiroz bildirish.</li><li>Qayta ishlash rozilikka asoslangan bo\u02bblsa, rozilikni istalgan vaqtda qaytarib olish.</li><li>Ma\u02bblumotlar ko\u02bbchiriluvchanligini talab qilish.</li>",
    "privacy.s8.outro":   "Ushbu huquqlardan birini amalga oshirish uchun 12-bo\u02bblimidagi tafsilotlar orqali biz bilan bog\u02bblaning.",

    "privacy.s9.heading": "9. Bolalar maxfiyligi",
    "privacy.s9.body":    "Bizning xizmatlarimiz, maxsus ko\u02bbrsatilmagan bo\u02bblmasa, bolalarga mo\u02bbljallanmagan. Agar bola tegishli rozi-yo\u02bblliksiz shaxsiy ma\u02bblumot taqdim etgan deb hisoblasangiz, tezkor chora ko\u02bbrish uchun biz bilan bog\u02bblaning.",

    "privacy.s10.heading": "10. Uchinchi tomon havolalari",
    "privacy.s10.body":    "Veb-saytimiz uchinchi tomon veb-saytlariga havolalar o\u02bbz ichiga olishi mumkin. Biz ularning maxfiylik amaliyotlari uchun mas\u02bbul emasmiz va ularning maxfiylik siyosatlarini alohida ko\u02bbrish tavsiya etamiz.",

    "privacy.s11.heading": "11. Ushbu siyosatdagi o\u02bbzgarishlar",
    "privacy.s11.body":    "Biz ushbu maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Barcha yangilanishlar qayta ko\u02bbrish sanasi bilan ushbu sahifada e\u02bblon qilinadi. Ushbu sahifani muntazam ko\u02bbrish tavsiya etiladi.",

    "privacy.s12.heading": "12. Biz bilan bog\u02bblaning",
    "privacy.s12.intro":   "Ushbu maxfiylik siyosati bo\u02bbyicha savol yoki so\u02bbrovlar bo\u02bblsa, biz bilan bog\u02bblaning:",
    "privacy.s12.items":   "<li>Veb-sayt: <a href=\"https://shifa.uz\">shifa.uz</a></li><li>Elektron pochta: <a href=\"mailto:info@shifa.uz\">info@shifa.uz</a></li>",
  },

  ru: {
    /* ── Nav ── */
    "nav.product":  "\u041f\u0440\u043e\u0434\u0443\u043a\u0442",
    "nav.features": "\u0424\u0443\u043d\u043a\u0446\u0438\u0438",
    "nav.pricing":  "\u0426\u0435\u043d\u044b",
    "nav.contact":  "\u041a\u043e\u043d\u0442\u0430\u043a\u0442",
    "nav.cta":      "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u043d\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",

    /* ── Countdown ── */
    "countdown.days":  "\u0414\u043d\u0438",
    "countdown.hours": "\u0427\u0430\u0441\u044b",
    "countdown.mins":  "\u041c\u0438\u043d\u0443\u0442\u044b",
    "countdown.secs":  "\u0421\u0435\u043a\u0443\u043d\u0434\u044b",

    /* ── Hero ── */
    "hero.heading.main": "\u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435<br>\u0432 \u0441\u0432\u043e\u0438 \u0440\u0443\u043a\u0438",
    "hero.heading":  "\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0448\u0443 <em>\u0414\u0435\u043c\u043e</em> \u043f\u043e\u043a\u0430 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u043e!",
    "hero.subtitle": "Shifa \u043c\u0435\u043d\u044f\u0435\u0442 \u043e\u0431\u043b\u0438\u043a \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u0432\u0440\u0430\u0447\u0435\u0439 \u0432 \u043e\u0434\u043d\u043e\u043c \u043d\u0430\u0434\u0451\u0436\u043d\u043e\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435.",
    "hero.cta":      "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u043d\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
    "hero.features": "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438",

    /* ── About ── */
    "about.label":    "\u041e Shifa",
    "about.heading":  "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",
    "about.body":     "Shifa \u043c\u0435\u043d\u044f\u0435\u0442 \u043e\u0431\u043b\u0438\u043a \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u0432\u0440\u0430\u0447\u0435\u0439 \u0432 \u043e\u0434\u043d\u043e\u043c \u043d\u0430\u0434\u0451\u0436\u043d\u043e\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435. \u0423\u0441\u0442\u0440\u0430\u043d\u044f\u044f \u0431\u0430\u0440\u044c\u0435\u0440\u044b \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438 \u2014 \u0438 \u043f\u043e\u0432\u044b\u0448\u0430\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0418\u0418 \u2014 \u043c\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u0430\u043a, \u043a\u0430\u043a \u0434\u043e\u043b\u0436\u043d\u0430: \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u0447\u0451\u0442\u0447\u0435 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u0443\u044e, \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0443\u044e \u043e\u0442\u0440\u0430\u0441\u043b\u044c.",
    "about.readmore": "\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435",

    /* ── Connect ── */
    "connect.label":   "\u0414\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 &amp; \u0432\u0440\u0430\u0447\u0435\u0439",
    "connect.heading": "\u0421\u043e\u0437\u0434\u0430\u043d \u0434\u043b\u044f \u0431\u0435\u0441\u043f\u0435\u0440\u0435\u0431\u043e\u0439\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438 \u0432\u0440\u0430\u0447\u0435\u0439 \u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432.",
    "connect.body":    "\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0451\u0442\u0447\u0435 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0435\u0435. \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0451\u043c \u0438\u043b\u0438 \u0432\u0438\u0434\u0435\u043e\u0437\u0432\u043e\u043d\u043e\u043a \u0431\u0435\u0437 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f, \u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438, \u0434\u0430\u0432\u0430\u044f \u0432\u0440\u0430\u0447\u0430\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043b\u044f \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044f. \u0421 Shifa AI \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0448\u0430\u0433\u0443 \u0443\u0445\u043e\u0434 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0449\u0435 \u0434\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u0443\u043c\u043d\u0435\u0435 \u0434\u043b\u044f \u0432\u0440\u0430\u0447\u0435\u0439.",

    /* ── Shifa AI ── */
    "ai.label":    "Shifa AI",
    "ai.heading":  "Shifa AI \u2014 \u0434\u043b\u044f \u0443\u043c\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b",
    "ai.body":     "Shifa AI \u2014 \u0432\u0430\u0448 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0432 \u0441\u0444\u0435\u0440\u0435 \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0414\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u043e\u043d \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044c, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0443\u0436\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0447\u0451\u0442\u043a\u0438\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u0432\u0440\u0430\u0447\u0435\u0439 \u043e\u043d \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u0438\u0439 \u043f\u043b\u0430\u043d \u2014 \u043e\u0431\u043e\u0431\u0449\u0430\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u044e, \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0439 \u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043e\u0442\u0447\u0451\u0442\u044b \u2014 \u0447\u0442\u043e\u0431\u044b \u0443\u0445\u043e\u0434 \u0431\u044b\u043b \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0435\u0435 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c.",
    "ai.patients": "\u041f\u0430\u0446\u0438\u0435\u043d\u0442\u044b",
    "ai.doctors":  "\u0412\u0440\u0430\u0447\u0438",

    /* ── Devices ── */
    "devices.label":   "\u041a\u0430\u0436\u0434\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
    "devices.heading": "\u041e\u0434\u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430.<br>\u0422\u0435\u043b\u0435\u0444\u043e\u043d, \u043f\u043b\u0430\u043d\u0448\u0435\u0442 \u0438 \u0432\u0435\u0431.",
    "devices.body":    "\u0411\u0443\u0434\u044c \u0432\u044b \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043f\u0440\u0438\u0451\u043c\u044b \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435, \u0438\u043b\u0438 \u0432\u0440\u0430\u0447\u043e\u043c, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u043c \u043f\u043e\u043b\u043d\u044b\u043c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0434\u043d\u044f \u043d\u0430 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0435 \u2014 Shifa \u043f\u0440\u0435\u0432\u043e\u0441\u0445\u043e\u0434\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c, \u0442\u0435\u043c\u0438 \u0436\u0435 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0437\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0446\u0435\u043d\u0442\u0440\u0435.",

    /* ── Infrastructure ── */
    "infra.label":        "\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",
    "infra.heading":      "\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u043d\u0430 \u043f\u0440\u043e\u0447\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435",
    "infra.body":         "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 Shifa \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0432\u0441\u0451\u043c \u043f\u0443\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u0442\u0440\u043e\u0433\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0433\u043e \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430. \u041c\u044b \u0441\u043b\u0435\u0434\u0443\u0435\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c GDPR, \u0447\u0442\u043e\u0431\u044b \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u044b \u0438 \u0432\u0440\u0430\u0447\u0438 \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u0438\u0441\u044c \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u043c. \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0434\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432, \u043d\u0430\u0434\u0451\u0436\u043d\u043e \u0434\u043b\u044f \u0432\u0440\u0430\u0447\u0435\u0439 \u0438 \u0433\u043e\u0442\u043e\u0432\u043e \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0441\u043b\u0438.",
    "infra.card1.heading": "\u0421\u043a\u0432\u043e\u0437\u043d\u043e\u0435 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
    "infra.card1.body":    "\u0412\u0441\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u2014 \u0432\u0430\u0448\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0448\u0430\u0433\u0443.",
    "infra.card2.heading": "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 GDPR",
    "infra.card2.body":    "\u041c\u044b \u0441\u043b\u0435\u0434\u0443\u0435\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c GDPR \u2014 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e, \u0437\u0430\u043a\u043e\u043d\u043d\u043e \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f. \u041f\u0430\u0446\u0438\u0435\u043d\u0442\u044b \u0438 \u0432\u0440\u0430\u0447\u0438 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435.",
    "infra.card3.heading": "\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0439 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433",
    "infra.card3.body":    "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0438 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0439 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442, \u0447\u0442\u043e \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0438 \u0432\u044b\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u0443\u0445\u043e\u0434.",

    /* ── Features Page ── */
    "features.label":        "\u0424\u0443\u043d\u043a\u0446\u0438\u0438",
    "features.heading":      "\u0412\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e,<br><em>\u043d\u0438\u0447\u0435\u0433\u043e \u043b\u0438\u0448\u043d\u0435\u0433\u043e.</em>",
    "features.tab.patients": "\u0414\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",
    "features.tab.doctors":  "\u0414\u043b\u044f \u0432\u0440\u0430\u0447\u0435\u0439",

    /* ── Patients Panel ── */
    "patients.intro.heading": "\u0412\u0430\u0448\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435, \u0443\u043f\u0440\u043e\u0449\u0451\u043d\u043d\u043e\u0435.<br>\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c, \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0439\u0442\u0435\u0441\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0431\u0435\u0437 \u0443\u0441\u0438\u043b\u0438\u0439.",
    "patients.intro.body":    "\u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u0436\u0434\u0430\u0442\u044c \u2014 \u0432\u0430\u0448\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0423\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0432\u0440\u0430\u0447\u0430\u043c\u0438, \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441 \u0443\u043c\u043d\u044b\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u043c.",

    "patients.booking.label":   "\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",
    "patients.booking.heading": "\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043e\u0442\u043a\u0443\u0434\u0430 \u0443\u0433\u043e\u0434\u043d\u043e,<br>\u043e\u0447\u043d\u043e \u0438\u043b\u0438 \u043f\u043e \u0432\u0438\u0434\u0435\u043e.",
    "patients.booking.b1":      "\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0432\u0440\u0430\u0447\u0435\u0439 \u0438\u043b\u0438 \u043a\u043b\u0438\u043d\u0438\u043a\u0438 \u0440\u044f\u0434\u043e\u043c \u0438 \u0437\u0430\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e",
    "patients.booking.b2":      "\u041b\u0435\u0433\u043a\u043e \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0438\u043f \u0432\u0438\u0437\u0438\u0442\u0430 \u0438 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",
    "patients.booking.b3":      "\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c",

    "patients.video.label":   "\u0412\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438",
    "patients.video.heading": "\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c \u0434\u043e\u043c\u0430<br>\u0431\u0435\u0437 \u043f\u043e\u0435\u0437\u0434\u043e\u043a.",
    "patients.video.b1":      "\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
    "patients.video.b2":      "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f",
    "patients.video.b3":      "\u0427\u0430\u0441\u0442\u043d\u044b\u0435 \u0437\u0430\u043b\u044b \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f",

    "patients.records.label":   "\u0426\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438",
    "patients.records.heading": "\u0412\u0430\u0448\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f,<br>\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438.",
    "patients.records.b1":      "\u041b\u0435\u0433\u043a\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0438\u043b\u0438 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",
    "patients.records.b2":      "\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435",
    "patients.records.b3":      "\u041b\u0435\u0433\u043a\u043e \u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0441\u043e \u0441\u0432\u043e\u0435\u0439 \u043b\u0438\u0447\u043d\u043e\u0439 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0438\u0445",

    "patients.chat.label":   "\u0427\u0430\u0442 / \u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440",
    "patients.chat.heading": "\u0412\u0430\u0448 \u0418\u0418-\u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u043f\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044e<br>\u0432 \u0432\u0430\u0448\u0438\u0445 \u0440\u0443\u043a\u0430\u0445.",
    "patients.chat.b1":      "\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u043e \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u044f\u0445, \u043f\u0440\u0438\u0451\u043c\u0430\u0445 \u0438 \u0437\u0430\u043c\u0435\u0442\u043a\u0430\u0445 \u0432\u0440\u0430\u0447\u0430",
    "patients.chat.b2":      "\u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",
    "patients.chat.b3":      "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u043e\u0432 \u0441 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0432\u0440\u0430\u0447\u0435\u0439 \u0438\u043b\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0439 \u043f\u043e \u0443\u0445\u043e\u0434\u0443",

    "patients.reminders.label":   "\u0423\u043c\u043d\u044b\u0435 \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f",
    "patients.reminders.heading": "\u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0439\u0442\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430<br>\u0438\u043b\u0438 \u043f\u0440\u0438\u0451\u043c\u044b.",
    "patients.reminders.b1":      "\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f \u043e \u043f\u0440\u0438\u0451\u043c\u0430\u0445 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u0432\u0438\u0437\u0438\u0442\u0430\u0445",
    "patients.reminders.b2":      "\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438\u0445 \u043f\u0440\u0438\u0451\u043c\u0430",

    "patients.aireports.label":   "\u041e\u0442\u0447\u0451\u0442\u044b \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0418\u0418",
    "patients.aireports.heading": "\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f<br>\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u0440\u0430\u0447\u0435\u0439.",
    "patients.aireports.b1":      "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432 \u0447\u0442\u0435\u043d\u0438\u0438 \u0438 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0445 \u043e\u0442\u0447\u0451\u0442\u043e\u0432",
    "patients.aireports.b2":      "\u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u043e\u0432",
    "patients.aireports.b3":      "\u041e\u0442\u0447\u0451\u0442\u044b \u043a\u0440\u0430\u0441\u043d\u044b\u0445 \u0444\u043b\u0430\u0436\u043a\u043e\u0432 \u0434\u043b\u044f \u044d\u043a\u0441\u0442\u0440\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u0438",

    /* ── Doctors Panel ── */
    "doctors.intro.heading": "\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0431\u0435\u0437 \u0445\u0430\u043e\u0441\u0430.<br>\u041e\u0434\u043d\u0430 \u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0443\u043c\u0430\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0432\u0430\u043c\u0438.",
    "doctors.intro.body":    "\u041c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0439 \u043a\u043b\u0438\u043d\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0431\u0435\u0437 \u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0438\u0441\u0441\u043e\u0432.",

    "doctors.patients.label":   "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438",
    "doctors.patients.heading": "\u0427\u0451\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440<br>\u0432\u0441\u0435\u0445 \u0432\u0430\u0448\u0438\u0445 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432.",
    "doctors.patients.b1":      "\u0424\u0430\u0439\u043b\u044b \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432, \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0438 \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435",
    "doctors.patients.b2":      "\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043f\u0440\u0438\u0451\u043c\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430",
    "doctors.patients.b3":      "\u041b\u0435\u0433\u043a\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u043f\u0440\u0438\u0451\u043c \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438",

    "doctors.analytics.label":   "\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430",
    "doctors.analytics.heading": "\u041f\u043e\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443<br>\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b.",
    "doctors.analytics.b1":      "\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0438 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u044b\u0435 KPI \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043a\u043b\u0438\u043d\u0438\u043a\u0438",
    "doctors.analytics.b2":      "\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043f\u0440\u0438\u0451\u043c\u043e\u0432",
    "doctors.analytics.b3":      "\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443 \u0432 CSV",

    "doctors.prescription.label":   "\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432",
    "doctors.prescription.heading": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e<br>\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c.",
    "doctors.prescription.b1":      "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438 \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c",
    "doctors.prescription.b2":      "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u0443\u043c\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a",
    "doctors.prescription.b3":      "\u041b\u0435\u0433\u043a\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u0434\u043b\u044f \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430",

    "doctors.video.label":   "\u0412\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438",
    "doctors.video.heading": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u043b\u0438\u0447\u043d\u043e,<br>\u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430.",
    "doctors.video.b1":      "\u0412\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e\u0441\u0435\u0441\u0441\u0438\u0438",
    "doctors.video.b2":      "\u0427\u0430\u0441\u0442\u043d\u044b\u0435 \u0437\u0430\u043b\u044b \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",
    "doctors.video.b3":      "\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",

    "doctors.ehr.label":   "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u043a\u0430\u0440\u0442\u044b",
    "doctors.ehr.heading": "\u0425\u0440\u0430\u043d\u0438\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432<br>\u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435 \u0438 \u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0438\u043c\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e.",
    "doctors.ehr.b1":      "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u0441\u0435\u043c \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c",
    "doctors.ehr.b2":      "\u0417\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432",
    "doctors.ehr.b3":      "\u0420\u043e\u043b\u0435\u0432\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u043e\u0431\u043c\u0435\u043d",

    "doctors.calendar.label":   "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c",
    "doctors.calendar.heading": "\u0427\u0451\u0442\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0447\u043d\u044b\u0445<br>\u0438 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0451\u043c\u043e\u0432.",
    "doctors.calendar.b1":      "\u0420\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043b\u043e\u0442\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u043a\u043b\u0438\u043d\u0438\u043a\u0435",
    "doctors.calendar.b2":      "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",
    "doctors.calendar.b3":      "\u041b\u0435\u0433\u043a\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0439\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435",

    /* ── Pricing ── */
    "pricing.label":   "\u0426\u0435\u043d\u044b",
    "pricing.heading": "\u0426\u0435\u043d\u044b \u0434\u043b\u044f \u0432\u0440\u0430\u0447\u0435\u0439",
    "pricing.body":    "\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0434\u043b\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0441\u0442\u0451\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0432\u0430\u043c\u0438.",

    "pricing.basic.name":     "\u0411\u0430\u0437\u043e\u0432\u044b\u0439",
    "pricing.basic.currency": "",
    "pricing.basic.amount":   "499\u00a0000 \u0441\u045e\u043c",
    "pricing.basic.period": "\u0437\u0430 \u0432\u0440\u0430\u0447\u0430/\u043c\u0435\u0441\u044f\u0446",
    "pricing.basic.f1":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c",
    "pricing.basic.f2":     "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u043a\u0430\u0440\u0442\u044b",
    "pricing.basic.f3":     "\u0427\u0430\u0442",
    "pricing.basic.f4":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438",
    "pricing.basic.f5":     "\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430",
    "pricing.basic.cta":    "\u041d\u0430\u0447\u0430\u0442\u044c",

    "pricing.pro.name":     "\u041f\u0440\u043e",
    "pricing.pro.badge":    "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439",
    "pricing.pro.currency": "",
    "pricing.pro.amount":   "1\u00a0260\u00a0000 \u0441\u045e\u043c",
    "pricing.pro.period": "\u0437\u0430 \u0432\u0440\u0430\u0447\u0430/\u043c\u0435\u0441\u044f\u0446",
    "pricing.pro.f1":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c",
    "pricing.pro.f2":     "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u043a\u0430\u0440\u0442\u044b",
    "pricing.pro.f3":     "\u0427\u0430\u0442",
    "pricing.pro.f4":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438",
    "pricing.pro.f5":     "\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430",
    "pricing.pro.f6":     "\u0412\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",
    "pricing.pro.f7":     "\u0412\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0441 \u0418\u0418",
    "pricing.pro.f8":     "\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0418\u0418",
    "pricing.pro.f9":     "Shifa AI Triage Bot",
    "pricing.pro.cta":    "\u041d\u0430\u0447\u0430\u0442\u044c",

    "pricing.premium.name":     "\u041f\u0440\u0435\u043c\u0438\u0443\u043c",
    "pricing.premium.currency": "",
    "pricing.premium.amount":   "2\u00a0020\u00a0000 \u0441\u045e\u043c",
    "pricing.premium.period": "\u0437\u0430 \u0432\u0440\u0430\u0447\u0430/\u043c\u0435\u0441\u044f\u0446",
    "pricing.premium.f1":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c",
    "pricing.premium.f2":     "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u043a\u0430\u0440\u0442\u044b",
    "pricing.premium.f3":     "\u0427\u0430\u0442",
    "pricing.premium.f4":     "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438",
    "pricing.premium.f5":     "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430",
    "pricing.premium.f6":     "\u0412\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",
    "pricing.premium.f7":     "\u0412\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0441 \u0418\u0418",
    "pricing.premium.f8":     "\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0418\u0418",
    "pricing.premium.f9":     "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 Shifa AI Triage Bot",
    "pricing.premium.f10":    "\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0438",
    "pricing.premium.f11":    "\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432",
    "pricing.premium.cta":    "\u041d\u0430\u0447\u0430\u0442\u044c",

    /* ── Contact ── */
    "contact.label":   "\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438",
    "contact.heading": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442",
    "contact.body":    "\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0434\u043b\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u043e\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u0441\u0442\u0451\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0432\u0430\u043c\u0438.",

    "contact.help.heading": "\u041f\u043e\u043c\u043e\u0449\u044c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
    "contact.help.body":    "\u0417\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0435, \u0441\u043e\u043e\u0431\u0449\u0430\u0439\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0445 \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043e\u0442\u0437\u044b\u0432\u044b. \u041d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 Shifa?",
    "contact.help.cta":     "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",

    "contact.demo.heading": "\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0435\u043c\u043e",
    "contact.demo.body":    "\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 Shifa \u0438\u043b\u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0432\u0440\u0430\u0447\u0435\u0439 \u0438\u043b\u0438 \u043a\u043b\u0438\u043d\u0438\u043a\u0438.",
    "contact.demo.cta":     "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",

    "contact.careers.heading": "\u041a\u0430\u0440\u044c\u0435\u0440\u0430 \u0432 Shifa",
    "contact.careers.body":    "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a SHIFA \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u0439\u0442\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b. \u041c\u044b \u0446\u0435\u043d\u0438\u043c \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e, \u044f\u0441\u043d\u043e\u0441\u0442\u044c \u0438 \u0432\u0434\u0443\u043c\u0447\u0438\u0432\u044b\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u0438. \u0415\u0441\u043b\u0438 \u0432\u0430\u0441 \u0437\u0430\u0431\u043e\u0442\u044f\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430, \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u2014 \u0432\u044b \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0439\u0434\u0451\u0442\u0435.",
    "contact.careers.cta":     "\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",

    "contact.offices.heading": "\u041d\u0430\u0448\u0438 \u043e\u0444\u0438\u0441\u044b",

    "contact.form.heading":             "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043c!",
    "contact.form.name":                "\u0418\u043c\u044f",
    "contact.form.name.placeholder":    "\u0412\u0430\u0448\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f",
    "contact.form.email":               "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",
    "contact.form.email.placeholder":   "\u0432\u0430\u0448@email.com",
    "contact.form.message":             "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
    "contact.form.message.placeholder": "\u0427\u0435\u043c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c?",
    "contact.form.submit":              "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
    "contact.form.sent":                "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u2713",

    /* ── Careers section ── */
    "careers.heading": "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c. \u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b.",
    "job1.tag":   "\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f",
    "job1.title": "\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u0435\u043a\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f",
    "job1.meta":  "\u0411\u0435\u0440\u043b\u0438\u043d, \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f \u00b7 \u0423\u0434\u0430\u043b\u0451\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u00b7 \u041f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043d\u044f\u0442\u043e\u0441\u0442\u044c",
    "job1.apply": "\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",
    "job1.desc":  "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u0443\u044e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 Shifa \u2014 \u043e\u0442 React-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0434\u043b\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0434\u043e backend API \u0438 \u043e\u0431\u043b\u0430\u0447\u043d\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u043c \u0441\u0442\u0435\u043a\u0435, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0442\u044b\u0441\u044f\u0447 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u043a\u043b\u0438\u043d\u0438\u0446\u0438\u0441\u0442\u043e\u0432 \u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u0443\u044e \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0443 \u043d\u0430 \u0440\u0430\u043d\u043d\u0435\u043c \u044d\u0442\u0430\u043f\u0435.",

    /* ── Footer ── */
    "footer.brand.body":    "\u0426\u0438\u0444\u0440\u043e\u0432\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u041d\u0430\u0448\u0430 \u043c\u0438\u0441\u0441\u0438\u044f \u2014 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0443 \u043f\u0440\u043e\u0441\u0442\u043e\u0439, \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043d\u043e\u0439 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u2014 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044f \u0432\u0440\u0430\u0447\u0435\u0439 \u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438, \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0418\u0418. \u0418\u0437 \u0411\u0435\u0440\u043b\u0438\u043d\u0430 \u043c\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438, \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u0437\u044b\u0432\u044b \u0432 \u043e\u0434\u043d\u0443 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u0443\u044e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443.",
    "footer.nav.heading":   "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f",
    "footer.legal.heading": "\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
    "footer.legal.privacy": "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    "footer.legal.terms":   "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
    "footer.legal.gdpr":    "GDPR",
    "footer.copyright":     "\u00a9 2025 SHIFA. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.",
    "footer.made":          "\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \ud83c\udde9\ud83c\uddea",

    /* ── \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 ── */
    "privacy.title":     "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    "privacy.effective": "\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443: 10 \u0430\u043f\u0440\u0435\u043b\u044f 2026 \u0433.",
    "privacy.lead":      "\u041d\u0430 shifa.uz \u043c\u044b \u0446\u0435\u043d\u0438\u043c \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0431\u044f\u0437\u0443\u0435\u043c\u0441\u044f \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u042d\u0442\u0430 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442, \u043a\u0430\u043a\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c, \u043a\u0430\u043a \u0435\u0451 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0438 \u043a\u0430\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u044d\u0442\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",

    "privacy.s1.heading": "1. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c",
    "privacy.s1.intro":   "\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0438\u0434\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438:",
    "privacy.s1.items":   "<li>\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e: \u0438\u043c\u044f, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b.</li><li>\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0435 \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0451\u043c, \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044c.</li><li>\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c\u0430\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438: IP-\u0430\u0434\u0440\u0435\u0441, \u0442\u0438\u043f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043f\u043e\u0441\u0435\u0449\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f.</li><li>\u0414\u0430\u043d\u043d\u044b\u0435, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 cookie-\u0444\u0430\u0439\u043b\u044b \u0438 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 (\u0441\u043c. \u0440\u0430\u0437\u0434\u0435\u043b 6).</li>",

    "privacy.s2.heading": "2. \u041a\u0430\u043a \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432\u0430\u0448\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e",
    "privacy.s2.intro":   "\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f:",
    "privacy.s2.items":   "<li>\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432.</li><li>\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438, \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438 \u0432 \u0441\u043b\u0443\u0436\u0431\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438.</li><li>\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435.</li><li>\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438, \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0448\u0435\u043d\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f.</li><li>\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u044b\u0445 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432.</li>",

    "privacy.s3.heading": "3. \u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438",
    "privacy.s3.intro":   "\u0422\u0430\u043c, \u0433\u0434\u0435 \u044d\u0442\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e, \u043c\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438:",
    "privacy.s3.items":   "<li>\u0412\u0430\u0448\u0435\u0433\u043e \u044f\u0432\u043d\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f.</li><li>\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u043e\u0439 \u0432\u0430\u043c\u0438 \u0443\u0441\u043b\u0443\u0433\u0438.</li><li>\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432.</li><li>\u041d\u0430\u0448\u0438\u0445 \u043b\u0435\u0433\u0438\u0442\u0438\u043c\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432: \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.</li>",

    "privacy.s4.heading": "4. \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438",
    "privacy.s4.intro":   "\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u0430\u0451\u043c \u0432\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e:",
    "privacy.s4.items":   "<li>\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430\u043c \u0443\u0441\u043b\u0443\u0433, \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0449\u0438\u043c \u043d\u0430\u043c \u0432\u0435\u0441\u0442\u0438 \u0441\u0430\u0439\u0442 \u0438 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441\u044b.</li><li>\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430\u043c \u0438\u043b\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u043c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u043c, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u043e\u0439 \u0443\u0441\u043b\u0443\u0433\u0438.</li><li>\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0440\u0433\u0430\u043d\u0430\u043c \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u043c \u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0430\u043c, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0435 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e.</li>",
    "privacy.s4.outro":   "\u0412\u0441\u0435 \u0442\u0440\u0435\u0442\u044c\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043e\u0431\u044f\u0437\u0430\u043d\u044b \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u044f\u0445.",

    "privacy.s5.heading": "5. \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445",
    "privacy.s5.body":    "\u041c\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c \u0440\u0430\u0437\u0443\u043c\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0432\u0430\u0448\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0443\u0442\u0440\u0430\u0442\u044b, \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0440\u0430\u0437\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u043d\u0438 \u043e\u0434\u043d\u0430 \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u0443\u044e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c.",

    "privacy.s6.heading": "6. Cookie-\u0444\u0430\u0439\u043b\u044b",
    "privacy.s6.intro":   "\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie-\u0444\u0430\u0439\u043b\u044b \u0438 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043d\u0430 shifa.uz \u0434\u043b\u044f:",
    "privacy.s6.items":   "<li>\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430.</li><li>\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.</li><li>\u0410\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.</li><li>\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043c\u043e\u0448\u0435\u043d\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0430.</li>",
    "privacy.s6.outro":   "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c cookie-\u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0438\u0445 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 cookie-\u0444\u0430\u0439\u043b\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u0430\u0439\u0442\u0430. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 cookie \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0447\u0435\u0440\u0435\u0437 \u0431\u0430\u043d\u043d\u0435\u0440 \u0432 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",

    "privacy.s7.heading": "7. \u0421\u0440\u043e\u043a \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",
    "privacy.s7.body":    "\u041c\u044b \u0445\u0440\u0430\u043d\u0438\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0438\u0448\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u0435\u0439, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0432 \u044d\u0442\u043e\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u0435\u0441\u043b\u0438 \u0437\u0430\u043a\u043e\u043d \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e \u0441\u0440\u043e\u043a\u0430.",

    "privacy.s8.heading": "8. \u0412\u0430\u0448\u0438 \u043f\u0440\u0430\u0432\u0430",
    "privacy.s8.intro":   "\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0430\u0432\u043e:",
    "privacy.s8.items":   "<li>\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0438\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c.</li><li>\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435\u0442\u043e\u0447\u043d\u044b\u0445 \u0438\u043b\u0438 \u043d\u0435\u043f\u043e\u043b\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.</li><li>\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.</li><li>\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u043b\u0438 \u0432\u043e\u0437\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0442\u0438\u0432 \u043d\u0435\u0451.</li><li>\u041e\u0442\u0437\u044b\u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0435\u0441\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0438.</li><li>\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0430\u043d\u043d\u044b\u0445.</li>",
    "privacy.s8.outro":   "\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u043f\u0440\u0430\u0432 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 12.",

    "privacy.s9.heading": "9. \u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0435\u0442\u0435\u0439",
    "privacy.s9.body":    "\u041d\u0430\u0448\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435 \u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0440\u0435\u0431\u0451\u043d\u043e\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0435\u0437 \u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0435\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u043c\u0435\u0440\u044b.",

    "privacy.s10.heading": "10. \u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "privacy.s10.body":    "\u041d\u0430\u0448 \u0441\u0430\u0439\u0442 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u044b. \u041c\u044b \u043d\u0435 \u043d\u0435\u0441\u0451\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u0438\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u043d\u0435\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e.",

    "privacy.s11.heading": "11. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u044d\u0442\u043e\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0435",
    "privacy.s11.body":    "\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u044d\u0442\u0443 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0443. \u0412\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",

    "privacy.s12.heading": "12. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438",
    "privacy.s12.intro":   "\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u044d\u0442\u043e\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438:",
    "privacy.s12.items":   "<li>\u0421\u0430\u0439\u0442: <a href=\"https://shifa.uz\">shifa.uz</a></li><li>\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: <a href=\"mailto:info@shifa.uz\">info@shifa.uz</a></li>",
  },
};
