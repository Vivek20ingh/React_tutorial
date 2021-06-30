import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <Greet name="Vivek" dev="Web Developer">
        <p>Hey you good Developer</p>
      </Greet>
      <Greet name="Rajeev" dev="Android Developer">
        <button>Click</button>
      </Greet>
      <Greet name="Ankit" dev="Android Developer"/>
      <Welcome name="Vivek" dev="Web Developer"/>
      <Welcome name="Rajeev" dev="Android Developer"/>
      <Welcome name="Ankit" dev="Android Developer"/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
