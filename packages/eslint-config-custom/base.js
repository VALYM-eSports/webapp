// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
	files: ['**/*.{ts,tsx}'],
	extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
	rules: {
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',
	},
});
