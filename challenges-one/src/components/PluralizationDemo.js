import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PluralizationDemo = () => {
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState(0);

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.pluralization')}</h3>
      <div>
        <h4>{t('cart.title')}</h4>
        <input 
          type="number" 
          value={itemCount} 
          onChange={(e) => setItemCount(parseInt(e.target.value) || 0)}
          min="0"
        />
        <p>{t('cart.item', { count: itemCount })}</p>
        <p>{t('cart.total', { amount: itemCount * 9.99 })}</p>
        
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#aaa' }}>
          <strong>Challenge:</strong> Different languages have different plural rules:
          <ul>
            <li>English: 0 items, 1 item, 2+ items</li>
            <li>Arabic: 0, 1, 2, 3-10, 11-99, 100+ (6 forms!)</li>
            <li>Polish: Complex rules based on last digit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PluralizationDemo;