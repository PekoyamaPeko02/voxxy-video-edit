import React from 'react';
import {IconSearch} from '@tabler/icons-react';
import '../css/Import.css';



const Import: React.FC = () => {
  return (
    <div className="search-container">
      <div className="search">
        <input type="search" id="default-search" placeholder="Search..." />
        <IconSearch className="iconsearch" />
      </div>
    </div>
  );
};

export default Import;
