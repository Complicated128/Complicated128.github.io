const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("sean-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("sean-theme", theme);
  themeToggle.setAttribute("aria-pressed", theme === "light");
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${theme === "light" ? "dark" : "light"} mode`,
  );
}

setTheme(initialTheme);
themeToggle.addEventListener("click", () =>
  setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
);

document.documentElement.classList.add("motion-ready");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !window.motionTools) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const { inView, animate, stagger } = window.motionTools;
  inView(
    ".reveal",
    (element) => {
      element.classList.add("is-visible");
      animate(
        element,
        { opacity: [0, 1], y: [18, 0] },
        { duration: 0.65, delay: stagger(0.04), ease: [0.22, 1, 0.36, 1] },
      );
    },
    { amount: 0.15 },
  );
  animate(
    ".orbit-outer",
    { rotate: [0, 360] },
    { duration: 35, repeat: Infinity, easing: "linear" },
  );
  animate(
    ".orbit-inner",
    { rotate: [0, -360] },
    { duration: 25, repeat: Infinity, easing: "linear" },
  );
}

const caseStudies = {
  fragcomms: {
    type: "Full-stack platform",
    title: "FragComms",
    summary:
      "A communication platform designed around fast, structured team conversations.",
    slides: [
      {
        label: "Overview",
        title: "Add the project thesis here.",
        body: "Use this slide to explain what FragComms is and who it helps.",
        details: ["Product context", "Primary users", "Project scope"],
      },
      {
        label: "Challenge",
        title: "What problem did the team need to solve?",
        body: "Describe the communication workflow, limitation, or user pain that shaped the project.",
        details: ["User need", "Constraints", "Success criteria"],
      },
      {
        label: "Approach",
        title: "How did you turn the idea into a working product?",
        body: "Describe the features, architecture, and decisions you personally owned.",
        details: ["React / Vite", "Express API", "PostgreSQL"],
      },
      {
        label: "Technical detail",
        title: "Show one decision worth discussing.",
        body: "Use this space for a data flow, interface decision, tradeoff, or implementation detail.",
        details: ["Decision", "Alternative", "Why this choice"],
      },
      {
        label: "Outcome",
        title: "What changed because you built it?",
        body: "Add measurable results, feedback, adoption, or what you learned from the build.",
        details: ["Result", "Evidence", "Next iteration"],
      },
    ],
  },
  "class-search": {
    type: "Data modeling",
    title: "Class Search Redesign",
    summary:
      "A scalable SQL database redesign intended to replace a legacy class search system.",
    slides: [
      {
        label: "Overview",
        title: "Frame the database redesign.",
        body: "Explain what the original class search system did and what the redesign needed to enable.",
        details: ["System context", "Users", "Scope"],
      },
      {
        label: "Challenge",
        title: "What made the original model difficult to extend?",
        body: "Explain the limitations of the original data model, its queries, and the people using it.",
        details: ["Legacy behavior", "Data relationships", "Future needs"],
      },
      {
        label: "Approach",
        title: "Describe the schema you designed.",
        body: "Walk through normalization, relationships, naming, and the tradeoffs behind the new model.",
        details: ["Schema", "Constraints", "Query patterns"],
      },
      {
        label: "Technical detail",
        title: "Show a query or relationship that matters.",
        body: "Add a query example, entity relationship diagram, or explanation of how the model scales.",
        details: ["Query", "Indexing", "Integration"],
      },
      {
        label: "Outcome",
        title: "What did the redesign make possible?",
        body: "Add query improvements, scalability goals, or future integration plans.",
        details: ["Improvement", "Evidence", "Next step"],
      },
    ],
  },
  "swamp-cooler": {
    type: "Embedded systems",
    title: "Swamp Cooler System",
    summary:
      "An automated cooling system coordinating environmental sensors and physical responses.",
    slides: [
      {
        label: "Overview",
        title: "Introduce the physical system.",
        body: "Explain what the cooler does, where it operates, and why automation was useful.",
        details: ["System goal", "Environment", "Hardware"],
      },
      {
        label: "Challenge",
        title: "What did the hardware need to sense and control?",
        body: "Describe the environmental problem, sensor limitations, and reliability constraints.",
        details: ["Temperature", "Humidity", "Water level"],
      },
      {
        label: "Approach",
        title: "Describe the control loop.",
        body: "Explain how sensor readings became decisions and how those decisions affected the physical system.",
        details: ["C / C++", "ATMega 2560", "Real-time clock"],
      },
      {
        label: "Technical detail",
        title: "Show the sense, decide, act cycle.",
        body: "Use this slide for a wiring diagram, state machine, sensor flow, or failure-handling decision.",
        details: ["Input", "Decision", "Actuator"],
      },
      {
        label: "Outcome",
        title: "How did the system behave in practice?",
        body: "Add observed behavior, reliability details, measurements, or the next improvement you would make.",
        details: ["Test result", "Reliability", "Next iteration"],
      },
    ],
  },
  "youtube-influence": {
    type: "Data engineering / graph analytics",
    title: "YouTube Influence Analysis",
    summary:
      "A graph-based analysis comparing structural influence against raw view counts.",
    slides: [
      {
        label: "Overview",
        title: "Define influence beyond popularity.",
        body: "Explain the question the analysis asked and why a graph model was appropriate.",
        details: ["Dataset", "Research question", "Method"],
      },
      {
        label: "Challenge",
        title: "Why was view count not enough?",
        body: "Explain the difference between raw attention and structural influence in the dataset.",
        details: ["Measurement", "Bias", "Comparison"],
      },
      {
        label: "Approach",
        title: "Describe the data pipeline.",
        body: "Walk through cleaning, graph construction, PageRank, and the tools used to process the data.",
        details: ["Python", "PySpark", "PageRank"],
      },
      {
        label: "Technical detail",
        title: "Show how the graph changes the analysis.",
        body: "Add a graph example, pipeline diagram, or explanation of how the ranking was interpreted.",
        details: ["Nodes", "Edges", "Ranking"],
      },
      {
        label: "Outcome",
        title: "What did the analysis reveal?",
        body: "Add findings, scale information, or an example of a surprising result.",
        details: ["Finding", "Evidence", "Limitation"],
      },
    ],
  },
};

const caseStudyDialog = document.querySelector(".case-study-dialog");
const caseStudyFields = {
  type: document.querySelector("#case-study-type"),
  title: document.querySelector("#case-study-title"),
  summary: document.querySelector("#case-study-summary"),
};
const caseStudyTrack = document.querySelector(".case-study-track");
const caseStudyDots = document.querySelector(".case-study-dots");
const caseStudyProgress = document.querySelector(".case-study-progress");
const previousSlide = document.querySelector("[data-case-study-previous]");
const nextSlide = document.querySelector("[data-case-study-next]");
let currentStudy = null;
let currentSlide = 0;

function createCaseStudySlide(slide, index) {
  const article = document.createElement("article");
  article.className = "case-study-slide";
  article.id = `case-study-slide-${index}`;
  article.setAttribute("aria-labelledby", `${article.id}-title`);

  const label = document.createElement("p");
  label.className = "case-study-slide-label";
  label.textContent = `${String(index + 1).padStart(2, "0")} / ${slide.label}`;

  const title = document.createElement("h3");
  title.id = `${article.id}-title`;
  title.textContent = slide.title;

  const body = document.createElement("p");
  body.className = "case-study-slide-body";
  body.textContent = slide.body;

  const details = document.createElement("ul");
  details.className = "case-study-details";
  slide.details.forEach((detail) => {
    const item = document.createElement("li");
    item.textContent = detail;
    details.append(item);
  });

  article.append(label, title, body, details);
  return article;
}

function updateCaseStudyControls() {
  const totalSlides = currentStudy?.slides.length || 0;
  caseStudyProgress.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;
  previousSlide.disabled = currentSlide === 0;
  nextSlide.disabled = currentSlide === totalSlides - 1;

  caseStudyDots.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
    dot.setAttribute("aria-selected", index === currentSlide);
  });
}

function goToCaseStudySlide(index, behavior = "smooth") {
  if (!currentStudy) return;
  currentSlide = Math.max(0, Math.min(index, currentStudy.slides.length - 1));
  caseStudyTrack.scrollTo({
    left: currentSlide * caseStudyTrack.clientWidth,
    behavior: reducedMotion ? "auto" : behavior,
  });
  updateCaseStudyControls();
}

function renderCaseStudy(study) {
  currentStudy = study;
  currentSlide = 0;
  caseStudyFields.type.textContent = study.type;
  caseStudyFields.title.textContent = study.title;
  caseStudyFields.summary.textContent = study.summary;
  caseStudyTrack.replaceChildren(
    ...study.slides.map((slide, index) => createCaseStudySlide(slide, index)),
  );
  caseStudyDots.replaceChildren(
    ...study.slides.map((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "case-study-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to ${slide.label} slide`);
      dot.addEventListener("click", () => goToCaseStudySlide(index));
      return dot;
    }),
  );
  goToCaseStudySlide(0, "auto");
}

document.querySelectorAll("[data-case-study]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const study = caseStudies[trigger.dataset.caseStudy];
    if (!study || !caseStudyDialog) return;
    renderCaseStudy(study);
    caseStudyDialog.showModal();
  });
});

document
  .querySelector(".dialog-close")
  ?.addEventListener("click", () => caseStudyDialog.close());

caseStudyDialog?.addEventListener("click", (event) => {
  if (event.target === caseStudyDialog) caseStudyDialog.close();
});

previousSlide?.addEventListener("click", () =>
  goToCaseStudySlide(currentSlide - 1),
);
nextSlide?.addEventListener("click", () =>
  goToCaseStudySlide(currentSlide + 1),
);

caseStudyTrack?.addEventListener("scroll", () => {
  if (!currentStudy || !caseStudyTrack.clientWidth) return;
  const slide = Math.round(
    caseStudyTrack.scrollLeft / caseStudyTrack.clientWidth,
  );
  if (slide !== currentSlide) {
    currentSlide = slide;
    updateCaseStudyControls();
  }
});

caseStudyTrack?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToCaseStudySlide(currentSlide - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToCaseStudySlide(currentSlide + 1);
  }
});

if (!reducedMotion) {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--pointer-x", `${x * 100}%`);
      card.style.setProperty("--pointer-y", `${y * 100}%`);
      card.style.setProperty("--tilt-x", `${(x - 0.5) * 3}deg`);
      card.style.setProperty("--tilt-y", `${(0.5 - y) * 3}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

const workflowContent = {
  question: "Start with the person, system, or question that needs attention.",
  model: "Turn the problem into a useful structure, flow, or technical plan.",
  build:
    "Make the idea tangible through interfaces, services, data, or hardware.",
  test: "Use feedback, measurements, and real behavior to find what needs work.",
  improve:
    "Keep the parts that help, change the parts that do not, and repeat.",
};
const workflow = document.querySelector(".workflow");
const workflowCaption = document.querySelector(".workflow-caption");
const workflowSteps = [...document.querySelectorAll("[data-workflow-step]")];
let workflowIndex = 0;

function setWorkflowState(index) {
  workflowIndex = index;
  workflowSteps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === index);
    step.setAttribute("aria-pressed", stepIndex === index);
  });
  const activeStep = workflowSteps[index];
  if (workflowCaption && activeStep) {
    workflowCaption.textContent =
      workflowContent[activeStep.dataset.workflowStep];
  }
}

workflowSteps.forEach((step, index) => {
  step.addEventListener("click", () => setWorkflowState(index));
  step.addEventListener("focus", () => setWorkflowState(index));
});

if (!reducedMotion && workflow) {
  window.setInterval(() => {
    setWorkflowState((workflowIndex + 1) % workflowSteps.length);
  }, 2800);
}
