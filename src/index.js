import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import './styles/css/taiwlind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <App/>
      </BrowserRouter>
);
reportWebVitals();