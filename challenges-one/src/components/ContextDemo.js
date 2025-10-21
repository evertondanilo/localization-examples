import React from 'react';
import { useTranslation } from 'react-i18next';

const ContextDemo = () => {
  const { t } = useTranslation();

  const examples = [
    { key: 'bank_financial', context: 'Financial institution' },
    { key: 'bank_river', context: 'River side' },
    { key: 'book_verb', context: 'Make reservation' },
    { key: 'book_noun', context: 'Reading material' }
  ];

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.context')}</h3>
      <div>
        {examples.map(example => (
          <div key={example.key} style={{ marginBottom: '10px' }}>
            <strong>{example.context}:</strong> {t(`context.${example.key}`)}
          </div>
        ))}
        
        <div style={{ marginTop: '15px', fontSize: '12px', color: '#aaa' }}>
          <strong>Challenge:</strong> Same word, different meanings:
          <ul>
            <li>"Bank" - financial vs river bank</li>
            <li>"Book" - verb (reserve) vs noun (reading)</li>
            <li>"Save" - store data vs rescue someone</li>
            <li>AWS Translate often misses context clues</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContextDemo;