import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; 

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const apolloClient = new ApolloClient({
    //uri: "https://localhost:7277/",
    uri: "https://localhost:7277/graphql",
    cache: new InMemoryCache({ addTypename: false })
})

//apolloClient
//    .query({
//        query: gql`
//      query allMasjids{
//    id,
//  name,
//  city
//  }`
//    }
//        ,
//    )
//    .then((result) => console.log(result));


root.render(
    <BrowserRouter basename={baseUrl}>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
  </BrowserRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
