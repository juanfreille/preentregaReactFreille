import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi5wwuHKRPW8sFZovqKhorWXPJH6bY07s",
  authDomain: "jifstyle.firebaseapp.com",
  projectId: "jifstyle",
  storageBucket: "jifstyle.appspot.com",
  messagingSenderId: "1064989355837",
  appId: "1:1064989355837:web:f68ff4",
  measurementId: "G-CZNV2KN0ZY",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
