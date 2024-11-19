import React from "react";
import "../styles/Options.css";

const Options = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <div key={index} className="option">
          <label>
            <input
              type="radio"
              name="option"
              checked={selectedOption === index}
              onChange={() => onSelectOption(index)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Options;
