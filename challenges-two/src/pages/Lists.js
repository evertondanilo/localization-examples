import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Lists = () => {
  const { t, i18n } = useTranslation();
  const [fruits] = useState(['apple', 'banana', 'orange']);

  const formatList = (items) => {
    if (!Intl.ListFormat) {
      return items.join(', ');
    }
    
    return new Intl.ListFormat(i18n.language, {
      style: 'long',
      type: 'conjunction'
    }).format(items);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('lists.title')}</h1>
      
      <div style={{ margin: '20px 0' }}>
        <p>{t('lists.fruits', { list: formatList(fruits) })}</p>
      </div>
    </div>
  );
};

export default Lists;