
import './App.css'
import Home from "./component/Home"

function App() {


  function A() {
    console.log("this is helps to print A")
  }
  return (
    <div>
      THis is My app Page
      {/* Component calling */}
      <Home a={2} str={"string"} arr={[1, 2, 3, 4]} obj={{ name: "xyz", age: 20 }} fun={A} />
    </div>
  )
}

export default App
