import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const accessoires: ComponentGroup = {
  'sunglasses': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M569 416.32c10.67-.28 21.35-.06 32.02-.26 13.97-.61 27.98-.37 41.98-.52 3.87.15 9-.18 12.21 2.31 2.36 1.63 2.22 5.59 2.35 8.14-.11 4.33-.28 9.38-2.31 13.3-5.07 1.98-11.44 1.25-16.84 1.91.43 12.26 1.67 24.56 1.31 36.83-.71 13.91-3.67 28-10.34 40.32-8.09 13.04-19.91 24.39-33.54 31.51-10.42 5.38-21.75 7.4-33.39 7.78-6.22.19-12.08.49-18.21-.84-9.48-2.04-18.88-4.45-26.96-10.06-11.14-7.58-19.27-18.77-25.41-30.6-6.59-13.57-10.14-29.24-13.26-43.94-.53-2.3-2.38-3.48-4.35-4.45-6.63-2.95-14.93-.51-18.8 5.6-.8 2.41-.9 5.14-1.16 7.65-.62 7.61-2.25 15.33-3.88 22.79-3.12 13.58-8.99 26.32-16.8 37.83-4.35 5.79-9.75 11.42-16.22 14.81-10.53 5.74-22.3 10.09-34.41 10.28-7.24-.19-14.15-.39-21.12-2.5-5.48-1.33-10.51-4.8-15.16-7.94-6.41-4.39-11.06-10.29-15.28-16.72-5.3-8.31-9.31-17.34-12.24-26.73-2.84-9.45-5.24-18.79-5.19-28.73-4.55.67-9.39 2.24-13.99 1.96-4.36-.81-5.31-7.51-5.5-11.08.13-2.39-.16-6.76 2.69-7.68 21.6-9.82 44.44-17.06 67.54-22.42 17.03-3.7 34.73-8.24 52.27-6.65 11.18.94 22.83 3.92 31.72 11.06 3.2 2.41 5.43 6.83 9.38 7.59 7.08 1.83 14.45-1.23 20.89-3.96 3.63-10 10.02-17.34 19.06-22.82 6.29-3.84 13.67-6.15 20.7-8.28 16.76-4.03 33.14-4.65 50.24-5.49Z" fill="#000"/>
  <path d="M307.1 478.16c1.21-1.2 3.4-.01 2.44 1.64-1.21 1.2-3.4.01-2.44-1.64Z" fill="#000"/>
  <ellipse cx="605" cy="457.5" rx="14" ry="10.5" fill="#fff"/>
  <ellipse cx="411" cy="476.107" rx="11" ry="8.107" fill="#fff"/>
`,
  'glasses': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M608 415.8c6.186-.151 12.368-.167 18.55-.183 4.483-.012 8.966-.024 13.45-.087.562.005 1.127.006 1.693.008 3.106.01 6.253.02 9.307.502 2.58.53 5.61 1.94 6.09 4.83.91 5.11.46 12.04-1.14 16.99-.46 1.77-1.74 2.1-3.35 2.34-3.462.36-6.945.569-10.423.778-1.253.075-2.506.15-3.757.232.122 4.281.38 8.636.639 13.018.692 11.72 1.395 23.63-.439 34.802-.87 7.47-2.98 14.85-5.73 21.83-3.11 8.55-9.09 16.19-15.42 22.62-9.83 10.36-22.25 18.39-36.2 21.81-10.85 2.39-22.17 2.98-33.23 2.16-9.22-1.58-18.8-3.87-27.06-8.4-10.51-6.05-18.47-15.05-24.78-25.29-8.17-12.62-11.9-27.18-15.47-41.59-.515-2.188-.844-4.449-1.174-6.711-.414-2.834-.827-5.671-1.606-8.369-.48-1.78-2.64-3.07-4.17-3.9-6.71-3.36-16.41-.94-18.99 6.6-.499 2.84-.553 5.746-.608 8.66-.053 2.861-.106 5.73-.582 8.55-1.99 13.03-4.77 26.14-10.56 38.06-5.55 11.58-11.7 22.03-22.47 29.5-12.88 7.76-28.34 13.44-43.57 11.92-6.86-.15-14.05-1.41-20.36-4.13-6.87-3.71-13.8-8.11-18.84-14.16-10.32-12.28-16.95-27.7-20.79-43.17-1.87-6.83-3.04-13.81-2.97-20.91-1.637.243-3.268.56-4.899.877-2.393.466-4.787.931-7.201 1.163-2.24.22-4.26-.69-5.36-2.69-1.96-3.76-2.46-8.38-1.77-12.53.041-.174.078-.354.116-.535.231-1.113.479-2.305 1.614-2.795 27.43-12.56 55.94-20.6 85.48-26.45 11.24-2.31 22.47-3.81 33.98-3.07 10.03.01 19.98 2.36 28.86 7.05 10.79 4.81 24.51 5.41 35.15-.12 3.04-1.482 4.933-3.677 6.926-5.986 1.193-1.383 2.422-2.807 3.954-4.144 9.81-9.08 23.09-13.26 36.12-14.79 13.108-2.381 26.26-3.017 39.523-3.659l2.497-.121c5.544-.149 11.094-.149 16.646-.149 7.446 0 14.893 0 22.324-.361Zm-23 6.26c8.34-.34 16.32-.45 24.15 2.9.646.302 1.365.598 2.113.906 3.164 1.304 6.86 2.826 7.887 5.964 5.81 12.39 8.22 26.56 8.39 40.17.56 12.44-.87 25.5-5.21 37.22-3.71 9.79-10.5 17.11-18.25 23.88-5.21 4.32-11.62 7.49-17.78 10.22-9.15 3.83-19.3 6.8-29.31 6.15-5.792-.342-11.557-1.779-17.192-3.184l-.868-.216c-5.96-1.466-10.686-4.562-15.7-7.847l-.001-.001-.859-.562c-6.8-4.54-12.23-10.46-17.08-16.98-2.766-3.934-4.565-8.67-6.303-13.249a253.502 253.502 0 0 0-1.217-3.161c-4.64-11.94-5.98-24.55-5.87-37.28.09-7.74 1.2-16.94 5.51-23.55 5.13-6.46 12-12.24 19.82-15.08 9.27-2.8 19.13-4.25 28.78-4.96 11.572-1.279 23.168-1.304 34.654-1.328 1.447-.003 2.892-.006 4.336-.012Zm-172.354 22.059c-.891-.021-1.778-.041-2.656-.079-8.612-.872-17.851.939-26.497 2.634-1.173.23-2.335.457-3.483.676-2.29.516-4.571 1.006-6.843 1.494-9.393 2.017-18.626 4-27.677 7.656-.903.361-1.836.713-2.782 1.069-5.765 2.175-12.01 4.53-14.948 10.191-4.839 9.868-3.731 19.612-2.557 29.93.124 1.09.249 2.186.367 3.29 1.93 11.77 6.83 23.25 13.14 33.33 5.06 8.01 10.9 15.08 19.42 19.57 12.78 7.1 27.95 6.15 41.4 1.57 11.36-4.43 21.76-9.82 28.56-20.38 8.84-14.04 13.92-30.65 15.47-47.12.91-9.38-.1-18.83-2.68-27.88-.46-1.39-.98-2.92-1.89-4.09-5.19-5.6-11.6-9.87-19.19-11.35-2.333-.401-4.756-.456-7.154-.511Z" fill="#000"/>
`,
  'smallGlasses': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M531.31 506.71c7.34 4.5 12.1 12.74 12.79 21.28.97 9.95-4.19 20.21-12.55 25.62-6.49 4.08-14.6 5.58-22.07 3.66-11.77-2.85-20.88-13.75-20.98-25.94-8.63-10.18-25.54-13.93-36.48-5.26-3.23 2.99-6.61 7.32-6.74 11.91-1.66 12.18-12 22.15-24.27 23.27-12.14 1.5-24.49-6.08-28.61-17.62-4.63-11.86-.12-25.8 10.5-32.77 7.52-4.92 17.38-5.88 25.69-2.42 7.77 3.11 13.23 9.62 16.01 17.4 5.32-6.87 13.8-10.32 22.4-10.1 8.25-.07 15.45 3.28 21.98 8.05 1.86-6.67 5.57-12.57 11.32-16.53 9.06-6.39 21.73-6.65 31.01-.55Zm-22.64 2.4c6.34-2.22 13.56-1.59 19.29 1.93 7.13 4.28 11.43 12.68 10.61 20.98-.62 9.97-8.38 18.29-18.07 20.26-11.33 2.28-23.02-5.13-25.9-16.28-3.05-11.13 3.23-23.06 14.07-26.89Zm-70.58 15.77c-3.84-8.69-13.49-14.16-22.91-12.75-7.54 1.13-14.05 5.85-17.14 12.87-3.66 8.33-1.84 17.98 4.56 24.43 6.05 6.06 15.65 8.07 23.59 4.82 6.8-2.63 12.26-9.01 13.4-16.26.51-4.56.7-8.92-1.5-13.11Z" fill="#000"/>
`,
  'mustache': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M489.12 525.88c6.31 4.76 7.63 14.96 13.93 20.08 6.42 4.85 14.59 7.27 22.22 3.55 1.06 1.29 2.3 2.29 1.36 4.1-4.04 6.97-11.2 10.37-18.68 12.5-9.75 2.39-20.52 2.45-29.5-2.57-6.24-3.58-9.82-9.17-14.36-14.52-5.21 7.59-12.23 14.38-20.37 18.75-5.83 3.02-13.36 5.01-19.86 3.3-6.23-1.8-11.9-6.12-12.18-13.11-.15-2.33 1.23-2.67 3.13-3.08 1.34 1.31 2.27 2.69 4.21 3.08 3.48.68 6.9-1.27 9.13-3.82 5.38-6.43 4.41-17.03 10.37-22.64 6.15-5.89 16.87-8.12 24.48-3.93 7.71-5.3 17.94-6.94 26.12-1.69Z" fill="#000"/>
`,
  'blush': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill="#CA8D87">
    <path d="M630.35 552.39c16.3-3.73 33.88 3.26 42.95 17.32 10.02 14.91 8.65 35.85-3.36 49.25-12.24 14.36-34.25 18.02-50.57 8.65-13.03-7.21-21.33-21.71-20.78-36.62.27-18.28 13.89-34.76 31.76-38.6ZM373.13 564.86c13.96 8.6 20.73 26.53 15.96 42.21-2.18 7.66-6.83 14.23-12.93 19.29-5.35-5.15-10.7-10.39-15.38-16.16-7.4-8.33-13.6-18.04-19.57-27.43-3.4-5.87-6.82-11.21-8.9-17.61 12.17-7.81 28.64-8.34 40.82-.3Z"/>
  </g>
`,
  'birthmark': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M604.38 568.39c4.02-2.41 9.46-.07 11.04 4.17 1.82 4.48-1.82 9.89-6.54 10.29-3.42.34-6.63-1.72-7.93-4.86-1.48-3.48.12-7.82 3.43-9.6Z" fill="#000"/>
`,
}