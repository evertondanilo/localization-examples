create an app with i18n, and react, and Intl API  solutions for the localization, translations problems below.

cover languages such as:
pl, en, pt-BR, de, ja,

use the locales folder.

a dropdown at the top of the page that allows changing the language.

create routes with pages.

which page will cover an translation example.


page 1 - Pluralization

page 2 - Ordinals

page 3 - Number/Date Formatting

page 4 - Text lists: like potato, oranges and pears.

page 5 - Gender/Grammatical Agreement


## Key Solutions

1. **Use i18next plural forms** instead of AWS Translate for counts
2. **Create context-specific keys** for ambiguous words
3. **Handle gender properly** with separate translation keys
4. **Use Intl API** for locale-specific formatting


Project structure:
src/
├── locales/
│   ├── en/
│   ├── pl/
│   ├── pt-BR/
│   ├── de/
│   └── ja/
├── pages/
└── components/


