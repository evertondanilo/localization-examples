import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <LanguageSelector />
      <div style={{ marginTop: '10px' }}>
        <Link to="/pluralization" style={{ margin: '0 10px' }}>{t('nav.pluralization')}</Link>
        <Link to="/ordinals" style={{ margin: '0 10px' }}>{t('nav.ordinals')}</Link>
        <Link to="/formatting" style={{ margin: '0 10px' }}>{t('nav.formatting')}</Link>
        <Link to="/lists" style={{ margin: '0 10px' }}>{t('nav.lists')}</Link>
        <Link to="/gender" style={{ margin: '0 10px' }}>{t('nav.gender')}</Link>
        <Link to="/context" style={{ margin: '0 10px' }}>{t('nav.context')}</Link>
      </div>
    </nav>
  );
};

export default Navigation;