import { render } from '@testing-library/react';
import React from 'react';


class button extends React.Component {
    constructor (props) {
        super(props);
        this.state = { clicked: false};
    }


render() {
    return (
        <button
            style={{
                backgroundColor: '#ffcc66'
            }}
        onClick={() => this.setState({ clicked:true})}
        >
            {this.state.clicked ? 'added to basket' : 'add to basket'}
         </button>
    )
}
}

export default button