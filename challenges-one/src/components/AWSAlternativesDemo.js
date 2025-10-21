import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AWSAlternativesDemo = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState('aws');

  const translationServices = {
    aws: {
      name: 'AWS Translate',
      pros: ['Fast', 'Cheap', 'API integration'],
      cons: ['No context', 'No plurals', 'Literal translation'],
      useCase: 'Initial drafts only',
      cost: '$15/million chars'
    },
    google: {
      name: 'Google Translate',
      pros: ['Better context', 'More languages', 'Neural MT'],
      cons: ['Still no plurals', 'Generic translations'],
      useCase: 'Better than AWS for context',
      cost: '$20/million chars'
    },
    deepl: {
      name: 'DeepL',
      pros: ['Best quality', 'Natural translations', 'Context aware'],
      cons: ['Limited languages', 'No plural handling'],
      useCase: 'High-quality drafts',
      cost: '$25/million chars'
    },
    professional: {
      name: 'Professional Translators',
      pros: ['Perfect context', 'Cultural adaptation', 'Quality guarantee'],
      cons: ['Expensive', 'Slower', 'Coordination needed'],
      useCase: 'Final production translations',
      cost: '$0.10-0.30/word'
    }
  };

  const hybridWorkflow = [
    {
      step: 1,
      title: 'Code Extraction',
      description: 'Use i18next-scanner to extract all translation keys',
      tools: ['i18next-scanner', 'Custom scripts'],
      output: 'Structured JSON files with context'
    },
    {
      step: 2,
      title: 'Machine Translation',
      description: 'Generate initial translations (DeepL > Google > AWS)',
      tools: ['DeepL API', 'Google Translate', 'AWS Translate'],
      output: 'Draft translations marked for review'
    },
    {
      step: 3,
      title: 'Manual Fixes',
      description: 'Fix plurals, context, gender, ordinals manually',
      tools: ['Translation management tools', 'i18next editor'],
      output: 'Corrected key translations'
    },
    {
      step: 4,
      title: 'Professional Review',
      description: 'Native speakers review and culturally adapt',
      tools: ['Crowdin', 'Lokalise', 'Phrase'],
      output: 'Production-ready translations'
    }
  ];

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>AWS Translate Alternatives & Solutions</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Translation Service Comparison</h4>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
          {Object.keys(translationServices).map(key => (
            <button
              key={key}
              onClick={() => setSelectedService(key)}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedService === key ? '#4a5568' : '#3d3d3d',
                color: '#e0e0e0',
                border: '1px solid #555',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              {translationServices[key].name}
            </button>
          ))}
        </div>
        
        <div style={{ padding: '15px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
          <h4>{translationServices[selectedService].name}</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '10px' }}>
            <div>
              <strong style={{ color: '#68d391' }}>Pros:</strong>
              <ul>
                {translationServices[selectedService].pros.map((pro, i) => (
                  <li key={i} style={{ color: '#aaa' }}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong style={{ color: '#fc8181' }}>Cons:</strong>
              <ul>
                {translationServices[selectedService].cons.map((con, i) => (
                  <li key={i} style={{ color: '#aaa' }}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
          <p><strong>Best Use Case:</strong> {translationServices[selectedService].useCase}</p>
          <p><strong>Cost:</strong> {translationServices[selectedService].cost}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Hybrid Translation Workflow</h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          {hybridWorkflow.map(step => (
            <div key={step.step} style={{ 
              padding: '15px', 
              backgroundColor: '#3d3d3d', 
              borderRadius: '3px',
              borderLeft: '4px solid #4a5568'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  backgroundColor: '#4a5568', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '10px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {step.step}
                </div>
                <h4 style={{ margin: 0 }}>{step.title}</h4>
              </div>
              <p style={{ color: '#aaa', marginBottom: '8px' }}>{step.description}</p>
              <div style={{ fontSize: '12px' }}>
                <strong>Tools:</strong> {step.tools.join(', ')}<br/>
                <strong>Output:</strong> {step.output}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#2d3748', borderRadius: '3px', border: '1px solid #4a5568' }}>
        <h4>Key Recommendations</h4>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ padding: '8px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
            <strong>✅ DO:</strong> Use machine translation for initial drafts and common phrases
          </div>
          <div style={{ padding: '8px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
            <strong>✅ DO:</strong> Always manually handle plurals, ordinals, and context-sensitive terms
          </div>
          <div style={{ padding: '8px', backgroundColor: '#1a472a', borderRadius: '3px', border: '1px solid #22543d' }}>
            <strong>✅ DO:</strong> Have native speakers review all customer-facing text
          </div>
          <div style={{ padding: '8px', backgroundColor: '#742a2a', borderRadius: '3px', border: '1px solid #9b2c2c' }}>
            <strong>❌ DON'T:</strong> Use AWS Translate directly for UI text without review
          </div>
          <div style={{ padding: '8px', backgroundColor: '#742a2a', borderRadius: '3px', border: '1px solid #9b2c2c' }}>
            <strong>❌ DON'T:</strong> Assume machine translations handle grammar correctly
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSAlternativesDemo;