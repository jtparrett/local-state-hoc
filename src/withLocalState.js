import React from 'react';

export default (Component, initialState = {}) => {
    return class extends React.Component {
        state = initialState

        setLocalState = (...params) => {
            this.setState(...params);
        }

        render(){
            return (
                <Component 
                    localState={this.state} 
                    setLocalState={this.setLocalState} 
                    {...this.props} />
            );
        }
    }
};