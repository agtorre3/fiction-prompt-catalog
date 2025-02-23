import React, {useState} from 'react';
import PromptCard from './PromptCard';

function Home() {
  // ConstantSourceNode displayName = Home.name;

    return (
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
      </div>

    );
}

export default Home;
