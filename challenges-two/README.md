# React i18n Localization App

Create a React application with comprehensive internationalization (i18n) using i18next and the Intl API to demonstrate various localization challenges and solutions.

## Requirements

### Supported Languages
- Polish (pl)
- English (en) 
- Portuguese Brazil (pt-BR)
- German (de)
- Japanese (ja)

### Project Structure
- Use a `locales` folder for translation files
- Include a language dropdown selector at the top of each page
- Implement routing with multiple demonstration pages

src/
├── locales/
│   ├── en/
│   ├── pl/
│   ├── pt-BR/
│   ├── de/
│   └── ja/
├── pages/
└── components/

## Pages & Features

### Page 1: Pluralization
Demonstrate handling of singular/plural forms across different languages using i18next plural rules.

### Page 2: Ordinals  
Show ordinal number formatting (1st, 2nd, 3rd, etc.) with proper localization.

### Page 3: Number & Date Formatting
Display locale-specific number and date formatting using the Intl API.

### Page 4: Text Lists
Format lists of items (e.g., "potato, oranges and pears") with proper conjunctions for each language.

### Page 5: Gender & Grammatical Agreement
Handle gender-specific translations and grammatical agreement rules.

### Page 6: Context Challenge
Demonstrate namespace-based context-specific translation keys to solve ambiguous word meanings (bank: financial vs river, book: reserve vs reading, save: file vs life).

## Implementation Strategy

### Key Solutions
1. **Use i18next plural forms** instead of external translation services for count-based translations
2. **Create context-specific keys** to handle ambiguous words that change meaning based on context
3. **Handle gender properly** with separate translation keys for masculine/feminine/neutral forms
4. **Use Intl API** for locale-specific number, date, and list formatting

### Technical Approach
- Leverage i18next for translation management with namespace support
- Combine with Intl API for native browser localization features
- Structure translation keys logically by feature and context using namespaces
- Implement proper fallback mechanisms for missing translations
- Use namespace-based keys (e.g., `financial:bank.institution`, `nature:bank.river`) to solve context ambiguity

This structure provides a clear roadmap for building a comprehensive i18n demonstration app that covers the most common localization challenges developers face.