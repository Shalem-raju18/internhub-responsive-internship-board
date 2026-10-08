/**
 * ============================================================================
 * InternHub – Responsive Internship Board
 * Technology: Pure Vanilla JavaScript (ES6+) – Zero Framework Dependencies
 * Author: Shalemraju Janga
 * GitHub: https://github.com/Shalem-raju18
 * ============================================================================
 */

"use strict";

/* ============================================================================
   1. REUSABLE INTERNSHIP DATASET
   At least 10 realistic fictional internship records spanning multiple domains.
   ============================================================================ */
const internshipsData = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "TechNova Solutions",
    domain: "Web Development",
    location: "Remote",
    locationType: "Remote",
    type: "Part-time",
    duration: "2 Months",
    stipend: "₹8,000/month",
    description: "Collaborate with senior frontend engineers to build responsive web interfaces, optimize core web vitals, and convert Figma design tokens into clean HTML, CSS, and modern JavaScript components.",
    fullDescription: "TechNova Solutions is looking for an enthusiastic Frontend Development Intern to join our digital experience squad. You will work closely with lead architects to build accessible, mobile-first user interfaces. This role offers hands-on mentorship, code review sessions, and real product exposure to applications serving over 50,000 monthly users.",
    responsibilities: [
      "Translate Figma prototypes into pixel-perfect semantic HTML5 and CSS3 templates.",
      "Implement client-side interactivity and asynchronous API integrations using vanilla JavaScript.",
      "Conduct cross-browser compatibility tests on Chrome, Safari, Firefox, and mobile viewports.",
      "Ensure web accessibility complies with WCAG 2.1 AA guidelines."
    ],
    requirements: [
      "Strong foundation in HTML5 semantic elements, CSS3 Flexbox/Grid, and ES6+ JavaScript.",
      "Familiarity with Git version control and GitHub workflow.",
      "Understanding of responsive web design principles and mobile-first methodologies.",
      "Pursuing a degree in Computer Science, IT, or equivalent self-taught portfolio."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    perks: [
      "Certificate of Internship Completion",
      "Letter of Recommendation (LOR)",
      "Flexible Working Hours (15-20 hrs/week)",
      "Pre-Placement Offer (PPO) based on performance"
    ],
    posted: "1 day ago"
  },
  {
    id: 2,
    title: "Full Stack Engineering Intern",
    company: "Nexus Labs",
    domain: "Full Stack Development",
    location: "Bengaluru",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "₹18,000/month",
    description: "Design and implement RESTful backend services, database schemas in PostgreSQL, and responsive frontend dashboards for our next-generation developer tooling suite.",
    fullDescription: "Nexus Labs is an agile engineering company building scalable developer tools. As a Full Stack Intern, you will participate in bi-weekly sprints, write clean unit-tested code across both backend services (Node.js/Express) and client interfaces, and gain end-to-end exposure to production deployments.",
    responsibilities: [
      "Develop and document robust REST APIs with authentication and validation.",
      "Write efficient SQL queries and schema migrations.",
      "Build modular interactive components for internal administration dashboards.",
      "Participate in daily stand-ups and sprint retrospective meetings."
    ],
    requirements: [
      "Working knowledge of JavaScript/TypeScript, Node.js, and relational databases.",
      "Understanding of REST API architectures and HTTP status codes.",
      "Basic understanding of SQL queries and data normalization.",
      "Problem-solving mindset and eagerness to learn new tech stacks."
    ],
    skills: ["Node.js", "Express", "PostgreSQL", "JavaScript", "REST APIs"],
    perks: [
      "Hybrid work culture with office lunch & commute allowance",
      "1-on-1 mentorship from Senior Staff Engineers",
      "Official Experience Certificate & LOR",
      "Full-time conversion opportunity (PPO)"
    ],
    posted: "2 days ago"
  },
  {
    id: 3,
    title: "Mobile App Development Intern",
    company: "SwiftPulse Mobility",
    domain: "App Development",
    location: "Hyderabad",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "₹15,000/month",
    description: "Assist in developing high-performance cross-platform mobile application modules, implementing smooth gesture animations, and integrating native push notifications.",
    fullDescription: "SwiftPulse Mobility builds next-gen urban commuting apps. We are looking for an App Development Intern to assist our mobile crew. You will gain in-depth experience in client state management, offline-first caching, camera/location hardware access, and automated testing.",
    responsibilities: [
      "Implement user interface screens following iOS Human Interface and Material Design standards.",
      "Integrate RESTful microservices for geolocation tracking and payment confirmation.",
      "Profile app memory consumption, rendering frame rates, and crash diagnostics.",
      "Assist in preparing APK and iOS test builds for beta distribution."
    ],
    requirements: [
      "Familiarity with cross-platform frameworks (Flutter/React Native) or native Kotlin/Swift.",
      "Solid comprehension of object-oriented programming (OOP) and mobile UI lifecycles.",
      "Knowledge of consuming JSON APIs and handling asynchronous network states.",
      "Personal mobile project or published demo repository."
    ],
    skills: ["Flutter", "Dart", "Mobile UI", "REST APIs", "Git"],
    perks: [
      "Hands-on production codebase experience",
      "Stipend with milestone performance bonuses",
      "Free access to company courses and certifications",
      "Letter of Recommendation from CTO"
    ],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Python Backend Intern",
    company: "DataCraft Systems",
    domain: "Python Development",
    location: "Remote",
    locationType: "Remote",
    type: "Part-time",
    duration: "2 Months",
    stipend: "₹12,000/month",
    description: "Build asynchronous backend tasks, web scrapers, and data ingestion pipelines using Python, FastAPI, and Redis for enterprise data monitoring.",
    fullDescription: "DataCraft Systems provides automated market intelligence to international e-commerce platforms. We are seeking a curious Python Intern to work with our data pipeline team. You will build resilient scrapers, process streaming data feeds, and write clean, PEP-8 compliant Python services.",
    responsibilities: [
      "Write automated data ingestion scripts and scrapers with robust error retries.",
      "Build lightweight FastAPI microservices for data querying.",
      "Implement background task queues with Redis and Celery.",
      "Write comprehensive unit test suites using PyTest."
    ],
    requirements: [
      "Proficient in Python 3, object-oriented concepts, and data structures.",
      "Hands-on experience with FastAPI, Flask, or Django.",
      "Basic understanding of HTTP protocols, headers, proxies, and rate limits.",
      "Familiarity with virtual environments and package management (pip/poetry)."
    ],
    skills: ["Python", "FastAPI", "SQL", "Redis", "PyTest"],
    perks: [
      "100% Remote flexibility",
      "Weekly technical learning sessions",
      "Certificate of Excellence upon completion",
      "Dedicated senior mentor assigned from Day 1"
    ],
    posted: "Just now"
  },
  {
    id: 5,
    title: "Data Science & Analytics Intern",
    company: "InsightWorks Analytics",
    domain: "Data Science",
    location: "Pune",
    locationType: "On-site",
    type: "Full-time",
    duration: "6 Months",
    stipend: "₹20,000/month",
    description: "Extract actionable business insights, perform exploratory data analysis (EDA), and build interactive visualization dashboards using Pandas, NumPy, and Tableau.",
    fullDescription: "InsightWorks Analytics partners with Fortune 500 retailers to drive data-informed inventory and pricing decisions. During this 6-month immersion, you will analyze large datasets, detect statistical anomalies, and deliver clear presentations to stakeholders.",
    responsibilities: [
      "Cleanse, transform, and validate messy tabular datasets using Pandas and NumPy.",
      "Generate exploratory visual dashboards communicating metric trends and correlations.",
      "Assist in building baseline predictive models using regression and classification algorithms.",
      "Synthesize analytical findings into crisp executive summaries."
    ],
    requirements: [
      "Strong proficiency in Python data analysis stack (NumPy, Pandas, Matplotlib, Seaborn).",
      "Solid grounding in descriptive statistics, probability, and hypothesis testing.",
      "Working knowledge of SQL for data extraction and aggregation.",
      "Strong communication and data storytelling skills."
    ],
    skills: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization"],
    perks: [
      "Pre-Placement Offer (PPO) eligibility after 3 months",
      "Subsidized company cafeteria and wellness benefits",
      "Mentorship from Principal Data Scientists",
      "Official Certificate and LinkedIn Endorsement"
    ],
    posted: "4 days ago"
  },
  {
    id: 6,
    title: "UI/UX Product Design Intern",
    company: "Aura Creative Studio",
    domain: "UI/UX",
    location: "Remote",
    locationType: "Remote",
    type: "Part-time",
    duration: "2 Months",
    stipend: "₹10,000/month",
    description: "Craft wireframes, interactive Figma prototypes, and comprehensive design system components while conducting usability tests with active beta users.",
    fullDescription: "Aura Creative Studio is an award-winning product design agency based in Mumbai and San Francisco. As a Design Intern, you will participate in real client design sprints, create component libraries, conduct heuristic reviews, and learn production handoff with developers.",
    responsibilities: [
      "Design wireframes, journey maps, and high-fidelity mockups in Figma.",
      "Maintain design token libraries, typography scales, and UI component variants.",
      "Prepare interactive clickable prototypes for customer usability testing sessions.",
      "Collaborate with frontend engineers to inspect implemented CSS and visual fidelity."
    ],
    requirements: [
      "Demonstrated portfolio showcasing web/mobile UI design projects and case studies.",
      "Expertise with Figma auto-layout, interactive components, and styles.",
      "Clear understanding of typography, color theory, visual hierarchy, and accessibility.",
      "Empathy for user pain points and eagerness to iterate based on feedback."
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
    perks: [
      "100% Remote, work from anywhere",
      "Figma Professional license provided during internship",
      "Portfolio review and resume polishing from Design Director",
      "Certificate of Internship & PPO consideration"
    ],
    posted: "2 days ago"
  },
  {
    id: 7,
    title: "AI / Machine Learning Research Intern",
    company: "CognitiveEdge AI",
    domain: "AI/ML",
    location: "Bengaluru",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "6 Months",
    stipend: "₹25,000/month",
    description: "Fine-tune open-source transformer models, evaluate LLM prompts using benchmark datasets, and assist in building vector embeddings pipelines.",
    fullDescription: "CognitiveEdge AI builds enterprise search and document summarization systems powered by advanced foundation models. We are looking for an ML Intern passionate about modern Natural Language Processing and deep learning.",
    responsibilities: [
      "Curate and clean multimodal training and evaluation datasets.",
      "Assist in running inference benchmarks and latency profiling on GPU clusters.",
      "Implement Retrieval-Augmented Generation (RAG) pipelines using vector databases.",
      "Document experimental outcomes and model accuracy improvements."
    ],
    requirements: [
      "Strong background in Python, PyTorch, or TensorFlow.",
      "Theoretical and practical understanding of NLP concepts, embeddings, and transformers.",
      "Experience working with Hugging Face transformers and dataset libraries.",
      "Comfort with Linux terminal and Git commands."
    ],
    skills: ["Python", "PyTorch", "Hugging Face", "LLMs", "Vector DBs"],
    perks: [
      "Highest stipend bracket with GPU cloud compute credits",
      "Co-authorship opportunities on research tech blogs and papers",
      "Direct guidance from ex-FAANG AI researchers",
      "Fast-track conversion to Full-time Research Engineer"
    ],
    posted: "1 day ago"
  },
  {
    id: 8,
    title: "Cloud & DevOps Intern",
    company: "CloudScale Systems",
    domain: "Cloud & DevOps",
    location: "Hyderabad",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "₹16,000/month",
    description: "Automate CI/CD pipelines, containerize microservices using Docker, and configure cloud monitoring alerts on AWS and Linux environments.",
    fullDescription: "CloudScale Systems helps mid-market SaaS companies modernize their deployment architectures. As a DevOps Intern, you will learn infrastructure-as-code principles, automate build-and-deploy pipelines, and configure real-time monitoring and alerting systems.",
    responsibilities: [
      "Write multi-stage Dockerfiles to containerize Node.js and Python applications.",
      "Configure GitHub Actions workflows for automated linting, testing, and image builds.",
      "Set up system telemetry dashboards with Prometheus and Grafana.",
      "Help maintain cloud server hardening and security best practices."
    ],
    requirements: [
      "Basic understanding of Linux system administration and Bash scripting.",
      "Familiarity with Docker containers and container networking.",
      "Basic knowledge of cloud providers (AWS, GCP, or Azure).",
      "High attention to detail regarding server security and configuration hygiene."
    ],
    skills: ["Docker", "Linux", "Bash", "GitHub Actions", "AWS"],
    perks: [
      "AWS Certification voucher reimbursement upon milestone completion",
      "Hands-on cloud infrastructure experience",
      "Certificate of Internship and detailed recommendation letter",
      "Direct pathway to Junior DevOps Engineer position"
    ],
    posted: "5 days ago"
  },
  {
    id: 9,
    title: "Junior Web Developer Intern",
    company: "PixelCraft Digital",
    domain: "Web Development",
    location: "Mumbai",
    locationType: "On-site",
    type: "Part-time",
    duration: "2 Months",
    stipend: "₹7,500/month",
    description: "Develop interactive landing pages, maintain client websites, implement SEO best practices, and optimize web assets for maximum speed.",
    fullDescription: "PixelCraft Digital is a boutique creative web agency building bespoke online presences for retail, hospitality, and design brands. You will work on real client websites, implementing clean semantic code, fluid animations, and responsive layouts.",
    responsibilities: [
      "Build landing page sections using semantic HTML5 and modern CSS3.",
      "Add interactive UI elements such as modals, sliders, and form validations using vanilla JavaScript.",
      "Optimize images and assets to achieve 90+ Lighthouse performance scores.",
      "Assist in debugging layout glitches across iOS and Android browsers."
    ],
    requirements: [
      "Proficient in HTML, CSS, and fundamental JavaScript.",
      "Understanding of CSS Box Model, Flexbox, and CSS Grid.",
      "Enthusiasm for clean design and micro-interactions.",
      "Ability to meet deadlines and work collaboratively."
    ],
    skills: ["HTML", "CSS", "JavaScript", "SEO Basics", "Lighthouse"],
    perks: [
      "Flexible schedule that accommodates college exam schedules",
      "Portfolio-ready live client project credits",
      "Certificate of Internship",
      "Casual, fun studio environment"
    ],
    posted: "3 days ago"
  },
  {
    id: 10,
    title: "Python Automation Intern",
    company: "AutoMatrix Tech",
    domain: "Python Development",
    location: "Delhi NCR",
    locationType: "Hybrid",
    type: "Part-time",
    duration: "3 Months",
    stipend: "₹10,000/month",
    description: "Write automated test scripts, robotic process automation (RPA) tools, and data processing utilities to replace manual office workflows.",
    fullDescription: "AutoMatrix Tech delivers workflow automation solutions to logistics and supply chain providers. As a Python Automation Intern, you will script tools that automate repetitive data entry, validate invoice discrepancies, and trigger email alerts.",
    responsibilities: [
      "Develop automation scripts using Python, Selenium, and OpenPyXL.",
      "Parse and validate JSON, CSV, and Excel spreadsheets.",
      "Integrate automated webhook notifications with Slack and Microsoft Teams.",
      "Document script usage and create user manuals for internal teams."
    ],
    requirements: [
      "Sound understanding of Python fundamentals and core data structures.",
      "Experience with file I/O operations and third-party libraries.",
      "Strong analytical and logical reasoning skills.",
      "Self-driven curiosity to solve manual workflow bottlenecks."
    ],
    skills: ["Python", "Selenium", "Excel Automation", "Git", "REST APIs"],
    perks: [
      "Valuable industry experience with real enterprise automation",
      "Stipend with completion bonus",
      "Official Certificate & LinkedIn recommendation",
      "Potential offer for full-time QA/Automation Engineer"
    ],
    posted: "4 days ago"
  },
  {
    id: 11,
    title: "Associate Product Designer Intern",
    company: "FinFlow Technologies",
    domain: "UI/UX",
    location: "Bengaluru",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "₹16,000/month",
    description: "Design clean fintech payment flows, user onboarding funnels, and data-dense financial dashboards with an obsessive focus on user clarity.",
    fullDescription: "FinFlow Technologies is a rapidly growing B2B fintech platform that simplifies multi-currency cross-border transactions for Indian SMBs. As a Product Design Intern, you will partner directly with our product managers and engineers to simplify complex banking workflows.",
    responsibilities: [
      "Map user journeys, task flows, and edge cases for high-stakes payment steps.",
      "Design accessible high-fidelity UI components adhering to WCAG contrast standards.",
      "Participate in live user feedback interviews and record observational metrics.",
      "Deliver organized design files and handoff specs to the engineering squad."
    ],
    requirements: [
      "Strong portfolio demonstrating web application UI/UX case studies.",
      "Fluency in Figma, including components, variants, and prototyping.",
      "Deep interest in financial technology, data tables, and usability.",
      "Ability to articulate design decisions with logical reasoning."
    ],
    skills: ["Figma", "UI/UX Design", "Wireframing", "Interaction Design", "User Testing"],
    perks: [
      "Work directly with founding team and Head of Product",
      "Opportunity for PPO conversion at graduation",
      "Comprehensive Letter of Recommendation",
      "Stipend and monthly tech stipend"
    ],
    posted: "1 day ago"
  },
  {
    id: 12,
    title: "Full Stack Web Developer Intern",
    company: "ZestCoders Studio",
    domain: "Full Stack Development",
    location: "Remote",
    locationType: "Remote",
    type: "Part-time",
    duration: "3 Months",
    stipend: "₹12,000/month",
    description: "Build interactive client portals, integrate payment gateways, and develop lightweight serverless backend functions using Node.js and modern JavaScript.",
    fullDescription: "ZestCoders Studio builds bespoke digital products for global non-profits and educational organizations. We are looking for an ambitious Full Stack Web Developer Intern who loves writing clean code and enjoys seeing their features directly impact thousands of users.",
    responsibilities: [
      "Develop responsive user interfaces using HTML5, CSS3, and modern vanilla JavaScript.",
      "Create API endpoints and webhook handlers with Node.js and Express.",
      "Integrate Stripe and Razorpay checkout APIs with server-side signature validation.",
      "Maintain git documentation and participate in asynchronous code reviews."
    ],
    requirements: [
      "Proficient in JavaScript (both client-side DOM and Node.js environments).",
      "Understanding of asynchronous programming (Promises, async/await).",
      "Familiarity with database concepts and RESTful API integration.",
      "Good written communication skills for remote teamwork."
    ],
    skills: ["JavaScript", "Node.js", "Express", "HTML/CSS", "Git"],
    perks: [
      "100% Remote, choose your own working hours",
      "Official Certificate of Internship Completion",
      "Verified recommendation letter from lead engineering director",
      "Pre-Placement Offer (PPO) opportunity"
    ],
    posted: "Just now"
  }
];

/* ============================================================================
   2. APPLICATION STATE & DOM ELEMENT SELECTORS
   ============================================================================ */
const state = {
  allInternships: [...internshipsData],
  filteredInternships: [...internshipsData],
  searchQuery: "",
  domainFilter: "",
  locationFilter: "",
  typeFilter: "",
  activeInternship: null,
  lastFocusedElement: null
};

// Cached DOM Elements
const dom = {
  // Mobile Nav Toggle
  menuToggle: document.getElementById("menu-toggle"),
  siteNav: document.getElementById("primary-navigation"),
  navLinks: document.querySelectorAll(".nav-link"),

  // Search & Filter Form Elements
  filterForm: document.getElementById("filter-form"),
  searchInput: document.getElementById("search-input"),
  domainFilter: document.getElementById("domain-filter"),
  locationFilter: document.getElementById("location-filter"),
  typeFilter: document.getElementById("type-filter"),
  clearFiltersBtn: document.getElementById("clear-filters-btn"),

  // Results & Listing Containers
  resultsCount: document.getElementById("results-count"),
  activeFilterTags: document.getElementById("active-filter-tags"),
  internshipsGrid: document.getElementById("internships-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyClearBtn: document.getElementById("empty-clear-btn"),
  errorState: document.getElementById("error-state"),
  retryBtn: document.getElementById("retry-btn"),

  // Details Modal Elements
  modal: document.getElementById("details-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalCompany: document.getElementById("modal-company"),
  modalTitle: document.getElementById("modal-title"),
  modalDomain: document.getElementById("modal-domain"),
  modalLocation: document.getElementById("modal-location"),
  modalType: document.getElementById("modal-type"),
  modalDuration: document.getElementById("modal-duration"),
  modalStipend: document.getElementById("modal-stipend"),
  modalPosted: document.getElementById("modal-posted"),
  modalDescription: document.getElementById("modal-description"),
  modalResponsibilities: document.getElementById("modal-responsibilities"),
  modalRequirements: document.getElementById("modal-requirements"),
  modalSkills: document.getElementById("modal-skills"),
  modalPerks: document.getElementById("modal-perks"),

  // Application Form Inside Modal
  applyForm: document.getElementById("apply-form"),
  applySuccessBox: document.getElementById("apply-success-box"),
  modalCancelBtns: document.querySelectorAll(".modal-cancel-btn"),

  // Footer Domain Quick Filters
  footerDomainLinks: document.querySelectorAll("[data-filter-domain]")
};

/* ============================================================================
   3. CORE FILTER & SEARCH LOGIC
   ============================================================================ */

/**
 * Filter the internships dataset based on search text and dropdown selections.
 */
function applyFilters() {
  try {
    const query = state.searchQuery.trim().toLowerCase();
    const selectedDomain = state.domainFilter;
    const selectedLocation = state.locationFilter;
    const selectedType = state.typeFilter;

    state.filteredInternships = state.allInternships.filter((item) => {
      // 1. Text Search matching title, company, domain, or skills
      const matchesSearch =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.domain.toLowerCase().includes(query) ||
        item.skills.some((skill) => skill.toLowerCase().includes(query));

      // 2. Domain Filter
      const matchesDomain =
        selectedDomain === "" || item.domain === selectedDomain;

      // 3. Location Filter (matches either location name e.g. Bengaluru, or type e.g. Remote)
      const matchesLocation =
        selectedLocation === "" ||
        item.location.toLowerCase() === selectedLocation.toLowerCase() ||
        item.locationType.toLowerCase() === selectedLocation.toLowerCase();

      // 4. Internship Type Filter (Full-time vs Part-time)
      const matchesType =
        selectedType === "" || item.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesDomain && matchesLocation && matchesType;
    });

    renderInternshipCards();
    updateResultsCount();
    updateActiveFilterTags();
  } catch (error) {
    console.error("Error applying filters:", error);
    showErrorState();
  }
}

/**
 * Reset all filter inputs, clear search query, and show all internships again.
 */
function resetAllFilters() {
  try {
    state.searchQuery = "";
    state.domainFilter = "";
    state.locationFilter = "";
    state.typeFilter = "";

    if (dom.searchInput) dom.searchInput.value = "";
    if (dom.domainFilter) dom.domainFilter.value = "";
    if (dom.locationFilter) dom.locationFilter.value = "";
    if (dom.typeFilter) dom.typeFilter.value = "";

    hideErrorState();
    applyFilters();

    // Accessible UX: refocus search input for smooth user flow
    if (dom.searchInput) {
      dom.searchInput.focus();
    }
  } catch (error) {
    console.error("Error resetting filters:", error);
    showErrorState();
  }
}

/* ============================================================================
   4. DOM RENDERING LOGIC
   Dynamically generates cards from the data array. No hard-coded HTML cards.
   ============================================================================ */

/**
 * Render the filtered list of internship cards into the DOM.
 */
function renderInternshipCards() {
  try {
    // Hide error state on valid render
    hideErrorState();

    const count = state.filteredInternships.length;

    // Check for Empty State
    if (count === 0) {
      if (dom.internshipsGrid) dom.internshipsGrid.innerHTML = "";
      if (dom.emptyState) dom.emptyState.hidden = false;
      return;
    }

    if (dom.emptyState) dom.emptyState.hidden = true;

    // Build cards dynamically using DocumentFragment for maximum performance
    const fragment = document.createDocumentFragment();

    state.filteredInternships.forEach((item) => {
      const card = createCardElement(item);
      fragment.appendChild(card);
    });

    if (dom.internshipsGrid) {
      dom.internshipsGrid.innerHTML = "";
      dom.internshipsGrid.appendChild(fragment);
    }
  } catch (error) {
    console.error("Error rendering internship cards:", error);
    showErrorState();
  }
}

/**
 * Create a single semantic internship card element.
 * @param {Object} item - Internship object
 * @returns {HTMLElement} - The article card element
 */
function createCardElement(item) {
  const article = document.createElement("article");
  article.className = "internship-card";
  article.setAttribute("data-id", item.id);
  article.setAttribute("aria-labelledby", `card-title-${item.id}`);

  // Skills HTML markup
  const skillsMarkup = item.skills
    .slice(0, 4) // Show top 4 skills on card
    .map((skill) => `<span class="skill-tag">${escapeHTML(skill)}</span>`)
    .join("");

  article.innerHTML = `
    <div class="card-header">
      <div class="card-top-meta">
        <span class="card-domain-badge">${escapeHTML(item.domain)}</span>
        <span class="card-posted-date">${escapeHTML(item.posted)}</span>
      </div>
      <h3 id="card-title-${item.id}" class="card-title">${escapeHTML(item.title)}</h3>
      <p class="card-company">${escapeHTML(item.company)}</p>

      <div class="card-details-meta">
        <span>${escapeHTML(item.location)}</span>
        <span class="meta-divider" aria-hidden="true">·</span>
        <span>${escapeHTML(item.type)}</span>
        <span class="meta-divider" aria-hidden="true">·</span>
        <span>${escapeHTML(item.duration)}</span>
        <span class="meta-divider" aria-hidden="true">·</span>
        <span class="stipend-highlight">${escapeHTML(item.stipend)}</span>
      </div>
    </div>

    <p class="card-description">${escapeHTML(item.description)}</p>

    <div class="card-skills-row" aria-label="Skills required">
      ${skillsMarkup}
    </div>

    <div class="card-footer">
      <span class="card-location-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        ${escapeHTML(item.locationType)}
      </span>
      <button 
        type="button" 
        class="btn btn-primary view-details-btn" 
        data-internship-id="${item.id}"
        aria-label="View full details and apply for ${escapeHTML(item.title)} at ${escapeHTML(item.company)}">
        View Details
      </button>
    </div>
  `;

  // Attach click listener for details button
  const detailsBtn = article.querySelector(".view-details-btn");
  if (detailsBtn) {
    detailsBtn.addEventListener("click", () => openDetailsModal(item.id, detailsBtn));
  }

  return article;
}

/**
 * Update the live results counter text for accessibility and clarity.
 */
function updateResultsCount() {
  if (!dom.resultsCount) return;

  const total = state.allInternships.length;
  const filtered = state.filteredInternships.length;

  if (filtered === total) {
    dom.resultsCount.textContent = `Showing all ${total} internships`;
  } else if (filtered === 1) {
    dom.resultsCount.textContent = `Showing 1 internship (${total} total)`;
  } else if (filtered === 0) {
    dom.resultsCount.textContent = `No internships match your criteria (${total} total)`;
  } else {
    dom.resultsCount.textContent = `Showing ${filtered} of ${total} internships`;
  }
}

/**
 * Display active filter tags next to the results counter.
 */
function updateActiveFilterTags() {
  if (!dom.activeFilterTags) return;

  const tags = [];

  if (state.searchQuery.trim() !== "") {
    tags.push(`Search: "${state.searchQuery.trim()}"`);
  }
  if (state.domainFilter !== "") {
    tags.push(`Domain: ${state.domainFilter}`);
  }
  if (state.locationFilter !== "") {
    tags.push(`Location: ${state.locationFilter}`);
  }
  if (state.typeFilter !== "") {
    tags.push(`Type: ${state.typeFilter}`);
  }

  if (tags.length === 0) {
    dom.activeFilterTags.innerHTML = "";
    return;
  }

  dom.activeFilterTags.innerHTML = tags
    .map((tag) => `<span class="filter-chip">${escapeHTML(tag)}</span>`)
    .join("");
}

/* ============================================================================
   5. MODAL DIALOG & ACCESSIBILITY MANAGEMENT
   ============================================================================ */

/**
 * Open the details dialog modal for a specific internship.
 * @param {number} id - The internship ID
 * @param {HTMLElement} triggerBtn - The button that triggered the modal
 */
function openDetailsModal(id, triggerBtn) {
  try {
    const internship = state.allInternships.find((item) => item.id === Number(id));
    if (!internship || !dom.modal) return;

    state.activeInternship = internship;
    state.lastFocusedElement = triggerBtn || document.activeElement;

    // Populate modal content
    if (dom.modalCompany) dom.modalCompany.textContent = internship.company;
    if (dom.modalTitle) dom.modalTitle.textContent = internship.title;
    if (dom.modalDomain) dom.modalDomain.textContent = internship.domain;
    if (dom.modalLocation) dom.modalLocation.textContent = `${internship.location} (${internship.locationType})`;
    if (dom.modalType) dom.modalType.textContent = internship.type;
    if (dom.modalDuration) dom.modalDuration.textContent = internship.duration;
    if (dom.modalStipend) dom.modalStipend.textContent = internship.stipend;
    if (dom.modalPosted) dom.modalPosted.textContent = internship.posted;
    if (dom.modalDescription) dom.modalDescription.textContent = internship.fullDescription;

    // Responsibilities list
    if (dom.modalResponsibilities) {
      dom.modalResponsibilities.innerHTML = internship.responsibilities
        .map((r) => `<li>${escapeHTML(r)}</li>`)
        .join("");
    }

    // Requirements list
    if (dom.modalRequirements) {
      dom.modalRequirements.innerHTML = internship.requirements
        .map((req) => `<li>${escapeHTML(req)}</li>`)
        .join("");
    }

    // Skills list
    if (dom.modalSkills) {
      dom.modalSkills.innerHTML = internship.skills
        .map((s) => `<span class="skill-tag">${escapeHTML(s)}</span>`)
        .join("");
    }

    // Perks list
    if (dom.modalPerks) {
      dom.modalPerks.innerHTML = internship.perks
        .map((p) => `<li>${escapeHTML(p)}</li>`)
        .join("");
    }

    // Reset application form states
    resetApplicationForm();

    // Show native dialog modal
    if (typeof dom.modal.showModal === "function") {
      dom.modal.showModal();
    } else {
      // Fallback for older browsers
      dom.modal.setAttribute("open", "true");
    }

    // Focus the close button for instant keyboard accessibility
    if (dom.modalCloseBtn) {
      dom.modalCloseBtn.focus();
    }
  } catch (error) {
    console.error("Error opening details modal:", error);
  }
}

/**
 * Close the details dialog modal and return keyboard focus to trigger element.
 */
function closeDetailsModal() {
  if (!dom.modal) return;

  if (typeof dom.modal.close === "function") {
    dom.modal.close();
  } else {
    dom.modal.removeAttribute("open");
  }

  state.activeInternship = null;

  // Restore focus to the button that opened the modal (WCAG AA requirement)
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

/**
 * Reset application form fields and hide success notification.
 */
function resetApplicationForm() {
  if (dom.applyForm) {
    dom.applyForm.reset();
    dom.applyForm.hidden = false;
    // Clear any previous validation errors
    dom.applyForm.querySelectorAll(".form-group").forEach((grp) => {
      grp.classList.remove("has-error");
    });
  }

  if (dom.applySuccessBox) {
    dom.applySuccessBox.hidden = true;
  }
}

/**
 * Handle submission of the internship application form.
 * @param {Event} event - Submit event
 */
function handleApplicationSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("applicant-name");
  const emailInput = document.getElementById("applicant-email");
  const collegeInput = document.getElementById("applicant-college");

  let isValid = true;

  // Validate Name
  if (!nameInput || nameInput.value.trim().length === 0) {
    markFieldError(nameInput, true);
    isValid = false;
  } else {
    markFieldError(nameInput, false);
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
    markFieldError(emailInput, true);
    isValid = false;
  } else {
    markFieldError(emailInput, false);
  }

  // Validate College
  if (!collegeInput || collegeInput.value.trim().length === 0) {
    markFieldError(collegeInput, true);
    isValid = false;
  } else {
    markFieldError(collegeInput, false);
  }

  if (!isValid) return;

  // Application successfully submitted
  if (dom.applyForm) dom.applyForm.hidden = true;
  if (dom.applySuccessBox) dom.applySuccessBox.hidden = false;
}

/**
 * Helper to show/hide validation errors on form groups.
 */
function markFieldError(inputElement, hasError) {
  if (!inputElement) return;
  const formGroup = inputElement.closest(".form-group");
  if (formGroup) {
    if (hasError) {
      formGroup.classList.add("has-error");
    } else {
      formGroup.classList.remove("has-error");
    }
  }
}

/* ============================================================================
   6. ERROR STATE HANDLING
   ============================================================================ */

/**
 * Show a user-friendly error container when data processing fails.
 */
function showErrorState() {
  if (dom.internshipsGrid) dom.internshipsGrid.innerHTML = "";
  if (dom.emptyState) dom.emptyState.hidden = true;
  if (dom.errorState) dom.errorState.hidden = false;
  if (dom.resultsCount) dom.resultsCount.textContent = "Unable to load internships.";
}

/**
 * Hide the error container.
 */
function hideErrorState() {
  if (dom.errorState) dom.errorState.hidden = true;
}

/**
 * Retry rendering and recovering application data.
 */
function handleRetry() {
  try {
    hideErrorState();
    state.allInternships = [...internshipsData];
    applyFilters();
  } catch (err) {
    console.error("Retry failed:", err);
    showErrorState();
  }
}

/* ============================================================================
   7. NAVIGATION & ACCESSIBILITY CONTROLS
   ============================================================================ */

/**
 * Toggle mobile navigation menu with ARIA attributes.
 */
function toggleMobileMenu() {
  if (!dom.menuToggle || !dom.siteNav) return;

  const isExpanded = dom.menuToggle.getAttribute("aria-expanded") === "true";
  const nextState = !isExpanded;

  dom.menuToggle.setAttribute("aria-expanded", String(nextState));
  dom.siteNav.classList.toggle("open", nextState);
}

/**
 * Close mobile navigation menu.
 */
function closeMobileMenu() {
  if (!dom.menuToggle || !dom.siteNav) return;
  dom.menuToggle.setAttribute("aria-expanded", "false");
  dom.siteNav.classList.remove("open");
}

/* ============================================================================
   8. UTILITY FUNCTIONS
   ============================================================================ */

/**
 * Sanitize strings to prevent XSS attacks when dynamically inserting HTML.
 * @param {string} str - Raw string
 * @returns {string} - Sanitized string
 */
function escapeHTML(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ============================================================================
   9. EVENT LISTENERS INITIALIZATION
   ============================================================================ */
function initEventListeners() {
  // 1. Search Input Event (immediate updates as user types)
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });
  }

  // 2. Domain Filter Dropdown
  if (dom.domainFilter) {
    dom.domainFilter.addEventListener("change", (e) => {
      state.domainFilter = e.target.value;
      applyFilters();
    });
  }

  // 3. Location Filter Dropdown
  if (dom.locationFilter) {
    dom.locationFilter.addEventListener("change", (e) => {
      state.locationFilter = e.target.value;
      applyFilters();
    });
  }

  // 4. Type Filter Dropdown
  if (dom.typeFilter) {
    dom.typeFilter.addEventListener("change", (e) => {
      state.typeFilter = e.target.value;
      applyFilters();
    });
  }

  // 5. Clear Filters Buttons
  if (dom.clearFiltersBtn) {
    dom.clearFiltersBtn.addEventListener("click", resetAllFilters);
  }
  if (dom.emptyClearBtn) {
    dom.emptyClearBtn.addEventListener("click", resetAllFilters);
  }

  // 6. Retry Button in Error State
  if (dom.retryBtn) {
    dom.retryBtn.addEventListener("click", handleRetry);
  }

  // 7. Details Modal Events
  if (dom.modalCloseBtn) {
    dom.modalCloseBtn.addEventListener("click", closeDetailsModal);
  }

  if (dom.modalCancelBtns) {
    dom.modalCancelBtns.forEach((btn) => {
      btn.addEventListener("click", closeDetailsModal);
    });
  }

  // Click outside dialog body to dismiss
  if (dom.modal) {
    dom.modal.addEventListener("click", (e) => {
      // If clicking the modal backdrop
      if (e.target === dom.modal) {
        closeDetailsModal();
      }
    });

    // Native cancel event (Escape key pressed)
    dom.modal.addEventListener("cancel", (e) => {
      e.preventDefault(); // Prevent native abrupt close to handle focus restoration cleanly
      closeDetailsModal();
    });
  }

  // Application Form Submit
  if (dom.applyForm) {
    dom.applyForm.addEventListener("submit", handleApplicationSubmit);
  }

  // 8. Mobile Navigation Toggle
  if (dom.menuToggle) {
    dom.menuToggle.addEventListener("click", toggleMobileMenu);
  }

  // Close mobile navigation when a nav link is clicked
  if (dom.navLinks) {
    dom.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();

        // Update active class
        dom.navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  // 9. Global Keyboard Handling (Escape key dismissals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close modal if open
      if (dom.modal && dom.modal.open) {
        closeDetailsModal();
      }
      // Close mobile menu if expanded
      if (dom.siteNav && dom.siteNav.classList.contains("open")) {
        closeMobileMenu();
      }
    }
  });

  // 10. Footer Domain Quick Filters
  if (dom.footerDomainLinks) {
    dom.footerDomainLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const domain = link.getAttribute("data-filter-domain");
        if (domain && dom.domainFilter) {
          dom.domainFilter.value = domain;
          state.domainFilter = domain;
          applyFilters();
        }
      });
    });
  }
}

/* ============================================================================
   10. APPLICATION INITIALIZATION
   ============================================================================ */
function init() {
  try {
    initEventListeners();
    applyFilters();
  } catch (error) {
    console.error("Initialization error:", error);
    showErrorState();
  }
}

// Kick off when DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
