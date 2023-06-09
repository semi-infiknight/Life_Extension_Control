import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const InputHandle = ({ style, isConnectable }) => {
  return (
    <Handle
      type="target"
      style={{ background: "#555", left: -5, top: -5, ...style }}
      isConnectable={isConnectable}
    />
  );
};

const OutputHandle = ({ style = {}, isConnectable = true, id }) => {
  return (
    <Handle
      type="source"
      position={Position.Right}
      style={{ bottom: -5, top: "auto", background: "#555", ...style }}
      isConnectable={isConnectable}
      id={id}
    />
  );
};

export default memo(({ data, isConnectable }) => {
  const shapeStyle = {
    width: 100,
    height: 100,
    background: "#555",
    transform: "rotate(45deg)", // Adjust the skew angle as needed
    borderRadius: "4px" // Adjust the border radius as needed
  };

  const inputPortStyle = data.inputPortStyle ? data.inputPortStyle : {};
  const outputPortStyle = data.outputPortStyle ? data.outputPortStyle : {};

  return (
    <div className="trapezoid-node" style={shapeStyle}>
      <InputHandle
        style={{ ...inputPortStyle }}
        isConnectable={isConnectable}
      />

      <OutputHandle style={outputPortStyle} isConnectable={isConnectable} />
    </div>
  );
});
