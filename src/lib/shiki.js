/* eslint-disable import/no-unresolved */
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { getHighlighter } from 'shiki/bundle/web';

const highlighter = getHighlighter({
  langs: [
    'html',
    'css',
    'js',
    'jsx',
    'json',
    'markdown',
    'shellscript',
    'typescript',
    'yaml',
  ],
  themes: ['synthwave-84'],
});

export const codeToHtml = async (code, { lang }) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'synthwave-84',
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });
