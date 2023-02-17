import React from 'react';

const ListComponent = (data) => { 
    console.log('ListComponent')
    

  return ( 
    
    <div className="Component">
      <div className='place'>
          {data.text.name}{data.text.sys ? ", " + data.text.sys.country : null}
        </div>
        <div className='temperature'>
          {data.text.main ? data.text.main.temp  + " °C" : null}
        </div>
    </div> 
    
  ); 
}; 

export {ListComponent};