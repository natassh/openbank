import React from 'react';
import {Wizard} from '../modules/Wizard/Wizard'
import './App.css';
import { LanguageSwitcher } from './i18n/components/LanguageSwitcher';

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
       <Wizard/>
    </div>
  );
}

export {App};