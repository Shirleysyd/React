# Prettier Setup Plan for Rating UI Project

## Current Status Analysis

- **Prettier**: Not installed or configured
- **ESLint**: Already configured in `eslint.config.js`
- **Project**: React + Vite project with TypeScript support

## Steps Required

### 1. Install Prettier Dependencies

```bash
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

### 2. Create Prettier Configuration (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid"
}
```

### 3. Update ESLint Configuration (eslint.config.js)

Add Prettier integration to the existing ESLint config:

```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'prettier/prettier': 'error',
    },
  },
]);
```

### 4. Add Prettier Scripts to package.json

Add these scripts to the `scripts` section:

```json
{
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

### 5. Create .prettierignore

```
node_modules
dist
*.min.js
*.min.css
package-lock.json
yarn.lock
```

### 6. Run Prettier to Format Existing Code

```bash
npm run format
```

## Current Code Issues to be Fixed by Prettier

### Rating.jsx Issues:

1. **Line 5**: `const[rating, setRating]=useState(0);` - Missing spaces
2. **Line 7**: `const stars = Array(6).fill(0).map( (_, i)=> i+1);` - Inconsistent arrow function spacing
3. **Line 10**: `<div className='container'>` - Inconsistent indentation
4. **Lines 16-18**: JSX elements not properly formatted

### Expected Formatting After Prettier:

```javascript
import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const stars = Array(6)
    .fill(0)
    .map((_, i) => i + 1); // Array of 6 stars

  return (
    <div className="container">
      <h2>Rating Component</h2>
      <div>
        {stars.map(star => (
          <span onClick={() => setRating(star)} key={star} className="star">
            {'\u2605'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
```

## Next Steps

1. Switch to Code mode to implement these changes
2. Install dependencies and create configuration files
3. Run Prettier to format all code
4. Verify the formatting is applied correctly
