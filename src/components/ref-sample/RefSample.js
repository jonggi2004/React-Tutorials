import React, { Component } from 'react';

class RefSample extends Component {
    state = {
        height: 0
    }

    handleClick = () => {
        this.input.select();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        this.setState({
            height: this.box.clientHeight
        });
    }

    render() {
        return (
            <div>
                <input
                    ref={ref => this.input = ref}
                />
                <button onClick={this.handleClick}>Focus Input</button>
                <div
                    ref={ref => this.box = ref}
                >
                    <h2>TITLE</h2>
                    <p>content</p>
                </div>
                <p>
                    <b>height: </b>{this.state.height}
                </p>
            </div>
        );
    }
}

export default RefSample;