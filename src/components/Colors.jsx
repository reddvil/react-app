import '../App.css';
import { useState } from 'react';

function Colors({startColor}) {

   let [color, setColor] = useState(startColor)

    const  blueColor = () => {
        setColor(color = {background:"#0b60db",color:"#fff"});
      };
      const greyColor = () => {
        setColor(color = {background:"#5c636a",color:"#fff"});
      };
      const greenColor = () => {
        setColor(color = {background:"#157548",color:"#fff"});
      };

      const  redColor = () => {
        setColor(color = {background:"#bb2d3b",color:"#fff"});
      };
      const yellowColor = () => {
        setColor(color = {background:"#ffca2b",color:"#fff"});
      };
      const ltblueColor = () => {
        setColor(color = {background:"#22cff1",color:"#fff"});
      };

      const lightColor = () => {
        setColor(color = {background:"#f9fafb",color:"#000"});
      };
      const darkColor = () => {
        setColor(color = {background:"#1c1f23",color:"#fff"});
      };

      const defaultColor = () => {
        setColor(color = startColor);
      };


    return (
      <div className="colorDiv" style={color}>
        
        <br></br>
        <h3>This is Colorful Div</h3>

        <button onClick={blueColor} type="button" class="btn btn-primary">Blue</button>
        <button onClick={greyColor} type="button" class="btn btn-secondary">Grey</button>
        <button onClick={greenColor} type="button" class="btn btn-success">Green</button>
        <button onClick={redColor} type="button" class="btn btn-danger">Red</button>
        <button onClick={yellowColor} type="button" class="btn btn-warning">Yellow</button>
        <button onClick={ltblueColor} type="button" class="btn btn-info">Lt Blue</button>
        <button onClick={lightColor} type="button" class="btn btn-light">Light</button>
        <button onClick={darkColor} type="button" class="btn btn-dark">Dark</button>
        <button onClick={defaultColor} type="button" class="btn btn-link btn-lg">Default</button>
  
      </div>
    );
  }

export default Colors;
