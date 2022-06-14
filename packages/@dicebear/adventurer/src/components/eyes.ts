import { escape } from '@dicebear/core';
	import type {
	  ComponentGroup,
	  ComponentPickCollection,
	  ColorPickCollection,
	} from '../types.js';
	export const eyes: ComponentGroup = {
	  variant26: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M550.3 424.4a65.4 65.4 0 1 1 13 130 65.4 65.4 0 0 1-13-130Z" fill="#000"/><path d="M549.3 430.3a59.7 59.7 0 1 1 15.1 118.3 59.7 59.7 0 0 1-15.1-118.3Z" fill="#fff"/><path d="M381.2 447.1a55.3 55.3 0 0 1 60 45.9A54.9 54.9 0 0 1 341 532a57 57 0 0 1-9.1-28 55.1 55.1 0 0 1 49.4-57Z" fill="#000"/><path d="M376.5 453.7a49.3 49.3 0 1 1 20.8 96.4 49.3 49.3 0 0 1-20.8-96.4Z" fill="#fff"/><path d="M576.4 464.4a24.7 24.7 0 0 1 17.7 1.5c10 4.7 16.7 17.4 12.9 28.1a24.3 24.3 0 0 1-36.6 14.6 24.5 24.5 0 0 1 6-44.2ZM408.5 478.5c12.7-1.6 25 8.5 25.3 21.5 1 12.4-9.3 24.2-21.8 24.3a23 23 0 0 1-23.9-22.3 22.8 22.8 0 0 1 20.4-23.5Z" fill="#000"/>`,
	  variant25: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M550.3 424.4a65.7 65.7 0 0 1 68.2 43.3A65 65 0 0 1 598 540a65.4 65.4 0 1 1-47.7-115.6Z" fill="#000"/><path d="M549.3 430.3a59.6 59.6 0 1 1 15.1 118.3 59.6 59.6 0 0 1-15.1-118.3Z" fill="#fff"/><path d="M381.2 447A55.3 55.3 0 0 1 441 492a55 55 0 1 1-59.8-44.8Z" fill="#000"/><path d="M378.2 453.3a49.1 49.1 0 0 1 57.2 57.4 49.4 49.4 0 1 1-57.1-57.4Z" fill="#fff"/><path d="M527.2 466.2a23.8 23.8 0 1 1 5.7 47.1 23.8 23.8 0 0 1-5.6-47.1ZM358.5 480.9a21.8 21.8 0 0 1 28 16.5A21.7 21.7 0 0 1 369 523a21.9 21.9 0 0 1-24.6-14.2 22.3 22.3 0 0 1 14.1-28Z" fill="#000"/>`,
	  variant24: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M551.3 424.3a65.4 65.4 0 0 1 59.6 101.6 65.2 65.2 0 1 1-59.6-101.6Z" fill="#000"/><path d="M549.3 430.3a59.6 59.6 0 1 1 15.2 118.2 59.6 59.6 0 0 1-15.2-118.2Z" fill="#fff"/><path d="M381.2 447a55.4 55.4 0 0 1 58.7 40 55.5 55.5 0 0 1-26.7 63.1 54.7 54.7 0 0 1-81.3-46.1 55.1 55.1 0 0 1 49.4-57Z" fill="#000"/><path d="M378.3 453.3a49 49 0 0 1 57.2 56.6 49.1 49.1 0 0 1-93.1 12.9 49.3 49.3 0 0 1 35.9-69.5Z" fill="#fff"/><path d="M526.5 467.5c12-2.9 24.9 4.2 29.3 15.6a26 26 0 0 1 0 18.7 25.6 25.6 0 1 1-29.3-34.3ZM398.3 478.4a23.2 23.2 0 0 1 27 18c.7 5.7.6 11.4-2.6 16.2a23.4 23.4 0 0 1-23.6 11.2 23.1 23.1 0 0 1-.8-45.4Z" fill="#000"/>`,
	  variant23: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M547.5 424.8a65.2 65.2 0 1 1 18.8 129 65.2 65.2 0 0 1-18.8-129Z" fill="#000"/><path d="M549.2 430.3a59.6 59.6 0 1 1 15.3 118.3 59.6 59.6 0 0 1-15.3-118.3Z" fill="#fff"/><path d="M381.2 447.1a55.3 55.3 0 0 1 60 45.4 54.9 54.9 0 0 1-103.8 33.1 54.2 54.2 0 0 1-4.7-32.6 54.5 54.5 0 0 1 48.5-45.9Z" fill="#000"/><path d="M378.2 453.3a49.4 49.4 0 1 1-6 95.5A49.5 49.5 0 0 1 352 467c7.1-7.1 16.3-11.9 26.2-13.7Z" fill="#fff"/><path d="M558.8 456.7c-3.9 4-6.7 8.6-6.7 14.3a20.7 20.7 0 0 0 12.5 20.4c6 2.5 12.3 1.4 17.7-2a36.3 36.3 0 1 1-52.8-31 38.5 38.5 0 0 1 29.3-1.7ZM392 467.9a35 35 0 0 1 22.7 4.3c-3 3-5.4 6.3-5.5 10.8a14.6 14.6 0 0 0 11.8 15.5c3.4.6 6.2-.5 9.4-1.4a34.4 34.4 0 0 1-14.8 31.5 33.3 33.3 0 1 1-23.6-60.7Z" fill="#000"/><path d="M527.4 489.5c2.3-1 4.8-1.3 7 .2 3.5 2.3 3.5 7.5.8 10.5s-7.8 3.2-10.4-.1c-2.8-3.4-1.3-8.7 2.6-10.6ZM379.4 495.6c4.8-1.7 9.4 3.5 7.1 8-1.6 3.6-7 4.3-9.4 1.3-2.6-3-1.5-8 2.3-9.3ZM536.5 504.7c2.5-.8 5.3-.6 7.8.1 6.1 2.4 8 11.2 3.6 16-4 4.8-11.8 5-15.8 0-4.4-5.3-2.4-13.9 4.4-16.1ZM386.5 512.7c3.4-1 7.1-.6 9.6 2.2 3.5 3.4 3.4 9.6-.6 12.6-4 3.5-10.7 1.8-13.2-2.8-2.6-4.3-.6-10.3 4.2-12Z" fill="#fff"/>`,
	  variant22: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M550.3 424.4a65.9 65.9 0 0 1 62 30.4A64.9 64.9 0 0 1 598 540a65.4 65.4 0 1 1-47.7-115.6Z" fill="#000"/><path d="M549.2 430.3a59.7 59.7 0 1 1 15.1 118.3 59.7 59.7 0 0 1-15-118.3Z" fill="#fff"/><path d="M521.2 467.3a22.2 22.2 0 1 1 10.8 43 22.2 22.2 0 0 1-10.8-43ZM333 478.5c14.4.7 28.8 1.5 43 3.9 21.1 3.4 42.9 9 62.1 18.4 2.9 1.6 2.5 3.3 1.6 6.1-2.4 0-4.4-.2-6.7-1-11.1-3.4-22.5-5.3-34-7.2-10.4-1.4-20.6-3.2-31-3.7-11-1-21.9-.7-33-.6-2-.1-5 .6-6.6-.8-.7-2.1.8-4.7 1.3-6.8-.9-1.6-3-3.4-2.4-5.4 1-2.4 3.4-3 5.7-3Z" fill="#000"/>`,
	  variant21: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M380.2 447.2a55.2 55.2 0 0 1 61 45.5 55 55 0 1 1-61-45.5Z" fill="#000"/><path d="M378.2 453.3a49.4 49.4 0 0 1 57 58.2 49.3 49.3 0 1 1-57-58.2Z" fill="#fff"/><path d="M590 475c13-.7 27-1.4 39.8 1.4 2.2.6 3 1.3 2.3 3.7-2 1.7-6 3.3-6.8 6 0 6 9 6 9.7 10.9-.3 3-2.4 3.3-5 3.1-7.6-.6-15.3-1.2-23-1.4-16 0-32-.2-48 .9-7.6.7-15.2.6-22.8 1.2-11 1-22.1 1.3-33.1 3.3-2.7.5-5.5 1.1-8.2 1-2-1.2-3.1-5.5-.6-6.8 5.3-3 11.3-5 17.2-6.8 15-5 30.7-8.3 46.2-11.7 10.7-2.4 21.5-3.7 32.3-4.9ZM405.4 479.7a20.2 20.2 0 1 1 4.5 39.5 20.1 20.1 0 0 1-4.5-39.5Z" fill="#000"/>`,
	  variant20: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="m619.9 481.8 2.6 1.1-.5 3c-2.2 3.9-6 7-9 10.1a85.5 85.5 0 0 1-65 21.3 111.3 111.3 0 0 1-54.2-21.1c-1.4-1.1-2.9-2-2.4-4 .5-2.5 4-3.4 6-2.5 21.3 6.3 42.7 6.7 64.6 5.4 16.3-1.5 32-4.2 47.5-9.6 3.6-1.2 6.8-2.8 10.4-3.7ZM440.6 492.4c2.8 1.4 2.2 4.5 0 6.2a79.3 79.3 0 0 1-39.6 18.8c-7.8 1-15.1 2.3-23 1.1a84.8 84.8 0 0 1-39-12.5c-2.1-1.4-4.7-2.9-6.2-5-.6-2.5.7-3.9 3.2-4.2 2.7.3 5.4 1.4 8 2 7.6 2.2 15.3 3 23 3.8a169 169 0 0 0 64.2-7.5c3-.8 6.3-3 9.4-2.7Z" fill="#000"/>`,
	  variant19: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M619.4 468.6c3.8 2.6 8 5.3 11.1 8.9.3 1.6.1 3.4 0 5-1.9.7-3.3 1.1-5.3.3a142.2 142.2 0 0 0-91.4 0c-12.5 4.2-25 10.3-35.2 18.8-1.4 1-4 2.9-5.3 1.1-1.8-1.6-.7-3.5.1-5.2a80.6 80.6 0 0 1 30.7-30.4 94.1 94.1 0 0 1 95.3 1.5ZM405.5 480.4a56.6 56.6 0 0 1 31.2 18c2.8 3.8 6.5 8 5.9 13.1-1.6 0-3.3.7-4.6-.5a50.8 50.8 0 0 0-13.9-8 99.8 99.8 0 0 0-48.6-5.1 75 75 0 0 0-36 13.7c-1.9 1.2-3.1 2.8-5.6 1.8-1.2-1.9-1-4.5.3-6.2 16-21.8 45-31.8 71.3-26.8Z" fill="#000"/>`,
	  variant18: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M617.2 468.8c1.2 1.4 2.4 2.4 2.9 4.2a65.5 65.5 0 0 1-79 79.6 65.2 65.2 0 0 1-49-71.6c.6-3.4 1.8-7.2 5.7-8 8.6-1.6 17.5-1.4 26.2-2.4a999 999 0 0 1 73-2c6.8-.4 13.5.4 20.2.2Z" fill="#000"/><path d="m607 474.3 7.5.3a59 59 0 0 1-37.2 70.6 59.3 59.3 0 0 1-79-66c1.8-.7 3.7-1.3 5.7-1.4 16.9-1.4 33.8-2.4 50.8-3-.5 5.2-.2 10.4 2 15.4a26.7 26.7 0 0 0 18.7 15c4.9.9 9.9.6 14.6-1.1 8.2-2.8 14.3-10 16.4-18.3 1-3.9.7-7.6.6-11.5Z" fill="#fff"/><path d="M432 480.7c2-.3 3.8.3 5.8.7a55 55 0 1 1-106 18.6c6.5-3.3 13.1-3.8 20.4-5.5 20.5-4.2 41.1-8.1 61.8-11.3 6-1 12-2 18-2.5Z" fill="#000"/><path d="M433.7 486a54.7 54.7 0 0 1 2.6 16 49.6 49.6 0 0 1-54.3 48.9 49.7 49.7 0 0 1-44.4-47.3c14.4-3.6 29.1-6.2 43.7-9a24.7 24.7 0 0 0 10.1 16 24 24 0 0 0 30-2.3 25 25 0 0 0 7.2-21.7l5.1-.5Z" fill="#fff"/>`,
	  variant17: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M562 467.8c1.7 0 3.2.3 4.9.6-.3 2.3.3 4.3-2.6 4.8l-28.3 2c-4.3.2-8.8 1.2-13 .9-2-.8-2.7-2-2.1-4.1 1.4-1.4 3.2-1.6 5-1.7 12-.7 24-1.9 36.1-2.5ZM396.3 481.3c1.3 1.2 2.2 2 2.1 3.9-1.4 2.5-5 2-7.4 2.3-8 .2-16 1.7-24 1.7-2.8-.3-2.2-2.5-2.6-4.6 10.3-2.6 21.4-1.7 32-3.3ZM618.9 483l3.1 2.3a65.6 65.6 0 0 1-34.2 61.5 65.4 65.4 0 0 1-96-53c2.1-3.2 5.8-3 9.2-3.2l92-6.2c8.7-.2 17.2-1.6 25.9-1.3Z" fill="#000"/><path d="M616.3 488.6a59.2 59.2 0 0 1-68.3 59.6 59.7 59.7 0 0 1-35.3-18.9 57.9 57.9 0 0 1-14.8-32.5c11.2-1.2 22.4-1.7 33.6-2.6a73 73 0 0 0 5.2 25c2 4.3 5.3 10 10.2 11.1 4.8.9 8-2.5 10-6.4 4.6-9.3 4-21.5 3.2-31.6 18.7-1.2 37.5-2.6 56.2-3.7Z" fill="#fff"/><path d="M415 499.7c8.1-.7 16.1-1.4 24.3-1l2.6 2.4a55.1 55.1 0 0 1-109.6 6.8c1-.9 2.1-2.7 3.6-2.8 13-1.6 26-1.7 39.1-3 13.4-.6 26.7-1.7 40-2.4Z" fill="#000"/><path d="M436.4 504.3a49.5 49.5 0 0 1-49.4 46.9 50 50 0 0 1-48.6-40.8c11.3-1 22.7-1.7 34-2.3 0 7.2 1 14.4 4.9 20.6 1.7 2.6 4.3 5.2 7.7 5 3.5-.1 6-3.3 7.5-6.3a42 42 0 0 0 2.2-20.7c13.9-.8 27.8-2.2 41.7-2.4Z" fill="#fff"/>`,
	  variant16: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M494.8 474.6c2.5.2 5 1.4 7.4 2.2 9.3 3.7 18.8 6.1 28.5 8.4 21 5 42.8 8.8 64.3 6.9 7.4-1 14.8-2.4 22-3.9 2.6-.6 5.5.8 5.2 3.7a65.5 65.5 0 0 1-113 42 72.5 72.5 0 0 1-15.4-26.8c1.2 8 2.5 15.7 6.2 23 3 6 7.3 11 11.6 16-1.1 1.3-2.5 3.2-4.5 2-3.6-2.7-6.2-6.8-8.8-10.4-6.2-9-8.8-19.5-10-30.2-1-7.3 0-15 1.3-22.2.7-3.6 1.9-8.7 5.2-10.7ZM436.1 479.8c2.2.8 3.2 3 4.1 5 5.6 12 7.8 26.2 4.8 39.3a41.1 41.1 0 0 1-12 23c-1.6 1.6-3.5 1.5-5.6 1.4v-3.1c2.1-2.6 4.8-4.6 6.5-7.5a52.5 52.5 0 0 0 7-25.2 54.7 54.7 0 0 1-86.3 33.7c-9-6.6-16-16-19.7-26.5-.6-2-1.2-4.4-.5-6.3a9 9 0 0 1 5.6-2c8.8-.7 17.4-2.7 26.1-4.5 7.5-1.5 14.6-3.9 22-6 9.5-3.2 18.9-7.8 28-11.9 5.3-2.3 10.3-5 15.3-7.8 1.4-.7 3-1.8 4.7-1.6Z" fill="#000"/><path d="M497.9 481c5 2 9.7 3.9 14.8 5.2 13.9 3.7 28.1 7.8 42.3 9.6 2.6.4 5.2 1 7.7 1.5a23.5 23.5 0 0 0 41.1 14.5 26 26 0 0 0 6-16.4l6.5-1a59.9 59.9 0 0 1-73.5 52.8 59.7 59.7 0 0 1-45-66.1ZM433.8 486.2A49.4 49.4 0 1 1 340 517c14.8-1.8 29.7-4.5 44-8.8a24 24 0 0 0 21 18c10.1 1 20-5 23.9-14.3 3-7.1 2.3-15.8-1.9-22.3l6.8-3.4Z" fill="#fff"/>`,
	  variant15: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M506 461.1c5.5-1.1 11.7 2.5 17 4 22.1 7 45.9 9.5 69 7.7 6.2-.6 12.8-2.4 19-2 6.2.7 10.4 6.1 11 12a65.6 65.6 0 0 1-35.5 64.6 65.4 65.4 0 0 1-92.4-76.2c1.4-5.3 6.8-9 12-10ZM428.2 466.8c3.7 2.2 5.9 6.6 7.8 10.2a55.3 55.3 0 0 1-40.8 79.1 55 55 0 0 1-62.5-45c-.5-3.8-1.5-7.7.2-11.2 1.6-4.2 5.7-7.1 10.1-7.6a123.8 123.8 0 0 0 65.1-24.1 16.5 16.5 0 0 1 20.1-1.4Z" fill="#000"/><path d="M513.4 467.6c12.2 5 25.5 8 38.6 9.8 15.6 2 31.4 2.6 47 .3 3.9-.6 8.1-1.8 12-1.6 2.4.1 4.4 2.7 4.8 5a59.2 59.2 0 0 1-37 63.5 59.6 59.6 0 0 1-79.4-70.2c1.6-6.2 8-10 14-6.8ZM427.8 474.2c4.8 7 7.5 15.3 8.4 23.8a49.8 49.8 0 0 1-50.2 53.2 49.2 49.2 0 0 1-48.2-46.2c-.5-3.2 2.1-6.5 5.2-7 3.3-.6 6.7-.8 10-1.2 18.4-2.2 36.5-9.6 52.1-19.7 3.1-1.9 5.9-4.3 9-6.1 4.4-2.3 11-1.2 13.7 3.2Z" fill="#fff"/><path d="M533.5 497a22.1 22.1 0 0 1 24.1 21c.9 11-7.5 21.2-18.4 22.8-12 2.2-24-6.8-25.4-18.8-2-12.3 7.5-24 19.7-25ZM400.5 505.5c6-1.3 12.6.9 17 5a19.5 19.5 0 1 1-17-5Z" fill="#000"/>`,
	  variant14: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M559 444.5c11.4-.7 22.5 0 33.2 4.3a45.7 45.7 0 0 1 26.2 23.8c1.4 3.3 3.1 7.5 2.2 11.1-3 3.2-8.5 1-12.5 1-12.7-.6-25.5-.4-38 .6-14 1-28.5 1.7-42 5.3a188 188 0 0 0-25.2 7.4c-3.7 1.2-6.8 3-11 2.2 1.4-16.8 13-31.4 26.4-41a87.3 87.3 0 0 1 40.7-14.7Z" fill="#000"/><path d="M573 450.2a54 54 0 0 1 31.9 13c4.9 4.5 8.3 10.3 10.1 16.7-16.7-2.2-34.3-.9-51 0-7.7 1-15.4 1-23 2.3 1.2-9.2 2.2-18.4 1-27.7 10-3.6 20.3-5.5 31-4.3Z" fill="#fff"/><path d="M369.2 468.7a79.8 79.8 0 0 1 50.9 8.2c8.7 4.8 16.9 12 20.6 21.5.7 2 1.6 4.5-.7 6-2.7 0-5.4-.7-8-1.1-9.4-1.8-19.4-2.1-29-2.6-10.7-.4-21.3.5-32 .6-12.5.9-24.8 3-37 5-2.5.6-3.2-2.4-3.2-4.2.2-12.4 9.1-22.3 19.8-27.5 6-2.5 12.2-4.6 18.6-6Z" fill="#000"/><path d="M516.9 467.3c-.6 7-.6 13.5 0 20.4a278 278 0 0 0-18.1 6.1 58 58 0 0 1 18-26.5ZM374.6 473.4c9.9-.6 19.7 0 29.2 2.9a50.8 50.8 0 0 1 30.6 21.5c-20.2-3.5-40-2.6-60.3-2.4.8-7.4.6-14.7.5-22ZM350.5 480.6c-.3 5.8-.3 11.6 0 17.5-4.7.3-9.4.7-14 1.7 1.6-7 5.1-12.1 10.6-16.6l3.4-2.6Z" fill="#fff"/>`,
	  variant13: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M555 424a65.3 65.3 0 0 1 63.5 43.5c2.1 5.6 2.6 11.1 3.6 17-1.3 1.4-1.6 3.3-4 3-7-.4-14-2.1-21-2.3-8.8 0-17.4-.3-26.1 1-9.9 1.6-19.5 2.6-29.1 5.7a175 175 0 0 0-32.5 12.4c-3.3 1.7-6.5 3.8-9.9 5.3-2 .7-4.4.3-5.3-2a65.6 65.6 0 0 1 17.2-65.2 65 65 0 0 1 43.6-18.3Z" fill="#000"/><path d="M557 429.9a59.1 59.1 0 0 1 59 52.4c-14.8-2.9-30-3.8-45-2.5-6 .7-12 1.9-17.9 2.9-1-3.3-1.7-6.4-3.6-9.3a26.1 26.1 0 0 0-46.2 3.8c-3.1 7.4-2.3 15.5 1.2 22.6l-5.8 3a60 60 0 0 1 20.5-59.6 59 59 0 0 1 37.8-13.3Z" fill="#fff"/><path d="M411.4 452.6a55 55 0 0 1 29.4 61.2l-2.9 1.6c-9.8-2.8-19.7-4.7-29.9-5.5-17.9-1.1-36.1-1.7-54 0-7 .2-13.5 2-20.4 1.6-1-2.4-1.8-4.8-1.8-7.5a55 55 0 0 1 79.6-51.5Z" fill="#000"/><path d="M397.2 453.6a49.6 49.6 0 0 1 38.6 55.3 83 83 0 0 0-12.3-3c-12.4-1.9-25-2.6-37.6-2.4-.1-3.9 0-7.4-1.5-11a23.1 23.1 0 0 0-42.7-.8c-2.2 5-1.8 9.7-2 14.9-1.7-1.3-2-1.4-2-3.5a49.4 49.4 0 0 1 59.5-49.4Z" fill="#fff"/>`,
	  variant12: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M589.3 432.7a64.4 64.4 0 0 1 28.5 33.5 64.3 64.3 0 0 1 .5 45.1c-1 2.9-2.9 5.2-6.3 4.8-15-.8-30 .1-45 .5-10 1.1-20 2.2-30 3.8-10.5 1.8-20.6 4.1-31 6.1-4.3-.1-5.3-4.2-7.2-7.3A65.5 65.5 0 0 1 546 425c14.8-2.6 30.5.2 43.4 7.7Z" fill="#000"/><path d="M558 429.9a59.1 59.1 0 0 1 54.4 80.6l-3.2-.3a27 27 0 0 0 1.3-15.4 26.6 26.6 0 1 0-50 16.9 287 287 0 0 0-34 5.2c-6.7 1.2-13.4 3.2-20.1 4A59.8 59.8 0 0 1 517 445a59 59 0 0 1 41-15.1Z" fill="#fff"/><path d="M392 447a54.8 54.8 0 0 1 42.8 81.9c-1.1 1.9-2.9 4-5 4.7-3 .8-6.6-.2-9.6-.9-8.7-2-17.4-3.8-26.3-5.1-12.9-.9-26-1-39 0-4.7.4-9.7 1.4-14.5 1-2.3-1-3.7-4.2-4.6-6.4a54.9 54.9 0 0 1 56.2-75Z" fill="#000"/><path d="M401.5 454.7a49.3 49.3 0 0 1 26.7 74l-4.1-.7c4.1-4.4 7-9.8 6.8-16a22.6 22.6 0 0 0-43.7-8.8c-2.5 5.9-1.9 12 .4 18-7.6.2-15-.4-22.6.3-7.3.7-14.7 1.2-22 1.8l-1.9-3.4a49.2 49.2 0 0 1 60.4-65.2Z" fill="#fff"/>`,
	  variant11: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M556 424a65.3 65.3 0 0 1 65.5 73.8c-.4 2.7-3.2 3.6-5.5 3.8-23 1-45.4 3.7-68 6.3-13.2 1-26.2 2.8-39.2 4.6-4.6.5-8.6 1.7-13.1 0A65 65 0 0 1 556 424Z" fill="#000"/><path d="M566.2 430.5a60 60 0 0 1 50.2 60.5c-.2 1.4.1 3.5-.7 4.6-4.2.7-8.5.7-12.7 1.1-18.4 1.2-36.6 3.4-54.9 5.6a31 31 0 0 0 2.6-10.3 24.8 24.8 0 0 0-39.5-20.8 24.4 24.4 0 0 0-9.8 20.8c0 6 2.6 11.2 6.4 15.7l-7.3.8a59.2 59.2 0 0 1 65.7-78Z" fill="#fff"/><path d="M416 455a55 55 0 0 1 23.8 62c-4 1.1-7.7.7-11.8.7-25.4-.3-50.6-.3-76 1.4-5.6-.3-13 1.8-17.8-1.4a55.2 55.2 0 0 1 81.7-62.7Z" fill="#000"/><path d="M410.4 458.5c19 10.1 29.7 32.9 24.7 53.9l-5.7.1a24.4 24.4 0 0 0 2.8-15.5 22.4 22.4 0 0 0-15.4-17.7 22 22 0 0 0-28.5 20.7c-.3 4.4 1 8.2 2.8 12.1-15.4.1-30.7 1-46.1 2-1.8-.2-5.8.5-6.1-2a49 49 0 0 1 71.6-53.6Z" fill="#fff"/>`,
	  variant10: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M556 424a65.2 65.2 0 0 1 65.3 75.6c-1 7.5-4 14.2-6.8 21.2-1.4.6-2.9 1.5-4.4 1.8-2.4 0-4.8-1-7-1.6a178.7 178.7 0 0 0-49.1-7.6 96 96 0 0 0-43 9.6c-3.1 1.3-6 4-9 1.3A65 65 0 0 1 556 424Z" fill="#000"/><path d="M557 429.9a58.9 58.9 0 0 1 57.1 43.1 59.3 59.3 0 0 1-4.3 43.5c-5.3-.6-10.1-2.6-15.4-3.8-16-3.7-33-5.8-49.4-4.4a92 92 0 0 0-39.3 11.6 59.5 59.5 0 0 1 51.3-90Z" fill="#fff"/><path d="M381.3 447a55.4 55.4 0 0 1 59.8 45.6 54.9 54.9 0 0 1-101 38.2c-5-8-7.6-17.3-8.2-26.7a55 55 0 0 1 49.4-57Z" fill="#000"/><path d="M376.5 453.7a49.3 49.3 0 1 1 20.9 96.3 49.3 49.3 0 0 1-21-96.3Z" fill="#fff"/><path d="M519.4 474.8a15.9 15.9 0 1 1 7.2 30.8c-9.1 2.3-19-5-19-14.6a15.7 15.7 0 0 1 11.8-16.2ZM403.4 485.6A16 16 0 1 1 399 514a15.9 15.9 0 0 1 4.4-28.4Z" fill="#000"/>`,
	  variant09: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M555 424a65.3 65.3 0 0 1 66.3 75.5c-1 7.6-4 14.4-6.8 21.4-1.5.6-3 1.2-4.4 1.6-3.2 0-6.4-1.4-9.4-2.2a176.2 176.2 0 0 0-47.7-7 97.3 97.3 0 0 0-39.3 8.4c-2.9 1.3-5.7 3-8.6 3.9-3.6-.3-4.4-3.2-6-5.8A65.9 65.9 0 0 1 512 442c11.6-11 27-17.5 43-18Z" fill="#000"/><path d="M557 429.9a58.8 58.8 0 0 1 57.1 43.1 59.9 59.9 0 0 1-4.2 43.5c-6.2-.9-11.9-3-18-4.3a156.5 156.5 0 0 0-51.4-3.5 91.3 91.3 0 0 0-34.8 11.2 59.9 59.9 0 0 1 9.8-73.4 59.1 59.1 0 0 1 41.5-16.6Z" fill="#fff"/><path d="M381.2 447a55.4 55.4 0 0 1 60 45.4 55 55 0 1 1-59.9-45.4Z" fill="#000"/><path d="M376.5 453.7A49.6 49.6 0 0 1 436 506a49.9 49.9 0 0 1-45.1 45 49.3 49.3 0 0 1-14.5-97.3Z" fill="#fff"/><path d="M519.4 474.7a15.9 15.9 0 1 1 7.1 30.9c-9.2 2.2-18.8-5-19-14.6a15.7 15.7 0 0 1 12-16.3ZM403.4 485.6c9.6-3.2 20 4.4 20.4 14.3.8 8.9-6.9 17.1-15.8 16.8-8.6.4-16-7.1-16-15.7-.2-7 4.8-13.5 11.4-15.4ZM598.8 532.7l3.2 1c-.5 1.7-.3 3.3-1.7 4.5A39.8 39.8 0 0 1 575 548c-3.8-.1-8.6-1-11.5-3.8l-.4-3.6 2.8-1c4.5 2.2 9 3.5 14.1 2.3 7.5-1.3 12.6-5.5 18.8-9.3ZM347 547.8c2.3-.5 4 1.4 5.6 2.6a52.7 52.7 0 0 0 33.4 11.4c5.8.1 10.9-2.2 16.7-1.3-.5 2.4 0 4.4-3 5a58 58 0 0 1-52.8-12.4c-1.8-1.4-2.2-4.4.2-5.3Z" fill="#000"/>`,
	  variant08: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M558.2 453.2c11.5-1.6 23.7.2 34 5.5 7.6 4 14.3 10.3 18.1 18a32.5 32.5 0 0 1 2.1 21.8c-2 8-7.2 15.2-13.7 20.2a57.4 57.4 0 0 1-54.2 7.8 43.6 43.6 0 0 1-21.4-16.6 34.2 34.2 0 0 1-5.4-15.9 34.5 34.5 0 0 1 10.3-26c8-8.4 18.9-13 30.2-14.8Z" fill="#000"/><path d="M559.2 459.1c14-2 29.7 1.6 39.8 11.9 6.6 6.5 10.4 17 7.7 26-2 8.2-7.7 14.5-14.6 19.2a52 52 0 0 1-43 5.6c-8.7-2.7-17.1-8.2-21.8-16.1-3-5-4.1-11-3.5-16.7.7-6.8 4.5-13.1 9.3-17.9 7-6.7 16.5-10.7 26-12Z" fill="#fff"/><path d="M369.5 468.7c17.6-2.7 37.9 3.4 47.7 19.1 5.5 8.6 6.3 20 2 29.2-3 6.3-8 11.6-13.8 15.4a52 52 0 0 1-24.4 7.8 48.4 48.4 0 0 1-39.4-15.8 31.3 31.3 0 0 1-7.5-22.4c.5-8.3 4.6-15.7 10.5-21.4 6.9-6.5 15.6-10.3 24.9-11.9Z" fill="#000"/><path d="M376.6 474.1c9.6-.3 19.5 2.3 27.3 8 5.2 3.8 9.5 9.2 11.2 15.4a25 25 0 0 1-2.1 18.6 36.6 36.6 0 0 1-23 16.7 44.9 44.9 0 0 1-40.8-9 26.8 26.8 0 0 1-9.2-22.3c.7-5.4 3.1-10.6 6.8-14.7a41 41 0 0 1 29.8-12.7Z" fill="#fff"/><path d="M551.5 477.6a16 16 0 0 1 19.9 18.4A15.8 15.8 0 0 1 556 509a15.9 15.9 0 0 1-4.5-31.3Z" fill="#000"/><path d="M553.6 483.2c4-.7 7.8.6 10.2 4 3 4 2.3 9.8-1.4 13.2-4.4 4-11.8 3.4-15.1-1.7a10 10 0 0 1 6.3-15.5Z" fill="#fff"/><path d="M618.7 484.2c1.7.3 3.6-.2 4.6 1.4 1.6 2.5 2.4 5.6 2.9 8.5a35 35 0 0 1-9.8 29.2c-3.3 3-7.9 6-12.4 6.2-2.8 0-4.3-2.7-2.4-4.8 3.3-1.7 6.6-2.2 9.5-4.6 6.3-5.3 9.6-14 9.6-22.1 0-4-1.6-7.2-2.7-11l.7-2.8ZM380.4 488.5c4.5-.9 9.2.5 12.7 3.3a17 17 0 0 1 4.7 19.8c-2.6 5.9-8.2 10.2-14.8 10.2-8.5.6-16-6.4-16.4-14.8-1-8.7 5.2-17 13.8-18.5Z" fill="#000"/><path d="M379.5 494.8c5.1-2 11 .6 13 5.7 2.8 6.4-1.6 14.7-8.7 15.4a9.9 9.9 0 0 1-10-4.8 11.4 11.4 0 0 1 5.7-16.3Z" fill="#fff"/><path d="M330.4 503.6c.5 4-1.4 7.4-1.6 11.4-.3 6 2.4 12.1 7.3 15.9 2.4 1.9 5 2.8 7.7 4.3 2 .8 1.9 2 1.6 3.9-1.5 1.8-3.3 1.4-5.3.8a26.3 26.3 0 0 1-16-16 25 25 0 0 1 1.4-19.4c1.3-1.9 3-.9 5-.9Z" fill="#000"/>`,
	  variant07: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M540.5 447.7a103 103 0 0 1 57 7.8 46 46 0 0 1 21.2 19c3.9 7.3 3.9 16.7-.2 24-4.2 8-12 14-20 18.2a95.3 95.3 0 0 1-44.5 9.6c-12 0-24-1.8-35.2-6a56 56 0 0 1-23.7-16.3 26.6 26.6 0 0 1-6-22 35.2 35.2 0 0 1 14.5-20.4 82 82 0 0 1 36.9-13.9Z" fill="#000"/><path d="M547 452.7c8.4-.3 17.2-.6 25.5 1a74 74 0 0 1 30.3 11.5c5.5 4 10.4 9.1 12.3 15.8 2 6.8-.2 14.1-4.7 19.4a54.2 54.2 0 0 1-24.6 15.5c-9.9 3.2-20.4 5-30.8 4.8a92.9 92.9 0 0 1-30.2-4.5A54 54 0 0 1 500 501c-4.3-5-7-12.4-4.9-19 1.5-6.5 6.7-12 12-16 11.4-8.2 26-12 39.9-13.3Z" fill="#fff"/><path d="M373.5 460.8c16.3-2.3 34.2-1 49 6.6 7.8 4 15.5 10.4 18 19 2.4 7.2-.1 14.8-4.6 20.5a50.5 50.5 0 0 1-24.6 15.4 89.7 89.7 0 0 1-45.3 1.8c-10-2.3-20-6.5-27.2-14-4.7-4.7-8-11.2-7.4-18 .6-7.3 5-13.7 10.5-18.2a65 65 0 0 1 31.6-13.1Z" fill="#000"/><path d="M371.5 467c15.6-3 33-1.9 47.4 5 6.4 3 13.5 8.2 15.8 15.2 2 5.6.3 11.7-3.3 16.2a43.5 43.5 0 0 1-18.6 12.4c-12.4 4.4-26 5.9-39 3.9-9.3-1.3-19-4.3-26.7-9.8-5.2-4-9.6-9-10-15.9-.1-6.8 4.2-12.5 9.4-16.6a60.4 60.4 0 0 1 25-10.5Z" fill="#fff"/><path d="M592.2 469.2c2.1-1.6 4.7-.3 6 1.7 2.4 4 2.4 9.6 2.8 14.1.2 4.4.5 9.6-1.2 13.8-2 4-7.5 1.3-8.8-1.9a50.3 50.3 0 0 1-1.6-20.3c.4-2.4.6-6 2.8-7.4ZM416.9 476c2.1.6 2.8 3.8 3.3 5.7.8 5 1.3 10.2 1 15.3-.3 2.6-.7 5.7-3 7.2-2.2 1.3-4.4 0-5.4-2-2.1-3.8-2.2-9-2.3-13.2 0-4.4-.1-8.7 2.2-12.6 1.4-.3 2.7-1 4.2-.3Z" fill="#000"/>`,
	  variant06: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M561.9 423.3c1.8.4 1.9 1.9 2 3.5 0 6.7-1 13.4-.8 20.1 8.3.6 16 2 24 4.5 3.2-7.1 6-14.4 8.8-21.6 1-1.8 1.5-4.1 4-3.8 2.4.3 2.6 3 1.8 4.8l-9 22.6a69.9 69.9 0 0 1 18.1 10.8c5-4.6 9.7-9.4 14.7-13.8 1.6-1.6 3.3-1 5.3-1.1-.2 2 .3 3.6-1.4 5.1-4.7 4.8-9.7 9.3-14.6 13.9a30 30 0 0 1 6.7 16.7c.7 9.9-4.8 18.2-12 24.4a78.6 78.6 0 0 1-40.5 16.1c-16.6 1.9-33.8.9-49.5-5A56.4 56.4 0 0 1 495 504c-5-6.4-7.8-14.7-5.7-22.8 2.4-9.9 9.9-17.3 18.3-22.4 14.8-9 32.4-12.1 49.5-12.1.2-6.6.5-13.2 1.1-19.7 0-2 1.2-4.3 3.6-3.7ZM372 441.4c2-.2 2.6 2.2 3.1 3.6 1.2 5 1.3 10.2 2.2 15.3a99 99 0 0 1 25.7.7c10.9 2 22 6 30.1 13.9 5 4.6 8.5 11.2 8.3 18.1a27 27 0 0 1-10 18.5 65 65 0 0 1-33 13.7 84 84 0 0 1-47.3-6.3c-8.5-4.1-17-11.2-19.2-20.8-1.3-5.2 0-10 2-14.8-3.9-3.5-7.7-7-11.5-10.7-.8-1-2.4-2.2-2-3.6 0-2.6 3.5-3 5-1.4 4 3.5 7.7 7.4 11.7 10.9 3.4-3.6 7-6.6 11.1-9.2l-8.2-18.4c-1.1-2.2-.9-4.4-.7-6.8 1.2.2 2.6.3 3.8.8 1.2 1.2 1.8 3 2.6 4.5 2.5 5.7 5.1 11.4 7.5 17.2 6-2.6 12-4.3 18.3-5.6-.4-5.4-1.7-10.6-2-16 0-1.6.4-4.1 2.5-3.6Z" fill="#000"/><path d="M539.5 453.7a103 103 0 0 1 44.2 2.6c9.5 3 19.2 7.5 26 15 4.3 5 7 11.1 6 17.7-1.1 7.2-5.8 13-11.4 17.3a73.5 73.5 0 0 1-31.1 12.8 101.6 101.6 0 0 1-47.7-2.6c-9.4-3-19-7.8-25.5-15.5-4.3-5-6.9-12.4-4.9-19 1.6-6.6 6.7-12 12-16a76 76 0 0 1 32.4-12.3ZM371.5 467c15.6-3 33-1.8 47.4 5 6.4 3 13.4 8.2 15.8 15.1 2 5.7.3 11.8-3.3 16.3a43.5 43.5 0 0 1-18.6 12.3 80.5 80.5 0 0 1-39.8 3.8c-9-1.3-18.4-4.3-26-9.6-5.1-4-9.5-9-9.8-15.9-.2-6.6 3.9-12 8.7-16.1a59.4 59.4 0 0 1 25.6-11Z" fill="#fff"/><path d="M592.2 469.2c2.2-1.6 4.7-.3 6 1.7 1.8 3 2.1 6.6 2.5 10.1.4 5.2.8 10.7-.3 15.9-.3 1.3-1 2.6-2 3.5-3 1.4-6.9-1.3-7.6-4.2-2-6.2-2-13.2-1.4-19.7.4-2.3.6-5.9 2.8-7.3ZM413.3 476.3a4 4 0 0 1 6 2.4c1.8 5.1 1.9 11 2 16.3-.1 3.1-.4 8-3.8 9.5-2.6 1-4.6-1.4-5.4-3.6a45.1 45.1 0 0 1-1.5-17c.2-2.3.4-6.2 2.7-7.6Z" fill="#000"/>`,
	  variant05: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M574.5 426.5a66.4 66.4 0 0 1 34 22.7c7.5-5.1 14.7-10.7 22.4-15.7l3 1.3c-.3 2.1-.2 3.6-2.2 4.9l-20 14.2a64.5 64.5 0 0 1 9.8 44c-.5 2.7-3 3.4-5.5 3.6-19.7 1-39.4 3-59 5.4-11 1.5-22.2 2-33.2 3.6l-13.6 1.8c-5 .7-9.5 1.7-14.5.3a65.2 65.2 0 0 1 78.8-86.1Z" fill="#000"/><path d="M565.5 430.4a59.8 59.8 0 0 1 50.7 65.2c-4.7.4-9.5 1-14.2 1.2-18 1.2-36 3.3-53.8 5.4 1-3 2.2-6 2.5-9.2.8-9.3-4.1-18.8-12.3-23.4a25 25 0 0 0-17.5-2.7 24.5 24.5 0 0 0-19.5 25.1 25 25 0 0 0 6.3 15.8l-7.3.7a59.3 59.3 0 0 1 35.4-74.9 60.5 60.5 0 0 1 29.7-3.2Z" fill="#fff"/><path d="M416.5 455.4a55 55 0 0 1 23.3 61.7c-5.4 1-10.4.5-15.8.5-24-.2-48-.1-72 1.5-5.9-.1-12.6 1.6-17.8-1.2-1-4.6-2.1-9.2-2.3-13.9-.3-10 2.2-20 6.8-29-6-3.9-12.3-7.5-18.2-11.6-1.9-1.4-1.7-2.7-.8-4.7 2.7-1 4.5.5 6.8 1.8l15.2 9.8a55.3 55.3 0 0 1 74.8-14.9Z" fill="#000"/><path d="M400.8 454.5a49.4 49.4 0 0 1 34.3 57.9l-5.6.1a26 26 0 0 0 2.9-14.5c-1-8.6-7.3-16.1-15.6-18.6a22 22 0 0 0-28.5 19.6c-.4 4.7 1 9 2.8 13.2-13.4 0-26.8.6-40 1.6-3.8.2-8 .7-11.6-.3-1.6-3-1.6-7.1-1.8-10.5a49.1 49.1 0 0 1 63.1-48.5Z" fill="#fff"/>`,
	  variant04: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path fill-rule="evenodd" clip-rule="evenodd" d="M613 456a65 65 0 0 0-114.3 3.7c-3.3 6.3-5.2 13-6.5 20-4.4.4-8.8.9-13 2l.3 1.5c.3 1.4.6 2.6 2.3 3 2.3.2 4.8 0 7.1-.3l2.8-.2A65.1 65.1 0 0 0 612 524c6.5-10.2 9.8-22 10-34 .1-3.9-.3-7.5-.8-11.2l-.4-3 3-.2c2.2-.2 4.5-.4 6.8-1 1.1-.5 1.4-1.6 1.6-2.8l.4-1.4c-4.4-1.1-8.7-.8-13.2-.3l-1.4-3.5c-1.5-3.6-3-7.2-5.1-10.7Zm.6 14.7a59.9 59.9 0 0 0-106.7-13.8 58.4 58.4 0 0 0-8.8 22.5c6-.7 11.9-1 17.9-1.5l14.5-1.1 11-.7c4.8-.3 9.6-.5 14.4-1.1 16.4-1.1 32.8-2.4 49.2-3.7l8.5-.6Zm-200.2-17.1c12 6.5 21 17.4 25.6 30.1 2.6.2 5.3.4 8 .8l-.1.7-.6 3c-1 .8-2.5 1-3.9 1.3l-1.6.4a55 55 0 1 1-109 9l-7.2-.3.1-1.3c.1-1.2.2-2.7 1.2-3.2 1.5-.5 3.2-.7 4.8-1 .6 0 1.2 0 1.8-.2a55 55 0 0 1 80.9-39.4Zm19.7 30.8a49.3 49.3 0 0 0-94.7 8c7-.4 14-1 21-1.6a1133.2 1133.2 0 0 1 29.9-2.4 1075.2 1075.2 0 0 1 18-1.3c8.6-.6 17.3-1.2 25.8-2.7Z" fill="#000"/><path d="M615.1 476.4a59.8 59.8 0 0 1-67.2 71.8 59.7 59.7 0 0 1-50.7-62.9l8.4-.8c.5 6.9 2.8 13.1 8 17.8a24.6 24.6 0 0 0 41.2-21.1c4.5-.5 9-1.1 13.4-1.4 15.7-1 31.3-2.6 47-3.4ZM431 490.8l3.7-1a49.5 49.5 0 0 1-85.8 43.2 49.9 49.9 0 0 1-11.2-34.6c16.4-1.6 33-2.6 49.4-4.4.1 5.6 1.1 10.8 4.7 15.2a22.3 22.3 0 0 0 23.4 8c7-2.3 13-8 15-15.2 1.2-3.8.6-7.3.7-11.2Z" fill="#fff"/>`,
	  variant03: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M587.4 431.6a65 65 0 0 1 28 28.7c5.5-3.4 11.2-6.7 16.7-10.2 1.6-.9 3.2-2 5-2.4 1.9.5 2.7 1.3 2.6 3.4-.4 1.3-1.7 2-2.8 2.8-6.4 4-13 7.6-19.4 11.8 6 14.1 6 31.2.8 45.6a65.5 65.5 0 0 1-73.5 42.2 65.2 65.2 0 1 1 42.6-121.9Z" fill="#000"/><path d="M549.2 430.3a59.6 59.6 0 1 1 15.3 118.2 59.6 59.6 0 0 1-15.3-118.2Z" fill="#fff"/><path d="M414.7 454.3a55 55 0 1 1-82.8 49.7 68 68 0 0 1 3-20.4c-4.4-2.7-8.7-5.6-13-8.6-1.6-1.2-1.7-2.1-1.4-4.1 1.3-1.3 2.7-1.6 4.3-.7 4.2 2.6 8.2 5.5 12.3 8.2a55.4 55.4 0 0 1 77.6-24Z" fill="#000"/><path d="M378.2 453.3a49.4 49.4 0 1 1 12.8 97.6 49.3 49.3 0 0 1-12.8-97.6Z" fill="#fff"/><path d="M526.5 467.5c12-2.9 24.8 4.2 29.3 15.6a25.6 25.6 0 1 1-29.4-15.6ZM398.2 478.4c9.5-2 19.6 2.6 24.5 11a24.5 24.5 0 0 1 2.2 18.5 23.8 23.8 0 0 1-15.9 15.3 23 23 0 1 1-10.8-44.8Z" fill="#000"/>`,
	  variant02: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M559 424.1a65.3 65.3 0 0 1 57.5 38.4l23.8-15c1.3 1 2.4 2.2 3.6 3.4-3.2 3.6-7.1 5.4-11 8l-14.3 9a65.8 65.8 0 0 1-18 69.8 64.6 64.6 0 0 1-42.6 16.8 65.7 65.7 0 0 1-61.5-90 65.1 65.1 0 0 1 62.5-40.4Z" fill="#000"/><path d="M549.3 430.3a59.6 59.6 0 1 1 15.1 118.2 59.6 59.6 0 0 1-15.1-118.2Z" fill="#fff"/><path d="M414 454a55 55 0 1 1-79.4 30.7c-5.8-3.6-12.1-6.6-17.7-10.5-2-1.1-1.5-4.2.7-4.7 1.6-.5 3.1.6 4.6 1.3l14.4 8.5A55.2 55.2 0 0 1 414 454Z" fill="#000"/><path d="M378.3 453.3a49.3 49.3 0 1 1 17.2 97.1 49.3 49.3 0 0 1-17.2-97.1Z" fill="#fff"/><path d="M527.3 466.2a24 24 0 0 1 20.2 7.3 23.9 23.9 0 0 1-2.3 34.7 23.9 23.9 0 0 1-38.7-20.2 23.8 23.8 0 0 1 20.8-21.8ZM358.5 480.8a21.8 21.8 0 1 1 11.6 42 21.9 21.9 0 0 1-25.7-14 22.3 22.3 0 0 1 14.1-28Z" fill="#000"/>`,
	  variant01: (
	    components: ComponentPickCollection,
	    colors: ColorPickCollection
	  ) =>
	    `<path d="M590 433c11.8 7 21 17.6 26.7 30 5.9-3.1 11.6-6.7 17.6-9.6 1.8-1 4.4.5 4 2.6.2 1.5-2 2.5-3 3.2l-16.4 9a65.7 65.7 0 0 1-39.4 82.3A65.9 65.9 0 0 1 501 523c-6-9.9-9.3-21.4-9.3-33a64.8 64.8 0 0 1 53.3-64.8c15.2-3 31.6 0 45 7.9Z" fill="#000"/><path d="M549.2 430.3a59.7 59.7 0 0 1 67.2 59.7 59.5 59.5 0 1 1-67.2-59.7Z" fill="#fff"/><path d="M390 447a55 55 0 1 1-55.7 38.6l-11.3-4.5c-2-.8-4-1.4-5.4-3-.4-2.5.8-4 3.2-3.7 5.2 1.3 10 4.2 15.2 5.6 1.4-1.7 2.2-3.8 3.3-5.7A55 55 0 0 1 390 447Z" fill="#000"/><path d="M376.5 453.7a49.3 49.3 0 1 1 20.8 96.4 49.3 49.3 0 0 1-20.8-96.4Z" fill="#fff"/><path d="M578.3 465.4a24.9 24.9 0 0 1 27.9 24.6c-.4 4.8-1.8 9.7-4.6 13.6a24.6 24.6 0 0 1-18.6 10.6c-8.2.5-16.4-3.3-21.2-10-6-8-6.3-19.8-.6-28a24.7 24.7 0 0 1 17-10.8ZM408.4 478.5a23 23 0 0 1 19.7 7.5c4 4.4 6 10 5.7 16 0 12-10.7 22.8-22.8 22.3a23 23 0 0 1-22.9-22.3 22.8 22.8 0 0 1 20.3-23.5Z" fill="#000"/>`,
	};
