document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  const grid = document.getElementById("productGrid");
  if (!grid || typeof products === "undefined") return;
  const search = document.getElementById("productSearch");
  const count = document.getElementById("resultsCount");
  const filterButtons = [...document.querySelectorAll("[data-category]")];
  let category = new URLSearchParams(location.search).get("category") || "All";
  if (!filterButtons.some(b => b.dataset.category === category)) category = "All";
  function render() {
    const query = (search?.value || "").trim().toLowerCase();
    const visible = products.filter(p => (category === "All" || p.category === category) &&
      [p.name,p.category,p.description,p.bestFor,...p.features].join(" ").toLowerCase().includes(query));
    filterButtons.forEach(b => b.classList.toggle("active", b.dataset.category === category));
    count.textContent = `Showing ${visible.length} of ${products.length} products`;
    grid.innerHTML = visible.map(p => {
      const live = !p.demo && p.affiliateUrl && /^https?:\\/\\//i.test(p.affiliateUrl);
      const features = p.features.map(f => `<li>${escapeHtml(f)}</li>`).join("");
      return `<article class="product-card">
        <div class="product-top"><span class="product-icon" aria-hidden="true">${escapeHtml(p.icon || "✧")}</span><div class="pills"><span class="pill ${p.demo ? "demo" : "ready"}">${p.demo ? "Demo product" : "Recommended"}</span><span class="pill">${escapeHtml(p.category)}</span></div></div>
        <h2>${escapeHtml(p.name)}</h2><p class="product-description">${escapeHtml(p.description)}</p>
        <ul class="feature-list">${features}</ul><p class="best-for">Best for: <strong>${escapeHtml(p.bestFor)}</strong></p>
        <div class="product-bottom"><span class="price">${escapeHtml(p.price || "Check retailer")}</span>
        ${live ? `<a class="button primary small" href="${escapeAttr(p.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener">Check price ↗</a>` : `<span class="button disabled small" aria-label="Affiliate link not configured">Link not added</span>`}</div>
      </article>`;
    }).join("") || `<div class="empty-state"><h2>No products found</h2><p>Try another search or category.</p></div>`;
  }
  filterButtons.forEach(b => b.addEventListener("click", () => { category = b.dataset.category; render(); }));
  search?.addEventListener("input", render);
  render();
});
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function escapeAttr(value) { return escapeHtml(value); }