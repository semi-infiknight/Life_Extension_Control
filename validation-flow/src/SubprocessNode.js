import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const InputHandle = ({ style, isConnectable, id }) => {
  return (
    <Handle
      type="target"
      style={{ background: "#555", top: -5, ...style }}
      isConnectable={isConnectable}
      id={id}
    />
  );
};

const OutputHandle = ({ style = {}, isConnectable = true, id }) => {
  return (
    <Handle
      type="source"
      position={Position.Bottom}
      style={{ background: "#555", bottom: -5, ...style }}
      isConnectable={isConnectable}
      id={id}
    />
  );
};

const outPorts = ["ao", "bo", "co", "do", "eo", "fo", "go"];
const inPorts = ["ai", "bi", "ci", "di"];

export default memo(({ data, isConnectable }) => {
  const inputPortStyle = data.inputPortStyle ? data.inputPortStyle : {};
  const outputPortStyle = data.outputPortStyle ? data.outputPortStyle : {};

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        }}
      >
        execfile ("C:/Cameofiles/python cameo/subprocess_test.py")
      </div>

      {inPorts.map((id, i) => {
        const x = 100 / inPorts.length / 2 + (i * 100) / inPorts.length;
        return (
          <InputHandle
            id={id}
            style={{ ...inputPortStyle, left: `${x}%` }}
            isConnectable={isConnectable}
          />
        );
      })}
      {outPorts.map((id, i) => {
        const x = 100 / outPorts.length / 2 + (i * 100) / outPorts.length;
        console.log(x);
        return (
          <OutputHandle
            position={Position.Bottom}
            id={id}
            isConnectable={isConnectable}
            style={{ ...outputPortStyle, left: `${x}%` }}
          />
        );
      })}
    </>
  );
});
