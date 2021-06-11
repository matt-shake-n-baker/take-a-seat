import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";

const OfficeLayout = () => {
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Stage width={1000} height={1000}>
      <Layer>
        <Text text="Try click on rect" />
        <Rect
          x={20}
          y={20}
          width={50}
          height={50}
          fill={color}
          draggable
          shadowBlur={5}
          onClick={() => handleClick()}
        />
      </Layer>
    </Stage>
  );
};

export default OfficeLayout;
