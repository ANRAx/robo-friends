import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grow">
                <img src="https://robohash.org/test" alt="robots" />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;