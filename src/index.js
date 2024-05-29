import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EventType } from '@azure/msal-browser';
import { msalInstance } from './auth-config';


if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0])
}

msalInstance.enableAccountStorageEvents();

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App instance={msalInstance} />
);
