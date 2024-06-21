import { ESLint } from 'eslint';

const removeIgnoredFiles = async files => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map(file => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);

  if (filteredFiles.length === 0) return '';
  return filteredFiles.map(file => `"${file}"`).join(' ');
};

export default {
  '**/*.{ts,tsx,js,jsx}': async files => {
    const filesToLint = await removeIgnoredFiles(files);
    if (filesToLint === '') return [];
    return [`prettier --write ${filesToLint}`, `eslint --max-warnings=0 ${filesToLint}`];
  },
};
