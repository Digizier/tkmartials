import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zwgyabaakbkmczjcjdzf.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjcyMjc5OSwiZXhwIjoyMTAyMjk4Nzk5fQ.UKkRcC0HXcDonDzShJDfcyycfJpTpYuMVqA-vOfu77c";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const initialProducts = [
  {
    id: "prod-cotton-bales",
    name: "Raw Natural Cotton Bales (Grade A)",
    category: "Textile",
    price: "Call for Daily Spot Rate",
    moq: "50 Metric Tons (approx. 220 Bales)",
    description: "Export-grade raw cotton with 28-30mm staple length, micronaire 3.8-4.2, and minimal trash content. Sourced directly from premier ginning mills across Southern Punjab and Sindh.",
    features: ["Staple Length: 28-30mm", "Strength: 29-31 g/tex", "Micronaire: 3.8 - 4.2", "Direct Ginning Origin"],
    image: "/assets/textile_raw_materials.jpg",
    badge: "Spot Available",
    is_available: true
  },
  {
    id: "prod-ring-spun-yarn",
    name: "Carded & Combed Ring Spun Yarn (20s/1 to 40s/1)",
    category: "Textile",
    price: "PKR 14,800 - 18,500 / Bag",
    moq: "100 Bags (1,000 lbs)",
    description: "Precision-spun 100% virgin cotton yarn engineered for high-speed weaving and circular knitting with high tensile strength and minimal hairiness.",
    features: ["Counts: 20s/1, 30s/1, 40s/1", "High CSP & Auto-Coner Winding", "Low Uster CV%"],
    image: "/assets/textile_fibers_catalog.jpg",
    badge: "Fast Delivery",
    is_available: true
  },
  {
    id: "prod-marine-insurance",
    name: "Marine Cargo Risk Coverage Advisory",
    category: "Insurance",
    price: "Custom Underwriting Quote",
    moq: "Per Shipment or Annual Policy",
    description: "Full transit coverage for import/export containers covering ICC(A) all-risks, port congestion, general average, and damage compensation with licensed underwriters.",
    features: ["ICC(A) All Risks Coverage", "Zero Deductible Options", "Rapid Claim Settlement"],
    image: "/assets/general_insurance_marine.jpg",
    badge: "Advisory",
    is_available: true
  },
  {
    id: "prod-sme-erp",
    name: "Martials SME Cloud ERP & Sourcing Utility",
    category: "Technology",
    price: "Starting at $49 / Month",
    moq: "Single Enterprise Instance",
    description: "Lightweight inventory tracking, purchase orders, client invoicing, and textile batch tracking with zero cloud bloat.",
    features: ["Inventory & Batch Sourcing", "WhatsApp Invoice Alerts", "Multi-User Access"],
    image: "/assets/technology_software_utility.jpg",
    badge: "Software",
    is_available: true
  },
  {
    id: "prod-study-abroad",
    name: "Global University Admission Assessment",
    category: "Education",
    price: "Free Initial Profile Assessment",
    moq: "Individual Candidate",
    description: "One-on-one educational pathway consulting for UK, Australia, Europe, and North American universities with visa documentation and scholarship guidance.",
    features: ["Direct University Partner Links", "Statement of Purpose Guidance", "100% Visa Filing Support"],
    image: "/assets/student_education_advisory.jpg",
    badge: "Advisory",
    is_available: true
  },
  {
    id: "prod-b2b-growth",
    name: "Direct Sourcing & B2B Sales Acceleration",
    category: "Consulting",
    price: "Retainer + Performance Model",
    moq: "Quarterly Engagement",
    description: "Dedicated market penetration and buyer-matching services for manufacturers and traders seeking qualified bulk commercial buyers.",
    features: ["Verified Buyer Introductions", "Contract Negotiation Support", "Targeted Multi-Channel Reach"],
    image: "/assets/sales_marketing_growth.jpg",
    badge: "Growth",
    is_available: true
  }
];

const initialSiteConfig = {
  id: "main",
  phone_display: "0301-8486800",
  phone_clean: "+923018486800",
  whatsapp_display: "0315-4362911",
  whatsapp_clean: "+923154362911",
  email: "martialswebsite@gmail.com",
  guest_email: "editor@martials.com",
  advertise_email: "Advertise@martials.com",
  address_notice: "Our current office is transitioning to an upgraded corporate facility within the next 30 days. For scheduled in-person meetings, please confirm with our coordinator via phone or WhatsApp.",
  google_map_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817837703!2d74.0541999238383!3d31.483220875225134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  hero_headline: "Strategic Multi-Sector Facilitation Across Global Trade, Risk Mitigation, Enterprise Software & Talent Operations",
  hero_subheading: "Martials delivers end-to-end consulting, raw material sourcing, and specialized corporate services to help businesses scale reliably and cost-effectively.",
  copyright_text: "© 2026 Martials Integrated Consulting. All Rights Reserved."
};

async function seedData() {
  console.log("Seeding site_config...");
  const { error: configErr } = await supabase.from('site_config').upsert(initialSiteConfig);
  console.log("site_config upsert result:", configErr ? configErr.message : "SUCCESS!");

  console.log("Seeding products...");
  const { error: prodErr } = await supabase.from('products').upsert(initialProducts);
  console.log("products upsert result:", prodErr ? prodErr.message : "SUCCESS!");

  // Verify fetch
  console.log("Verifying products fetch from Supabase...");
  const { data, error } = await supabase.from('products').select('*');
  console.log(`Fetched ${data?.length || 0} products from Supabase.`);
  if (data && data.length > 0) {
    console.log("Sample product from DB:", data[0].name);
  }
}

seedData();
