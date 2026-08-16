const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

const publicationSearch = document.getElementById('publicationSearch');
const yearFilter = document.getElementById('yearFilter');
const typeFilter = document.getElementById('typeFilter');
const publicationCards = Array.from(document.querySelectorAll('.publication-card'));
const emptyState = document.getElementById('emptyState');
const keywordCloud = document.getElementById('keywordCloud');

function filterPublications() {
  if (!publicationCards.length) return;

  const query = (publicationSearch?.value || '').toLowerCase().trim();
  const year = yearFilter?.value || 'all';
  const type = typeFilter?.value || 'all';
  let visibleCount = 0;

  publicationCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesYear = year === 'all' || card.dataset.year === year;
    const matchesType = type === 'all' || card.dataset.type === type;
    const isVisible = matchesQuery && matchesYear && matchesType;
    card.style.display = isVisible ? 'block' : 'none';
    if (isVisible) visibleCount += 1;
  });

  document.querySelectorAll('.publication-year-section').forEach(section => {
    const hasVisibleCards = Array.from(section.querySelectorAll('.publication-card')).some(card => card.style.display !== 'none');
    section.style.display = hasVisibleCards ? '' : 'none';
  });

  if (emptyState) emptyState.style.display = visibleCount ? 'none' : 'block';
}

[publicationSearch, yearFilter, typeFilter].forEach(input => {
  if (input) input.addEventListener('input', filterPublications);
});

function buildKeywordCloud() {
  if (!keywordCloud || !publicationCards.length) return;

  const counts = new Map();
  publicationCards.forEach(card => {
    card.querySelectorAll('.pub-tags span').forEach(tag => {
      const keyword = tag.textContent.trim();
      counts.set(keyword, (counts.get(keyword) || 0) + 1);
    });
  });

  const sortedKeywords = Array.from(counts.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  keywordCloud.innerHTML = '';
  sortedKeywords.forEach(([keyword, count]) => {
    const button = document.createElement('button');
    button.className = 'keyword-chip';
    button.type = 'button';
    button.textContent = keyword;
    button.addEventListener('click', () => {
      if (publicationSearch) {
        publicationSearch.value = keyword;
        filterPublications();
        publicationSearch.focus();
      }
    });
    keywordCloud.appendChild(button);
  });
}

function setupPublicationToggles() {
  document.querySelectorAll('.pub-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;

      const card = button.closest('.publication-card');
      if (card) {
        card.querySelectorAll('.pub-extra').forEach(panel => {
          if (panel !== target) panel.classList.remove('open');
        });
        card.querySelectorAll('.pub-toggle').forEach(toggle => {
          if (toggle !== button) toggle.classList.remove('active');
        });
      }

      target.classList.toggle('open');
      button.classList.toggle('active');
    });
  });
}

buildKeywordCloud();
setupPublicationToggles();
filterPublications();


// Teaching page course modal
const courseModal = document.getElementById("courseModal");
const courseModalContent = document.getElementById("courseModalContent");
const courseTriggers = document.querySelectorAll("[data-course-modal]");

const courseDetails = {
  "programming": `
    <h2 id="courseModalTitle">Programming</h2>
    <div class="modal-course-meta">
      <span>AID111</span>
      <span>60 hrs</span>
      <span>Undergraduate</span>
    </div>

    <h3>Overview</h3>
    <p>This course introduces students to the fundamentals of programming using Python. Students will learn core programming concepts including variables, data types, control structures, functions, and data structures. Through hands-on exercises and practical examples, learners will develop problem-solving skills and the ability to design and implement simple software solutions using Python.</p>

    <h3>Learning Objectives</h3>
    <ul>
      <li>Understand the fundamental concepts of programming using Python.</li>
      <li>Use variables, operators, and data types to perform basic computations.</li>
      <li>Apply control structures such as conditionals and loops to solve problems.</li>
      <li>Develop reusable code using functions and modular programming.</li>
      <li>Work with basic data structures such as lists, tuples, and dictionaries.</li>
      <li>Implement simple programs to solve real-world problems.</li>
    </ul>

    <h3>Topics Covered</h3>
    <ul>
      <li>Introduction to programming and Python environment</li>
      <li>Variables, data types, and operators</li>
      <li>Control structures: if statements and loops</li>
      <li>Functions and modular programming</li>
      <li>Lists, tuples, and dictionaries</li>
      <li>Basic file handling and error handling</li>
    </ul>

    <h3>Assessment</h3>
    <div class="assessment-grid">
      <div class="assessment-item">Assignments <strong>40%</strong></div>
      <div class="assessment-item">Final Exam <strong>60%</strong></div>
    </div>
  `,
  "data-analysis": `
    <h2 id="courseModalTitle">Data Analysis and Visualization</h2>
    <div class="modal-course-meta">
      <span>AID112</span>
      <span>45 hrs</span>
      <span>Undergraduate</span>
    </div>

    <h3>Overview</h3>
    <p>This course supports students in understanding how to prepare, analyze, visualize, and interpret data for academic and practical decision-making contexts.</p>

    <h3>Learning Objectives</h3>
    <ul>
      <li>Understand the basic workflow of data analysis.</li>
      <li>Clean, organize, and prepare datasets for analysis.</li>
      <li>Create clear visualizations to communicate patterns and insights.</li>
      <li>Interpret results and prepare simple analytical reports.</li>
    </ul>

    <h3>Topics Covered</h3>
    <ul>
      <li>Data cleaning and preprocessing</li>
      <li>Exploratory data analysis</li>
      <li>Charts, dashboards, and visual storytelling</li>
      <li>Basic statistical interpretation</li>
      <li>Reporting and presentation of findings</li>
    </ul>

    <h3>Assessment</h3>
    <div class="assessment-grid">
      <div class="assessment-item">Practical Work <strong>50%</strong></div>
      <div class="assessment-item">Final Project <strong>50%</strong></div>
    </div>
  `,
  "machine-learning": `
    <h2 id="courseModalTitle">Machine Learning</h2>
    <div class="modal-course-meta">
      <span>AID211</span>
      <span>60 hrs</span>
      <span>Undergraduate</span>
    </div>

    <h3>Overview</h3>
    <p>This course introduces machine learning concepts with a focus on practical model development, evaluation, and interpretation for real-world data-driven applications.</p>

    <h3>Learning Objectives</h3>
    <ul>
      <li>Understand supervised and unsupervised learning concepts.</li>
      <li>Prepare datasets for machine learning workflows.</li>
      <li>Train, validate, and evaluate basic machine learning models.</li>
      <li>Interpret model performance using appropriate evaluation metrics.</li>
    </ul>

    <h3>Topics Covered</h3>
    <ul>
      <li>Introduction to machine learning</li>
      <li>Regression and classification</li>
      <li>Model training and validation</li>
      <li>Evaluation metrics</li>
      <li>Overfitting, underfitting, and generalization</li>
      <li>Model interpretation basics</li>
    </ul>

    <h3>Assessment</h3>
    <div class="assessment-grid">
      <div class="assessment-item">Assignments <strong>40%</strong></div>
      <div class="assessment-item">Project / Exam <strong>60%</strong></div>
    </div>
  `,
  "research-methods": `
    <h2 id="courseModalTitle">Research Methods and Academic Writing</h2>
    <div class="modal-course-meta">
      <span>RES101</span>
      <span>30 hrs</span>
      <span>Academic Support</span>
    </div>

    <h3>Overview</h3>
    <p>This course provides guidance on research planning, literature review, academic writing, documentation, presentation preparation, and communicating research clearly.</p>

    <h3>Learning Objectives</h3>
    <ul>
      <li>Understand the structure of a research project.</li>
      <li>Identify and organize relevant academic literature.</li>
      <li>Write clear research objectives and methodology sections.</li>
      <li>Prepare academic presentations and project documentation.</li>
    </ul>

    <h3>Topics Covered</h3>
    <ul>
      <li>Research problem identification</li>
      <li>Literature review planning</li>
      <li>Academic writing structure</li>
      <li>Citation and referencing basics</li>
      <li>Presentation and research communication</li>
    </ul>

    <h3>Assessment</h3>
    <div class="assessment-grid">
      <div class="assessment-item">Research Proposal <strong>50%</strong></div>
      <div class="assessment-item">Presentation <strong>50%</strong></div>
    </div>
  `
};

function openCourseModal(courseId) {
  if (!courseModal || !courseModalContent || !courseDetails[courseId]) return;
  courseModalContent.innerHTML = courseDetails[courseId];
  courseModal.classList.add("is-open");
  courseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCourseModal() {
  if (!courseModal) return;
  courseModal.classList.remove("is-open");
  courseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

courseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openCourseModal(trigger.dataset.courseModal));
});

document.querySelectorAll("[data-close-course-modal]").forEach((button) => {
  button.addEventListener("click", closeCourseModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCourseModal();
});


// Blog page filtering
const blogSearch = document.getElementById("blogSearch");
const blogCategory = document.getElementById("blogCategory");
const blogSort = document.getElementById("blogSort");
const blogCards = document.querySelectorAll(".blog-card");
const blogEmptyState = document.getElementById("blogEmptyState");

function filterBlogPosts() {
  if (!blogCards.length) return;
  const query = (blogSearch?.value || "").toLowerCase().trim();
  const category = blogCategory?.value || "all";
  let visibleCount = 0;

  blogCards.forEach((card) => {
    const title = (card.dataset.title || card.textContent || "").toLowerCase();
    const cardCategory = card.dataset.category || "";
    const matchesQuery = !query || title.includes(query) || card.textContent.toLowerCase().includes(query);
    const matchesCategory = category === "all" || cardCategory === category;
    const show = matchesQuery && matchesCategory;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  const blogGrid = document.getElementById("blogGrid");
  if (blogGrid && blogSort) {
    const sortedCards = Array.from(blogCards).sort((a, b) => {
      const dateA = new Date(a.dataset.date || "1900-01-01");
      const dateB = new Date(b.dataset.date || "1900-01-01");
      return blogSort.value === "oldest" ? dateA - dateB : dateB - dateA;
    });
    sortedCards.forEach((card) => blogGrid.appendChild(card));
  }

  if (blogEmptyState) {
    blogEmptyState.style.display = visibleCount ? "none" : "block";
  }
}

blogSearch?.addEventListener("input", filterBlogPosts);
blogCategory?.addEventListener("change", filterBlogPosts);
blogSort?.addEventListener("change", filterBlogPosts);
filterBlogPosts();


// Contact form character counter
const contactMessage = document.getElementById("contactMessage");
const messageCount = document.getElementById("messageCount");
contactMessage?.addEventListener("input", () => {
  if (messageCount) messageCount.textContent = contactMessage.value.length;
});


// Projects page filtering and sorting
const projectSearch = document.getElementById("projectSearch");
const projectStatus = document.getElementById("projectStatus");
const projectCategory = document.getElementById("projectCategory");
const projectSort = document.getElementById("projectSort");
const projectCards = document.querySelectorAll(".project-card");
const projectEmptyState = document.getElementById("projectEmptyState");

function filterProjects() {
  if (!projectCards.length) return;
  const query = (projectSearch?.value || "").toLowerCase().trim();
  const status = projectStatus?.value || "all";
  const category = projectCategory?.value || "all";
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const title = (card.dataset.title || card.textContent || "").toLowerCase();
    const cardStatus = card.dataset.status || "";
    const cardCategory = card.dataset.category || "";
    const matchesQuery = !query || title.includes(query) || card.textContent.toLowerCase().includes(query);
    const matchesStatus = status === "all" || cardStatus === status;
    const matchesCategory = category === "all" || cardCategory.includes(category);
    const show = matchesQuery && matchesStatus && matchesCategory;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  const projectsGrid = document.getElementById("projectsGrid");
  if (projectsGrid && projectSort) {
    const sortedCards = Array.from(projectCards).sort((a, b) => {
      const dateA = new Date(a.dataset.date || "1900-01-01");
      const dateB = new Date(b.dataset.date || "1900-01-01");
      return projectSort.value === "oldest" ? dateA - dateB : dateB - dateA;
    });
    sortedCards.forEach((card) => projectsGrid.appendChild(card));
  }

  if (projectEmptyState) {
    projectEmptyState.style.display = visibleCount ? "none" : "block";
  }
}

projectSearch?.addEventListener("input", filterProjects);
projectStatus?.addEventListener("change", filterProjects);
projectCategory?.addEventListener("change", filterProjects);
projectSort?.addEventListener("change", filterProjects);
filterProjects();
