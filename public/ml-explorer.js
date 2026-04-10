const STACK = [
  {
    name: "Python",
    cat: "Language",
    abbr: "Py",
    bg: "rgba(123,114,233,0.2)",
    fg: "#a09ced",
    detail:
      "Core language for all data processing, model training, and evaluation scripts. Chosen for its rich scientific computing ecosystem.",
  },
  {
    name: "Jupyter Notebook",
    cat: "Environment",
    abbr: "Jn",
    bg: "rgba(240,167,48,0.2)",
    fg: "#f0a730",
    detail:
      "Interactive notebooks for exploratory analysis, step-by-step documentation, and visualising results alongside the code that produced them.",
  },
  {
    name: "NumPy",
    cat: "Numerics",
    abbr: "Np",
    bg: "rgba(55,138,221,0.2)",
    fg: "#5aa3e8",
    detail:
      "Efficient numerical operations on signal arrays - statistical summaries, FFT, and matrix manipulations on raw UWB channel data.",
  },
  {
    name: "pandas",
    cat: "Data handling",
    abbr: "Pd",
    bg: "rgba(52,196,139,0.2)",
    fg: "#34c48b",
    detail:
      "Handles tabular data loading, cleaning, merging, and feature-engineering transforms before data enters the model pipeline.",
  },
  {
    name: "scikit-learn",
    cat: "ML framework",
    abbr: "Sk",
    bg: "rgba(240,106,66,0.2)",
    fg: "#f06a42",
    detail:
      "Primary ML framework - preprocessing transformers, classifiers, regressors, cross-validation, and pipeline utilities all under one API.",
  },
  {
    name: "Visualization",
    cat: "Plotting",
    abbr: "Vz",
    bg: "rgba(100,180,50,0.2)",
    fg: "#7ec850",
    detail:
      "Libraries like Matplotlib and Seaborn are used to explore feature distributions, plot confusion matrices, and inspect model performance curves.",
  },
  {
    name: "Model utilities",
    cat: "Serialization",
    abbr: "Mu",
    bg: "rgba(255,255,255,0.1)",
    fg: "rgba(255,255,255,0.6)",
    detail:
      "Tools like joblib save trained model artifacts to disk, enabling inference and reproducibility without retraining from scratch.",
  },
];

const ALGOS = [
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "Data preprocessing",
    desc: "Cleans raw UWB readings - handles missing values, resamples irregular timestamps, and structures features into a tidy tabular format.",
  },
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "Train / test split",
    desc: "Holds out data before any model sees it, giving an unbiased measure of generalisation on unseen UWB signals.",
  },
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "Feature scaling",
    desc: "Normalises feature ranges so magnitude-sensitive models treat all signal features equitably during training.",
  },
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "PCA",
    desc: "Compresses high-dimensional UWB channel features into fewer uncorrelated components, reducing noise and dimensionality.",
  },
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "Outlier detection",
    desc: "Identifies anomalous measurements caused by multipath reflections or sensor glitches and removes them before model training.",
  },
  {
    cat: "pre",
    badge: "Preprocessing",
    bc: "bg-pre",
    name: "Feature selection",
    desc: "Retains the most informative signal features, reducing model complexity and preventing overfitting on noisy UWB data.",
  },
  {
    cat: "cls",
    badge: "Classification",
    bc: "bg-cls",
    name: "Random Forest",
    desc: "Ensemble of decision trees voting on LOS vs NLOS. Robust to noisy outliers and handles non-linear signal boundaries well.",
  },
  {
    cat: "cls",
    badge: "Classification",
    bc: "bg-cls",
    name: "Gradient Boosting",
    desc: "Sequentially builds trees, each correcting prior errors. Powerful at capturing subtle patterns in channel features.",
  },
  {
    cat: "cls",
    badge: "Classification",
    bc: "bg-cls",
    name: "XGBoost",
    desc: "Optimised, regularised boosting - typically faster and more accurate than standard gradient boosting on tabular data.",
  },
  {
    cat: "cls",
    badge: "Classification",
    bc: "bg-cls",
    name: "CatBoost",
    desc: "Ordered boosting variant that reduces overfitting. Works well out of the box on the LOS/NLOS classification problem.",
  },
  {
    cat: "reg",
    badge: "Regression",
    bc: "bg-reg",
    name: "Linear Regression",
    desc: "Fits a linear relationship between signal features and estimated distance. Fast and interpretable baseline model.",
  },
  {
    cat: "reg",
    badge: "Regression",
    bc: "bg-reg",
    name: "RF Regressor",
    desc: "Random Forest adapted to continuous output: averaging tree predictions yields smooth, robust distance estimates.",
  },
  {
    cat: "reg",
    badge: "Regression",
    bc: "bg-reg",
    name: "GB Regressor",
    desc: "Gradient Boosting minimises a regression loss iteratively, yielding accurate range values from signal features.",
  },
  {
    cat: "reg",
    badge: "Regression",
    bc: "bg-reg",
    name: "Hist. GB Regressor",
    desc: "Histogram-based boosting bins features before splitting - significantly faster on large UWB datasets with many samples.",
  },
  {
    cat: "ens",
    badge: "Ensemble",
    bc: "bg-ens",
    name: "Stacking ensemble",
    desc: "A meta-learner trained on base model predictions learns the optimal way to combine classifiers for LOS/NLOS detection.",
  },
  {
    cat: "ens",
    badge: "Ensemble",
    bc: "bg-ens",
    name: "Voting ensemble",
    desc: "Aggregates regressors by averaging predictions - simple but effective at reducing variance in distance estimates.",
  },
];

const CHIPS = [
  { cat: "all", label: "All", cls: "c-all" },
  { cat: "pre", label: "Preprocessing", cls: "c-pre" },
  { cat: "cls", label: "Classification", cls: "c-cls" },
  { cat: "reg", label: "Regression", cls: "c-reg" },
  { cat: "ens", label: "Ensemble", cls: "c-ens" },
];

function renderStackGrid(targetId = "stack-grid") {
  const grid = document.getElementById(targetId);
  if (!grid) {
    return;
  }

  STACK.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "sk-card";
    card.innerHTML = `<div class="sk-head"><div class="sk-ico" style="background:${item.bg};color:${item.fg}">${item.abbr}</div><div><div class="sk-name">${item.name}</div><div class="sk-cat">${item.cat}</div></div><span class="sk-arrow">▾</span></div><div class="sk-body" id="sb${index}">${item.detail}</div>`;

    card.addEventListener("click", () => {
      const body = document.getElementById(`sb${index}`);
      if (!body) {
        return;
      }

      const wasOpen = body.classList.contains("open");
      document.querySelectorAll(".sk-body").forEach((node) => node.classList.remove("open"));
      document.querySelectorAll(".sk-card").forEach((node) => node.classList.remove("open"));

      if (!wasOpen) {
        body.classList.add("open");
        card.classList.add("open");
      }
    });

    grid.appendChild(card);
  });
}

function renderAlgoExplorer(filterId = "filter-row", gridId = "algo-grid") {
  const filterRow = document.getElementById(filterId);
  const grid = document.getElementById(gridId);
  if (!filterRow || !grid) {
    return;
  }

  ALGOS.forEach((item) => {
    const card = document.createElement("div");
    card.className = "al-card";
    card.dataset.cat = item.cat;
    card.innerHTML = `<span class="al-badge ${item.bc}">${item.badge}</span><div class="al-name">${item.name}</div><div class="al-desc">${item.desc}</div>`;
    grid.appendChild(card);
  });

  CHIPS.forEach(({ cat, label, cls }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${cat === "all" ? " c-all" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((node) => {
        node.className = "chip";
      });
      button.className = `chip ${cls}`;
      document.querySelectorAll(".al-card").forEach((node) => {
        node.classList.toggle("hidden", cat !== "all" && node.dataset.cat !== cat);
      });
    });
    filterRow.appendChild(button);
  });
}

function buildComplexityChart(canvasId = "cmp") {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const render = () => {
    const container = canvas.parentElement;
    if (!container) {
      return;
    }

    const width = Math.max(container.clientWidth - 28, 280);
    const height = 140;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const labels = [
      "Linear Reg.",
      "Random Forest",
      "Grad. Boost",
      "XGBoost",
      "CatBoost",
      "Stacking",
      "Voting",
    ];
    const values = [1, 3, 4, 4.5, 4.5, 6, 3.5];
    const colors = ["#3a5f8a", "#5aa3e8", "#7b72e9", "#a09ced", "#34c48b", "#f06a42", "#f0a730"];
    const maxValue = 7;
    const paddingTop = 6;
    const paddingBottom = 32;
    const paddingLeft = 4;
    const paddingRight = 4;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    const slotWidth = chartWidth / labels.length;
    const barWidth = Math.min(Math.floor(slotWidth * 0.54), 46);

    ctx.clearRect(0, 0, width, height);

    values.forEach((value, index) => {
      const barHeight = Math.round((value / maxValue) * chartHeight);
      const barX = paddingLeft + index * slotWidth + (slotWidth - barWidth) / 2;
      const barY = paddingTop + chartHeight - barHeight;
      const radius = 4;

      ctx.fillStyle = colors[index];
      ctx.beginPath();
      ctx.moveTo(barX + radius, barY);
      ctx.lineTo(barX + barWidth - radius, barY);
      ctx.quadraticCurveTo(barX + barWidth, barY, barX + barWidth, barY + radius);
      ctx.lineTo(barX + barWidth, barY + barHeight);
      ctx.lineTo(barX, barY + barHeight);
      ctx.lineTo(barX, barY + radius);
      ctx.quadraticCurveTo(barX, barY, barX + radius, barY);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "9.5px system-ui,sans-serif";
      ctx.textAlign = "center";
      const centerX = barX + barWidth / 2;
      const parts = labels[index].split(" ");
      if (parts.length === 1) {
        ctx.fillText(parts[0], centerX, height - paddingBottom + 13);
      } else {
        ctx.fillText(parts[0], centerX, height - paddingBottom + 12);
        ctx.fillText(parts.slice(1).join(" "), centerX, height - paddingBottom + 23);
      }
    });
  };

  render();
  window.addEventListener("resize", render);
}

window.MLExplorer = {
  renderStackGrid,
  renderAlgoExplorer,
  buildComplexityChart,
};
