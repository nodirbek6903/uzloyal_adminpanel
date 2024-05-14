import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { store } from './store/store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
)
