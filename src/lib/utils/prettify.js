// eslint-disable-next-line import/no-unresolved
import PrettierConfig from 'eslint-config-acme/prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';

/**
 * Formats code using Prettier
 * @param {string} code - Code to be formatted
 * @param {Object} config - Optional Prettier config
 * @return {string}
 */
export default async function prettify(code, config = {}) {
  try {
    return await prettier.format(code, {
      ...PrettierConfig,
      parser: 'babel',
      plugins: [babelPlugin, estreePlugin],
      printWidth: 80,
      ...config,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return code;
  }
}
