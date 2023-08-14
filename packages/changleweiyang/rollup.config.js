/**
 * @type {import('rollup').RollupOptions}
 */

import { babel } from '@rollup/plugin-babel'

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs']
const rollupOptions = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/clwy-bundle.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/clwy-bundle.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        extensions,
        babelHelpers: 'inline',
      }),
    ],
  },
]

export default rollupOptions
