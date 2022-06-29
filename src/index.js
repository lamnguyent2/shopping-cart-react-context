import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataAsm } from './components/DataAsm';

ReactDOM.render(
  <React.StrictMode>
      <DataAsm>
        <App />
      </DataAsm>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
