import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  
  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div>
          <GoChevronLeft />
        </div>
      </div>

      {children}
    </div>
  );
}

export default ExpandablePanel;
