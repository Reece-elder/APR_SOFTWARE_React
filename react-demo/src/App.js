import './resources/App.css';

import HelloWorld from './components/HelloWorld'
import Home from './components/002-Component_Hierarchy/Home'
import Parent from './components/003-Props/Parent'
import ParentComplex from './components/003-Props/complex/Parent';
import Counter from './components/004-State/Counter';
import CounterUpdate from './components/004-State/UpdateCounter'
import Manager from './components/005-Forms/Manager';


function App() {
  return (
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
    <Manager/>
  );
}

export default App;
