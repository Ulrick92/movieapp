import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/style.css";

// Containers
import { Home, Movie, PaginationContent } from "./container";

// components
import { Navbar } from "./component";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route
          path="/nowplaying/page/:pageNumber"
          component={PaginationContent}
        />
        <Route path="/popular/page/:pageNumber" component={PaginationContent} />
        {/* <Route path="/search" component={Search} /> */}
      </>
    </Router>
  );
};

export default App;
