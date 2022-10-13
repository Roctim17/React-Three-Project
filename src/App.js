import { useEffect } from "react";
import { init } from "./Components/initLayer.js";



function App() {

useEffect(()=>{
  init()
},[])

  return (
    <div>
      <h1>
        hello
      </h1>
    </div>
  );
}

export default App;
