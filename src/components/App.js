import React, { useState } from 'react'
import '../styles/App.css';
import ImageSrc from '../image.jpeg';

const App = () => {
  const [myStyle, setStyle] = useState({width:"320", height:"320"})
  const changeSizeHandle = (event) => {
      if(event.target.id == 'height-slider'){
        setStyle({...myStyle, height:event.target.value})
      }else if(event.target.id == 'width-slider'){
          console.log("width chnaging");
          setStyle({...myStyle, width:event.target.value})

      }
  }
  console.log(myStyle.width);
  return (
    <div id="main">
      <input type="range" id="height-slider" onChange={changeSizeHandle} min="100" max="800" value={myStyle.height} />
      <input type="range" id="width-slider" onChange={changeSizeHandle} min="100" max="800" value={myStyle.width} />
      <img src={ImageSrc} alt="No" width={myStyle.width} height={myStyle.height} id='resizable-img'/>
      
    </div>
  )
}


export default App;
