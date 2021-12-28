import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  title: 'Options',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    backgroundColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: ['yellow', 'purple', 'brown', 'cream', 'blue', 'green'],
      examples: [
        ['yellow'],
        ['purple'],
        ['brown'],
        ['cream'],
        ['blue'],
        ['green'],
      ],
    },
    eyes: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'sad',
          'tearDrop',
          'pissed',
          'cute',
          'wink',
          'wink2',
          'plain',
          'glasses',
          'closed',
          'love',
          'stars',
          'shades',
          'closed2',
          'crying',
          'sleepClose',
        ],
      },
      default: [
        'sad',
        'tearDrop',
        'pissed',
        'cute',
        'wink',
        'wink2',
        'plain',
        'glasses',
        'closed',
        'love',
        'stars',
        'shades',
        'closed2',
        'crying',
        'sleepClose',
      ],
      examples: [
        ['sad'],
        ['tearDrop'],
        ['pissed'],
        ['cute'],
        ['wink'],
        ['wink2'],
        ['plain'],
        ['glasses'],
        ['closed'],
        ['love'],
        ['stars'],
        ['shades'],
        ['closed2'],
        ['crying'],
        ['sleepClose'],
      ],
    },
    mouth: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'plain',
          'lilSmile',
          'sad',
          'shy',
          'cute',
          'wideSmile',
          'shout',
          'smileTeeth',
          'smileLol',
          'pissed',
          'drip',
          'tongueOut',
          'kissHeart',
          'sick',
          'faceMask',
        ],
      },
      default: [
        'plain',
        'lilSmile',
        'sad',
        'shy',
        'cute',
        'wideSmile',
        'shout',
        'smileTeeth',
        'smileLol',
        'pissed',
        'drip',
        'tongueOut',
        'kissHeart',
        'sick',
        'faceMask',
      ],
      examples: [
        ['plain'],
        ['lilSmile'],
        ['sad'],
        ['shy'],
        ['cute'],
        ['wideSmile'],
        ['shout'],
        ['smileTeeth'],
        ['smileLol'],
        ['pissed'],
        ['drip'],
        ['tongueOut'],
        ['kissHeart'],
        ['sick'],
        ['faceMask'],
      ],
    },
  },
  additionalProperties: false,
};