import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gender = () => {
  const { t } = useTranslation();
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('John');

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('gender.title')}</h1>
      
      <div style={{ margin: '20px 0' }}>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <p>{t(`gender.user_${gender}`)}</p>
        <p>{t(`gender.welcome_${gender}`, { name })}</p>
      </div>
    </div>
  );
};

export default Gender;