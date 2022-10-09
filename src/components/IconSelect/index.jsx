import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function IconSelect({
  icon = faBars,
  defaultValue = "",
  children = [],
  onChange = () => {},
  disabled = false,
}) {
  const options = children.map(({ props }) => ({
    value: props.value,
    label: props.children,
  }));
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleOptions = () => {
    if (disabled) return;
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (value) => {
    setSelectedOption(value);
    setIsOptionsOpen(false);
  };

  const optionClicked = (value) => {
    if (value !== selectedOption) onChange(value);
    setSelectedThenCloseDropdown(value);
  };

  return (
    <div className="IconSelect">
      <div className="container">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={`menu-icon menu-button ${isOptionsOpen ? "expanded" : ""}`}
          onClick={toggleOptions}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          role="listbox"
          aria-activedescendant={options[selectedOption]}
          tabIndex={-1}
        >
          {options.map(({ value, label }) => (
            <li
              id={value}
              key={value}
              role="option"
              aria-selected={selectedOption == value}
              tabIndex={0}
              onClick={() => optionClicked(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
