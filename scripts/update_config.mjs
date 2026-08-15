import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zwgyabaakbkmczjcjdzf.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjcyMjc5OSwiZXhwIjoyMTAyMjk4Nzk5fQ.UKkRcC0HXcDonDzShJDfcyycfJpTpYuMVqA-vOfu77c";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function updateDbConfig() {
  console.log("Updating Supabase site_config with @tkmartials.com emails and pillars...");
  
  const { data, error } = await supabase.from('site_config').upsert({
    id: 'main',
    email: 'info@tkmartials.com',
    guest_email: 'editor@tkmartials.com',
    advertise_email: 'advertise@tkmartials.com',
    copyright_text: '© 2026 Martials Integrated Consulting — Textile • Insurance • Technology • Education • HR. All Rights Reserved.',
    updated_at: new Date().toISOString()
  });

  if (error) {
    console.error("Config update error:", error.message);
  } else {
    console.log("✅ Supabase site_config updated successfully!");
  }
}

updateDbConfig();
