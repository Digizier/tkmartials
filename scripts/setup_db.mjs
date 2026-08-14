import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zwgyabaakbkmczjcjdzf.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjcyMjc5OSwiZXhwIjoyMTAyMjk4Nzk5fQ.UKkRcC0HXcDonDzShJDfcyycfJpTpYuMVqA-vOfu77c";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function testConnection() {
  console.log("Testing Supabase connection...");
  const { data, error } = await supabase.from('products').select('*');
  console.log("Select test result:", { data, error });
}

testConnection();
