import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    //when it updates
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    updateCount = () => {
        // grab current state and return new
        this.setState(state => {
            return {count: this.state.count + 1}
        });
    }

    render() {
        console.log('counterBUtton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;