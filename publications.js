
/*
  EDIT ONLY THIS ARRAY TO ADD YOUR REAL PUBLICATIONS.
  The page automatically builds year, type, keyword filters and search.
*/
const publications = [
  {
    year: 2026,
    type: "Journal Article",
    title: "Add your publication title here",
    venue: "Journal name",
    authors: "Nadeesha Herath Mudiyanselage, Coauthor Name",
    keywords: ["Explainable AI", "Data Mining", "Algorithms"],
    abstract: "Add the abstract here.",
    bibtex: "@article{yourkey2026,\\n  title={Add your publication title here},\\n  year={2026}\\n}",
    links: { paper: "#" }
  },
  {
    year: 2025,
    type: "Conference Proceedings",
    title: "Add another publication title here",
    venue: "Conference name",
    authors: "Nadeesha Herath Mudiyanselage, Coauthor Name",
    keywords: ["Data Mining", "Machine Learning"],
    abstract: "Add the abstract here.",
    bibtex: "@inproceedings{yourkey2025,\\n  title={Add another publication title here},\\n  year={2025}\\n}",
    links: { paper: "#" }
  }
];

const container = document.getElementById("publicationsContainer");
const search = document.getElementById("pubSearch");
const yearFilter = document.getElementById("yearFilter");
const typeFilter = document.getElementById("typeFilter");
const keywordBox = document.getElementById("keywordButtons");
const count = document.getElementById("publicationCount");

let activeKeyword = "";

const years = [...new Set(publications.map(p => p.year))].sort((a,b)=>b-a);
years.forEach(y => yearFilter.insertAdjacentHTML("beforeend", `<option value="${y}">${y}</option>`));

const keywords = [...new Set(publications.flatMap(p => p.keywords))].sort();
keywords.forEach(k => {
  const b = document.createElement("button");
  b.textContent = k;
  b.dataset.keyword = k;
  b.onclick = () => {
    activeKeyword = activeKeyword === k ? "" : k;
    [...keywordBox.children].forEach(x => x.classList.toggle("active", x.dataset.keyword === activeKeyword));
    render();
  };
  keywordBox.appendChild(b);
});

function safe(s){ return String(s ?? ""); }

function render(){
  const q = search.value.trim().toLowerCase();
  const y = yearFilter.value;
  const t = typeFilter.value;

  const filtered = publications.filter(p => {
    const hay = [p.title,p.venue,p.authors,p.type,p.year,...p.keywords].join(" ").toLowerCase();
    return (!q || hay.includes(q))
      && (!y || String(p.year) === y)
      && (!t || p.type === t)
      && (!activeKeyword || p.keywords.includes(activeKeyword));
  });

  count.textContent = `Found ${filtered.length} publication${filtered.length === 1 ? "" : "s"}.`;
  container.innerHTML = "";

  const grouped = [...new Set(filtered.map(p => p.year))].sort((a,b)=>b-a);
  grouped.forEach(year => {
    const group = document.createElement("section");
    group.className = "year-group";
    group.innerHTML = `<h2 class="year-title">${year}</h2>`;

    filtered.filter(p => p.year === year).forEach((p, idx) => {
      const id = `pub-${year}-${idx}`;
      const paperLink = p.links?.paper && p.links.paper !== "#"
        ? `<a href="${p.links.paper}" target="_blank">Paper</a>` : "";

      const card = document.createElement("article");
      card.className = "pub-card";
      card.innerHTML = `
        <div class="pub-topline"><span class="pub-type">${safe(p.type)}</span></div>
        <h3>${safe(p.title)}</h3>
        <div class="pub-venue">${safe(p.venue)}</div>
        <div class="pub-authors">${safe(p.authors)}</div>
        <div class="pub-keywords">${p.keywords.map(k=>`<span>${k}</span>`).join("")}</div>
        <div class="pub-actions">
          ${paperLink}
          <button data-target="${id}-abs">Abstract</button>
          <button data-target="${id}-keys">Keywords</button>
          <button data-target="${id}-bib">BibTeX</button>
        </div>
        <div id="${id}-abs" class="details">${safe(p.abstract)}</div>
        <div id="${id}-keys" class="details">${p.keywords.join(" · ")}</div>
        <pre id="${id}-bib" class="details">${safe(p.bibtex)}</pre>
      `;
      group.appendChild(card);
    });
    container.appendChild(group);
  });

  document.querySelectorAll(".pub-actions button").forEach(btn => {
    btn.onclick = () => document.getElementById(btn.dataset.target).classList.toggle("open");
  });
}

[search, yearFilter, typeFilter].forEach(el => el.addEventListener(el.tagName === "INPUT" ? "input" : "change", render));
render();
