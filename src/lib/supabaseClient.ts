import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zwgyabaakbkmczjcjdzf.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MjI3OTksImV4cCI6MjEwMjI5ODc5OX0.2XrMHDQhfqQmg0eyhOSzSnKxwTcV7FF2rndaqC-tOnM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
