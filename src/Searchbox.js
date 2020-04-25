import React from 'react';

// using destructuring to allow us to grab the props object and grab its properties 
const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;