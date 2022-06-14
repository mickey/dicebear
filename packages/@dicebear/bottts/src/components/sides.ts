import { escape } from '@dicebear/core';
	import type {
	  ComponentGroup,
	  ComponentPickCollection,
	  ColorPickCollection,
	} from '../types.js';
	export const sides: ComponentGroup = {
	  antenna01: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<mask id="sidesAntenna01-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="11" width="156" height="51"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11h-2v20h1.4c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74C6 34.04 6 35.16 6 37.4v1.2c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44H18v10.6c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44h23.2c2.24 0 3.36 0 4.22-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22V20.4c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74C50.96 14 49.84 14 47.6 14H24.4c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74c-.44.86-.44 1.98-.44 4.22V31h-5V11Zm113 23.4c0-2.24 0-3.36.44-4.22a4 4 0 0 1 1.74-1.74c.86-.44 1.98-.44 4.22-.44h23.2c2.24 0 3.36 0 4.22.44a4 4 0 0 1 1.74 1.74c.44.86.44 1.98.44 4.22v11.2c0 2.24 0 3.36-.44 4.22a4 4 0 0 1-1.74 1.74c-.86.44-1.98.44-4.22.44h-23.2c-2.24 0-3.36 0-4.22-.44a4 4 0 0 1-1.74-1.74c-.44-.86-.44-1.98-.44-4.22V34.4Z" fill="#0076DE"/></mask><g mask="url(#sidesAntenna01-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path fill="#fff" fill-opacity=".3" d="M0 0h180v76H0z"/><path fill="#000" fill-opacity=".1" d="M0 38h180v38H0z"/></g><path fill="#fff" fill-opacity=".4" d="M11 11h2v20h-2z"/><circle cx="12" cy="8" r="4" fill="#FFEA8F"/><circle cx="13" cy="7" r="2" fill="#fff"/>`,
	  antenna02: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<mask id="sidesAntenna02-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="9" width="160" height="51"><path d="M160 9h2v19h1.6c2.24 0 3.36 0 4.22.44a4 4 0 0 1 1.74 1.74c.44.86.44 1.98.44 4.22v19.2c0 2.24 0 3.36-.44 4.22a4 4 0 0 1-1.74 1.74c-.86.44-1.98.44-4.22.44h-23.2c-2.24 0-3.36 0-4.22-.44a4 4 0 0 1-1.74-1.74c-.44-.86-.44-1.98-.44-4.22V34.4c0-2.24 0-3.36.44-4.22a4 4 0 0 1 1.74-1.74c.86-.44 1.98-.44 4.22-.44H160V9ZM10 34.4c0-2.24 0-3.36.44-4.22a4 4 0 0 1 1.74-1.74c.86-.44 1.98-.44 4.22-.44h23.2c2.24 0 3.36 0 4.22.44a4 4 0 0 1 1.74 1.74c.44.86.44 1.98.44 4.22v19.2c0 2.24 0 3.36-.44 4.22a4 4 0 0 1-1.74 1.74c-.86.44-1.98.44-4.22.44H16.4c-2.24 0-3.36 0-4.22-.44a4 4 0 0 1-1.74-1.74C10 56.96 10 55.84 10 53.6V34.4Z" fill="#0076DE"/></mask><g mask="url(#sidesAntenna02-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/><path fill="#000" fill-opacity=".1" d="M0 38h180v38H0z"/></g><path fill="#fff" fill-opacity=".4" d="M160 8h2v20h-2z"/><circle cx="161" cy="5" r="4" fill="#E1E6E8"/><circle cx="162" cy="4" r="2" fill="#fff"/>`,
	  cables01: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M38 12c-2.95 11.7-19.9 6.67-23.37 18-3.46 11.35 8.03 20 17.53 20" stroke="#2A3544" stroke-width="6" opacity=".9"/><path d="M150 55c8.4 3.49 20.1-7.6 16-16.5-4.1-8.9-16-6.7-16-19.3" stroke="#2A3544" stroke-width="4" opacity=".9"/><mask id="sidesCables01-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="21" y="6" width="138" height="58"><path d="M138 6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h19a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-19ZM21 37c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H23a2 2 0 0 1-2-2V37ZM136 44c0-1.1.9-2 2-2h19a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-19a2 2 0 0 1-2-2V44Z" fill="#273951"/></mask><g mask="url(#sidesCables01-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/></g>`,
	  cables02: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<g opacity=".9" stroke="#2A3544"><ellipse cx="32.5" cy="23" rx="16.5" ry="18" stroke-width="6"/><path d="M29.51 36.76c-7.4 4.29-17 1.55-21.42-6.1" stroke-width="4"/><ellipse cx="28.5" cy="52.5" rx="16.5" ry="14.5" stroke-width="4"/></g><g opacity=".9" stroke="#2A3544"><path d="M168.6 60.42c-4.27-7.41-13.95-9.84-21.6-5.42" stroke-width="4"/><ellipse cx="148.5" cy="22.5" rx="16.5" ry="15.5" stroke-width="6"/></g><mask id="sidesCables02-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="21" y="0" width="138" height="72"><path d="M145 0a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-12ZM23 27a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V29a2 2 0 0 0-2-2H23ZM24 60a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H24ZM143 44c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V44Z" fill="#273951"/></mask><g mask="url(#sidesCables02-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/></g>`,
	  round: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<mask id="sidesRound-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="16" width="156" height="45"><path d="M30 61c-9.94 0-18-10.07-18-22.5S20.06 16 30 16s18 10.07 18 22.5S39.94 61 30 61ZM150 61c9.94 0 18-10.07 18-22.5S159.94 16 150 16s-18 10.07-18 22.5S140.06 61 150 61Z" fill="#E1E6E8"/></mask><g mask="url(#sidesRound-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/><path fill="#000" fill-opacity=".2" d="M20 0h140v76H20z"/></g>`,
	  square: (components: ComponentPickCollection, colors: ColorPickCollection) =>
	    `<mask id="sidesSquare-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="14" y="16" width="152" height="44"><path d="M14.98 20.91C14 22.84 14 25.36 14 30.4v15.2c0 5.04 0 7.56.98 9.49a9 9 0 0 0 3.93 3.93c1.93.98 4.45.98 9.49.98h7.2c5.04 0 7.56 0 9.49-.98a9 9 0 0 0 3.93-3.93c.98-1.93.98-4.45.98-9.5V30.4c0-5.04 0-7.56-.98-9.49A9 9 0 0 0 45.09 17c-1.93-.98-4.45-.98-9.5-.98h-7.2c-5.04 0-7.56 0-9.49.98A9 9 0 0 0 15 20.91ZM130.98 20.91c-.98 1.93-.98 4.45-.98 9.49v15.2c0 5.04 0 7.56.98 9.49a9 9 0 0 0 3.93 3.93c1.93.98 4.45.98 9.5.98h7.19c5.04 0 7.56 0 9.49-.98a9 9 0 0 0 3.93-3.93c.98-1.93.98-4.45.98-9.5V30.4c0-5.04 0-7.56-.98-9.49a9 9 0 0 0-3.93-3.92c-1.93-.98-4.45-.98-9.5-.98h-7.19c-5.04 0-7.56 0-9.49.98a9 9 0 0 0-3.93 3.93Z" fill="#0076DE"/></mask><g mask="url(#sidesSquare-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/><path fill="#000" fill-opacity=".1" d="M0 38h180v38H0z"/></g>`,
	  squareAssymetric: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<mask id="sidesSquareAssymetric-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="8" width="165" height="60"><path d="M134.44 10.18c-.44.86-.44 1.98-.44 4.22v47.2c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44h23.2c2.24 0 3.36 0 4.22-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22V53c1.35-.02 2.16-.1 2.82-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22V29.4c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74c-.66-.34-1.47-.42-2.82-.43V14.4c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74C166.96 8 165.84 8 163.6 8h-23.2c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74ZM20.44 17.18c-.44.86-.44 1.98-.44 4.22V31h-3.6c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74c-.44.86-.44 1.98-.44 4.22v17.2c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44h23.2c2.24 0 3.36 0 4.22-.44a4 4 0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22V21.4c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74C42.96 15 41.84 15 39.6 15H26.4c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74Z" fill="#0076DE"/></mask><g mask="url(#sidesSquareAssymetric-a)"><path d="M0 0h180v76H0V0Z" fill="${escape.xml(
	      `#${colors.base}`
	    )}"/><path d="M0 0h180v76H0V0Z" fill="#fff" fill-opacity=".3"/><path fill="#000" fill-opacity=".1" d="M0 47h180v29H0z"/><circle cx="161" cy="20" r="5" fill="#fff" fill-opacity=".6"/><circle cx="161" cy="36" r="5" fill="#fff" fill-opacity=".6"/></g>`,
	};
