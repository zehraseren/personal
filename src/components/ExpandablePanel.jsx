import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div onClick={handleClick}>
          {expanded ? <FaAngleDown /> : <FaAngleLeft />}
        </div>
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
