import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GenderDemo = () => {
  const { t } = useTranslation();
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('John');

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.gender')}</h3>
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <p>{t(`profile.welcome_${gender}`, { name })}</p>
        
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#aaa' }}>
          <strong>Challenge:</strong> Gender affects grammar:
          <ul>
            <li>Spanish: "Bienvenido" (male) vs "Bienvenida" (female)</li>
            <li>German: "Der Benutzer" vs "Die Benutzerin"</li>
            <li>French: Adjectives must agree with gender</li>
            <li>Some languages have neutral forms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenderDemo;