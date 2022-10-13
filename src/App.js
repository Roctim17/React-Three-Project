import { useEffect } from "react";
import { init } from "./Components/initLayer.js";



function App() {

useEffect(()=>{
  init()
},[])

  return (
    <div>
    </div>
  );
}

export default App;
