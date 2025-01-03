import React, { Component } from 'react';

function PromptCard() {

    return (
        <div id='prompt1' class="flex flex-col flex-1 font-sans shadow hover:shadow-lg bg-white">
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                        Prompt Title
                    </h1>
                    <div class="text-lg font-semibold text-slate-500">
                        GENRE
                    </div>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        Characters: Harry Potter, Ron Weasley, Hermione Granger
                    </div>
                </div>
                <div class="flex flex-col mt-2 mb-3 pb-3 border-b border-slate-200 w-[90%]">
                    <div class="flex flex-wrap text-xs">
                        <div class="m-1 p-2 h-6 rounded-lg flex items-center justify-center bg-sky-300 text-black">
                            Alternate Universe
                        </div>
                        <div class="m-1 p-2 h-6 rounded-lg flex items-center justify-center bg-amber-300 text-black">
                            Medieval
                        </div>
                        <div class="m-1 p-2 h-6 rounded-lg flex items-center justify-center bg-emerald-300 text-black">
                            Soulmate AU
                        </div>
                        <div class="m-1 p-2 h-6 rounded-lg flex items-center justify-center bg-purple-300 text-black">
                            Coffee Shop AU
                        </div>
                        <div class="m-1 p-2 h-6 rounded-lg flex items-center justify-center bg-rose-300 text-black">
                            Time Travel
                        </div>
                    </div>
                </div>
                <p class="text-sm text-slate-700 mb-6 overflow-auto h-60">
                    Here is the prompt description.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Id torquent habitant tellus magnis lectus molestie netus. Non iaculis faucibus sapien euismod ligula blandit ex. Primis faucibus felis platea condimentum varius potenti himenaeos integer. Et at aenean suscipit nam potenti faucibus at fringilla ultricies. Pulvinar varius suscipit inceptos orci blandit eget justo id quam. Dignissim orci leo ipsum maximus bibendum! Natoque iaculis aliquet morbi viverra consectetur porttitor malesuada. Hac donec lacus vulputate congue vivamus netus maecenas conubia leo. Vehicula aliquam aptent euismod risus felis sociosqu ridiculus euismod nibh.
                </p>
                <div class="flex space-x-4 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Bookmark
                        </button>
                        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Claim
                        </button>
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PromptCard;
