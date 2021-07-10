import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/Eventbind';
import Parent from './components/parent';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Namelist';



function App() {
  return (
    <div className="App">
      <Namelist/>
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}
      {/* <Parent/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Classclick/> */}
      {/* <Message/> */}
      {/* <Greet name="Vivek" dev="Web Developer">
        <p>Hey you good Developer</p>
      </Greet> */}
      {/* <Greet name="Rajeev" dev="Android Developer">
        <button>Click</button>
      </Greet> */}
      {/* <Greet name="Ankit" dev="Android Developer"/>
      <Welcome name="Vivek" dev="Web Developer"/> */}
      {/* <Welcome name="Rajeev" dev="Android Developer"/> */}
      {/* <Welcome name="Ankit" dev="Android Developer"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
