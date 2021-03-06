import { EditorColors } from '../../types/colors-types';
import { background_700, background_800 } from '../palette/background.colors';
import { gray_100 } from '../palette/gray.colors';
import { purple_100, purple_600, purple_700 } from '../palette/purple.colors';
import { highlightOpacity } from './editor.colors';

const terminalColors: EditorColors = {
  terminal: {
    ansiBlack: '#263238',
    ansiBlue: '#82AAFF',
    ansiBrightBlack: '#546E7A',
    ansiBrightBlue: '#82AAFF',
    ansiBrightCyan: '#89DDFF',
    ansiBrightGreen: '#C3E88D',
    ansiBrightMagenta: '#C792EA',
    ansiBrightRed: '#F07178',
    ansiBrightWhite: '#FFFFFF',
    ansiBrightYellow: '#FFCB6B',
    ansiCyan: '#89DDFF',
    ansiGreen: '#C3E88D',
    ansiMagenta: '#C792EA',
    ansiRed: '#F07178',
    ansiWhite: '#EEFFFF',
    ansiYellow: '#FFCB6B',
    background: background_700,
    border: background_800,
    foreground: gray_100,
    selectionBackground: `${purple_600}${highlightOpacity}`
  },
  terminalCursor: {
    background: purple_700,
    foreground: purple_100
  }
};

export default terminalColors;
