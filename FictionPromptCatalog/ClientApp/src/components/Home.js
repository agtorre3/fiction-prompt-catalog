import React, { Component } from 'react';
import PromptCard from './PromptCard';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
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
}
