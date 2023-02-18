import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './scss/App.scss';
import '@fontsource/noto-sans';
import '@fontsource/material-icons';
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
