
const publications = [
  {
    year: 2024,
    type: "Conference Paper",
    status: "",
    title: "Comparative Analysis of Jellyfish Classification: A Study Using YOLOv8 and Pre-trained Models",
    venue: "International Research Conference on Smart Computing and Systems Engineering (SCSE)",
    authors: "U.M.M.P.K. Nawarathne, H.M.L.S. Kumari, Nadeesha Herath Mudiyanselage",
    keywords: ["Computer Vision","Deep Learning","YOLO","Image Classification"],
    abstract: "Add or revise the abstract here.",
    bibtex: "@inproceedings{jellyfish2024,\n  title={Comparative Analysis of Jellyfish Classification: A Study Using YOLOv8 and Pre-trained Models},\n  year={2024}\n}",
    links: { pdf: "https://doi.org/10.1109/SCSE61872.2024.10550783" }
  },
  {
    year: 2024,
    type: "Journal Article",
    status: "",
    title: "Machine Failure Prediction Using Multilabel Classification Methods",
    venue: "Journal of Advances in Engineering and Technology",
    authors: "Nadeesha Herath Mudiyanselage, U.M.M.P.K. Nawarathne",
    keywords: ["Machine Learning","Multilabel Classification","Predictive Maintenance"],
    abstract: "Add or revise the abstract here.",
    bibtex: "@article{machinefailure2024,\n  title={Machine Failure Prediction Using Multilabel Classification Methods},\n  year={2024}\n}",
    links: { pdf: "" }
  },
  {
    year: 2023,
    type: "Conference Paper",
    status: "",
    title: "A Bayesian Approach for Raisin Data Classification",
    venue: "International Research Conference on Smart Computing and Systems Engineering",
    authors: "Nadeesha Herath Mudiyanselage, U.M.M.P.K. Nawarathne",
    keywords: ["Bayesian Methods","Classification","Machine Learning"],
    abstract: "Add or revise the abstract here.",
    bibtex: "@inproceedings{raisin2023,\n  title={A Bayesian Approach for Raisin Data Classification},\n  year={2023}\n}",
    links: { pdf: "" }
  }
];

const container = document.getElementById("publicationsContainer");
const search = document.getElementById("pubSearch");
const yearFilter = document.getElementById("yearFilter");
const typeFilter = document.getElementById("typeFilter");
const keywordBox = document.getElementById("keywordButtons");
const count = document.getElementById("publicationCount");
let activeKeyword = "";

[...new Set(publications.map(p => p.year))].sort((a,b)=>b-a).forEach(y => {
  yearFilter.insertAdjacentHTML("beforeend", `<option value="${y}">${y}</option>`);
});

[...new Set(publications.flatMap(p => p.keywords))].sort().forEach(k => {
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

function esc(v){
  return String(v ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

function pdfIcon(){
  return `<svg class="action-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 2h8l4 4v16H6V2Zm7 1.8V7h3.2L13 3.8ZM8 11h2.2c1.8 0 2.8.9 2.8 2.4 0 1.6-1 2.5-2.9 2.5H9.5V19H8v-8Zm1.5 1.3v2.3h.6c.9 0 1.4-.4 1.4-1.2 0-.7-.5-1.1-1.4-1.1h-.6Z"/>
  </svg>`;
}

function arrowIcon(){
  return `<svg class="down-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 9 5 5 5-5H7Z"/></svg>`;
}

function typeClass(type){
  const t = type.toLowerCase();
  if(t.includes("conference")) return "tag-conference";
  if(t.includes("journal")) return "tag-journal";
  if(t.includes("preprint")) return "tag-preprint";
  if(t.includes("book")) return "tag-book";
  return "tag-default";
}

function render(){
  const q = search.value.trim().toLowerCase();
  const y = yearFilter.value;
  const t = typeFilter.value;

  const filtered = publications.filter(p => {
    const hay = [p.title,p.venue,p.authors,p.type,p.status,p.year,...p.keywords].join(" ").toLowerCase();
    return (!q || hay.includes(q))
      && (!y || String(p.year) === y)
      && (!t || p.type === t)
      && (!activeKeyword || p.keywords.includes(activeKeyword));
  });

  count.textContent = `Found ${filtered.length} publication${filtered.length === 1 ? "" : "s"}.`;
  container.innerHTML = "";

  const years = [...new Set(filtered.map(p => p.year))].sort((a,b)=>b-a);

  years.forEach(year => {
    const yearPubs = filtered.filter(p => p.year === year);
    const group = document.createElement("section");
    group.className = "year-group";
    group.innerHTML = `
      <div class="year-heading-row">
        <h2 class="year-title">${year}</h2>
        <div class="year-count">${yearPubs.length} Publication${yearPubs.length === 1 ? "" : "s"}</div>
      </div>`;

    yearPubs.forEach((p,i) => {
      const id = `pub-${year}-${i}`;
      const statusHtml = p.status
        ? `<span class="pub-status status-under-review">${esc(p.status)}</span>`
        : "";

      const pdfHtml = p.links?.pdf
        ? `<a class="pdf-link" href="${p.links.pdf}" target="_blank" rel="noopener">${pdfIcon()}<span>PDF</span></a>`
        : "";

      const card = document.createElement("article");
      card.className = "pub-card";
      card.innerHTML = `
        <div class="pub-tag-row">
          <span class="pub-type ${typeClass(p.type)}">${esc(p.type)}</span>
          ${statusHtml}
        </div>

        <h3>${esc(p.title)}</h3>
        <div class="pub-venue">${esc(p.venue)}</div>
        <div class="pub-authors">${esc(p.authors)}</div>

        <div class="pub-keywords">
          ${p.keywords.map(k => `<span>${esc(k)}</span>`).join("")}
        </div>

        <div class="pub-actions">
          ${pdfHtml}
          <button data-target="${id}-abs" data-kind="abstract">Abstract ${arrowIcon()}</button>
          <button data-target="${id}-keys" data-kind="keywords">Keywords ${arrowIcon()}</button>
          <button data-target="${id}-bib" data-kind="bibtex">BibTeX ${arrowIcon()}</button>
        </div>

        <div id="${id}-abs" class="details details-abstract">${esc(p.abstract)}</div>
        <div id="${id}-keys" class="details details-keywords">${p.keywords.map(esc).join(" · ")}</div>
        <pre id="${id}-bib" class="details details-bibtex">${esc(p.bibtex)}</pre>
      `;
      group.appendChild(card);
    });

    container.appendChild(group);
  });

  document.querySelectorAll(".pub-actions button").forEach(btn => {
    btn.onclick = () => {
      const target = document.getElementById(btn.dataset.target);
      target.classList.toggle("open");
      btn.classList.toggle("open");
    };
  });
}

[search, yearFilter, typeFilter].forEach(el => {
  el.addEventListener(el.tagName === "INPUT" ? "input" : "change", render);
});
render();
