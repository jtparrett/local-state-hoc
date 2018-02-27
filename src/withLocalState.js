import React from 'react';

export default (Component) => {
    return class extends React.Component {
        state = {}

        setLocalState = (...params) => {
            this.setState(...params);
        }

        render(){
            const {
                setLocalState,
                ...restProps
            } = this.props;

            return (
                <Component 
                    localState={this.state} 
                    setLocalState={this.setLocalState} 
                    {...restProps} />
            );
        }
    }
};