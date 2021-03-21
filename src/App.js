import './App.css';
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Colors from './components/Colors'

function App(props) {

  return (
  <div className="myapp">  
     <div className="container" >
          <Greeting title='Hello Web Dev' description='This is Counter written on React'/>
          <Counter startNumber ={200} />
          <Colors />
      </div> 
   </div>    
  );
}

export default App;
