import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const face: ComponentGroup = {
  'variant08': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M186.418 102.234c2.238 0 8.261 2.671 6.343 13.766-.842 4.87-1.878 5.906-3.668 9.233-1.514 2.813-2.735 4.84-5.48 3.522M70.397 103.803c-3.813 0-8.954 3.22-6.948 13.797 2.154 11.351 5.56 14.377 7.83 13.699"/><path d="M82.16 74.404C74.975 84.818 70.366 93.918 72.66 131c3.213 51.899 21.394 74.456 32.204 85.161 13.18 13.049 39.297 18.138 55.713 0 17.334-19.153 19.857-41.718 22.084-79.161 1.478-24.861 9.352-52.816-5.5-67"/></g><g transform="translate(117 131)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(63 147)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(100 194)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(0 -34)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(72 160)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(72 89)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant07': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M81.26 95c-17 17-15 61 11 96.5 15.013 20.5 42.215 25.128 66.724 6.5 34.478-26.205 30.499-83 17.999-106"/><path d="M186.367 121.414c3.607-1.866 10.718.813 10.718 8.667 0 7.853-1.131 10.781-3.727 14.242-1.917 2.556-5.524 3.128-7.86 2.714M69.655 121.881c-7.607-2.389-12.19 4.071-10.183 14.649 2.153 11.351 10.183 11.316 12.493 10.81"/></g><g transform="translate(112 123)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(60 128)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(95 180)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-1 -13)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(67 152)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(71 102)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant06': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M174.753 105c11.376 21.844 19.288 64.991 13.488 72.291C174.969 194 108.979 199 85.851 184.156c-15.452-9.917-16.433-61.162-8.216-74.892M183.014 121.686c2.899-1.035 8.509-3.798 9.812 1.811 1.303 5.609 1.283 9.099 0 14.907-.699 3.164-2.337 4.11-4.304 4.11"/><path d="M72.163 124.338c-7.606-2.389-12.086 1.888-9.36 11.337 2.583 8.95 7.051 10.834 9.36 10.328"/></g><g transform="translate(112 122)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(63 112)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(98 168)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-3 -1)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(68 149)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(71 103)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant05': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M79.071 93.7c-6.098 10.055-22.299 57.65-15.55 86.368 8.092 34.429 54.531 44.899 102.099 19.71C214.342 173.979 182.205 95.542 175.28 88"/><path d="M184.31 105.447c2.588-1.153 7.412-1.298 9.256 1.909 1.844 3.207 2.71 9.385 1.427 15.193-.717 3.246-2.955 4.228-4.922 4.228M72.476 107.787c-5.846-3.492-11.406-.213-12.403 12.257-.627 7.84 2.922 11.331 5.416 10.975"/></g><g transform="translate(116 120)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(57 132)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(86 184)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-2 -17)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(71 151)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(71 89)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant04': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M78.904 87.314c-10.418 19.382-10.78 77.782-3.213 98.999 11.51 32.276 56.411 43.348 93.316 23.288 33.33-18.117 18.061-104.955 6.13-127.601"/><path d="M182.901 100.238c2.589-1.154 6.883-1.752 8.728 1.455 1.844 3.208 2.054 8.382.528 14.71-.941 3.902-3.738 4.766-5.705 4.766M72.656 103.001c-5.88-2.578-10.794 2.577-9.425 13.692.962 7.806 3.407 9.64 5.901 9.284"/></g><g transform="translate(115 126)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(61 138)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(98 188)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-2 -23)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(71 156)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(70 84)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant03': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M182.838 98.138c2.311-.365 4.88-.368 6.725 2.839 1.844 3.208.141 11.054-2.296 15.117-2.066 3.442-4.171 4.187-5.369 4.418M73.939 98.658c-4.24-1.94-11.052 1.233-8.305 14.599 1.078 5.246 4.587 8.399 7.08 8.042"/><path d="M80.916 79.414c-14.601 29.019-5.999 82.679 10.64 114.264 16.64 31.585 32.458 36.809 40.48 35.692 18.473-2.572 37.818-36.215 46.272-92.269 5.666-37.57 5.584-54.17-1.216-64.101"/></g><g transform="translate(117 128)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(62 148)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(97 191)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(0 -31)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(70 157)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(72 80)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant02': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M185.481 108.647c2.238 0 8.973.752 7.055 11.846-.842 4.87-1.647 7.526-3.436 10.852-1.514 2.814-3.679 5.141-6.424 3.823M71.268 111.843c-3.813 0-9.878 5.308-7.871 15.885 2.153 11.351 6.483 12.29 8.752 11.611"/><path d="M80.55 94.976c-4.13 4.898-5.759 4.898-9.738 25.698-3.978 20.8 38.72 91.332 57.17 91.332 13.976 0 24.173-12.417 33.845-28.537 6.692-11.154 26.003-61.27 23.368-73.272-2.634-12-3.541-16.567-8.927-20.197"/></g><g transform="translate(116 119)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(60 131)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(97 178)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-1 -14)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(72 148)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(72 92)">${components.eyes?.value(components, colors) ?? ''}</g>`,
  'variant01': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M78.652 114.924c-6.088 8.802-10.764 34.418-.56 51 11.585 22.533 35.353 28.955 59.629 26.679 24.276-2.276 41.56-22.215 45.705-38.052 4.145-15.838 0-35.343-8.382-45.551"/><path d="M181.22 118.377c2.589-1.154 5.557-1.698 7.401 1.509 1.845 3.207 3.179 7.326 1.653 13.653-.941 3.903-3.279 4.815-5.246 4.815M72.996 124.629c-4.24-1.941-9.13 2.25-7.761 13.366.961 7.806 3.973 9.554 6.467 9.198"/></g><g transform="translate(113 126)">${components.nose?.value(components, colors) ?? ''}</g><g transform="translate(62 112)">${components.beard?.value(components, colors) ?? ''}</g><g transform="translate(98 169)">${components.mouth?.value(components, colors) ?? ''}</g><g transform="translate(-2 4)">${components.top?.value(components, colors) ?? ''}</g><g transform="translate(69 153)">${components.mustache?.value(components, colors) ?? ''}</g><g transform="translate(72 106)">${components.eyes?.value(components, colors) ?? ''}</g>`,
}