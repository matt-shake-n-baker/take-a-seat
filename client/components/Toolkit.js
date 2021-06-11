import React, { useState } from "react";
import { Stage, Layer, Rect, Text, Circle } from "react-konva";
import Konva from "konva";

const ToolKit = () => {
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <div className="toolkit">
      <Stage width={500} height={500}>
        <Layer>
          <Rect
            x={50}
            y={20}
            width={50}
            height={70}
            fill={color}
            draggable
            onClick={() => handleClick()}
          />
          <Circle
            x={50}
            y={150}
            radius={25}
            draggable
            fill={color}
            onDragEnd={() => {
              setColor(Konva.Util.getRandomColor());
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default ToolKit;
