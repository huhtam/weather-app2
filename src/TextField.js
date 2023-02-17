import React from 'react';

const TextField= ({ value, onKeyPress, name, placeholder, type, onChange }) => { 

    function handleChange(event) {
        if (onChange) onChange(event)
    }
    
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
          </form>
      </div>
      
    ); 
    
  }

export {TextField};