import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const OrdinalsDemo = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState(1);

  const getOrdinalKey = (pos) => {
    if (pos <= 3) return `ranking.position_${pos}`;
    return 'ranking.position_other';
  };

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.ordinals')}</h3>
      <div>
        <h4>{t('ranking.title')}</h4>
        <input 
          type="number" 
          value={position} 
          onChange={(e) => setPosition(parseInt(e.target.value) || 1)}
          min="1"
          max="100"
        />
        <p>{t(getOrdinalKey(position), { name: 'Player', count: position })}</p>
        
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#aaa' }}>
          <strong>Challenge:</strong> Ordinal numbers vary by language:
          <ul>
            <li>English: 1st, 2nd, 3rd, 4th, 21st, 22nd, 23rd</li>
            <li>Spanish: 1º, 2º, 3º, 4º (masculine/feminine forms)</li>
            <li>German: 1., 2., 3. (period after number)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrdinalsDemo;