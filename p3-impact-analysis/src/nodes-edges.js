const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1a",
    type: "input",
    data: { label: "Business requirement" },
    position
  },
  {
    id: "1b",

    data: { label: "Stakeholder requirement" },
    position
  },
  {
    id: "1",

    data: { label: "P3 Requirement" },
    position
  },
  {
    id: "2",
    data: { label: "Engine efficiency requirement" },
    position
  },
  {
    id: "2a",
    data: {
      label:
        "Virtual Test case 3.7 (reduced efficiency & increased fuel consumption)"
    },
    position
  },
  {
    id: "2b",
    data: {
      label:
        "physical Test case 3.8 (reduced efficiency & increased fuel consumption)"
    },
    position
  },
  {
    id: "2c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "2d",
    data: { label: "Engine (Physical model)" },
    position
  },

  {
    id: "3",
    data: { label: "Power output requirement    " },
    position
  },
  {
    id: "3a",
    data: {
      label: "Virtual Test case 4.4 (reduced power generation)"
    },
    position
  },
  {
    id: "3b",
    data: {
      label: "physical Test case 4.5 (reduced power generation)"
    },
    position
  },
  {
    id: "3c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "3d",
    data: { label: "Engine (Physical model)" },
    position
  },

  {
    id: "4",
    data: { label: "component life and durability requirement    " },
    position
  },
  {
    id: "4a",
    data: {
      label:
        "Virtual Test case 4.8 (accelerate component degradation, reduce operational life)"
    },
    position
  },
  {
    id: "4b",
    data: {
      label:
        "physical Test case 4.9 (accelerate component degradation, reduce operational life)"
    },
    position
  },
  {
    id: "4c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "4d",
    data: { label: "Engine (Physical model)" },
    position
  },

  {
    id: "5",
    data: { label: "Combustion efficiency requirement" },
    position
  },
  {
    id: "5a",
    data: {
      label:
        "Virtual Test case 6.8 (incomplete fuel burn,reduced combustion efficiency)"
    },
    position
  },
  {
    id: "5b",
    data: {
      label:
        "Physical Test case 6.9 (incomplete fuel burn,reduced combustion efficiency)"
    },
    position
  },
  {
    id: "5c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "5d",
    data: { label: "Engine (Physical model)" },
    position
  },

  {
    id: "6",
    data: { label: "Compressor Performance requirement" },
    position
  },
  {
    id: "6a",
    data: {
      label:
        "Test case 9.7 (inefficient compression, reduced airflow, and increased losses,)"
    },
    position
  },
  {
    id: "6b",
    data: {
      label:
        "Test case 9.8 (inefficient compression, reduced airflow, and increased losses,)"
    },
    position
  },
  {
    id: "6c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "6d",
    data: { label: "Engine (Physical model)" },
    position
  },

  {
    id: "7",
    type: "output",
    data: { label: "Stable Combustion requirement" },
    position
  },

  {
    id: "7a",
    data: {
      label: "Test case 9.9 (flame out, flame combustion instability)"
    },
    position
  },
  {
    id: "7b",
    data: {
      label: "Test case 9.10 (flame out, flame combustion instability)"
    },
    position
  },
  {
    id: "7c",
    data: { label: "Engine (Simulink model)" },
    position
  },
  {
    id: "7d",
    data: { label: "Engine (Physical model)" },
    position
  }
];

export const initialEdges = [
  { id: "e1ab", source: "1a", target: "1b", type: edgeType, animated: true },
  { id: "e2ab", source: "1b", target: "1", type: edgeType, animated: true },
  { id: "e3ab", source: "1", target: "2", type: edgeType, animated: true },
  { id: "e4ab", source: "1", target: "3", type: edgeType, animated: true },
  { id: "e5ab", source: "1", target: "4", type: edgeType, animated: true },
  { id: "e6ab", source: "1", target: "5", type: edgeType, animated: true },
  { id: "e7ab", source: "1", target: "6", type: edgeType, animated: true },
  { id: "e8ab", source: "1", target: "7", type: edgeType, animated: true },
  { id: "e9ab", source: "2", target: "2a", type: edgeType, animated: true },
  { id: "e10ab", source: "2", target: "2b", type: edgeType, animated: true },
  { id: "e11ab", source: "2a", target: "2c", type: edgeType, animated: true },
  { id: "e12ab", source: "2b", target: "2d", type: edgeType, animated: true },
  { id: "e13ab", source: "3", target: "3a", type: edgeType, animated: true },
  { id: "e14ab", source: "3", target: "3b", type: edgeType, animated: true },
  { id: "e15ab", source: "3a", target: "3c", type: edgeType, animated: true },
  { id: "e16ab", source: "3b", target: "3d", type: edgeType, animated: true },
  { id: "e17ab", source: "4", target: "4a", type: edgeType, animated: true },
  { id: "e18ab", source: "4", target: "4b", type: edgeType, animated: true },
  { id: "e19ab", source: "4a", target: "4c", type: edgeType, animated: true },
  { id: "e20ab", source: "4b", target: "4d", type: edgeType, animated: true },
  { id: "e21ab", source: "5", target: "5a", type: edgeType, animated: true },
  { id: "e22ab", source: "5", target: "5b", type: edgeType, animated: true },
  { id: "e23ab", source: "5a", target: "5c", type: edgeType, animated: true },
  { id: "e24ab", source: "5b", target: "5d", type: edgeType, animated: true },
  { id: "e25ab", source: "6", target: "6a", type: edgeType, animated: true },
  { id: "e26ab", source: "6", target: "6b", type: edgeType, animated: true },
  { id: "e27ab", source: "6a", target: "6c", type: edgeType, animated: true },
  { id: "e28ab", source: "6b", target: "6d", type: edgeType, animated: true },
  { id: "e29ab", source: "7", target: "7a", type: edgeType, animated: true },
  { id: "e30ab", source: "7", target: "7b", type: edgeType, animated: true },
  { id: "e31ab", source: "7a", target: "7c", type: edgeType, animated: true },
  { id: "e32ab", source: "7b", target: "7d", type: edgeType, animated: true }
];
