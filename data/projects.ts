export type Project = {
  id: string;
  title: string;
  type: "PRD" | "Research" | "Teardown" | "Case Study";
  company: string;
  summary: string;
  metrics: string[];
  tags: string[];
  figmaLink?: string;
  pdfLink?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "motorq-revamp",
    title: "Internal Module Revamp — Motorq",
    type: "PRD",
    company: "Motorq",
    summary:
      "Led end-to-end revamp of an internal analytics module, migrating Excel workflows to an integrated UI. Reduced user flow complexity by 50% across 7+ Figma iteration cycles.",
    metrics: ["50% UX improvement", "35%+ faster RCA", "100K+ assets/yr"],
    tags: ["Product Strategy", "Figma", "Stakeholder Mgmt", "PRD"],
    figmaLink: "",
    pdfLink: "",
    featured: true,
  },
  {
    id: "virtual-invigilator",
    title: "Virtual Invigilator — ML System",
    type: "Research",
    company: "PEC",
    summary:
      "Built an ML-powered virtual exam system achieving 85–90% accuracy across 8+ evaluated algorithms. Capable of administering fair exams to 500+ simultaneous students.",
    metrics: ["85–90% ML accuracy", "500+ students", "A+ grade"],
    tags: ["Machine Learning", "System Design", "Python"],
    figmaLink: "",
    pdfLink: "",
    featured: true,
  },
  {
    id: "dustless-duster",
    title: "Dustless Duster — Startup Pitch",
    type: "Case Study",
    company: "PEC ECell",
    summary:
      "Pitched and secured INR 1 Lac funding from ECell PEC to solve the chalk-dust problem in educational institutions. Full business plan with GTM and unit economics.",
    metrics: ["INR 1L funding secured", "ECell approved", "2020"],
    tags: ["Entrepreneurship", "GTM", "Pitching"],
    figmaLink: "",
    pdfLink: "",
    featured: false,
  },
];

export const stats = [
  { label: "Transactions managed daily", value: "2M+", suffix: "" },
  { label: "Cost savings delivered", value: "₹60L+", suffix: "" },
  { label: "UX improvement at Motorq", value: "50", suffix: "%" },
  { label: "Months of industry experience", value: "35", suffix: "" },
];