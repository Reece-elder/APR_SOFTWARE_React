import './resources/App.css';

import HelloWorld from './components/HelloWorld'
import Home from './components/002-Component_Hierarchy/Home'
import Parent from './components/003-Props/Parent'

function App() {
  return (
    // <div className="App">
    //   <HelloWorld/>
    // </div>
    // <div className="App">
    //   <Home/>
    // </div>
    <div>
      <Parent/>
    </div>
  );
}

export default App;
