'use client';

import React, { useState, useEffect } from 'react';
import { IconDownload, IconTemplate, IconPhoto, IconPhotoVideo, IconLetterT, IconMusic, IconTransitionRight } from '@tabler/icons-react';
import '../css/Sidebar.css';
import Import from '../components/Import';
import Template from '../components/Template';
import Image from '../components/Image';
import Effect from '../components/Effect';
import Text from '../components/Text';
import Audio from '../components/Audio';
import Transition from '../components/Transition';

const Sidebar: React.FC<{ onSelect: (component: string) => void }> = ({ onSelect }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <div
            className={`menu-item ${activeIcon === 'import' ? 'active' : ''}`}
            onClick={() => handleIconClick('import')}
          >
            <IconDownload className="icon" />
            <span>Import</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'template' ? 'active' : ''}`}
            onClick={() => handleIconClick('template')}
          >
            <IconTemplate className="icon" />
            <span>Template</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'image' ? 'active' : ''}`}
            onClick={() => handleIconClick('image')}
          >
            <IconPhoto className="icon" />
            <span>Image</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'effect' ? 'active' : ''}`}
            onClick={() => handleIconClick('effect')}
          >
            <IconPhotoVideo className="icon" />
            <span>Effect</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'text' ? 'active' : ''}`}
            onClick={() => handleIconClick('text')}
          >
            <IconLetterT className="icon" />
            <span>Text</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'audio' ? 'active' : ''}`}
            onClick={() => handleIconClick('audio')}
          >
            <IconMusic className="icon" />
            <span>Audio</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'transition' ? 'active' : ''}`}
            onClick={() => handleIconClick('transition')}
          >
            <IconTransitionRight className="icon" />
            <span>Transition</span>
          </div>
        </div>
      </div>

      {activeIcon && (
        <div className="tool-area" >
          {activeIcon === 'import' && <Import />}
          {activeIcon === 'template' && <Template />}
          {activeIcon === 'image' && <Image />}
          {activeIcon === 'effect' && <Effect />}
          {activeIcon === 'text' && <Text />}
          {activeIcon === 'audio' && <Audio />}
          {activeIcon === 'transition' && <Transition />}
        </div>
      )}
    </>
  );
};

export default Sidebar;
