
const publications = [
  {
    year: 2026,
    type: "Journal Article",
    status: "Under Review",
    title: "Global Disaster Risk Assessment Using World Risk Index Data: A Geospatial and Visual Analytics Approach",
    venue: "KDU Journal of Multidisciplinary Studies (KJMS)",
    authors: "Malithi Nawarathne, Nadeesha Herath Mudiyanselage, Lihini Sangeetha ",
    keywords: ["Data Visualization","Disaster Risk Assessment","Geospatial Analysis","Visual Analytics", "Word Risk Index"],
    abstract: "",
    bibtex: "",
    links: { pdf: "" }
  },
   {
    year: 2026,
    type: "Journal Article",
    status: "Under Review",
    title: "Deep Learning-based Semantic Segmentation of Dental Radiographs: Comparative Evaluation of PSPNet, DeepLabv3, UNet, and UNet++",
    venue: "KDU Journal of Multidisciplinary Studies (KJMS)",
    authors: "Malithi Nawarathne, Nadeesha Herath Mudiyanselage, Lihini Sangeetha ",
    keywords: ["Convolutional Neural Networks","Dental Radiograph Segmentation","Deep Learning","Semantic Segmentation", "UNet++"],
    abstract: "",
    bibtex: "",
    links: { pdf: "" }
  },
{
    year: 2026,
    type: "Journal Article",
    status: "Under Review",
    title: "Comparative Causal Analysis of Treatment Effect on Diabetic Readmission Using S, T, D and Dr Meta-Learners with Random Forest, XGBoost, LightGBM, And Catboost Models",
    venue: "KDU Journal of Multidisciplinary Studies (KJMS)",
    authors: "Lihini Sangeetha, Nadeesha Herath Mudiyanselage, Malithi Nawarathne",
    keywords: ["Causal Machine Learning","Causal Meta-Learners","Conditional Average Treatment Effect","Diabetes Readmission", "Hospital Readmission", "Treatment Effects"],
    abstract: "",
    bibtex: "",
    links: { pdf: "" }
  },
  
  {
    year: 2026,
    type: "Journal Article",
    status: "",
    title: "Underwater Waste Detection Using Deep Learning: A Performance Comparison of YOLOv7–10 and Faster R-CNN",
    venue: "International Journal of Research in Computing (IJRC)",
    authors: "UMMPK Nawarathne, HMNS Kumari, HMLS Kumari",
    keywords: ["Faster R-CNN","Object Detection","Underwater Garbage Detection","YOLOv8"],
    abstract: "Underwater  pollution  is  one  of  today’s  most  significant  en-vironmental  concerns,  with  vast  volumes  of  garbage  foundin  seas,  rivers,  and  landscapes  around  the  world.    Accu-rate  detection  of  these  waste  materials  is  crucial  for  suc-cessful  waste  management,  environmental  monitoring,  andmitigation  strategies.In  this  study,  we  investigated  theperformance  of  five  cutting-edge  object  recognition  algo-rithms,  namely  YOLO  (You  Only  Look  Once)  models,  in-cluding YOLOv7, YOLOv8, YOLOv9, YOLOv10, and FasterRegion-Convolutional  Neural  Network  (R-CNN),  to  iden-tify  which  model  was  most  effective  at  recognizing  materi-als  in  underwater  situations.   The  models  were  thoroughlytrained and tested on a large dataset containing fifteen dif-ferent  classes  under  diverse  conditions,  such  as  low  visibil-ity and variable depths.  From the above-mentioned models,YOLOv8 outperformed the others, with a mean Average Pre-cision (mAP) of 80.9%, indicating a significant performance.This  increased  performance  is  attributed  to  YOLOv8’s  ar-chitecture, which incorporates advanced features such as im-proved anchor-free mechanisms and self-supervised learning,allowing for more precise and efficient recognition of items ina variety of settings.  These findings highlight the YOLOv8model’s  potential  as  an  effective  tool  in  the  global  fightagainst pollution,  improving both the detection capabilitiesand scalability of underwater cleanup operations that will alsoaid environmental AI specialists and interested parties.",
    bibtex: "@article{nawarathne2025underwater,\n title={Underwater Waste Detection Using Deep Learning A Performance Comparison of YOLOv7 to 10 and Faster RCNN},\n author={Nawarathne, UMMPK and Kumari, HMNS and Kumari, HMLS},\n journal={arXiv preprint arXiv:2507.18967},\n year={2025}}",
    links: { pdf: "https://ijrcom.org/index.php/ijrc/article/view/160/20" }
  },
{
    year: 2025,
    type: "Journal Article",
    status: "",
    title: "Differentiated Thyroid Cancer Recurrence Classification Using Machine Learning Models and Bayesian Neural Networks with Varying Priors: A SHAP-Based Interpretation of the Best Performing Model",
    venue: "International Journal of Research in Computing (IJRC)",
    authors: "HMNS Kumari, HMLS Kumari, UMMPK Nawarathne",
    keywords: ["Bayesian Neural Network","Classification","Differentiatedthyroid Cancer Recurrence","Machine Learning","SHAP","Uncertainty Quantification"],
    abstract: "Differentiated thyroid cancer (DTC) recurrence is a major pub-lic health concern, requiring classification and predictive modelsthat are not only accurate but also interpretable and uncertainty-aware.   This  study  introduces  a  comprehensive  framework  forDTC recurrence classification using a dataset containing 383 pa-tients  and  16  clinical  and  pathological  variables.   Initially,  11machine  learning  (ML)  models  were  employed  using  the  com-plete dataset, where the Support Vector Machines (SVM) modelachieved  the  highest  accuracy  of  0.9481.   To  reduce  complex-ity and redundancy, feature selection was carried out using theBoruta algorithm, and the same ML models were applied to thereduced  dataset,  where  it  was  observed  that  the  Logistic  Re-gression (LR) model obtained the maximum accuracy of 0.9611.However, these ML models often lack uncertainty quantification,which  is  critical  in  clinical  decision  making.   Therefore,  to  ad-dress this limitation, the Bayesian Neural Networks (BNN) withsix varying prior distributions,  including Normal (0,1),  Normal(0,10), Laplace (0,1), Cauchy (0,1), Cauchy (0,2.5), and Horse-shoe (1),  were implemented on both the complete and reduceddatasets.   The  BNN  model  with  Normal  (0,10)  prior  distribu-tion exhibited maximum accuracies of 0.9740 and 0.9870 beforeand  after  feature  selection,  respectively.    As  the  BNN  modelwith N(0,10) prior distribution employed after feature selectionoutperformed  all  the  other  models,  it  was  chosen  as  the  best-performing model for DTC recurrence classification.  This modelwas further analyzed using epistemic and aleatoric uncertainty,reflecting the model’s confidence in its prediction.  In addition, toenhance this model’s interpretability, SHapley Additive exPlana-tions (SHAP) values were calculated, providing valuable insightsinto the contribution of key variables to the model’s output.",
    bibtex: "@article{mudiyanselage2026differentiated,\n title={Differentiated Thyroid Cancer Recurrence Classification Using Machine Learning Models and Bayesian Neural Networks with Varying Priors: A SHAP-Based Interpretation of the Best Performing Model},\n author={Mudiyanselage, Nadeesha Shyami Kumari Herath and Kumari, HMLS and Nawarathne, UMMPK},\n journal={International Journal of Research in Computing (IJRC)},\n volume={5},\n number={2},\n pages={17--42},\n year={2026}}",
    links: { pdf: "https://www.ijrcom.org/index.php/ijrc/article/view/161/22" }
  },
  {
    year: 2025,
    type: "Journal Article",
    status: "",
    title: "Speech Emotion Recognition with Hybrid CNN-LSTM and Transformers Models: Evaluating the Hybrid Model Using Grad-CAM",
    venue: "International Journal of Research in Computing (IJRC)",
    authors: "HMLS Kumari, HMNS Kumari, UMMPK Nawarathne",
    keywords: ["Convolutional Neural Network","Grad-CAM","Hybrid Model","Image Transformers","Long Short-Term Memory","Speech Emotion Recognition"],
    abstract: "Emotionalrecognitionandclassificationusingartificialintelligence(AI)techniquesplayacrucialrolein human-computer  interaction  (HCI).  It  enables  the  prediction  of  human  emotions  from  audio  signals  with  broad applications  in  psychology,  medicine,  education,  entertainment,  etc.  This  research  focused  on  speech-emotion recognition (SER) by employing classification methods and transformer models using the  Toronto Emotional  Speech Set (TESS). Initially, acoustic features were extracted using different feature extraction techniques, including chroma, Mel-scaled spectrogram, contrast features, and Mel Frequency Cepstral Coefficients (MFCCs) from the audio dataset. Then, this study employed a Convolutional Neural Network (CNN), Long Short-Term Memory (LSTM), and a hybrid CNN-LSTM  model  to  classify  emotions.  To  compare  the  performance  of  these  models,  classical  image  transformer models  such  as  ViT  (Visual  Image  Transformer)  and  BEiT  (Bidirectional  Encoder  Representation  of  Images)  were employedontheMel-spectogramsderivedfromthesamedataset.Evaluationmetricssuchasaccuracy,precision,recall, and F1-scorewere calculatedfor eachofthese models to ensure a comprehensiveperformance comparison. According totheresults,thehybridmodelperformedbetterthanothermodelsbyachievinganaccuracyof99.01%,whiletheCNN, LSTM,ViT,andBEiTmodelsdemonstratedaccuraciesof95.37%,98.57%,98%,and98.3%, respectively.Tointerpret theoutputofthishybridmodelandtoprovidevisualexplanationsofitspredictions,theGrad-CAM(Gradient-weighted ClassActivationMappings)wasobtained.Thistechniquereducedtheblack-boxcharacterofdeepmodels,makingthem morereliabletouseinclinicalandotherdelicate contexts. Inconclusion,thehybridCNN-LSTMmodelshowed strong performance in audio-based emotion classification.",
    bibtex: "@article{mudiyanselage2025speech,\n title={Speech emotion recognition with hybrid CNN-LSTM and transformers models: Evaluating the hybrid model using Grad-CAM},\n author={Mudiyanselage, Lihini Sangeetha Kumari Herath and Kumari, HMNS and Nawarathne, UMMPK},\n journal={International Journal of Research in Computing (IJRC)},\n volume={4},\n number={II},\n pages={56--66},\n year={2025}}",
    links: { pdf: "https://www.ijrcom.org/index.php/ijrc/article/view/159/10" }
  },
  
  {
    year: 2024,
    type: "Conference Paper",
    status: "Under Review",
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

function formatAuthors(authors){
  const myNames = [
    "Nadeesha Herath Mudiyanselage",
    "HMNS Kumari"
  ];

  let safeAuthors = esc(authors);

  myNames.forEach(name => {
    const safeName = esc(name);

    safeAuthors = safeAuthors.replaceAll(
      safeName,
      `<strong>${safeName}</strong>`
    );
  });

  return safeAuthors;
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
  if(t.includes("thesis")) return "tag-thesis";
  if(t.includes("abstract")) return "tag-abstract";
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
      const status = p.status.trim().toLowerCase();
      const isUnderReview = status === "under review";
      const statusClass =
        status === "accepted"
          ? "status-accepted"
          : status === "under review"
          ? "status-under-review"
          : "status-default";
      const statusHtml = p.status
        ? `<span class="pub-status ${statusClass}">${esc(p.status)}</span>`
        : "";

      const pdfHtml = !isUnderReview && p.links?.pdf
  ? `<a class="pdf-link" href="${p.links.pdf}" target="_blank" rel="noopener">
       ${pdfIcon()}<span>PDF</span>
     </a>`
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
        <div class="pub-authors">${formatAuthors(p.authors)}</div>
        <div class="pub-keywords">
        ${p.keywords.map(k => `<span>${esc(k)}</span>`).join("")}
        </div>
${!isUnderReview ? `
  <div class="pub-actions">
    ${pdfHtml}

    <button data-target="${id}-abs" data-kind="abstract">
      Abstract ${arrowIcon()}
    </button>

    <button data-target="${id}-bib" data-kind="bibtex">
      BibTeX ${arrowIcon()}
    </button>
  </div>

  <div id="${id}-abs" class="details details-abstract">
    ${esc(p.abstract)}
  </div>

  <pre id="${id}-bib" class="details details-bibtex">${esc(p.bibtex)}</pre>
` : ""}
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
