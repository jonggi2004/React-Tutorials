import React, { Component, createContext } from 'react';

const Context = createContext();    // Context 생성

// Provider는 사용 할 값을 설정, Consumer는 설정한 값을 불러 올때 사용
// Context를 여러개 사용할 때 이름이 겹치지 않고 사용하기 위해 prefix사용
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
    state = {
        value: '기본값입니다.'
    }

    // 임의의 객체 선언
    // 변화를 일으키는 함수를 전달할때 한번에 처리하기 위함
    actions = {
        setValue: value => {
            this.setState({value});
        }
    }

    render() {
        const { state, actions} = this;

        // Provider 내에서 사용할 값은 value
        // state와 actions를 객체에 넣어 Provider의 value 값으로 전달한다.
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

// :: HoC 사용
function useSample(WrappedComponent) {
    return function UseSample(props) {
        return (
            <SampleConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </SampleConsumer>
        )
    }
}

export {SampleProvider, SampleConsumer, useSample}