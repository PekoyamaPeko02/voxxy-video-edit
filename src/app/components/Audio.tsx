import React, { useState, useRef, useEffect } from "react";
import '../css/audio.css';

interface AudioItem {
  title: string;
  duration: string;
}

const Audio: React.FC = () => {
  const audioItems: AudioItem[] = [
    { title: "เสียงนกร้องออออออออออ", duration: "00:35" },
    { title: "เสียงแมวร้อง", duration: "00:14" },
    { title: "เสียงหมาขู่", duration: "00:08" },
    { title: "เสียงแมวร้องเพลง", duration: "02:30" },
  ];
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
      <div className="templateTool">
        <div className="searchContainer">
          <input type="text" placeholder="🔍 Search" className="searchInput" />
        </div>
        <div className="audioList">
          {audioItems.map((item, index) => (
            <div key={index} className="audioItem">
              <div className="playButton">▶</div>
              <div className="audioInfo">
                <div className="audioTitle">{item.title}</div>
                <div className="audioDuration">{item.duration}</div>
              </div>
            </div>
          ))}
          <button className="circularButton">+</button>
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

export default Audio;