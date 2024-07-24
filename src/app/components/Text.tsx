import React, { useState, useRef, useEffect } from "react";
import {
  IconSearch,
  IconBold,
  IconUnderline,
  IconItalic,
} from "@tabler/icons-react";
import "../css/Text.css";

const Text: React.FC = () => {
  const [boldBoxColor, setBoldBoxColor] = useState("#C3C3C3");
  const [underlineBoxColor, setUnderlineBoxColor] = useState("#C3C3C3");
  const [italicBoxColor, setItalicBoxColor] = useState("#C3C3C3");

  const handleBoldBoxClick = () => {
    setBoldBoxColor((prevColor) =>
      prevColor === "#C3C3C3" ? "#6771F0" : "#C3C3C3"
    );
  };

  const handleUnderlineBoxClick = () => {
    setUnderlineBoxColor((prevColor) =>
      prevColor === "#C3C3C3" ? "#6771F0" : "#C3C3C3"
    );
  };

  const handleItalicBoxClick = () => {
    setItalicBoxColor((prevColor) =>
      prevColor === "#C3C3C3" ? "#6771F0" : "#C3C3C3"
    );
  };

  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(350);

  const startResizing = (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    mouseDownEvent.preventDefault();
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (mouseMoveEvent: MouseEvent) => {
    if (isResizing && sidebarRef.current) {
      const newWidth =
        mouseMoveEvent.clientX -
        sidebarRef.current.getBoundingClientRect().left;
      if (newWidth >= 300 && newWidth <= 800) {
        setWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => resize(e);
    const handleMouseUp = () => stopResizing();

    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, resize]);

  return (
    <div ref={sidebarRef} className="import-tool" style={{ width }}>
      <div className="container">
        <div className="search-container">
          <IconSearch className="icon" />
          <input type="text" className="search" placeholder="Search" />
        </div>
        <div className="textarea-container">
          <textarea className="textarea" placeholder="Default text"></textarea>
        </div>
        <div className="font-container">
          <div className="font-label">Font</div>
          <select className="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="font-size-container">
            <div className="font-size-label">Font size</div>
            <input
              type="number"
              className="font-size"
              min="0"
              max="120"
              defaultValue="16"
            />
          </div>
        </div>
        <div className="style-font-container">
          <div className="style-label">Style</div>
          <div
            className="color-box"
            onClick={handleBoldBoxClick}
            style={{ backgroundColor: boldBoxColor }}
          >
            <IconBold className="icon-style" />
          </div>
          <div
            className="color-box"
            onClick={handleUnderlineBoxClick}
            style={{ backgroundColor: underlineBoxColor }}
          >
            <IconUnderline className="icon-style" />
          </div>
          <div
            className="color-box"
            onClick={handleItalicBoxClick}
            style={{ backgroundColor: italicBoxColor }}
          >
            <IconItalic className="icon-style" />
          </div>
        </div>
      </div>
      <div 
        className="resize-handle" 
        onMouseDown={startResizing} 
        style={{ cursor: 'ew-resize', width: '10px', position: 'absolute', right: 0, top: 0, bottom: 0 }}
      />
    </div>
  );
};

export default Text;
