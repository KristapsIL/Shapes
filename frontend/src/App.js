import {useEffect, useState} from "react";
import ShapeInfo from "./ShapeInfo";
function App() {
  const [shape, setShape] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getData(){
      const response = await fetch("http://localhost:8080/Shapes/backend/");
      const data = await response.json();
      setShape(data);
      console.log(data);
      setLoading(false)
    }
    getData();

  },[]);



  const shapeJSX = shape.map((info, index)=>{
  return ( <ShapeInfo key={index} {...info}/>)
  })

  const squareStyle = {
    height: `${shape[0]?.height}px`,
    width: `${shape[0]?.width}px`,
    backgroundColor: shape[0]?.color,
  };

  const circleStyle = {
    height: `${2 * shape[1]?.radius}px`,
    width: `${2 * shape[1]?.radius}px`,
    backgroundColor: shape[1]?.color,
    borderRadius: '50%',
  };

  return (
    <div className="App">
      {loading ? <p>Loading</p> :shapeJSX}
      {loading ? <p>Loading</p> : (
        <>
          <div style={squareStyle} />
          <div style={circleStyle} />
        </>
      )}
    </div>
  )
}

export default App;
