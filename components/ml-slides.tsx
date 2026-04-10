"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

// ── shared styles ──────────────────────────────────────────────────────────────

const c = {
  bg: "#080c15",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.1)",
  borderSubtle: "rgba(255,255,255,0.08)",
  text: "#fff",
  textBody: "rgba(255,255,255,0.55)",
  textDim: "rgba(255,255,255,0.4)",
  purple: "#7b72e9",
  purpleLight: "#a09ced",
  purpleBg: "rgba(123,114,233,0.2)",
  green: "#34c48b",
  greenBg: "rgba(52,196,139,0.15)",
  blue: "#5aa3e8",
  blueBg: "rgba(55,138,221,0.15)",
  amber: "#f0a730",
  amberBg: "rgba(240,167,48,0.15)",
  orange: "#f06a42",
  orangeBg: "rgba(240,106,66,0.15)",
};

const page: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "18px 20px",
  gap: "14px",
  overflow: "hidden",
  background: c.bg,
  color: c.text,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
  fontSize: "15px",
  lineHeight: 1.5,
};

const headerTitle: CSSProperties = {
  fontSize: "18px",
  fontWeight: 650,
  letterSpacing: "-0.02em",
};

const card: CSSProperties = {
  background: c.card,
  border: `0.5px solid ${c.border}`,
  borderRadius: "12px",
  padding: "15px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minHeight: 0,
  overflow: "hidden",
};

const dot = (color: string): CSSProperties => ({
  width: 8,
  height: 8,
  borderRadius: 3,
  flexShrink: 0,
  background: color,
});

const cardTitle: CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "-0.01em",
};

const cardBody: CSSProperties = {
  fontSize: "15px",
  color: c.text,
  lineHeight: 1.6,
};

// ── Overview ───────────────────────────────────────────────────────────────────

function MLOverview() {
  const cards = [
    {
      color: c.purple,
      title: "What is UWB?",
      body: "Ultra-wideband is a short-range radio technology for precise indoor positioning. Signal quality depends on whether the path is clear (LOS) or blocked (NLOS) — and the difference drives ranging error.",
    },
    {
      color: c.green,
      title: "Classification task",
      body: "Binary classification — is an incoming UWB signal travelling via a clear line-of-sight path, or is it reflected and diffracted around obstacles? Getting this right is the first step toward reliable ranging.",
    },
    {
      color: c.amber,
      title: "Regression task",
      body: "After identifying signal type, a regressor estimates the true distance — correcting for the ranging error that NLOS propagation introduces into raw measurements from the sensor hardware.",
    },
  ];

  return (
    <div style={page}>
      <div><div style={headerTitle}>Overview</div></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1, minHeight: 0 }}>
        {cards.map((c) => (
          <div key={c.title} style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={dot(c.color)} />
              <div style={cardTitle}>{c.title}</div>
            </div>
            <div style={cardBody}>{c.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tech Stack ─────────────────────────────────────────────────────────────────

const STACK = [
  { name: "Python", cat: "Language", abbr: "Py", bg: "rgba(123,114,233,0.2)", fg: "#a09ced", detail: "Core language for all data processing, model training, and evaluation scripts. Chosen for its rich scientific computing ecosystem." },
  { name: "Jupyter Notebook", cat: "Environment", abbr: "Jn", bg: "rgba(240,167,48,0.2)", fg: "#f0a730", detail: "Interactive notebooks for exploratory analysis, step-by-step documentation, and visualising results alongside the code that produced them." },
  { name: "NumPy", cat: "Numerics", abbr: "Np", bg: "rgba(55,138,221,0.2)", fg: "#5aa3e8", detail: "Efficient numerical operations on signal arrays - statistical summaries, FFT, and matrix manipulations on raw UWB channel data." },
  { name: "pandas", cat: "Data handling", abbr: "Pd", bg: "rgba(52,196,139,0.2)", fg: "#34c48b", detail: "Handles tabular data loading, cleaning, merging, and feature-engineering transforms before data enters the model pipeline." },
  { name: "scikit-learn", cat: "ML framework", abbr: "Sk", bg: "rgba(240,106,66,0.2)", fg: "#f06a42", detail: "Primary ML framework - preprocessing transformers, classifiers, regressors, cross-validation, and pipeline utilities all under one API." },
  { name: "Visualization", cat: "Plotting", abbr: "Vz", bg: "rgba(100,180,50,0.2)", fg: "#7ec850", detail: "Libraries like Matplotlib and Seaborn are used to explore feature distributions, plot confusion matrices, and inspect model performance curves." },
  { name: "Model utilities", cat: "Serialization", abbr: "Mu", bg: "rgba(255,255,255,0.1)", fg: "rgba(255,255,255,0.6)", detail: "Tools like joblib save trained model artifacts to disk, enabling inference and reproducibility without retraining from scratch." },
];

function MLTechStack() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={page}>
      <div><div style={headerTitle}>Tech Stack</div></div>
      <div style={{ fontSize: "12px", color: c.textDim }}>Click any card to see how that tool is used in this project.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, flex: 1, minHeight: 0, alignContent: "start" }}>
        {STACK.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.name}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                ...card,
                padding: "12px",
                cursor: "pointer",
                borderColor: isOpen ? c.purple : c.border,
                transition: "border-color 0.14s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{ width: 32, height: 32, borderRadius: 7, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, background: item.bg, color: item.fg }}>
                  {item.abbr}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: "10.5px", color: c.textDim, marginTop: 1 }}>{item.cat}</div>
                </div>
                <span style={{ marginLeft: "auto", fontSize: "10px", color: "rgba(255,255,255,0.3)", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
              </div>
              <div style={{ maxHeight: isOpen ? 80 : 0, overflow: "hidden", fontSize: "12px", color: c.textBody, lineHeight: 1.52, borderTop: `0.5px solid ${c.borderSubtle}`, paddingTop: isOpen ? 9 : 0, marginTop: isOpen ? 9 : 0, transition: "max-height 0.28s ease, padding-top 0.18s, margin-top 0.18s" }}>
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Algorithms ─────────────────────────────────────────────────────────────────

const ALGOS = [
  { cat: "pre", badge: "Preprocessing", name: "Data preprocessing", desc: "Cleans raw UWB readings - handles missing values, resamples irregular timestamps, and structures features into a tidy tabular format." },
  { cat: "pre", badge: "Preprocessing", name: "Train / test split", desc: "Holds out data before any model sees it, giving an unbiased measure of generalisation on unseen UWB signals." },
  { cat: "pre", badge: "Preprocessing", name: "Feature scaling", desc: "Normalises feature ranges so magnitude-sensitive models treat all signal features equitably during training." },
  { cat: "pre", badge: "Preprocessing", name: "PCA", desc: "Compresses high-dimensional UWB channel features into fewer uncorrelated components, reducing noise and dimensionality." },
  { cat: "pre", badge: "Preprocessing", name: "Outlier detection", desc: "Identifies anomalous measurements caused by multipath reflections or sensor glitches and removes them before model training." },
  { cat: "pre", badge: "Preprocessing", name: "Feature selection", desc: "Retains the most informative signal features, reducing model complexity and preventing overfitting on noisy UWB data." },
  { cat: "cls", badge: "Classification", name: "Random Forest", desc: "Ensemble of decision trees voting on LOS vs NLOS. Robust to noisy outliers and handles non-linear signal boundaries well." },
  { cat: "cls", badge: "Classification", name: "Gradient Boosting", desc: "Sequentially builds trees, each correcting prior errors. Powerful at capturing subtle patterns in channel features." },
  { cat: "cls", badge: "Classification", name: "XGBoost", desc: "Optimised, regularised boosting - typically faster and more accurate than standard gradient boosting on tabular data." },
  { cat: "cls", badge: "Classification", name: "CatBoost", desc: "Ordered boosting variant that reduces overfitting. Works well out of the box on the LOS/NLOS classification problem." },
  { cat: "reg", badge: "Regression", name: "Linear Regression", desc: "Fits a linear relationship between signal features and estimated distance. Fast and interpretable baseline model." },
  { cat: "reg", badge: "Regression", name: "RF Regressor", desc: "Random Forest adapted to continuous output: averaging tree predictions yields smooth, robust distance estimates." },
  { cat: "reg", badge: "Regression", name: "GB Regressor", desc: "Gradient Boosting minimises a regression loss iteratively, yielding accurate range values from signal features." },
  { cat: "reg", badge: "Regression", name: "Hist. GB Regressor", desc: "Histogram-based boosting bins features before splitting - significantly faster on large UWB datasets with many samples." },
  { cat: "ens", badge: "Ensemble", name: "Stacking ensemble", desc: "A meta-learner trained on base model predictions learns the optimal way to combine classifiers for LOS/NLOS detection." },
  { cat: "ens", badge: "Ensemble", name: "Voting ensemble", desc: "Aggregates regressors by averaging predictions - simple but effective at reducing variance in distance estimates." },
];

const BADGE_STYLES: Record<string, CSSProperties> = {
  pre: { background: c.greenBg, color: c.green },
  cls: { background: c.blueBg, color: c.blue },
  reg: { background: c.amberBg, color: c.amber },
  ens: { background: c.orangeBg, color: c.orange },
};

const CHIPS = [
  { cat: "all", label: "All", style: { background: c.purpleBg, color: c.purpleLight, borderColor: "rgba(123,114,233,0.3)" } },
  { cat: "pre", label: "Preprocessing", style: { background: c.greenBg, color: c.green, borderColor: "rgba(52,196,139,0.3)" } },
  { cat: "cls", label: "Classification", style: { background: c.blueBg, color: c.blue, borderColor: "rgba(55,138,221,0.3)" } },
  { cat: "reg", label: "Regression", style: { background: c.amberBg, color: c.amber, borderColor: "rgba(240,167,48,0.3)" } },
  { cat: "ens", label: "Ensemble", style: { background: c.orangeBg, color: c.orange, borderColor: "rgba(240,106,66,0.3)" } },
];

function MLAlgorithms() {
  const [filter, setFilter] = useState("all");

  const chipBase: CSSProperties = {
    cursor: "pointer",
    padding: "4px 11px",
    borderRadius: 20,
    fontSize: "12px",
    fontWeight: 500,
    border: `0.5px solid ${c.border}`,
    background: "rgba(255,255,255,0.05)",
    color: c.textBody,
    transition: "all 0.12s",
  };

  return (
    <div style={page}>
      <div><div style={headerTitle}>Algorithms</div></div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {CHIPS.map(({ cat, label, style }) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            style={{ ...chipBase, ...(filter === cat ? style : {}) }}
          >
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9, flex: 1, minHeight: 0, overflow: "auto", alignContent: "start" }}>
        {ALGOS.filter((a) => filter === "all" || a.cat === filter).map((a) => (
          <div key={a.name} style={{ ...card, padding: "11px 12px" }}>
            <span style={{ display: "inline-block", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "2px 7px", borderRadius: 10, marginBottom: 2, alignSelf: "flex-start", ...BADGE_STYLES[a.cat] }}>
              {a.badge}
            </span>
            <div style={{ fontSize: "13px", fontWeight: 500 }}>{a.name}</div>
            <div style={{ fontSize: "11.5px", color: c.textBody, lineHeight: 1.48 }}>{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Pipeline ───────────────────────────────────────────────────────────────────

function MLPipeline() {
  return (
    <div style={page}>
      <div><div style={headerTitle}>Pipeline</div></div>
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        <svg width="100%" height="100%" viewBox="5 42 616 224" preserveAspectRatio="xMidYMid meet" role="img" aria-label="ML pipeline">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <style>{`@keyframes dash{to{stroke-dashoffset:-20}}.fl{animation:dash 1.8s linear infinite}`}</style>

          {/* Raw UWB data */}
          <rect x="10" y="106" width="100" height="48" rx="8" fill="rgba(123,114,233,0.15)" stroke={c.purple} strokeWidth="1" />
          <text x="60" y="126" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill={c.purpleLight}>Raw UWB data</text>
          <text x="60" y="143" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.45)">Sensor readings</text>

          <line x1="110" y1="130" x2="138" y2="130" stroke={c.purple} strokeWidth="1.2" markerEnd="url(#arr)" strokeDasharray="5 3" className="fl" />

          {/* Preprocessing */}
          <rect x="142" y="76" width="122" height="108" rx="8" fill="rgba(52,196,139,0.12)" stroke={c.green} strokeWidth="0.8" />
          <text x="203" y="95" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill={c.green}>Preprocessing</text>
          {[["Cleaning & scaling", 102], ["Outlier detection", 123], ["PCA + feature select", 144]].map(([label, y]) => (
            <g key={label as string}>
              <rect x="152" y={y as number} width="102" height="17" rx="4" fill="rgba(255,255,255,0.06)" stroke={c.borderSubtle} strokeWidth="0.5" />
              <text x="203" y={(y as number) + 12} textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.8)">{label as string}</text>
            </g>
          ))}

          {/* Arrows to classification/regression */}
          <path d="M264 110 L294 110 L294 82 L322 82" fill="none" stroke={c.green} strokeWidth="1.2" markerEnd="url(#arr)" strokeDasharray="5 3" className="fl" style={{ animationDelay: ".3s" }} />
          <path d="M264 152 L294 152 L294 188 L322 188" fill="none" stroke={c.green} strokeWidth="1.2" markerEnd="url(#arr)" strokeDasharray="5 3" className="fl" style={{ animationDelay: ".6s" }} />

          {/* Classification */}
          <rect x="326" y="50" width="124" height="96" rx="8" fill="rgba(55,138,221,0.12)" stroke={c.blue} strokeWidth="0.8" />
          <text x="388" y="68" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill={c.blue}>Classification</text>
          <text x="388" y="82" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(90,163,232,0.7)">LOS vs NLOS</text>
          {[["Random Forest", 88], ["XGBoost / CatBoost", 107], ["Stacking ensemble", 126]].map(([label, y]) => (
            <g key={label as string}>
              <rect x="336" y={y as number} width="104" height="15" rx="4" fill="rgba(255,255,255,0.06)" stroke={c.borderSubtle} strokeWidth="0.5" />
              <text x="388" y={(y as number) + 11} textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.8)">{label as string}</text>
            </g>
          ))}

          {/* Regression */}
          <rect x="326" y="164" width="124" height="96" rx="8" fill="rgba(240,167,48,0.12)" stroke={c.amber} strokeWidth="0.8" />
          <text x="388" y="182" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill={c.amber}>Regression</text>
          <text x="388" y="196" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(240,167,48,0.7)">Distance estimation</text>
          {[["RF / GB Regressor", 202], ["Hist. Gradient Boost", 221], ["Voting ensemble", 240]].map(([label, y]) => (
            <g key={label as string}>
              <rect x="336" y={y as number} width="104" height="15" rx="4" fill="rgba(255,255,255,0.06)" stroke={c.borderSubtle} strokeWidth="0.5" />
              <text x="388" y={(y as number) + 11} textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.8)">{label as string}</text>
            </g>
          ))}

          {/* Arrows to evaluation */}
          <path d="M450 98 L474 98 L474 138 L502 138" fill="none" stroke={c.blue} strokeWidth="1.2" markerEnd="url(#arr)" strokeDasharray="5 3" className="fl" style={{ animationDelay: ".9s" }} />
          <path d="M450 212 L474 212 L474 170 L502 170" fill="none" stroke={c.amber} strokeWidth="1.2" markerEnd="url(#arr)" strokeDasharray="5 3" className="fl" style={{ animationDelay: "1.1s" }} />

          {/* Evaluation */}
          <rect x="506" y="100" width="108" height="108" rx="8" fill="rgba(240,106,66,0.12)" stroke={c.orange} strokeWidth="0.8" />
          <text x="560" y="118" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill={c.orange}>Evaluation</text>
          {[["Classif. metrics", 124], ["Regression metrics", 143], ["Cross-validation", 162], ["Model serialization", 181]].map(([label, y]) => (
            <g key={label as string}>
              <rect x="516" y={y as number} width="88" height="15" rx="4" fill="rgba(255,255,255,0.06)" stroke={c.borderSubtle} strokeWidth="0.5" />
              <text x="560" y={(y as number) + 11} textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.8)">{label as string}</text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div style={{ position: "absolute", bottom: 0, left: 0, display: "flex", gap: 14 }}>
          {[
            { label: "Preprocessing", color: c.green },
            { label: "Classification", color: c.blue },
            { label: "Regression", color: c.amber },
            { label: "Evaluation", color: c.orange },
          ].map(({ label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "11px", color: c.textBody }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Takeaways ──────────────────────────────────────────────────────────────────

const TAKEAWAYS = [
  { title: "Two-stage pipeline design", desc: "Classifying the signal as LOS or NLOS first gives the regressor cleaner, structured input - improving distance accuracy rather than asking one model to solve both problems simultaneously." },
  { title: "Ensemble methods improve robustness", desc: "Stacking and voting ensembles combine RF, Gradient Boosting, XGBoost, and CatBoost. Ensembles reduce variance and tend to generalise better on noisy UWB multipath data." },
  { title: "Preprocessing is critical for signal data", desc: "UWB measurements carry multipath noise and outliers. Feature scaling, PCA, and outlier detection are applied before any model sees the data, preventing garbage-in-garbage-out outcomes." },
  { title: "Notebook-driven reproducibility", desc: "Every step - data loading to model serialization - is documented in Jupyter. Combined with saved artifacts, the workflow is easy to reproduce, extend, and share with collaborators." },
  { title: "scikit-learn as the backbone", desc: "A unified API across all preprocessors and models makes it simple to build pipelines, swap estimators, and run grid-search cross-validation consistently throughout the project." },
  { title: "Histogram-based boosting for speed", desc: "HistGradientBoosting bins continuous features before splitting - significantly faster on large datasets than standard gradient boosting while retaining comparable accuracy." },
];

function MLTakeaways() {
  return (
    <div style={page}>
      <div><div style={headerTitle}>Takeaways</div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minHeight: 0, overflow: "auto" }}>
        {TAKEAWAYS.map((t, i) => (
          <div key={t.title} style={{ ...card, flexDirection: "row", gap: 10, alignItems: "flex-start", padding: "11px 13px" }}>
            <div style={{ width: 21, height: 21, borderRadius: "50%", flexShrink: 0, background: c.purpleBg, color: c.purpleLight, fontSize: "10.5px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: 2 }}>{t.title}</div>
              <div style={{ fontSize: "12px", color: c.textBody, lineHeight: 1.5 }}>{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Export mapping ──────────────────────────────────────────────────────────────

const ML_SLIDES: Record<string, React.ComponentType> = {
  "/ML.html": MLOverview,
  "/ML-tech-stack.html": MLTechStack,
  "/ML-algorithms.html": MLAlgorithms,
  "/ML-pipeline.html": MLPipeline,
  "/ML-takeaways.html": MLTakeaways,
};

export function getMLSlide(src: string): React.ComponentType | null {
  return ML_SLIDES[src] ?? null;
}
