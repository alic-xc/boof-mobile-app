export interface ILinearColor {
  key: string;
  primary: string;
  secondary: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const colors = {
  primary: "#5c62ac",
  secondary: "#2d2a70",
};

export const linearColors: ILinearColor[] = [
  // Previous Colors
  {
    key: "sunset",
    primary: "#FF6B6B",
    secondary: "#FFD166",
    start: { x: 0.1, y: 0.8 },
    end: { x: 0.9, y: 0.2 },
  },
  {
    key: "ocean",
    primary: "#0077B6",
    secondary: "#00B4D8",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "lavender",
    primary: "#8338EC",
    secondary: "#FF006E",
    start: { x: 0.2, y: 0.9 },
    end: { x: 0.8, y: 0.1 },
  },
  {
    key: "mint",
    primary: "#43C6AC",
    secondary: "#191654",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "fire",
    primary: "#FF416C",
    secondary: "#FF4B2B",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "royal",
    primary: "#141E30",
    secondary: "#243B55",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  // Additional 20 Colors
  {
    key: "tropical",
    primary: "#FF9A8B",
    secondary: "#FF6A88",
    start: { x: 0.3, y: 0.9 },
    end: { x: 0.7, y: 0.1 },
  },
  {
    key: "sunrise",
    primary: "#FF512F",
    secondary: "#DD2476",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "bubblegum",
    primary: "#FFC3A0",
    secondary: "#FFAFBD",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "deepPurple",
    primary: "#41295A",
    secondary: "#2F0743",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "golden",
    primary: "#FDC830",
    secondary: "#F37335",
    start: { x: 0.1, y: 0.9 },
    end: { x: 0.9, y: 0.1 },
  },
  {
    key: "aqua",
    primary: "#00B09B",
    secondary: "#96C93D",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "berry",
    primary: "#D53369",
    secondary: "#DAE2F8",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "velvet",
    primary: "#654EA3",
    secondary: "#EAAFC8",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "forest",
    primary: "#11998E",
    secondary: "#38EF7D",
    start: { x: 0.1, y: 0.9 },
    end: { x: 0.9, y: 0.1 },
  },
  {
    key: "peach",
    primary: "#ED4264",
    secondary: "#FFEDBC",
    start: { x: 0.2, y: 0.9 },
    end: { x: 0.8, y: 0.1 },
  },
  {
    key: "mystic",
    primary: "#757F9A",
    secondary: "#D7DDE8",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "pinkBlush",
    primary: "#B24592",
    secondary: "#F15F79",
    start: { x: 0.3, y: 0.9 },
    end: { x: 0.7, y: 0.1 },
  },
  {
    key: "skyline",
    primary: "#36D1DC",
    secondary: "#5B86E5",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "plum",
    primary: "#6A0572",
    secondary: "#AB83A1",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "twilight",
    primary: "#8E2DE2",
    secondary: "#4A00E0",
    start: { x: 0.2, y: 0.9 },
    end: { x: 0.8, y: 0.1 },
  },
  {
    key: "neon",
    primary: "#12C2E9",
    secondary: "#C471ED",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "mojito",
    primary: "#1FA2FF",
    secondary: "#12D8FA",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  {
    key: "rose",
    primary: "#FF758C",
    secondary: "#FF7EB3",
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  },
  {
    key: "midnight",
    primary: "#232526",
    secondary: "#414345",
    start: { x: 0.3, y: 0.9 },
    end: { x: 0.7, y: 0.1 },
  },
  {
    key: "flamingo",
    primary: "#FC466B",
    secondary: "#3F5EFB",
    start: { x: 0.2, y: 0.9 },
    end: { x: 0.8, y: 0.1 },
  },
];

export default colors;
