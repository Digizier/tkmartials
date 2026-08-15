import { Product, ServiceItem, LeadershipMember, SiteConfig } from './types';

export const initialSiteConfig: SiteConfig = {
  companyName: "Martials Integrated Consulting",
  tagline: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent",
  phoneDisplay: "0301-8486800",
  phoneClean: "+923018486800",
  whatsappDisplay: "0315-4362911",
  whatsappClean: "+923154362911",
  email: "info@tkmartials.com",
  guestEmail: "editor@tkmartials.com",
  advertiseEmail: "advertise@tkmartials.com",
  addressNotice: "Martials Corporate Head Office is transitioning to an upgraded central facility. Consultations, client briefings, and procurement orders are actively facilitated via Phone & WhatsApp.",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217596.1555546252!2d74.20235472856445!3d31.520369599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  copyrightText: "© 2026 Martials Integrated Consulting — Textile • Insurance • Technology • Education • HR. All Rights Reserved.",
  heroHeadline: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent",
  heroSubheading: "We provide strategic consulting and operational support in Textile Raw Materials, General Insurance, Technology Utilities, Education Advisory, and HR Operations, helping organizations and individuals make confident, future-ready decisions."
};

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    name: "Grade-A Raw Cotton Bales",
    category: "Textile",
    price: "Call for Spot Rate",
    moq: "50 Metric Tons",
    description: "Premium staple length ginned raw cotton sourced directly from vetted domestic and international ginning networks for spinning mills.",
    features: ["Staple Length: 28-30mm", "Strength: 28-30 g/tex", "Micronaire: 3.8 - 4.5", "Low trash content (<3%)"],
    image: "/assets/textile_raw_materials.jpg",
    badge: "Fast Sourcing",
    isAvailable: true
  },
  {
    id: "prod-2",
    name: "Combed Spun Cotton Yarn (30s/1 & 40s/1)",
    category: "Textile",
    price: "Competitive Mill Direct",
    moq: "20 Bales (400 lbs/bale)",
    description: "High-tenacity ring spun combed cotton yarn engineered for precision knitting and warp-directional weaving applications.",
    features: ["Count: 30s/1 & 40s/1", "High CSP & low CV%", "Uniform twist & minimal hairiness", "Knitting & Weaving Grade"],
    image: "/assets/textile_fibers_catalog.jpg",
    badge: "Best Seller",
    isAvailable: true
  },
  {
    id: "prod-3",
    name: "Martials SME ERP & Supply Chain Suite",
    category: "Technology",
    price: "Custom Tiered License",
    moq: "Single Enterprise Deployment",
    description: "Turnkey business productivity software integrating real-time inventory tracking, warehouse logistics, and executive analytics dashboards.",
    features: ["Multi-warehouse inventory", "Order & dispatch tracking", "Automated financial ledgers", "Mobile-ready analytics"],
    image: "/assets/technology_software_utility.jpg",
    badge: "Cloud Utility",
    isAvailable: true
  },
  {
    id: "prod-4",
    name: "Global University Admission & Visa Package",
    category: "Education",
    price: "Consultation Advisory",
    moq: "Per Student Track",
    description: "Comprehensive end-to-end guidance for undergraduate and postgraduate admissions in UK, Australia, Europe, USA, and Canada.",
    features: ["Program & University Selection", "SOP & Essay Guidance", "Scholarship Matching", "Visa Documentation Support"],
    image: "/assets/student_education_advisory.jpg",
    badge: "High Acceptance",
    isAvailable: true
  },
  {
    id: "prod-5",
    name: "Marine Cargo & Transit Risk Cover",
    category: "Insurance",
    price: "Custom Underwriting Quote",
    moq: "Single Consignment or Annual",
    description: "Structured Marine Insurance policy advisory protecting import/export cargo against maritime, transit, and port hazards.",
    features: ["Institute Cargo Clauses (A/B/C)", "Door-to-door transit coverage", "Expedited claims facilitation", "Competitive broker rates"],
    image: "/assets/general_insurance_marine.jpg",
    badge: "Asset Shield",
    isAvailable: true
  },
  {
    id: "prod-6",
    name: "B2B Sales & Direct Brand Growth Sprint",
    category: "Consulting",
    price: "Monthly Retainer",
    moq: "Quarterly Engagement",
    description: "Full-scale corporate sales campaign, Brand Ambassador deployment, and multichannel digital lead acquisition for enterprises.",
    features: ["Targeted B2B pipeline build", "Trained brand ambassadors", "LinkedIn & direct selling funnels", "Dedicated project manager"],
    image: "/assets/sales_marketing_growth.jpg",
    badge: "Growth Engine",
    isAvailable: true
  }
];

export const initialServices: ServiceItem[] = [
  {
    id: "serv-1",
    slug: "textile-consulting",
    title: "Textile Raw Materials Consulting",
    tagline: "End-to-end advisory and sourcing support across the global textile value chain.",
    description: "We specialize in advisory and sourcing support for the textile value chain, enabling cost efficiency, quality consistency, and supply chain reliability for manufacturers and traders.",
    image: "/assets/textile_raw_materials.jpg",
    iconName: "Layers",
    bullets: [
      "Cotton, yarn, fabric, and blended raw material sourcing",
      "Local and international supplier coordination & vetting",
      "Global price trends, index tracking, and market intelligence",
      "Quality assurance, lab testing, and compliance advisory",
      "Import/export documentation & customs clearance support",
      "Cost optimization and structured procurement strategies"
    ],
    seoKeywords: ["Textile consulting Pakistan", "textile raw materials", "cotton sourcing", "yarn sourcing", "fabric procurement"]
  },
  {
    id: "serv-2",
    slug: "general-insurance-advisory",
    title: "General Insurance Advisory",
    tagline: "Structuring corporate and commercial risk coverage to protect assets, operations, and people.",
    description: "Our insurance advisory services are designed to protect enterprises against financial exposure through structured risk coverage, rigorous policy review, and dedicated claims settlement advocacy.",
    image: "/assets/general_insurance_marine.jpg",
    iconName: "ShieldCheck",
    bullets: [
      "Marine insurance for global imports and exports",
      "Fire, property, and business interruption coverage",
      "Engineering, machinery breakdown, and project insurance",
      "Corporate health, OPD, and group life policies",
      "Commercial motor and fleet vehicle insurance",
      "Fast-track claims advisory and dispute settlement support"
    ],
    seoKeywords: ["Insurance advisory Pakistan", "marine cargo insurance", "corporate insurance", "engineering project insurance"]
  },
  {
    id: "serv-3",
    slug: "technology-utility-solutions",
    title: "Technology Products & Utility Solutions",
    tagline: "Adopting smart business utilities and productivity software for modern enterprises.",
    description: "We assist businesses in adopting technology utilities and productivity tools that enhance operational visibility, reduce overheads, and streamline workflow automation.",
    image: "/assets/technology_software_utility.jpg",
    iconName: "Cpu",
    bullets: [
      "Business productivity software and utility tooling",
      "Sales, asset, and operations management systems",
      "Supply chain and real-time inventory tracking tools",
      "Executive reporting dashboards and business intelligence",
      "Cloud architecture and digital modernization for SMEs"
    ],
    seoKeywords: ["Business software Pakistan", "supply chain ERP", "productivity tools", "reporting dashboards"]
  },
  {
    id: "serv-4",
    slug: "student-education-advisory",
    title: "Student Education Advisory",
    tagline: "Structured educational guidance for confident academic and career decisions worldwide.",
    description: "We provide structured education counseling to help students, parents, and professionals make informed academic choices, select the best global universities, and navigate admissions with ease.",
    image: "/assets/student_education_advisory.jpg",
    iconName: "GraduationCap",
    bullets: [
      "One-on-one career counseling and academic planning",
      "Local and prestigious international admissions guidance",
      "University, program, and scholarship eligibility matching",
      "Application review, statement of purpose (SOP) polishing",
      "Visa interview preparation and financial documentation aid"
    ],
    seoKeywords: ["Education consultancy Pakistan", "study abroad advisory", "student visa counseling", "university admissions"]
  },
  {
    id: "serv-5",
    slug: "hr-operations-workforce-solutions",
    title: "HR Operations & Workforce Solutions",
    tagline: "Streamlining people operations, talent recruitment, and corporate compliance.",
    description: "Our HR consulting services help organizations design robust people operations, attract top-tier talent, maintain legal compliance, and elevate overall workforce performance.",
    image: "/assets/hr_workforce_solutions.jpg",
    iconName: "Users",
    bullets: [
      "HR process design, SOP structuring, and workflow optimization",
      "Executive search, headhunting, and talent sourcing",
      "Payroll administration and HR compliance advisory",
      "Employee handbook, contract, and policy documentation",
      "Fully outsourced HR operations for growing companies"
    ],
    seoKeywords: ["HR consultancy Pakistan", "recruitment support", "payroll outsourcing", "HR operations"]
  },
  {
    id: "serv-6",
    slug: "sales-marketing-services",
    title: "Direct Sales & Marketing Services",
    tagline: "Managing company product selling, brand tone, lead generation, and visibility.",
    description: "Martials develops cutting-edge lead-generating campaigns through social media and direct B2B selling. Build trust with your audience and turn market reputation into sustainable revenue.",
    image: "/assets/sales_marketing_growth.jpg",
    iconName: "TrendingUp",
    bullets: [
      "B2B sales activations and enterprise client outreach",
      "One-on-one sales campaigns at strategic commercial venues",
      "Hiring and managing specialized Brand Ambassadors",
      "Marketing campaigns executed via dedicated Project Managers",
      "Press release distribution across top HR & marketing networks",
      "Nothing ever goes live without your explicit approval"
    ],
    seoKeywords: ["B2B sales services Pakistan", "direct marketing agency", "brand ambassador campaigns", "lead generation"]
  }
];

export const leadershipData: LeadershipMember[] = [
  {
    name: "Muhammad Talha Khan",
    role: "Chief Executive Officer (CEO)",
    bio: "A strategic visionary leader with extensive cross-sector experience in international trade facilitation, industrial textile raw materials, risk management, and enterprise technology adoption. Dedicated to driving sustainable client growth through market intelligence and disciplined execution.",
    image: "/assets/talha_khan_ceo.jpg",
    highlights: [
      "20+ Years Cross-Sector Leadership",
      "Textile & Trade Sourcing Pioneer",
      "Enterprise Transformation Advisor"
    ]
  },
  {
    name: "Arooj Khalid",
    role: "Director of Operations",
    bio: "An operations-focused executive overseeing client engagement, service delivery excellence, and cross-functional performance across all consulting verticals with a focus on precision and client satisfaction.",
    image: "/assets/director_aroj_khalid.jpg",
    highlights: [
      "Client Engagement Strategy",
      "Operations & Workflow Streamlining",
      "Cross-Vertical Execution Lead"
    ]
  }
];

export const cultureValues = [
  { title: "Simplicity", desc: "We eliminate friction and present actionable clarity in complex business ecosystems." },
  { title: "Diversity", desc: "We embrace diverse perspectives, talent pools, and global market horizons." },
  { title: "Leadership", desc: "We champion proactive decision-making, ethical guidance, and decisive execution." },
  { title: "Collaborations", desc: "We build enduring partnerships grounded in mutual trust and long-term value." },
  { title: "Integrity", desc: "Uncompromising transparency, compliance, and ethical standards across all engagements." },
  { title: "Happiness", desc: "Creating a positive, empowering environment for our team, clients, and partners." }
];

export const blogPosts = [
  {
    id: "blog-1",
    title: "Global Cotton & Yarn Market Trends: Navigating Supply Chain Volatility in 2026",
    category: "Textile",
    date: "August 2026",
    summary: "An in-depth analysis of international raw cotton indices, spinning mill procurement strategies, and synthetic blend dynamics.",
    image: "/assets/textile_fibers_catalog.jpg"
  },
  {
    id: "blog-2",
    title: "Marine Cargo Risk Mitigation: Why Standard Coverage Is No Longer Enough",
    category: "Insurance",
    date: "July 2026",
    summary: "How modern import/export traders in South Asia and the Middle East are structuring clause-A protection against maritime disruptions.",
    image: "/assets/general_insurance_marine.jpg"
  },
  {
    id: "blog-3",
    title: "Why Modern SMEs Need Automated Utility Tools Over Monolithic ERPs",
    category: "Technology",
    date: "June 2026",
    summary: "Discover the cost and efficiency advantages of modular business utilities over bloated legacy software.",
    image: "/assets/technology_software_utility.jpg"
  }
];
