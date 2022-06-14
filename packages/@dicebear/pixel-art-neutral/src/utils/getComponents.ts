import type { Prng } from '@dicebear/core';
	import type { Options, ComponentPickCollection } from '../types.js';
	import { pickComponent } from './pickComponent.js';
	type Props = { prng: Prng; options: Options };
	export function getComponents({
	  prng,
	  options,
	}: Props): ComponentPickCollection {
	  const eyesComponent = pickComponent({
	    prng,
	    group: 'eyes',
	    values: options.eyes,
	  });
	  const glassesComponent = pickComponent({
	    prng,
	    group: 'glasses',
	    values: options.glasses,
	  });
	  const mouthComponent = pickComponent({
	    prng,
	    group: 'mouth',
	    values: options.mouth,
	  });
	  return {
	    eyes: eyesComponent,
	    glasses: prng.bool(options.glassesProbability)
	      ? glassesComponent
	      : undefined,
	    mouth: mouthComponent,
	  };
	}
