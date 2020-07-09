import React ,{useState} from 'react';
import ChildIncrement from './ChildIncement'
import ChildrenDecrement from './ChildrenDecrement';

function App() {

  const[number,setNumber] = useState(0) ;

  const increment =() =>{setNumber(number+1)}

  const decrement =()=>{setNumber(number-1)}


  return (
    
   
      
        
         <div style={{textAlign:'center'}}>

             <ChildrenDecrement call={decrement}/>

             <h1>{number}</h1>
             <ChildIncrement call={increment} />
             
         </div>

      
     
  );
}



export default App;
