import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider

} from "@apollo/client";

const token = process.env.REACT_APP_API_KEY;

const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants',
  cache: new InMemoryCache(),
  fetchOptions: {
    credentials: 'include'
},
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
});
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 /*  <ApolloProvider client={client}>    
     <App />  
   </ApolloProvider>,*/
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
