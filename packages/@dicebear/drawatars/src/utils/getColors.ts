import type { Prng } from '@dicebear/core';
import type { Options, ColorPickCollection } from '../types.js';
import { pickColor } from './pickColor.js';

type Props = {
  prng: Prng;
  options: Options;
};

export function getColors({ prng, options }: Props): ColorPickCollection {
  return {
    hair: pickColor({
      prng,
      group: 'hair',
      values: options.hairColor,
    }),
    skin: pickColor({
      prng,
      group: 'skin',
      values: options.skinColor,
    }),
  };
}
