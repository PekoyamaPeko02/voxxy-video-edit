import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DataDisplay from '../components/DataDisplay';


const Homepage: React.FC = () => {
  return (
    <div > 
      <Header />
      <Sidebar />
    </div>
  );
};

export default Homepage;
