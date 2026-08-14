import pg from 'pg';
const { Client } = pg;

const regions = [
  'ap-southeast-1',
  'us-east-1',
  'eu-central-1',
  'ap-northeast-1',
  'ap-south-1',
  'us-west-1',
  'eu-west-1',
  'sa-east-1'
];

async function tryPooler() {
  for (const r of regions) {
    const host = `aws-0-${r}.pooler.supabase.com`;
    console.log(`Trying pooler host: ${host}...`);
    const client = new Client({
      host,
      port: 6543,
      user: 'postgres.zwgyabaakbkmczjcjdzf',
      password: 'tkmartials@#&123@#',
      database: 'postgres',
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 4000
    });

    try {
      await client.connect();
      console.log(`>>> SUCCESS CONNECTED TO ${host}! <<<`);
      
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
      
      await client.query(sql);
      console.log("Tables & RLS policies created successfully via pooler!");
      await client.end();
      return true;
    } catch (e) {
      console.log(`Failed on ${host}:`, e.message);
    }
  }
  return false;
}

tryPooler();
