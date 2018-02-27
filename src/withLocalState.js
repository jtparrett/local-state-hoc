import React from 'react';

export default (Component) => {
    return class extends React.Component {
        state = {}

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