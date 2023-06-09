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
        execfile ("C:/Cameofiles/python cameo/daq_inputs_altitude.py")
      </div>
      <InputHandle
        id={"ai"}
        style={{ ...inputPortStyle, left: "33.33%" }}
        isConnectable={isConnectable}
      />
      <InputHandle
        id={"bi"}
        style={{ ...inputPortStyle, left: "66.66%" }}
        isConnectable={isConnectable}
      />
      <OutputHandle
        position={Position.Bottom}
        id="ao"
        isConnectable={isConnectable}
        style={{ ...outputPortStyle, left: "16.66%" }}
      />
      <OutputHandle
        position={Position.Bottom}
        id="bo"
        isConnectable={isConnectable}
        style={{ ...outputPortStyle, left: "50%" }}
      />
      <OutputHandle
        position={Position.Bottom}
        id="co"
        isConnectable={isConnectable}
        style={{ ...outputPortStyle, left: "83.33%" }}
      />
    </>
  );
});
