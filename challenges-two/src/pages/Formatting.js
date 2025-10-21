import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Formatting = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState(1234.56);
  const [price, setPrice] = useState(99.99);

  const formatNumber = (num) => {
    return new Intl.NumberFormat(i18n.language).format(num);
  };

  const formatCurrency = (amount) => {
    const currencies = {
      en: 'USD',
      pl: 'PLN',
      'pt-BR': 'BRL',
      de: 'EUR',
      ja: 'JPY'
    };
    return new Intl.NumberFormat(i18n.language, {
      style: 'currency',
      currency: currencies[i18n.language] || 'USD'
    }).format(amount);
  };

  const formatDate = () => {
    return new Intl.DateTimeFormat(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('formatting.title')}</h1>
      
      <div style={{ margin: '20px 0' }}>
        <label>Number: </label>
        <input 
          type="number" 
          value={number} 
          onChange={(e) => setNumber(parseFloat(e.target.value) || 0)}
          step="0.01"
        />
        <p>{t('formatting.number', { number: formatNumber(number) })}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Price: </label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
          step="0.01"
        />
        <p>{t('formatting.currency', { price: formatCurrency(price) })}</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <p>{t('formatting.date', { date: formatDate() })}</p>
      </div>
    </div>
  );
};

export default Formatting;