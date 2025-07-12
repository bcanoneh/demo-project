import type { UserConfig } from '@commitlint/types';

const RULE_QUALITY = 2;

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [RULE_QUALITY, 'never'],
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
    'header-max-length': [RULE_QUALITY, 'always', 100],
  },
  parserOpts: {
    headerPattern: /^(\w+)(?:\(([^)]+)\))?: (.+)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    issuePrefixes: ['CMRCS-'],
  },
};

export default config;
