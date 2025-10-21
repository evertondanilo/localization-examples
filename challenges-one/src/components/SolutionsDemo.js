import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SolutionsDemo = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('naming');

  const tabs = [
    { id: 'naming', label: 'Key Naming' },
    { id: 'namespaces', label: 'Namespaces' },
    { id: 'fallbacks', label: 'Fallbacks' },
    { id: 'workflow', label: 'Workflow' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'naming':
        return (
          <div>
            <h4>Translation Key Naming Conventions</h4>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>❌ Bad:</strong> <code>"button1", "text2", "msg"</code><br/>
                <strong>✅ Good:</strong> <code>"cart.addItem", "profile.welcome", "error.validation"</code>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Context-Specific Keys:</strong><br/>
                <code>"save.file"</code> → "Save File"<br/>
                <code>"save.life"</code> → "Save Life"<br/>
                <code>"bank.financial"</code> → "Bank Institution"<br/>
                <code>"bank.river"</code> → "River Bank"
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Plural Structure:</strong><br/>
                <code>"item_zero", "item_one", "item_other"</code><br/>
                <code>"comment_zero", "comment_one", "comment_few", "comment_many"</code>
              </div>
            </div>
          </div>
        );
      
      case 'namespaces':
        return (
          <div>
            <h4>Namespace Organization</h4>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Feature-Based:</strong><br/>
                <code>/locales/en/auth.json</code> - Login, signup, passwords<br/>
                <code>/locales/en/cart.json</code> - Shopping cart features<br/>
                <code>/locales/en/profile.json</code> - User profile
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Component-Based:</strong><br/>
                <code>/locales/en/common.json</code> - Buttons, labels<br/>
                <code>/locales/en/errors.json</code> - Error messages<br/>
                <code>/locales/en/validation.json</code> - Form validation
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Usage:</strong><br/>
                <code>t('auth:login.title')</code><br/>
                <code>t('common:buttons.save')</code><br/>
                <code>t('errors:network.timeout')</code>
              </div>
            </div>
          </div>
        );
      
      case 'fallbacks':
        return (
          <div>
            <h4>Fallback Strategies</h4>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Language Fallback Chain:</strong><br/>
                <code>es-MX → es → en</code> (Mexican Spanish → Spanish → English)<br/>
                <code>de-AT → de → en</code> (Austrian German → German → English)
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Key Fallback:</strong><br/>
                <code>{`t('profile.welcome_female', {{ fallback: 'profile.welcome' }})`}</code><br/>
                If female form missing, use generic welcome
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Default Values:</strong><br/>
                <code>t('missing.key', 'Default text shown')</code><br/>
                <code>{`t('user.name', {{ defaultValue: 'Anonymous' }})`}</code>
              </div>
              <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
                <strong>Namespace Fallback:</strong><br/>
                <code>{`t('button.save', {{ ns: ['cart', 'common'] }})`}</code><br/>
                Try cart namespace first, then common
              </div>
            </div>
          </div>
        );
      
      case 'workflow':
        return (
          <div>
            <h4>Professional Translation Workflow</h4>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ padding: '10px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
                <strong>✅ Step 1: Extract & Structure</strong><br/>
                • Use extraction tools (i18next-scanner)<br/>
                • Create context-aware keys<br/>
                • Add developer comments for translators
              </div>
              <div style={{ padding: '10px', backgroundColor: '#744210', borderRadius: '3px', border: '1px solid #975a16' }}>
                <strong>⚠️ Step 2: Machine Translation (Careful!)</strong><br/>
                • Use AWS Translate for initial draft only<br/>
                • Never use for plurals/ordinals/context<br/>
                • Mark all machine translations for review
              </div>
              <div style={{ padding: '10px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
                <strong>✅ Step 3: Professional Review</strong><br/>
                • Native speaker review required<br/>
                • Cultural adaptation (colors, symbols)<br/>
                • UI/UX testing in target language
              </div>
              <div style={{ padding: '10px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
                <strong>✅ Step 4: Quality Assurance</strong><br/>
                • Pseudo-localization testing<br/>
                • RTL layout testing<br/>
                • Pluralization testing (0,1,2,5,100)<br/>
                • Context validation
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>Solutions & Best Practices</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 16px',
              backgroundColor: activeTab === tab.id ? '#4a5568' : '#3d3d3d',
              color: '#e0e0e0',
              border: '1px solid #555',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {renderContent()}
    </div>
  );
};

export default SolutionsDemo;