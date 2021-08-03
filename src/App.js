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
import Focusinput from './component1/Focusinput';
import FRParentInput from './component1/FRParentInput';
import PortalDemo from './component1/PortalDemo';
import Hero from './component1/Hero';
import { render } from 'react-dom';
import Errorboundr from './component1/Errorboundr';
import ClickCounter from './component1/ClickCounter';
import HoverCounter from './component1/HoverCounter';
import ClickCounterTwo from './component1/ClickCounterTwo';
import HoverCount2 from './component1/HoverCount2';



function App() {
 
  return (
    <div className="App">
      <ClickCounterTwo/>
      <HoverCount2/>
      {/* <ClickCounter/>
      <HoverCounter/> */}

      {/* < Errorboundr><Hero heroName="batman"></Hero></Errorboundr>
      < Errorboundr>  <Hero heroName="Superman"></Hero></Errorboundr>
      < Errorboundr> <Hero heroName="joker"></Hero></Errorboundr> */}
     
     
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <Focusinput/> */}
      {/* <RefsDemo/> */}
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
  )
}

export default App;
