console.log("HEADER JS CARGADO");

import { supabase } from 'supabase/supabaseClient.js';

async function loadMenu() {
  const { data: categories } = await supabase
    .from('menu_categories')
    .select('id,title,menu_items(id,title,url)')
    .order('order');

  const ul = document.getElementById('dynamic-menu');
  ul.innerHTML = '';

  categories.forEach(cat => {
    const li = document.createElement('li');
    li.className = 'nav-item dropdown';
    li.innerHTML = `<a class="nav-link dropbtn">${cat.title}</a>`;
    const div = document.createElement('div');
    div.className = 'dropdown-content';
    cat.menu_items.forEach(item => {
      div.innerHTML += `<a href="${item.url}">${item.title}</a>`;
    });
    li.appendChild(div);
    ul.appendChild(li);
  });
}

document.body.insertAdjacentHTML(
  "afterbegin",
  "<div style='color:red'>HEADER JS FUNCIONA</div>"
);

loadMenu();
