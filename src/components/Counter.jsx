import '../App.css';
import { useState } from 'react';

function Counter({startNumber}) {

    const [counter, setCounter] = useState(startNumber)

    const addOne = () => {
        setCounter(counter + 1);
      };
      const addFive = () => {
        setCounter(counter + 5);
      };
      const addHundred = () => {
        setCounter(counter + 100);
      };


      const minusOne = () => {
        setCounter(counter - 1);
      };
      const minusFive = () => {
        setCounter(counter - 5);
      };
      const minusHundred = () => {
        setCounter(counter - 100);
      };  


      const onReset = () => {
        setCounter(startNumber);
      };


    return (
      <div>

        <h4>Count: {counter} </h4>
        <button onClick={addOne} type="button" className="btn btn-success">+1</button>
        <button onClick={addFive} type="button" className="btn btn-success">+5</button>
        <button onClick={addHundred} type="button" className="btn btn-success">+100</button>
        <button onClick={minusOne} type="button" className="btn btn-danger">-1</button>
        <button onClick={minusFive} type="button" className="btn btn-danger">-5</button>
        <button onClick={minusHundred} type="button" className="btn btn-danger">-100</button>
        <br></br>
        <button onClick={onReset} type="button" className="btn btn-info">Reset</button>  
      </div>
    );
  }
  
  export default Counter;