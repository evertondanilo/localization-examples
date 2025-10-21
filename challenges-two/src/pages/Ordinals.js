import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Ordinals = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState(1);

  const formatOrdinal = (num) => {
    const formatter = new Intl.PluralRules(i18n.language, { type: 'ordinal' });
    const rule = formatter.select(num);
    
    const ordinalSuffixes = {
      en: { one: 'st', two: 'nd', few: 'rd', other: 'th' },
      pl: { other: '.' },
      'pt-BR': { other: 'º' },
      de: { other: '.' },
      ja: { other: '番目' }
    };

    const suffix = ordinalSuffixes[i18n.language]?.[rule] || ordinalSuffixes[i18n.language]?.other || 'th';
    return `${num}${suffix}`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('ordinals.title')}</h1>
      
      <div style={{ margin: '20px 0' }}>
        <label>Number: </label>
        <input 
          type="number" 
          value={number} 
          onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
          min="1"
        />
        <p>{t('ordinals.position', { ordinal: formatOrdinal(number) })}</p>
      </div>
    </div>
  );
};

export default Ordinals;