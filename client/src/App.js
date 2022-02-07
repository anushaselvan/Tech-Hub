import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { ApolloLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Questions from './pages/Questions';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import News from './pages/News';


import Nav from './components/Nav';
//import { Provider } from 'react-redux';
//import store from "./utils/store";

/*
const httpLink = createHttpLink({
  uri: '/graphql',
});
const link = ApolloLink.from([
  httpLink,
  authLink,

])*/
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


/*const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // or your graphql server uri
  //uri: '/graphql',
  cache: new InMemoryCache(), 
});*/
console.log(client);
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Provider store={store}> */}
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home/>} /> 
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/news" element={<News/>} />
              <Route exact path="/questions" element={<Questions/>} />
              <Route exact path="/Profile/:id" element={<Profile/>} />
            </Routes>
         {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
