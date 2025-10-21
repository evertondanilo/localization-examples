import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Pluralization from './pages/Pluralization';
import Ordinals from './pages/Ordinals';
import Formatting from './pages/Formatting';
import Lists from './pages/Lists';
import Gender from './pages/Gender';
import Context from './pages/Context';
import './i18n';

function App() {
  return (
    <Suspense fallback={<div style={{padding: '20px'}}>Loading...</div>}>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/pluralization" replace />} />
            <Route path="/pluralization" element={<Pluralization />} />
            <Route path="/ordinals" element={<Ordinals />} />
            <Route path="/formatting" element={<Formatting />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/gender" element={<Gender />} />
            <Route path="/context" element={<Context />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;