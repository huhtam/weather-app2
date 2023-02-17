import './App.css';
import { useState } from 'react';
import { ListComponent } from './ListComponent.js'; 
import { TextField } from './TextField';
import { Text } from './Text';


function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const [components, setComponents] = useState([]); 
  /*
  
*/
  const searchLocation = (event) => {
    
    if (event.key === 'Enter') {
      console.log(location)
      event.preventDefault()
      
      fetch(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      
        .then(res => res.json())
        .then(result => {
        addComponent(result)
      })
      
      setLocation('')
    }
  }
  /* 
  
  */

  
  
  function addComponent(data) { 
    console.log('komponentti lisäty')
    setComponents([...components, data])
    var str = JSON.stringify(components, null, 4); // (Optional) beautiful indented output.
    console.log(str)
  }
  
  
  return ( 
    
    <div className='App'> 
    
      <div className='Searchelement'>
        <TextField value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text" 
          name="location" 
          placeholder="Enter location"/>
      </div>
      {components.map((item, i) => ( <ListComponent text={item} /> ))} 
      
      

      
    </div> 
    
  ) 
  
  

  return (
    
    
    <div className="App">


<div className='Weatherdiv'>
        
        <div className='place'>
          {data.name}{data.sys ? ", " + data.sys.country : null}
        </div>
          
        <div className='temperature'>
          {data.main ? data.main.temp  + " °C" : null}
        </div>
        
      </div>


    <Text value={location}
                  onChange={event => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  type="text" 
                  name="location" 
                  placeholder="Enter location 2"/>
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
