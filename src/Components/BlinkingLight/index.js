import React from 'react';
import './index.scss'; // External CSS file for styling

const BlinkingLight = ({text}) => {
  return (
    <div className="light-bulb">
    {/* Red light bulb */}
    <div className="bulb red-blink"></div>

    {/* Text */}
    <div className="text"> <h3>{text}</h3></div>
  </div>
  );
};

export default BlinkingLight;