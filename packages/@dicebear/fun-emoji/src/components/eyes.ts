import { escape } from '@dicebear/core';
	import type {
	  ComponentGroup,
	  ComponentPickCollection,
	  ColorPickCollection,
	} from '../types.js';
	export const eyes: ComponentGroup = {
	  sad: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M74.38 30a13 13 0 0 0 13-13v-.66C87.38 5.9 75.83-.87 68.45.1c-6.54.84-7.07 5.02-7.07 11.24V17a13.01 13.01 0 0 0 13 13Z" fill="#000"/><path d="M70.2 9.67a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M74.44 18.48a5.32 5.32 0 1 0 0-10.64 5.32 5.32 0 0 0 0 10.64Z" fill="#fff"/><path d="M13.37 30a13.01 13.01 0 0 1-13-13v-.66C.38 5.9 11.93-.87 19.32.1c6.56.84 7.07 5.02 7.07 11.24V17a13 13 0 0 1-13 13Z" fill="#000"/><path d="M9.22 9.67a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M13.46 18.48a5.32 5.32 0 1 0 0-10.64 5.32 5.32 0 0 0 0 10.64Z" fill="#fff"/>`,
	  tearDrop: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M74.38 30.06a13 13 0 0 0 13-13v-.66C87.38 5.95 75.83-.82 68.45.15c-6.54.83-7.07 5.02-7.07 11.24v5.67a13.01 13.01 0 0 0 13 13Z" fill="#000"/><path d="M70.2 9.73a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M74.44 18.54a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M13.37 30.06a13.01 13.01 0 0 1-13-13v-.66C.38 5.95 11.93-.82 19.32.15c6.56.83 7.07 5.02 7.07 11.24v5.67a13 13 0 0 1-13 13Z" fill="#000"/><path d="M9.22 9.73a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M13.46 18.54a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M89.38 45.6a6.27 6.27 0 0 1-1.85 4.54 6.56 6.56 0 0 1-9.2.1 6.32 6.32 0 0 1-1.95-4.48c0-5.1 4.1-7.53 6.3-15.7 1.98 7.96 6.64 9.9 6.7 15.55Z" fill="#4ABCF4"/>`,
	  pissed: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M74.46 30.06a13 13 0 0 1-13-13v-.66C61.46 5.95 73.01-.82 80.39.15c6.54.83 7.07 5.02 7.07 11.24v5.67a13.01 13.01 0 0 1-13 13Z" fill="#000"/><path d="M70.28 9.73a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M74.52 18.54a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M13.47 30.06a13.01 13.01 0 0 0 12.99-13v-.66C26.46 5.95 14.92-.82 7.53.15.97.98.46 5.17.46 11.39v5.67a13 13 0 0 0 13 13Z" fill="#000"/><path d="M9.3 9.73a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M13.54 18.54a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/>`,
	  cute: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M78.36 25.92h-6.6c-9.72 0-9.72.07-9.72-9.73v-3.3A13.04 13.04 0 0 1 75.06-.13 13.04 13.04 0 0 1 88.1 12.9v3.38c-.03 9.72-.03 9.65-9.73 9.65Z" fill="#000"/><path d="M70.69 9.52a2.28 2.28 0 1 0 0-4.57 2.28 2.28 0 0 0 0 4.57Z" fill="#fff"/><path opacity=".1" d="M74.92 18.31a5.31 5.31 0 1 0 0-10.62 5.31 5.31 0 0 0 0 10.62Z" fill="#fff"/><path d="M17.36 25.92h-6.6c-9.72 0-9.72.07-9.72-9.73v-3.3A13.04 13.04 0 0 1 14.06-.13 13.04 13.04 0 0 1 27.1 12.9v3.38c-.03 9.72-.03 9.65-9.73 9.65Z" fill="#000"/><path d="M9.8 9.53a2.29 2.29 0 1 0 0-4.57 2.29 2.29 0 0 0 0 4.57Z" fill="#fff"/><path opacity=".1" d="M14.03 18.35a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/>`,
	  wink: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M16.41 26.96H9.82c-9.7 0-9.7.08-9.7-9.7v-4.09A12.2 12.2 0 0 1 12.32.97h1.6a12.2 12.2 0 0 1 12.2 12.2v4.16c-.03 9.7-.03 9.63-9.7 9.63Z" fill="#000"/><path d="M8.87 10.5a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M13.11 19.31a5.32 5.32 0 1 0 0-10.64 5.32 5.32 0 0 0 0 10.64Z" fill="#fff"/><path d="M62.7 19.96a1.68 1.68 0 0 1-1.5-.93 1.75 1.75 0 0 1-.12-1.32 13.54 13.54 0 0 1 4.85-7.09A13.1 13.1 0 0 1 74 7.97c2.9-.03 5.73.9 8.06 2.66a13.63 13.63 0 0 1 4.87 7.08c.13.44.08.92-.13 1.32a1.72 1.72 0 0 1-2.3.73 1.69 1.69 0 0 1-.83-1.03c-.63-2.13-1.91-4-3.66-5.32a9.92 9.92 0 0 0-6.07-2c-2.17 0-4.28.7-6.02 2.02a10.26 10.26 0 0 0-3.64 5.3c-.1.35-.32.66-.6.88a1.7 1.7 0 0 1-.98.35Z" fill="#000"/>`,
	  wink2: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M77.41 26.02h-6.59c-9.7 0-9.7.07-9.7-9.7v-4.09A12.2 12.2 0 0 1 73.32.03h1.6a12.2 12.2 0 0 1 12.2 12.2v4.16c-.03 9.7-.03 9.63-9.7 9.63Z" fill="#000"/><path d="M69.87 9.56a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M74.11 18.37a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M1.82 19.02c-.17 0-.34-.03-.5-.09a1.68 1.68 0 0 1-1-.84 1.75 1.75 0 0 1-.13-1.32 13.54 13.54 0 0 1 4.86-7.1 13.1 13.1 0 0 1 8.07-2.65c2.9-.02 5.73.91 8.06 2.67a13.63 13.63 0 0 1 4.86 7.08c.13.44.09.91-.12 1.32a1.72 1.72 0 0 1-2.3.73 1.69 1.69 0 0 1-.84-1.03c-.62-2.13-1.9-4-3.66-5.32a9.92 9.92 0 0 0-6.06-2c-2.17-.01-4.28.7-6.02 2.02a10.26 10.26 0 0 0-3.64 5.3c-.1.35-.32.65-.6.87a1.7 1.7 0 0 1-.98.36Z" fill="#000"/>`,
	  plain: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M87 13.04C87 5.84 81.18 0 74 0S61 5.84 61 13.04v3.92C61 24.16 66.82 30 74 30s13-5.84 13-13.04v-3.92Z" fill="#000"/><path d="M69.79 9.53a2.29 2.29 0 1 0 0-4.57 2.29 2.29 0 0 0 0 4.57Z" fill="#fff"/><path opacity=".1" d="M74.02 18.35a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M26 13.04C26 5.84 20.18 0 13 0S0 5.84 0 13.04v3.92C0 24.16 5.82 30 13 30s13-5.84 13-13.04v-3.92Z" fill="#000"/><path d="M8.79 9.53a2.29 2.29 0 1 0 0-4.57 2.29 2.29 0 0 0 0 4.57Z" fill="#fff"/><path opacity=".1" d="M13.02 18.35a5.32 5.32 0 1 0 0-10.65 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/>`,
	  glasses: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M87.22 13.98c0-7.2-5.82-13.04-13-13.04s-13 5.84-13 13.04v3.92c0 7.2 5.82 13.04 13 13.04s13-5.83 13-13.04v-3.92Z" fill="#000"/><path d="M70 10.48a2.29 2.29 0 1 0 0-4.58 2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M74.24 19.3a5.32 5.32 0 1 0 0-10.66 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M26.22 13.98c0-7.2-5.82-13.04-13-13.04s-13 5.84-13 13.04v3.92c0 7.2 5.82 13.04 13 13.04s13-5.83 13-13.04v-3.92Z" fill="#000"/><path d="M9 10.48A2.29 2.29 0 1 0 9 5.9a2.29 2.29 0 0 0 0 4.58Z" fill="#fff"/><path opacity=".1" d="M13.24 19.3a5.32 5.32 0 1 0 0-10.66 5.32 5.32 0 0 0 0 10.65Z" fill="#fff"/><path d="M84.33-5.7H65.45C58.63-5.7 53.1-.2 53.1 6.6v18.8c0 6.79 5.52 12.3 12.34 12.3h18.88c6.81 0 12.34-5.51 12.34-12.3V6.6c0-6.8-5.53-12.3-12.34-12.3Z" fill="url(#eyesGlasses-a)"/><path d="M21.3-5.7H2.42C-4.4-5.7-9.92-.2-9.92 6.6v18.8c0 6.79 5.52 12.3 12.34 12.3H21.3c6.81 0 12.34-5.51 12.34-12.3V6.6c0-6.8-5.53-12.3-12.34-12.3Z" fill="url(#eyesGlasses-b)"/><g fill="#000"><path d="M21.06 40.12H2.18A14.83 14.83 0 0 1-8.2 35.81a14.71 14.71 0 0 1-4.33-10.34V6.6c.02-3.87 1.58-7.59 4.34-10.34A14.85 14.85 0 0 1 2.18-8.06h18.88c3.92.02 7.66 1.58 10.42 4.35 2.76 2.76 4.31 6.5 4.31 10.4v18.7A14.62 14.62 0 0 1 26.71 39c-1.79.74-3.7 1.12-5.65 1.12ZM2.18-3.26A9.96 9.96 0 0 0-7 2.83a9.85 9.85 0 0 0-.76 3.78v18.8a9.85 9.85 0 0 0 9.9 9.86h18.92a9.93 9.93 0 0 0 9.9-9.86V6.6a9.87 9.87 0 0 0-9.9-9.86H2.18ZM84.33 40.12H65.46a14.83 14.83 0 0 1-10.39-4.31 14.71 14.71 0 0 1-4.33-10.34V6.6c.02-3.87 1.58-7.59 4.34-10.34a14.85 14.85 0 0 1 10.38-4.32h18.87c3.9.03 7.65 1.59 10.41 4.35s4.31 6.5 4.32 10.4v18.7c0 3.9-1.56 7.64-4.32 10.4a14.83 14.83 0 0 1-10.41 4.33ZM65.46-3.26a9.93 9.93 0 0 0-9.9 9.87v18.8a9.85 9.85 0 0 0 9.9 9.86h18.87a9.93 9.93 0 0 0 9.9-9.86V6.6a9.85 9.85 0 0 0-9.9-9.86H65.46Z"/><path d="M53.1 10.64H33.4v4.89h19.7v-4.89Z"/></g><defs><linearGradient id="eyesGlasses-a" x1="2332.67" y1="1561.82" x2="3621.21" y2="1561.82" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#969696" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient><linearGradient id="eyesGlasses-b" x1="2269.64" y1="1561.82" x2="3558.18" y2="1561.82" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#969696" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient></defs>`,
	  closed: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M63.16 19.11a1.68 1.68 0 0 1-1.5-.93 1.75 1.75 0 0 1-.12-1.32 13.54 13.54 0 0 1 4.85-7.1 13.1 13.1 0 0 1 8.07-2.65v.01c2.9-.01 5.73.92 8.06 2.68a13.63 13.63 0 0 1 4.87 7.08c.13.44.08.91-.13 1.32a1.72 1.72 0 0 1-2.3.73 1.69 1.69 0 0 1-.83-1.03c-.63-2.13-1.91-4-3.66-5.32a9.92 9.92 0 0 0-6.07-2c-2.17 0-4.28.7-6.02 2.02a10.26 10.26 0 0 0-3.64 5.3c-.1.35-.32.65-.6.87a1.7 1.7 0 0 1-.98.36ZM2.17 19.11a1.4 1.4 0 0 1-.5-.08 1.68 1.68 0 0 1-1.01-.85 1.75 1.75 0 0 1-.12-1.32 13.57 13.57 0 0 1 4.85-7.1 13.12 13.12 0 0 1 8.07-2.65v.01c2.9-.02 5.73.92 8.06 2.67a13.6 13.6 0 0 1 4.86 7.09 1.75 1.75 0 0 1-.53 1.85c-.18.14-.38.25-.6.32-.42.13-.9.09-1.3-.12-.4-.22-.7-.59-.83-1.03-.62-2.13-1.9-4-3.65-5.31a9.92 9.92 0 0 0-6.06-2.01 9.92 9.92 0 0 0-6.03 2.02 10.26 10.26 0 0 0-3.64 5.3c-.1.35-.31.65-.6.87-.27.22-.61.35-.97.36Z" fill="#000"/>`,
	  love: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M19.16 32.01C11.5 28.4-2.17 22.5-5.14 12.06a10.8 10.8 0 0 1-.36-1.46C-7.32.33 3.58-6.92 13.46.1 19.24-8.3 29.2-7.43 33.28-.83a12.1 12.1 0 0 1 1.6 4.25c2 11.3-9.5 22.27-15.72 28.6Z" fill="#CE0F0F"/><path opacity=".2" d="M17.73 28.61C10.96 25.4-.53 20.41-5.13 12.06a10.8 10.8 0 0 1-.37-1.46C-7.32.33 3.58-6.92 13.46.1 19.24-8.3 29.2-7.43 33.28-.83c0 .27.13.55.18.83 1.96 11.33-9.5 22.23-15.73 28.62Z" fill="#fff"/><path opacity=".4" d="M-3.74 9.01C-3.18 4.7 5.96-.95 9.74.12 2.38-1.9-2.71 1.58-3.74 9.02Z" fill="#fff"/><path d="M70.07 32.01c7.66-3.62 21.33-9.52 24.29-19.95.15-.48.28-.97.36-1.46C96.54.33 85.65-6.92 75.76.1 69.98-8.3 60.04-7.43 55.95-.83a12.1 12.1 0 0 0-1.6 4.25c-2.03 11.3 9.5 22.27 15.72 28.6Z" fill="#CE0F0F"/><path opacity=".2" d="M71.5 28.61c6.77-3.21 18.25-8.2 22.86-16.55.15-.48.28-.97.36-1.46C96.54.33 85.65-6.92 75.76.1 69.98-8.3 60.04-7.43 55.94-.83c0 .27-.13.55-.17.83-2.03 11.33 9.5 22.23 15.72 28.62Z" fill="#fff"/><path opacity=".4" d="M92.95 9.01C92.41 4.7 83.25-.95 79.47.12 86.85-1.9 92 1.58 92.95 9.02Z" fill="#fff"/></g>`,
	  stars: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="m7.3-9.5 1.82-1.6L19.18 3.35l17.5-1.54-7.85 15.71 9.31 14.07-1.8 1.58-17.32-2.23L5.76 42.48 2.82 24.74l-15.06-9.03 1.82-1.58 13.77-6.5L7.3-9.52Z" fill="#2B8DD6"/><path d="M9.11-11.1 21.63 1.24 39.13-.3 31.27 15.4l6.86 16.17-17.36-2.61L7.52 40.5 4.64 23.16l-15.06-9.04 15.59-8.1L9.1-11.08Z" fill="#70CDF2"/><path opacity=".4" d="M10.27-8 20.64 3.03 35.35 1.2 18.37 5.67l-8.9-9.8.8-3.87Z" fill="#fff"/><path d="m83.18-9.5-1.8-1.6L71.3 3.35 53.8 1.8l7.85 15.71-9.31 14.07 1.82 1.58 17.32-2.23 13.24 11.55 2.94-17.74 15.06-9.03-1.8-1.58-13.8-6.5-3.94-17.13Z" fill="#2B8DD6"/><path d="M81.38-11.1 68.87 1.24 51.36-.3l7.86 15.72-6.88 16.17 17.38-2.61L82.96 40.5l2.9-17.34 15.06-9.04-15.6-8.1-3.94-17.11Z" fill="#70CDF2"/><path opacity=".4" d="M80.2-8 69.85 3.03 55.14 1.2l16.99 4.47L81-4.13 80.21-8Z" fill="#fff"/></g>`,
	  shades: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path fill-rule="evenodd" clip-rule="evenodd" d="M-10.24 2.64c-4.65 4.43-2.22 27.02 7.48 32.71 3.24 1.9 15.66 3.74 21.17 1.63 10.32-3.94 16.86-18.34 16.86-25.23 0-5.08-9.94-10.86-18.17-11.8C9.1-1-6-1.39-10.24 2.64Z" fill="url(#eyesShades-a)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M98.51 2.64c4.66 4.43 2.24 27.02-7.47 32.71-3.23 1.9-15.66 3.74-21.18 1.63C59.55 33.04 53 18.7 53 11.75 53 6.67 62.95.89 71.18-.05c7.97-.95 23.1-1.33 27.33 2.7Z" fill="url(#eyesShades-b)"/><path d="M109.83-2.7a.62.62 0 0 0-.48-.5c-8.12-1.39-30.47-2.95-42.45-.7A33.37 33.37 0 0 0 56.73-.04l-2.37 1.21A20.61 20.61 0 0 1 44.15 3.5c-3.55.12-7.08-.68-10.23-2.32l-2.37-1.2a33.23 33.23 0 0 0-10.17-3.89C9.4-6.1-12.93-4.59-21.07-3.2a.57.57 0 0 0-.47.5 33.81 33.81 0 0 0 0 9.3.6.6 0 0 0 .44.47s2.95.83 4.01 9.09c.84 6.53 4.21 22.03 17.7 24.5 3.63.6 7.3.92 11 .92 1.62.02 3.24-.07 4.85-.28 14.98-2.18 19.62-15.62 21.86-22.13.3-.86.55-1.58.78-2.16 1.48-3.55 2.64-3.93 5.06-3.93 1.9 0 3.58.3 5.05 3.93.22.58.49 1.32.78 2.16 2.23 6.46 6.89 19.9 21.84 22.13 5.3.5 10.62.28 15.85-.65 13.5-2.46 16.89-17.96 17.68-24.5 1.04-8.25 3.97-9.07 3.98-9.08a.6.6 0 0 0 .47-.47c.44-3.08.45-6.21.03-9.3Zm-9.87 18.58c-.77 6.71-3.66 15.7-9.21 18.96-3.08 1.81-15.26 3.66-20.64 1.6-10.25-3.92-16.52-18.2-16.52-24.7 0-4.42 9.08-10.22 17.69-11.22C74.88.1 78.48-.1 82.1-.1c6.8 0 13.54.8 16.03 3.17 1.78 1.71 2.52 6.86 1.83 12.8Zm-65.27-4.13c0 6.49-6.25 20.77-16.48 24.68-5.42 2.07-17.59.22-20.62-1.6-5.56-3.25-8.43-12.24-9.22-18.95-.69-5.9 0-11.1 1.86-12.8C-7.28.7-.54-.1 6.26-.1c3.61 0 7.22.2 10.81.62 8.55 1 17.62 6.77 17.62 11.23Z" fill="#000"/><defs><linearGradient id="eyesShades-a" x1="11.37" y1="37.92" x2="11.37" y2="-.68" gradientUnits="userSpaceOnUse"><stop offset=".32" stop-color="#121212"/><stop offset="1" stop-color="#474747"/></linearGradient><linearGradient id="eyesShades-b" x1="76.91" y1="-.68" x2="76.91" y2="37.92" gradientUnits="userSpaceOnUse"><stop stop-color="#474747"/><stop offset=".68" stop-color="#121212"/></linearGradient></defs>`,
	  closed2: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M75.84 21.11c-2.9.04-5.72-.89-8.04-2.63a13.47 13.47 0 0 1-4.85-7.03 1.75 1.75 0 0 1 1.1-2.26 1.68 1.68 0 0 1 1.86.61c.14.2.24.4.3.64.6 2.11 1.87 3.97 3.61 5.28a9.84 9.84 0 0 0 6.04 1.98c2.17.01 4.29-.68 6.03-2a10.17 10.17 0 0 0 3.65-5.26c.15-.42.46-.75.85-.95a1.68 1.68 0 0 1 2.23.7c.21.38.27.83.17 1.26a13.48 13.48 0 0 1-4.87 7.04 13.17 13.17 0 0 1-8.08 2.62ZM13.84 21.11c-2.9.03-5.73-.9-8.06-2.65a13.54 13.54 0 0 1-4.85-7.05 1.78 1.78 0 0 1 .51-1.88 1.67 1.67 0 0 1 2.4.22c.15.17.25.38.32.6.62 2.1 1.9 3.96 3.64 5.28a9.93 9.93 0 0 0 6.02 2c2.18.03 4.3-.67 6.06-1.99a10.21 10.21 0 0 0 3.66-5.3 1.68 1.68 0 0 1 3.08-.25c.21.4.27.85.17 1.27a13.57 13.57 0 0 1-4.86 7.1 13.19 13.19 0 0 1-8.1 2.65Z" fill="#000"/>`,
	  crying: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M63 19.06c-.17 0-.34-.03-.5-.1a1.68 1.68 0 0 1-1-.84 1.75 1.75 0 0 1-.12-1.32 13.54 13.54 0 0 1 4.85-7.1 13.1 13.1 0 0 1 8.07-2.64c2.9-.03 5.73.9 8.06 2.66a13.63 13.63 0 0 1 4.87 7.08c.13.44.08.92-.13 1.32a1.72 1.72 0 0 1-2.3.73 1.69 1.69 0 0 1-.83-1.02c-.63-2.14-1.91-4-3.66-5.32a9.92 9.92 0 0 0-6.07-2c-2.17 0-4.28.7-6.02 2.02a10.26 10.26 0 0 0-3.64 5.3c-.1.35-.32.66-.6.88a1.7 1.7 0 0 1-.98.36ZM2.01 19.06a1.4 1.4 0 0 1-.5-.1 1.68 1.68 0 0 1-1-.83 1.75 1.75 0 0 1-.12-1.33 13.57 13.57 0 0 1 4.85-7.09 13.12 13.12 0 0 1 8.07-2.65c2.9-.03 5.73.9 8.06 2.66a13.6 13.6 0 0 1 4.86 7.08 1.75 1.75 0 0 1-.53 1.85c-.18.15-.38.25-.6.32-.42.14-.9.1-1.3-.12s-.7-.58-.83-1.02c-.62-2.13-1.9-4-3.66-5.32a9.92 9.92 0 0 0-6.05-2 9.92 9.92 0 0 0-6.03 2.02 10.26 10.26 0 0 0-3.64 5.3c-.1.35-.31.66-.6.88-.27.22-.61.34-.97.36Z" fill="#000"/><path d="M.67 39.59a6.63 6.63 0 0 1-8.3 4.4 6.64 6.64 0 0 1-3.56-8.69c1.75-4.82 6.4-5.63 11.24-12.46C-.96 30.9 2.6 34.32.67 39.59ZM86.43 39.59a6.34 6.34 0 1 0 11.86-4.4c-1.75-4.77-6.4-5.57-11.28-12.4 1.05 8.1-2.51 11.52-.58 16.79Z" fill="#4ABCF4"/>`,
	  sleepClose: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M75.76 21.94c-2.9.04-5.72-.89-8.04-2.63a13.47 13.47 0 0 1-4.85-7.03 1.75 1.75 0 0 1 .49-1.92 1.7 1.7 0 0 1 2.76.9c.6 2.12 1.88 3.98 3.62 5.29a9.84 9.84 0 0 0 6.04 1.98c2.17.01 4.29-.68 6.03-2a10.17 10.17 0 0 0 3.65-5.26c.15-.42.46-.75.85-.95a1.68 1.68 0 0 1 2.24.7c.21.38.27.83.17 1.26a13.48 13.48 0 0 1-4.87 7.04 13.17 13.17 0 0 1-8.08 2.62ZM13.76 21.94c-2.9.03-5.73-.9-8.06-2.65a13.54 13.54 0 0 1-4.85-7.06 1.78 1.78 0 0 1 .51-1.88 1.67 1.67 0 0 1 2.4.22c.15.17.25.38.32.6.62 2.1 1.9 3.96 3.64 5.28a9.93 9.93 0 0 0 6.02 2c2.18.03 4.3-.67 6.06-1.99a10.22 10.22 0 0 0 3.66-5.3 1.68 1.68 0 0 1 3.08-.25c.21.4.27.85.17 1.27a13.57 13.57 0 0 1-4.87 7.1 13.19 13.19 0 0 1-8.08 2.65Z" fill="#000"/>`,
	};
