import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { ApolloLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import News from "./pages/News";
import Ask from "./pages/Ask";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

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

console.log(client);
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Provider store={store}> */}
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/ask" element={<Ask />} />
            <Route exact path="/questions/:id" element={<Questions />} />
          </Routes>
          <Footer />
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
