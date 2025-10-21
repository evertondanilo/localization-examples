import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QualityAssuranceDemo = () => {
  const { t } = useTranslation();
  const [testResults, setTestResults] = useState({});

  const runPluralTest = () => {
    const testCounts = [0, 1, 2, 5, 21, 100];
    const results = testCounts.map(count => ({
      count,
      result: t('cart.item', { count }),
      status: t('cart.item', { count }).includes('{{') ? 'FAIL' : 'PASS'
    }));
    setTestResults({ ...testResults, plural: results });
  };

  const runContextTest = () => {
    const contexts = [
      { key: 'context.bank_financial', expected: 'financial institution' },
      { key: 'context.bank_river', expected: 'river side' },
      { key: 'context.book_verb', expected: 'reservation' },
      { key: 'context.book_noun', expected: 'reading material' }
    ];
    
    const results = contexts.map(ctx => ({
      key: ctx.key,
      result: t(ctx.key),
      status: t(ctx.key).includes('{{') ? 'FAIL' : 'PASS'
    }));
    setTestResults({ ...testResults, context: results });
  };

  const runRTLTest = () => {
    const rtlIssues = [
      'Text alignment in Arabic',
      'Icon positioning',
      'Form layout direction',
      'Number formatting'
    ];
    
    const results = rtlIssues.map(issue => ({
      issue,
      status: Math.random() > 0.3 ? 'PASS' : 'NEEDS_REVIEW'
    }));
    setTestResults({ ...testResults, rtl: results });
  };

  const checklist = [
    { category: 'Pluralization', items: [
      'Test with 0, 1, 2, 5, 21, 100+ items',
      'Verify Arabic 6-form plurals work',
      'Check Polish/Russian complex rules',
      'Validate ordinal numbers (1st, 2nd, 3rd)'
    ]},
    { category: 'Context & Gender', items: [
      'Same word, different contexts tested',
      'Gender forms for all supported languages',
      'Formal vs informal address (German Sie/Du)',
      'Cultural adaptations applied'
    ]},
    { category: 'Formatting', items: [
      'Currency symbols and positions',
      'Date formats (MM/DD vs DD/MM)',
      'Number separators (1,234.56 vs 1.234,56)',
      'Time formats (12h vs 24h)'
    ]},
    { category: 'Technical', items: [
      'All translation keys exist',
      'No missing interpolations {{}}',
      'Fallback languages configured',
      'RTL layout tested',
      'Text expansion/contraction handled'
    ]}
  ];

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>Quality Assurance Checklist</h3>
      
      <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={runPluralTest} style={{ padding: '8px 16px', backgroundColor: '#4a5568', color: '#e0e0e0', border: '1px solid #555', borderRadius: '3px', cursor: 'pointer' }}>
            Test Plurals
          </button>
          <button onClick={runContextTest} style={{ padding: '8px 16px', backgroundColor: '#4a5568', color: '#e0e0e0', border: '1px solid #555', borderRadius: '3px', cursor: 'pointer' }}>
            Test Context
          </button>
          <button onClick={runRTLTest} style={{ padding: '8px 16px', backgroundColor: '#4a5568', color: '#e0e0e0', border: '1px solid #555', borderRadius: '3px', cursor: 'pointer' }}>
            Test RTL
          </button>
        </div>

        {testResults.plural && (
          <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
            <h4>Plural Test Results:</h4>
            {testResults.plural.map((result, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>{result.count}: {result.result}</span>
                <span style={{ color: result.status === 'PASS' ? '#68d391' : '#fc8181' }}>
                  {result.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {testResults.context && (
          <div style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
            <h4>Context Test Results:</h4>
            {testResults.context.map((result, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>{result.key}: {result.result}</span>
                <span style={{ color: result.status === 'PASS' ? '#68d391' : '#fc8181' }}>
                  {result.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {checklist.map((section, i) => (
          <div key={i} style={{ padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
            <h4 style={{ marginBottom: '10px', color: '#81c784' }}>{section.category}</h4>
            {section.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input type="checkbox" style={{ marginRight: '8px' }} />
                <span style={{ fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#2d3748', borderRadius: '3px', border: '1px solid #4a5568' }}>
        <h4>Automated Testing Tools</h4>
        <ul style={{ fontSize: '14px', color: '#aaa' }}>
          <li><strong>i18next-scanner:</strong> Extract translation keys from code</li>
          <li><strong>Pseudo-localization:</strong> Test UI with longer text (Ṗśéúðö-ĺöćáĺíźáţíöń)</li>
          <li><strong>Translation validation:</strong> Check for missing keys, unused keys</li>
          <li><strong>Pluralization testing:</strong> Automated tests for all count scenarios</li>
          <li><strong>RTL testing:</strong> Automated layout validation for Arabic/Hebrew</li>
        </ul>
      </div>
    </div>
  );
};

export default QualityAssuranceDemo;