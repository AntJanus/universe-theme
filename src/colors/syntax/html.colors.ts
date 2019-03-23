import { TokenColors } from '../../types/colors-types';
import { orange_1 } from '../palette/orange.colors';
import { pink_1 } from '../palette/pink.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';
import { yellow_1 } from '../palette/yellow.colors';

export const tagColor: string = violet_2;
export const componentColor: string = orange_1;
export const textColor: string = slate_0;
export const directiveColor: string = yellow_1;

const htmlColors: TokenColors = [
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Tag angle brackets',
    scope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Attribute',
    scope: ['meta.tag', 'meta.tag.inline.any'],
    settings: {
      foreground: pink_1
    }
  },
  {
    name: 'Text',
    scope: 'text.html.derivative',
    settings: {
      foreground: textColor
    }
  },
  {
    name: 'Special character',
    scope: 'constant.character.entity',
    settings: {
      foreground: pink_1
    }
  },

  /**
   * Components
   */
  {
    name: 'Component tag',
    scope: 'entity.name.tag.other',
    settings: {
      foreground: componentColor
    }
  },
  {
    name: 'Component directives',
    scope: [
      'punctuation.definition.generic.begin.html',
      'punctuation.definition.generic.end.html',
      'meta.attribute.unrecognized'
    ],
    settings: {
      foreground: directiveColor
    }
  }
];

export default htmlColors;