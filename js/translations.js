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
    "contact.form.sending":            "Sending…",
    "contact.form.sent":               "Sent \u2713",
    "contact.form.error":              "Failed to send",

    /* ── Cookie Banner ── */
    "cookie.title":   "We value your privacy",
    "cookie.body":    "This site uses only essential browser storage to remember your language preference and cookie choice. We do not use tracking cookies, analytics, or share any data with third parties.",
    "cookie.link":    "Read our Privacy Policy",
    "cookie.accept":  "Got it",
    "cookie.decline": "Decline",

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
    "privacy.effective": "Effective Date: April 21, 2026",
    "privacy.lead":      "At SHIFA (shifa.uz), we value your privacy and are committed to protecting your personal data in accordance with the EU General Data Protection Regulation (GDPR). This Privacy Policy explains what information we collect, how we use it, the legal basis for processing, and your rights.",

    "privacy.s1.heading": "1. Data Controller",
    "privacy.s1.intro":   "The data controller responsible for this website is:",
    "privacy.s1.items":   "<li>SHIFA</li><li>Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>Email: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li>",

    "privacy.s2.heading": "2. Information We Collect",
    "privacy.s2.intro":   "We collect the following categories of data:",
    "privacy.s2.body":    "<h3>2.1 Contact Form Submissions</h3><p>When you submit our contact form, we collect:</p><ul><li>Your name</li><li>Your email address</li><li>Your message content</li><li>Your preferred language (for our response)</li></ul><p>This data is sent to us via email and is not stored in a database. We use it solely to respond to your inquiry.</p><h3>2.2 Server Logs (cPanel / Web Server)</h3><p>Our hosting provider automatically collects standard server access logs, which may include:</p><ul><li>IP address</li><li>Date and time of access</li><li>Pages requested (URL)</li><li>HTTP status code</li><li>Browser user-agent string</li><li>Referring URL</li></ul><p>These logs are retained by our hosting provider for security and operational purposes and are automatically deleted after 30 days. We do not use these logs for profiling or marketing.</p><h3>2.3 Analytics (Umami)</h3><p>We use <strong>Umami Cloud</strong> for privacy-friendly website analytics. Umami:</p><ul><li>Does <strong>not</strong> use cookies</li><li>Does <strong>not</strong> collect personal data or IP addresses</li><li>Does <strong>not</strong> track users across websites</li><li>Does <strong>not</strong> use fingerprinting</li></ul><p>Umami collects only anonymous, aggregated metrics such as page views, referrer sources, browser type, and country (derived from IP but not stored). This data cannot be used to identify individual users. No consent is required under GDPR for this type of processing.</p><h3>2.4 Local Storage (Browser)</h3><p>We store the following preferences in your browser\u2019s localStorage (not cookies):</p><ul><li><strong>shifa-lang</strong> \u2014 your selected language preference</li><li><strong>shifa-cookies</strong> \u2014 your cookie banner dismissal choice</li><li><strong>shifa-theme</strong> \u2014 your light/dark mode preference</li></ul><p>This data never leaves your device and is not transmitted to our servers. You can clear it at any time via your browser settings.</p>",

    "privacy.s3.heading": "3. How We Use Your Information",
    "privacy.s3.items":   "<li>To respond to your contact form inquiries</li><li>To send you a confirmation email after form submission</li><li>To maintain website security and prevent abuse (rate limiting, bot detection)</li><li>To understand aggregate website usage (anonymous analytics)</li><li>To comply with applicable legal obligations</li>",

    "privacy.s4.heading": "4. Legal Basis for Processing (Article 6 GDPR)",
    "privacy.s4.items":   "<li><strong>Consent (Art. 6(1)(a))</strong> \u2014 when you voluntarily submit the contact form</li><li><strong>Legitimate interest (Art. 6(1)(f))</strong> \u2014 for server logs (security), anonymous analytics (service improvement), and rate limiting (abuse prevention)</li><li><strong>Legal obligation (Art. 6(1)(c))</strong> \u2014 where required by law</li>",

    "privacy.s5.heading": "5. Cookies and Tracking Technologies",
    "privacy.s5.body":    "<strong>We do not set any cookies.</strong> Our website operates entirely without cookies. We do not use tracking pixels, fingerprinting, or any other cross-site tracking technology. Our analytics provider (Umami) is cookieless and does not collect personal data. No consent is required for our analytics under GDPR, the ePrivacy Directive, or the TTDSG (German Telecommunications-Telemedia Data Protection Act).",

    "privacy.s6.heading": "6. Data Sharing and Third Parties",
    "privacy.s6.intro":   "We do not sell, rent, or trade your personal data. Your data may be processed by:",
    "privacy.s6.items":   "<li><strong>Hosting provider</strong> (cPanel shared hosting) \u2014 processes server logs on our behalf</li><li><strong>Umami Cloud</strong> (umami.is) \u2014 receives anonymous, non-personal analytics data only</li><li><strong>Email infrastructure</strong> (server-local Exim MTA) \u2014 delivers contact form emails; no third-party email service is used</li>",
    "privacy.s6.outro":   "We do not transfer personal data outside the European Economic Area (EEA). Our hosting and email infrastructure are located within the EU.",

    "privacy.s7.heading": "7. Data Security",
    "privacy.s7.intro":   "We implement the following technical measures to protect your data:",
    "privacy.s7.items":   "<li>HTTPS encryption for all data in transit</li><li>Content Security Policy (CSP) headers to prevent injection attacks</li><li>Rate limiting to prevent abuse (5 requests per IP per hour)</li><li>Bot detection via honeypot fields and timing analysis</li><li>Input validation and sanitisation on all form submissions</li><li>Header injection prevention on email sending</li>",
    "privacy.s7.outro":   "No system can guarantee absolute security, but we take reasonable and proportionate steps to protect your data.",

    "privacy.s8.heading": "8. Data Retention",
    "privacy.s8.items":   "<li><strong>Contact form emails</strong> \u2014 retained in our inbox until your inquiry is resolved, then deleted within 90 days</li><li><strong>Server logs</strong> \u2014 automatically deleted after 30 days by our hosting provider</li><li><strong>Rate limiting data</strong> \u2014 IP hashes are automatically purged within 2 hours</li><li><strong>Analytics data</strong> \u2014 aggregated and anonymous; retained indefinitely as it contains no personal data</li><li><strong>localStorage data</strong> \u2014 remains on your device until you clear it; we cannot access or delete it</li>",

    "privacy.s9.heading": "9. Your Rights (GDPR Articles 15\u201322)",
    "privacy.s9.intro":   "As a data subject in the EU, you have the right to:",
    "privacy.s9.items":   "<li><strong>Access</strong> \u2014 request a copy of any personal data we hold about you</li><li><strong>Rectification</strong> \u2014 correct inaccurate or incomplete data</li><li><strong>Erasure</strong> \u2014 request deletion of your personal data (\u201cright to be forgotten\u201d)</li><li><strong>Restriction</strong> \u2014 restrict processing in certain circumstances</li><li><strong>Data portability</strong> \u2014 receive your data in a structured, machine-readable format</li><li><strong>Objection</strong> \u2014 object to processing based on legitimate interest</li><li><strong>Withdraw consent</strong> \u2014 at any time, without affecting the lawfulness of prior processing</li>",
    "privacy.s9.outro":   "To exercise any of these rights, contact us at <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a>. We will respond within 30 days. You also have the right to lodge a complaint with a supervisory authority. For Germany, this is the <strong>Berliner Beauftragte f\u00fcr Datenschutz und Informationsfreiheit</strong> (Berlin Commissioner for Data Protection and Freedom of Information).",

    "privacy.s10.heading": "10. Children\u2019s Privacy",
    "privacy.s10.body":    "Our website is not directed at children under 16. We do not knowingly collect personal data from children. If you believe a child has submitted data through our contact form, please contact us and we will delete it promptly.",

    "privacy.s11.heading": "11. Third-Party Links",
    "privacy.s11.body":    "Our website may contain links to external websites (e.g., OpenStreetMap tiles in our map). We are not responsible for the privacy practices of third-party sites and recommend reviewing their privacy policies.",

    "privacy.s12.heading": "12. Changes to This Policy",
    "privacy.s12.body":    "We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised effective date. Material changes will be clearly indicated.",

    "privacy.s13.heading": "13. Contact Us",
    "privacy.s13.intro":   "For questions, concerns, or data subject requests regarding this Privacy Policy:",
    "privacy.s13.items":   "<li>Email: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li><li>Address: Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>Website: <a href=\"https://shifa.uz\">shifa.uz</a></li>",
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
    "contact.form.sending":             "Wird gesendet…",
    "contact.form.sent":                "Gesendet \u2713",
    "contact.form.error":               "Senden fehlgeschlagen",

    /* ── Cookie Banner ── */
    "cookie.title":   "Wir sch\u00e4tzen Ihre Privatsph\u00e4re",
    "cookie.body":    "Diese Website verwendet nur essentiellen Browser-Speicher, um Ihre Spracheinstellung und Cookie-Auswahl zu speichern. Wir verwenden keine Tracking-Cookies, Analysetools oder geben Daten an Dritte weiter.",
    "cookie.link":    "Datenschutzerkl\u00e4rung lesen",
    "cookie.accept":  "Verstanden",
    "cookie.decline": "Ablehnen",

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

    /* ── Datenschutzerkl\u00e4rung ── */
    "privacy.title":     "Datenschutzerkl\u00e4rung",
    "privacy.effective": "G\u00fcltig ab: 21. April 2026",
    "privacy.lead":      "Bei SHIFA (shifa.uz) sch\u00e4tzen wir Ihre Privatsph\u00e4re und verpflichten uns, Ihre personenbezogenen Daten gem\u00e4\u00df der EU-Datenschutz-Grundverordnung (DSGVO) zu sch\u00fctzen. Diese Datenschutzerkl\u00e4rung erl\u00e4utert, welche Informationen wir erheben, wie wir sie verwenden, die Rechtsgrundlage der Verarbeitung und Ihre Rechte.",

    "privacy.s1.heading": "1. Verantwortlicher",
    "privacy.s1.intro":   "Der f\u00fcr diese Website verantwortliche Datenverantwortliche ist:",
    "privacy.s1.items":   "<li>SHIFA</li><li>Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>E-Mail: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li>",

    "privacy.s2.heading": "2. Informationen, die wir erheben",
    "privacy.s2.intro":   "Wir erheben die folgenden Datenkategorien:",
    "privacy.s2.body":    "<h3>2.1 Kontaktformular-Eingaben</h3><p>Wenn Sie unser Kontaktformular absenden, erheben wir:</p><ul><li>Ihren Namen</li><li>Ihre E-Mail-Adresse</li><li>Ihren Nachrichteninhalt</li><li>Ihre bevorzugte Sprache (f\u00fcr unsere Antwort)</li></ul><p>Diese Daten werden uns per E-Mail \u00fcbermittelt und nicht in einer Datenbank gespeichert. Wir verwenden sie ausschlie\u00dflich zur Beantwortung Ihrer Anfrage.</p><h3>2.2 Server-Protokolle (cPanel / Webserver)</h3><p>Unser Hosting-Anbieter erhebt automatisch standardm\u00e4\u00dfige Server-Zugriffsprotokolle, die Folgendes enthalten k\u00f6nnen:</p><ul><li>IP-Adresse</li><li>Datum und Uhrzeit des Zugriffs</li><li>Angeforderte Seiten (URL)</li><li>HTTP-Statuscode</li><li>Browser-User-Agent-String</li><li>Verweisende URL</li></ul><p>Diese Protokolle werden von unserem Hosting-Anbieter f\u00fcr Sicherheits- und Betriebszwecke aufbewahrt und nach 30 Tagen automatisch gel\u00f6scht. Wir verwenden diese Protokolle nicht f\u00fcr Profiling oder Marketing.</p><h3>2.3 Analytik (Umami)</h3><p>Wir verwenden <strong>Umami Cloud</strong> f\u00fcr datenschutzfreundliche Website-Analytik. Umami:</p><ul><li>Verwendet <strong>keine</strong> Cookies</li><li>Erhebt <strong>keine</strong> personenbezogenen Daten oder IP-Adressen</li><li>Verfolgt Nutzer <strong>nicht</strong> \u00fcber Websites hinweg</li><li>Verwendet <strong>kein</strong> Fingerprinting</li></ul><p>Umami erhebt ausschlie\u00dflich anonyme, aggregierte Metriken wie Seitenaufrufe, Verweisquellen, Browsertyp und Land (aus der IP abgeleitet, aber nicht gespeichert). Diese Daten k\u00f6nnen nicht zur Identifizierung einzelner Nutzer verwendet werden. F\u00fcr diese Art der Verarbeitung ist gem\u00e4\u00df DSGVO keine Einwilligung erforderlich.</p><h3>2.4 Lokaler Speicher (Browser)</h3><p>Wir speichern die folgenden Pr\u00e4ferenzen im localStorage Ihres Browsers (keine Cookies):</p><ul><li><strong>shifa-lang</strong> \u2014 Ihre gew\u00e4hlte Spracheinstellung</li><li><strong>shifa-cookies</strong> \u2014 Ihre Cookie-Banner-Entscheidung</li><li><strong>shifa-theme</strong> \u2014 Ihre Hell-/Dunkel-Modus-Einstellung</li></ul><p>Diese Daten verlassen Ihr Ger\u00e4t nicht und werden nicht an unsere Server \u00fcbertragen. Sie k\u00f6nnen sie jederzeit \u00fcber Ihre Browsereinstellungen l\u00f6schen.</p>",

    "privacy.s3.heading": "3. Wie wir Ihre Informationen verwenden",
    "privacy.s3.items":   "<li>Um auf Ihre Kontaktformular-Anfragen zu antworten</li><li>Um Ihnen nach dem Absenden des Formulars eine Best\u00e4tigungs-E-Mail zu senden</li><li>Um die Website-Sicherheit aufrechtzuerhalten und Missbrauch zu verhindern (Ratenbegrenzung, Bot-Erkennung)</li><li>Um die aggregierte Website-Nutzung zu verstehen (anonyme Analytik)</li><li>Um geltenden gesetzlichen Verpflichtungen nachzukommen</li>",

    "privacy.s4.heading": "4. Rechtsgrundlage der Verarbeitung (Artikel 6 DSGVO)",
    "privacy.s4.items":   "<li><strong>Einwilligung (Art. 6(1)(a))</strong> \u2014 wenn Sie das Kontaktformular freiwillig absenden</li><li><strong>Berechtigtes Interesse (Art. 6(1)(f))</strong> \u2014 f\u00fcr Server-Protokolle (Sicherheit), anonyme Analytik (Serviceverbesserung) und Ratenbegrenzung (Missbrauchspr\u00e4vention)</li><li><strong>Rechtliche Verpflichtung (Art. 6(1)(c))</strong> \u2014 soweit gesetzlich vorgeschrieben</li>",

    "privacy.s5.heading": "5. Cookies und Tracking-Technologien",
    "privacy.s5.body":    "<strong>Wir setzen keine Cookies.</strong> Unsere Website funktioniert vollst\u00e4ndig ohne Cookies. Wir verwenden keine Tracking-Pixel, kein Fingerprinting und keine sonstigen Cross-Site-Tracking-Technologien. Unser Analytik-Anbieter (Umami) ist cookiefrei und erhebt keine personenbezogenen Daten. F\u00fcr unsere Analytik ist gem\u00e4\u00df DSGVO, der ePrivacy-Richtlinie oder dem TTDSG (Telekommunikation-Telemedien-Datenschutz-Gesetz) keine Einwilligung erforderlich.",

    "privacy.s6.heading": "6. Datenweitergabe und Dritte",
    "privacy.s6.intro":   "Wir verkaufen, vermieten oder handeln nicht mit Ihren personenbezogenen Daten. Ihre Daten k\u00f6nnen verarbeitet werden von:",
    "privacy.s6.items":   "<li><strong>Hosting-Anbieter</strong> (cPanel Shared Hosting) \u2014 verarbeitet Server-Protokolle in unserem Auftrag</li><li><strong>Umami Cloud</strong> (umami.is) \u2014 empf\u00e4ngt ausschlie\u00dflich anonyme, nicht personenbezogene Analytik-Daten</li><li><strong>E-Mail-Infrastruktur</strong> (serverlokaler Exim MTA) \u2014 stellt Kontaktformular-E-Mails zu; es wird kein externer E-Mail-Dienst verwendet</li>",
    "privacy.s6.outro":   "Wir \u00fcbertragen keine personenbezogenen Daten au\u00dferhalb des Europ\u00e4ischen Wirtschaftsraums (EWR). Unsere Hosting- und E-Mail-Infrastruktur befindet sich innerhalb der EU.",

    "privacy.s7.heading": "7. Datensicherheit",
    "privacy.s7.intro":   "Wir setzen die folgenden technischen Ma\u00dfnahmen zum Schutz Ihrer Daten ein:",
    "privacy.s7.items":   "<li>HTTPS-Verschl\u00fcsselung f\u00fcr alle Daten\u00fcbertragungen</li><li>Content Security Policy (CSP)-Header zur Verhinderung von Injection-Angriffen</li><li>Ratenbegrenzung zur Missbrauchsverhinderung (5 Anfragen pro IP pro Stunde)</li><li>Bot-Erkennung \u00fcber Honeypot-Felder und Timing-Analyse</li><li>Eingabevalidierung und -bereinigung bei allen Formular\u00fcbermittlungen</li><li>Schutz vor Header-Injection beim E-Mail-Versand</li>",
    "privacy.s7.outro":   "Kein System kann absolute Sicherheit garantieren, aber wir ergreifen angemessene und verh\u00e4ltnism\u00e4\u00dfige Ma\u00dfnahmen zum Schutz Ihrer Daten.",

    "privacy.s8.heading": "8. Datenaufbewahrung",
    "privacy.s8.items":   "<li><strong>Kontaktformular-E-Mails</strong> \u2014 werden in unserem Posteingang aufbewahrt, bis Ihre Anfrage gel\u00f6st ist, danach innerhalb von 90 Tagen gel\u00f6scht</li><li><strong>Server-Protokolle</strong> \u2014 werden nach 30 Tagen automatisch von unserem Hosting-Anbieter gel\u00f6scht</li><li><strong>Ratenbegrenzungsdaten</strong> \u2014 IP-Hashes werden automatisch innerhalb von 2 Stunden gel\u00f6scht</li><li><strong>Analytik-Daten</strong> \u2014 aggregiert und anonym; werden unbefristet aufbewahrt, da sie keine personenbezogenen Daten enthalten</li><li><strong>localStorage-Daten</strong> \u2014 verbleiben auf Ihrem Ger\u00e4t, bis Sie sie l\u00f6schen; wir k\u00f6nnen nicht darauf zugreifen oder sie l\u00f6schen</li>",

    "privacy.s9.heading": "9. Ihre Rechte (DSGVO Artikel 15\u201322)",
    "privacy.s9.intro":   "Als betroffene Person in der EU haben Sie das Recht auf:",
    "privacy.s9.items":   "<li><strong>Auskunft</strong> \u2014 eine Kopie aller personenbezogenen Daten anfordern, die wir \u00fcber Sie gespeichert haben</li><li><strong>Berichtigung</strong> \u2014 unrichtige oder unvollst\u00e4ndige Daten korrigieren</li><li><strong>L\u00f6schung</strong> \u2014 L\u00f6schung Ihrer personenbezogenen Daten beantragen (\u201eRecht auf Vergessenwerden\u201c)</li><li><strong>Einschr\u00e4nkung</strong> \u2014 die Verarbeitung unter bestimmten Umst\u00e4nden einschr\u00e4nken</li><li><strong>Daten\u00fcbertragbarkeit</strong> \u2014 Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten</li><li><strong>Widerspruch</strong> \u2014 gegen die Verarbeitung auf Grundlage berechtigter Interessen widersprechen</li><li><strong>Einwilligung widerrufen</strong> \u2014 jederzeit, ohne die Rechtm\u00e4\u00dfigkeit der vorherigen Verarbeitung zu ber\u00fchren</li>",
    "privacy.s9.outro":   "Um eines dieser Rechte auszu\u00fcben, kontaktieren Sie uns unter <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a>. Wir werden innerhalb von 30 Tagen antworten. Sie haben au\u00dferdem das Recht, eine Beschwerde bei einer Aufsichtsbeh\u00f6rde einzureichen. F\u00fcr Deutschland ist dies die <strong>Berliner Beauftragte f\u00fcr Datenschutz und Informationsfreiheit</strong>.",

    "privacy.s10.heading": "10. Datenschutz f\u00fcr Kinder",
    "privacy.s10.body":    "Unsere Website richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass ein Kind Daten \u00fcber unser Kontaktformular \u00fcbermittelt hat, kontaktieren Sie uns bitte, und wir werden diese umgehend l\u00f6schen.",

    "privacy.s11.heading": "11. Links zu Drittanbietern",
    "privacy.s11.body":    "Unsere Website kann Links zu externen Websites enthalten (z.\u202fB. OpenStreetMap-Kacheln in unserer Karte). Wir sind nicht f\u00fcr die Datenschutzpraktiken von Drittanbieter-Websites verantwortlich und empfehlen, deren Datenschutzerkl\u00e4rungen zu pr\u00fcfen.",

    "privacy.s12.heading": "12. \u00c4nderungen dieser Erkl\u00e4rung",
    "privacy.s12.body":    "Wir k\u00f6nnen diese Datenschutzerkl\u00e4rung aktualisieren, um \u00c4nderungen unserer Praktiken oder rechtlichen Anforderungen widerzuspiegeln. Aktualisierungen werden auf dieser Seite mit einem ge\u00e4nderten G\u00fcltigkeitsdatum ver\u00f6ffentlicht. Wesentliche \u00c4nderungen werden deutlich gekennzeichnet.",

    "privacy.s13.heading": "13. Kontakt",
    "privacy.s13.intro":   "Bei Fragen, Anliegen oder Betroffenenrechtsanfragen zu dieser Datenschutzerkl\u00e4rung:",
    "privacy.s13.items":   "<li>E-Mail: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li><li>Adresse: Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>Website: <a href=\"https://shifa.uz\">shifa.uz</a></li>",
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
    "contact.form.sending":             "Yuborilmoqda…",
    "contact.form.sent":                "Yuborildi \u2713",
    "contact.form.error":               "Yuborib bo'lmadi",

    /* ── Cookie Banner ── */
    "cookie.title":   "Maxfiyligingiz biz uchun muhim",
    "cookie.body":    "Bu sayt faqat til sozlamasi va cookie tanlovingizni saqlash uchun brauzerning asosiy xotirasidan foydalanadi. Biz kuzatuv cookie-laridan, analitikadan foydalanmaymiz va ma\u02bclumotlaringizni uchinchi tomonlarga bermaymiz.",
    "cookie.link":    "Maxfiylik siyosatini o\u02bbqing",
    "cookie.accept":  "Tushunarli",
    "cookie.decline": "Rad etish",

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
    "privacy.effective": "Kuchga kirish sanasi: 2026-yil 21-aprel",
    "privacy.lead":      "SHIFA (shifa.uz) da biz sizning maxfiyligingizni qadrlaymiz va shaxsiy ma\u02bblumotlaringizni Yevropa Ittifoqining Umumiy ma\u02bblumotlarni himoya qilish reglamenti (GDPR) ga muvofiq himoya qilishga intilamiz. Ushbu Maxfiylik siyosati qanday ma\u02bblumotlar to\u02bbplashimiz, ulardan qanday foydalanishimiz, qayta ishlashning huquqiy asosi va sizning huquqlaringiz haqida tushuntiradi.",

    "privacy.s1.heading": "1. Ma\u02bblumotlar nazoratchisi",
    "privacy.s1.intro":   "Ushbu veb-sayt uchun mas\u02bbul ma\u02bblumotlar nazoratchisi:",
    "privacy.s1.items":   "<li>SHIFA</li><li>Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>Elektron pochta: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li>",

    "privacy.s2.heading": "2. Biz to\u02bbplaydigan ma\u02bblumotlar",
    "privacy.s2.intro":   "Biz quyidagi ma\u02bblumot toifalarini to\u02bbplaymiz:",
    "privacy.s2.body":    "<h3>2.1 Aloqa shakli orqali yuborilgan ma\u02bblumotlar</h3><p>Aloqa shaklimizni to\u02bbldirib yuborganingizda biz quyidagilarni to\u02bbplaymiz:</p><ul><li>Ismingiz</li><li>Elektron pochta manzilingiz</li><li>Xabar mazmuni</li><li>Afzal ko\u02bbrgan tilingiz (javobimiz uchun)</li></ul><p>Bu ma\u02bblumotlar bizga elektron pochta orqali yuboriladi va ma\u02bblumotlar bazasida saqlanmaydi. Biz ulardan faqat so\u02bbrovingizga javob berish uchun foydalanamiz.</p><h3>2.2 Server jurnallari (cPanel / Veb-server)</h3><p>Bizning hosting provayder avtomatik ravishda standart server kirish jurnallarini to\u02bbplaydi, ularga quyidagilar kirishi mumkin:</p><ul><li>IP-manzil</li><li>Kirish sanasi va vaqti</li><li>So\u02bbralgan sahifalar (URL)</li><li>HTTP holat kodi</li><li>Brauzer user-agent satri</li><li>Yo\u02bbnaltiruvchi URL</li></ul><p>Bu jurnallar hosting provayderimiz tomonidan xavfsizlik va operatsion maqsadlarda saqlanadi va 30 kundan so\u02bbng avtomatik o\u02bbchiriladi. Biz bu jurnallarni profillash yoki marketing uchun ishlatmaymiz.</p><h3>2.3 Tahlillar (Umami)</h3><p>Biz maxfiylikka mos veb-sayt tahlillari uchun <strong>Umami Cloud</strong> dan foydalanamiz. Umami:</p><ul><li>Cookies <strong>ishlatmaydi</strong></li><li>Shaxsiy ma\u02bblumotlar yoki IP-manzillarni <strong>to\u02bbplamaydi</strong></li><li>Foydalanuvchilarni veb-saytlar bo\u02bbylab <strong>kuzatmaydi</strong></li><li>Fingerprinting <strong>ishlatmaydi</strong></li></ul><p>Umami faqat anonim, umumlashtirilgan ko\u02bbrsatkichlarni to\u02bbplaydi: sahifa ko\u02bbrishlar, yo\u02bbnaltirish manbalari, brauzer turi va mamlakat (IP dan olingan, lekin saqlanmagan). Bu ma\u02bblumotlar yordamida alohida foydalanuvchilarni aniqlash mumkin emas. GDPR bo\u02bbyicha bu turdagi qayta ishlash uchun rozilik talab qilinmaydi.</p><h3>2.4 Mahalliy xotira (Brauzer)</h3><p>Biz brauzeringizning localStorage xotirasida (cookies emas) quyidagi afzalliklarni saqlaymiz:</p><ul><li><strong>shifa-lang</strong> \u2014 tanlangan til sozlamangiz</li><li><strong>shifa-cookies</strong> \u2014 cookie banneri bo\u02bbyicha tanlovingiz</li><li><strong>shifa-theme</strong> \u2014 yorug\u02bb/qorong\u02bbu rejim sozlamangiz</li></ul><p>Bu ma\u02bblumotlar qurilmangizdan chiqmaydi va serverlarimizga uzatilmaydi. Ularni istalgan vaqtda brauzer sozlamalari orqali o\u02bbchirishingiz mumkin.</p>",

    "privacy.s3.heading": "3. Ma\u02bblumotlaringizdan qanday foydalanamiz",
    "privacy.s3.items":   "<li>Aloqa shakli orqali kelgan so\u02bbrovlaringizga javob berish uchun</li><li>Shakl yuborilgandan so\u02bbng tasdiqlash elektron pochtasini yuborish uchun</li><li>Veb-sayt xavfsizligini ta\u02bbminlash va suiiste\u02bbmolning oldini olish uchun (tezlikni cheklash, botlarni aniqlash)</li><li>Veb-saytdan foydalanishni umumlashtirilgan tarzda tushunish uchun (anonim tahlillar)</li><li>Amaldagi huquqiy majburiyatlarga rioya qilish uchun</li>",

    "privacy.s4.heading": "4. Qayta ishlashning huquqiy asosi (GDPR 6-modda)",
    "privacy.s4.items":   "<li><strong>Rozilik (Art. 6(1)(a))</strong> \u2014 aloqa shaklini ixtiyoriy ravishda to\u02bbldirib yuborganingizda</li><li><strong>Qonuniy manfaat (Art. 6(1)(f))</strong> \u2014 server jurnallari (xavfsizlik), anonim tahlillar (xizmatni yaxshilash) va tezlikni cheklash (suiiste\u02bbmolning oldini olish) uchun</li><li><strong>Huquqiy majburiyat (Art. 6(1)(c))</strong> \u2014 qonun talab qilganida</li>",

    "privacy.s5.heading": "5. Cookies va kuzatuv texnologiyalari",
    "privacy.s5.body":    "<strong>Biz hech qanday cookie o\u02bbrnatmaymiz.</strong> Veb-saytimiz to\u02bbliq ravishda cookies siz ishlaydi. Biz kuzatuv piksellari, fingerprinting yoki boshqa saytlararo kuzatuv texnologiyalarini ishlatmaymiz. Bizning tahlil provayder (Umami) cookie ishlatmaydi va shaxsiy ma\u02bblumotlarni to\u02bbplamaydi. GDPR, ePrivacy direktivasi yoki TTDSG (Germaniya Telekommunikatsiya-Telemedia ma\u02bblumotlarni himoya qilish qonuni) bo\u02bbyicha bizning tahlillar uchun rozilik talab etilmaydi.",

    "privacy.s6.heading": "6. Ma\u02bblumotlarni ulashish va uchinchi tomonlar",
    "privacy.s6.intro":   "Biz sizning shaxsiy ma\u02bblumotlaringizni sotmaymiz, ijaraga bermaymiz yoki almashmaymiz. Ma\u02bblumotlaringiz quyidagilar tomonidan qayta ishlanishi mumkin:",
    "privacy.s6.items":   "<li><strong>Hosting provayder</strong> (cPanel shared hosting) \u2014 bizning nomimizdan server jurnallarini qayta ishlaydi</li><li><strong>Umami Cloud</strong> (umami.is) \u2014 faqat anonim, shaxsiy bo\u02bblmagan tahlil ma\u02bblumotlarini qabul qiladi</li><li><strong>Elektron pochta infratuzilmasi</strong> (serverda mahalliy Exim MTA) \u2014 aloqa shakli elektron pochtalarini yetkazadi; uchinchi tomon elektron pochta xizmati ishlatilmaydi</li>",
    "privacy.s6.outro":   "Biz shaxsiy ma\u02bblumotlarni Yevropa Iqtisodiy Hududidan (EEA) tashqariga o\u02bbtkazmaymiz. Bizning hosting va elektron pochta infratuzilmamiz Yevropa Ittifoqi ichida joylashgan.",

    "privacy.s7.heading": "7. Ma\u02bblumotlar xavfsizligi",
    "privacy.s7.intro":   "Ma\u02bblumotlaringizni himoya qilish uchun quyidagi texnik choralarni qo\u02bbllaymiz:",
    "privacy.s7.items":   "<li>Barcha uzatilayotgan ma\u02bblumotlar uchun HTTPS shifrlash</li><li>Injection hujumlarini oldini olish uchun Content Security Policy (CSP) sarlavhalari</li><li>Suiiste\u02bbmolni oldini olish uchun tezlikni cheklash (har bir IP uchun soatiga 5 ta so\u02bbrov)</li><li>Honeypot maydonlari va vaqt tahlili orqali botlarni aniqlash</li><li>Barcha shakl yuborishlarida kiritish tekshiruvi va tozalash</li><li>Elektron pochta yuborishda header injection himoyasi</li>",
    "privacy.s7.outro":   "Hech qanday tizim mutlaq xavfsizlikni kafolatlay olmaydi, lekin biz ma\u02bblumotlaringizni himoya qilish uchun oqilona va mutanosib choralar ko\u02bbramiz.",

    "privacy.s8.heading": "8. Ma\u02bblumotlarni saqlash muddati",
    "privacy.s8.items":   "<li><strong>Aloqa shakli elektron pochtalari</strong> \u2014 so\u02bbrovingiz hal qilinguncha pochta qutimizda saqlanadi, keyin 90 kun ichida o\u02bbchiriladi</li><li><strong>Server jurnallari</strong> \u2014 hosting provayderimiz tomonidan 30 kundan so\u02bbng avtomatik o\u02bbchiriladi</li><li><strong>Tezlik cheklash ma\u02bblumotlari</strong> \u2014 IP xeshlari 2 soat ichida avtomatik tozalanadi</li><li><strong>Tahlil ma\u02bblumotlari</strong> \u2014 umumlashtirilgan va anonim; shaxsiy ma\u02bblumotlar bo\u02bblmagani uchun muddatsiz saqlanadi</li><li><strong>localStorage ma\u02bblumotlari</strong> \u2014 siz o\u02bbchirguningizcha qurilmangizda qoladi; biz ularga kira olmaymiz yoki o\u02bbchira olmaymiz</li>",

    "privacy.s9.heading": "9. Sizning huquqlaringiz (GDPR 15\u201322-moddalar)",
    "privacy.s9.intro":   "Yevropa Ittifoqidagi ma\u02bblumot sub\u02bbyekti sifatida sizda quyidagi huquqlar mavjud:",
    "privacy.s9.items":   "<li><strong>Kirish</strong> \u2014 biz siz haqingizda saqlagan har qanday shaxsiy ma\u02bblumotlarning nusxasini so\u02bbrash</li><li><strong>Tuzatish</strong> \u2014 noto\u02bb\u0121ri yoki to\u02bbliqsiz ma\u02bblumotlarni tuzatish</li><li><strong>O\u02bbchirish</strong> \u2014 shaxsiy ma\u02bblumotlaringizni o\u02bbchirishni so\u02bbrash (\u201cunutilish huquqi\u201d)</li><li><strong>Cheklash</strong> \u2014 ma\u02bblum hollarda qayta ishlashni cheklash</li><li><strong>Ma\u02bblumotlar ko\u02bbchiruvchanligi</strong> \u2014 ma\u02bblumotlaringizni tuzilgan, mashina o\u02bbqiy oladigan formatda olish</li><li><strong>E\u02bbtiroz</strong> \u2014 qonuniy manfaatga asoslangan qayta ishlashga e\u02bbtiroz bildirish</li><li><strong>Rozilikni qaytarib olish</strong> \u2014 istalgan vaqtda, oldingi qayta ishlashning qonuniyligiga ta\u02bbsir qilmasdan</li>",
    "privacy.s9.outro":   "Ushbu huquqlardan birini amalga oshirish uchun biz bilan <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a> orqali bog\u02bblaning. Biz 30 kun ichida javob beramiz. Shuningdek, nazorat organiga shikoyat qilish huquqingiz bor. Germaniya uchun bu <strong>Berliner Beauftragte f\u00fcr Datenschutz und Informationsfreiheit</strong> (Berlin Ma\u02bblumotlarni himoya qilish va Axborot erkinligi bo\u02bbyicha Vakolatli shaxs).",

    "privacy.s10.heading": "10. Bolalar maxfiyligi",
    "privacy.s10.body":    "Bizning veb-saytimiz 16 yoshdan kichik bolalarga mo\u02bbljallanmagan. Biz bolalardan ataylab shaxsiy ma\u02bblumot to\u02bbplamaymiz. Agar bola aloqa shakli orqali ma\u02bblumot yuborgan deb hisoblasangiz, biz bilan bog\u02bblaning va biz uni tezda o\u02bbchiramiz.",

    "privacy.s11.heading": "11. Uchinchi tomon havolalari",
    "privacy.s11.body":    "Veb-saytimizda tashqi veb-saytlarga havolalar bo\u02bblishi mumkin (masalan, xaritamizdagi OpenStreetMap plitalari). Biz uchinchi tomon saytlarining maxfiylik amaliyotlari uchun javobgar emasmiz va ularning maxfiylik siyosatlarini ko\u02bbrib chiqishni tavsiya etamiz.",

    "privacy.s12.heading": "12. Ushbu siyosatdagi o\u02bbzgarishlar",
    "privacy.s12.body":    "Biz amaliyotlarimizdagi yoki huquqiy talablardagi o\u02bbzgarishlarni aks ettirish uchun ushbu Maxfiylik siyosatini yangilashimiz mumkin. Yangilanishlar qayta ko\u02bbrilgan kuchga kirish sanasi bilan ushbu sahifada e\u02bblon qilinadi. Muhim o\u02bbzgarishlar aniq ko\u02bbrsatiladi.",

    "privacy.s13.heading": "13. Biz bilan bog\u02bblaning",
    "privacy.s13.intro":   "Ushbu Maxfiylik siyosati bo\u02bbyicha savollar, tashvishlar yoki ma\u02bblumot sub\u02bbyekti so\u02bbrovlari uchun:",
    "privacy.s13.items":   "<li>Elektron pochta: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li><li>Manzil: Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>Veb-sayt: <a href=\"https://shifa.uz\">shifa.uz</a></li>",
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
    "contact.form.sending":             "\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430…",
    "contact.form.sent":                "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u2713",
    "contact.form.error":               "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",

    /* ── Cookie Banner ── */
    "cookie.title":   "\u041c\u044b \u0446\u0435\u043d\u0438\u043c \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
    "cookie.body":    "\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0438 \u0432\u044b\u0431\u043e\u0440\u0430 cookie. \u041c\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u0435 cookie, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443 \u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0440\u0435\u0442\u044c\u0438\u043c \u043b\u0438\u0446\u0430\u043c.",
    "cookie.link":    "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    "cookie.accept":  "\u041f\u043e\u043d\u044f\u0442\u043d\u043e",
    "cookie.decline": "\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c",

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
    "privacy.effective": "\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443: 21 \u0430\u043f\u0440\u0435\u043b\u044f 2026 \u0433.",
    "privacy.lead":      "\u0412 SHIFA (shifa.uz) \u043c\u044b \u0446\u0435\u043d\u0438\u043c \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0431\u044f\u0437\u0443\u0435\u043c\u0441\u044f \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u041e\u0431\u0449\u0438\u043c \u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u043e \u0437\u0430\u0449\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0415\u0421 (GDPR). \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442, \u043a\u0430\u043a\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c, \u043a\u0430\u043a \u0435\u0451 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c, \u043f\u0440\u0430\u0432\u043e\u0432\u0443\u044e \u043e\u0441\u043d\u043e\u0432\u0443 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0432\u0430\u0448\u0438 \u043f\u0440\u0430\u0432\u0430.",

    "privacy.s1.heading": "1. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0451\u0440 \u0434\u0430\u043d\u043d\u044b\u0445",
    "privacy.s1.intro":   "\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0451\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0437\u0430 \u044d\u0442\u043e\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442:",
    "privacy.s1.items":   "<li>SHIFA</li><li>Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li>",

    "privacy.s2.heading": "2. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c",
    "privacy.s2.intro":   "\u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",
    "privacy.s2.body":    "<h3>2.1 \u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b</h3><p>\u041f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c:</p><ul><li>\u0412\u0430\u0448\u0435 \u0438\u043c\u044f</li><li>\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b</li><li>\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f</li><li>\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u044f\u0437\u044b\u043a (\u0434\u043b\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430)</li></ul><p>\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u043c \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435 \u0438 \u043d\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0438\u0445 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441.</p><h3>2.2 \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u044b (cPanel / \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440)</h3><p>\u041d\u0430\u0448 \u0445\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c:</p><ul><li>IP-\u0430\u0434\u0440\u0435\u0441</li><li>\u0414\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430</li><li>\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (URL)</li><li>HTTP-\u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f</li><li>\u0421\u0442\u0440\u043e\u043a\u0443 user-agent \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430</li><li>URL \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430</li></ul><p>\u042d\u0442\u0438 \u0436\u0443\u0440\u043d\u0430\u043b\u044b \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043d\u0430\u0448\u0438\u043c \u0445\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u043c \u0432 \u0446\u0435\u043b\u044f\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 30 \u0434\u043d\u0435\u0439. \u041c\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u044d\u0442\u0438 \u0436\u0443\u0440\u043d\u0430\u043b\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u0430.</p><h3>2.3 \u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 (Umami)</h3><p>\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c <strong>Umami Cloud</strong> \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0430\u0439\u0442\u0430, \u0443\u0432\u0430\u0436\u0430\u044e\u0449\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. Umami:</p><ul><li><strong>\u041d\u0435</strong> \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 cookie-\u0444\u0430\u0439\u043b\u044b</li><li><strong>\u041d\u0435</strong> \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430</li><li><strong>\u041d\u0435</strong> \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0441\u0430\u0439\u0442\u0430\u043c\u0438</li><li><strong>\u041d\u0435</strong> \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043a\u0438 (fingerprinting)</li></ul><p>Umami \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435, \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438: \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432, \u0442\u0438\u043f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 \u0441\u0442\u0440\u0430\u043d\u0443 (\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e IP, \u043d\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f). \u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e GDPR \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f.</p><h3>2.4 \u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 (\u0431\u0440\u0430\u0443\u0437\u0435\u0440)</h3><p>\u041c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 localStorage \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 (\u043d\u0435 cookie-\u0444\u0430\u0439\u043b\u044b):</p><ul><li><strong>shifa-lang</strong> \u2014 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a</li><li><strong>shifa-cookies</strong> \u2014 \u0432\u0430\u0448 \u0432\u044b\u0431\u043e\u0440 \u043f\u043e \u0431\u0430\u043d\u043d\u0435\u0440\u0443 cookie</li><li><strong>shifa-theme</strong> \u2014 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0432\u0435\u0442\u043b\u043e\u0439/\u0442\u0451\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b</li></ul><p>\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044e\u0442 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u044b. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0445 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0447\u0435\u0440\u0435\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.</p>",

    "privacy.s3.heading": "3. \u041a\u0430\u043a \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432\u0430\u0448\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e",
    "privacy.s3.items":   "<li>\u0414\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443</li><li>\u0414\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u043f\u0438\u0441\u044c\u043c\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b</li><li>\u0414\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0439 (\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0442\u043e\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u043e\u0432)</li><li>\u0414\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u0430 (\u0430\u043d\u043e\u043d\u0438\u043c\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430)</li><li>\u0414\u043b\u044f \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u044b\u0445 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432</li>",

    "privacy.s4.heading": "4. \u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u0441\u0442\u0430\u0442\u044c\u044f 6 GDPR)",
    "privacy.s4.items":   "<li><strong>\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 (Art. 6(1)(a))</strong> \u2014 \u043f\u0440\u0438 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b</li><li><strong>\u0417\u0430\u043a\u043e\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0435\u0441 (Art. 6(1)(f))</strong> \u2014 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u0436\u0443\u0440\u043d\u0430\u043b\u043e\u0432 (\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c), \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e\u0439 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 (\u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430) \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0439)</li><li><strong>\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c (Art. 6(1)(c))</strong> \u2014 \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u043e\u043d\u043e\u043c</li>",

    "privacy.s5.heading": "5. Cookie-\u0444\u0430\u0439\u043b\u044b \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f",
    "privacy.s5.body":    "<strong>\u041c\u044b \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u043d\u0438\u043a\u0430\u043a\u0438\u0445 cookie-\u0444\u0430\u0439\u043b\u043e\u0432.</strong> \u041d\u0430\u0448 \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0435\u0437 cookie-\u0444\u0430\u0439\u043b\u043e\u0432. \u041c\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043a\u0438 (fingerprinting) \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u0435\u0436\u0441\u0430\u0439\u0442\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u0448 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 (Umami) \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 cookie \u0438 \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043d\u0430\u0448\u0443 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e GDPR, \u0414\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0435 ePrivacy \u0438\u043b\u0438 TTDSG (\u0417\u0430\u043a\u043e\u043d \u043e \u0437\u0430\u0449\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0435\u043b\u0435\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044f\u0445 \u0438 \u0442\u0435\u043b\u0435\u043c\u0435\u0434\u0438\u0430 \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u0438).",

    "privacy.s6.heading": "6. \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0442\u0440\u0435\u0442\u044c\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u044b",
    "privacy.s6.intro":   "\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u0430\u0451\u043c, \u043d\u0435 \u0441\u0434\u0430\u0451\u043c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443 \u0438 \u043d\u0435 \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0435\u043c \u0432\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f:",
    "privacy.s6.items":   "<li><strong>\u0425\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440</strong> (cPanel shared hosting) \u2014 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u044b \u043e\u0442 \u043d\u0430\u0448\u0435\u0433\u043e \u0438\u043c\u0435\u043d\u0438</li><li><strong>Umami Cloud</strong> (umami.is) \u2014 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435, \u043d\u0435\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438</li><li><strong>\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b</strong> (\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 Exim MTA) \u2014 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0438\u0441\u044c\u043c\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b; \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f</li>",
    "privacy.s6.outro":   "\u041c\u044b \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u043e\u0439 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0437\u043e\u043d\u044b (EEA). \u041d\u0430\u0448\u0430 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430 \u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0430 \u0432 \u0415\u0421.",

    "privacy.s7.heading": "7. \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445",
    "privacy.s7.intro":   "\u041c\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0435\u0440\u044b \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445:",
    "privacy.s7.items":   "<li>HTTPS-\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445</li><li>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 Content Security Policy (CSP) \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0438\u043d\u044a\u0435\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0430\u0442\u0430\u043a</li><li>\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0442\u043e\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0439 (5 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 IP \u0432 \u0447\u0430\u0441)</li><li>\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 honeypot-\u043f\u043e\u043b\u044f \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u0438</li><li>\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430 \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u043f\u0440\u0430\u0432\u043e\u043a \u0444\u043e\u0440\u043c</li><li>\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u0438\u0441\u0435\u043c</li>",
    "privacy.s7.outro":   "\u041d\u0438 \u043e\u0434\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u0443\u044e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u043d\u043e \u043c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u0440\u0430\u0437\u0443\u043c\u043d\u044b\u0435 \u0438 \u0441\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",

    "privacy.s8.heading": "8. \u0421\u0440\u043e\u043a\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",
    "privacy.s8.items":   "<li><strong>\u041f\u0438\u0441\u044c\u043c\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b</strong> \u2014 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u043e \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0437\u0430\u0442\u0435\u043c \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 90 \u0434\u043d\u0435\u0439</li><li><strong>\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u044b</strong> \u2014 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 30 \u0434\u043d\u0435\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u043c</li><li><strong>\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e\u0442\u044b</strong> \u2014 \u0445\u0435\u0448\u0438 IP \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0447\u0438\u0449\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 2 \u0447\u0430\u0441\u043e\u0432</li><li><strong>\u0414\u0430\u043d\u043d\u044b\u0435 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438</strong> \u2014 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435; \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0431\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445</li><li><strong>\u0414\u0430\u043d\u043d\u044b\u0435 localStorage</strong> \u2014 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u043f\u043e\u043a\u0430 \u0432\u044b \u0438\u0445 \u043d\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u0435; \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a \u043d\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0445</li>",

    "privacy.s9.heading": "9. \u0412\u0430\u0448\u0438 \u043f\u0440\u0430\u0432\u0430 (GDPR, \u0441\u0442\u0430\u0442\u044c\u0438 15\u201322)",
    "privacy.s9.intro":   "\u041a\u0430\u043a \u0441\u0443\u0431\u044a\u0435\u043a\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0415\u0421, \u0432\u044b \u0438\u043c\u0435\u0435\u0442\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430:",
    "privacy.s9.items":   "<li><strong>\u0414\u043e\u0441\u0442\u0443\u043f</strong> \u2014 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u043f\u0438\u044e \u043b\u044e\u0431\u044b\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0445\u0440\u0430\u043d\u0438\u043c \u043e \u0432\u0430\u0441</li><li><strong>\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435</strong> \u2014 \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u0442\u043e\u0447\u043d\u044b\u0435 \u0438\u043b\u0438 \u043d\u0435\u043f\u043e\u043b\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435</li><li><strong>\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435</strong> \u2014 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u00ab\u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0437\u0430\u0431\u0432\u0435\u043d\u0438\u0435\u00bb)</li><li><strong>\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435</strong> \u2014 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0440\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u043e\u0431\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u0445</li><li><strong>\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445</strong> \u2014 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c, \u043c\u0430\u0448\u0438\u043d\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435</li><li><strong>\u0412\u043e\u0437\u0440\u0430\u0436\u0435\u043d\u0438\u0435</strong> \u2014 \u0432\u043e\u0437\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u043e\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430</li><li><strong>\u041e\u0442\u0437\u044b\u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f</strong> \u2014 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0431\u0435\u0437 \u0443\u0449\u0435\u0440\u0431\u0430 \u0437\u0430\u043a\u043e\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438</li>",
    "privacy.s9.outro":   "\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0438\u0437 \u044d\u0442\u0438\u0445 \u043f\u0440\u0430\u0432 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a>. \u041c\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 30 \u0434\u043d\u0435\u0439. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442\u0435 \u043f\u0440\u0430\u0432\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u0436\u0430\u043b\u043e\u0431\u0443 \u0432 \u043d\u0430\u0434\u0437\u043e\u0440\u043d\u044b\u0439 \u043e\u0440\u0433\u0430\u043d. \u0414\u043b\u044f \u0413\u0435\u0440\u043c\u0430\u043d\u0438\u0438 \u044d\u0442\u043e <strong>Berliner Beauftragte f\u00fcr Datenschutz und Informationsfreiheit</strong> (\u0411\u0435\u0440\u043b\u0438\u043d\u0441\u043a\u0438\u0439 \u0443\u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u043e \u0437\u0430\u0449\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438).",

    "privacy.s10.heading": "10. \u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0435\u0442\u0435\u0439",
    "privacy.s10.body":    "\u041d\u0430\u0448 \u0441\u0430\u0439\u0442 \u043d\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u043c\u043b\u0430\u0434\u0448\u0435 16 \u043b\u0435\u0442. \u041c\u044b \u0441\u043e\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u0439. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0440\u0435\u0431\u0451\u043d\u043e\u043a \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0434\u0430\u043d\u043d\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 \u043d\u0430\u0448\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438, \u0438 \u043c\u044b \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0438\u0445 \u0443\u0434\u0430\u043b\u0438\u043c.",

    "privacy.s11.heading": "11. \u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "privacy.s11.body":    "\u041d\u0430\u0448 \u0441\u0430\u0439\u0442 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0430\u0439\u043b\u044b OpenStreetMap \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043a\u0430\u0440\u0442\u0435). \u041c\u044b \u043d\u0435 \u043d\u0435\u0441\u0451\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u0438\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u043c\u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438.",

    "privacy.s12.heading": "12. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u044d\u0442\u043e\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0435",
    "privacy.s12.body":    "\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u044d\u0442\u0443 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u0445 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u0445. \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0447\u0451\u0442\u043a\u043e \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b.",

    "privacy.s13.heading": "13. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438",
    "privacy.s13.intro":   "\u041f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c, \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f\u043c \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u0442\u043e\u0439 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438:",
    "privacy.s13.items":   "<li>\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: <a href=\"mailto:contact@shifa.uz\">contact@shifa.uz</a></li><li>\u0410\u0434\u0440\u0435\u0441: Hansastra\u00dfe 116, 13088 Berlin, Germany</li><li>\u0421\u0430\u0439\u0442: <a href=\"https://shifa.uz\">shifa.uz</a></li>",
  },
};
