import React from 'react';
import { IconSearch, IconSquareRoundedPlusFilled } from '@tabler/icons-react';
import '../css/Import.css';



const Import: React.FC = () => {
  return (
    <div className="importframe">
      <div className="search">
        <input type="search" id="default-search" placeholder="Search" />
        <IconSearch className="iconsearch" />
      </div>
      <div className="add">
        <IconSquareRoundedPlusFilled className="iconadd" />
      </div>
    </div>
    
    
    
  );
};

export default Import;
