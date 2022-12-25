import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCT7K43HC01jqJCZQUgu3BgO2zLZtE6stk",
  authDomain: "react-chat-app-42c97.firebaseapp.com",
  databaseURL: "https://react-chat-app-42c97-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-42c97",
  storageBucket: "react-chat-app-42c97.appspot.com",
  messagingSenderId: "972920327352",
  appId: "1:972920327352:web:f78208124d5987e8f6b84d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
