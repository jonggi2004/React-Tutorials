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
                    style={{backgroundColor: 'lightblue', width: '500px'}}
                >
                    <h3>이 상자의 높이는 몇인가요?</h3>
                    <br /><br /><br /><br /><br />
                    <b>Div Box - clientHeight: </b>{this.state.height}
                </div>
            </div>
        );
    }
}

export default RefSample;