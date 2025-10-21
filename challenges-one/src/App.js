import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import PluralizationDemo from './components/PluralizationDemo';
import OrdinalsDemo from './components/OrdinalsDemo';
import ContextDemo from './components/ContextDemo';
import GenderDemo from './components/GenderDemo';
import FormattingDemo from './components/FormattingDemo';
import AWSIssuesDemo from './components/AWSIssuesDemo';
import SolutionsDemo from './components/SolutionsDemo';
import QualityAssuranceDemo from './components/QualityAssuranceDemo';
import AWSAlternativesDemo from './components/AWSAlternativesDemo';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Apply RTL for Arabic
    document.body.className = i18n.language === 'ar' ? 'rtl' : '';
  }, [i18n.language]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{t('title')}</h1>
      
      <LanguageSelector />
      
      <div style={{ marginTop: '20px' }}>
        <PluralizationDemo />
        <OrdinalsDemo />
        <ContextDemo />
        <GenderDemo />
        <FormattingDemo />
        <AWSIssuesDemo />
        <SolutionsDemo />
        <QualityAssuranceDemo />
        <AWSAlternativesDemo />
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#2d3748', borderRadius: '5px', border: '1px solid #4a5568' }}>
        <h3>Complete Translation Strategy</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
          <div>
            <h4 style={{ color: '#81c784' }}>Technical Solutions</h4>
            <ul style={{ fontSize: '14px' }}>
              <li>Use i18next plural forms for all counts</li>
              <li>Create context-specific translation keys</li>
              <li>Implement proper fallback strategies</li>
              <li>Use Intl API for formatting</li>
              <li>Organize with namespaces</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#81c784' }}>Workflow Best Practices</h4>
            <ul style={{ fontSize: '14px' }}>
              <li>Extract keys with context comments</li>
              <li>Use machine translation for drafts only</li>
              <li>Manual review for plurals/context</li>
              <li>Professional native speaker review</li>
              <li>Comprehensive QA testing</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#81c784' }}>Quality Assurance</h4>
            <ul style={{ fontSize: '14px' }}>
              <li>Test all plural forms (0,1,2,5,100+)</li>
              <li>Validate context-sensitive translations</li>
              <li>RTL layout testing</li>
              <li>Cultural adaptation review</li>
              <li>Automated translation validation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;