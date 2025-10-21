import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Context = () => {
  const { t } = useTranslation(['translation', 'financial', 'nature', 'actions']);
  const [selectedExample, setSelectedExample] = useState('financial:bank.institution');

  const examples = [
    { key: 'financial:bank.institution', desc: 'Financial context' },
    { key: 'nature:bank.river', desc: 'Nature context' },
    { key: 'actions:book.reserve', desc: 'Action context' },
    { key: 'nature:book.reading', desc: 'Reading context' },
    { key: 'actions:save.file', desc: 'Tech context' },
    { key: 'actions:save.life', desc: 'Emergency context' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Context Challenge - Namespace Solution</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h3>The Problem</h3>
        <p>Same words, different meanings based on context:</p>
        <ul>
          <li><strong>Bank:</strong> financial institution vs river side</li>
          <li><strong>Book:</strong> make reservation vs reading material</li>
          <li><strong>Save:</strong> store data vs rescue someone</li>
        </ul>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Select example: </label>
        <select value={selectedExample} onChange={(e) => setSelectedExample(e.target.value)}>
          {examples.map(ex => (
            <option key={ex.key} value={ex.key}>{ex.key} ({ex.desc})</option>
          ))}
        </select>
      </div>

      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#333', borderRadius: '5px' }}>
        <strong>Namespace Key:</strong> {selectedExample}<br/>
        <strong>Translation:</strong> {t(selectedExample)}
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>All Examples</h3>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div><code>financial:bank.institution</code> → {t('financial:bank.institution')}</div>
          <div><code>nature:bank.river</code> → {t('nature:bank.river')}</div>
          <div><code>actions:book.reserve</code> → {t('actions:book.reserve')}</div>
          <div><code>nature:book.reading</code> → {t('nature:book.reading')}</div>
          <div><code>actions:save.file</code> → {t('actions:save.file')}</div>
          <div><code>actions:save.life</code> → {t('actions:save.life')}</div>
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Context Sentences</h3>
        <p>{t('financial:bank.visit')}</p>
        <p>{t('nature:bank.location')}</p>
        <p>{t('actions:book.reservation')}</p>
        <p>{t('nature:book.instruction')}</p>
      </div>
    </div>
  );
};

export default Context;