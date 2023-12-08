import {useEffect} from "react";
function App() {
  useEffect(()=>{
    async function getData(){
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      console.log(data)
    }
    getData();
  },[]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
