import React from 'react';
import { useTranslation } from 'react-i18next';

const FormattingDemo = () => {
  const { t, i18n } = useTranslation();

  const price = 1234.56;
  const date = new Date();
  const visitors = 1234567;
  const currency = i18n.language === 'en' ? 'USD' :
    i18n.language === 'es' ? 'EUR' :
      i18n.language === 'de' ? 'EUR' : 'USD';

  // Configure number formatting based on locale
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat(i18n.language, {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat(i18n.language).format(num);
  };

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.formatting')}</h3>
      <div>
        <p>{t('formatting.price')}: {formatCurrency(price)}</p>
        <p>{t('formatting.date')}: {formatDate(date)}</p>
        <p>{t('formatting.number')}: {formatNumber(visitors)}</p>

        <div style={{ marginTop: '10px', fontSize: '12px', color: '#aaa' }}>
          <strong>Challenge:</strong> Number/date formatting varies:
          <ul>
            <li>US: $1,234.56 vs EU: 1.234,56 €</li>
            <li>US: MM/DD/YYYY vs EU: DD/MM/YYYY</li>
            <li>Thousands separator: comma vs period vs space</li>
            <li>Currency symbols and positions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormattingDemo;