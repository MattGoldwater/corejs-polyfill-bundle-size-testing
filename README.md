# Getting Started
1. Run `yarn` to install dependencies
## How to replicate my bundle size comparison in dev mode
1. Run `npx parcel src/index.html` 
2. Open localhost:1234 
3. Open Google Chrome's dev tools
4. Go to the network tab
5. The number [to the left of the word transferred](https://developers.google.com/web/tools/chrome-devtools/network/reference#total-size) refers to the amount of data sent to the browser
6. Comment out lines 3-6 in src/index.js. 
7. Uncomment the code on line 2 in src/index.js.
8. Repeat steps 3-5

## How to replicate my bundle size comparison in prod mode
1. Run `npx parcel build src/index.html` 
2. The size of the bundle will be listed in your terminal in pink to the right of a file named something like dist/src.1199ad53.js (the other file is for source maps)
3. Comment out lines 3-6 in src/index.js. 
4. Uncomment the code on line 2 in src/index.js. 
5. Repeat steps 1-2