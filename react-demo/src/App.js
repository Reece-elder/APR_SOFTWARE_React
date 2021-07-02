import './resources/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HelloWorld from './components/HelloWorld'
import Home from './components/002-Component_Hierarchy/Home'
import Parent from './components/003-Props/Parent'
import ParentComplex from './components/003-Props/complex/Parent';
import Counter from './components/004-State/Counter';
import CounterUpdate from './components/004-State/UpdateCounter'
import Manager from './components/005-Forms/Manager';
import ManagerAnimal from './components/animalContact-Card/Manager';
import ManagerLifting from './components/006-LiftingState/Manager';
import BasketManager from './components/006-LiftingState/basketManager/BasketManager';
import Nav from './components/007-Routing/Nav'
import Footer from './components/007-Routing/Footer'

import HomeRoute from './components/007-Routing/pageComponents/Home';
import About from './components/007-Routing/pageComponents/About';
import Contact from './components/007-Routing/pageComponents/Contact';
import Product from './components/007-Routing/pageComponents/Product';

import Clock from './components/008-Hooks/Clock';
import HelloWorldEffect from './components/008-Hooks/HelloWorld';

import Bar from './components/009-DataRequests/Bar';

import Child from './components/010-Bootstrap/Child'


function App() {
  return (

    // Router switch case goes in parent component
    // Nav (or equivalent) goes at the top of the rooter
    // Footer (or equiv) goes at the bottom 

    // Anything between <Switch> </Switch> are the 'cases' you want to switch between

    // Route specify path, if path matches path render that component

    // <Router>
    //   <Nav/>
    //   <Clock/>
    //   <HelloWorldEffect/>
    //   <Switch>

    //     <Route path="/" exact> 
    //       <HomeRoute/>
    //     </Route>

    //     <Route path="/about">
    //       <About/>
    //     </Route>

    //     <Route path="/contact">
    //       <Contact/>
    //     </Route>

    //     <Route path="/product/:id">
    //       <Product/>
    //     </Route>

    //   </Switch>
    //   <Footer/>
    // </Router>

    // <Bar/>

    <Child/>

    // <div className="App">
    //   <HelloWorld/>
    // </div>
    // <div className="App">
    //   <Home/>
    // </div>
    // <div>
    //   <Parent/>
    // </div>
    // <div>
    //   <ParentComplex/>
    // </div>
    // <div>
    //   <CounterUpdate/>
    // </div>
    // <ManagerAnimal/>
    // <ManagerLifting/>
    // <BasketManager/>




  );
}

export default App;
