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
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import style from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Purecom from './components/Purecom';
import ParentComp from './components/ParentComp';
import RefsDemo from './component1/RefsDemo';



function App() {
  return (
    <div className="App">
      <RefsDemo/>
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <Namelist/> */}
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
