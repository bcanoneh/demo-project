export default {
  '*.{js,jsx,ts,tsx}': ['npm run lint', 'npm run format'],
  '*.{md,json}': 'prettier --write',
};
