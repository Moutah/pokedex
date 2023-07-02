globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: 'e2e/tsconfig.spec.json',
};

module.exports = {
  preset: 'jest-puppeteer',
};
