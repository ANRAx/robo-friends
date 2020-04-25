import React from 'react';
import Card from './Card'
import { robots } from './robots'

// This is a pure component, basically this component doesn't need to know anything other than the fact that
// it recieves something and returns something
const cardsArr = robots.map((user, i) => {
    return (
        <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
        />
    )
});

const Cardlist = ({ robots }) => {
    return(
        <div>
            {cardsArr}
        </div>
    );
}

export default Cardlist;