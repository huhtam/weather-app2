import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import { Button } from './Button.js'; 
import { ListComponent } from './ListComponent.js'; 
import { TextField } from './TextField';
import { Text } from './Text';


function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const [icon, setIcon] = useState('')

  /*
  console.log(process.env.REACT_APP_API_URL)
  console.log(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  */
  /*
  useEffect(()=> {
    fetch(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        setData(result)
        console.log(result)
        console.log(result.name);
      });
  }, [])
*/
  const searchLocation = (event) => {
    console.log('termos')
    
    if (event.key === 'Enter') {
      console.log('enter press here! ')
      console.log(location)
      event.preventDefault()
      fetch(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      
        .then(res => res.json())
        .then(result => {
        setData(result)
        console.log(result)
        addComponent(data)
        console.log('searchLocation called')
      })
      
      setLocation('')
    }
  }
  /* 
  
  */

  const [components, setComponents] = useState([]); 
  
  function addComponent() { 
    setComponents([...components, data]) 
    
  }

  function search() {
    
    fetch(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      
        .then(res => res.json())
        .then(result => {
        setData(result)
        console.log(result)
        addComponent()
      })
  }
  
  
  return ( 
    
    <div> 
    
      
      <TextField value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text" 
              name="location" 
              placeholder="Enter location"/>

      
      
      

      <div className='weatherdiv'>
        <div className='place'>
          {data.name}{data.sys ? ", " + data.sys.country : null}
        </div>
          
        <div className='temperature'>
          {data.main ? data.main.temp  + " °C" : null}
        </div>
        {components.slice().map((item, i) => ( <ListComponent text={item} /> ))} 
      </div>
    </div> 
    
  ) 
  
  

  return (
    <div className="App">

      <div className='weatherdiv'>
        <div>
          <form>
            <label>
              <input value={location} 
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text" 
              name="location" 
              placeholder="Enter Location"/>
            </label>
           
          </form>
        </div>
        <div className='place'>
          {data.name}{data.sys ? ", " + data.sys.country : null}
        </div>
          
        <div className='temperature'>
          {data.main ? data.main.temp  + " °C" : null}
        </div>
      </div>

    </div>
  );
}

export default App;
