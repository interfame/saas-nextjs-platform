alert("HEADER JS EJECUTÁNDOSE");

import { supabase } from "./supabaseClient.js";

console.log("HEADER JS CARGADO");

async function loadMenu() {
  const { data, error } = await supabase
    .from("menu_categories")
    .select("*")
    .order("position");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  const ul = document.getElementById("dynamic-menu");
  if (!ul) return;

  ul.innerHTML = "";

  data.forEach(cat => {
    const li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `<a class="nav-link">${cat.title}</a>`;
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("dynamic-menu");

  ul.innerHTML = `
    <li class="nav-item">
      <a class="nav-link" style="color:blue;font-weight:bold">
        🔵 HEADER.JS FUNCIONA
      </a>
    </li>
  `;
});


loadMenu();

