'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IconDownload } from '@tabler/icons-react';

const Import = () => {
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
      const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;
      if (newWidth >= 100 && newWidth <= 800) { 
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
      <h2 className="mt-2 text-lg font-semibold text-gray-800">Import Tool</h2>
      <p className="mt-1 text-sm text-gray-600">Here you can import your files...</p>
      <span>Re แดด</span>
      <div 
        className="resize-handle" 
        onMouseDown={startResizing} 
        style={{ cursor: 'ew-resize', width: '10px', position: 'absolute', right: 0, top: 0, bottom: 0 }}
      />
    </div>
  );
};

export default Import;
