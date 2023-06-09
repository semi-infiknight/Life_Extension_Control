import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  MarkerType,
  Position
} from "reactflow";
import "reactflow/dist/style.css";

import TrapezoidNode from "./TrapezoidNode";

import "./index.css";
import MultiportNode from "./MultiportNode";
import SubprocessNode from "./SubprocessNode";
import RPMNode from "./RPMNode";
import OutputEGTNode from "./OutputEGTNode";
import PrintNode from "./PrintNode";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  TrapezoidNode: TrapezoidNode,
  MultiportNode: MultiportNode,
  SubprocessNode: SubprocessNode,
  RPMNode: RPMNode,
  OutputEGTNode: OutputEGTNode,
  PrintNode: PrintNode
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes([
      {
        id: "1",
        type: "input",
        data: {
          // label: "1"
        },
        className: "circle",
        style: {
          background: "#2B6CB0",
          color: "white"
        },
        position: { x: 30, y: 0 },
        sourcePosition: Position.Bottom
      },
      {
        id: "2",
        type: "TrapezoidNode",
        data: {
          inputPortStyle: {
            background: "black",
            borderRadius: "0",
            transform: "rotate(45deg)"
          },
          outputPortStyle: {
            background: "black",
            borderRadius: "0",
            transform: "rotate(45deg)"
          }
        },
        style: { border: "none", padding: 10, background: "transparent" },
        position: { x: 0, y: 100 }
      },
      {
        id: "3",
        // data: { label: "3" },
        style: {
          background: "#2B6CB0",
          color: "white",
          width: "350px"
        },
        position: { x: -112, y: 300 },
        targetPosition: "top"
      },
      {
        id: "4",
        data: { label: "row = 1" },
        style: {
          background: "#2B6CB0",
          color: "white"
        },
        position: { x: -112, y: 400 },
        targetPosition: "top"
      },
      {
        id: "5",
        data: { label: "column = 1" },
        style: {
          background: "#2B6CB0",
          color: "white"
        },
        position: { x: 112, y: 400 },
        targetPosition: "top"
      },
      {
        id: "6",
        type: "MultiportNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          }
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "500px",
          borderRadius: "4px",
          border: "1px solid black",
          height: "50px"
        },
        position: { x: -150, y: 500 }
      },
      {
        id: "7",
        data: { label: "column n = column n+1" },
        style: {
          background: "#2B6CB0",
          color: "white",
          width: "150px"
        },
        position: { x: 220, y: 600 },
        targetPosition: "top"
      },
      {
        id: "8",
        type: "MultiportNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          }
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 0, y: 700 }
      },
      {
        id: "9",
        data: { label: "column n = column n+1" },
        style: {
          background: "#2B6CB0",
          color: "white",
          width: "150px"
        },
        position: { x: 220, y: 800 },
        targetPosition: "top"
      },
      {
        id: "10",
        type: "RPMNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          }
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 100, y: 900 }
      },
      {
        id: "11",
        type: "SubprocessNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          }
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "600px",
          borderRadius: "4px",
          border: "1px solid black",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: -200, y: 1000 }
      },
      {
        id: "12",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          }
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: -400, y: 1250 }
      },
      {
        id: "13",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: `execfile ("C:/Cameofiles/python cameo/daq_output_p2.py")`
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 200, y: 1300 }
      },
      {
        id: "14",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: `execfile ("C:/Cameofiles/python cameo/daq_output_p3.py")`
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 600, y: 1200 }
      },
      {
        id: "15",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: `execfile ("C:/Cameofiles/python cameo/daq_output_T2.py")`
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 1000, y: 1200 }
      },
      {
        id: "16",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (EGT)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 100, y: 1400 }
      },
      {
        id: "17",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (p2)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 450, y: 1450 }
      },
      {
        id: "18",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (p3)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 900, y: 1400 }
      },
      {
        id: "19",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (T2)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 1300, y: 1320 }
      },
      {
        id: "20",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: `execfile ("C:/Cameofiles/python cameo/daq_output_T3.py")`
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 1400, y: 900 }
      },
      {
        id: "22",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (T3)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 1800, y: 1220 }
      },
      {
        id: "23",
        type: "OutputEGTNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: `execfile ("C:/Cameofiles/python cameo/daq_output_Wf.py")`
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          width: "300px",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 900, y: 600 }
      },
      {
        id: "24",
        type: "PrintNode",
        data: {
          inputPortStyle: {
            background: "black"
          },
          outputPortStyle: {
            background: "black"
          },
          label: "print (Wf)"
        },
        style: {
          padding: 10,
          background: "#2B6CB0",
          borderRadius: "4px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        position: { x: 1800, y: 820 }
      }
    ]);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#000" },
        type: "straight",
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#000" },
        type: "straight",
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      },
      {
        id: "e3a-4",
        source: "3",
        target: "4",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      },
      {
        id: "e3a-5",
        source: "3",
        target: "5",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      },
      {
        id: "e4a-6",
        source: "4",
        target: "6",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e5a-6",
        source: "5",
        target: "6",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "column"
      },
      {
        id: "e6a-7",
        source: "6",
        target: "7",
        sourceHandle: "co",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "column"
      },
      {
        id: "e6a-8",
        source: "6",
        target: "8",
        sourceHandle: "bo",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e7a-8",
        source: "7",
        target: "8",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "column"
      },
      {
        id: "e8a-9",
        source: "8",
        target: "9",
        sourceHandle: "co",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "column"
      },
      {
        id: "e8a-10",
        source: "8",
        target: "10",
        sourceHandle: "bo",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e9a-10",
        source: "9",
        target: "10",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "column"
      },
      {
        id: "e6a-11",
        source: "6",
        target: "11",
        sourceHandle: "ao",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "at"
      },
      {
        id: "e8a-11",
        source: "8",
        target: "11",
        sourceHandle: "ao",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "Mach"
      },
      {
        id: "e10a-11",
        source: "10",
        target: "11",
        sourceHandle: "ao",
        targetHandle: "ci",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "zxn"
      },
      {
        id: "e10a-11",
        source: "10",
        target: "11",
        sourceHandle: "bo",
        targetHandle: "di",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e11a-12",
        source: "11",
        target: "12",
        sourceHandle: "ao",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e12a-13",
        source: "12",
        target: "13",
        sourceHandle: "bo",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e13a-14",
        source: "13",
        target: "14",
        sourceHandle: "bo",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e12a-16",
        source: "12",
        target: "16",
        sourceHandle: "ao",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "EGTDAQ"
      },
      {
        id: "e11a-16",
        source: "11",
        target: "16",
        sourceHandle: "bo",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "EGT"
      },
      {
        id: "e13a-17",
        source: "13",
        target: "17",
        sourceHandle: "ao",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "P2 DAQ"
      },
      {
        id: "e11a-17",
        source: "11",
        target: "17",
        sourceHandle: "co",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "P2"
      },
      {
        id: "e14a-18",
        source: "14",
        target: "18",
        sourceHandle: "ao",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "P3 DAQ"
      },
      {
        id: "e11a-18",
        source: "11",
        target: "18",
        sourceHandle: "do",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "P3"
      },
      {
        id: "e14a-15",
        source: "14",
        target: "15",
        sourceHandle: "bo",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e15a-19",
        source: "15",
        target: "19",
        sourceHandle: "ao",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "T2 DAQ"
      },
      {
        id: "e11a-19",
        source: "11",
        target: "19",
        sourceHandle: "eo",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "T3"
      },
      {
        id: "e15a-20",
        source: "15",
        target: "20",
        sourceHandle: "bo",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e11a-22",
        source: "11",
        target: "22",
        sourceHandle: "fo",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "T3"
      },
      {
        id: "e20a-22",
        source: "20",
        target: "22",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "T3 DAQ"
      },
      {
        id: "e20a-23",
        source: "20",
        target: "23",
        sourceHandle: "bo",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "row"
      },
      {
        id: "e11a-24",
        source: "11",
        target: "24",
        sourceHandle: "go",
        targetHandle: "bi",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "Wf"
      },
      {
        id: "e23a-24",
        source: "23",
        target: "24",
        // sourceHandle: "go",
        targetHandle: "ai",
        animated: true,
        style: { stroke: "#000" },
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed
        },
        label: "Wf DAQ"
      }
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
      <Background color="#000" gap={16} />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
