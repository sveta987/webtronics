import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/css/index.css';
import './styles/css/taiwlind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <App/>
      </BrowserRouter>
);
reportWebVitals();