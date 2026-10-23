
const posts = [
  {
    title:"Started Doctoral Studies at the University of Helsinki, Finland",
    date:"2026-01-05",
    displayDate:"05 January 2026",
    category:"Education",
    tags:["education","research"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on beginning a doctoral research journey, adapting to a new academic environment, and building research direction step by step.",
    url:"blog/phd-journey.html"
  },
  {
    title:"Graduated with a M.Sc in Computing Sciences from Tampere University, Finland",
    date:"2025-04-25",
    displayDate:"25 April 2025",
    category:"Education",
    tags:["education"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"Celebrating my M.Sc. graduation with Distinction from Tampere University, highlighting my achievements in Statistical Data Analytics and and the experiences that shaped my academic growth.",
    url:"blog/msc-graduation.html"
  },
  {
    title:"First Volunteer Experience at an International Conference in Finland",
    date:"2025-04-25",
    displayDate:"25 April 2025",
    category:"Volunteer",
    tags:["volunteer", "research"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Started Studying for Master's Degree in Tampere University, Finland",
    date:"2023-08-21",
    displayDate:"21 August 2023",
    category:"Education",
    tags:["education"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Recieved Finland Scholarship",
    date:"2023-08-21",
    displayDate:"21 August 2023",
    category:"Award",
    tags:["award","scholarship"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Appointed as a Temporary Instructor",
    date:"2022-01-03",
    displayDate:"03 January 2022",
    category:"Employment",
    tags:["employment"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Graduated with B.Sc in Statistics and Operations Research",
    date:"2022-02-24",
    displayDate:"24 February 2022",
    category:"Education",
    tags:["education"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Appointed as a Temporary Demonstrator",
    date:"2020-03-10",
    displayDate:"10 March 2020",
    category:"Employment",
    tags:["employment"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"Winning My First Research Presentation Award",
    date:"2020-03-10",
    displayDate:"10 March 2020",
    category:"Award",
    tags:["award", "research"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  {
    title:"My First Publication",
    date:"2020-03-10",
    displayDate:"10 March 2020",
    category:"Research",
    tags:["research"],
    image: "blog/doctoral-studies.jpeg",
    excerpt:"A short reflection on receiving the Finland Scholarship and how it supported my master's journey in Finland.",
    url:"blog/finland-scholarship.html"
  },
  // {
  //   title:"From Master's Thesis to Doctoral Research",
  //   date:"2026-08-20",
  //   displayDate:"20 August 2026",
  //   category:"Research",
  //   tags:["research","artificial intelligence"],
  //   excerpt:"How my interests in statistical modelling and data analysis developed into doctoral research on explainable data mining.",
  //   url:"blog/phd-journey.html"
  // },
  // {
  //   title:"What I Learned from Bayesian Survival Analysis",
  //   date:"2026-07-30",
  //   displayDate:"30 July 2026",
  //   category:"Research",
  //   tags:["research","education"],
  //   excerpt:"A concise overview of the ideas that shaped my master's thesis on prior distribution approaches in Bayesian survival models.",
  //   url:"blog/bayesian-survival.html"
  // },
  // {
  //   title:"Workshop Notes: Explainable AI in Practice",
  //   date:"2026-06-18",
  //   displayDate:"18 June 2026",
  //   category:"Workshop",
  //   tags:["workshop","artificial intelligence","research"],
  //   excerpt:"Key ideas and practical reflections from a workshop on explainable artificial intelligence.",
  //   url:"#"
  // },
  // {
  //   title:"Innovation Through Interpretable Data Analysis",
  //   date:"2026-05-22",
  //   displayDate:"22 May 2026",
  //   category:"Innovation",
  //   tags:["innovation","artificial intelligence","research"],
  //   excerpt:"Why interpretability can support responsible innovation in data-driven research.",
  //   url:"#"
  // },
  // {
  //   title:"Ethics and Responsibility in Data Science",
  //   date:"2026-04-15",
  //   displayDate:"15 April 2026",
  //   category:"Ethics",
  //   tags:["ethics","artificial intelligence","education"],
  //   excerpt:"A short discussion of transparency, fairness, and responsibility in modern data science.",
  //   url:"#"
  // },
  // {
  //   title:"Lessons from Academic Competitions and Presentations",
  //   date:"2026-03-05",
  //   displayDate:"5 March 2026",
  //   category:"Academic Life",
  //   tags:["competition","education","research"],
  //   excerpt:"Reflections on presenting research, communicating clearly, and learning through academic competitions.",
  //   url:"#"
  // }
];

const grid = document.getElementById("blogGrid");
const input = document.getElementById("blogSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const popularTags = document.getElementById("popularTags");
const activeNote = document.getElementById("activeBlogFilter");

let activeTag = "";

[...new Set(posts.map(p => p.category))].sort().forEach(c => {
  categoryFilter.insertAdjacentHTML("beforeend", `<option value="${c}">${c}</option>`);
});

const tagOrder = ["artificial intelligence","workshop","education","innovation","research","ethics","competition"];
tagOrder.forEach(tag => {
  const button = document.createElement("button");
  button.textContent = `#${tag}`;
  button.dataset.tag = tag;
  button.onclick = () => {
    activeTag = activeTag === tag ? "" : tag;
    [...popularTags.children].forEach(b => b.classList.toggle("active", b.dataset.tag === activeTag));
    renderBlog();
    window.scrollTo({top: 0, behavior:"smooth"});
  };
  popularTags.appendChild(button);
});

function renderBlog(){
  const q = input.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  let filtered = posts.filter(p => {
    const hay = [p.title,p.category,p.excerpt,...p.tags].join(" ").toLowerCase();
    return (!q || hay.includes(q))
      && (!category || p.category === category)
      && (!activeTag || p.tags.includes(activeTag));
  });

  filtered.sort((a,b) => sort === "oldest"
    ? a.date.localeCompare(b.date)
    : b.date.localeCompare(a.date)
  );

  activeNote.textContent = activeTag ? `Showing posts tagged #${activeTag}` : "";
  grid.innerHTML = "";

  filtered.forEach(p => {
    const article = document.createElement("article");
    article.className = "blog-card";
    const link = p.url === "#" ? '<span class="read-more muted">Post coming soon</span>' : `<a class="read-more" href="${p.url}">Read more →</a>`;
    article.innerHTML = `
      <div class="blog-thumb">
        <img
          src="${p.image}"
          alt="${p.title}"
          loading="lazy"
        >
        <span class="blog-image-category">${p.category}</span>
      </div>
      <div class="blog-content">
        <div class="blog-date">${p.displayDate}</div>
        <h2>${p.title}</h2>
        <div class="blog-tags">${p.tags.map(t => `<span>#${t}</span>`).join("")}</div>
        <p>${p.excerpt}</p>
        ${link}
      </div>`;
    grid.appendChild(article);
  });

  if (!filtered.length) {
    grid.innerHTML = '<p class="muted">No blog posts match the selected filters.</p>';
  }
}

input.addEventListener("input", renderBlog);
categoryFilter.addEventListener("change", renderBlog);
sortFilter.addEventListener("change", renderBlog);
renderBlog();
