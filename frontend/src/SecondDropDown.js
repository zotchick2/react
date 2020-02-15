import React from 'react';

class SecondDropDown extends React.Component {
    state = {
        isSecondOpen: false
    }

    toggleSecondDropDown = () => {
        this.setState ({
            isSecondOpen: !this.state.isSecondOpen
        })
    }

    render(){
        return (
            <h1>WoW! It's so amazing!</h1>
        )
    }
}

export default SecondDropDown;