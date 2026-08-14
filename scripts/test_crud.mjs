import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zwgyabaakbkmczjcjdzf.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lhYmFha2JrbWN6amNqZHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MjI3OTksImV4cCI6MjEwMjI5ODc5OX0.2XrMHDQhfqQmg0eyhOSzSnKxwTcV7FF2rndaqC-tOnM";

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function testFullCrud() {
  console.log("=== 1. Testing SELECT on products ===");
  const { data: initialList, error: selErr } = await supabase.from('products').select('*');
  if (selErr) throw selErr;
  console.log(`✅ Select successful! Total products: ${initialList.length}`);

  const testId = `test-prod-${Date.now()}`;

  console.log("=== 2. Testing INSERT new product ===");
  const newProd = {
    id: testId,
    name: "Automated Test Combed Cotton Yarn 40s",
    category: "Textile",
    price: "PKR 19,500/Bag",
    moq: "50 Bags",
    description: "Cloud test item to verify real-time persistence across browsers",
    features: ["Zero Contamination", "Auto Coner"],
    image: "/assets/textile_raw_materials.jpg",
    badge: "Testing",
    is_available: true
  };
  const { error: insErr } = await supabase.from('products').insert(newProd);
  if (insErr) throw insErr;
  console.log("✅ Insert successful!");

  console.log("=== 3. Testing UPDATE on product ===");
  const { error: updErr } = await supabase.from('products').update({ price: "PKR 20,000/Bag" }).eq('id', testId);
  if (updErr) throw updErr;
  console.log("✅ Update successful!");

  console.log("=== 4. Testing DELETE on product ===");
  const { error: delErr } = await supabase.from('products').delete().eq('id', testId);
  if (delErr) throw delErr;
  console.log("✅ Delete successful!");

  console.log("=== 5. Final SELECT Verification ===");
  const { data: finalList } = await supabase.from('products').select('*');
  console.log(`✅ All CRUD tests PASSED cleanly! Current live count: ${finalList.length}`);
}

testFullCrud().catch(err => {
  console.error("❌ CRUD Test Failed:", err);
  process.exit(1);
});
