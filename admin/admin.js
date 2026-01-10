import { supabase } from '../supabase/supabaseClient.js';

async function load() {
  const { data } = await supabase.from('menu_categories').select('*');
  document.getElementById('cats').innerHTML =
    data.map(c => `<li>${c.title}</li>`).join('');
}

async function addCategory() {
  const title = document.getElementById('catTitle').value;
  await supabase.from('menu_categories').insert({ title });
  load();
}

load();
