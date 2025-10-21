import React from 'react';
import { useTranslation } from 'react-i18next';

const AWSIssuesDemo = () => {
  const { t } = useTranslation();

  const awsProblems = [
    {
      title: "Pluralization Lost",
      original: "You have 5 items in cart",
      awsTranslate: "Tienes 5 artículos en carrito", // Wrong plural
      correct: "Tienes 5 artículos en el carrito",
      issue: "AWS doesn't understand plural context"
    },
    {
      title: "Context Misunderstanding", 
      original: "Save (button in emergency app)",
      awsTranslate: "Guardar", // Save file
      correct: "Salvar", // Save life
      issue: "Literal translation without context"
    },
    {
      title: "Ordinal Problems",
      original: "1st place winner",
      awsTranslate: "1 lugar ganador",
      correct: "1er lugar ganador", 
      issue: "Ordinal formatting lost"
    },
    {
      title: "Gender Agreement",
      original: "Welcome user",
      awsTranslate: "Bienvenido usuario", // Assumes male
      correct: "Bienvenido/a usuario/a",
      issue: "No gender context provided"
    }
  ];

  return (
    <div style={{ border: '1px solid #555', padding: '15px', margin: '10px 0', backgroundColor: '#2d2d2d', borderRadius: '5px' }}>
      <h3>{t('challenges.awsIssues')}</h3>
      <div>
        {awsProblems.map((problem, index) => (
          <div key={index} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#3d3d3d', borderRadius: '3px' }}>
            <h4>{problem.title}</h4>
            <p><strong>Original:</strong> {problem.original}</p>
            <p><strong>AWS Translate:</strong> <span style={{color: 'red'}}>{problem.awsTranslate}</span></p>
            <p><strong>Correct:</strong> <span style={{color: 'green'}}>{problem.correct}</span></p>
            <p><em>Issue: {problem.issue}</em></p>
          </div>
        ))}
        
        <div style={{ marginTop: '15px', fontSize: '12px', color: '#aaa' }}>
          <strong>AWS Translate Limitations:</strong>
          <ul>
            <li>No plural rule awareness</li>
            <li>Missing context understanding</li>
            <li>No gender/grammatical agreement</li>
            <li>Literal word-for-word translation</li>
            <li>No cultural adaptation</li>
          </ul>
          <strong>Solutions:</strong>
          <ul>
            <li>Use i18next with proper key structure</li>
            <li>Manual review of AWS translations</li>
            <li>Context-aware translation keys</li>
            <li>Professional translator review</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AWSIssuesDemo;