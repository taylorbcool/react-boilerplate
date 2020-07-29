import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "./components/Global/styled";

// Importing all routes
import HomePage from "./components/HomePage";
import ReduxCounter from "./components/ReduxCounter";
import ReduxSelector from "./components/ReduxSelector";

const App = () => {
  return (
    <AppWrapper>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/counter" render={props => <ReduxCounter {...props} />} />
      <Route path="/selector" render={props => <ReduxSelector {...props} />} />
    </AppWrapper>
  );
};

export default App;
