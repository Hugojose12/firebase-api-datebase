import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyDhfF-JWfs7xit9gWpRA0y58NP6KvgvEMQ",
	authDomain: "fir-app-b5dfe.firebaseapp.com",
	databaseURL: "https://fir-app-b5dfe.firebaseio.com",
	projectId: "fir-app-b5dfe",
	storageBucket: "fir-app-b5dfe.appspot.com",
	messagingSenderId: "587647173212"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
