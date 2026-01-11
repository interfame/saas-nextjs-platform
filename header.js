const supabase = window.supabase.createClient(
  "https://jwfesxzzbehzeytwcbgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3ZmVzeHp6YmVoemV5dHdjYmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5Mjg2NDMsImV4cCI6MjA4MzUwNDY0M30.SLoar0LgTTOlkB2gVlJ-IU9YBh0uygqKVb1pBpKtBWo"
);

async function loadMenu() {
  const { data, error } = await supabase
    .from("menu_categories")
    .select("title")
    .order("position");

  if (error) {
    console.error(error);
    return;
  }

  const ul = document.getElementById("dynamic-menu");
  ul.innerHTML = "";

  data.forEach(cat => {
    ul.innerHTML += `
      <li class="nav-item">
        <a class="nav-link">${cat.title}</a>
      </li>
    `;
  });
}

loadMenu();
