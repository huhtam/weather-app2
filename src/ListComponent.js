import React from 'react';

const ListComponent = (data) => {
    const [isOpen, setIsOpen] = React.useState(true);
    return isOpen ? ( 
            
            <div className="Component">
                <div className='place'>
                {data.text.name}{data.text.sys ? ", " + data.text.sys.country : null}
                </div>

                <div className='temperature'>
                {data.text.main ? data.text.main.temp  + " °C" : null}
                </div>

                <button onClick={() => setIsOpen(false)}>Self Close</button>
            </div> 

        ):null;

}; 

/*


*/
export {ListComponent};