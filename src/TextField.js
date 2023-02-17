import React from 'react';

const TextField= ({ value, onKeyPress, name, placeholder, type, onChange }) => { 

    
    console.log('TExtfiel alku')
    return ( 
      
      <div className='TextField'>
        <form>
            <label>
            <input
                type={type}
                value={value}
                name={name}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                onChange={onChange}/>
            </label>
           <script>console.log('TExtfiel läpi')</script>
          </form>
      </div>
      
    ); 
    
  }

export {TextField};