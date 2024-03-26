import baseConfig from 'eslint-config-custom/base.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(...baseConfig);
