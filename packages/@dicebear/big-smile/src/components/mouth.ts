import { escape } from '@dicebear/core';
	import type {
	  ComponentGroup,
	  ComponentPickCollection,
	  ColorPickCollection,
	} from '../types.js';
	export const mouth: ComponentGroup = {
	  openedSmile: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M393.3 367c3 1.7 24.1-24.8 38.2-16.7 4.7 2.7 8.3 7.3 11 12.3 6 11 8 24.4 5.7 36.8a67 67 0 0 1-29 41.2c-37.4 25.5-67 20.7-106.8 6-31.4-11.7-74-35.6-65.2-78.7 15.6-76 146.1-1 146.1-1Z" fill="#873C41"/><path d="M285.3 362c10.2 6.4 22.5 7 33.6 4.5 2.1-.5 3.8 1.3 4.3 3.4 5.4 21 36 32 51.5 18.5 1.2-1 3.3-1.3 4.5-.1 8.3 7.8 21.6 10 31.4 4.6 13.8-7.5 13.7-28.6 10-43.3-12.2 3.7-25 18.7-27.3 17.3 0 0-80.1-46-122.3-29.4a31 31 0 0 0 14.3 24.6Z" fill="#fff"/><path d="M400.3 443.8c-22-20.1-48.9-31.4-76.2-39.3-23.4-6.9-49.7-11.3-73.4-4.5 11 23.5 39.2 38.2 61.7 46.6 34.8 12.9 61.8 18.2 93 2.2-1.7-1.7-3.3-3.4-5.1-5Z" fill="#EE7E8B"/>`,
	  unimpressed: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path fill-rule="evenodd" clip-rule="evenodd" d="M317 384a4 4 0 0 1 4-4h92a4 4 0 0 1 0 8h-92a4 4 0 0 1-4-4Z" fill="#592125"/>`,
	  gapSmile: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M393.3 367c3 1.7 24.1-24.8 38.2-16.7 4.7 2.7 8.3 7.3 11 12.3 6 11 8 24.4 5.7 36.8a67 67 0 0 1-29 41.2c-37.4 25.5-67 20.7-106.8 6-31.4-11.7-74-35.6-65.2-78.7 15.6-76 146.1-1 146.1-1Z" fill="#873C41"/><path d="M318.9 366.5a44.8 44.8 0 0 1-33.6-4.4 31 31 0 0 1-14.3-24.6c26.3-10.3 67.3 3.6 94.5 15.6l-13 38.9c-12.8-2.1-26-9.4-29.3-22.1-.5-2-2.2-3.9-4.3-3.4ZM420.5 349.6c3.8 14.7-5.7 34.9-19.5 42.4-14 8.7-31.3 7-37.5 1.8l11.2-36.5c11.3 5.4 18.6 9.6 18.6 9.6 2.3 1.4 15-13.6 27.2-17.3Z" fill="#fff"/><path d="M400.3 443.8c-22-20.1-48.9-31.4-76.2-39.3-23.4-6.9-49.7-11.3-73.4-4.5 11 23.5 39.2 38.2 61.7 46.6 34.8 12.9 61.8 18.2 93 2.2-1.7-1.7-3.3-3.4-5.1-5Z" fill="#EE7E8B"/>`,
	  openSad: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M311.4 362.3C339 346 362.6 345 379.3 344c33.3-2 61.1 8.8 68.5 42.7 6.8 31.2-16.9 49.4-27.8 49-11-.3-13.3-12.2-39.3-12.8-26-.6-63.4 42.9-85.5 26.6-22.2-16.4-18.4-66.6 16.2-87Z" fill="#873C41"/><mask id="mouthOpenSad-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="281" y="343" width="169" height="110"><path d="M311.4 362.3c27.7-16.4 51.3-17.4 68-18.4 33.4-2 61.2 8.8 68.6 42.6 6.8 31.1-16.9 49.3-27.8 49-11-.3-13.3-12.3-39.4-12.9-26-.6-63.4 42.9-85.6 26.6-22.2-16.3-18.4-66.5 16.2-87Z" fill="#873C41"/></mask><g mask="url(#mouthOpenSad-a)"><path d="M430.6 428.3c-26.2-16.8-55.9-23.5-85.4-26.8-25.3-2.9-53.1-2.7-76.2 8.5 15.5 22.2 11.9 47.5 36.5 52 38 7 102-7.5 131.2-29.4-2-1.4-4-3-6.1-4.3Z" fill="#EE7E8B"/><path d="M299.1 377a46.8 46.8 0 0 0 34.3-8.5c2-1.2 4.2-.1 5.5 1.6 13.2 18.4 47.2 17.5 57-1.4.8-1.5 2.8-2.6 4.4-1.9a29 29 0 0 0 32.3-7.3c10.5-12.5 2.5-33-6.8-46-10.4 8.3-17 27.7-19.8 27.3 0 0-95.4-14.5-130.2 17.7a32.4 32.4 0 0 0 23.3 18.4Z" fill="#fff"/></g>`,
	  teethSmile: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M385.3 380.4c9.4.2 18.3-2.5 26-10.5 4-4.2 8.2-6.5 14-3 13.9 8.7 17.1 30.2 13.4 44.6a63.3 63.3 0 0 1-30.7 36.8c-38.2 22.4-67.6 17.4-106.8 3-30.8-11.2-72.5-33.9-62-72.9 13.2-48.3 69.6-25 101.4-12 13.5 5.5 29.6 13.5 44.7 14Z" fill="#fff"/><mask id="mouthTeethSmile-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="237" y="349" width="204" height="115"><path d="M385.3 380.4c9.4.2 18.3-2.5 26-10.5 4-4.2 8.2-6.5 14-3 13.9 8.7 17.1 30.2 13.4 44.6a63.3 63.3 0 0 1-30.7 36.8c-38.2 22.4-67.6 17.4-106.8 3-30.8-11.2-72.5-33.9-62-72.9 13.2-48.3 69.6-25 101.4-12 13.5 5.5 29.6 13.5 44.7 14Z" fill="#fff"/></mask><g mask="url(#mouthTeethSmile-a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m257.6 434 40-101.1 5.6 2.2-40 101.1-5.6-2.2Zm82.3 32.7 27.7-106.1 5.8 1.5-27.7 106.1-5.8-1.5Zm82.4-25.6L407 363.3l6-1.2 15.2 77.8-5.9 1.2Z" fill="#D1D3D4"/></g>`,
	  awkwardSmile: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M351.7 357.8c35.7 2.3 57.8 0 65 0 30-4.5 42.7 48.4 5 76.2-11.2 8.3-16.7 7-40.7 7-24 0-50 9-64.5 4.9-41.1-11.6-48.3-41.4-44.7-57.8 5-22.1 15.2-34.4 80-30.3Z" fill="#fff"/><mask id="mouthAwkwardSmile-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="271" y="357" width="174" height="90"><path d="M351.7 357.8c35.7 2.3 57.8 0 65 0 30-4.5 42.7 48.4 5 76.2-11.2 8.3-16.7 7-40.7 7-24 0-50 9-64.5 4.9-41.1-11.6-48.3-41.4-44.7-57.8 5-22.1 15.2-34.4 80-30.3Z" fill="#fff"/></mask><g mask="url(#mouthAwkwardSmile-a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m285.8 450 17.5-107.4 5.9 1L291.7 451l-5.9-1Zm77.4 14.3 4.3-109.6 6 .2-4.3 109.6-6-.2Zm66.8-29.8L416.4 348l6-1 13.6 86.4-6 1Z" fill="#D1D3D4"/></g>`,
	  braces: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path d="M393.3 367c3 1.7 24.1-24.8 38.2-16.7 4.7 2.7 8.3 7.3 11 12.3 6 11 8 24.4 5.7 36.8a67 67 0 0 1-29 41.2c-37.4 25.5-67 20.7-106.8 6-31.4-11.7-74-35.6-65.2-78.7 15.6-76 146.1-1 146.1-1Z" fill="#873C41"/><path d="M285.3 362c10.2 6.4 22.5 7 33.6 4.5 2.1-.5 3.8 1.3 4.3 3.4 5.4 21 36 32 51.5 18.5 1.2-1 3.3-1.3 4.5-.1 8.3 7.8 21.6 10 31.4 4.6 13.8-7.5 13.7-28.6 10-43.3-12.2 3.7-25 18.7-27.3 17.3 0 0-80.1-46-122.3-29.4a31 31 0 0 0 14.3 24.6Z" fill="#fff"/><path d="M400.3 443.8c-22-20.1-48.9-31.4-76.2-39.3-23.4-6.9-49.7-11.3-73.4-4.5 11 23.5 39.2 38.2 61.7 46.6 34.8 12.9 61.8 18.2 93 2.2-1.7-1.7-3.3-3.4-5.1-5Z" fill="#EE7E8B"/><mask id="mouthBraces-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="245" y="333" width="205" height="126"><path d="M393.3 367c3 1.7 24.1-24.8 38.2-16.7 4.7 2.7 8.3 7.3 11 12.3 6 11 8 24.4 5.7 36.8a67 67 0 0 1-29 41.2c-37.4 25.5-67 20.7-106.8 6-31.4-11.7-74-35.6-65.2-78.7 15.6-76 146.1-1 146.1-1Z" fill="#873C41"/></mask><g mask="url(#mouthBraces-a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M272.8 332c.6-.6 1.5-.7 2.2-.2 2.2 2 6.6 4.5 11.5 7.1 4.4 2.4 9.2 4.8 13 6.7l1.2.6c15.4 7.7 39.2 15.9 51.6 20.1l2.2.8c14.5 5 32.2 10.4 51.5 10.4a30.8 30.8 0 0 0 14.8-4.3 1.5 1.5 0 0 1 1.4 2.6 33.8 33.8 0 0 1-16.2 4.7c-19.8 0-38-5.6-52.5-10.6l-2.2-.7a486.5 486.5 0 0 1-53.1-21c-3.8-1.8-8.6-4.2-13-6.6a83.6 83.6 0 0 1-12.2-7.4c-.6-.6-.7-1.5-.2-2.2Z" fill="#C4C4C4"/><rect x="399.7" y="372" width="12" height="12" rx="2" transform="rotate(3.2 399.7 372)" fill="#A09E9E"/><rect x="349.1" y="361" width="12" height="12" rx="2" transform="rotate(15 349.1 361)" fill="#A09E9E"/><rect x="297.3" y="340" width="12" height="12" rx="2" transform="rotate(26.4 297.3 340)" fill="#A09E9E"/></g>`,
	  kawaii: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<path fill-rule="evenodd" clip-rule="evenodd" d="M386.9 358c1 0 2 .4 2.9 1.1 4.2 4 11.4 9.2 19.5 11.7 7.9 2.5 16 2.2 23-3.8a4 4 0 1 1 5.3 6 31 31 0 0 1-30.7 5.5 59.7 59.7 0 0 1-19.6-11 84.3 84.3 0 0 1-101.3 16 4 4 0 0 1 4-7 76.3 76.3 0 0 0 94-17.2 4 4 0 0 1 2.9-1.3Z" fill="#592125"/>`,
	};
