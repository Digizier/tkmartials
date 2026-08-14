import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zwgyabaakbkmczjcjdzf.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjcyMjc5OSwiZXhwIjoyMTAyMjk4Nzk5fQ.UKkRcC0HXcDonDzShJDfcyycfJpTpYuMVqA-vOfu77c";

const sql = `
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price TEXT NOT NULL,
  moq TEXT,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  image TEXT,
  badge TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_config (
  id TEXT PRIMARY KEY DEFAULT 'main',
  phone_display TEXT,
  phone_clean TEXT,
  whatsapp_display TEXT,
  whatsapp_clean TEXT,
  email TEXT,
  guest_email TEXT,
  advertise_email TEXT,
  address_notice TEXT,
  google_map_embed_url TEXT,
  hero_headline TEXT,
  hero_subheading TEXT,
  copyright_text TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Products" ON public.products;
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Products" ON public.products;
CREATE POLICY "Public Insert Products" ON public.products FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Update Products" ON public.products;
CREATE POLICY "Public Update Products" ON public.products FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public Delete Products" ON public.products;
CREATE POLICY "Public Delete Products" ON public.products FOR DELETE USING (true);

DROP POLICY IF EXISTS "Public Read Config" ON public.site_config;
CREATE POLICY "Public Read Config" ON public.site_config FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Upsert Config" ON public.site_config;
CREATE POLICY "Public Upsert Config" ON public.site_config FOR ALL USING (true);
`;

async function executeViaRest() {
  console.log("Trying Supabase SQL REST execution...");
  
  // Try via /pg /sql endpoint
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: {
      'apikey': SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: sql })
  });

  console.log("RPC exec_sql status:", res.status);
  const text = await res.text();
  console.log("RPC response:", text);
}

executeViaRest();
