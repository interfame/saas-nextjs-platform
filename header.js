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
