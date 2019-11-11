import React from 'react';
import './App.css';
import Login from "./Login/Login"
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Header_menu from "./header-menu/Header_menu";
import NavBar from "./Navbar/Navbar";
import DSTAMain from "./DSTAstaff/DSTA_main";
import Contractor_main from "./Contractor/Contractor_main";
import {ProjectForm} from "./DSTAstaff/Project/ProjectForm/ProjectForm";

function App() {
  return (
      <Router>
      <div className="App">
         <Switch>

              <Route exact path="/" component={Login} />     
      
              <Route path="/Header_menu" component={Header_menu}/>
              <Route path="/NavBar" component={NavBar} />
              <Route path="/DSTA_main" component={DSTAMain}/>
              <Route path="/Contractor_main" component={Contractor_main}/>
              <Route path="/ProjectForm" component={ProjectForm}/>

          </Switch>
    </div>
        </Router>


  );
}

export default App;
