import React, { useState } from 'react';
import PromptCard from '../components/PromptCard';

const Home = (props) => {
  return (
    <div className="container mx-12 mt-12 mb-12 max-w-fit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
      </div>
    </div>
  );
}

export default Home;
