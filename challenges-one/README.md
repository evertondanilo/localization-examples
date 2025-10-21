# i18next Translation Challenges Demo

A comprehensive demo showcasing common translation challenges and how to solve them with i18next.

## Translation Challenges Covered

### 1. Pluralization
- Different plural rules across languages
- English: 0, 1, 2+ forms
- Arabic: 6 different plural forms
- Proper i18next plural key structure

### 2. Ordinals
- 1st, 2nd, 3rd variations by language
- Spanish: 1º, 2º, 3º with gender
- German: 1., 2., 3. format

### 3. Context-Dependent Translations
- Same word, different meanings
- "Bank" (financial vs river)
- "Save" (data vs rescue)
- "Book" (verb vs noun)

### 4. Gender/Grammatical Agreement
- Spanish: Bienvenido/Bienvenida
- German: Der/Die articles
- Adjective agreement with nouns

### 5. Number/Date Formatting
- Currency: $1,234.56 vs 1.234,56 €
- Dates: MM/DD/YYYY vs DD/MM/YYYY
- Thousands separators

### 6. AWS Translate Issues
- Lost plural context
- Literal translations without context
- Missing gender agreement
- No cultural adaptation

## Setup

\`\`\`bash
npm install
npm start
\`\`\`

## Key Solutions

1. **Use i18next plural forms** instead of AWS Translate for counts
2. **Create context-specific keys** for ambiguous words
3. **Handle gender properly** with separate translation keys
4. **Use Intl API** for locale-specific formatting
5. **Always review** machine translations
6. **Test with RTL languages** like Arabic

## File Structure

- `/public/locales/` - Translation files for each language
- `/src/components/` - Demo components for each challenge
- `/src/i18n/` - i18next configuration

## Languages Supported

- English (en)
- Spanish (es) 
- German (de)
- Arabic (ar) - with RTL support