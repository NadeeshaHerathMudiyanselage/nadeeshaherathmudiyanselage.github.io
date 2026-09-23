// EDIT YOUR PUBLICATIONS HERE.
// Add or remove objects. The page automatically builds year/type/keyword filters.

const publications = [
  {
    year: 2026,
    type: "Journal",
    title: "Underwater Waste Detection Using Deep Learning: A Performance Comparison of YOLOv7–10 and Faster R-CNN",
    authors: "UMMPK Nawarathne, HMNS Kumari, HMLS Kumari",
    venue: "International Journal of Research in Computing",
    keywords: ["Deep Learning", "Computer Vision", "YOLO", "Object Detection"],
    links: {
      paper: "https://ijrcom.org/index.php/ijrc/article/view/160/20"
    }
  },
  {
    year: 2025,
    type: "Conference",
    title: "Replace this with your publication title",
    authors: "Nadeesha Herath Mudiyanselage, Coauthor Name",
    venue: "Conference Name",
    keywords: ["Explainable AI", "Data Mining", "Algorithms"],
    links: {
      paper: "#"
    }
  }
];

const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");
const typeFilter = document.getElementById("typeFilter");
const clearFilters = document.getElementById("clearFilters");
const keywordFilters = document.getElementById("keywordFilters");
const publicationList = document.getElementById("publicationList");

let activeKeyword = "all";

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => String(b).localeCompare(String(a), undefined, { numeric: true }));
}

function setupFilters() {
  uniqueSorted(publications.map(p => p.year)).forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });

  const allKeywords = uniqueSorted(publications.flatMap(p => p.keywords)).sort((a, b) => a.localeCompare(b));
  allKeywords.forEach(keyword => {
    const button = document.createElement("button");
    button.className = "keyword-btn";
    button.textContent = keyword;
    button.dataset.keyword = keyword;
    button.addEventListener("click", () => {
      activeKeyword = activeKeyword === keyword ? "all" : keyword;
      document.querySelectorAll(".keyword-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.keyword === activeKeyword);
      });
      renderPublications();
    });
    keywordFilters.appendChild(button);
  });
}

function matchesSearch(pub, query) {
  if (!query) return true;
  const haystack = [
    pub.title,
    pub.authors,
    pub.venue,
    pub.type,
    pub.year,
    ...pub.keywords
  ].join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function renderPublications() {
  const query = searchInput.value.trim();
  const selectedYear = yearFilter.value;
  const selectedType = typeFilter.value;

  const filtered = publications.filter(pub => {
    const okSearch = matchesSearch(pub, query);
    const okYear = selectedYear === "all" || String(pub.year) === selectedYear;
    const okType = selectedType === "all" || pub.type === selectedType;
    const okKeyword = activeKeyword === "all" || pub.keywords.includes(activeKeyword);
    return okSearch && okYear && okType && okKeyword;
  });

  publicationList.innerHTML = "";

  if (filtered.length === 0) {
    publicationList.innerHTML = '<p class="muted">No publications match the selected filters.</p>';
    return;
  }

  const years = uniqueSorted(filtered.map(p => p.year));

  years.forEach(year => {
    const block = document.createElement("section");
    block.className = "year-block";
    block.innerHTML = `<h3>${year}</h3>`;

    filtered
      .filter(p => p.year === year)
      .forEach(pub => {
        const article = document.createElement("article");
        article.className = "pub";

        const keywordHtml = pub.keywords
          .map(k => `<span>${k}</span>`)
          .join("");

        const linksHtml = Object.entries(pub.links || {})
          .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label.toUpperCase()}</a>`)
          .join("");

        article.innerHTML = `
          <div class="pub-title">${pub.title}</div>
          <div>${pub.authors}</div>
          <div class="pub-meta">${pub.venue} · ${pub.type} · ${pub.year}</div>
          <div class="pub-keywords">${keywordHtml}</div>
          <div class="pub-links">${linksHtml}</div>
        `;

        block.appendChild(article);
      });

    publicationList.appendChild(block);
  });
}

searchInput.addEventListener("input", renderPublications);
yearFilter.addEventListener("change", renderPublications);
typeFilter.addEventListener("change", renderPublications);

clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  yearFilter.value = "all";
  typeFilter.value = "all";
  activeKeyword = "all";
  document.querySelectorAll(".keyword-btn").forEach(btn => btn.classList.remove("active"));
  renderPublications();
});

document.getElementById("yearNow").textContent = new Date().getFullYear();

setupFilters();
renderPublications();
