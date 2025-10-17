
import './App.css'
import Dashboard from './component/Dashboard'
import Home from "./component/Home"
// import "./component/Dashboard.css"

function App() {

let ab=80;
  function A() {
    console.log("this is helps to print A")
  }
  return (
    <div>
      THis is My app Page
      {/* Component calling */}
      {/* <Home a={2} str={"string"} arr={[1, 2, 3, 4]} obj={{ name: "xyz", age: 20 }} fun={A} /> */}
      {/* Component calling */}
      <Dashboard a={ab} children="this is default value">
        <p>Lorem ipsum dolor sit.</p>
        <button>click</button>
      </Dashboard>
    </div>
  )
}

export default App
