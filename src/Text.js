import React from 'react';

function Text(props) { 

    function handleChange(event) {
        if (props.onChange) props.onChange(event)
    }
    
    return ( 
      
      <div className='TextField'>
        <form>
            <label>
                
                <input
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    onKeyPress={props.onKeyPress}
                    placeholder={props.placeholder}
                    ref={props.inputRef}
                    onChange={props.onChange}/>
                    
            </label>
          </form>
      </div>
      
    ); 
    
  }

export {Text};