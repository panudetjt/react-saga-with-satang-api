import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import App from './App'
import 'antd/dist/antd.css';
import './index.css'
import SymbolTicker from 'routes/symbol-ticker';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<Navigate to="/BTC_THB" replace />}
            />
            <Route path=":symbol" element={<SymbolTicker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
)
