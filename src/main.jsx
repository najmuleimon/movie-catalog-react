import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WatchlistProviders from './providers/WatchlistProviders.jsx';
import FilterProviders from './providers/FilterProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchlistProviders>
      <FilterProviders>
        <App />
      </FilterProviders>
    </WatchlistProviders>
  </React.StrictMode>,
)
