import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SettingProvider } from './Project/User/Pomodoro/setting/settingContext';
import { ColorProvider } from './Project/User/Pomodoro/setting/colorContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingProvider>
    <ColorProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ColorProvider>
  </SettingProvider>,
);

reportWebVitals();
