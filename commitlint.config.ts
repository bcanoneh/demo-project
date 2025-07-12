import type { UserConfig } from '@commitlint/types';

const RULE_QUALITY = 2;

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [RULE_QUALITY, 'always', ['sentence-case']],
    'type-enum': [
      RULE_QUALITY,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'refactor',
        'revert',
        'test',
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      referenceActions: [],
      issuePrefixes: ['CMRCS-'],
    },
  },
};

export default config;
