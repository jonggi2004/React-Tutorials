import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '',
            phone: '',
            id: 0
        },
        //onRemove: () => console.warn('onRemove not defined'),
        //onUpdate: () => console.warn('onUpdate not defined'),
    }

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({editing: !editing})
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(preProps, preState) {
        // this.state 는 이미 변경된 상태
        // preState 는 변경 이전 상태
        const {info, onUpdate} = this.props;
        if(!preState.editing && this.state.editing) {
            // editing, false -> true
            this.setState({
                name: info.name,
                phone: info.phone,
            })
        }
        if(preState.editing && !this.state.editing) {
            // editing, true -> false
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }

    render() {console.log('render PhoneInfo' + this.props.info.id);
        const infoBox = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        // 수정모드
        const {editing} = this.state;
        if(editing){
            return(
                <div style={infoBox}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        // 일반모드
        const {name, phone} = this.props.info;

        return (
            <div style={infoBox}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;