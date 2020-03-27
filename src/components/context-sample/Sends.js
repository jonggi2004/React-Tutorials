import React, { Component } from 'react'
import { SampleConsumer, useSample } from '../../contexts/sample';

class Sends extends Component {
    state = {
        input: ''
    }

    componentDidMount() {
        // 초기 값 설정
        this.setState({
            input: this.props.value,
        });
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // props로 받은 setValue 호출
        this.props.setValue(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button type="submit">설정</button>
            </form>
        );
    }
}

// useSample 사용
export default useSample(Sends);

/* HoC를 사용하지 않을 때
const SendsContainer = () => (
   <SampleConsumer>
       {
           ({state, actions}) => (
               <Sends
                   value={state.value}
                   setValue={actions.setValue}
               />
           )
       }
   </SampleConsumer> 
)

// Sends 대신 Sendscontainer 로
//export default Sends;
export default SendsContainer;
*/