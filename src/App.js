import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"

const App = () => {

  return (
    <div className={`flex flex-col justify-between min-h-screen`}>
    <Header />
      <main className="container mx-auto px-4">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/user/:login" component={UserPage}/>
          <Route exact path="/*" component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};


export default App;
