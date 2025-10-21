import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Pluralization = () => {
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState(1);
  const [bookCount, setBookCount] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('pluralization.title')}</h1>
      
      <div style={{ margin: '20px 0' }}>
        <label>Items count: </label>
        <input 
          type="number" 
          value={itemCount} 
          onChange={(e) => setItemCount(parseInt(e.target.value) || 0)}
          min="0"
        />
        <p>{t('pluralization.items', { count: itemCount })}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Books count: </label>
        <input 
          type="number" 
          value={bookCount} 
          onChange={(e) => setBookCount(parseInt(e.target.value) || 0)}
          min="0"
        />
        <p>{t('pluralization.books', { count: bookCount })}</p>
      </div>
    </div>
  );
};

export default Pluralization;