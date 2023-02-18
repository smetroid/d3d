# D3D

Prof of concept to see if it was possible to create a mind-mapping/diagraming tool that could be easily updated and manipulated via keyboard shortcuts. Warning: Not for the faint of heart, it will drive you mad if you try to use the mouse.  Although some pieces can be manipulated accessed via the mouse, this is not by any means the default or the way D3D works.

## Why

Since my Unix days `vi/vim` has been my editor of choice and since those days I have gravitated towards finding `vi/vim` inspired tools for productivity.  I've been successful at finding many different tools that are `vi/vim` inspired, and about the only thing I haven't been able to find was a tool to quickly generate mind-maps without the use of a mouse (I know, crazy thought).  D3D was inspired by `vi/vim` shortcuts, however it has taken on a mind of it's own. Even though you can use some `vi/vim` shortcuts(jk mainly), I have moved towards using hint keys, similar to what you would find in the [surfingkeys](https://chrome.google.com/webstore/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc?hl=en-US) and [vimium C](https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg?hl=en) chrome plugins.

## Tech Stack / Tools

Here are some of the main (the ones I remember from memory) tools/libraries used to build this project, not in any specific order.

[vuetify.js](https://vuetifyjs.com/en/) - component framework used
[d3-dagre](https://github.com/dagrejs/dagre-d3) - (deprecated) main tool used to generate the diagram
[d3.js](https://d3js.org) - main library used by d3-dagre
[neutralinojs](https://neutralino.js.org) - cross-platform tool to build on windows, linux, and mac.  While D3D runs fine on a Windows machine with a google chrome browser tab open, the same is not true on MacOS and Linux.  I used neutralinojs and it's chrome option as a solution for the shortcuts(events) issues I experience
[rethinkdb](https://rethinkdb.com) - backend database used to save the diagrams
[samus.api]() - golang api server used to communicated with the rethinkdb database
[velocity](http://velocityjs.org/) - used for some of svg animation

## Issues

Still a work in progress, but here are some of the main things that need work

[ ] Cluster rendering, I may need to look at a new library to fix this issue.  Hitting/pressing the esc (re-renders the diagram) key a few times fixes the issue, but I haven't been able to figure out how to properly fix the problem
[ ] Some vuetify.js animations still needs some TLC

## Installation And Setup (Windows)

1. Get the necessary tools:
   1. `yarn global add @neutralinojs/neu`

2. Clone this repository and `cd` into it:
   1. `git clone https://github.com/smetroid/d3d.git && cd d3d`

3. Neutralino concurrency dependency to run both neutralino js and the frontend vue application
   1. `npm install`

4. Setup the "backend" part:
   1. `neu update`

5. Setup frontend, installs the nodejs modules for the frontend
   1. `npm run setup`

6. Run dev mode
   1. `npm run dev`

7. Run a build
   1. `npm run build-release`

