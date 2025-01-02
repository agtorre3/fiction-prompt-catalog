import React, { Component } from 'react';
import PromptCard from './PromptCard';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <body>
        <main class="container mx-auto mt-28 px-5 flex">
          <div class="w-full">
            <div class="flex flex-col gap-5 pb-24">
              <div class="flex flex-wrap gap-5">
                <PromptCard/>
                <PromptCard/>
                <PromptCard/>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}
