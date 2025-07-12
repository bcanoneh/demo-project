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
    'scope-enum': [
      RULE_QUALITY,
      'always',
      // 👇 Cast a `any` para evitar error de tipos
      ((parsed) => {
        const scope = parsed.scope ?? '';
        const isValid = /^CMRCS-\d+$/.test(scope);

        return [
          isValid,
          isValid
            ? ''
            : 'El scope debe tener el formato: CMRCS-<número>, por ejemplo CMRCS-123',
        ];
      }) as any,
    ],
    'header-max-length': [RULE_QUALITY, 'always', 100],
  },
};

export default config;
